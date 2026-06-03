# Build Prompt — The Chigwell Marquees (Awwwards-grade revamp)

> Paste everything below the line into Claude Code. It is written to be self-contained.
> Two decisions you can flip before running: **(A) Theme** — the brief below commits to a *light, warm-ivory editorial* base with a dark cinematic hero; say the word if you'd rather go *dark-dominant* like Audemars Piguet. **(B) Fonts** — it specifies Fontshare families (free, premium-feel); swap if you have licensed fonts.

---

## ROLE

You are an award-winning creative front-end engineer and art director. Your work has been featured on Awwwards (Site of the Day calibre), FWA, and CSS Design Awards. You care about typography, motion choreography, pacing, and restraint as much as code quality. You do not ship generic "AI template" output. Every decision is intentional.

We are rebuilding the website for **The Chigwell Marquees**, a luxury marquee event & venue-hire business set on a 42-acre estate. The current site (the content/asset source of truth) is here:

`https://www.handsdigital.co.uk/demo/thechigwellmarquees/`

## NON-NEGOTIABLE CONSTRAINTS

1. **Content & media come from the existing site.** Crawl the URL above. Inventory every page, every section, all copy, every image and video. Re-use the real photography, video, services, names, prices, and contact details. Do **not** invent venue features, fake testimonials, or stock filler. If an asset is missing or low-res, flag it in a `ASSETS_TODO.md` rather than fabricating.
2. **The *design* is brand-new and world-class.** Borrow nothing structural from the old site — only its substance (words + media).
3. This must look and feel like it belongs next to the inspiration sites listed below. The bar is "would this win Site of the Day."

## VERIFIED BUSINESS FACTS (use as backstop; site copy overrides if richer)

- **Who:** The Chigwell Marquees — luxury marquee venue & event hire, set in the grounds of the historic ~42-acre Chigwell Hall estate, Essex.
- **Location:** 159 High Rd, IG7 6BD. ~40 minutes from Central London, ~15 minutes off the M25. Free on-site parking.
- **Two spaces:**
  - **The Mega Marquee** — up to ~1,000 guests. Panoramic London skyline views. For large weddings, galas, corporate events, awards shows, product launches, conferences.
  - **The Mini Marquee** — ~30–200 guests. Floor-to-ceiling natural-light glass, a starry (fibre-optic) ceiling, air conditioning, and views over the "Secret Garden."
- **Occasions:** weddings (incl. traditional Asian weddings, garden weddings), engagements, anniversaries, milestone birthdays, civil ceremonies, bar/bat mitzvahs; corporate — training days, annual awards, galas, team retreats, product launches.
- **Selling points:** fully customisable décor, professional sound & lighting, entertainment areas, stately-home atmosphere, no corkage fee, experienced events team handling planning end-to-end.

## AESTHETIC NORTH STAR — what to take from each inspiration site

Synthesise these into ONE coherent voice; do not collage them.

- **Aman (aman.com):** serenity and restraint. Vast negative space, slow confident pacing, imagery that breathes. Let silence do the work.
- **Audemars Piguet:** cinematic motion and full-bleed video storytelling; elegant scroll-driven sequences; a sense of crafted precision.
- **Dior:** editorial fashion typography — high-contrast display serif, refined kerning, magazine-grade hierarchy, monochrome elegance with graceful fades.
- **HBA (hba.com):** image-led sophistication, gridded but unexpected layouts, confident art direction, project/space storytelling.
- **Six Senses:** organic warmth — earthy, natural palette, soft tactile transitions, a human and inviting feel (crucial so a wedding venue feels romantic, not cold).

**The resulting voice:** *refined, cinematic, editorial luxury with botanical warmth.* Stately-home romance meets London-skyline glamour.

## DESIGN SYSTEM (commit to this; codify as CSS variables / Tailwind theme tokens)

**Palette (warm-ivory editorial base):**
- `ink` — near-black, slightly warm: `#16130F`
- `bone` / page base — warm ivory: `#F6F1E7`
- `champagne` accent (metallic feel via subtle gradient): `#C8A96A`
- `botanical` deep estate green (gardens nod): `#2C3A2E`
- `mist` muted warm grey for secondary text: `#8C857A`
- Hero and "night/starry-ceiling" sections invert to ink-dominant with champagne accents.

**Typography (Fontshare — free, premium-feel; load only weights you use):**
- Display: **"Editorial New"** (or "Gambetta") — high-contrast serif for headlines, big and confident.
- Body/UI: **"Switzer"** (or "Author") — clean, neutral, excellent at small sizes.
- Avoid Inter, Roboto, Arial, Playfair, Space Grotesk and any default system stack. No purple-gradient-on-white clichés.
- Hierarchy: oversized editorial headlines (clamp up to ~10–14vw on hero), generous line-height on body, refined letter-spacing on small-caps labels/eyebrows.

**Spatial system:** generous margins, a 12-col grid you deliberately break (asymmetry, overlap, off-grid imagery, diagonal flow). Whitespace is a feature, not a gap.

**Atmosphere:** subtle film-grain/noise overlay, soft layered shadows, fine hairline rules, very subtle paper texture on ivory sections. No flat solid-color blocks where atmosphere is possible.

