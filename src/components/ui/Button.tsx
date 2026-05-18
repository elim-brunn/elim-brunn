import { motion, useReducedMotion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { spring } from '../../lib/motion'

type ButtonVariant = 'primary' | 'outline' | 'outline-light'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  to?: string
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-burgundy text-parchment hover:bg-burgundy/90 border border-burgundy',
  outline:
    'bg-transparent text-burgundy border border-burgundy hover:bg-burgundy/5',
  'outline-light':
    'bg-transparent text-parchment border border-parchment/60 hover:bg-parchment/10',
}

const MotionLink = motion.create(Link)
const MotionAnchor = motion.a

function useMotionProps() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return {}
  return {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
    transition: spring.snappy,
  }
}

export function Button({
  variant = 'primary',
  href,
  to,
  children,
  className = '',
  type,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-dignified px-6 py-3 font-body text-base font-medium tracking-caps uppercase transition-colors duration-300 ${variants[variant]} ${className}`
  const motionProps = useMotionProps()

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionAnchor href={href} className={classes} target="_blank" rel="noopener noreferrer" {...motionProps}>
        {children}
      </MotionAnchor>
    )
  }

  const { onClick, disabled, name, value, form, autoFocus, tabIndex } = props

  return (
    <motion.button
      type={type ?? 'button'}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      name={name}
      value={value}
      form={form}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
