import type { Variants, Transition } from "framer-motion";

export const EASE_LUXE = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.22, 0.61, 0.36, 1] as const;

export const tLuxe: Transition = { duration: 1, ease: EASE_LUXE };

/** Container that staggers its children into view. */
export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** Soft rise + fade for blocks. */
export const riseItem: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE_LUXE } },
};

/** Word reveal, lifts from below with a faint blur. */
export const wordItem: Variants = {
  hidden: { y: "0.7em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.85, ease: EASE_LUXE } },
};

/** Standard in-view viewport config. */
export const inView = { once: true, amount: 0.3, margin: "0px 0px -10% 0px" };
