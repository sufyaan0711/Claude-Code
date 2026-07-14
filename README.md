# Ember House

A wood-fired steakhouse website built as a single-page scrolling experience,
plus one hidden `/private-dining` route.

> **This is a fictional demonstration project.** Ember House is not a real
> restaurant. The name, address, phone number, email, opening hours, menu,
> prices and staff mentioned throughout the site are all invented for this
> build and must not be treated as real business information.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens defined as CSS
  variables in `app/globals.css` via the `@theme` directive
- [Motion for React](https://motion.dev) (`motion/react`) for animation
- `next/font` (Instrument Serif + Manrope) and `next/image`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

`npm run build` compiles with zero TypeScript errors. `npm run lint` runs
ESLint (flat config, Next's `core-web-vitals` + TypeScript rule sets).

### Deploying to Vercel

Push this repository to GitHub and import it at
[vercel.com/new](https://vercel.com/new) — no configuration is required
beyond the default Next.js build settings.

## Adding real photography

No real photographs are included. Every image slot renders a tasteful dark
placeholder (preserving the correct aspect ratio) until you drop a file in
with the matching name. See **[IMAGE-GUIDE.md](./IMAGE-GUIDE.md)** for the
full file list, recommended dimensions, and styling guidance.

In short: add files to `/public/images` using the filenames already
referenced in `lib/data/menu.ts`, `lib/data/private-dining.ts`, and the
section components — nothing else needs to change.

## Project structure

```
app/
  layout.tsx            Root layout — fonts, metadata, ReservationProvider
  page.tsx               Homepage — assembles all sections in order
  private-dining/
    page.tsx             The hidden "rabbit-hole" private dining route
  globals.css            Design tokens, textures, base styles

components/
  ui/                    Logo, Button, ImageWithFallback, RevealText, etc.
  layout/                Header, MobileMenu, Footer
  reservation/           Reservation context, panel, provider, trigger button
  sections/              Homepage sections (Hero, SignatureMenu, ...)
  private-dining/        Private dining page sections

lib/
  data/                  Centralised content: restaurant.ts, menu.ts,
                         navigation.ts, openingHours.ts, private-dining.ts
  animation.ts            Shared Motion easing/duration/variants
  useReducedMotion.ts      prefers-reduced-motion hook (useSyncExternalStore)
  useIsDesktop.ts          Desktop breakpoint hook, gates parallax
  useFocusTrap.ts          Shared focus-trap/body-scroll-lock/Escape logic
```

All restaurant copy, menu items, navigation links and opening hours live in
`lib/data/` — update those files to change site content without touching
component code.

## Reservations and enquiries are demonstration-only

The "Reserve a Table" panel and the private dining enquiry form both
validate input and show a polished confirmation state, but **neither
submits anywhere** — no email is sent and no booking is created. Each
`handleSubmit` function has a comment marking exactly where to wire in a
real backend:

- `components/reservation/ReservationPanel.tsx`
- `components/private-dining/EnquiryForm.tsx`

## Accessibility

- Skip-to-content link, semantic landmarks, correct heading hierarchy
- Full keyboard support; the mobile menu and reservation panel trap focus,
  close on <kbd>Escape</kbd>, and return focus to the trigger on close
- Visible focus states (`:focus-visible`) throughout
- `prefers-reduced-motion` disables the scroll-linked story expansion,
  the fire-philosophy parallax, and large-movement transitions site-wide
  (via a global `MotionConfig reducedMotion="user"`)
- Colour contrast checked against the dark palette; no information is
  conveyed by colour alone

## Design tokens

The full colour palette, easing curve and font variables are defined once
in `app/globals.css` (`@theme` block) and `lib/animation.ts`. Near-black and
charcoal dominate the palette by design; brass/copper are reserved for fine
rules, labels, button borders and hover details — see the brief in project
history for the full rationale if you're extending the palette.
