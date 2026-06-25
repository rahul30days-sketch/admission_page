import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Seamless infinite marquee. Renders the track twice (one copy hidden
    from assistive tech) and translates -50% via CSS. */
export function Marquee({
  children,
  reverse = false,
  className,
  itemClassName,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden mask-x", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-5 pr-5",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
          itemClassName
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center gap-5 pr-5",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
          itemClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
