export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	generate: {
		fallback: true
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Roman Meyer',
		htmlAttrs: {
			lang: 'en',
			class: 'bg-skin-base text-skin-base'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	publicRuntimeConfig: {
		email: process.env.EMAIL || 'roman.v.meyer@gmail.com',
		phone: process.env.PHONE || '+49 (151) 7302 5661'
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/tailwind', '~/assets/css/tooltip'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/i18n.js' }, { src: '~/plugins/vue-tooltip.js' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: ['~/components', { path: '~/components/ui/' }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'nuxt-i18n',
		'portal-vue/nuxt'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: process.env.BASE_URL || 'https://romanmeyer.dev/'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vee-validate', 'vee-tooltip'],
		babel: {
			plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
		}
	},

	i18n: {
		locales: [
			{
				code: 'ru',
				iso: 'ru-RU',
				name: 'Русский',
				file: 'ru-RU.js'
			},
			{
				code: 'en',
				iso: 'en-GB',
				name: 'English',
				file: 'en-GB.js'
			},
			{
				code: 'de',
				iso: 'de-DE',
				name: 'Deutsch',
				file: 'de-DE.js'
			},
			{
				code: 'by',
				iso: 'by-BY',
				name: 'Беларуская',
				file: 'by-BY.js'
			}
			/*
      {
        code: 'pl',
        iso: 'pl-PL',
        name: 'Polski',
        file: 'pl-PL.js'
      },
      */
		],
		seo: true,
		baseUrl: 'https://romanmeyer.dev',
		lazy: true,
		langDir: 'lang/',
		defaultLocale: 'ru',
		fallbackLocale: 'ru',
		silentFallbackWarn: true,
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			onlyOnRoot: true
		}
	},

	fontawesome: {
		component: 'fa',
		suffix: true,
		icons: {
			solid: [
				'faFilePdf',
				'faChevronDown',
				'faChevronUp',
				'faChevronLeft',
				'faChevronRight',
				'faFingerprint',
				'faLaptopCode',
				'faBriefcase',
				'faUniversity',
				'faQuoteRight',
				'faUserTie',
				'faAddressCard',
				'faSignature',
				'faHome',
				'faCalendarAlt',
				'faGlobeEurope',
				'faAt',
				'faPhone',
				'faTerminal',
				'faDatabase',
				'faServer',
				'faMobileAlt',
				'faCubes',
				'faCode',
				'faCodeBranch',
				'faAtom',
				'faPastafarianism',
				'faGraduationCap',
				'faLanguage',
				'faPaperPlane',
				'faSpinner',
				'faCheck',
				'faInfoCircle',
				'faExclamationCircle',
				'faSkullCrossbones',
				'faLightbulb',
				'faCertificate',
				'faTimes',
				'faVial',
				'faInfinity'
			],
			brands: [
				'faFacebookF',
				'faInstagram',
				'faGithub',
				'faStackOverflow',
				'faTelegramPlane',
				'faPhp',
				'faJs',
				'faHtml5',
				'faPython',
				'faWordpress',
				'faWindows',
				'faLinkedin'
			]
		}
	}
};
