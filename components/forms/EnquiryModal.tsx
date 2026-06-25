"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EnquiryForm } from "./EnquiryForm";
import { APPLY_EVENT } from "@/lib/applyBus";

export function EnquiryModal() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { course?: string } | undefined;
      setCourse(detail?.course);
      setOpen(true);
    };
    window.addEventListener(APPLY_EVENT, handler);
    return () => window.removeEventListener(APPLY_EVENT, handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="2026 admission enquiry"
        >
          <div
            className="absolute inset-0 bg-navy-950/65 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="relative z-10 max-h-[94vh] w-full max-w-lg overflow-y-auto no-scrollbar sm:m-4"
          >
            <EnquiryForm
              onClose={() => setOpen(false)}
              defaultCourse={course}
              autoFocus
              title="Apply for 2026"
              subtitle="Tell us a little about you — we'll take it from here."
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
