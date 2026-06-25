"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { iconMap } from "@/lib/icons";
import { admissionSteps } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

export function AdmissionProcess() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="relative bg-white py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Admission Process"
          title={
            <>
              Four simple steps to{" "}
              <span className="text-gradient">your 2026 seat.</span>
            </>
          }
          lead="No confusion, no endless paperwork. A counsellor guides you end to end."
          className="mx-auto mb-16 max-w-2xl"
        />

        <div className="relative mx-auto max-w-2xl">
          {/* track */}
          <div className="absolute bottom-7 left-7 top-7 w-0.5 bg-navy-900/10" />
          <motion.div
            className="absolute left-7 top-7 w-0.5 origin-top bg-gradient-to-b from-royal-500 via-flame-500 to-gold-400"
            style={{ height: "calc(100% - 3.5rem)" }}
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-6">
            {admissionSteps.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <Reveal key={s.no} delay={i * 0.1} direction="left">
                  <div className="relative flex gap-5">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy-900/10 bg-white text-royal-600 shadow-card">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div className="flex-1 rounded-2xl border border-navy-900/8 bg-white p-5 shadow-card sm:p-6">
                      <div className="text-[0.7rem] font-bold uppercase tracking-wider text-flame-600">
                        Step {s.no}
                      </div>
                      <h3 className="mt-1 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            magnetic
            icon={<ArrowRight className="h-4 w-4" />}
            onClick={() => openEnquiry()}
          >
            Start with Step 1 — it&apos;s free
          </Button>
        </div>
      </div>
    </section>
  );
}
