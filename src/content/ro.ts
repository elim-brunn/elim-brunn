import type { Content } from './types'

const ro: Content = {
  meta: {
    title: 'ELIM – Biserica Penticostală Brunn am Gebirge',
    description:
      'Biserica Penticostală ELIM în Brunn am Gebirge — o comunitate caldă, întemeiată în Cuvântul lui Dumnezeu.',
  },
  nav: {
    links: [
      { path: '/', label: 'Acasă' },
      { path: '/#glauben', label: 'Ce credem' },
      { path: '/gottesdienste', label: 'Servicii' },
      { path: '/anunturi', label: 'Anunțuri' },
      { path: '/live', label: 'Live' },
      { path: '/predigten', label: 'Predici' },
      { path: '/ueber-uns', label: 'Cine suntem' },
      { path: '/kontakt', label: 'Contact' },
    ],
    languageToggle: { de: 'DE', ro: 'RO' },
  },
  hero: {
    tagline: 'Isus, lumina lumii',
    headline: 'Bun venit',
  },
  home: {
    welcome: {
      title: 'Bun venit',
      pastorName: 'Pastor Ioan Vlas',
      pastorRole: 'Pastor al comunității',
      greeting: 'Stimați vizitatori!',
      body: [
        'Bine ați venit pe website-ul Bisericii Penticostale ELIM din Brunn am Gebirge, Austria. Suntem bucuroși că ați ales să vă rezervați din timpul dumneavoastră și manifestați interes accesând website-ul nostru.',
        'Dorim ca și pe această cale să vă punem la dispoziție resursele și informațiile potrivite, care să ofere oportunitatea maturizării și edificării dumneavoastră spirituale. Totodată dorim să vestim dragostea lui Dumnezeu — dovedită prin Fiul Său Isus Hristos — și oferta mântuirii fiecărui om, care prin credință îl primește în viața lui ca Mântuitor și Domn.',
        'Vă așteptăm cu drag la părtășia Bisericii ELIM, un izvor de apă vie și odihnă pentru suflet!',
      ],
      verse:
        'Au ajuns la Elim, unde erau douăsprezece izvoare de apă și șaptezeci de finici. Și au tăbărât acolo, lângă apă.',
      verseRef: 'Exodul 15:27',
      signature: 'Cu dragoste frățească și prețuire — Conducerea Bisericii ELIM',
    },
    live: {
      hint: 'Serviciu divin și în transmisie live',
    },
    program: {
      title: 'Servicii divine',
      intro: 'Ne întâlnim regulat la Brunn am Gebirge — sunteți bineveniți.',
      slots: [
        { day: 'Duminică', time: '9:00', activity: 'Serviciu divin · cca. 3 ore' },
        { day: 'Duminică', time: '17:00', activity: 'Serviciu divin · cca. 2 ore' },
        { day: 'Luni', time: '19:00', activity: 'Seară de tineret' },
        { day: 'Marți', time: '19:00', activity: 'Rugăciune' },
        { day: 'Joi', time: '19:00', activity: 'Serviciu divin' },
      ],
      cta: 'Detalii despre servicii',
    },
  },
  beliefs: {
    id: 'glauben',
    title: 'În ce credem',
    subtitle:
      'Credința noastră se întemeiază pe Biblie — clară, caldă și relevantă pentru viață.',
    items: [
      {
        title: 'Scriptura Sfântă',
        text: 'Biblia este Cuvântul de încredere al lui Dumnezeu — criteriul nostru pentru credință și viață. În ea Îl întâlnim pe Dumnezeul viu.',
      },
      {
        title: 'Mântuirea prin Isus Hristos',
        text: 'Prin moartea și învierea Sa, Isus Hristos ne dă iertare, speranță nouă și viață veșnică cu Dumnezeu.',
      },
      {
        title: 'Duhul Sfânt',
        text: 'Duhul lui Dumnezeu ne călăuzește, ne întărește și ne formează — în credința personală, în rugăciune și în slujirea unii pentru alții.',
      },
      {
        title: 'Comunitatea',
        text: 'Ca biserică vrem să ne sprijinim, să sărbătorim și să ne încurajăm — aproape unii de alții, cu smerenie și dragoste practică.',
      },
    ],
  },
  services: {
    id: 'gottesdienste',
    title: 'Servicii divine',
    subtitle: 'Ne bucurăm să vă întâmpinăm personal.',
    timesLabel: 'Program regulat',
    weekly: [
      {
        id: 'sunday',
        day: 'Duminică',
        slots: [
          { time: '9:00', note: 'cca. 3 ore · prima oră: rugăciune' },
          { time: '17:00', note: 'cca. 2 ore · prima oră: rugăciune' },
        ],
      },
      {
        id: 'monday',
        day: 'Luni',
        slots: [{ time: '19:00', note: 'Seară de tineret · cca. 2 ore' }],
      },
      {
        id: 'tuesday',
        day: 'Marți',
        slots: [{ time: '19:00', note: 'Rugăciune · cca. 2 ore' }],
      },
      {
        id: 'thursday',
        day: 'Joi',
        slots: [{ time: '19:00', note: 'Serviciu divin · cca. 2 ore' }],
      },
    ],
    sundayCalendar: {
      title: 'Duminici speciale',
      intro:
        'Duminica ne întâlnim la 9:00 și 17:00. În prima și a treia duminică a fiecărei luni, aceste servicii au un focus deosebit. Toate întâlnirile sunt în română, cu traducere în germană.',
      firstSundayHeading: 'A 1-a duminică din lună',
      thirdSundayHeading: 'A 3-a duminică din lună',
      thisMonth: 'Luna aceasta',
      nextSunday: 'Următoarea duminică',
      labels: {
        regular: {
          morning: 'Serviciu divin cu laudă și predicție',
          evening: 'Serviciu divin cu laudă și predicție',
        },
        first: {
          morning: 'Cină cea de taină',
          evening: 'Seară de tineret',
        },
        third: {
          morning: 'Binecuvântare de copii',
          evening: 'Serviciu divin în limba germană (doar germană)',
        },
      },
    },
    languageNote:
      'Toate serviciile divine și întâlnirile de rugăciune sunt în română, cu traducere simultană în germană. Excepție: serviciul divin în limba germană din a 3-a duminică, la ora 17:00.',
    expectTitle: 'La ce mă pot aștepta?',
    expectBody: [
      'Duminica dimineața suntem împreună aproximativ 3 ore; duminica seară și în celelalte zile, aproximativ 2 ore.',
      'Fiecare serviciu de duminică începe cu o oră de rugăciune. Apoi urmează lauda, mesajul biblic și comuniunea.',
      'În timpul săptămânii au loc alte programe — seară de tineret, rugăciune sau serviciu divin — fiecare cu structura sa.',
      'Predica și cântările sunt în română, cu traducere în germană — cu excepția serviciului în limba germană din a 3-a duminică seară.',
      'Nu trebuie să pregătiți nimic — veniți așa cum sunteți. Ne bucurăm de fiecare oaspete și avem timp pentru o conversație după serviciu.',
    ],
    visitorTitle: 'Pentru vizitatori',
    visitors: [
      {
        title: 'Limbă',
        text: 'Programele sunt în română, cu traducere în germană. Doar serviciul din a 3-a duminică, la 17:00, este exclusiv în limba germană.',
      },
      {
        title: 'Copii',
        text: 'Copiii sunt bineveniți. La nevoie, găsim împreună o soluție potrivită pentru familii.',
      },
      {
        title: 'Acces & parcare',
        text: 'Biserica se află la Rennweg 85. Locuri de parcare sunt disponibile în apropiere.',
      },
    ],
  },
  sermons: {
    id: 'predigten',
    title: 'Predici',
    subtitle: 'Mesaje din Cuvântul lui Dumnezeu — de ascultat și de meditat.',
    items: [
      {
        date: '12 mai 2026',
        title: 'Izvoare de înnoire',
        speaker: 'Pastor Ioan Vlas',
        duration: '38 min.',
      },
      {
        date: '5 mai 2026',
        title: 'Comunitate în speranță',
        speaker: 'Pastor Ioan Vlas',
        duration: '42 min.',
      },
      {
        date: '28 apr. 2026',
        title: 'Încredere în schimbare',
        speaker: 'Invitat Daniel M.',
        duration: '35 min.',
      },
    ],
    viewAll: 'Toate prediciile',
  },
  announcements: {
    id: 'anunturi',
    title: 'Anunțuri',
    subtitle: 'Evenimente și termene actuale ale comunității noastre.',
    items: [
      {
        date: '16 martie 2026',
        title: 'Tabăra de Tineret 2026',
        excerpt: 'Tabăra de Tineret 2026 — detalii suplimentare vor fi anunțate în biserică.',
      },
      {
        date: '22 februarie 2026',
        title: 'Tabăra de Copii și Adolescenți 2026',
        excerpt: 'Tabăra de copii și adolescenți va avea loc în anul 2026 în regiunea Pongau, Salzburg.',
      },
    ],
  },
  live: {
    id: 'live',
    title: 'Live',
    subtitle: 'Urmăriți serviciile divine și evenimentele în direct.',
    description:
      'Când un serviciu sau un eveniment special este transmis, îl puteți urmări aici live. Pentru înregistrări anterioare, accesați arhiva video.',
    watchLive: 'Deschide transmisia live',
    videoArchive: 'Arhivă video',
    liveUrl: 'https://www.elim-brunn.at/_live/',
    archiveUrl: 'https://www.elim-brunn.at/arhiva-video/',
  },
  about: {
    id: 'ueber-uns',
    title: 'Cine suntem',
    subtitle: 'Biserica Penticostală ELIM — o comunitate cu rădăcini adânci în Austria.',
    whoWeAreTitle: 'Istoria noastră',
    heritage: [
      'Rădăcinile Pfingstkirche Gemeinde Gottes în Österreich sunt legate de Church of God, Cleveland – Tennessee, Statele Unite ale Americii. În vara anului 1886 un grup de credincioși au experimentat botezul cu Duhul Sfânt însoțit de vorbirea în limbi — începutul unei biserici care astăzi este răspândită la nivel internațional.',
      'În Austria, Pfingstkirche Gemeinde Gottes a luat naștere prin creștinii penticostali de origine română refugiați politic, aflați în lagărul din Traiskirchen, care începând cu anul 1981 se adunau la rugăciune și studiu biblic. Cu sprijinul Gemeinde Gottes din Germania, în 1984 a fost inaugurată deschiderea primei biserici penticostale române în Viena. Fratele Gaode Moise a fost numit lucrătorul spiritual al acestei biserici.',
      'La 8 august 1989 s-a format asociația religioasă „Verein der Gemeinde Gottes in Österreich“. Începând cu 13 octombrie 2001, asociația este recunoscută în Austria ca comunitate religioasă cu personalitate juridică sub denumirea „Pfingstkirche Gemeinde Gottes in Österreich”.',
      'Istoria Bisericii Penticostale ELIM Viena începe în 1980 cu primii credincioși care au evadat din România comunistă. După Mohrengasse și Gehardusgasse, la 8 octombrie 2005 s-a inaugurat lăcașul de închinare de pe Maculangasse 9 (Viena, sectorul 22).',
      'În octombrie 2017 a început construcția unui nou lăcaș de închinare în Brunn am Gebirge. La 8 mai 2021, după o perioadă dificilă cauzată de pandemie, a avut loc deschiderea oficială a Bisericii Penticostale ELIM, Rennweg 85, Brunn am Gebirge.',
      'Biserica ELIM Brunn este o comunitate de creștini penticostali, proveniți din România, deschisă pentru oricine — indiferent de rasă, etnie, cultură, poziție socială sau limbă.',
    ],
    elimNameTitle: 'Ce înseamnă ELIM?',
    elimName:
      'ELIM (în ebraică: Palmieri) este numele oazei în care poporul Israel, pribeg prin pustiu după ieșirea din Egipt, a găsit izvoare de apă și liniște la umbra palmierilor (Exodul 15:27). Biserica ELIM a fost de la început un loc unde oamenii au putut primi odihnă și înviorare pentru sufletele lor.',
    visionTitle: 'Viziunea noastră',
    vision:
      'Să fim un ajutor spiritual pentru toți oamenii — o oază în care oricine să poată ajunge în armonie cu Dumnezeu Creatorul, prin Isus Hristos. Biserica ELIM este deschisă pentru oricine: cei singuri, cei suferinzi, cei robiți și cei apăsați să poată găsi dragoste, vindecare, eliberare, speranță și mântuire.',
    missionTitle: 'Misiunea noastră',
    mission:
      'Să ajutăm oamenii să vină la Dumnezeu, să părăsească păcatul și să fie salvați. Dorim ca toți membrii bisericii să ajungă la cel mai înalt nivel în ceea ce privește devotamentul și relația lor față de Dumnezeu — urmași demni ai lui Hristos, gata de slujire, conștienți și responsabili față de acțiunile lor.',
    timelineTitle: 'Repere',
    timeline: [
      { year: '1981', title: 'Traiskirchen', text: 'Rugăciune și studiu biblic în lagăr.' },
      { year: '1984', title: 'Viena', text: 'Prima biserică penticostală românească în Viena.' },
      { year: '1989', title: 'Asociație', text: '„Verein der Gemeinde Gottes in Österreich”.' },
      { year: '2001', title: 'Recunoaștere', text: 'Pfingstkirche Gemeinde Gottes in Österreich.' },
      { year: '2005', title: 'ELIM Viena', text: 'Maculangasse 9 — lăcaș actual ELIM Viena.' },
      { year: '2017', title: 'Brunn', text: 'Începutul construcției în Brunn am Gebirge.' },
      { year: '8 mai 2021', title: 'ELIM Brunn', text: 'Deschidere oficială, Rennweg 85.' },
    ],
  },
  contact: {
    id: 'kontakt',
    title: 'Contact & direcții',
    subtitle: 'Așteptăm mesajul sau vizita dumneavoastră.',
    addressLabel: 'Adresă',
    address: 'Rennweg 85, 2345 Brunn am Gebirge, Austria',
    phoneLabel: 'Telefon',
    phone: '+43 699 19224639',
    phoneHref: 'tel:+4369919224639',
    emailLabel: 'E-mail',
    email: 'office@elim-brunn.at',
    emailHref: 'mailto:office@elim-brunn.at',
    pressEmailLabel: 'Presă',
    pressEmail: 'presse@gemeindegottes.at',
    pressEmailHref: 'mailto:presse@gemeindegottes.at',
    transportTitle: 'Cum ajung cu transportul public',
    transportSteps: [
      'De la stația de metrou Siebenhirten (U6) luați autobuzul 269 în direcția „Mödling Bhf. via Südstadt” până la stația „Brunn/Geb. Industriestraße B”.',
      'Aproximativ 6 minute pe jos pe Industriestraße B înapoi spre sensul giratoriu.',
      'Stânga pe Brunner Straße, la următoarea posibilitate dreapta pe Rennweg.',
      'După circa 60 m vedeți biserica în partea dreaptă.',
    ],
    bankTitle: 'Date de cont ale bisericii',
    donateBankTitle: 'Date de cont pentru ajutorare',
    banks: [
      {
        label: 'Cont biserică',
        holder: 'Pfingstkirche Gemeinde Gottes ELIM',
        iban: 'AT32 2011 1282 6751 8719',
        bic: 'GIBAATWWXXX',
      },
    ],
    donateBanks: [
      {
        label: 'Donații & ajutor',
        holder: 'Pfingstkirche Gemeinde Gottes ELIM',
        iban: 'AT48 2011 1282 6751 8722',
        bic: 'GIBAATWWXXX',
      },
    ],
    mapTitle: 'Cum ne găsiți',
    formTitle: 'Trimite-ne un mesaj',
    form: {
      name: 'Nume',
      email: 'E-mail',
      message: 'Mesaj',
      submit: 'Trimite',
      success: 'Mulțumim — vă vom răspunde cât mai curând posibil.',
    },
  },
  ui: {
    timelineScrollHint: '↓ Derulați · cronologia se mișcă spre dreapta →',
    navHomeAria: 'ELIM — pagina principală',
    navLanguageAria: 'Limbă',
    navMenuOpen: 'Deschide meniul',
    navMenuClose: 'Închide meniul',
    sermonPlayAria: 'Redare',
    bankIban: 'IBAN',
    bankBic: 'BIC',
    socialFacebook: 'Facebook',
    socialYoutube: 'YouTube',
    socialInstagram: 'Instagram',
  },
  footer: {
    tagline: 'Biserica Penticostală ELIM — Brunn am Gebirge',
    affiliation: 'Biserica Penticostală Comunitatea lui Dumnezeu în Austria',
    copyright: '© Biserica Penticostală ELIM Brunn am Gebirge',
    email: 'office@elim-brunn.at',
    links: [
      { path: '/anunturi', label: 'Anunțuri' },
      { path: '/live', label: 'Live' },
      { path: '/kontakt', label: 'Contact' },
    ],
    partnerLinks: [
      { label: 'ELIM Wien', href: 'https://www.elim-wien.at' },
      { label: 'Gemeinde Gottes', href: 'https://www.gemeindegottes.at' },
    ],
    impressum: 'Impressum',
    impressumUrl: 'https://www.elim-brunn.at/impressum/',
    privacy: 'Protecția datelor',
    privacyUrl: 'https://www.elim-brunn.at/datenschutzbestimmungen/',
  },
}

export default ro
