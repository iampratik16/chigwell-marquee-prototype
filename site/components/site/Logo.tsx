import Link from "next/link";
import { cn } from "@/lib/utils";

/** Typographic wordmark. */
export default function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="The Chigwell Marquees, home"
      className={cn("group/logo block leading-none", className)}
    >
      <span className="block font-display text-[0.7rem] uppercase tracking-[0.42em] opacity-70">
        The Chigwell
      </span>
      <span className="-mt-0.5 block font-display text-[1.45rem] leading-[0.9] tracking-tight">
        Marquees
      </span>
    </Link>
  );
}
