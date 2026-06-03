"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
  separator?: React.ReactNode;
};

/**
 * Infinite horizontal marquee (a nod to the name). Two identical tracks
 * scroll seamlessly; pauses for reduced-motion users via CSS.
 */
export default function Marquee({
  items,
  className,
  speed = 38,
  reverse = false,
  separator,
}: Props) {
  const sep = separator ?? (
    <span className="px-6 text-champagne/80" aria-hidden>
      ✦
    </span>
  );

  const Track = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="marquee-track flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span>{it}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn("marquee group flex w-full overflow-hidden", className)}
      style={
        {
          ["--marquee-duration" as string]: `${speed}s`,
          ["--marquee-direction" as string]: reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      <Track />
      <Track ariaHidden />
    </div>
  );
}
