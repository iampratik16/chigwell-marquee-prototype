"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_LUXE, inView } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMounted } from "@/lib/useMounted";
import { cn } from "@/lib/utils";
import type { Media } from "@/lib/media";

type Props = {
  src: string;
  /** Poster + reduced-motion / pre-mount fallback. */
  poster: Media;
  ratio?: string;
  className?: string;
  cursorLabel?: string;
};

/** Looping muted feature video with a poster fallback; honours reduced motion. */
export default function RevealVideo({
  src,
  poster,
  ratio = "4 / 5",
  className,
  cursorLabel,
}: Props) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const play = mounted && !reduced;

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-bone-dim", className)}
      style={{ aspectRatio: ratio }}
      data-cursor={cursorLabel}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={{ ...inView }}
      transition={{ duration: 0.7, ease: EASE_LUXE }}
    >
      {play ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster.src}
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={poster.src}
          alt={poster.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      )}
    </motion.div>
  );
}
