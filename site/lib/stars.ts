/** Deterministic star field (seeded so SSR & client markup match). */
export type Star = {
  x: number; // %
  y: number; // %
  size: number; // px
  delay: number; // s
  duration: number; // s
};

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeStars(count: number, seed = 7): Star[] {
  const rand = mulberry32(seed);
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: +(rand() * 100).toFixed(3),
      y: +(rand() * 72).toFixed(3), // concentrate toward the ceiling
      size: +(rand() * 2 + 0.6).toFixed(2),
      delay: +(rand() * 4).toFixed(2),
      duration: +(rand() * 2.5 + 2).toFixed(2),
    });
  }
  return stars;
}
