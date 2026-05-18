import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { easeOut, spring } from '../lib/motion'
import { ROUTES } from '../routes/paths'
import { LogoIcon } from './ui/Logo'

export function Navbar() {
  const { locale, setLocale, content } = useLanguage()
  const { ui } = content
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  const isHome = pathname === ROUTES.home
  const solid = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm font-medium uppercase tracking-caps transition-colors ${
      isActive ? 'text-gold' : 'text-parchment/85 hover:text-gold'
    }`

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm uppercase tracking-caps ${isActive ? 'text-gold' : 'text-parchment/90'}`

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? 'bg-ink/95 shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
      initial={reduceMotion ? false : { y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <motion.div whileHover={reduceMotion ? undefined : { scale: 1.04 }} transition={spring.soft}>
          <Link to={ROUTES.home} className="opacity-95 transition-opacity hover:opacity-100" aria-label={ui.navHomeAria}>
            <LogoIcon className="h-11 w-auto md:h-12" />
          </Link>
        </motion.div>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {content.nav.links.map((link, i) => (
              <motion.li
                key={link.path}
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easeOut, delay: 0.15 + i * 0.04 }}
              >
                <NavLink to={link.path} className={linkClass} end={link.path === ROUTES.home}>
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="flex rounded-dignified border border-parchment/20 p-0.5 text-sm font-medium uppercase tracking-caps"
            role="group"
            aria-label={ui.navLanguageAria}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {(['de', 'ro'] as const).map((lang) => (
              <motion.button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                className={`rounded-dignified px-3 py-1 transition-colors ${
                  locale === lang
                    ? 'bg-burgundy/30 text-gold'
                    : 'text-parchment/60 hover:text-parchment'
                }`}
              >
                {content.nav.languageToggle[lang]}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.button
          type="button"
          className="text-parchment md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? ui.navMenuClose : ui.navMenuOpen}
          whileTap={reduceMotion ? undefined : { scale: 0.9 }}
        >
          {mobileOpen ? <X className="h-6 w-6" strokeWidth={1.25} /> : <Menu className="h-6 w-6" strokeWidth={1.25} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="overflow-hidden border-t border-parchment/10 bg-ink/98 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <motion.div
              className="px-6 py-6"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.25 }}
            >
              <ul className="space-y-4">
                {content.nav.links.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.3 }}
                  >
                    <NavLink to={link.path} className={mobileLinkClass} end={link.path === ROUTES.home}>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                {(['de', 'ro'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLocale(lang)}
                    className={`rounded-dignified border px-4 py-2 text-sm uppercase tracking-caps ${
                      locale === lang
                        ? 'border-burgundy text-gold'
                        : 'border-parchment/20 text-parchment/70'
                    }`}
                  >
                    {content.nav.languageToggle[lang]}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
