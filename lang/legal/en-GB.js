export default {
	common: {
		footerLabel: 'Legal information',
		navigationLabel: 'CV sections',
		backToCv: 'Back to the CV',
		updated: 'Last updated: {date}'
	},
	impressum: {
		title: 'Legal notice (Impressum)',
		description: 'Website operator and contact information for Roman Meyer.',
		intro: 'Operator information for the personal website romanmeyer.dev.',
		contactTitle: 'Information under section 5 DDG',
		sections: [
			{
				title: 'About this website',
				paragraphs: [
					'This website presents my professional experience, skills and selected projects. Its purpose is professional contact.'
				]
			},
			{
				title: 'Content and copyright',
				paragraphs: [
					'The texts, images and other content I create are protected by applicable copyright law. Rights in third-party trademarks, logos and content remain with their respective owners. Uses permitted by law remain unaffected.'
				]
			},
			{
				title: 'External links',
				paragraphs: [
					'This website links to external websites. Their respective operators are responsible for their content. If you notice unlawful content, you can contact me using the details above.'
				]
			}
		]
	},
	agb: {
		title: 'Terms of use (AGB)',
		description: "Terms for using Roman Meyer's personal website.",
		intro:
			'These notices concern romanmeyer.dev as a personal CV and portfolio website. They are not sales terms for the linked projects.',
		sections: [
			{
				title: 'Purpose and scope',
				paragraphs: [
					'This website provides information about my professional background and projects. Visiting it is free. No orders, bookings or paid services are offered through this website.'
				]
			},
			{
				title: 'Contact and contracts',
				paragraphs: [
					'The presentation of my experience and availability is not a binding contractual offer. Contacting me does not, by itself, create a contract. Any collaboration is subject to separate agreements.'
				]
			},
			{
				title: 'Permitted use',
				paragraphs: [
					'You may view the published information and use it for professional contact within the limits of applicable law. Attacks on the website, bypassing protective measures and misuse of published contact details are prohibited.'
				]
			},
			{
				title: 'Copyright and linked projects',
				paragraphs: [
					"Use of protected content beyond statutory permissions requires the relevant rights holder's consent. External websites and independent projects have their own terms of use and privacy policies."
				]
			},
			{
				title: 'Content, availability and liability',
				paragraphs: [
					'I take care to maintain the information. Content may be updated and technical interruptions may occur. Liability is governed by applicable law. Mandatory statutory rights and claims remain unaffected.'
				]
			},
			{
				title: 'Privacy',
				paragraphs: [
					"Information about the processing of personal data is set out in this website's privacy policy."
				]
			}
		]
	},
	datenschutz: {
		title: 'Privacy policy',
		description: 'Information about personal data processing on romanmeyer.dev.',
		intro:
			'This policy describes personal data processing when you visit romanmeyer.dev or contact me. Linked projects have separate privacy policies.',
		contactTitle: 'Data controller',
		sections: [
			{
				title: 'Website delivery and hosting',
				paragraphs: [
					'This website is hosted by Netlify. Requests involve processing technical connection data, including IP address, time, requested URL, browser and operating system information and, where available, the referring page. This is used to deliver the website, diagnose errors and maintain security.',
					'The legal basis is Article 6(1)(f) GDPR: the legitimate interest in secure and reliable website delivery. Netlify processes these data as part of hosting. Its privacy statement explains that retention depends on the processing purpose and legal obligations.'
				],
				links: [
					{
						label: 'Netlify — Privacy Statement',
						href: 'https://www.netlify.com/privacy/'
					}
				]
			},
			{
				title: 'Language preference and cookies',
				paragraphs: [
					'The website uses the i18n_redirected cookie to remember the language preference. It stores a language code; the software sets a lifetime of up to 365 days. You can delete or block cookies in your browser.',
					'Where storage is necessary to retain an expressly requested language setting, section 25(2), no. 2 TDDDG may apply; this does not replace consent where it is required. The GDPR basis is the interest in the requested display under Article 6(1)(f), or consent where necessary.'
				]
			},
			{
				title: 'No analytics or tracking',
				paragraphs: [
					'This website uses no analytics, advertising or tracking services. I do not create visitor profiles or collect visit or click statistics.'
				]
			},
			{
				title: 'Contacting me',
				paragraphs: [
					'If you contact me by email or telephone, I process the contact details and message content you provide in order to respond. The basis is Article 6(1)(f) GDPR or, where applicable to pre-contractual steps at your request, Article 6(1)(b).',
					'Enquiries are retained only as long as necessary to handle them and meet applicable statutory retention obligations. The website currently has no user accounts or active contact form.'
				]
			},
			{
				title: 'External links and locally served content',
				paragraphs: [
					"Links to social networks and other websites lead to the respective providers. There are no embedded social media feeds. After following a link, the destination provider's privacy information applies. The profile image, project icons and font icons are served with this website."
				]
			},
			{
				title: 'Recipients and international transfers',
				paragraphs: [
					'The hosting provider Netlify and the providers used for email and telephone communication may receive personal data where needed to deliver the website or handle an enquiry. Netlify may also process data outside the European Economic Area, particularly in the USA.',
					"These transfers are subject to the requirements of Articles 44 et seq. GDPR. Netlify describes its safeguards, including standard contractual clauses, in its privacy statement. Further information is available in the provider's privacy statement linked below."
				],
				links: [
					{
						label: 'Netlify — Privacy Statement',
						href: 'https://www.netlify.com/privacy/'
					}
				]
			},
			{
				title: 'Your rights',
				paragraphs: [
					'Subject to the statutory conditions, your rights include access, rectification, erasure, restriction of processing and data portability. You may object to processing based on legitimate interests. You may withdraw consent for future processing.',
					'You may complain to a data protection supervisory authority, particularly in the place of your habitual residence, work or the alleged infringement. For enquiries about your data, use the contact details above.'
				]
			},
			{
				title: 'Changes',
				paragraphs: [
					'This policy will be updated when website features or service providers change.'
				]
			}
		]
	}
};
