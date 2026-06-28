"use client";

import { ArrowRight, GraduationCap, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentClasses, iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { programs } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

function ProgramCard({ p, i }: { p: (typeof programs)[number]; i: number }) {
  const ac = accentClasses[p.accent];
  const Icon = iconMap[p.icon];
  const featured = p.featured;

  return (
    <Reveal
      delay={(i % 3) * 0.08}
      className={cn(
        "group",
        featured ? "lg:col-span-3" : "lg:col-span-2"
      )}
    >
      <div className="lift relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy-900/8 bg-white p-6 shadow-card sm:p-7">
        {/* accent glow */}
        <div className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-15 blur-2xl bg-gradient-to-br", ac.from, ac.to)} />

        <div className="relative flex items-start justify-between gap-4">
          <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md", ac.from, ac.to)}>
            {Icon && <Icon className="h-7 w-7" />}
          </div>
          <span className="rounded-full border border-navy-900/10 bg-mist px-3 py-1 text-[0.72rem] font-semibold text-ink-soft">
            {p.duration}
          </span>
        </div>

        <h3 className="relative mt-5 font-display text-xl font-bold text-navy-900 sm:text-2xl">
          {p.code}
        </h3>
        <p className="relative text-sm font-medium text-ink-soft">{p.degree}</p>
        <p className={cn("relative mt-3 text-[0.95rem] font-semibold", ac.text)}>{p.tagline}</p>

        {featured && (
          <p className="relative mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
        )}

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {p.specializations.slice(0, featured ? 5 : 3).map((s) => (
            <span
              key={s}
              className={cn("rounded-full px-2.5 py-1 text-xs font-medium", ac.soft, ac.text)}
            >
              {s}
            </span>
          ))}
        </div>

        {featured && (
          <p className="relative mt-4 text-xs text-ink-soft">
            <span className="font-semibold text-navy-800">Careers:</span> {p.careers.join(" · ")}
          </p>
        )}

        <div className="relative mt-auto flex items-center justify-between pt-6">
          <div className="flex items-center gap-1 text-sm font-semibold text-navy-900">
            <IndianRupee className="h-3.5 w-3.5" />
            {p.salary.replace("₹", "")}
            <span className="ml-1 text-[0.68rem] font-normal text-ink-soft">/ yr*</span>
          </div>
          <button
            onClick={() => openEnquiry("MBA")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition group-hover:gap-2.5",
              ac.bg
            )}
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-gradient-to-b from-white to-haze/50 py-20 lg:py-28">
      <div className="shell">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="MBA Specializations"
            eyebrowIcon={<GraduationCap className="h-3.5 w-3.5" />}
            title={
              <>
                Five specializations. One promise:{" "}
                <span className="text-gradient">a career, not just a certificate.</span>
              </>
            }
            lead="Every MBA track is built around real industry roles, with live briefs and analytics from semester one."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((p, i) => (
            <ProgramCard key={p.id} p={p} i={i} />
          ))}
        </div>

        <p className="mt-5 text-xs text-ink-soft">
          *Indicative annual package ranges based on role &amp; performance — confirm current figures with the admissions office.
        </p>
      </div>
    </section>
  );
}
