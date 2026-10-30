import skills from '~/data/skills.json';
import work from '~/data/work.json';
import projects from '~/data/projects.json';
import education from '~/data/education.json';
import languages from '~/data/languages.json';
import links from '~/data/links.json';

export function plainText(value) {
	return String(value || '')
		.replace(/<[^>]*>/g, ' ')
		.replace(
			/&(?:amp|lt|gt|quot|apos|nbsp);/g,
			entity =>
				({
					'&amp;': '&',
					'&lt;': '<',
					'&gt;': '>',
					'&quot;': '"',
					'&apos;': "'",
					'&nbsp;': ' '
				}[entity])
		)
		.replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) =>
			String.fromCodePoint(
				code[0].toLowerCase() === 'x' ? parseInt(code.slice(1), 16) : Number(code)
			)
		)
		.replace(/[\u2010-\u2015\u2212]/g, '-')
		.replace(/\s+/g, ' ')
		.trim();
}

// Snapshot all translated values before the first async operation. A language
// switch while a PDF is being built must not mix languages in the download.
export function createCvModel({ t, locale, email, phone, baseUrl, homePath }) {
	const translate = key => plainText(t(key));
	const siteUrl = `${(baseUrl || 'https://romanmeyer.dev').replace(/\/$/, '')}${homePath || '/'}`;
	return {
		locale,
		name: translate('name'),
		role: translate('post'),
		availability: translate('availability'),
		location: translate('address'),
		email,
		phone,
		siteUrl,
		// The opening paragraph is the professional summary. Leadership and AI
		// details are already included below in skills; the anecdote stays online.
		summary: plainText(String(t('bio.about')).split(/<\/p\s*>/i)[0]),
		headings: Object.fromEntries(
			['bio', 'skills', 'work', 'projects', 'education', 'languages', 'hobbies'].map(key => [
				key,
				translate(`sections.${key}`)
			])
		),
		skills: skills.flatMap(group =>
			group.skills.map(skill => ({
				title: translate(skill.title),
				description: translate(skill.text)
			}))
		),
		work: work
			.slice()
			.reverse()
			.map(place => ({
				time: translate(place.time),
				role: translate(place.post),
				company: translate(place.firm),
				location: translate(place.location),
				description: translate(place.description),
				url: place.link,
				tags: place.tags || []
			})),
		projects: projects.map(project => ({
			name: translate(project.name),
			description: translate(project.description),
			url: project.link,
			tags: project.tags || []
		})),
		education: education
			.slice()
			.reverse()
			.map(item => ({
				time: translate(item.time),
				name: translate(item.name),
				role: translate(item.post),
				speciality: translate(item.speciality),
				location: translate(item.location),
				url: item.link
			})),
		languages: languages.map(language => ({
			name: translate(language.name),
			description: translate(language.description),
			certificate: language.certificate
				? {
						name: language.certificate.name,
						url: new URL(language.certificate.src, siteUrl).href
				  }
				: null
		})),
		links: links
			.filter(link => /^https?:/.test(link.url) && !/wa\.me\//.test(link.url))
			.map(link => ({ name: link.name, url: link.url })),
		hobbies: translate('hobbies.description')
	};
}
