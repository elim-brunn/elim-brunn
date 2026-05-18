interface BibleQuoteProps {
  text: string
  reference: string
  light?: boolean
  className?: string
}

export function BibleQuote({ text, reference, light = false, className = '' }: BibleQuoteProps) {
  return (
    <blockquote
      className={`border-l-2 pl-6 font-serif text-xl italic leading-relaxed md:text-2xl ${
        light ? 'border-gold text-gold/95' : 'border-burgundy text-burgundy/90'
      } ${className}`}
    >
      <p>
        <span
          className={`float-left mr-2 font-serif text-4xl leading-none ${light ? 'text-gold' : 'text-burgundy'}`}
        >
          „
        </span>
        {text}
      </p>
      <footer
        className={`mt-3 font-body text-base not-italic tracking-wide ${light ? 'text-gold/80' : 'text-stone'}`}
      >
        — {reference}
      </footer>
    </blockquote>
  )
}
