import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import de from '../content/de'
import ro from '../content/ro'
import type { Content, Locale } from '../content/types'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  content: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'elim-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'ro' ? 'ro' : 'de'
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const content = locale === 'ro' ? ro : de

  useEffect(() => {
    document.documentElement.lang = locale === 'ro' ? 'ro' : 'de'
    document.title = content.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', content.meta.description)
  }, [locale, content.meta.title, content.meta.description])

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
