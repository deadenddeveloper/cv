import legal from './legal/pl-PL';

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
      title: 'Roman Meyer — Tech Lead / Architekt aplikacji webowych',
      description:
        'Tech Lead i architekt aplikacji webowych. Full stack od 2010 roku: PHP, Laravel, JavaScript, TypeScript, Vue i React.'
    }
  },

  name: 'Roman Meyer',
  post: 'Tech Lead / Architekt aplikacji webowych',
  availability: 'Otwarty na oferty na stanowisko Tech Leada lub architekta aplikacji webowych',
  full_name: 'Roman Meyer',
  address: 'Buxtehude, Dolna Saksonia, Niemcy',
  date_of_birth: '9 lutego 1991',
  place_of_birth: 'Sławianka, Kraj Nadmorski, Rosja',

  back_to_top: 'Powrót na górę',
  certificate: 'Certyfikat',
  copyright: '&copy; 2021 Roman Meyer',
  page_not_found: 'Strona nie znaleziona',
  go_home: 'Wróć do strony głównej',

  cv: {
    download: 'Pobierz CV'
  },

  sections: {
    hobbies: 'Hobby',
    bio: 'O mnie',
    skills: 'Umiejętności',
    languages: 'Języki',
    work: 'Doświadczenie zawodowe',
    education: 'Edukacja',
    contacts: 'Kontakt',
    projects: 'Projekty'
  },

  bio: {
    about:
      '<p>Cześć, jestem Roman. Zawodowo zajmuję się tworzeniem aplikacji webowych od 2010 roku. Przeszedłem drogę od stron na CMS-ach i freelancingu do tworzenia i utrzymania dużych projektów w niemieckich firmach i międzynarodowej agencji. Moja podstawa to full stack: PHP, JavaScript i TypeScript, z dużym doświadczeniem w Laravelu i różnych frameworkach frontendowych.</p><p>Pierwszy milion zarobiłem jeszcze w szkole, pisząc prace zaliczeniowe w Delphi i C/C++ dla kolegów z grupy. Były to jednak ruble białoruskie. Od tego czasu technologie i skala zadań znacznie się zmieniły, ale nadal lubię rozumieć, jak coś działa i jak można to ulepszyć.</p><p>W ostatnich latach stopniowo przesuwam się w stronę przywództwa technicznego: więcej czasu poświęcam mentoringowi, organizacji pracy i zarządzaniu projektami. Lubię patrzeć na projekt jako całość: zrozumieć problem, dobrać rozwiązania i pomóc zespołowi je wdrożyć. Teraz szukam stanowiska Tech Leada lub architekta aplikacji webowych, na którym wykorzystam swoje doświadczenie i wezmę większą odpowiedzialność za kierunek techniczny projektu.</p><p>AI również stało się częścią mojej pracy. Korzystam z niego tam, gdzie pomaga posunąć zadanie do przodu, ale sprawdzam proponowane rozwiązania i poznaję kod, który trafia do projektu. Chcę rozumieć, dlaczego rozwiązanie działa, jak je utrzymywać i jakie problemy może sprawić później.</p>',
    full_name: 'Pełne imię i nazwisko',
    location: 'Lokalizacja',
    date_of_birth: 'Data urodzenia',
    place_of_birth: 'Miejsce urodzenia',
    phone: 'Telefon',
    email: 'E-mail'
  },

  skills: {
    leadership: {
      title: 'Przywództwo techniczne i architektura',
      description:
        'Dobór stosu technologicznego, projektowanie architektury i planowanie prac. Kierowałem niewielkim zespołem programistów i projektanta, prowadziłem przeglądy kodu i mentoring juniorów.'
    },
    backend: {
      title: 'Backend',
      description:
        'Główny stos to PHP i Laravel. Mam doświadczenie z innymi frameworkami PHP oraz Node.js i Express. Wcześniej często wykorzystywałem Pythona do zadań praktycznych, ale rozwój narzędzi AI sprawił, że w mojej obecnej pracy nie mam już takiej potrzeby.'
    },
    frontend: {
      title: 'Frontend',
      description:
        'JavaScript, TypeScript, Vue.js / Nuxt i React / Next.js. Szczególnie dobrze pracowało mi się ze Svelte i SvelteKit, choć ze względu na realia rynku skończyło się na dwóch projektach hobbystycznych. Mam doświadczenie z Qwik, Angular i Electron. HTML, CSS, preprocesory i Tailwind.'
    },
    maintenance: {
      title: 'Praca z istniejącym kodem',
      description:
        'Odnajduję się w cudzych projektach, szukam przyczyn problemów i refaktoryzuję kod. Korzystam z OOP, wzorców projektowych oraz wiedzy o algorytmach i strukturach danych. Staram się zostawiać kod, który kolejny programista będzie w stanie zrozumieć.'
    },
    databases: {
      title: 'Bazy danych',
      description:
        'Pracuję z relacyjnymi bazami danych: MySQL, PostgreSQL i SQLite. Znam SQL, mam też doświadczenie z MongoDB.'
    },
    infrastructure: {
      title: 'Testowanie i infrastruktura',
      description:
        'Jest, Mocha, Cypress i Playwright. Git, CI/CD, Docker, konfiguracja środowisk do tworzenia i wdrażania aplikacji webowych.'
    },
    ai: {
      title: 'AI w programowaniu',
      description:
        'Zaczynałem od GitHub Copilot i narzędzi AI od JetBrains. Obecnie wolę GPT i Codex — odpowiada mi jakość ich pracy. Określam kontekst i ograniczenia, sprawdzam proponowane rozwiązania i poznaję kod, zanim użyję go w projekcie.'
    },
    cms: {
      title: 'CMS',
      description:
        'Doświadczenie w tworzeniu i utrzymaniu projektów na WordPress, Joomla, MODX, Drupal, OpenCart, PrestaShop, 1C-Bitrix, BigCommerce, FirstSpirit, AEM i TYPO3.'
    }
  },

  languages: {
    reading: 'Czytanie',
    writing: 'Pisanie',
    listening: 'Słuchanie',
    speaking: 'Mówienie',
    ru: {
      name: 'Rosyjski',
      description: 'Język ojczysty.'
    },
    by: {
      name: 'Białoruski',
      description:
        'Również ojczysty, ale używany głównie w szkole. Mówienie jest teraz trudniejsze.'
    },
    ua: {
      name: 'Ukraiński',
      description:
        'Ze względu na podobieństwo do rosyjskiego i białoruskiego dobrze rozumiem, ale trudniej mi pisać i mówić.'
    },
    en: {
      name: 'Angielski',
      description:
        'Uczę się angielskiego od piątego roku życia. Nie mam większych problemów, ale mylę czasy.'
    },
    de: {
      name: 'Niemiecki',
      description:
        'Uczę się niemieckiego od 2019 roku, głównie samodzielnie. Praktykuję codziennie. Są trudności, ale „Das Leben ist zu kurz, um Deutsch zu lernen” nie jest bezsensowne.'
    },
    pl: {
      name: 'Polski',
      description: 'Dobrze rozumiem, ale nie potrafię dobrze mówić.'
    },
    es: {
      name: 'Hiszpański',
      description:
        'Nowe wyzwanie. Im więcej się uczę, tym bardziej rozumiem, że to nie jest takie łatwe.'
    }
  },

  work: {
    bauproplus: {
      time: 'Styczeń 2026 — listopad 2026',
      post: 'Tech Lead',
      firm: 'BauProPlus',
      location: 'Nastätten, Niemcy',
      description:
        'Tworzyłem platformę do automatyzacji pracy firmy budowlanej: ewidencji czasu pracy, zarządzania personelem i planowania projektów. Wybrałem monorepo z API w Laravelu i frontendem w Vue 3. Zaprojektowałem podstawową architekturę i modele danych, skonfigurowałem CI i wdrażanie. Przygotowałem instrukcje i zasady pracy z AI, aby zmiany pasowały do architektury projektu. Firma później zakończyła rozwój produktu.'
    },
    svitanak: {
      time: 'Sierpień 2010 - Październik 2013',
      post: 'Inżynier oprogramowania',
      firm: 'OJSC Svitanak',
      location: 'Żodzino, Białoruś',
      description:
        'Rozpocząłem pracę zaraz po ukończeniu college’u. Praca polegała na automatyzacji różnych procesów w ramach dużego przemysłu tekstylnego. Głównie pomagałem działom marketingu, finansów i zakwaterowania. Tworzyłem dla nich oprogramowanie aplikacyjne w Delphi 7, co pozwalało zaoszczędzić ludziom dużo czasu. Na początku pracowałem z entuzjazmem, ale szybko stało się jasne, że przedsiębiorstwo państwowe nie jest zainteresowane inteligentnymi specjalistami. Dlatego odszedłem.'
    },
    itgarant: {
      time: 'Listopad 2013 - Grudzień 2015',
      post: 'Full stack web-developer',
      firm: 'ITGarant',
      location: 'Mińsk, Białoruś',
      description:
        'Tworzyłem strony internetowe „pod klucz” na Joomla i pisałem niestandardowe komponenty dla tego CMS-a. Jeden z projektów zdobył nagrodę „Russian Developers Cup 2014” od grupy Mail.ru. Poza tym spotkałem się z projektami na Drupal oraz wieloma samodzielnie tworzonymi stronami, które wymagały poprawek i refaktoryzacji. Stworzyłem także prostą aplikację dla Windows 8.'
    },
    freelance: {
      time: 'Styczeń 2016 - Czerwiec 2018',
      post: 'Full stack web-developer',
      firm: 'Freelance',
      location: '',
      description:
        'To był bardzo beztroski okres w moim życiu. Współpracowałem z kilkoma organizacjami w krajach WNP i zdobyłem mnóstwo doświadczenia. Najczęściej zajmowałem się zleceniami dotyczącymi 1C-Bitrix. Wspólnie z dużą firmą zajmowałem się parsowaniem specyficznych danych.'
    },
    recoma: {
      time: 'Lipiec 2018 - Sierpień 2021',
      post: 'Full stack web-developer',
      firm: 'RECO.MA GmbH',
      location: 'Beselich, Niemcy',
      description:
        'Otrzymałem ofertę pracy z relokacją do Niemiec i nie wahałem się. Zrealizowałem kilka dużych i ambitnych projektów w Laravel. Utrzymywałem również kilka stron na Wordpress oraz tworzyłem niestandardowe interfejsy użytkownika.'
    },
    vke: {
      time: 'Wrzesień 2021 - Sierpień 2022',
      post: 'Full stack web-developer',
      firm: 'von Kéler Engineering GmbH',
      location: 'Brunszwik, Niemcy',
      description:
        'Stałem się częścią zespołu web developmentu. Na początku zajmowałem się wewnętrznymi projektami firmy, a później stworzyłem interesującą aplikację na React wewnątrz Electron. Dodatkowo brałem udział w przeróbce aplikacji niskopoziomowej dla Siemensa.'
    },
    digitas: {
      time: 'Wrzesień 2022 — grudzień 2025',
      post: 'Full stack web-developer',
      firm: 'Digitas GmbH',
      location: 'Kolonia, Niemcy',
      description:
        'To ogromna międzynarodowa agencja zajmująca się dużymi projektami internetowymi. Brałem udział w rozwoju i utrzymaniu stron Grohe, Berlin Airport, ITZ Bund, Bindella, gdzie wykorzystywano wiele różnych technologii.'
    }
  },

  education: {
    bscli: {
      time: '2006 - 2010',
      speciality: 'Oprogramowanie technologii informacyjnych',
      post: 'Technik-programista (średnie wykształcenie specjalistyczne)',
      name: 'Baranowicki Państwowy College Przemysłu Lekkiego im. V.E. Czernyszewa',
      location: 'Baranowicze, Białoruś'
    },
    grsu: {
      time: '2010 - 2015',
      speciality: 'Oprogramowanie technologii informacyjnych',
      post: 'Inżynier oprogramowania (wyższe wykształcenie)',
      name: 'Grodzieński Państwowy Uniwersytet im. Janki Kupały',
      location: 'Grodno, Białoruś'
    }
  },

  contacts: {
    form: {
      name: 'Twoje imię',
      email: 'Twój email',
      comment: 'Treść wiadomości',
      required: 'Pole jest wymagane',
      send: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      success: 'Twoja wiadomość została pomyślnie wysłana',
      error: 'Coś poszło nie tak'
    }
  },

  projects: {
    moneydude: {
      name: 'MoneyDude',
      description:
        'Serwis do rozliczania wspólnych wydatków w podróży i na co dzień. Pozwala dzielić koszty na różne sposoby, korzystać z wielu walut i sprawdzić, kto komu ile jest winien. Regularnie używam go ze znajomymi i rozwijam również pod nasze rzeczywiste potrzeby.'
    },
    metalhead: {
      name: 'Metalhead',
      description:
        'Rozwijam portal dla fanów ciężkiej muzyki i muzyków, który ma ułatwić wyszukiwanie informacji i kontakt z innymi. Planuję bazę wiedzy, wydarzenia i narzędzia do organizacji wspólnych wyjazdów na imprezy muzyczne. Projekt jest w trakcie realizacji.'
    },
    randby: {
      name: 'Rand.by',
      description:
        'Serwis do generowania losowych liczb, haseł, list i innych wartości. Przepisałem go z czystego JavaScriptu na Nuxt i dodałem publiczne API oparte na Express. Sam regularnie korzystam z generatora haseł.'
    },
    travelcalc: {
      name: 'Kalkulator podróżnika',
      description:
        'Niewielki projekt hobbystyczny, żeby wypróbować Qwik i integrację komponentów React. Przelicza ceny na znajomą walutę i pokazuje, ile czasu pracy kosztuje dany zakup.'
    }
  },

  hobbies: {
    description:
      'Poza pracą: futsal i piłka nożna, ciężka muzyka, gry komputerowe, książki i podróże.'
  },

  validation: {
    alpha: 'Pole może zawierać tylko litery',
    alpha_spaces: 'Pole może zawierać tylko litery i spacje',
    email: 'Pole musi zawierać prawidłowy adres e-mail',
    min: 'Pole musi mieć co najmniej {length} znaków',
    required: 'Pole jest wymagane'
  }
};
