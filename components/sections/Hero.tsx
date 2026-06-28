"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { Aurora, FloatingParticles } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { openEnquiry } from "@/lib/applyBus";
import { hero, heroBadges, heroStats, site } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const lineUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const lineProps = reduce ? {} : { variants: lineUp };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 78% 12%, rgba(79,67,153,0.42), transparent 70%), radial-gradient(50% 45% at 8% 85%, rgba(250,141,210,0.18), transparent 70%)",
          }}
        />
        <Aurora tone="dark" />
        <div className="grid-lines-dark absolute inset-0 opacity-50" />
        <FloatingParticles color="bg-ice-200" />
        <div className="noise absolute inset-0 opacity-[0.06]" />
        {/* floating glass chips */}
        <div className="absolute left-[4%] top-[26%] hidden xl:block">
          <div className="glass-dark animate-float-slow flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-white">
            <span className="text-lg">📊</span> Live Consulting Briefs
          </div>
        </div>
        <div className="absolute left-[6%] bottom-[16%] hidden xl:block">
          <div className="glass-dark animate-float-med flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-white">
            <span className="text-lg">🎓</span> Scholarships up to 100%
          </div>
        </div>
      </div>

      <div className="shell grid w-full grid-cols-1 items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        {/* Left — copy */}
        <motion.div {...anim}>
          <motion.div {...lineProps} className="mb-5">
            <span className="eyebrow rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-ice-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-400/80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-flame-500" />
              </span>
              {hero.kicker}
            </span>
          </motion.div>

          <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] text-white sm:text-[2.6rem] lg:text-[3.1rem]">
            <motion.span {...lineProps} className="block">
              {hero.titleLead}{" "}
              <span className="font-serif font-normal italic text-gradient-cool">
                {hero.titleAccent}
              </span>
            </motion.span>
            <motion.span {...lineProps} className="block">
              {hero.titleTail}
            </motion.span>
          </h1>

          <motion.p
            {...lineProps}
            className="mt-6 max-w-xl text-base leading-relaxed text-ice-200/80 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div {...lineProps} className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="warm" size="lg" magnetic onClick={() => openEnquiry()}>
              {hero.primaryCta}
            </Button>
            <Button
              variant="darkglass"
              size="lg"
              onClick={() => openEnquiry()}
              icon={<GraduationCap className="h-4 w-4" />}
            >
              {hero.secondaryCta}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={`tel:${site.primaryPhone}`}
              sheen={false}
              className="text-white hover:bg-white/10"
              icon={
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-3.5 w-3.5" />
                </span>
              }
            >
              Talk to a counsellor
            </Button>
          </motion.div>

          {/* trust badges */}
          <motion.ul {...lineProps} className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {heroBadges.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-sm text-ice-200/75">
                <ShieldCheck className="h-4 w-4 text-gold-400" /> {b}
              </li>
            ))}
          </motion.ul>

          {/* counters */}
          <motion.div
            {...lineProps}
            className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-white sm:text-[2rem]">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs leading-snug text-ice-200/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — form (desktop) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:-mt-12 lg:block"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-royal-500/30 to-flame-500/20 blur-2xl" />
          <EnquiryForm autoFocus={false} />
        </motion.div>

        {/* Mobile CTA to open form */}
        <motion.div {...lineProps} className="lg:hidden">
          <button
            onClick={() => openEnquiry()}
            className="sheen flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-4 font-semibold text-white backdrop-blur"
          >
            <span className="relative z-10">Open the 2026 application →</span>
          </button>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#why"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ice-200/50 transition hover:text-white md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Explore</span>
        <ChevronDown className="h-5 w-5 animate-float-med" />
      </a>
    </section>
  );
}
