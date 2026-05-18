import { Bus, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const MAPS_QUERY = 'Rennweg 85, 2345 Brunn am Gebirge, Austria'
const MAPS_EMBED_SRC = `https://www.google.com/maps/embed/v1/place?key=${
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? 'AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU'
}&q=${encodeURIComponent(MAPS_QUERY)}&maptype=roadmap`

function BankBlock({
  title,
  accounts,
  ibanLabel,
  bicLabel,
}: {
  title: string
  accounts: { label: string; holder: string; iban: string; bic: string }[]
  ibanLabel: string
  bicLabel: string
}) {
  return (
    <div>
      <p className="font-body text-sm uppercase tracking-caps text-gold/70">{title}</p>
      <ul className="mt-4 space-y-4">
        {accounts.map((acc) => (
          <li key={acc.iban} className="font-body text-base text-parchment/85">
            <p className="text-gold/90">{acc.label}</p>
            <p className="mt-1">{acc.holder}</p>
            <p className="mt-1 font-mono text-sm text-parchment/70">
              {ibanLabel}: {acc.iban}
            </p>
            <p className="font-mono text-sm text-parchment/70">
              {bicLabel}: {acc.bic}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Contact() {
  const { content } = useLanguage()
  const { contact, ui } = content
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id={contact.id} className="bg-ink py-24 text-parchment md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title={contact.title} subtitle={contact.subtitle} light />
        </ScrollReveal>

        <ScrollReveal className="mt-12" variant="scale">
          <h3 className="font-serif text-xl text-gold">{contact.mapTitle}</h3>
          <div className="mt-4 overflow-hidden border border-gold/20">
            <iframe
              title={contact.mapTitle}
              src={MAPS_EMBED_SRC}
              width="100%"
              height={400}
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <p className="font-body text-sm uppercase tracking-caps text-gold/70">
                  {contact.addressLabel}
                </p>
                <p className="mt-2 flex items-start gap-3 font-body text-parchment/90">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
                  {contact.address}
                </p>
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-caps text-gold/70">
                  {contact.phoneLabel}
                </p>
                <a
                  href={contact.phoneHref}
                  className="mt-2 flex items-center gap-3 font-body text-parchment/90 transition-colors hover:text-gold"
                >
                  <Phone className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="font-body text-sm uppercase tracking-caps text-gold/70">
                  {contact.emailLabel}
                </p>
                <a
                  href={contact.emailHref}
                  className="mt-2 flex items-center gap-3 font-body text-parchment/90 transition-colors hover:text-gold"
                >
                  <Mail className="h-5 w-5 text-gold" strokeWidth={1.25} />
                  {contact.email}
                </a>
                <a
                  href={contact.pressEmailHref}
                  className="mt-2 flex items-center gap-3 font-body text-base text-parchment/70 transition-colors hover:text-gold"
                >
                  {contact.pressEmailLabel}: {contact.pressEmail}
                </a>
              </div>
            </div>

            <div className="mt-10">
              <p className="flex items-center gap-2 font-serif text-xl text-gold">
                <Bus className="h-5 w-5" strokeWidth={1.25} />
                {contact.transportTitle}
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-body text-base leading-relaxed text-parchment/85">
                {contact.transportSteps.map((step) => (
                  <li key={step.slice(0, 24)}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <BankBlock
                title={contact.bankTitle}
                accounts={contact.banks}
                ibanLabel={ui.bankIban}
                bicLabel={ui.bankBic}
              />
              <BankBlock
                title={contact.donateBankTitle}
                accounts={contact.donateBanks}
                ibanLabel={ui.bankIban}
                bicLabel={ui.bankBic}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fadeRight">
            <h3 className="font-serif text-xl text-gold">{contact.formTitle}</h3>
            {submitted ? (
              <p className="mt-6 font-serif text-xl text-gold">{contact.form.success}</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-body text-sm uppercase tracking-caps text-gold/70">
                    {contact.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gold/30 bg-ink-light/50 px-4 py-3 font-body text-base text-parchment outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-body text-sm uppercase tracking-caps text-gold/70">
                    {contact.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gold/30 bg-ink-light/50 px-4 py-3 font-body text-base text-parchment outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-body text-sm uppercase tracking-caps text-gold/70">
                    {contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y border border-gold/30 bg-ink-light/50 px-4 py-3 font-body text-base text-parchment outline-none transition-colors focus:border-gold"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  {contact.form.submit}
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