## SIGNATURE INTERACTIONS — the "cool effects" (choreograph, don't scatter)

Aim for a few unforgettable moments executed flawlessly, not a hundred twitchy micro-effects.

1. **Hero:** full-bleed cinematic video/imagery of the marquee at dusk with a slow Ken-Burns or masked reveal; oversized editorial headline that animates in with a staggered word/line reveal (clip-path or mask wipe). A refined custom cursor.
2. **Smooth scroll** via **Lenis** for that luxury inertia; pin/parallax sections via GSAP `ScrollTrigger`.
3. **Image reveals on scroll:** clip-path/mask wipes and gentle scale (1.08 → 1.0) as images enter; horizontal "gallery rail" section for the spaces, with momentum.
4. **The two-marquees showcase:** a split or pinned scene that transitions Mega ↔ Mini; the Mini section literally darkens into the "starry ceiling" (animated fibre-optic star field) as you scroll — the memorable signature moment.
5. **Hover states with intent:** images that subtly zoom + desaturate→colour; links with an animated underline wipe; buttons with a magnetic pull near the cursor; project/space cards that lift with a soft directional shadow.
6. **Page/section transitions:** elegant overlay wipes between routes (not jarring), respecting reduced-motion.
7. **Numbers/credibility counters** (e.g., guest capacities, years, estate acreage) that count up on view, set in the display serif.
8. **A refined sticky/condensing nav** that shrinks and shifts contrast over hero vs. ivory sections.

> Every animation must respect `prefers-reduced-motion` and degrade gracefully.

## INFORMATION ARCHITECTURE

Map this to the real content you crawl; adjust names to match the source.

- **Home** — cinematic hero → intro statement (the estate story) → the two spaces preview → occasions (weddings / corporate / celebrations) → gallery teaser → testimonials → location/journey → enquiry CTA.
- **The Spaces** — dedicated, richly art-directed sections/pages for **Mega Marquee** and **Mini Marquee** (specs, capacities, features, galleries).
- **Occasions / Weddings / Corporate** — editorial storytelling pages tailored to each audience.
- **Gallery** — immersive masonry/rail gallery using the real photos/video.
- **Visit / Contact** — location, journey from London, map, and a beautiful enquiry form.
- Persistent footer with contact, address, socials, and a final emotive CTA.

## TECH STACK

- **Next.js (App Router) + TypeScript + Tailwind CSS.**
- **Motion** (Framer Motion) for component animation; **GSAP + ScrollTrigger** for scroll choreography; **Lenis** for smooth scroll.
- `next/image` + `next/font` (or Fontshare via CSS) for performance.
- Keep it a clean, well-structured, componentised codebase. Sensible commits.

## COMPONENT LIBRARIES (use as accelerants, then refine to the brand)

- **21st.dev** — its MCP is connected. Pull suitable primitives/sections (heroes, marquees/rails, galleries, nav, testimonials) and **restyle them to our design tokens** — never ship them stock.
- **Aceternity UI** (`https://ui.aceternity.com/components`) — borrow advanced effects (e.g. parallax/scroll, image-reveal, sparkles/starfield for the starry ceiling, animated backgrounds, hover cards). Adapt colours/typography to the system above so nothing looks "library-default."
- Rule: libraries provide structure and physics; **the art direction is yours.** If a component fights the aesthetic, hand-build it.

## BUILD WORKFLOW (follow in order)

1. **Crawl & inventory** the source site → write `CONTENT_MAP.md` (every page, section, copy block, image, video, link) and download assets into `/public`.
2. **Lock the design system** → Tailwind theme tokens, fonts, base layout, grain/texture, custom cursor, Lenis. Build a `/styleguide` route to prove typography, colour, buttons, and motion primitives first.
3. **Build the homepage** section by section, wiring scroll choreography as you go.
4. **Build inner pages** (spaces, occasions, gallery, contact).
5. **Polish pass:** motion timing/easing, responsive (mobile-first, then tablet/desktop — mobile must still feel luxurious, not stripped), `prefers-reduced-motion`, focus states, alt text, Lighthouse.
6. Provide a short `README.md`: how to run, where content lives, what's in `ASSETS_TODO.md`.

## QUALITY BAR (self-check before declaring done)

- Does the hero create an immediate "wow"? Is there at least one unforgettable signature moment (the starry-ceiling transition)?
- Is the typography genuinely editorial — confident scale, real hierarchy, no default fonts?
- Is motion choreographed and smooth (60fps, eased, intentional) — never busy or laggy?
- Cohesion: would a stranger believe this came from the same studio as Aman / Dior? Nothing looks like a stock template.
- Responsive and accessible: keyboard-navigable, reduced-motion honoured, real alt text, AA contrast, Lighthouse ≥ 90 perf / ≥ 95 a11y on desktop.
- Content is 100% real (from the source), not lorem/fabricated.

**Don't hold back. Show what's possible when you commit fully to a distinctive, refined vision.** Start by crawling the source site and presenting your `CONTENT_MAP.md` + proposed section plan and design tokens before building the homepage.
