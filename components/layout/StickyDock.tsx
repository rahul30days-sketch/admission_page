"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.92L2 22l5.2-1.36A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.55 0-3.06-.42-4.38-1.2l-.31-.19-3.09.81.82-3.01-.2-.32A8.16 8.16 0 1 1 12 20.2zm4.5-5.8c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" />
    </svg>
  );
}

export function StickyDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi! I'm interested in 2026 admissions at SITASRM. Please share details."
  )}`;

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Desktop vertical dock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/10 bg-white/85 text-navy-700 shadow-card backdrop-blur transition hover:-translate-y-0.5 hover:text-navy-900"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppGlyph className="h-7 w-7" />
            </a>
            <button
              onClick={() => openEnquiry()}
              className="sheen group flex h-14 items-center gap-2 rounded-full bg-gradient-to-br from-flame-400 to-flame-500 pl-5 pr-6 font-semibold text-navy-950 shadow-[0_16px_40px_-12px_rgba(201,162,39,0.6)] transition hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-navy-950/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-navy-950" />
                </span>
                Apply 2026
              </span>
            </button>
          </motion.div>

          {/* Mobile bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          >
            <div className="flex items-center gap-2 border-t border-navy-900/10 bg-white/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl">
              <a
                href={`tel:${site.primaryPhone}`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-navy-900/12 bg-white text-navy-700"
                aria-label="Call admissions"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppGlyph className="h-6 w-6" />
              </a>
              <button
                onClick={() => openEnquiry()}
                className="sheen flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-royal-400 to-royal-600 font-semibold text-white shadow-glow"
              >
                <span className="relative z-10">Apply for 2026 →</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
