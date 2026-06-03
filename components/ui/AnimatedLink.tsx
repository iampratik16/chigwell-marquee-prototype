"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
  cursorLabel?: string;
};

/** Text link with an underline that wipes in from the left on hover. */
export default function AnimatedLink({
  href,
  children,
  className,
  arrow = false,
  cursorLabel,
}: Props) {
  const external = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
  const Comp: any = external ? "a" : Link;

  return (
    <Comp
      href={href}
      data-cursor={cursorLabel}
      className={cn(
        "group/link inline-flex items-center gap-2 text-[0.82rem] font-medium uppercase tracking-[0.16em]",
        className,
      )}
    >
      <span className="relative">
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:scale-x-100"
        />
      </span>
      {arrow && (
        <span
          aria-hidden
          className="inline-block translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1"
        >
          ↗
        </span>
      )}
    </Comp>
  );
}
