import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Colour of the leading rule + text. */
  tone?: "ink" | "bone" | "champagne";
};

const tones = {
  ink: "text-ink/70 before:bg-ink/30",
  bone: "text-bone/70 before:bg-bone/30",
  champagne: "text-champagne before:bg-champagne/50",
};

/** Small-caps eyebrow with a leading hairline. */
export default function Eyebrow({ children, className, tone = "ink" }: Props) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-3",
        "before:block before:h-px before:w-8 before:content-['']",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
