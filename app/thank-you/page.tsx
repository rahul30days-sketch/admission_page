"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Home, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/content";

export default function ThankYouPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi! I just submitted my admission enquiry for SITASRM 2026. Please guide me further."
  )}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10"
      >
        {/* icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.15 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
        >
          <CheckCircle2 className="h-11 w-11 text-emerald-500" />
        </motion.div>

        {/* text */}
        <h1 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Enquiry Received!
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Thank you for reaching out. A SITASRM counsellor will call you within{" "}
          <span className="font-semibold text-navy-900">24 hours</span> with your
          personalised admission &amp; scholarship details.
        </p>

        {/* divider */}
        <div className="my-6 border-t border-gray-100" />

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${site.primaryPhone}`}
            className="flex items-center justify-center gap-2 rounded-full border border-gray-200 py-3 font-semibold text-navy-800 transition hover:bg-gray-50"
          >
            <Phone className="h-4 w-4" />
            Call Admissions
          </a>
        </div>

        {/* back */}
        <a
          href="/"
          className="mt-6 flex items-center justify-center gap-1.5 text-sm text-gray-400 transition hover:text-navy-900"
        >
          <Home className="h-3.5 w-3.5" />
          Back to home
        </a>
      </motion.div>
    </main>
  );
}
