import { createCvDocument } from '~/utils/cvDocument';

let pdfMakePromise;

function loadPdfMake() {
	if (!pdfMakePromise) {
		pdfMakePromise = Promise.all([
			import(/* webpackChunkName: "cv-pdf" */ 'pdfmake/build/pdfmake'),
			import(/* webpackChunkName: "cv-pdf-fonts" */ 'pdfmake/build/vfs_fonts')
		])
			.then(([engine, fonts]) => {
				const pdfMake = engine.default || engine;
				const fontModule = fonts.default || fonts;
				const vfs = fontModule.pdfMake ? fontModule.pdfMake.vfs : fontModule;
				if (typeof pdfMake.addVirtualFileSystem === 'function') pdfMake.addVirtualFileSystem(vfs);
				else pdfMake.vfs = vfs;
				return pdfMake;
			})
			.catch(error => {
				pdfMakePromise = undefined;
				throw error;
			});
	}
	return pdfMakePromise;
}

function loadPhoto(source) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => {
			try {
				const canvas = document.createElement('canvas');
				canvas.width = 360;
				canvas.height = 360;
				const context = canvas.getContext('2d');
				if (!context) throw new Error('Canvas is unavailable');
				context.fillStyle = '#ffffff';
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.drawImage(image, 0, 0, canvas.width, canvas.height);
				resolve(canvas.toDataURL('image/jpeg', 0.9));
			} catch (error) {
				reject(error);
			}
		};
		image.onerror = () => reject(new Error('Could not load the CV photo'));
		image.src = source;
	});
}

export async function downloadCv(model) {
	const [pdfMake, photo] = await Promise.all([
		loadPdfMake(),
		loadPhoto(require('~/assets/img/me.webp'))
	]);
	// All fonts and the photo are embedded. The synchronous stream API lets us
	// catch layout/font errors as well as stream failures and release loading.
	const stream = pdfMake.createPdf(createCvDocument(model, photo)).getStream();
	const blob = await new Promise((resolve, reject) => {
		const parts = [];
		stream.on('data', chunk => parts.push(new Uint8Array(chunk)));
		stream.on('error', reject);
		stream.on('end', () => resolve(new Blob(parts, { type: 'application/pdf' })));
		stream.end();
	});
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	try {
		link.href = url;
		link.download = `romanmeyer_${model.locale}.pdf`;
		document.body.appendChild(link);
		link.click();
	} finally {
		link.remove();
		window.setTimeout(() => URL.revokeObjectURL(url), 10000);
	}
}
