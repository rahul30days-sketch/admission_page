"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, GraduationCap, IndianRupee, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

/* College logo — drop your file at `public/site-logo.png`.
   The white card keeps it legible on both the dark (top) and light
   (scrolled) navbar states. */
function SiteLogo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="SITASRM Engineering & Research Institute — home"
      className={cn("flex w-fit shrink-0 items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/site-logo.png"
        alt="SITASRM Engineering & Research Institute"
        className="h-8 w-auto sm:h-11 lg:h-14"
      />
    </a>
  );
}

/* AICTE approval badge — `public/aicte-logo.png`. */
function AicteLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aicte-logo.png" alt="AICTE Approved" className="h-7 w-auto sm:h-9 lg:h-11" />
    </div>
  );
}

/* Scrolling announcement ticker messages. */
const announcements = [
  { Icon: GraduationCap, text: "Early-Bird Scholarship available until 30th June 2026" },
  { Icon: IndianRupee, text: "Scholarship up to ₹20,000" },
  { Icon: BadgeCheck, text: "100% Placement & Internship Assistance" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement strip — collapses on scroll */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          scrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        )}
      >
        <div className="overflow-hidden">
          <div className="bg-gradient-to-r from-navy-900 via-royal-700 to-navy-900 text-[0.78rem] font-medium text-ice-200">
            <div className="flex items-center gap-3 py-2 pl-3 pr-3 sm:pl-4">
              {/* crawling ticker */}
              <div className="mask-x relative flex-1 overflow-hidden">
                <div className="flex w-max animate-marquee items-center gap-9 whitespace-nowrap [animation-duration:26s] hover:[animation-play-state:paused]">
                  {[0, 1].map((copy) => (
                    <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-9">
                      {announcements.map(({ Icon, text }, i) => (
                        <span key={i} className="flex items-center gap-2 text-white">
                          <Icon className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                          <span>{text}</span>
                          <span className="text-gold-400/60" aria-hidden>
                            ◆
                          </span>
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* fixed apply button */}
              <button
                onClick={() => openEnquiry()}
                className="shrink-0 whitespace-nowrap rounded-full bg-white/15 px-3 py-0.5 text-[0.72rem] font-semibold text-white transition hover:bg-white/25"
              >
                Apply now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-navy-900/10 bg-white transition-all duration-300",
          scrolled ? "shadow-[0_8px_30px_-12px_rgba(7,15,38,0.18)]" : "shadow-sm"
        )}
      >
        <nav className="shell flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <SiteLogo />
            <AicteLogo />
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-900/5 hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.primaryPhone}`}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-700 transition hover:bg-navy-900/5 md:flex"
              aria-label="Call admissions"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <Button
              size="sm"
              variant="warm"
              onClick={() => openEnquiry()}
              className="hidden sm:inline-flex"
            >
              Apply 2026
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-800 transition lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl" />
            <div className="relative flex h-full flex-col">
              <div className="shell flex h-16 items-center justify-between">
                <SiteLogo onClick={() => setOpen(false)} />
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="shell flex flex-1 flex-col justify-center gap-1">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="shell flex flex-col gap-3 pb-10">
                <Button
                  size="lg"
                  variant="warm"
                  onClick={() => {
                    setOpen(false);
                    openEnquiry();
                  }}
                  className="w-full"
                >
                  Apply for 2026
                </Button>
                <a
                  href={`tel:${site.primaryPhone}`}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> {site.callDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
