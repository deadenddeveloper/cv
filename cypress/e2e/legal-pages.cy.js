const locales = ['', 'en', 'de', 'pl', 'by'];
const pages = ['impressum', 'agb', 'datenschutz'];
const pathFor = (locale, page = '') => `${locale ? `/${locale}` : ''}/${page}`;

describe('Legal pages', () => {
	for (const locale of locales) {
		for (const page of pages) {
			it(`renders ${locale || 'ru'} ${page} with localized navigation`, () => {
				cy.visit(pathFor(locale, page));
				cy.get('[data-test="legal-page"]').should('be.visible');
				cy.get('[data-test="profile-sidebar"] img').should('have.attr', 'alt', 'Roman Meyer');
				cy.get('[data-test="main-nav"] a').should('have.length', 7);
				for (const target of pages) {
					cy.get(`[data-test="footer-${target}"]`).should(
						'have.attr',
						'href',
						pathFor(locale, target)
					);
				}
				cy.get('[data-test="goto-work"] a').should(
					'have.attr',
					'href',
					`${locale ? `/${locale}` : '/'}#work`
				);
			});
		}

		it(`returns from ${locale || 'ru'} privacy to the work section`, () => {
			cy.visit(pathFor(locale, 'datenschutz'));
			cy.get('[data-test="goto-work"] a').click();
			cy.location('hash').should('eq', '#work');
			cy.get('#work').should('be.visible');
			cy.get('[data-test="legal-page"]').should('not.exist');
			cy.get('#work').should($section => {
				const top = $section[0].getBoundingClientRect().top;
				expect(top).to.be.within(80, 120);
			});
		});
	}

	for (const width of [320, 375, 768, 1280]) {
		it(`keeps the German footer within a ${width}px viewport`, () => {
			cy.viewport(width, 900);
			cy.visit('/de/datenschutz');
			cy.get('[data-test="site-footer"]').scrollIntoView();
			cy.document().should(doc => {
				expect(doc.documentElement.scrollWidth).to.be.at.most(doc.documentElement.clientWidth);
			});
			cy.get('[data-test="site-footer"] a').each($link => {
				const rect = $link[0].getBoundingClientRect();
				expect(rect.left).to.be.at.least(0);
				expect(rect.right).to.be.at.most(width);
			});
		});
	}
});
