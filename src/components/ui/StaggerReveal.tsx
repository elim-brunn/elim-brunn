import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut, viewport } from '../../lib/motion'

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  stagger?: number
}

export function StaggerReveal({ children, className = '', stagger = 0.1 }: StaggerRevealProps) {
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
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
      }}
    >
      {children}
    </motion.div>
  )
}
