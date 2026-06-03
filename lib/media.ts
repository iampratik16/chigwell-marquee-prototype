import { img, GALLERY_FILES, type Media } from "./media.gen";

export { img, GALLERY_FILES };
export type { Media };

/* ── Hero rotation (cinematic, widest/best quality) ── */
export const HERO: Media[] = [
  img("chigwell-marquees-large-marquee.jpg", "The Mega Marquee dressed for a celebration at dusk"),
  img("party-venue-chigwell-essex.jpg", "A marquee interior set for an evening party"),
  img("wedding-venue-hire-asian-wedding-venue-essex-the-chigwell-marquees.jpg", "A wedding reception inside the marquee"),
  img("chigwell-marquees-mandaps.jpg", "An ornate mandap staged inside the Mega Marquee"),
];

/* ── Estate / about ── */
export const ESTATE = img(
  "party-venue-chigwell-essex.jpg",
  "Inside the marquee on the Chigwell Hall estate",
);

/* ── The two spaces + garden ── */
export const SPACE_MEGA = img(
  "chigwell-marquees-large-marquee.jpg",
  "The Mega Marquee, high ceilings and neutral interiors for up to 1,000 guests",
);
export const SPACE_MEGA_ALT = img(
  "large-party-venue-marquee-venues-near-me-essex-the-chigwell-marquees.jpg",
  "The Mega Marquee laid out for a large banquet",
);
export const SPACE_MEGA_HERO = img(
  "beautiful-essex-wedding-venue.jpg",
  "The Mega Marquee dressed for a wedding, a floral aisle running the length of the grand canvas",
);
export const SPACE_MINI = img(
  "wedding-venue-hire-luxury-wedding-marquees-essex-the-chigwell-marquees.jpg",
  "The Mini Marquee, an intimate, light-filled setting",
);
export const SPACE_MINI_ALT = img(
  "beautiful-essex-wedding-venue.jpg",
  "The Mini Marquee dressed for an intimate wedding",
);
export const SPACE_GARDEN = img(
  "garden-wedding-essex-london-chigwell-marquees.jpg",
  "The Secret Garden, manicured lawns and a classic fountain",
);
export const SPACE_GARDEN_ALT = img(
  "engagement-venue-hire-luxury-marquee-hire-essex-the-chigwell-marquees.jpg",
  "Guests gathered in the grounds at golden hour",
);

/* ── Occasions ── */
export const OCC_WEDDINGS = img(
  "wedding-venue-hire-asian-wedding-venue-essex-the-chigwell-marquees.jpg",
  "A wedding breakfast laid out beneath the marquee",
);
export const OCC_WEDDINGS_2 = img(
  "wedding-venue-hire-marquee-wedding-venues-essex-the-chigwell-marquees.jpg",
  "A marquee wedding reception",
);
export const OCC_ASIAN = img(
  "chigwell-marquees-mandaps.jpg",
  "A traditional mandap staged for an Asian wedding ceremony",
);
export const OCC_ASIAN_2 = img(
  "asian-weddings-indian-wedding-essex-the-chigwell-marquees.jpg",
  "An Indian wedding celebration in the Mega Marquee",
);
export const OCC_CELEBRATIONS = img(
  "birthday-party-venue-party-venue-near-me-essex-the-chigwel-marquees.jpg",
  "A milestone birthday party in full swing",
);
export const OCC_CELEBRATIONS_2 = img(
  "engagement-party-venue-engagement-marquee-hire-essex-the-chigwell-marquees.jpg",
  "An engagement party dressed in soft light",
);
export const OCC_CORPORATE = img(
  "corporate-venue-hire-essex-chigwell-marquees.jpg",
  "The marquee configured for a corporate gala dinner",
);
export const OCC_CORPORATE_2 = img(
  "festival-venue-hire-essex-chigwell-marquees.jpg",
  "A festival-scale event staged across the estate",
);
export const OCC_CIVIL = img(
  "civil-ceremoney-venue-essex-the-chigwell-marquees.jpg",
  "A civil ceremony set within the marquee",
);

/* ── Occasion index cards ── */
export const OCCASION_CARDS = [
  { key: "weddings", media: OCC_WEDDINGS },
  { key: "asian-weddings", media: OCC_ASIAN },
  { key: "celebrations", media: OCC_CELEBRATIONS },
  { key: "corporate", media: OCC_CORPORATE },
];

/* ── Curated home gallery teaser (varied aspect ratios) ── */
export const HOME_GALLERY: Media[] = [
  img("chigwell-marquees-wedding-events-01.jpg"),
  img("chigwell-marquees-themed-events-03.jpg"),
  img("asian-wedding-mandap-hire.jpg"),
  img("chigwell-marquees-corporate-events-02.jpg"),
  img("chigwell-marquees-wedding-events-04.jpg"),
  img("chigwell-marquees-civil-ceremonies-01.jpg"),
];
