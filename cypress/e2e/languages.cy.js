const langs = ['ru', 'en', 'de', 'by'];
const text = {
	ru: 'Dead end web разработчик',
	en: 'Dead end web developer',
	de: 'Dead End Web Entwickler',
	by: 'Dead end web распрацоўшчык'
};

describe('Switching languages', () => {
	it('can correct load language', () => {
		cy.visit('/', {
			onBeforeLoad(win) {
				Object.defineProperty(win.navigator, 'language', {
					value: 'en-GB'
				});
			}
		})
			.its('navigator.language')
			.should('equal', 'en-GB');
	});

	for (const lang of langs) {
		const l = lang === 'ru' ? '' : lang;
		it(`can switch to ${lang} and correct render texts`, () => {
			cy.get('header')
				.find(`[data-test="lang-switcher"] a[href="/${l}"]`)
				.click({ force: true });

			cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${l}`);

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
