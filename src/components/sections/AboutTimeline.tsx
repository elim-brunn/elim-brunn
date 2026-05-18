import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import type { Content } from '../../content/types'

type TimelineEvent = Content['about']['timeline'][number]

function focusAmount(progress: number, index: number, total: number) {
  if (total <= 1) return 1
  const focal = progress * (total - 1)
  return Math.max(0, 1 - Math.min(Math.abs(focal - index), 1))
}

function HorizontalMilestone({
  event,
  index,
  total,
  scrollYProgress,
}: {
  event: TimelineEvent
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollYProgress, (p) => 0.78 + focusAmount(p, index, total) * 0.32)
  const opacity = useTransform(scrollYProgress, (p) => 0.32 + focusAmount(p, index, total) * 0.68)
  const zIndex = useTransform(scrollYProgress, (p) => (focusAmount(p, index, total) > 0.55 ? 20 : 1))
  const dotScale = useTransform(scrollYProgress, (p) => 0.65 + focusAmount(p, index, total) * 0.5)
  const yearScale = useTransform(scrollYProgress, (p) => 0.88 + focusAmount(p, index, total) * 0.22)

  return (
    <li
      className="grid h-full shrink-0 grid-rows-[1fr_auto_1fr] px-4 md:px-8"
      style={{ width: `${100 / total}%` }}
    >
      {/* Text oberhalb der Achse */}
      <motion.article
        className="relative z-[5] mx-auto flex w-full max-w-[17rem] flex-col justify-end pb-5 text-center md:max-w-xs md:pb-8"
        style={{ scale, opacity, zIndex }}
      >
        <motion.time
          className="block font-serif text-2xl leading-none text-gold md:text-4xl"
          style={{ scale: yearScale }}
          dateTime={event.year}
        >
          {event.year}
        </motion.time>
        <h4 className="mt-2 font-serif text-lg text-burgundy md:mt-3 md:text-xl">{event.title}</h4>
        <p className="mt-2 font-body text-sm leading-relaxed text-stone md:text-base">{event.text}</p>
      </motion.article>

      {/* Punkt auf der Zeitachse */}
      <div className="relative z-10 flex h-12 items-center justify-center md:h-14">
        <motion.span
          className="h-3 w-3 rounded-full border-2 border-parchment bg-gold shadow-[0_0_12px_rgba(197,176,151,0.45)] md:h-3.5 md:w-3.5"
          style={{ scale: dotScale, zIndex }}
          aria-hidden
        />
      </div>

      {/* Abstand unter der Linie */}
      <div aria-hidden />
    </li>
  )
}

function StaticTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="mt-8 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ol className="relative flex w-max items-stretch px-4 md:px-8">
        <span
          className="pointer-events-none absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-gold/40 md:left-8 md:right-8"
          aria-hidden
        />
        {events.map((event) => (
          <li
            key={`${event.year}-${event.title}`}
            className="relative grid w-[min(80vw,18rem)] shrink-0 snap-center grid-rows-[1fr_auto_1fr] px-3 md:w-72 md:px-5"
          >
            <div className="flex flex-col justify-end pb-6 text-center">
              <time className="font-serif text-2xl text-gold">{event.year}</time>
              <h4 className="mt-2 font-serif text-lg text-burgundy">{event.title}</h4>
              <p className="mt-2 font-body text-sm leading-relaxed text-stone">{event.text}</p>
            </div>
            <div className="flex h-12 items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-parchment bg-gold" aria-hidden />
            </div>
            <div aria-hidden />
          </li>
        ))}
      </ol>
    </div>
  )
}

interface AboutTimelineProps {
  title: string
  events: TimelineEvent[]
}

export function AboutTimeline({ title, events }: AboutTimelineProps) {
  const { content } = useLanguage()
  const { ui } = content
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const count = events.length
  const scrollHeightVh = count > 1 ? (count - 1) * 72 + 88 : 88

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', count > 1 ? `-${((count - 1) / count) * 100}%` : '0%'],
  )

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="mt-16">
      <h3 className="text-center font-serif text-2xl text-burgundy md:text-3xl">{title}</h3>

      {reduceMotion ? (
        <StaticTimeline events={events} />
      ) : (
        <section
          ref={sectionRef}
          className="relative mt-6"
          style={{ height: `${scrollHeightVh}vh` }}
          aria-label={title}
        >
          <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col overflow-hidden md:top-24">
            <p className="mb-3 shrink-0 text-center font-body text-xs uppercase tracking-caps text-stone/60">
              {ui.timelineScrollHint}
            </p>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              {/* Zeitachse — mittig, hinter den Punkten */}
              <motion.div
                className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-px -translate-y-1/2 origin-left bg-gold/40"
                style={{ scaleX: lineScaleX }}
                aria-hidden
              />
              {/* dezente Spur der vollen Linie */}
              <div
                className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-px -translate-y-1/2 bg-gold/15"
                aria-hidden
              />

              <motion.ol
                className="relative z-[1] flex h-full list-none"
                style={{
                  x,
                  width: `${count * 100}%`,
                }}
              >
                {events.map((event, index) => (
                  <HorizontalMilestone
                    key={`${event.year}-${event.title}`}
                    event={event}
                    index={index}
                    total={count}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </motion.ol>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
