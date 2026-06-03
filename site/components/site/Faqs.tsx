import Reveal from "@/components/ui/Reveal";

const FAQS = [
  {
    q: "What's the difference between the Mega and Mini Marquee?",
    a: "Capacity. The Mega Marquee is the larger of the two, accommodating from 300 to 1,000 guests. The Mini Marquee is for a more intimate event, for up to 200.",
  },
  {
    q: "Are the venues licensed for civil ceremonies?",
    a: "Yes, our Secret Garden and Belmont Suite are both licensed to hold civil ceremonies, and the Mini Marquee is licensed too.",
  },
  {
    q: "Does the hire cost include catering?",
    a: "No, The Chigwell Marquees are dry-hire venues, so you're free to bring your own caterer. There's no corkage, either.",
  },
  {
    q: "How many hours does the hire include?",
    a: "Twelve hours is standard. When you hold your civil ceremony with us, this can be extended.",
  },
  {
    q: "Is there parking?",
    a: "Yes, and lots of it. We have approximately 600 car-park spaces, free for your guests to use.",
  },
  {
    q: "What time does my event need to finish?",
    a: "Our licence permits events to run until midnight, seven days a week.",
  },
  {
    q: "What's the nearest tube station?",
    a: "Chigwell Station, on the Central Line, a 15-minute walk or a 5-minute car journey from the venue.",
  },
  {
    q: "Are there nearby hotels for guests?",
    a: "Yes. The Travelodge Chigwell is a 6-minute drive away, and the Premier Inn Buckhurst Hill is around 7 minutes.",
  },
];

/** Accessible FAQ using native details/summary (works without JS). */
export default function Faqs() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {FAQS.map((f, i) => (
        <Reveal key={f.q} delay={(i % 4) * 0.05}>
          <details className="group/faq py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-xl leading-snug md:text-2xl">{f.q}</span>
              <span
                aria-hidden
                className="relative mt-1 h-4 w-4 shrink-0"
              >
                <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink" />
                <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open/faq:rotate-90 group-open/faq:opacity-0" />
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-mist">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
