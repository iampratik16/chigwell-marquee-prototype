/* Global facts, contact details and navigation, single source of truth. */

export const SITE = {
  name: "The Chigwell Marquees",
  shortName: "Chigwell Marquees",
  tagline: "A grand setting for remarkable occasions",
  description:
    "Two luxury marquee venues set within the 42-acre grounds of the Grade II listed Chigwell Hall estate in Essex, for weddings, celebrations and corporate events of 30 to 1,000 guests.",
  url: "https://thechigwellmarquees.com",
  phone: "020 3196 0159",
  phoneHref: "tel:02031960159",
  email: "info@thechigwellmarquees.com",
  whatsapp: "https://wa.me/message/QDPSE2YBQRTTC1",
  address: {
    line1: "Chigwell Hall, 159 High Road",
    city: "Chigwell",
    county: "Essex",
    postcode: "IG7 6BD",
    maps: "https://www.google.com/maps/search/?api=1&query=The+Chigwell+Marquees+159+High+Road+Chigwell+IG7+6BD",
  },
} as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/thechigwellmarquees/" },
  { label: "Facebook", href: "https://www.facebook.com/thechigwellmarquees/" },
  { label: "TikTok", href: "https://www.tiktok.com/@thechigwellmarquees" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCkorur4vvYUVoTDh5GAYzsw" },
] as const;

export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  {
    label: "The Estate",
    href: "/the-estate",
  },
  {
    label: "Spaces",
    href: "/spaces",
    children: [
      { label: "The Mega Marquee", href: "/spaces/mega-marquee", blurb: "300 – 1,000 guests" },
      { label: "The Mini Marquee", href: "/spaces/mini-marquee", blurb: "30 – 200 · starlit ceiling" },
      { label: "The Secret Garden", href: "/spaces/secret-garden", blurb: "Outdoor ceremonies · up to 250" },
    ],
  },
  {
    label: "Occasions",
    href: "/occasions",
    children: [
      { label: "Weddings", href: "/occasions/weddings", blurb: "Garden, civil & Asian weddings" },
      { label: "Celebrations", href: "/occasions/celebrations", blurb: "Birthdays, engagements, mitzvahs" },
      { label: "Corporate", href: "/occasions/corporate", blurb: "Galas, conferences, festivals" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit", href: "/visit" },
];

/** Credibility numbers, counted up on view. */
export const STATS = [
  { value: 42, suffix: "", label: "Acres of estate" },
  { value: 1000, suffix: "", label: "Guests at capacity" },
  { value: 600, suffix: "", label: "Free parking spaces" },
  { value: 2, suffix: "", label: "Marquees & a garden" },
] as const;

/** Quick facts band. */
export const FACTS = [
  { k: "Location", v: "Chigwell, Essex · IG7 6BD" },
  { k: "From London", v: "≈ 40 minutes · M25 in 15" },
  { k: "Licensed until", v: "Midnight, 7 days a week" },
  { k: "Hire", v: "Dry hire · no corkage" },
] as const;
