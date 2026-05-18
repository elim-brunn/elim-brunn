import { useLanguage } from '../../context/LanguageContext'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { AboutTimeline } from './AboutTimeline'

export function About() {
  const { content } = useLanguage()
  const { about } = content

  return (
    <section id={about.id} className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={about.title} subtitle={about.subtitle} />
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h3 className="font-serif text-2xl text-burgundy">{about.whoWeAreTitle}</h3>
          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-stone md:text-lg">
            {about.heritage.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={0.05} variant="fadeLeft">
            <h3 className="font-serif text-2xl text-burgundy">{about.elimNameTitle}</h3>
            <p className="mt-4 font-body text-base leading-relaxed text-stone md:text-lg">{about.elimName}</p>

            <h3 className="mt-10 font-serif text-2xl text-burgundy">{about.visionTitle}</h3>
            <p className="mt-4 font-body text-base leading-relaxed text-stone md:text-lg">{about.vision}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fadeRight">
            <h3 className="font-serif text-2xl text-burgundy">{about.missionTitle}</h3>
            <p className="mt-4 font-body text-base leading-relaxed text-stone md:text-lg">{about.mission}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp">
          <AboutTimeline title={about.timelineTitle} events={about.timeline} />
        </ScrollReveal>
      </div>
    </section>
  )
}
