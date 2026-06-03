"use client";

import { useEffect, useRef, useState } from "react";
import { EASE_LUXE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/** Counts up from 0 → value once it scrolls into view. */
export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.9,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    let done = false;

    const run = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      setDisplay(Math.round(easeOutExpo(p) * value));
      if (p < 1) raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          done = true;
          raf = requestAnimationFrame(run);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}
