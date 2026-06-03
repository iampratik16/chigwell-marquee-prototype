"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { HOME_GALLERY } from "@/lib/media";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedLink from "@/components/ui/AnimatedLink";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useMounted } from "@/lib/useMounted";
import { useIsDesktop } from "@/lib/useMediaQuery";

function Heading() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-5 display-md">A glimpse inside</h2>
      </div>
      <p className="max-w-xs text-sm text-mist">
        Real weddings, parties and celebrations beneath the marquees.
      </p>
    </div>
  );
}

function CtaPanel() {
  return (
    <div className="flex flex-col justify-center rounded-2xl border border-line bg-bone px-10 py-12">
      <h3 className="display-md">Every angle of the estate.</h3>
      <p className="mt-4 text-mist">Real weddings, parties and celebrations beneath the marquees.</p>
      <div className="mt-7">
        <AnimatedLink href="/gallery" arrow cursorLabel="Gallery">
          View the full gallery
        </AnimatedLink>
      </div>
    </div>
  );
}

/** Static fallback: a clean responsive grid. */
function Static() {
  return (
    <section className="bg-bone-dim py-20 md:py-28">
      <div className="container-luxe">
        <Heading />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {HOME_GALLERY.map((m, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-bone">
              <Image src={m.src} alt={m.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-md">
          <AnimatedLink href="/gallery" arrow cursorLabel="Gallery">
            View the full gallery
          </AnimatedLink>
        </div>
      </div>
    </section>
  );
}

/** Pinned horizontal momentum rail (only when motion is allowed). */
function Pinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!track || !section || !stage) return;
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-bone-dim">
      <div ref={stageRef} className="flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="container-luxe mb-10 shrink-0">
          <Heading />
        </div>
        <div ref={trackRef} className="flex items-stretch gap-5 pl-[var(--gutter)] pr-[40vw] will-change-transform">
          {HOME_GALLERY.map((m, i) => {
            const tall = i % 3 === 1;
            return (
              <figure
                key={i}
                data-cursor="View"
                className="relative h-[58vh] shrink-0 overflow-hidden rounded-2xl"
                style={{ width: tall ? "30vw" : "40vw", minWidth: tall ? 280 : 360 }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="40vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/55 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-bone backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            );
          })}
          <div className="h-[58vh] w-[34vw] min-w-[300px] shrink-0">
            <CtaPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GalleryRail() {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const isDesktop = useIsDesktop();
  return mounted && !reduced && isDesktop ? <Pinned /> : <Static />;
}
