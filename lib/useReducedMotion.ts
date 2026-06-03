"use client";

import { useEffect, useState } from "react";

/**
 * Reactive `prefers-reduced-motion` hook. Returns false on the server and
 * during the first client paint, then updates once mounted so SSR markup
 * stays stable. Components branch their motion on this.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
