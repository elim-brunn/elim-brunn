import { Headphones, Play } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { Button } from '../ui/Button'
import { HoverLift } from '../ui/HoverLift'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Sermons() {
  const { content } = useLanguage()
  const { sermons } = content

  return (
    <section id={sermons.id} className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={sermons.title} subtitle={sermons.subtitle} light />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {sermons.items.map((sermon, index) => (
            <ScrollReveal key={sermon.title} delay={index * 0.08} variant="scale">
              <HoverLift className="h-full">
              <article className="group flex h-full flex-col border border-gold/20 bg-ink-light/40 p-6 transition-colors duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-black/20">
                <p className="font-body text-sm uppercase tracking-caps text-gold/70">{sermon.date}</p>
                <h3 className="mt-3 font-serif text-xl text-parchment group-hover:text-gold">
                  {sermon.title}
                </h3>
                <p className="mt-2 font-body text-base text-parchment/60">{sermon.speaker}</p>
                <p className="mt-1 font-body text-sm text-parchment/50">{sermon.duration}</p>
                <div className="mt-auto flex items-center gap-3 pt-6">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-dignified border border-gold/40 text-gold transition-colors hover:bg-gold/10"
                    aria-label={content.ui.sermonPlayAria}
                  >
                    <Play className="h-4 w-4" strokeWidth={1.25} />
                  </button>
                  <Headphones className="h-4 w-4 text-parchment/40" strokeWidth={1.25} />
                </div>
              </article>
              </HoverLift>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Button
            variant="outline-light"
            className="border-gold text-gold hover:border-gold hover:bg-gold/10"
          >
            {sermons.viewAll}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
