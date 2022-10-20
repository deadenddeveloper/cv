import links from '../../data/links';
import skills from '../../data/skills';
import languages from '../../data/languages';
import work from '../../data/work';
import projects from '../../data/projects';
import education from '../../data/education';

describe('Home page content', () => {
	before(() => {
		cy.visit('http://localhost:3000');
	});

	context('aside', () => {
		it('correct renders social links', () => {
			cy.get('aside')
				.find('[data-test="social-links"] a')
				.should('have.length', links.length);

			for (const link of links) {
				cy.get('aside').find(`[data-test="social-links"] a[href="${link.url}"]`);
			}
		});
	});

	context('main', () => {
		it('correct renders skills', () => {
			cy.get('main')
				.find('#skills [data-test^="skill-group"]')
				.should('have.length', skills.length);

			for (const group of skills) {
				cy.get('main')
					.find(`#skills [data-test="skill-group-${group.name}"] li`)
					.should('have.length', group.skills.length);
			}
		});

		it('correct renders languages', () => {
			cy.get('main')
				.find('#languages [data-test="language-item"]')
				.should('have.length', languages.length);
		});

		it('correct renders work', () => {
			cy.get('main')
				.find('#work [data-test="work-item"]')
				.should('have.length', work.length);
		});

		it('correct renders projects', () => {
			cy.get('main')
				.find('#projects [data-test="projects-item"]')
				.should('have.length', projects.length);
		});

		it('correct renders education', () => {
			cy.get('main')
				.find('#education [data-test="education-item"]')
				.should('have.length', education.length);
		});
	});
});
