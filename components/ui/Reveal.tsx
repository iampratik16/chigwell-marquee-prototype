"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_LUXE, inView } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

/**
 * Soft rise + fade as the element scrolls into view. Always renders a
 * `motion.div` (stable across a reduced-motion flip); reduced motion simply
 * disables the animation so content is visible immediately.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { y, opacity: 0 }}
      whileInView={reduced ? undefined : { y: 0, opacity: 1 }}
      viewport={{ ...inView, once }}
      transition={reduced ? undefined : { duration, ease: EASE_LUXE, delay }}
    >
      {children}
    </motion.div>
  );
}
