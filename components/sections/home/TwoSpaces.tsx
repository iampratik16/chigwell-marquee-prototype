"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { SPACE_MEGA } from "@/lib/media";
import { MINI_IMG } from "@/lib/media.real";
import AnimatedLink from "@/components/ui/AnimatedLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Starfield from "@/components/effects/Starfield";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMounted } from "@/lib/useMounted";
import { useIsDesktop } from "@/lib/useMediaQuery";

const MEGA = {
  numeral: "I",
  name: "The Mega Marquee",
  capacity: "300 – 1,000 guests",
  copy: "High ceilings, neutral interiors, a state-of-the-art sound & lighting rig and a fully functioning kitchen, a grand blank canvas for weddings, galas and corporate showcases.",
  href: "/spaces/mega-marquee",
  media: SPACE_MEGA,
};
const MINI = {
  numeral: "II",
  name: "The Mini Marquee",
  capacity: "30 – 200 guests",
  copy: "Floor-to-ceiling glass, built-in air conditioning and a white-canopy starlit ceiling that switches on as evening falls, opening onto the Secret Garden.",
  href: "/spaces/mini-marquee",
  media: MINI_IMG.interior,
};

function SpaceContent({ s }: { s: typeof MEGA }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <span className="font-display text-[0.95rem] tracking-[0.4em] text-champagne">{s.numeral}</span>
        <h2 className="mt-3 display-lg">{s.name}</h2>
        <p className="mt-3 font-display text-2xl italic text-champagne-soft">{s.capacity}</p>
      </div>
      <div className="md:col-span-5">
        <p className="text-bone/80">{s.copy}</p>
        <div className="mt-6">
          <AnimatedLink href={s.href} arrow cursorLabel="Discover" className="text-bone">
            Step inside
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
}

/** Static, structurally-stable version (SSR default + reduced motion). */
function Static() {
  return (
    <section className="bg-ink text-bone">
      {[MEGA, MINI].map((s, i) => (
        <div key={s.name} className="relative h-[82svh] min-h-[520px] w-full overflow-hidden">
          <Image src={s.media.src} alt={s.media.alt} fill sizes="100vw" className="object-cover" />
          <div
            className={
              i === 1
                ? "absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/40"
                : "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/55"
            }
          />
          {i === 1 && <Starfield count={150} />}
          {i === 0 && (
            <div className="container-luxe absolute inset-x-0 top-24">
              <Eyebrow tone="champagne">Two spaces · one estate</Eyebrow>
            </div>
          )}
          <div className="container-luxe relative flex h-full flex-col justify-end pb-16">
            <SpaceContent s={s} />
          </div>
        </div>
      ))}
    </section>
  );
}

/** GSAP-pinned cinematic scene (only mounted when motion is allowed). */
function Pinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = sectionRef.current;
      if (!ctx) return;
      const q = gsap.utils.selector(ctx);
      const megaContent = ctx.querySelector<HTMLElement>(".mega-content");
      const miniContent = ctx.querySelector<HTMLElement>(".mini-content");

      gsap.set(q(".mini-layer"), { opacity: 0 });
      gsap.set(q(".starfield"), { opacity: 0 });
      gsap.set(q(".mini-content"), { opacity: 0, y: 40 });

      // The Mega and Mini "Step inside" links overlap, so only one layer may be
      // clickable at a time. Drive this from scroll progress rather than tweening
      // pointer-events: string props don't scrub reliably and would leave the
      // Mega link dead (or the invisible Mini link swallowing its clicks).
      const setClickable = (megaOn: boolean) => {
        if (megaContent) megaContent.style.pointerEvents = megaOn ? "auto" : "none";
        if (miniContent) miniContent.style.pointerEvents = megaOn ? "none" : "auto";
      };
      setClickable(true);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctx,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: stageRef.current,
          anticipatePin: 1,
          onUpdate: (self) => setClickable(self.progress < 0.5),
        },
      });

      tl.to(q(".mega-img"), { scale: 1.14, ease: "none" }, 0)
        .to(q(".mega-content"), { opacity: 0, y: -40, ease: "power1.in" }, 0.18)
        .to(q(".dark-veil"), { opacity: 0.45, ease: "none" }, 0.2)
        .to(q(".mega-layer"), { opacity: 0, ease: "none" }, 0.3)
        .to(q(".mini-layer"), { opacity: 1, ease: "none" }, 0.32)
        .fromTo(q(".mini-img"), { scale: 1.16 }, { scale: 1.02, ease: "none" }, 0.32)
        .to(q(".starfield"), { opacity: 1, ease: "power1.out" }, 0.5)
        .to(q(".mini-content"), { opacity: 1, y: 0, ease: "power2.out" }, 0.58);
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-[340vh] bg-ink text-bone">
      <div ref={stageRef} className="relative h-[100svh] w-full overflow-hidden">
        <div className="mega-layer absolute inset-0">
          <Image src={MEGA.media.src} alt={MEGA.media.alt} fill sizes="100vw" className="mega-img object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
        </div>

        <div className="mini-layer absolute inset-0">
          <Image src={MINI.media.src} alt={MINI.media.alt} fill sizes="100vw" className="mini-img object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/40" />
          <div className="starfield">
            <Starfield count={170} seed={23} />
          </div>
        </div>

        <div className="dark-veil pointer-events-none absolute inset-0 bg-ink-deep opacity-0" />

        <div className="container-luxe pointer-events-none absolute inset-x-0 top-28 z-10">
          <Eyebrow tone="champagne">Two spaces · one estate</Eyebrow>
        </div>

        <div className="container-luxe relative z-10 flex h-full items-end pb-[clamp(3rem,9vh,7rem)]">
          <div className="relative w-full">
            <div className="mega-content">
              <SpaceContent s={MEGA} />
            </div>
            <div className="mini-content absolute inset-x-0 bottom-0">
              <SpaceContent s={MINI} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TwoSpaces() {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const isDesktop = useIsDesktop();
  return mounted && !reduced && isDesktop ? <Pinned /> : <Static />;
}
