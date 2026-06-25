"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

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
          <div className="bg-gradient-to-r from-navy-900 via-royal-700 to-navy-900 text-center text-[0.78rem] font-medium text-ice-200">
            <div className="shell flex items-center justify-center gap-2 py-2">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span>
                <strong className="font-semibold text-white">Admissions 2026 are open</strong>
                <span className="hidden sm:inline">
                  {" "}— scholarships up to 100% &amp; 100% placement assistance.
                </span>
              </span>
              <button
                onClick={() => openEnquiry()}
                className="ml-1 hidden rounded-full bg-white/10 px-3 py-0.5 font-semibold text-white transition hover:bg-white/20 sm:inline-block"
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
          "transition-all duration-500",
          scrolled
            ? "border-b border-navy-900/10 bg-white/80 shadow-[0_8px_30px_-12px_rgba(7,15,38,0.18)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="shell flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <Logo tone={scrolled ? "light" : "dark"} />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-navy-700 hover:bg-navy-900/5 hover:text-navy-900"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.primaryPhone}`}
              className={cn(
                "hidden h-11 w-11 items-center justify-center rounded-full border transition md:flex",
                scrolled
                  ? "border-navy-900/15 text-navy-700 hover:bg-navy-900/5"
                  : "border-white/25 text-white hover:bg-white/10"
              )}
              aria-label="Call admissions"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <Button
              size="sm"
              variant={scrolled ? "primary" : "warm"}
              onClick={() => openEnquiry()}
              className="hidden sm:inline-flex"
            >
              Apply 2026
            </Button>
            <button
              onClick={() => setOpen(true)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
                scrolled
                  ? "border-navy-900/15 text-navy-800"
                  : "border-white/25 text-white"
              )}
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
                <Logo tone="dark" />
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
                  <Phone className="h-4 w-4" /> {site.phones[0]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
