describe('Home page markup', () => {
	before(() => {
		cy.visit('/');
	});

	context('header', () => {
		it('has logo', () => {
			cy.get('header')
				.find('img[alt="Logo"]')
				.should('be.visible');
		});

		it('has lang switcher', () => {
			cy.get('header').find('[data-test="lang-switcher"]');
		});
	});

	context('aside', () => {
		it('has photo', () => {
			cy.get('aside').find('img[alt="Roman Meyer"]');
		});

		it('has name', () => {
			cy.get('aside')
				.find('h1')
				.contains('Роман Майер');
		});

		it('has post', () => {
			cy.get('aside')
				.find('h2')
				.contains('Dead end web разработчик');
		});

		it('has social links', () => {
			cy.get('aside').find('[data-test="social-links"]');
		});

		it('has download button', () => {
			cy.get('aside').find('[data-test="cv-download"]');
		});
	});

	context('navigation', () => {
		it('has navigation', () => {
			cy.get('nav[data-test="main-nav"]');
		});

		it('has back to top button', () => {
			cy.get('[data-test="back-to-top"]');
		});
	});

	context('main', () => {
		const blocks = ['bio', 'skills', 'languages', 'work', 'projects', 'education', 'contacts'];

		for (const block of blocks) {
			it(`has ${block}`, () => {
				cy.get('main').find(`#${block}`);
			});
		}
	});
});
