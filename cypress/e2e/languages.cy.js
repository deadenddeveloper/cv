const langs = ['en', 'de', 'by'];
const text = {
	en: 'Dead end web developer',
	de: 'Dead End Web Entwickler',
	by: 'Dead end web распрацоўшчык'
};

describe('Switching languages', () => {
	before(() => {
		cy.visit('/');
	});

	it('can load russian as default', () => {
		cy.get('aside')
			.find('h2')
			.contains('Dead end web разработчик');
	});

	for (const lang of langs) {
		it(`can switch to ${lang} and correct render texts`, () => {
			cy.get('header')
				.find(`[data-test="lang-switcher"] a[href="/${lang}"]`)
				.click();

			cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${lang}`);

			cy.get('aside')
				.find('h2')
				.contains(text[lang]);

			cy.get('[data-test="cv-download"]')
				.should('have.attr', 'href')
				.then(filename => {
					expect(filename).to.equal(`/cv/romanmeyer_${lang}.pdf`);
				});
		});
	}
});
