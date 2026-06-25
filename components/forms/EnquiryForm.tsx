"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, ChevronDown, ShieldCheck, Sparkles, X } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { courseOptions, indianStates, site } from "@/lib/content";
import { Confetti } from "./Confetti";

type FormState = {
  name: string;
  phone: string;
  email: string;
  course: string;
  state: string;
  city: string;
  consent: boolean;
};

const initial: FormState = {
  name: "", phone: "", email: "", course: "", state: "", city: "", consent: false,
};

const validators: Record<keyof Omit<FormState, "consent">, (v: string) => string> = {
  name: (v) => (v.trim().length < 2 ? "Please enter your full name." : ""),
  phone: (v) =>
    !/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g, ""))
      ? "Enter a valid 10-digit mobile number."
      : "",
  email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "Enter a valid email address." : ""),
  course: (v) => (!v ? "Please select a course." : ""),
  state: (v) => (!v ? "Please select your state." : ""),
  city: (v) => (v.trim().length < 2 ? "Please enter your city." : ""),
};

const FIELDS: (keyof Omit<FormState, "consent">)[] = ["name", "phone", "email", "course", "state", "city"];

export function EnquiryForm({
  title = "Get your 2026 admission details",
  subtitle = "Free counselling · scholarship estimate · zero spam.",
  defaultCourse,
  onClose,
  autoFocus = false,
}: {
  title?: string;
  subtitle?: string;
  defaultCourse?: string;
  onClose?: () => void;
  autoFocus?: boolean;
}) {
  const [data, setData] = useState<FormState>({
    ...initial,
    course: defaultCourse ?? "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  const set = (k: keyof FormState, v: string | boolean) =>
    setData((d) => ({ ...d, [k]: v }));
  const blur = (k: string) => setTouched((t) => ({ ...t, [k]: true }));

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    for (const f of FIELDS) e[f] = validators[f](data[f] as string);
    e.consent = data.consent ? "" : "Please accept to continue.";
    return e;
  }, [data]);

  const progress = useMemo(() => {
    const total = FIELDS.length + 1;
    const done = FIELDS.filter((f) => !errors[f]).length + (data.consent ? 1 : 0);
    return Math.round((done / total) * 100);
  }, [errors, data.consent]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, course: true, state: true, city: true, consent: true });
    if (Object.values(errors).some(Boolean)) return;

    setStatus("submitting");
    setServerMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setServerMsg(json.message ?? "");
        setStatus("success");
      } else {
        setStatus("error");
        setServerMsg(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please check your connection and retry.");
    }
  }

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hi! I just enquired about ${data.course || "admissions"} at SITASRM for 2026.`
  )}`;

  return (
    <div className="glass relative overflow-hidden rounded-[1.75rem] p-5 shadow-float sm:p-7">
      <Confetti fire={status === "success"} />

      {/* header */}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-flame-500/10 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-flame-600">
            <Sparkles className="h-3.5 w-3.5" /> Admissions 2026 open
          </div>
          <h3 className="font-display text-xl font-bold text-navy-900">{title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-navy-500 transition hover:bg-navy-900/5"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex flex-col items-center py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg"
            >
              <CheckCircle2 className="h-11 w-11" />
            </motion.div>
            <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
              You&apos;re on the 2026 list! 🎉
            </h3>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              {serverMsg || "A dedicated counsellor will call you within 24 hours with your scholarship estimate."}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white"
            >
              Chat with a counsellor on WhatsApp
            </a>
            {onClose ? (
              <button onClick={onClose} className="mt-3 text-sm font-medium text-ink-soft hover:text-navy-900">
                Close
              </button>
            ) : (
              <button
                onClick={() => {
                  setData({ ...initial, course: defaultCourse ?? "" });
                  setTouched({});
                  setStatus("idle");
                }}
                className="mt-3 text-sm font-medium text-ink-soft hover:text-navy-900"
              >
                Submit another enquiry
              </button>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            className="relative z-10 mt-5"
          >
            {/* progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-[0.7rem] font-medium text-ink-soft">
                <span>Application progress</span>
                <span className="tabular-nums">{progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-navy-900/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-royal-500 to-flame-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <Field
                id="ef-name" label="Full name" value={data.name} className="sm:col-span-2"
                onChange={(v) => set("name", v)} onBlur={() => blur("name")}
                error={touched.name ? errors.name : ""} valid={!!data.name && !errors.name}
                autoComplete="name" autoFocus={autoFocus}
              />
              <Field
                id="ef-phone" label="Mobile number" type="tel" inputMode="tel" value={data.phone}
                onChange={(v) => set("phone", v)} onBlur={() => blur("phone")}
                error={touched.phone ? errors.phone : ""} valid={!!data.phone && !errors.phone}
                autoComplete="tel"
              />
              <Field
                id="ef-email" label="Email address" type="email" inputMode="email" value={data.email}
                onChange={(v) => set("email", v)} onBlur={() => blur("email")}
                error={touched.email ? errors.email : ""} valid={!!data.email && !errors.email}
                autoComplete="email"
              />
              <Select
                id="ef-course" label="Course of interest" value={data.course} options={courseOptions}
                onChange={(v) => set("course", v)} onBlur={() => blur("course")}
                error={touched.course ? errors.course : ""} valid={!!data.course}
              />
              <Select
                id="ef-state" label="State" value={data.state} options={indianStates}
                onChange={(v) => set("state", v)} onBlur={() => blur("state")}
                error={touched.state ? errors.state : ""} valid={!!data.state}
              />
              <Field
                id="ef-city" label="City" value={data.city} className="sm:col-span-2"
                onChange={(v) => set("city", v)} onBlur={() => blur("city")}
                error={touched.city ? errors.city : ""} valid={!!data.city && !errors.city}
                autoComplete="address-level2"
              />
            </div>

            {/* consent */}
            <label className="mt-4 flex cursor-pointer items-start gap-2.5">
              <span className="relative mt-0.5 flex h-5 w-5 shrink-0">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => set("consent", e.target.checked)}
                  onBlur={() => blur("consent")}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-navy-900/25 bg-white transition checked:border-royal-500 checked:bg-royal-500"
                  aria-invalid={!!(touched.consent && errors.consent)}
                />
                <Check className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 scale-0 text-white transition peer-checked:scale-100" />
              </span>
              <span className="text-xs leading-relaxed text-ink-soft">
                I authorise SITASRM &amp; its counsellors to contact me regarding 2026 admissions via call, SMS, email &amp; WhatsApp.
              </span>
            </label>
            {touched.consent && errors.consent && (
              <p className="mt-1 text-xs text-red-500">{errors.consent}</p>
            )}

            {status === "error" && (
              <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                {serverMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="sheen group mt-4 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-royal-400 via-royal-500 to-royal-600 py-3.5 font-semibold text-white shadow-glow transition hover:brightness-110 disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Get admission details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.72rem] text-ink-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              100% private. A counsellor calls within 24 hours.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---- Field primitives ---- */
function FieldShell({
  id, label, floated, error, valid, children,
}: {
  id: string; label: string; floated: boolean; error?: string; valid?: boolean; children: ReactNode;
}) {
  return (
    <div>
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-4 transition-all duration-200",
            floated ? "top-1.5 text-[0.66rem] font-semibold" : "top-1/2 -translate-y-1/2 text-[0.92rem]",
            error ? "text-red-500" : floated ? "text-royal-600" : "text-ink-soft"
          )}
        >
          {label}
        </label>
        {valid && !error && (
          <Check className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500" />
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-err`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1 px-1 text-[0.72rem] text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id, label, value, onChange, onBlur, error, valid, type = "text",
  inputMode, autoComplete, autoFocus, className,
}: {
  id: string; label: string; value: string;
  onChange: (v: string) => void; onBlur: () => void;
  error?: string; valid?: boolean; type?: string;
  inputMode?: "tel" | "email" | "text" | "numeric";
  autoComplete?: string; autoFocus?: boolean; className?: string;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  return (
    <div className={className}>
      <FieldShell id={id} label={label} floated={floated} error={error} valid={valid}>
        <input
          id={id}
          type={type}
          value={value}
          inputMode={inputMode}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); onBlur(); }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cn(
            "h-14 w-full rounded-2xl border bg-white/70 px-4 pt-3.5 text-[0.95rem] text-navy-900 outline-none transition",
            error
              ? "border-red-400 ring-2 ring-red-100"
              : focused
                ? "border-royal-500 ring-2 ring-royal-500/15"
                : "border-navy-900/12 hover:border-navy-900/25"
          )}
        />
      </FieldShell>
    </div>
  );
}

function Select({
  id, label, value, options, onChange, onBlur, error, valid,
}: {
  id: string; label: string; value: string; options: string[];
  onChange: (v: string) => void; onBlur: () => void; error?: string; valid?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  return (
    <FieldShell id={id} label={label} floated={floated} error={error} valid={valid}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); onBlur(); }}
        aria-invalid={!!error}
        className={cn(
          "h-14 w-full cursor-pointer appearance-none rounded-2xl border bg-white/70 px-4 pt-3.5 pr-10 text-[0.95rem] text-navy-900 outline-none transition",
          value ? "text-navy-900" : "text-transparent",
          error
            ? "border-red-400 ring-2 ring-red-100"
            : focused
              ? "border-royal-500 ring-2 ring-royal-500/15"
              : "border-navy-900/12 hover:border-navy-900/25"
        )}
      >
        <option value="" disabled hidden></option>
        {options.map((o) => (
          <option key={o} value={o} className="text-navy-900">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
    </FieldShell>
  );
}
