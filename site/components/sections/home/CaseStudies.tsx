import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

/** Real case-study titles from the source (no fabricated quotes, see ASSETS_TODO). */
const CASES = [
  { title: "Bollywood Themed Engagement Party", space: "Mega Marquee" },
  { title: "Amy & Danny's Summer Wedding", space: "Mini Marquee" },
  { title: "The Perfect Christmas Party", space: "Mega Marquee" },
  { title: "FestiFit, Fitness Event", space: "Mega Marquee" },
];

export default function CaseStudies() {
  return (
    <Section tone="bone" spacing="md">
      <div className="container-luxe">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Recently at the estate</Eyebrow>
            <h2 className="mt-6 display-md max-w-xl">
              A few of the occasions we&apos;ve had the privilege to host.
            </h2>
          </div>
        </div>

        <ul className="mt-12 border-t border-line">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <li className="group/case flex flex-col gap-1 border-b border-line py-7 md:flex-row md:items-baseline md:justify-between">
                <div className="flex items-baseline gap-5">
                  <span className="eyebrow text-mist">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl transition-colors duration-500 group-hover/case:text-botanical md:text-3xl">
                    {c.title}
                  </span>
                </div>
                <span className="pl-10 text-sm uppercase tracking-[0.16em] text-mist md:pl-0">
                  {c.space}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
