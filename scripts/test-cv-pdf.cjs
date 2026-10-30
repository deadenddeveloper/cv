const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const babel = require('@babel/core');

const root = path.resolve(__dirname, '..');
const locales = ['ru-RU', 'en-GB', 'de-DE', 'pl-PL', 'by-BY'];

function loadSource(filename, stubs = {}, globals = {}) {
  const fullPath = path.join(root, filename);
  let source = fs.readFileSync(fullPath, 'utf8');
  if (filename.endsWith('.vue')) source = source.match(/<script>([\s\S]*?)<\/script>/)[1];
  const compiled = babel.transformSync(source, {
    filename: fullPath, configFile: false, babelrc: false,
    plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')]
  }).code;
  const record = { exports: {} };
  const localRequire = id => {
    if (Object.prototype.hasOwnProperty.call(stubs, id)) return stubs[id];
    return require(id.startsWith('~/') ? path.join(root, id.slice(2)) : id);
  };
  vm.runInNewContext(`(function(require, module, exports) { ${compiled}\n})`, { URL, console, ...globals })(localRequire, record, record.exports);
  return record.exports;
}

function localeData(locale) {
  const legal = loadSource(`lang/legal/${locale}.js`).default;
  return loadSource(`lang/${locale}.js`, { [`./legal/${locale}`]: { default: legal, __esModule: true } }).default;
}

function translate(data, key) {
  const value = key.split('.').reduce((item, part) => item && item[part], data);
  assert.strictEqual(typeof value, 'string', `Missing translation: ${key}`);
  return value;
}

const { createCvModel } = loadSource('utils/cvModel.js');
const { createCvDocument } = loadSource('utils/cvDocument.js');

function modelFor(locale) {
  const data = localeData(locale);
  return createCvModel({
    t: key => translate(data, key), locale: locale.split('-')[0],
    email: 'roman.v.meyer@gmail.com', phone: '+49 (151) 7302 5661',
    baseUrl: 'https://romanmeyer.dev', homePath: locale === 'ru-RU' ? '/' : `/${locale.split('-')[0]}`
  });
}

function getPdfBuffer(document) {
  const pdfMake = require('pdfmake/build/pdfmake');
  const fonts = require('pdfmake/build/vfs_fonts');
  pdfMake.vfs = fonts.pdfMake ? fonts.pdfMake.vfs : fonts;
  const stream = pdfMake.createPdf(document).getStream();
  return new Promise((resolve, reject) => {
    const parts = [];
    stream.on('data', part => parts.push(Buffer.from(part)));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(parts)));
    stream.end();
  });
}

async function testButton() {
  let release;
  const calls = [];
  let shouldFail = false;
  const downloadCv = model => {
    calls.push(model);
    if (shouldFail) return Promise.reject(new Error('Simulated download failure'));
    return new Promise(resolve => { release = resolve; });
  };
  const component = loadSource('components/markup/CvLink.vue', {
    '~/utils/cvModel': { createCvModel }, '~/utils/downloadCv': { downloadCv }
  }, { window: { requestAnimationFrame: callback => callback(), setTimeout: callback => callback() } }).default;
  let data = localeData('de-DE');
  const state = {
    ...component.data(), $t: key => translate(data, key),
    $i18n: { locale: 'de', __baseUrl: 'https://romanmeyer.dev' },
    $config: { email: 'test@example.com', phone: '+49 123' },
    localePath: () => '/de'
  };
  const pending = component.methods.handleClick.call(state);
  assert(state.isGenerating, 'Loading starts immediately');
  await component.methods.handleClick.call(state);
  await Promise.resolve();
  assert.strictEqual(calls.length, 1, 'Repeated clicks must not start another PDF');
  data = localeData('ru-RU');
  state.$i18n.locale = 'ru';
  assert.strictEqual(calls[0].locale, 'de', 'The original language stays fixed');
  assert.strictEqual(calls[0].headings.skills, 'Kompetenzen');
  release();
  await pending;
  assert(!state.isGenerating && !state.hasError, 'Loading is released after success');
  shouldFail = true;
  await component.methods.handleClick.call(state);
  assert(!state.isGenerating && state.hasError, 'Failure releases loading and shows the error');
  shouldFail = false;
  const retry = component.methods.handleClick.call(state);
  await Promise.resolve();
  assert(!state.hasError && state.isGenerating, 'The user can retry after a failure');
  release();
  await retry;
  console.log('Button: loading, repeated clicks, locale snapshot, error and retry OK');
}

async function main() {
  await testButton();
  const sampleDirectory = process.argv[2];
  if (sampleDirectory) fs.mkdirSync(sampleDirectory, { recursive: true });
  const photo = `data:image/png;base64,${fs.readFileSync(path.join(root, 'assets/img/me.png')).toString('base64')}`;
  for (const locale of locales) {
    const model = modelFor(locale);
    assert.strictEqual(model.work.length, 7);
    assert.strictEqual(model.work[0].company, 'BauProPlus');
    assert.strictEqual(model.projects[0].name, 'MoneyDude');
    assert.strictEqual(model.projects.length, 4);
    assert.strictEqual(model.skills.length, 8);
    assert.strictEqual(model.languages.length, 7);
    assert.strictEqual(model.education.length, 2);
    assert(model.summary && !/<[^>]*>/.test(model.summary));
    const document = createCvDocument(model, photo);
    assert.strictEqual(document.content[0].columns[1].image, photo);
    const buffer = await getPdfBuffer(document);
    assert.strictEqual(buffer.subarray(0, 5).toString(), '%PDF-');
    const pages = (buffer.toString('latin1').match(/\/Type \/Page\b/g) || []).length;
    assert(pages > 0 && pages <= 3, `Expected a compact CV, got ${pages} pages for ${locale}`);
    if (sampleDirectory) fs.writeFileSync(path.join(sampleDirectory, `romanmeyer_${model.locale}.pdf`), buffer);
    console.log(`${locale}: ${pages} pages, ${buffer.length} bytes, all CV sections present`);
  }
}

module.exports = { modelFor, createCvDocument, getPdfBuffer };
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
