import { Clock, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import { ROUTES } from '../../../routes/paths'
import { Button } from '../../ui/Button'
import { OrnamentalDivider } from '../../ui/OrnamentalDivider'
import { HoverLift } from '../../ui/HoverLift'
import { ScrollReveal } from '../../ui/ScrollReveal'
import { StaggerItem, StaggerReveal } from '../../ui/StaggerReveal'

function isSunday(day: string) {
  const d = day.toLowerCase()
  return d.includes('sonn') || d.includes('dumin')
}

export function HomeProgram() {
  const { content } = useLanguage()
  const { program, live } = content.home
  const sundays = program.slots.filter((s) => isSunday(s.day))
  const weekdays = program.slots.filter((s) => !isSunday(s.day))
  const sundayLabel = sundays[0]?.day

  return (
    <section className="border-t border-burgundy/10 bg-parchment/80 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <OrnamentalDivider />
            <h2 className="mt-6 font-serif text-3xl text-burgundy md:text-4xl">{program.title}</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-stone md:text-lg">{program.intro}</p>
          </div>
        </ScrollReveal>

        {sundays.length > 0 && (
          <ScrollReveal className="mx-auto mt-14 max-w-md" delay={0.08} variant="scale">
            <HoverLift>
            <article className="border border-burgundy/15 bg-white/60 px-8 py-8 transition-shadow duration-300 hover:shadow-md hover:shadow-burgundy/10">
              <p className="text-center font-body text-sm uppercase tracking-caps text-stone">{sundayLabel}</p>
              <ul className="mt-6 space-y-5">
                {sundays.map((slot) => (
                  <li key={slot.time} className="flex items-baseline justify-between gap-4 border-t border-gold/25 pt-5 first:border-0 first:pt-0">
                    <span className="font-serif text-2xl text-burgundy">{slot.time}</span>
                    <span className="text-right font-body text-base text-stone">{slot.activity}</span>
                  </li>
                ))}
              </ul>
            </article>
            </HoverLift>
          </ScrollReveal>
        )}

        <StaggerReveal className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {weekdays.map((slot) => (
            <StaggerItem key={`${slot.day}-${slot.time}`} className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-burgundy/50" strokeWidth={1.25} />
              <div>
                <p className="font-serif text-lg text-burgundy">{slot.day}</p>
                <p className="mt-1 font-body font-medium text-stone">{slot.time}</p>
                <p className="mt-0.5 font-body text-base text-stone/80">{slot.activity}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal className="mt-14 text-center">
          <Button variant="outline" to={ROUTES.services}>
            {program.cta}
          </Button>
          <p className="mt-8">
            <Link
              to={ROUTES.live}
              className="inline-flex items-center gap-2 font-body text-base text-stone/60 transition-colors hover:text-burgundy"
            >
              <Radio className="h-3.5 w-3.5 shrink-0" strokeWidth={1.25} aria-hidden />
              {live.hint}
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
