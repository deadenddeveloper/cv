const accent = '#14636a';
const muted = '#586574';

function heading(text) {
	return { text, style: 'section', headlineLevel: 1 };
}

function entryHeader(title, time, link) {
	return {
		columns: [
			{ text: title, bold: true, link, color: accent, width: '*' },
			{ text: time, width: 150, alignment: 'right', fontSize: 8.4, color: muted }
		],
		columnGap: 8,
		margin: [0, 0, 0, 2]
	};
}

function workEntry(job) {
	return {
		unbreakable: true,
		margin: [0, 0, 0, 5],
		stack: [
			entryHeader(job.company, job.time, job.url),
			{
				text: [
					{ text: job.role, bold: true },
					{ text: job.location ? ` | ${job.location}` : '', color: muted }
				],
				margin: [0, 0, 0, 3]
			},
			{ text: job.description, margin: [0, 0, 0, 3] },
			{ text: job.tags.join(' / '), fontSize: 7.8, color: muted }
		]
	};
}

function projectEntry(project) {
	return {
		width: '*',
		stack: [
			{ text: project.name, bold: true, color: accent, link: project.url, margin: [0, 0, 0, 3] },
			{ text: project.description, margin: [0, 0, 0, 3] },
			{ text: project.tags.join(' / '), fontSize: 7.8, color: muted },
			{
				text: project.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
				link: project.url,
				fontSize: 7.8,
				color: accent,
				margin: [0, 2, 0, 0]
			}
		]
	};
}

export function createCvDocument(model, photo) {
	const content = [
		{
			columns: [
				{
					width: '*',
					stack: [
						{ text: model.name, fontSize: 22, bold: true, color: accent, margin: [0, 0, 0, 3] },
						{ text: model.role, fontSize: 12, bold: true, margin: [0, 0, 0, 3] },
						{ text: model.availability, fontSize: 9, color: accent, margin: [0, 0, 0, 5] },
						{ text: model.location, fontSize: 8.5, margin: [0, 0, 0, 3] },
						{
							text: [
								{ text: model.email, link: `mailto:${model.email}` },
								{ text: `  |  ${model.phone}`, link: `tel:${model.phone.replace(/[^+\d]/g, '')}` }
							],
							fontSize: 8.5,
							margin: [0, 0, 0, 3]
						},
						{
							text: [
								{ text: new URL(model.siteUrl).host, link: model.siteUrl, color: accent },
								...model.links.flatMap(link => [
									{ text: '  |  ', color: muted },
									{ text: link.name, link: link.url, color: accent }
								])
							],
							fontSize: 8
						}
					]
				},
				{ image: photo, width: 76, height: 76 }
			],
			columnGap: 8,
			margin: [0, 0, 0, 5]
		},
		heading(model.headings.bio),
		{ text: model.summary },
		heading(model.headings.skills),
		...model.skills.map(skill => ({
			text: [{ text: `${skill.title}: `, bold: true, color: accent }, { text: skill.description }],
			margin: [0, 0, 0, 3],
			unbreakable: true
		}))
	];

	if (model.work.length) {
		content.push({
			unbreakable: true,
			stack: [heading(model.headings.work), workEntry(model.work[0])]
		});
		content.push(...model.work.slice(1).map(workEntry));
	}
	const projectRows = [];
	for (let index = 0; index < model.projects.length; index += 2) {
		projectRows.push({
			unbreakable: true,
			columns: model.projects.slice(index, index + 2).map(projectEntry),
			columnGap: 18,
			margin: [0, 0, 0, 6]
		});
	}
	if (projectRows.length) {
		content.push(
			{ unbreakable: true, stack: [heading(model.headings.projects), projectRows[0]] },
			...projectRows.slice(1)
		);
	}
	const education = model.education.map(item => ({
		unbreakable: true,
		margin: [0, 0, 0, 6],
		stack: [
			entryHeader(item.name, item.time, item.url),
			{ text: item.role, bold: true },
			{ text: `${item.speciality} | ${item.location}`, color: muted, fontSize: 8.4 }
		]
	}));
	if (education.length)
		content.push(
			{ unbreakable: true, stack: [heading(model.headings.education), education[0]] },
			...education.slice(1)
		);
	content.push(
		heading(model.headings.languages),
		...model.languages.map(language => ({
			text: [
				{ text: `${language.name}: `, bold: true },
				{ text: language.description },
				...(language.certificate
					? [
							{
								text: ` (${language.certificate.name})`,
								link: language.certificate.url,
								color: accent
							}
					  ]
					: [])
			],
			margin: [0, 0, 0, 3],
			unbreakable: true
		})),
		{ unbreakable: true, stack: [heading(model.headings.hobbies), { text: model.hobbies }] }
	);

	return {
		pageSize: 'A4',
		pageMargins: [32, 28, 32, 32],
		info: {
			title: `${model.name} - ${model.role}`,
			author: model.name,
			subject: model.role,
			keywords: 'CV, resume'
		},
		defaultStyle: { font: 'Roboto', fontSize: 9, lineHeight: 1, color: '#26313f' },
		styles: { section: { fontSize: 11, bold: true, color: accent, margin: [0, 7, 0, 4] } },
		footer: (page, pages) => ({
			columns: [
				{ text: `${model.name} | ${new URL(model.siteUrl).host}`, link: model.siteUrl },
				{ text: `${page} / ${pages}`, alignment: 'right' }
			],
			margin: [32, 12, 32, 0],
			fontSize: 7.5,
			color: muted
		}),
		pageBreakBefore: (node, following) => node.headlineLevel === 1 && following.length === 0,
		content
	};
}
