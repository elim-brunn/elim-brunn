import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { easeOut } from '../lib/motion'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ScrollToTop } from '../components/ScrollToTop'
import { usePageTitle } from '../hooks/usePageTitle'
import { ROUTES } from '../routes/paths'

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home
  const reduceMotion = useReducedMotion()
  usePageTitle()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className={isHome ? undefined : 'pt-20'}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
