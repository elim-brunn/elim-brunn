# ELIM – Pfingstkirche Brunn am Gebirge

<p align="center">
  <img src="public/logo.png" alt="ELIM Pfingstkirche Brunn am Gebirge" width="200" />
</p>

Bilingual (German / Romanian) church website for Pfingstkirche ELIM Brunn am Gebirge — built with React, Vite, TypeScript, and Tailwind CSS.

**Live:** [elim-brunn.at]((https://elim-brunn.vercel.app/))

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Seiten (React Router)

| Route | Inhalt |
|-------|--------|
| `/` | Start — Hero, Willkommen, Glaube, Gottesdienste |
| `/gottesdienste` | Gottesdienste & Zeiten |
| `/anunturi` | Ankündigungen |
| `/live` | Live-Übertragung |
| `/predigten` | Predigten |
| `/ueber-uns` | Wer wir sind (Geschichte, Vision) |
| `/kontakt` | Kontakt, Karte, Anfahrt |

Die Navigation im Header verlinkt auf eigene Seiten — kein One-Pager mehr.

## Project structure

```
src/
  pages/          # Eine Datei pro Route
  layouts/        # MainLayout (Navbar, Footer, Outlet)
  routes/         # Pfad-Konstanten
  components/
    sections/     # Inhalts-Komponenten
    ui/
  content/
    de.ts / ro.ts
```

## Language toggle

Use the **DE | RO** control in the navigation bar. The selected language is stored in `localStorage` under the key `elim-locale`.

## Customization

- **Colors & fonts:** `tailwind.config.ts` (abgestimmt auf Logo: Rot `#C4121A`, Tan `#C5B097`, Grau `#9B9187`)
- **Logos:** `src/assets/` — Navbar (Icon), Footer (vollständig)
- **Copy:** `src/content/de.ts` and `src/content/ro.ts`
- **Contact / map:** Update `Contact.tsx` and embed a Google Maps iframe when ready

## Build for production

```bash
npm run build
```

Output is written to the `dist/` folder.
