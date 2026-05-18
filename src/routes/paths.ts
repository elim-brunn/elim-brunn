export const ROUTES = {
  home: '/',
  services: '/gottesdienste',
  announcements: '/anunturi',
  live: '/live',
  sermons: '/predigten',
  about: '/ueber-uns',
  contact: '/kontakt',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
