import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { spring } from '../../lib/motion'

interface HoverLiftProps {
  children: ReactNode
  className?: string
}

export function HoverLift({ children, className = '' }: HoverLiftProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={spring.soft}
    >
      {children}
    </motion.div>
  )
}
