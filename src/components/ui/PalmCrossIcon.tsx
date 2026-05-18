interface PalmCrossIconProps {
  className?: string
}

export function PalmCrossIcon({ className = 'h-5 w-5' }: PalmCrossIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3v18" />
      <path d="M8 7h8" />
      <path d="M6 20c2-4 4-6 6-6s4 2 6 6" />
      <path d="M9 14c.5-2 1.5-3 3-3s2.5 1 3 3" />
    </svg>
  )
}
