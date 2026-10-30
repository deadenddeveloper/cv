import legal from './legal/en-GB';

export default {
	legal,
	meta: {
		impressum: {
			title: `Roman Meyer — ${legal.impressum.title}`,
			description: legal.impressum.description
		},
		agb: {
			title: `Roman Meyer — ${legal.agb.title}`,
			description: legal.agb.description
		},
		datenschutz: {
			title: `Roman Meyer — ${legal.datenschutz.title}`,
			description: legal.datenschutz.description
		},

		index: {
			title: 'Roman Meyer — Tech Lead / Web Architect',
			description:
				'Tech Lead and Web Architect. Full stack development since 2010: PHP, Laravel, JavaScript, TypeScript, Vue and React.'
		}
	},

	name: 'Roman Meyer',
	post: 'Tech Lead / Web Architect',
	availability: 'Open to Tech Lead or Web Architect opportunities',
	full_name: 'Roman Meyer',
	address: 'Buxtehude, Lower Saxony, Germany',
	date_of_birth: 'Februar 9, 1991',
	place_of_birth: 'Slavyanka, Primorsky Krai, Russia',

	back_to_top: 'Back to top',
	certificate: 'Certificate',
	copyright: '&copy; 2021 Roman Meyer',
	page_not_found: 'Page not found',
	go_home: 'Go home',

	cv: {
		generating: "Generating PDF…",
		error: "Could not create the PDF. Please try downloading the CV again.",
		download: 'CV download'
	},

	sections: {
		hobbies: 'Hobbies',
		bio: 'About me',
		skills: 'Skills',
		languages: 'Languages',
		work: 'Work',
		education: 'Education',
		contacts: 'Contacts',
		projects: 'Projects'
	},

	bio: {
		about:
			"<p>Hi, I'm Roman. I've been working professionally in web development since 2010. I've gone from CMS websites and freelance work to building and maintaining large web projects at German companies and an international agency. My background is full stack: PHP, JavaScript and TypeScript, with extensive experience in Laravel and a range of frontend frameworks.</p><p>I earned my first million back in college, writing Delphi and C/C++ coursework for classmates. It was in Belarusian roubles, admittedly. The technology and scale of the work have changed a lot since then, but I still enjoy figuring out how things work and how to improve them.</p><p>Over the past few years, I've gradually shifted towards technical leadership, spending more time on mentoring, organising work and managing projects. I enjoy looking at a project as a whole: understanding the problem, choosing suitable solutions and helping the team deliver them. I'm now looking for a Tech Lead or Web Architect role where I can put that experience to work and take greater responsibility for a project's technical direction.</p><p>AI has become part of my work too. I use it where it helps me move a task forward, but I check its suggestions and make sure I understand the code that goes into the project. I want to know why a solution works, how to maintain it and what problems it might cause later.</p>",
		full_name: 'Full name',
		location: 'Location',
		date_of_birth: 'Date of birth',
		place_of_birth: 'Place of birth',
		phone: 'Phone',
		email: 'E-mail'
	},

	skills: {
		leadership: {
			title: 'Technical leadership and architecture',
			description:
				'Stack selection, architecture design and development planning. Led a small team of developers and a designer, carried out code reviews and mentored junior developers.'
		},
		backend: {
			title: 'Backend',
			description:
				'My main stack is PHP and Laravel. I also have experience with other PHP frameworks, Node.js and Express. I used to use Python extensively for practical tasks, but advances in AI tools have removed that need in my current work.'
		},
		frontend: {
			title: 'Frontend',
			description:
				'JavaScript, TypeScript, Vue.js / Nuxt and React / Next.js. I particularly enjoyed Svelte and SvelteKit, though market demand meant that experience was limited to a couple of personal projects. Experience with Qwik, Angular and Electron. HTML, CSS, preprocessors and Tailwind.'
		},
		maintenance: {
			title: 'Working with existing code',
			description:
				'I find my way around unfamiliar projects, track down problems and refactor code. I draw on OOP, design patterns and an understanding of algorithms and data structures. I try to leave code that the next developer can understand.'
		},
		databases: {
			title: 'Databases',
			description:
				'I work with relational databases: MySQL, PostgreSQL and SQLite. I know SQL and also have experience with MongoDB.'
		},
		infrastructure: {
			title: 'Testing and infrastructure',
			description:
				'Jest, Mocha, Cypress and Playwright. Git, CI/CD, Docker, and setting up environments for web development and application deployment.'
		},
		ai: {
			title: 'AI in development',
			description:
				"I started with GitHub Copilot and JetBrains AI tools. These days I prefer GPT and Codex, as I'm happy with the quality of their work. I provide context and constraints, check proposed solutions and understand the code before using it in a project."
		},
		cms: {
			title: 'CMS',
			description:
				'Experience building and maintaining projects with WordPress, Joomla, MODX, Drupal, OpenCart, PrestaShop, 1C-Bitrix, BigCommerce, FirstSpirit, AEM and TYPO3.'
		}
	},

	languages: {
		reading: 'Reading',
		writing: 'Writing',
		listening: 'Listening',
		speaking: 'Speaking',
		ru: {
			name: 'Russian',
			description: 'Native language.'
		},
		by: {
			name: 'Belarussian',
			description:
				'Also native, but only used in school. Speaking Belarussian is a bit complicated now.'
		},
		ua: {
			name: 'Urkainian',
			description:
				'In virtue of similarity with Russian and Belarussian I understand everything very good. But writing and speaking are pretty hard.'
		},
		en: {
			name: 'English',
			description:
				'I am on learning English since I was five years old. I have no big problems, only some confusions with using times.'
		},
		de: {
			name: 'German',
			description:
				'I have been learning German since 2019, mostly on my own. I have practice every day. There are difficulties, the expression "Das Leben ist zu kurz, um Deutsch zu lernen" is not senseless.'
		},
		pl: {
			name: 'Polish',
			description: "My understanding is good, but I can't use the language very well."
		},
		es: {
			name: 'Spanish',
			description:
				'New challenge for me. The more I study, the more I understand that it is not as easy as could seem.'
		}
	},

	work: {
		bauproplus: {
			time: 'January 2026 — November 2026',
			post: 'Tech Lead',
			firm: 'BauProPlus',
			location: 'Nastätten, Germany',
			description:
				"Developed a platform to automate a construction company's workflows: time tracking, personnel management and project planning. Chose a monorepo with a Laravel API and Vue 3 frontend. Designed the core architecture and data models, set up CI and deployment. Prepared instructions and guidelines for AI-assisted development so that changes would fit the project's architecture. The company later discontinued development."
		},
		svitanak: {
			time: 'August 2010 - October 2013',
			post: 'Software engineer',
			firm: 'OJSC Svitanak',
			location: 'Zhodino, Belarus',
			description:
				'I started to work right after college. The work consisted of the automation of various processes within the framework of a large sewing industry. Basically, I helped the marketing, finance and hostel departments. I developed application software in Delphi 7 for them. I saved people a lot of time. At first, I worked with enthusiasm, but it soon became clear that the state enterprise was not interested in intelligent specialists. So I quit.'
		},
		itgarant: {
			time: 'November 2013 - December 2015',
			post: 'Full stack web-developer',
			firm: 'ITGarant',
			location: 'Minsk, Belarus',
			description:
				'I made turnkey web-sites on Joomla and wrote custom components for that CMS. One of the projects has won the "Russian Developers Cup 2014 from the Mail.ru group". Besides, I came across projects on Drupal and a lot of self-made sites, which required bugfix and refactoring. I also made a simple application for Windows 8.'
		},
		freelance: {
			time: 'January 2016 - June 2018',
			post: 'Full stack web-developer',
			firm: 'Freelance',
			location: '',
			description:
				'This was a very carefree period of my life. I have collaborated with several organizations in the CIS and gained a ton of experience. Most of all I came across orders for 1C-Bitrix. I was doing a lot of parsing of specific data in cooperation with one large company.'
		},
		recoma: {
			time: 'July 2018 - august 2021',
			post: 'Full stack web-developer',
			firm: 'RECO.MA GmbH',
			location: 'Beselich, Germany',
			description:
				'I got a job offer with relocation to Germany and did not hesitate. I did a few big and ambitious projects in Laravel. Also I maintained a couple of sites on Wordpress and developed custom user interfaces.'
		},
		vke: {
			time: 'September 2021 - august 2022',
			post: 'Full stack web-developer',
			firm: 'von Kéler Engineering GmbH',
			location: 'Braunschweig, Germany',
			description:
				'I became a part of the web development team. At first I was engaged in internal projects of the company, and then I did an interesting thing on React inside of Electron. In addition, I took part in the rework of a low-level application for Siemens.'
		},
		digitas: {
			time: 'September 2022 — December 2025',
			post: 'Full stack web-developer',
			firm: 'Digitas GmbH',
			location: 'Cologne, Germany',
			description:
				'This is a huge international agency that does large web projects. I took part in the development and support of Grohe, Berlin Airport, ITZ Bund, Bindella, where there is a pile of different technologies.'
		}
	},

	education: {
		bscli: {
			time: '2006 - 2010',
			speciality: 'Information technology software',
			post: 'Technician-programmer (specialized secondary education)',
			name: 'Baranovichi State College of Light Industry V.E. Chernysheva',
			location: 'Baranovichi, Belarus'
		},
		grsu: {
			time: '2010 - 2015',
			speciality: 'Information technology software',
			post: 'Software engineer (higher education)',
			name: 'Yanka Kupala State University of Grodno',
			location: 'Grodno, Belarus'
		}
	},

	contacts: {
		form: {
			name: 'Your name',
			email: 'Your email',
			comment: 'Message text',
			required: 'Field is required',
			send: 'Send a message',
			sending: 'Sending...',
			success: 'Your message has been successfully sent',
			error: 'Something went wrong'
		}
	},

	projects: {
		moneydude: {
			name: 'MoneyDude',
			description:
				'A service for tracking shared expenses on trips and in everyday life. Supports different ways to split costs, multiple currencies and a clear view of who owes whom. I regularly use it with friends and develop it around our real needs too.'
		},
		metalhead: {
			name: 'Metalhead',
			description:
				"I'm building a portal for heavy music fans and musicians to make finding information and connecting with others easier. Plans include a knowledge base, events and tools for organising shared trips to gigs and festivals. The project is in development."
		},
		randby: {
			name: 'Rand.by',
			description:
				'A service for generating random numbers, passwords, lists and other values. I rewrote it from plain JavaScript to Nuxt and added a public API built with Express. I regularly use the password generator myself.'
		},
		travelcalc: {
			name: "Traveller's calculator",
			description:
				'A small personal project to try out Qwik and React component integration. Converts prices into a familiar currency and shows how much working time a purchase costs.'
		}
	},

	hobbies: {
		description: 'Outside work: futsal and football, heavy music, computer games, books and travel.'
	},

	validation: {
		alpha: 'Field may only contain alphabetic characters',
		alpha_spaces: 'Field may only contain alphabetic characters as well as spaces',
		email: 'Field must be a valid email',
		min: 'Field must be at least {length} characters',
		required: 'Field is required'
	}
};
