import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { easeOut, transition } from '../../lib/motion'

function CrossRaysOverlay() {
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.14 }}
      transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="var(--elim-tan)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--elim-black)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="800" fill="url(#heroGlow)" />
      <g stroke="var(--elim-tan)" strokeWidth="0.75" opacity="0.55">
        <line x1="400" y1="120" x2="400" y2="680" />
        <line x1="120" y1="400" x2="680" y2="400" />
      </g>
    </motion.svg>
  )
}

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
}

export function Hero() {
  const { content } = useLanguage()
  const { hero } = content
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink text-parchment md:min-h-[80vh]">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(165deg, var(--elim-black) 0%, #141414 45%, var(--elim-black) 100%)',
        }}
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 80%, rgba(196,18,26,0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(197,176,151,0.12) 0%, transparent 40%)
          `,
        }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ ...transition.slow, delay: 0.2 }}
      />
      <CrossRaysOverlay />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center lg:px-8">
        {reduceMotion ? (
          <>
            <p className="font-body text-base uppercase tracking-[0.3em] text-gold md:text-lg">
              {hero.tagline}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-tight tracking-tight md:text-8xl">
              {hero.headline}
            </h1>
          </>
        ) : (
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.p
              variants={heroItem}
              className="font-body text-base uppercase tracking-[0.3em] text-gold md:text-lg"
            >
              {hero.tagline}
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="mt-6 font-serif text-6xl leading-tight tracking-tight md:text-8xl"
            >
              {hero.headline}
            </motion.h1>
          </motion.div>
        )}
      </div>
    </section>
  )
}
