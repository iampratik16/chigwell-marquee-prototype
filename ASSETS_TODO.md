# ASSETS TODO — gaps & flags (no fabrication)

Per the build constraints, missing/low-res assets are flagged here rather than faked.

## Video — ✅ NOW SUPPLIED
- Real venue clips were added to the project root (`hero_video.mp4`, `contentP/vid1.mp4`,
  `contentP/vid2.mp4`) and are integrated:
  - `hero.mp4` → **home hero** (full-bleed, autoplay/muted/loop, poster fallback)
  - `scene-mega.mp4` → **Mega Marquee** page hero
  - `scene-mini.mp4` → **Mini Marquee** page hero
  - `scene-wedding.mp4` (vid4) → **Weddings** page hero
- They live in `site/public/media/video/`. The original root copies are left untouched.
- **Optimisation TODO:** the hero clip is ~8.9MB. For production, transcode to ~2–3MB
  (H.264 + a WebM/AV1 alternate, ≤1080p) and consider `preload="metadata"`.

## Photography — ✅ UPGRADED
- 16 premium Instagram photos (added under `contentP/`) were imported as
  `site/public/media/ig-01…16.jpg` and curated in `site/lib/media.real.ts`. They now
  lead the **gallery** and headline the **weddings / spaces / celebrations** pages.
- The original ~100 WordPress photos remain as the wider gallery archive.

## Remaining flags
- **Source-image resolution** — the WordPress archive images cap at ~1800px; crisp to
  ~1080p, slightly soft on large retina full-bleed. The new Instagram photos are 1080px
  (portrait), ideal for cards/columns, lighter for ultra-wide hero stills.
- **Testimonials** — the source exposes only case-study *titles*, not full quotes. Real
  quotes were **not fabricated**; titles are used as case-study labels. Supply real
  testimonial text to populate.
- **Map** — `/visit` uses a free Google Maps embed. Swap to a styled Mapbox/Static Maps
  key for brand-matched styling if desired.
- **Logo** — the site uses a typographic wordmark. Supply an official SVG mark if one exists.
- **Enquiry form** — front-end only; wire `components/site/EnquiryForm.tsx`'s `onSubmit`
  to a route handler / email service (e.g. Resend) to go live.
