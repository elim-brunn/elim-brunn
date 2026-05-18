import { OrnamentalDivider } from './OrnamentalDivider'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <OrnamentalDivider className="mb-6" />
      <h2
        className={`font-serif text-4xl md:text-5xl tracking-tight ${
          light ? 'text-parchment' : 'text-burgundy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl font-body text-xl leading-relaxed ${
            light ? 'text-parchment/80' : 'text-stone'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
