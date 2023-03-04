export default {
	meta: {
		index: {
			title: 'Роман Майер - Dead end developer',
			description: 'full stack web разработчик web-разработка php laravel javascript nuxt vue'
		}
	},

	name: 'Роман Майер',
	full_name: 'Роман Владимирович Майер',
	post: 'Dead end web разработчик',
	address: 'Букстехуде, Нижняя Саксония, Германия',
	date_of_birth: '9 февраля 1991',
	place_of_birth: 'Славянка, Приморский край, Россия',

	back_to_top: 'Наверх',
	certificate: 'Сертификат',
	copyright: '&copy; 2021 Roman Meyer',
	page_not_found: 'Страница не существует',
	go_home: 'На главную',

	cv: {
		download: 'Скачать резюме'
	},

	sections: {
		bio: 'Обо мне',
		skills: 'Навыки',
		languages: 'Языки',
		work: 'Работа',
		education: 'Образование',
		testimonials: 'Рекомендации',
		clients: 'Клиенты',
		contacts: 'Контакты',
		projects: 'Проекты'
	},

	bio: {
		about:
			'<p>Привет. Меня зовут Роман. Я уже больше двенадцати лет занимаюсь веб-разработкой.</p><p>Свой первый миллион я заработал в 17 лет, еще до того, как перешел к своей текущей деятельности. Правда, этот миллион был не евро и не долларов, а белорусских рублей, так что заработать его было несложно. Я просто делал курсовые работы на Delphi и C/C++ своим одногруппникам в колледже. Это было в период получения моего первого образования, где я приобрел специальность "техник-программист".</p><p>После коллежда я устроился на работу, где не нужно было особенно напрягаться и я спокойно втянулся в мир веба. Параллельно с этим я получал бессмысленное высшее образование, лишь бы только не идти в армию.</p><p>Три года сидения в некомфортном помещении и просмотра сериалов порядком надоели мне и я уволился. Мой сторонний доход вдвое превосходил зарплату, так что я мог себе позволить просто перейти на фриланс.</p><p>Начав в 2010-м году с голого PHP, я получил много опыта с Joomla, Wordpress, MODx, Prestashop, Opencart и даже 1С-Битрикс, и наконец перешел к фреймворкам. Последнее время я активно писал на Laravel, открыл для себя Nuxt.js и Tailwind, а в настоящее время занимаюсь преимущественно фронтендом, используя все популярные фреймворки.</p>',
		full_name: 'Полное имя',
		location: 'Местоположение',
		date_of_birth: 'Дата рождения',
		place_of_birth: 'Место рождения',
		phone: 'Телефон',
		email: 'E-mail'
	},

	skills: {
		php:
			'Знание PHP (plain PHP, Phalcon, Laravel, поверхностно Sylex и Lumen). Сейчас преимущественно работаю с Laravel.',
		js:
			'Знание JavaScript (plain JS, jQuery‚ Vue.js/Vuex/Nuxt.js, Alpine, Svelte, React, Qwik, Electron, Node/Express), TypeScript',
		html: 'Знание HTML, CSS (SASS, SCSS, Stylus), умение верстать (Bootstrap, Tailwind).',
		delphi: 'Знание Delphi 7, Pascal.',
		python: 'Знание Python на уровне решения прикладных задач.',

		cms:
			'Опыт работы с CMS Joomla, MODX, Drupal, Opencart, 1С-Битрикс, Prestashop, Wordpress и кучей самоделок.',
		db: 'Опыт работы с базами данных (MySQL‚ Postgres, Informix‚ dBase, Mongo)‚ знание SQL.',
		testing: 'Опыт автоматического тестирования (Jest, Mocha, Cypress, Playwright).',
		deploy: 'Опыт в CI/CD (Github, Gitlab, Bitbucket, AWS).',
		environment:
			'Опыт установки и настройки окружения для веб-разработки (Homestead, PHP, MySQL, Apache, Nginx, Docker) на Windows и Unix.',
		win: 'Опыт создания приложений для Windows 8 (HTML+JS).',
		winphone: 'Опыт создания мобильных приложений для Windows Phone 8 (HTML+JS, XAML+C#).',

		oop: 'Понимание принципов ООП, MVC, шаблонов проектирования.',
		coding:
			'Умение разбираться в чужом коде‚ привычка писать самодокументированный код и добавлять комментарии там, где они действительно нужны.',
		vcs: 'Умение работать с системами контроля версий.',
		algorithm: 'Понимание алгоритмизации‚ структур данных‚ оценки сложности алгоритмов.',
		spaghetti: 'Умение понять и отрефакторить любой спагетти-код.',
		learn: 'Быстрая обучаемость.'
	},

	languages: {
		reading: 'Чтение',
		writing: 'Письмо',
		listening: 'Аудирование',
		speaking: 'Говорение',
		ru: {
			name: 'Русский',
			description: 'Родной язык. С ним у меня никаких проблем нет.'
		},
		by: {
			name: 'Белорусский',
			description:
				'Тоже родной, но вне школы я никогда его не практиковал. Говорить на нем сейчас сложновато.'
		},
		ua: {
			name: 'Украинский',
			description:
				'В силу схожести с русским и белорусским понимаю все отлично. Но писать и говорить могу едва-едва.'
		},
		en: {
			name: 'Английский',
			description:
				'Учу лет с пяти, особых трудностей не испытываю. Есть некоторая путаница с временами, но это не критично.'
		},
		de: {
			name: 'Немецкий',
			description:
				'Учу три года, преимущественно самостоятельно. Практикую каждый день. Сложности есть только с выражением своих мыслей.'
		},
		pl: {
			name: 'Польский',
			description:
				'Слышу с детства, так что понимаю все почти идеально. Пишу отвратительно из-за особенностей грамматики, говорю ниже среднего.'
		},
		es: {
			name: 'Испанский',
			description: 'Новый вызов для меня.'
		}
	},

	work: {
		svitanak: {
			time: 'Август 2010 - октябрь 2013',
			post: 'Инженер-программист',
			firm: 'ОАО Свитанок',
			location: 'г. Жодино, Беларусь',
			description:
				'Здесь я стал работать по распределению сразу после колледжа. Работа заключалась в автоматизации разных процессов в рамках крупного швейного производства. В основном я помогал отделам маркетинга, финансов и общежитий, писал для них прикладной софт на Delphi 7. Сэкономил людям кучу времени. Первое время я работал с энтузиазмом, но вскоре стало ясно, что государственное предприятие не заинтересовано в толковых специалистах, и я просто смотрел сериалы и занимался своими делами. Уволился, потому что надоело рано вставать и мерзнуть в плохо отапливаемом помещении.'
		},
		itgarant: {
			time: 'Ноябрь 2013 - декабрь 2015',
			post: 'Full stack web-разработчик',
			firm: 'ITGarant',
			location: 'г. Минск, Беларусь',
			description:
				'Делал под ключ сайты на Joomla, писал кастомные компоненты для этой CMS. Один из проектов выиграл Russian Developers Cup 2014 от Mail.ru group. Кроме того, попадались проекты на Drupal и много самописных сайтов, которые требовали мелких правок. Также делал несложное приложение под Windows 8.'
		},
		freelance: {
			time: 'Январь 2016 - июнь 2018',
			post: 'Full stack web-разработчик',
			firm: 'Фриланс',
			location: '',
			description:
				'Этот период был самым беззаботным, но в то же время и опасным, потому что мог сильно меня расслабить. Я сотрудничал с несколькими организациями в СНГ и получил тонну опыта. Больше всего попадалось заказов на 1С-Битрикс. Очень много занимался парсингом специфичных данных в рамках сотрудничества с одной крупной фирмой.'
		},
		recoma: {
			time: 'Июль 2018 - август 2021',
			post: 'Full stack web-разработчик',
			firm: 'RECO.MA GmbH',
			location: 'Безелих, Германия',
			description:
				'Получил предложение переехать в Германию и не раздумывал. Делал несколько крупных и амбициозных проектов на Laravel, параллельно обслуживал пару сайтиков на Wordpress и писал кастомные пользовательские интерфейсы.'
		},
		vke: {
			time: 'Сентябрь 2021 - август 2022',
			post: 'Full stack web-разработчик',
			firm: 'von Kéler Engineering GmbH',
			location: 'Брауншвейг, Германия',
			description:
				'Стал частью команды веб-разработчиков. Поначалу занимался внутренними проектами компании, а потом делал интересную штуку на React внутри Electron. Кроме этого, принимал участие в доработке низкоуровневого приложения для Siemens.'
		},
		pixelpark: {
			time: 'Сентябрь 2022 - по настоящее время',
			post: 'Full stack web-разработчик',
			firm: 'Digitas Pixelpark GmbH',
			location: 'Кёльн, Германия',
			description: 'Примкнул к большой команде, которая занимается крупными веб-проектами.'
		}
	},

	education: {
		bscli: {
			time: '2006 - 2010',
			speciality: 'Программное обеспечение информационных технологий',
			post: 'Техник-программист',
			name: 'Барановичский государственный колледж легкой промышленности им. В.Е. Чернышева',
			location: 'г. Барановичи, Беларусь'
		},
		grsu: {
			time: '2010 - 2015',
			speciality: 'Программное обеспечение информационных технологий',
			post: 'Инженер-программист',
			name: 'Гродненский государственный университет им. Я. Купалы',
			location: 'г. Гродно, Беларусь'
		}
	},

	projects: {
		randby: {
			name: 'Rand.by',
			description:
				'Простенький сервис для генерации всяких случайных значений. Не так давно нашел время, наконец переписал проект из чистого JS в Nuxt, а также приделал открытое API, написанное на Express. Сам регулярно пользуюсь генератором паролей.'
		},
		kinda: {
			name: 'Что-то вроде блога',
			description:
				'Мой личный тематический блог. Он сильно узкопрофильный, создавался исключительно для удобства распространения среди друзей и знакомых. По статистике вижу, что люди находят и читают. Долгое время планирую глобальные переделки, чтобы было удобнее администрировать посты.'
		},
		blurhash: {
			name: 'BlurHash демо',
			description:
				'Для презентации на работе нужно было показать, что такое blurhash, как его использовать и какие у него есть альтернативы. Для этого решил сделать демо-проект и заодно использовать свежую версию Nuxt. Там внутри кроме демо есть еще конвертер.'
		},
		debtcalc: {
			name: 'Калькулятор долгов',
			description:
				'Веб-приложение для расчета долгов в группах. Часто в поездках возникает путаница, кто кому и сколько денег в итоге должен. Чтобы не считать это все на бумажке или в Excel, реализовал калькулятор на React.'
		},
		travelcalc: {
			name: 'Калькулятор путешественника',
			description:
				'Еще одна вещь, нужная в поездках. Позволяет быстро конвертировать цены в иностранной валюте в привычную, а еще может показать, сколько часов нужно работать для совершения какой-либо покупки. Реализовано на Qwik с интеграцией нескольких React-компонентов.'
		}
	},

	contacts: {
		form: {
			name: 'Ваше имя',
			email: 'Ваш электронный адрес',
			comment: 'Текст сообщения',
			required: 'Обязательное поле',
			send: 'Отправить сообщение',
			sending: 'Отправляется...',
			success: 'Ваше сообщение успешно отправлено',
			error: 'Что-то пошло не так'
		}
	},

	validation: {
		alpha: 'Поле может содержать только буквы',
		alpha_spaces: 'Поле может содержать только буквы и пробелы',
		email: 'Поле должно быть действительным электронным адресом',
		min: 'Поле должно быть не менее {length} символов',
		required: 'Поле обязательно для заполнения'
	},

	ua: {
		disclaimer:
			'24 февраля 2022 года карликовая чмоня по фамилии Путин развязала и при пособничестве усатого ублюдка Лукашенко ведет войну против Украины. Они уничтожают украинские города, убивают и насилуют мирное население, мародерствуют и едят собак. Украина выстоит, но им нужна ваша помощь.',
		support: 'Поддержать Украину'
	}
};
