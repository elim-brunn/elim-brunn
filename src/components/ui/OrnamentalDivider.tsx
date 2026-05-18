import { motion, useReducedMotion } from 'framer-motion'
import { easeOut, viewport } from '../../lib/motion'

export function OrnamentalDivider({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  const lineClass = 'h-px w-12 bg-gold/50'

  if (reduceMotion) {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
        <span className={lineClass} />
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-gold/70">
          <path d="M10 0L12 4H8L10 0Z" fill="currentColor" />
          <circle cx="10" cy="8" r="1.5" fill="currentColor" />
          <path d="M2 11h16" stroke="currentColor" strokeWidth="0.75" />
        </svg>
        <span className={lineClass} />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <motion.span
        className={`${lineClass} origin-right`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: easeOut }}
      />
      <motion.svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        className="text-gold/70"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
      >
        <path d="M10 0L12 4H8L10 0Z" fill="currentColor" />
        <circle cx="10" cy="8" r="1.5" fill="currentColor" />
        <path d="M2 11h16" stroke="currentColor" strokeWidth="0.75" />
      </motion.svg>
      <motion.span
        className={`${lineClass} origin-left`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
      />
    </div>
  )
}
