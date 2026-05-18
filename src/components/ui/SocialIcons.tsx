interface IconProps {
  className?: string
}

export function FacebookIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={className} aria-hidden>
      <path d="M22 12c0-2.5-1.5-4-4-4.5C15 7 12 7 12 7s-3 0-6 .5C3 8 2 9.5 2 12s1 4 4 4.5c3 .5 6 .5 6 .5s3 0 6-.5c2.5-.5 4-2 4-4.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function InstagramIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}
