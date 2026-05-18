export type Locale = 'de' | 'ro'

export interface NavLink {
  path: string
  label: string
}

export interface Belief {
  title: string
  text: string
}

export interface ServiceSlot {
  time: string
  note?: string
}

export interface ServiceDay {
  id: string
  day: string
  slots: ServiceSlot[]
}

export interface SundaySlotLabels {
  morning: string
  evening: string
}

export interface SundayScheduleLabels {
  regular: SundaySlotLabels
  first: SundaySlotLabels
  third: SundaySlotLabels
}

export interface VisitorInfo {
  title: string
  text: string
}

export interface Sermon {
  date: string
  title: string
  speaker: string
  duration: string
}

export interface TimelineEvent {
  year: string
  title: string
  text: string
}

export interface Announcement {
  date: string
  title: string
  excerpt: string
}

export interface BankAccount {
  label: string
  holder: string
  iban: string
  bic: string
}

export interface ExternalLink {
  label: string
  href: string
}

export interface Content {
  meta: {
    title: string
    description: string
  }
  nav: {
    links: NavLink[]
    languageToggle: { de: string; ro: string }
  }
  hero: {
    tagline: string
    headline: string
  }
  home: {
    welcome: {
      title: string
      pastorName: string
      pastorRole: string
      greeting: string
      body: string[]
      verse: string
      verseRef: string
      signature: string
    }
    live: {
      hint: string
    }
    program: {
      title: string
      intro: string
      slots: { day: string; time: string; activity: string }[]
      cta: string
    }
  }
  beliefs: {
    id: string
    title: string
    subtitle: string
    items: Belief[]
  }
  services: {
    id: string
    title: string
    subtitle: string
    timesLabel: string
    weekly: ServiceDay[]
    sundayCalendar: {
      title: string
      intro: string
      firstSundayHeading: string
      thirdSundayHeading: string
      thisMonth: string
      nextSunday: string
      labels: SundayScheduleLabels
    }
    languageNote: string
    expectTitle: string
    expectBody: string[]
    visitorTitle: string
    visitors: VisitorInfo[]
  }
  announcements: {
    id: string
    title: string
    subtitle: string
    items: Announcement[]
  }
  live: {
    id: string
    title: string
    subtitle: string
    description: string
    watchLive: string
    videoArchive: string
    liveUrl: string
    archiveUrl: string
  }
  sermons: {
    id: string
    title: string
    subtitle: string
    items: Sermon[]
    viewAll: string
  }
  about: {
    id: string
    title: string
    subtitle: string
    whoWeAreTitle: string
    heritage: string[]
    elimNameTitle: string
    elimName: string
    visionTitle: string
    vision: string
    missionTitle: string
    mission: string
    timelineTitle: string
    timeline: TimelineEvent[]
  }
  contact: {
    id: string
    title: string
    subtitle: string
    addressLabel: string
    address: string
    phoneLabel: string
    phone: string
    phoneHref: string
    emailLabel: string
    email: string
    emailHref: string
    pressEmailLabel: string
    pressEmail: string
    pressEmailHref: string
    transportTitle: string
    transportSteps: string[]
    bankTitle: string
    donateBankTitle: string
    banks: BankAccount[]
    donateBanks: BankAccount[]
    mapTitle: string
    formTitle: string
    form: {
      name: string
      email: string
      message: string
      submit: string
      success: string
    }
  }
  ui: {
    timelineScrollHint: string
    navHomeAria: string
    navLanguageAria: string
    navMenuOpen: string
    navMenuClose: string
    sermonPlayAria: string
    bankIban: string
    bankBic: string
    socialFacebook: string
    socialYoutube: string
    socialInstagram: string
  }
  footer: {
    tagline: string
    affiliation: string
    copyright: string
    email: string
    links: NavLink[]
    partnerLinks: ExternalLink[]
    impressum: string
    impressumUrl: string
    privacy: string
    privacyUrl: string
  }
}
