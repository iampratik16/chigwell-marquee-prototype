import { makeStars } from "@/lib/stars";
import { cn } from "@/lib/utils";

/**
 * Fibre-optic starry ceiling. Deterministic positions (SSR-safe), with a soft
 * canopy glow. A handful of brighter stars add depth. CSS twinkle pauses under
 * reduced motion.
 */
export default function Starfield({
  count = 150,
  seed = 11,
  className,
  glow = true,
}: {
  count?: number;
  seed?: number;
  className?: string;
  glow?: boolean;
}) {
  const stars = makeStars(count, seed);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {glow && (
        <div
          className="absolute inset-x-0 top-0 h-2/3"
          style={{
            background:
              "radial-gradient(120% 80% at 50% -10%, rgba(226,205,160,0.22), rgba(226,205,160,0.06) 40%, transparent 70%)",
          }}
        />
      )}
      {stars.map((s, i) => {
        const bright = i % 9 === 0;
        const size = bright ? s.size * 1.7 : s.size;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-champagne-soft"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${size}px`,
              height: `${size}px`,
              boxShadow: `0 0 ${size * (bright ? 6 : 3.5)}px ${size * (bright ? 1.6 : 1)}px rgba(232,214,176,${bright ? 0.7 : 0.5})`,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              opacity: 0.92,
            }}
          />
        );
      })}
    </div>
  );
}
