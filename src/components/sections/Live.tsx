import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Radio } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { easeOut } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Live() {
  const { content } = useLanguage()
  const { live } = content
  const reduceMotion = useReducedMotion()

  return (
    <section id={live.id} className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <SectionHeading title={live.title} subtitle={live.subtitle} />
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={0.1} variant="scale">
          <motion.div
            className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-burgundy/20 bg-burgundy/5"
            animate={
              reduceMotion
                ? undefined
                : {
                    boxShadow: [
                      '0 0 0 0 rgba(196, 18, 26, 0)',
                      '0 0 0 12px rgba(196, 18, 26, 0.08)',
                      '0 0 0 0 rgba(196, 18, 26, 0)',
                    ],
                  }
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: easeOut }}
          >
            <Radio className="h-16 w-16 text-burgundy/40" strokeWidth={1} />
          </motion.div>
          <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-stone md:text-xl">
            {live.description}
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
          >
            <Button href={live.liveUrl} variant="primary" className="gap-2">
              <ExternalLink className="h-4 w-4" strokeWidth={1.25} />
              {live.watchLive}
            </Button>
            <Button href={live.archiveUrl} variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" strokeWidth={1.25} />
              {live.videoArchive}
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
