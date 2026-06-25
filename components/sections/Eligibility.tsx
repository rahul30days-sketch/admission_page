"use client";

import { Briefcase, Check, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { eligibility } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

function EligibilityCard({
  data, accent, icon: Icon, course, side,
}: {
  data: typeof eligibility.mba;
  accent: "royal" | "flame";
  icon: typeof GraduationCap;
  course?: string;
  side: "left" | "right";
}) {
  const head =
    accent === "royal"
      ? "from-royal-500 to-royal-700"
      : "from-flame-500 to-gold-500";
  return (
    <Reveal direction={side === "left" ? "right" : "left"}>
      <div className="overflow-hidden rounded-[1.75rem] border border-navy-900/8 bg-white shadow-card">
        <div className={cn("flex items-center justify-between bg-gradient-to-br p-6 text-white", head)}>
          <div>
            <h3 className="font-display text-2xl font-extrabold">{data.label}</h3>
            <p className="text-sm text-white/80">{data.duration} · Full-time</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <Icon className="h-7 w-7" />
          </div>
        </div>
        <div className="p-6">
          <ul className="grid gap-3.5">
            {data.rows.map((r) => (
              <li key={r.k} className="flex items-start gap-3">
                <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white", accent === "royal" ? "bg-royal-500" : "bg-flame-500")}>
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm">
                  <span className="font-semibold text-navy-900">{r.k}: </span>
                  <span className="text-ink-soft">{r.v}</span>
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant={accent === "royal" ? "primary" : "warm"}
            className="mt-6 w-full"
            onClick={() => openEnquiry(course)}
          >
            Apply for {data.label}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function Eligibility() {
  return (
    <section id="eligibility" className="relative bg-mist py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Eligibility"
          title={
            <>
              Find your path:{" "}
              <span className="text-gradient">MBA or B.Tech.</span>
            </>
          }
          lead="Two routes to a future-ready career. Check where you fit in seconds."
          className="mx-auto mb-14 max-w-2xl"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-10">
          <EligibilityCard data={eligibility.mba} accent="flame" icon={Briefcase} course="MBA" side="left" />
          <EligibilityCard data={eligibility.btech} accent="royal" icon={GraduationCap} side="right" />

          {/* VS badge */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-mist bg-navy-900 font-display text-sm font-bold text-white md:flex">
            VS
          </div>
        </div>
      </div>
    </section>
  );
}
