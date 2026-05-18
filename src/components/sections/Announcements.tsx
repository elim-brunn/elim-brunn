import { Megaphone } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { HoverLift } from '../ui/HoverLift'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Announcements() {
  const { content } = useLanguage()
  const { announcements } = content

  return (
    <section id={announcements.id} className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={announcements.title} subtitle={announcements.subtitle} light />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {announcements.items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08} variant="scale">
              <HoverLift className="h-full">
              <article className="flex h-full flex-col border border-gold/25 bg-ink-light/50 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/25">
                <Megaphone className="mb-4 h-6 w-6 text-gold" strokeWidth={1.25} />
                <p className="font-body text-sm uppercase tracking-caps text-gold/70">{item.date}</p>
                <h3 className="mt-2 font-serif text-2xl text-parchment">{item.title}</h3>
                <p className="mt-4 flex-1 font-body text-base leading-relaxed text-parchment/75">
                  {item.excerpt}
                </p>
              </article>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
