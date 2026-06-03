# The Chigwell Marquees — Awwwards-grade revamp

A cinematic, editorial multi-page site for **The Chigwell Marquees**, a luxury
marquee venue set within the 42-acre Chigwell Hall estate in Essex.

> Refined, cinematic, editorial luxury with botanical warmth — stately-home
> romance meets London-skyline glamour.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **GSAP + ScrollTrigger** — scroll choreography (pinned scenes, horizontal rail)
- **Lenis** — smooth inertia scrolling (driven by the GSAP ticker)
- **Framer Motion** — component & text reveals, page transitions
- **next/font** (self-hosted **Gambetta** + **Switzer** from Fontshare)
- `next/image` for all photography

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Routes

| Route | |
|---|---|
| `/` | Cinematic home — hero → estate → two-spaces starry scene → occasions → numbers → gallery rail → recent occasions → journey |
| `/the-estate` | The 42-acre Chigwell Hall estate story |
| `/spaces` · `/spaces/mega-marquee` · `/spaces/mini-marquee` · `/spaces/secret-garden` | The venues |
| `/occasions` · `/occasions/weddings` · `/occasions/celebrations` · `/occasions/corporate` | Editorial occasion pages |
| `/gallery` | Filterable masonry of the real photography |
| `/visit` | Location, map, enquiry form, FAQs |
| `/styleguide` | Design-system proof (noindex) |

## Where content & media live

- **Copy** — real, crawled from the live business site. Centralised facts/nav in
  [`lib/site.ts`](lib/site.ts); page copy is co-located in each `app/**/page.tsx`.
  Full inventory in [`./CONTENT_MAP.md`](./CONTENT_MAP.md).
- **Photography** — 100+ real images in [`public/media`](public/media), harvested
  from the business's WordPress media library. Typed manifest with intrinsic
  sizes + alt text in [`lib/media.gen.ts`](lib/media.gen.ts); curated picks in
  [`lib/media.ts`](lib/media.ts).
- **Fonts** — self-hosted woff2 in [`app/fonts`](app/fonts), wired in
  [`app/fonts.ts`](app/fonts.ts).

## Signature interactions

- Cinematic Ken-Burns hero with staggered line-mask headline reveal
- Refined custom cursor (trailing ring + contextual labels), magnetic buttons
- **The two-marquees scene** — a pinned scroll where the Mega Marquee dissolves
  into the Mini Marquee and *darkens into a fibre-optic starry ceiling* (the
  signature moment; reprised on `/spaces/mini-marquee`)
- Horizontal momentum gallery rail (pinned), clip-path image reveals, count-up
  numbers, condensing/contrast-shifting nav, route-transition curtain wipes

**Every animation honours `prefers-reduced-motion`** — pinned scenes fall back
to clean static layouts, the cursor and grain are removed, reveals resolve
instantly.

## Accessibility & SEO

- Keyboard-navigable, visible focus rings, skip-link, semantic landmarks
- Real `alt` text on all imagery; native `<details>` FAQs
- `sitemap.ts`, `robots.ts`, JSON-LD `EventVenue` structured data, per-page metadata

## Known gaps

See [`./ASSETS_TODO.md`](./ASSETS_TODO.md). In short: **no video exists** on the
source (hero uses a cinematic still with a drop-in `<video>` slot), source images
cap at ~1800px, and the **enquiry form** is front-end only — wire
`components/site/EnquiryForm.tsx`'s `onSubmit` to a route handler / email service
(e.g. Resend) to go live.
