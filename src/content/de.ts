import type { Content } from './types'

const de: Content = {
  meta: {
    title: 'ELIM – Pfingstkirche Brunn am Gebirge',
    description:
      'Pfingstkirche ELIM in Brunn am Gebirge — eine warme, biblisch verwurzelte Gemeinschaft. Gottesdienste, Gemeinschaft und Hoffnung in Christus.',
  },
  nav: {
    links: [
      { path: '/', label: 'Start' },
      { path: '/#glauben', label: 'Glaube' },
      { path: '/gottesdienste', label: 'Gottesdienste' },
      { path: '/anunturi', label: 'Ankündigungen' },
      { path: '/live', label: 'Live' },
      { path: '/predigten', label: 'Predigten' },
      { path: '/ueber-uns', label: 'Über uns' },
      { path: '/kontakt', label: 'Kontakt' },
    ],
    languageToggle: { de: 'DE', ro: 'RO' },
  },
  hero: {
    tagline: 'Jesus, Licht der Welt',
    headline: 'Willkommen',
  },
  home: {
    welcome: {
      title: 'Willkommen',
      pastorName: 'Pastor Ioan Vlas',
      pastorRole: 'Gemeindepastor',
      greeting: 'Liebe Besucherinnen und Besucher!',
      body: [
        'herzlich willkommen auf der Website der Pfingstkirche ELIM in Brunn am Gebirge. Wir freuen uns, dass Sie sich Zeit nehmen und unsere Gemeinde online besuchen.',
        'Mit dieser Website möchten wir Ihnen passende Ressourcen und Informationen anbieten — zur geistlichen Reife und zum Aufbau im Glauben. Gleichzeitig wollen wir die Liebe Gottes verkündigen, die durch seinen Sohn Jesus Christus offenbart wurde, und die Rettung anbieten, die jeder Mensch durch den Glauben an Jesus als seinen Herrn und Heiland empfangen kann.',
        'Wir erwarten Sie herzlich zur Gemeinschaft der ELIM-Gemeinde — eine Quelle lebendigen Wassers und Ruhe für die Seele!',
      ],
      verse:
        'Und sie kamen nach Elim, wo zwölf Wasserquellen und siebzig Palmen waren. Und sie lagerten sich dort am Wasser.',
      verseRef: '2. Mose 15,27',
      signature: 'In brüderlicher Liebe und Wertschätzung — die Leitung der ELIM-Gemeinde',
    },
    live: {
      hint: 'Gottesdienst auch per Live-Stream',
    },
    program: {
      title: 'Gottesdienste',
      intro: 'Wir treffen uns regelmäßig in Brunn am Gebirge — Sie sind herzlich eingeladen.',
      slots: [
        { day: 'Sonntag', time: '9:00 Uhr', activity: 'Gottesdienst · ca. 3 Stunden' },
        { day: 'Sonntag', time: '17:00 Uhr', activity: 'Gottesdienst · ca. 2 Stunden' },
        { day: 'Montag', time: '19:00 Uhr', activity: 'Jugendabend' },
        { day: 'Dienstag', time: '19:00 Uhr', activity: 'Gebet' },
        { day: 'Donnerstag', time: '19:00 Uhr', activity: 'Gottesdienst' },
      ],
      cta: 'Alle Gottesdienst-Infos',
    },
  },
  beliefs: {
    id: 'glauben',
    title: 'Das glauben wir',
    subtitle:
      'Unser Glaube gründet sich auf die Bibel — klar, warmherzig und lebensnah.',
    items: [
      {
        title: 'Die Heilige Schrift',
        text: 'Die Bibel ist Gottes zuverlässiges Wort — unsere Richtschnur für Glauben und Leben. In ihr begegnen wir dem lebendigen Gott.',
      },
      {
        title: 'Rettung durch Jesus Christus',
        text: 'Durch seinen Tod und seine Auferstehung schenkt uns Jesus Christus Vergebung, neue Hoffnung und ein ewiges Leben bei Gott.',
      },
      {
        title: 'Der Heilige Geist',
        text: 'Gottes Geist begleitet, stärkt und formt uns — in persönlichem Glauben, im Gebet und im Dienst aneinander.',
      },
      {
        title: 'Gemeinschaft',
        text: 'Als Gemeinde wollen wir einander tragen, feiern und ermutigen — in Nähe, Demut und praktischer Liebe im Alltag.',
      },
    ],
  },
  services: {
    id: 'gottesdienste',
    title: 'Gottesdienste',
    subtitle: 'Wir freuen uns, Sie persönlich begrüßen zu dürfen.',
    timesLabel: 'Regelmäßige Zeiten',
    weekly: [
      {
        id: 'sunday',
        day: 'Sonntag',
        slots: [
          { time: '9:00 Uhr', note: 'ca. 3 Stunden · 1. Stunde Gebetsstunde' },
          { time: '17:00 Uhr', note: 'ca. 2 Stunden · 1. Stunde Gebetsstunde' },
        ],
      },
      {
        id: 'monday',
        day: 'Montag',
        slots: [{ time: '19:00 Uhr', note: 'Jugendabend · ca. 2 Stunden' }],
      },
      {
        id: 'tuesday',
        day: 'Dienstag',
        slots: [{ time: '19:00 Uhr', note: 'Gebet · ca. 2 Stunden' }],
      },
      {
        id: 'thursday',
        day: 'Donnerstag',
        slots: [{ time: '19:00 Uhr', note: 'Gottesdienst · ca. 2 Stunden' }],
      },
    ],
    sundayCalendar: {
      title: 'Besondere Sonntage',
      intro:
        'Am Sonntag treffen wir uns um 9:00 und 17:00 Uhr. Am ersten und dritten Sonntag jedes Monats haben diese Gottesdienste einen besonderen Schwerpunkt. Alle Treffen werden auf Rumänisch geführt und ins Deutsche übersetzt.',
      firstSundayHeading: '1. Sonntag im Monat',
      thirdSundayHeading: '3. Sonntag im Monat',
      thisMonth: 'Im aktuellen Monat',
      nextSunday: 'Nächster Sonntag',
      labels: {
        regular: {
          morning: 'Gottesdienst mit Lobpreis und Predigt',
          evening: 'Gottesdienst mit Lobpreis und Predigt',
        },
        first: {
          morning: 'Kommunion',
          evening: 'Jugendabend',
        },
        third: {
          morning: 'Segnung der Kinder',
          evening: 'Deutschsprachiger Gottesdienst (nur Deutsch)',
        },
      },
    },
    languageNote:
      'Alle Gottesdienste und Gebetszeiten werden auf Rumänisch geführt und simultan ins Deutsche übersetzt — Sie können in beiden Sprachen gut mitfeiern und zuhören. Ausnahme: der deutschsprachige Gottesdienst am 3. Sonntag um 17:00 Uhr.',
    expectTitle: 'Was erwartet mich?',
    expectBody: [
      'Am Sonntagvormittag sind wir etwa 3 Stunden zusammen, am Sonntagabend und an den anderen Tagen etwa 2 Stunden.',
      'Jeder Sonntagsgottesdienst beginnt mit einer Stunde Gebetsstunde. Danach folgen Lobpreis, Bibelbotschaft und Gemeinschaft.',
      'Unter der Woche finden andere Programme statt — Jugendabend, Gebet oder Gottesdienst — jeweils mit eigenem Ablauf.',
      'Predigt und Lieder sind auf Rumänisch; eine Übersetzung ins Deutsche ist dabei — außer beim deutschsprachigen Gottesdienst am 3. Sonntag abends.',
      'Sie müssen nichts vorbereiten oder mitbringen — kommen Sie, wie Sie sind. Wir freuen uns über jeden Gast und nehmen uns Zeit für ein Gespräch danach.',
    ],
    visitorTitle: 'Für Besucher',
    visitors: [
      {
        title: 'Sprache',
        text: 'Die Programme finden auf Rumänisch statt und werden ins Deutsche übersetzt. Nur der Gottesdienst am 3. Sonntag um 17:00 Uhr ist ausschließlich deutschsprachig.',
      },
      {
        title: 'Kinder',
        text: 'Kinder sind herzlich willkommen. Bei Bedarf begleiten wir Familien gern und finden eine passende Lösung.',
      },
      {
        title: 'Anreise & Parken',
        text: 'Die Kirche liegt in der Rennweg 85. Parkplätze finden sich in der näheren Umgebung.',
      },
    ],
  },
  sermons: {
    id: 'predigten',
    title: 'Predigten',
    subtitle: 'Botschaften aus Gottes Wort — zum Nachhören und Nachdenken.',
    items: [
      {
        date: '12. Mai 2026',
        title: 'Quellen der Erneuerung',
        speaker: 'Pastor Ioan Vlas',
        duration: '38 Min.',
      },
      {
        date: '5. Mai 2026',
        title: 'Gemeinschaft in der Hoffnung',
        speaker: 'Pastor Ioan Vlas',
        duration: '42 Min.',
      },
      {
        date: '28. Apr. 2026',
        title: 'Vertrauen im Wandel',
        speaker: 'Gastredner Daniel M.',
        duration: '35 Min.',
      },
    ],
    viewAll: 'Alle Predigten',
  },
  announcements: {
    id: 'anunturi',
    title: 'Ankündigungen',
    subtitle: 'Aktuelle Termine und Veranstaltungen unserer Gemeinde.',
    items: [
      {
        date: '16. März 2026',
        title: 'Jugendcamp 2026',
        excerpt: 'Tabăra de Tineret 2026 — weitere Informationen folgen in Kürze in der Gemeinde.',
      },
      {
        date: '22. Februar 2026',
        title: 'Kinder- und Jugendcamp 2026',
        excerpt:
          'Tabăra de copii și adolescenți findet 2026 in der Region Pongau (Salzburg) statt.',
      },
    ],
  },
  live: {
    id: 'live',
    title: 'Live',
    subtitle: 'Gottesdienste und Veranstaltungen live miterleben.',
    description:
      'Wenn ein Gottesdienst oder eine besondere Veranstaltung übertragen wird, können Sie hier live dabei sein. Vergangene Sendungen finden Sie in der Videoarchiv.',
    watchLive: 'Live-Übertragung öffnen',
    videoArchive: 'Videoarchiv',
    liveUrl: 'https://www.elim-brunn.at/_live/',
    archiveUrl: 'https://www.elim-brunn.at/arhiva-video/',
  },
  about: {
    id: 'ueber-uns',
    title: 'Wer wir sind',
    subtitle: 'Pfingstkirche ELIM — eine Gemeinschaft mit tiefen Wurzeln in Österreich.',
    whoWeAreTitle: 'Unsere Geschichte',
    heritage: [
      'Die Wurzeln der Pfingstkirche Gemeinde Gottes in Österreich reichen zur Church of God in Cleveland, Tennessee (USA) zurück. Im Sommer 1886 erlebte eine Gruppe von Gläubigen die Taufe mit dem Heiligen Geist — der Beginn einer Bewegung, die heute weltweit wirkt.',
      'In Österreich entstand die Pfingstkirche durch rumänische Pfingstchristen, die als politische Flüchtlinge im Lager Traiskirchen ab 1981 zu Gebet und Bibelstudium zusammenkamen. Mit Unterstützung der Gemeinde Gottes in Deutschland wurde 1984 die erste rumänischsprachige Pfingstkirche in Wien eröffnet; Bruder Gaode Moise wurde ihr geistlicher Leiter.',
      '1989 wurde der „Verein der Gemeinde Gottes in Österreich“ gegründet. Seit dem 13. Oktober 2001 ist die Pfingstkirche Gemeinde Gottes in Österreich als religiöse Gemeinschaft mit Rechtspersönlichkeit anerkannt.',
      'Die Geschichte der ELIM Wien beginnt 1980 mit den ersten Gläubigen, die aus dem kommunistischen Rumänien kamen. Nach Stationen in der Mohrengasse und Gehardusgasse wurde am 8. Oktober 2005 das Gotteshaus in der Maculangasse 9 (Wien, 22. Bezirk) eingeweiht.',
      'Wegen des stetigen Wachstums der Gemeinde begann im Oktober 2017 der Bau eines weiteren Gotteshauses in Brunn am Gebirge. Am 8. Mai 2021 — nach einer schwierigen Pandemiezeit — erfolgte die feierliche Eröffnung der Pfingstkirche ELIM, Rennweg 85, Brunn am Gebirge.',
      'ELIM Brunn ist eine Gemeinschaft pfingstlicher Christen rumänischer Herkunft, offen für alle Menschen — unabhängig von Herkunft, Sprache oder Lebenssituation.',
    ],
    elimNameTitle: 'Was bedeutet ELIM?',
    elimName:
      'ELIM (hebräisch: Palmen) ist der Name der Oase, an der das Volk Israel nach dem Auszug aus Ägypten Ruhe und Wasser fand (2. Mose 15,27). Von Anfang an war ELIM ein Ort der Erquickung und Erneuerung für die Seele.',
    visionTitle: 'Unsere Vision',
    vision:
      'Eine geistliche Hilfe für alle Menschen zu sein — eine Oase, in der jeder durch Jesus Christus Harmonie mit Gott dem Schöpfer finden kann. ELIM ist offen für jeden: Einsame, Leidende, Gefangene und Bedrängte sollen hier Liebe, Heilung, Befreiung, Hoffnung und Erlösung finden.',
    missionTitle: 'Unsere Mission',
    mission:
      'Menschen helfen, zu Gott zu kommen, die Sünde zu verlassen und gerettet zu werden. Wir wünschen uns, dass alle Gemeindemitglieder in Hingabe und Beziehung zu Gott wachsen — als würdige Nachfolger Christi, bereit zum Dienst, bewusst und verantwortungsvoll in ihrem Tun.',
    timelineTitle: 'Meilensteine',
    timeline: [
      { year: '1981', title: 'Traiskirchen', text: 'Rumänische Glaubensgeschwister im Lager — Gebet und Bibelstudium.' },
      { year: '1984', title: 'Wien', text: 'Eröffnung der ersten rumänischen Pfingstkirche in Wien.' },
      { year: '1989', title: 'Verein', text: 'Gründung des „Verein der Gemeinde Gottes in Österreich“.' },
      { year: '2001', title: 'Anerkennung', text: 'Rechtspersönlichkeit als Pfingstkirche Gemeinde Gottes in Österreich.' },
      { year: '2005', title: 'ELIM Wien', text: 'Einweihung Maculangasse 9, Wien.' },
      { year: '2017', title: 'Brunn', text: 'Baubeginn des Gotteshauses in Brunn am Gebirge.' },
      { year: '8. Mai 2021', title: 'ELIM Brunn', text: 'Feierliche Eröffnung, Rennweg 85.' },
    ],
  },
  contact: {
    id: 'kontakt',
    title: 'Kontakt & Anfahrt',
    subtitle: 'Wir freuen uns auf Ihre Nachricht oder Ihren Besuch.',
    addressLabel: 'Adresse',
    address: 'Rennweg 85, 2345 Brunn am Gebirge, Österreich',
    phoneLabel: 'Telefon',
    phone: '+43 699 19224639',
    phoneHref: 'tel:+4369919224639',
    emailLabel: 'E-Mail',
    email: 'office@elim-brunn.at',
    emailHref: 'mailto:office@elim-brunn.at',
    pressEmailLabel: 'Presse',
    pressEmail: 'presse@gemeindegottes.at',
    pressEmailHref: 'mailto:presse@gemeindegottes.at',
    transportTitle: 'Anreise mit öffentlichen Verkehrsmitteln',
    transportSteps: [
      'Von der U-Bahn-Station Siebenhirten (U6) nehmen Sie den Bus 269 Richtung „Mödling Bhf. via Südstadt“ bis zur Haltestelle „Brunn/Geb. Industriestraße B“.',
      'Ca. 6 Minuten zu Fuß auf der Industriestraße B zurück in Richtung Kreisel.',
      'Links in die Brunner Straße, an der nächsten Möglichkeit rechts in den Rennweg.',
      'Nach ca. 60 m sehen Sie die Kirche auf der rechten Seite.',
    ],
    bankTitle: 'Kontodaten der Gemeinde',
    donateBankTitle: 'Kontodaten für Hilfe & Spenden',
    banks: [
      {
        label: 'Gemeindekonto',
        holder: 'Pfingstkirche Gemeinde Gottes ELIM',
        iban: 'AT32 2011 1282 6751 8719',
        bic: 'GIBAATWWXXX',
      },
    ],
    donateBanks: [
      {
        label: 'Spenden & Hilfe',
        holder: 'Pfingstkirche Gemeinde Gottes ELIM',
        iban: 'AT48 2011 1282 6751 8722',
        bic: 'GIBAATWWXXX',
      },
    ],
    mapTitle: 'So finden Sie uns',
    formTitle: 'Senden Sie uns eine Nachricht',
    form: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Senden',
      success: 'Vielen Dank — wir melden uns so bald wie möglich bei Ihnen.',
    },
  },
  ui: {
    timelineScrollHint: '↓ Scrollen · Zeitstrahl bewegt sich →',
    navHomeAria: 'ELIM — Startseite',
    navLanguageAria: 'Sprache',
    navMenuOpen: 'Menü öffnen',
    navMenuClose: 'Menü schließen',
    sermonPlayAria: 'Abspielen',
    bankIban: 'IBAN',
    bankBic: 'BIC',
    socialFacebook: 'Facebook',
    socialYoutube: 'YouTube',
    socialInstagram: 'Instagram',
  },
  footer: {
    tagline: 'Pfingstkirche ELIM — Brunn am Gebirge',
    affiliation: 'Pfingstkirche Gemeinde Gottes in Österreich',
    copyright: '© ELIM Pfingstkirche Brunn am Gebirge',
    email: 'office@elim-brunn.at',
    links: [
      { path: '/anunturi', label: 'Ankündigungen' },
      { path: '/live', label: 'Live' },
      { path: '/kontakt', label: 'Kontakt' },
    ],
    partnerLinks: [
      { label: 'ELIM Wien', href: 'https://www.elim-wien.at' },
      { label: 'Gemeinde Gottes', href: 'https://www.gemeindegottes.at' },
    ],
    impressum: 'Impressum',
    impressumUrl: 'https://www.elim-brunn.at/impressum/',
    privacy: 'Datenschutz',
    privacyUrl: 'https://www.elim-brunn.at/datenschutzbestimmungen/',
  },
}

export default de
