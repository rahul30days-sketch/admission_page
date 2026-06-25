"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Aurora, FloatingParticles } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/lib/content";

export function FinalCTA() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi! I'd like to apply for 2026 admissions at SITASRM."
  )}`;

  return (
    <section id="apply" className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <Aurora tone="warm" />
      <FloatingParticles color="bg-gold-300" />
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 30% 0%, rgba(255,107,44,0.25), transparent 70%)",
        }}
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — urgency */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-gold-300"
          >
            <Sparkles className="h-3.5 w-3.5" /> Admissions closing soon
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl"
          >
            Your future at the{" "}
            <span className="font-serif font-normal italic text-gradient-warm">forefront</span>{" "}
            of technology starts now.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-lg text-base text-ice-200/75 sm:text-lg"
          >
            The 2026 cohort is filling fast. Submit your enquiry now and a
            counsellor will call you with a personalised scholarship &amp;
            placement plan.
          </motion.p>

          {/* seats filling bar */}
          <div className="mt-8 max-w-md">
            <div className="flex items-center justify-between text-xs font-medium text-ice-200/70">
              <span>2026 seats filling</span>
              <span className="text-gold-300">Limited availability</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-flame-500 to-gold-400"
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="darkglass"
              size="lg"
              href={`tel:${site.primaryPhone}`}
              icon={<Phone className="h-4 w-4" />}
            >
              Call {site.phones[0]}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={whatsappHref}
              target="_blank"
              sheen={false}
              className="text-white hover:bg-white/10"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp us
            </Button>
          </div>

          <p className="mt-7 text-xs text-ice-200/50">
            AICTE Approved · Up to 100% Scholarship · 100% Placement Assistance · Knowledge Park-III, Greater Noida
          </p>
        </div>

        {/* Right — enquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-flame-500/30 to-royal-500/20 blur-2xl" />
          <EnquiryForm
            title="Apply for 2026 — takes 2 minutes"
            subtitle="Free counselling · instant scholarship estimate · zero spam."
            autoFocus={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
