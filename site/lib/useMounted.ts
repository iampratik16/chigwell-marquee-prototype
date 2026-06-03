"use client";

import { useEffect, useState } from "react";

/** True only after the first client mount (SSR-safe gate for enhancements). */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
