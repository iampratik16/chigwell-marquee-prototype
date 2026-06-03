import type { Media } from "./media.gen";

/** Real venue videos supplied from the business's Instagram. */
export const VIDEO = {
  hero: "/media/video/hero.mp4",
  mega: "/media/video/scene-mega.mp4",
  mini: "/media/video/scene-mini.mp4",
  wedding: "/media/video/scene-wedding.mp4", // aerial estate (estate hero)
  weddings: "/media/video/weddings.mp4", // garden gazebo couple (weddings hero)
  secretGarden: "/media/video/secret-garden.mp4", // the garden (secret-garden hero)
} as const;

type RealEntry = Media & { cat: string };

const W_L = 1080,
  H_L = 720,
  W_P = 1080,
  H_P = 1350,
  W_T = 1080,
  H_T = 1440;

/** Curated real photography (Instagram), with hand-written alt + category. */
export const REAL: Record<string, RealEntry> = {
  // Landscape wedding interiors (1080×720)
  interiorRed: { src: "/media/ig-02.jpg", alt: "Autumnal red florals and tablescapes beneath the marquee canopy", width: W_L, height: H_L, cat: "weddings" },
  interiorWide1: { src: "/media/ig-01.jpg", alt: "A wedding reception laid out under the marquee's sweeping canopy", width: W_L, height: H_L, cat: "weddings" },
  interiorWide2: { src: "/media/ig-03.jpg", alt: "Round tables dressed in ivory beneath the marquee canopy", width: W_L, height: H_L, cat: "weddings" },
  interiorWide3: { src: "/media/ig-04.jpg", alt: "An elegant marquee wedding breakfast at The Chigwell Marquees", width: W_L, height: H_L, cat: "weddings" },
  interiorWide4: { src: "/media/ig-05.jpg", alt: "The marquee dressed with florals and soft uplighting", width: W_L, height: H_L, cat: "weddings" },

  // Portrait celebrations / aisles (1080×1350)
  aisleBlossom: { src: "/media/ig-06.jpg", alt: "A wedding aisle lined with blossom trees beneath the marquee canopy", width: W_P, height: H_P, cat: "weddings" },
  reception1: { src: "/media/ig-07.jpg", alt: "A wedding reception beneath the white canopy ceiling", width: W_P, height: H_P, cat: "weddings" },
  gardenParty: { src: "/media/ig-08.jpg", alt: "Guests gathered in the estate grounds during a summer celebration", width: W_P, height: H_P, cat: "celebrations" },
  reception2: { src: "/media/ig-09.jpg", alt: "Tablescapes and florals inside the marquee", width: W_P, height: H_P, cat: "weddings" },
  reception3: { src: "/media/ig-10.jpg", alt: "A celebration dressed in ivory and gold at the estate", width: W_P, height: H_P, cat: "weddings" },
  reception4: { src: "/media/ig-11.jpg", alt: "An elegant marquee celebration at The Chigwell Marquees", width: W_P, height: H_P, cat: "weddings" },

  // Portrait detail / ceremony (1080×1440)
  tallCenterpiece: { src: "/media/ig-12.jpg", alt: "A tall floral centerpiece on a dressed wedding table", width: W_T, height: H_T, cat: "weddings" },
  ceremonyAisle: { src: "/media/ig-13.jpg", alt: "A marquee wedding ceremony aisle leading to a floral arch", width: W_T, height: H_T, cat: "weddings" },
  detail1: { src: "/media/ig-14.jpg", alt: "Wedding table styling beneath the marquee's white canopy", width: 1080, height: 1433, cat: "weddings" },
  detail2: { src: "/media/ig-15.jpg", alt: "Floral details and place settings inside the marquee", width: W_T, height: H_T, cat: "weddings" },
  detail3: { src: "/media/ig-16.jpg", alt: "An elegant tablescape beneath the canopy ceiling", width: W_T, height: H_T, cat: "weddings" },
};

/** Real estate / grounds photography (supplied). */
export const ESTATE_IMG = {
  hall: {
    src: "/media/estate-hall.jpg",
    alt: "Chigwell Hall, the Grade II listed manor at the heart of the estate",
    width: 1080,
    height: 720,
    cat: "estate",
  },
  avenue: {
    src: "/media/estate-avenue.jpg",
    alt: "A couple on the tree-lined avenue through the estate grounds at golden hour",
    width: 1080,
    height: 725,
    cat: "estate",
  },
  gazebo: {
    src: "/media/estate-gazebo.jpg",
    alt: "Newlyweds beneath the floral gazebo in the Secret Garden",
    width: 1080,
    height: 713,
    cat: "estate",
  },
} as const;

/** The Mini Marquee, clear interiors (supplied). */
export const MINI_IMG = {
  interior: {
    src: "/media/mini-interior.jpg",
    alt: "The Mini Marquee beneath its white canopy ceiling with soft uplighting",
    width: 1080,
    height: 720,
    cat: "weddings",
  },
  staged: REAL.interiorWide2, // ig-03, arched floral stage
} as const;

/** The Secret Garden (supplied). */
export const SECRET_IMG = {
  blossom: {
    src: "/media/secret-2.jpg",
    alt: "A blossom-lined avenue through the estate grounds in spring",
    width: 1080,
    height: 1350,
    cat: "estate",
  },
  gazebo: {
    src: "/media/secret-3.jpg",
    alt: "A couple beneath the Secret Garden gazebo at dusk",
    width: 1080,
    height: 1350,
    cat: "estate",
  },
} as const;

/** Asian weddings (supplied). */
export const ASIAN_IMG = {
  confetti: {
    src: "/media/asian-1.jpg",
    alt: "A confetti send-off after an Asian wedding ceremony in the grounds",
    width: 1080,
    height: 1350,
    cat: "asian",
  },
  portrait: {
    src: "/media/asian-2.jpg",
    alt: "An Asian wedding couple by the estate's iron gates",
    width: 1080,
    height: 1440,
    cat: "asian",
  },
} as const;

/** All real photos as a gallery-ready list (with category for filtering). */
export const REAL_GALLERY: RealEntry[] = [
  SECRET_IMG.gazebo,
  ASIAN_IMG.confetti,
  MINI_IMG.interior,
  ESTATE_IMG.gazebo,
  ASIAN_IMG.portrait,
  SECRET_IMG.blossom,
  ESTATE_IMG.avenue,
  ESTATE_IMG.hall,
  ...Object.values(REAL),
];
