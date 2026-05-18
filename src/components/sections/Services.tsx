import { Baby, Car, Calendar, Languages } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import {
  getNextSunday,
  getSpecialSundaysInMonth,
  getSundaySchedule,
} from '../../lib/sundaySchedule'
import { HoverLift } from '../ui/HoverLift'
import { ScrollReveal } from '../ui/ScrollReveal'
import { StaggerItem, StaggerReveal } from '../ui/StaggerReveal'
import { SectionHeading } from '../ui/SectionHeading'

const visitorIcons: LucideIcon[] = [Languages, Baby, Car]

function formatSundayDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale === 'ro' ? 'ro-RO' : 'de-AT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function Services() {
  const { locale, content } = useLanguage()
  const { services } = content
  const { sundayCalendar } = services

  const now = useMemo(() => new Date(), [])
  const dateLocale = locale === 'ro' ? 'ro-RO' : 'de-AT'

  const specialSundaysThisMonth = useMemo(
    () => getSpecialSundaysInMonth(now.getFullYear(), now.getMonth(), sundayCalendar.labels),
    [now, sundayCalendar.labels],
  )

  const nextSundaySchedule = useMemo(
    () => getSundaySchedule(getNextSunday(now), sundayCalendar.labels),
    [now, sundayCalendar.labels],
  )

  const sundayHeading = (kind: 'first' | 'third'): string =>
    kind === 'first' ? sundayCalendar.firstSundayHeading : sundayCalendar.thirdSundayHeading

  return (
    <section id={services.id} className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={services.title} subtitle={services.subtitle} />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal variant="fadeLeft">
            <h3 className="font-serif text-2xl text-burgundy">{services.timesLabel}</h3>
            <StaggerReveal className="mt-6 space-y-6" stagger={0.1}>
              {services.weekly.map((day) => (
                <StaggerItem key={day.id} className="border-b border-burgundy/10 pb-6">
                  <span className="font-serif text-xl text-burgundy">{day.day}</span>
                  <ul className="mt-3 space-y-3">
                    {day.slots.map((slot) => (
                      <li key={`${day.id}-${slot.time}`} className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-body text-lg font-medium text-gold">{slot.time}</span>
                        {slot.note && (
                          <span className="w-full font-body text-base text-stone">{slot.note}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {day.id === 'sunday' && (
                    <p className="mt-3 font-body text-base text-stone">{sundayCalendar.intro}</p>
                  )}
                </StaggerItem>
              ))}
            </StaggerReveal>

            <p className="mt-8 flex gap-3 border-l-2 border-burgundy/40 bg-burgundy/5 px-4 py-4 font-body text-base leading-relaxed text-stone">
              <Languages className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" strokeWidth={1.25} />
              {services.languageNote}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fadeRight">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-burgundy" strokeWidth={1.25} />
              <h3 className="font-serif text-2xl text-burgundy">{sundayCalendar.title}</h3>
            </div>

            <div className="mt-6 space-y-4 border border-burgundy/15 bg-white/50 p-6">
              <div>
                <p className="font-body text-sm uppercase tracking-caps text-stone">
                  {sundayCalendar.nextSunday}
                </p>
                <p className="mt-1 font-serif text-lg text-burgundy">
                  {formatSundayDate(nextSundaySchedule.date, locale)}
                </p>
                <ul className="mt-3 space-y-2 font-body text-base text-stone">
                  <li>
                    <span className="font-medium text-gold">{nextSundaySchedule.morning.time}</span>
                    {' — '}
                    {nextSundaySchedule.morning.label}
                  </li>
                  <li>
                    <span className="font-medium text-gold">{nextSundaySchedule.evening.time}</span>
                    {' — '}
                    {nextSundaySchedule.evening.label}
                  </li>
                </ul>
              </div>

              <hr className="border-burgundy/10" />

              <div>
                <p className="font-body text-sm uppercase tracking-caps text-stone">
                  {sundayCalendar.thisMonth}
                </p>
                <ul className="mt-4 space-y-6">
                  {specialSundaysThisMonth.map((sunday) => (
                    <li key={sunday.date.toISOString()}>
                      <p className="font-serif text-lg text-burgundy">
                        {sundayHeading(sunday.kind)}
                      </p>
                      <p className="font-body text-base text-stone">
                        {sunday.date.toLocaleDateString(dateLocale, {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </p>
                      <ul className="mt-2 space-y-1 font-body text-base text-stone">
                        <li>
                          <span className="font-medium text-gold">{sunday.morning.time}</span>
                          {' — '}
                          {sunday.morning.label}
                        </li>
                        <li>
                          <span className="font-medium text-gold">{sunday.evening.time}</span>
                          {' — '}
                          {sunday.evening.label}
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-10 font-serif text-2xl text-burgundy">{services.expectTitle}</h3>
            <div className="mt-6 space-y-4 font-body leading-relaxed text-stone">
              {services.expectBody.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20" variant="fadeUp">
          <h3 className="text-center font-serif text-2xl text-burgundy">{services.visitorTitle}</h3>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {services.visitors.map((item, i) => {
              const Icon = visitorIcons[i]
              return (
                <ScrollReveal key={item.title} delay={i * 0.1} variant="scale">
                  <HoverLift>
                    <article className="border border-burgundy/10 bg-white/40 p-6 text-center transition-shadow duration-300 hover:shadow-md md:text-left">
                      <Icon className="mx-auto mb-4 h-6 w-6 text-gold md:mx-0" strokeWidth={1.25} />
                      <h4 className="font-serif text-lg text-burgundy">{item.title}</h4>
                      <p className="mt-3 font-body text-base leading-relaxed text-stone">{item.text}</p>
                    </article>
                  </HoverLift>
                </ScrollReveal>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
