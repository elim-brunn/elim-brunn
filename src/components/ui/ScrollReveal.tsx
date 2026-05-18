import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut, viewport } from '../../lib/motion'

export type RevealVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale'

const variants: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants[variant]}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  )
}
