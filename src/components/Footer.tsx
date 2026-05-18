import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { EXTERNAL } from '../config/links'
import { useLanguage } from '../context/LanguageContext'
import { spring } from '../lib/motion'
import { ScrollReveal } from './ui/ScrollReveal'
import { LogoFull } from './ui/Logo'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './ui/SocialIcons'

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-parchment/60 transition-colors hover:text-gold"
      aria-label={label}
      whileHover={reduceMotion ? undefined : { scale: 1.15, y: -2 }}
      transition={spring.soft}
    >
      {children}
    </motion.a>
  )
}

export function Footer() {
  const { content } = useLanguage()
  const { footer, ui } = content

  return (
    <ScrollReveal variant="fadeIn">
    <footer className="bg-ink py-16 text-parchment">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 border-b border-gold/25 pb-10 text-center md:flex-row md:justify-between md:text-left">
          <Link to="/">
            <LogoFull className="h-20 w-auto md:h-24" />
          </Link>
          <div className="max-w-md">
            <p className="font-body text-base text-parchment/70">{footer.tagline}</p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-2 inline-block font-body text-base text-gold transition-colors hover:text-gold/80"
            >
              {footer.email}
            </a>
          </div>
          <div className="flex gap-4">
            <SocialLink href={EXTERNAL.facebook} label={ui.socialFacebook}>
              <FacebookIcon />
            </SocialLink>
            <SocialLink href={EXTERNAL.youtube} label={ui.socialYoutube}>
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href={EXTERNAL.instagram} label={ui.socialInstagram}>
              <InstagramIcon />
            </SocialLink>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:justify-start">
              {footer.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm uppercase tracking-caps text-parchment/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footer.partnerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm uppercase tracking-caps text-parchment/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center font-body text-sm text-stone-light md:text-right">
            {footer.affiliation}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-body text-sm text-parchment/40">
          <span>
            {footer.copyright} · {new Date().getFullYear()}
          </span>
          <span aria-hidden>·</span>
          <a href={footer.impressumUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            {footer.impressum}
          </a>
          <span aria-hidden>·</span>
          <a href={footer.privacyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            {footer.privacy}
          </a>
        </div>
      </div>
    </footer>
    </ScrollReveal>
  )
}
