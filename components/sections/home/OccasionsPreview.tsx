import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import RevealImage from "@/components/ui/RevealImage";
import { OCC_WEDDINGS, OCC_CELEBRATIONS, OCC_CORPORATE } from "@/lib/media";

const CARDS = [
  {
    n: "01",
    label: "Weddings",
    blurb: "Garden ceremonies, civil vows and grand traditional Asian weddings.",
    href: "/occasions/weddings",
    media: OCC_WEDDINGS,
  },
  {
    n: "02",
    label: "Celebrations",
    blurb: "Milestone birthdays, engagements, anniversaries and mitzvahs.",
    href: "/occasions/celebrations",
    media: OCC_CELEBRATIONS,
  },
  {
    n: "03",
    label: "Corporate",
    blurb: "Galas, conferences, product launches, festivals and Christmas parties.",
    href: "/occasions/corporate",
    media: OCC_CORPORATE,
  },
];

export default function OccasionsPreview() {
  return (
    <Section tone="bone" spacing="lg">
      <div className="container-luxe">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Occasions</Eyebrow>
            <RevealText as="h2" className="mt-6 display-lg">
              {"Held for every\nkind of gathering."}
            </RevealText>
          </div>
          <Reveal>
            <p className="max-w-sm text-mist md:text-right">
              One adaptable estate, dressed entirely to your vision, from thirty
              guests to a thousand, and no corkage, ever.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              data-cursor="Explore"
              className="group/card block"
            >
              <RevealImage
                media={c.media}
                ratio="4 / 5"
                sizes="(max-width: 768px) 100vw, 33vw"
                interactive
                delay={i * 0.08}
                className="rounded-[1.25rem]"
              />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow text-mist">{c.n}</span>
                  <h3 className="mt-1 font-display text-3xl">{c.label}</h3>
                </div>
                <span
                  aria-hidden
                  className="mt-2 inline-block text-xl text-ink/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-1 group-hover/card:text-champagne"
                >
                  ↗
                </span>
              </div>
              <p className="mt-2 max-w-xs text-sm text-mist">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
