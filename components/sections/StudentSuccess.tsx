"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap } from "@/lib/icons";
import { journey } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

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

        <div className="mt-4 flex flex-col items-center gap-3 text-center">
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
