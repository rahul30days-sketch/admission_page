"use client";

import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { iconMap, accentClasses } from "@/lib/icons";
import { whyStories } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

function StoryVisual({
  no, icon, accent, points,
}: {
  no: string; icon: string; accent: string; points: string[];
}) {
  const Icon = iconMap[icon];
  const ac = accentClasses[accent];
  return (
    <div className="relative aspect-[4/3.2] overflow-hidden rounded-[2rem] border border-navy-900/8 bg-gradient-to-br from-white via-haze/50 to-white shadow-card lg:aspect-auto lg:h-full lg:min-h-[24rem]">
      <div className={cn("absolute inset-0 opacity-[0.12] bg-gradient-to-br", ac.from, ac.to)} />
      <div className="grid-lines absolute inset-0 opacity-40" />

      {/* ghosted number */}
      <span className="pointer-events-none absolute -right-3 -top-8 font-display text-[10rem] font-extrabold leading-none text-navy-900/[0.04]">
        {no}
      </span>

      {/* icon tile */}
      <div className="absolute left-7 top-7">
        <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", ac.from, ac.to)}>
          {Icon && <Icon className="h-8 w-8" />}
        </div>
      </div>

      {/* floating chips */}
      <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2">
        {points.map((p, i) => (
          <span
            key={p}
            className={cn(
              "glass rounded-full px-3.5 py-1.5 text-xs font-medium text-navy-800",
              i === 1 && "animate-float-slow",
              i === 2 && "animate-float-med"
            )}
          >
            {p}
          </span>
        ))}
      </div>

      {/* deco orbit */}
      <div className={cn("absolute right-8 top-1/2 h-24 w-24 rounded-full opacity-40 ring-2 ring-inset", ac.ring)}>
        <span className={cn("absolute -right-1.5 top-1/2 h-3 w-3 rounded-full", ac.bg)} />
      </div>
    </div>
  );
}

export function WhySeri() {
  return (
    <section id="why" className="relative bg-mist py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Why SITASRM"
          title={
            <>
              Four reasons ambitious students{" "}
              <span className="text-gradient">choose us first.</span>
            </>
          }
          lead="Not a list of facilities — a system designed end-to-end to turn potential into a career."
          className="mx-auto mb-16 max-w-3xl"
        />

        <div className="flex flex-col gap-16 lg:gap-24">
          {whyStories.map((s, i) => {
            const ac = accentClasses[s.accent];
            const flip = i % 2 === 1;
            return (
              <div
                key={s.no}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  direction={flip ? "left" : "right"}
                  className={cn(flip && "lg:order-2")}
                >
                  <StoryVisual no={s.no} icon={s.icon} accent={s.accent} points={s.points} />
                </Reveal>

                <Reveal direction={flip ? "right" : "left"} delay={0.1}>
                  <div>
                    <span className={cn("eyebrow", ac.text)}>
                      <span className={cn("h-px w-8", ac.bg)} /> {s.tag}
                    </span>
                    <h3 className="mt-4 max-w-lg font-display text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                    <ul className="mt-6 grid gap-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
                          <span className={cn("flex h-5 w-5 items-center justify-center rounded-full text-white", ac.bg)}>
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md font-display text-xl font-semibold text-navy-900 sm:text-2xl">
            Ready to build that future — right here in Greater Noida?
          </p>
          <Button
            variant="primary"
            size="lg"
            magnetic
            onClick={() => openEnquiry()}
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Apply for 2026
          </Button>
        </div>
      </div>
    </section>
  );
}
