"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { faqs, site } from "@/lib/content";
import { openEnquiry } from "@/lib/applyBus";

export function FAQ() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs.map((f, i) => ({ ...f, i }));
    return faqs
      .map((f, i) => ({ ...f, i }))
      .filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="faq" className="relative bg-white py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient">answered.</span>
              </>
            }
            lead="Everything about programs, eligibility, fees and placements — in plain language."
          />
          <div className="relative mt-6">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              className="h-12 w-full rounded-full border border-navy-900/12 bg-mist pl-11 pr-4 text-base text-navy-900 outline-none transition focus:border-royal-500 focus:ring-2 focus:ring-royal-500/15 sm:text-sm"
              aria-label="Search FAQs"
            />
          </div>

          <div className="mt-7 rounded-2xl border border-navy-900/8 bg-gradient-to-br from-haze/60 to-white p-5">
            <p className="text-sm font-semibold text-navy-900">Still have a question?</p>
            <p className="mt-1 text-xs text-ink-soft">Our counsellors reply within minutes.</p>
            <div className="mt-3 flex gap-2">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Button size="sm" variant="outline" onClick={() => openEnquiry()}>
                Ask a counsellor
              </Button>
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-navy-900/8 bg-mist p-8 text-center text-sm text-ink-soft">
              No questions match “{query}”. Try another keyword or ask a counsellor.
            </div>
          ) : (
            <ul className="space-y-3">
              {filtered.map((f) => {
                const isOpen = open === f.i;
                return (
                  <li
                    key={f.i}
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-white transition-colors",
                      isOpen ? "border-royal-300 shadow-card" : "border-navy-900/8"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : f.i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[0.98rem] font-semibold text-navy-900">{f.q}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-royal-500 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
