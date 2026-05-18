/** Shared motion tokens — dignified, smooth, not bouncy */
export const easeOut = [0.22, 1, 0.36, 1] as const

export const transition = {
  smooth: { duration: 0.65, ease: easeOut },
  slow: { duration: 0.85, ease: easeOut },
  quick: { duration: 0.35, ease: easeOut },
} as const

export const spring = {
  soft: { type: 'spring' as const, stiffness: 260, damping: 26 },
  snappy: { type: 'spring' as const, stiffness: 400, damping: 28 },
}

export const viewport = { once: true, margin: '-80px' as const }
