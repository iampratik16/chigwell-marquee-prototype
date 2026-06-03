"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query hook. Returns false on the server and first client
 * paint, then resolves once mounted — so it composes with `useMounted` for
 * progressive enhancement without hydration mismatches.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/** Pinned/heavy scroll choreography only runs on laptop-and-up. */
export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)");
}
