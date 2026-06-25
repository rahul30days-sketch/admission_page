"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { accentClasses, iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { journey, testimonials } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

const accents = ["royal", "flame", "gold"];

function Avatar({ name, accent }: { name: string; accent: string }) {
  const ac = accentClasses[accent];
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className={cn("flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-display text-base font-bold text-white", ac.from, ac.to)}>
      {initials}
    </div>
  );
}

export function StudentSuccess() {
  const reduce = useReducedMotion();
  return (
    <section id="success" className="relative bg-mist py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Student Success"
          title={
            <>
              From first day to{" "}
              <span className="text-gradient">first offer letter.</span>
            </>
          }
          lead="A guided journey — every stage backed by mentors, projects and recruiters."
          className="mx-auto mb-16 max-w-3xl"
        />

        {/* Journey stepper */}
        <div className="relative mb-20">
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-navy-900/10 md:block" />
          <motion.div
            className="absolute left-0 top-7 hidden h-0.5 origin-left bg-gradient-to-r from-royal-500 via-flame-500 to-gold-400 md:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%" }}
          />
          <ol className="relative grid gap-8 md:grid-cols-5">
            {journey.map((j, i) => {
              const Icon = iconMap[j.icon];
              return (
                <Reveal key={j.step} delay={i * 0.12} className="flex flex-col items-center text-center md:items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-900/10 bg-white text-royal-600 shadow-card">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="mt-4">
                    <div className="text-[0.7rem] font-bold uppercase tracking-wider text-flame-600">
                      Step {i + 1}
                    </div>
                    <div className="mt-0.5 font-display text-base font-bold text-navy-900">{j.step}</div>
                    <p className="mt-1 max-w-[12rem] text-xs leading-relaxed text-ink-soft">{j.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const accent = accents[i % accents.length];
            return (
              <Reveal key={t.name} delay={i * 0.1}>
                <article className="lift flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar name={t.name} accent={accent} />
                      <div>
                        <div className="font-display text-sm font-bold text-navy-900">{t.name}</div>
                        <div className="text-xs text-ink-soft">{t.program}</div>
                      </div>
                    </div>
                    <LinkedInIcon className="h-5 w-5 text-[#0A66C2]" />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
                      Placed · {t.package}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-soft">
                      <Building2 className="h-3.5 w-3.5" /> {t.role} · {t.company}
                    </span>
                  </div>

                  <div className="relative mt-4 flex-1">
                    <Quote className="absolute -left-1 -top-1 h-7 w-7 text-navy-900/8" />
                    <p className="relative pl-6 text-sm leading-relaxed text-ink-soft">{t.quote}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-5 text-center text-xs text-ink-soft">
          Student outcomes shown are illustrative samples — replace with verified, consented profiles before launch.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
            Your success story starts in 2026.
          </p>
          <Button
            variant="primary"
            size="lg"
            magnetic
            onClick={() => openEnquiry()}
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Begin your application
          </Button>
        </div>
      </div>
    </section>
  );
}
