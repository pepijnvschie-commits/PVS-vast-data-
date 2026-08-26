# Axon — Landing Page

Single-page hero landing voor **Axon**, een platform dat digital workers inzet voor routinematige workflows.

## Stack

- React 19 + Vite
- [`motion`](https://motion.dev) (Framer Motion) voor de intro-animaties
- `lucide-react` voor iconen
- Plain CSS (geen Tailwind), fonts: Instrument Serif + Inter (Google Fonts)

## Ontwikkelen

```bash
npm install
npm run dev      # dev server
npm run build    # productie-build naar dist/
npm run preview  # preview van de build
```

## Opbouw

- Full-viewport hero met achtergrondvideo (met gradient-fallback zolang de video laadt of niet beschikbaar is)
- Glazen nav-pill bovenaan met logo, links en een "Menu"-knop
- Y Combinator-badge, Instrument Serif-heading, subtitle en CTA
- Footer-strip onderaan met statusregel en tag-pills
