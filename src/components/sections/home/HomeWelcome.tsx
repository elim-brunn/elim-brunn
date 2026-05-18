import pastorPhoto from '../../../assets/Ioan-Vlas.jpg'
import { useLanguage } from '../../../context/LanguageContext'
import { BibleQuote } from '../../ui/BibleQuote'
import { OrnamentalDivider } from '../../ui/OrnamentalDivider'
import { ScrollReveal } from '../../ui/ScrollReveal'

export function HomeWelcome() {
  const { content } = useLanguage()
  const { welcome } = content.home

  return (
    <section className="bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <OrnamentalDivider />
            <h2 className="mt-6 font-serif text-4xl text-burgundy md:text-5xl">{welcome.title}</h2>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <ScrollReveal className="flex flex-col items-center lg:items-start" variant="fadeLeft">
            <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-gold/70 p-1 shadow-md shadow-burgundy/10 transition-shadow duration-500 hover:shadow-lg hover:shadow-burgundy/15">
              <img
                src={pastorPhoto}
                alt={welcome.pastorName}
                className="h-full w-full rounded-full object-cover object-[center_20%]"
                width={224}
                height={224}
              />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-burgundy">{welcome.pastorName}</h3>
            <p className="font-body text-sm uppercase tracking-caps text-stone md:text-base">{welcome.pastorRole}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} variant="fadeRight">
            <p className="font-serif text-xl text-burgundy">{welcome.greeting}</p>
            <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-stone md:text-xl">
              {welcome.body.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <BibleQuote text={welcome.verse} reference={welcome.verseRef} />
              <p className="mt-6 font-body text-base italic text-stone">{welcome.signature}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}