const path = require('path');

describe('Interactive elements', () => {
	before(() => {
		cy.visit('/en');
	});

	it('can download CV', () => {
		cy.get('aside')
			.find('[data-test="cv-download"]')
			.should('have.attr', 'href')
			.then(filename => {
				expect(filename).to.match(/\.pdf$/);
			});

		cy.get('aside')
			.find('[data-test="cv-download"]')
			.click();

		const downloadsFolder = Cypress.config('downloadsFolder');
		cy.readFile(path.join(downloadsFolder, 'romanmeyer_en.pdf')).should('exist');
	});

	it('can scroll to blocks', () => {
		const blocks = ['bio', 'skills', 'languages', 'work', 'projects', 'education'];

		for (const block of blocks) {
			cy.get('nav[data-test="main-nav"]')
				.find(`li[data-test="goto-${block}"]`)
				.click({ force: true });
			cy.get(`#${block}`).should('be.visible');
		}
	});

	it('can scroll to top', () => {
		cy.get('[data-test="back-to-top"]').click();
		cy.window()
			.its('scrollY')
			.should('equal', 0);
	});

	it('can open modal with image', () => {
		const modalOpener = cy.get('[data-test="modal-opener"]');

		if (modalOpener) {
			modalOpener.click();
			cy.get('[data-test="modal"]').should('be.visible');
			cy.get('[data-test="modal"]')
				.find('img')
				.should('be.visible');

			cy.get('[data-test="modal-close"]').click();
			cy.get('[data-test="modal"]').should('not.exist');
		}
	});
});
