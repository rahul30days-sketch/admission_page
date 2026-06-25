"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
  eyebrowIcon,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  eyebrowIcon?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "eyebrow rounded-full border px-3.5 py-1.5",
            dark
              ? "border-white/15 bg-white/5 text-ice-200"
              : "border-navy-900/10 bg-white/70 text-royal-600"
          )}
        >
          {eyebrowIcon}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "max-w-3xl text-balance text-3xl font-bold leading-[1.07] sm:text-4xl md:text-5xl",
            dark ? "text-white" : "text-navy-900",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              dark ? "text-ice-200/80" : "text-ink-soft",
              align === "center" && "mx-auto"
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
