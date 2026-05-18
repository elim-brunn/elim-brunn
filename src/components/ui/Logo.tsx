import logoFull from '../../assets/Logo-ELIM-Brunn-PNG-WEB-Kopie.png'
import logoIcon from '../../assets/Logo-only-ELIM-Brunn-PNG-WEB-1-2.png'

interface LogoProps {
  className?: string
}

export function LogoIcon({ className = 'h-10 w-auto' }: LogoProps) {
  return (
    <img
      src={logoIcon}
      alt="ELIM Pfingstkirche Brunn am Gebirge"
      className={className}
      width={120}
      height={48}
    />
  )
}

export function LogoFull({ className = 'h-16 w-auto max-w-[280px]' }: LogoProps) {
  return (
    <img
      src={logoFull}
      alt="ELIM Brunn — Pfingstkirche Gemeinde Gottes"
      className={className}
      width={280}
      height={80}
    />
  )
}
