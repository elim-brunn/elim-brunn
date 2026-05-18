import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ROUTES } from '../routes/paths'

export function usePageTitle() {
  const { pathname } = useLocation()
  const { content } = useLanguage()

  useEffect(() => {
    const suffix = ' | ELIM Brunn'
    const titles: Record<string, string> = {
      [ROUTES.home]: content.meta.title,
      [ROUTES.services]: `${content.services.title}${suffix}`,
      [ROUTES.announcements]: `${content.announcements.title}${suffix}`,
      [ROUTES.live]: `${content.live.title}${suffix}`,
      [ROUTES.sermons]: `${content.sermons.title}${suffix}`,
      [ROUTES.about]: `${content.about.title}${suffix}`,
      [ROUTES.contact]: `${content.contact.title}${suffix}`,
    }
    document.title = titles[pathname] ?? content.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', content.meta.description)
  }, [pathname, content])
}
