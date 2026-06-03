import { clsx, type ClassValue } from "clsx";

/** Merge class names. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** True when the user prefers reduced motion (safe on server → false). */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
