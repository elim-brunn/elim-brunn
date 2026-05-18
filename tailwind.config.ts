import type { Config } from 'tailwindcss'

/** Farben abgestimmt auf Logo ELIM Brunn (Rot · Tan · Kreuz-Grau) */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantische Aliase (Klassennamen bleiben für bestehende Komponenten)
        burgundy: '#C4121A', // ELIM-Rot aus dem Logo
        gold: '#C5B097', // Tan/Beige aus dem Logo (Buch-Seiten, „BRUNN“)
        'gold-dark': '#B89D7E',
        parchment: '#F5F0EB', // Warmes Creme, harmoniert mit Tan
        stone: '#9B9187', // Kreuz-Grau aus dem Icon
        'stone-light': '#B5B0A8',
        ink: '#0A0A0A', // Logo-Schwarz
        'ink-light': '#161616',
        forest: '#2d4a3e', // ungenutzt, falls später benötigt
        elim: {
          red: '#C4121A',
          tan: '#C5B097',
          'tan-dark': '#B89D7E',
          gray: '#9B9187',
          black: '#0A0A0A',
          cream: '#F5F0EB',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        dignified: '4px',
      },
      letterSpacing: {
        caps: '0.12em',
      },
    },
  },
  plugins: [],
} satisfies Config
