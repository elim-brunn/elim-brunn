import { BookOpen, Church, Flame, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { HoverLift } from '../ui/HoverLift'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons: LucideIcon[] = [BookOpen, Church, Flame, Users]

export function Beliefs() {
  const { content } = useLanguage()
  const { beliefs } = content

  return (
    <section id={beliefs.id} className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal variant="fadeIn">
          <SectionHeading title={beliefs.title} subtitle={beliefs.subtitle} light />
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beliefs.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <ScrollReveal key={item.title} delay={index * 0.08} variant="scale">
                <HoverLift className="h-full">
                  <article className="h-full border-t-2 border-burgundy bg-ink-light/50 p-6 transition-colors duration-300 hover:bg-ink-light/80 hover:shadow-lg hover:shadow-black/20">
                    <Icon className="mb-4 h-6 w-6 text-gold" strokeWidth={1.25} />
                    <h3 className="font-serif text-2xl text-gold">{item.title}</h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-parchment/75">
                      {item.text}
                    </p>
                  </article>
                </HoverLift>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
