import { NextResponse } from "next/server";

/* Enquiry intake endpoint.
   Validates the lead, then forwards it to the CRM via CRM_WEBHOOK_URL
   (server-side only — the webhook URL is never exposed to the browser).

   The CRM webhook validates top-level `name` / `email` / `phone`, so the
   lead is sent as a flat object. Extra fields (course, city, state, …) are
   included for CRM field-mapping plus summarised into `message`. */

const phoneRe = /^(?:\+?91[\s-]?)?[6-9]\d{9}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").replace(/\s/g, "");
  const email = String(body.email ?? "").trim();
  const course = String(body.course ?? "").trim();
  const state = String(body.state ?? "").trim();
  const city = String(body.city ?? "").trim();
  const consent = Boolean(body.consent);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your full name.";
  if (!phoneRe.test(phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (!emailRe.test(email)) errors.email = "Enter a valid email address.";
  if (!course) errors.course = "Please select a course.";
  if (!state) errors.state = "Please select your state.";
  if (city.length < 2) errors.city = "Please enter your city.";
  if (!consent) errors.consent = "Consent is required.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Flat lead payload. `name` / `email` / `phone` are the keys the CRM
  // webhook validates; rename/extend here to match your CRM field mapping.
  const lead = {
    name,
    email,
    phone,
    course,
    city,
    state,
    source: "SITASRM Admissions Landing Page",
    campaign: "MBA & B.Tech Admissions 2026",
    message: `Programme interest: ${course}. Location: ${city}, ${state}. Consent: ${consent ? "yes" : "no"}.`,
    consent,
    submitted_at: new Date().toISOString(),
  };

  const webhook = process.env.CRM_WEBHOOK_URL;
  let crmForwarded = false;
  let crmStatus = 0;

  if (webhook) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10_000);
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(lead),
        signal: controller.signal,
        cache: "no-store",
      });
      clearTimeout(timeout);
      crmStatus = res.status;
      crmForwarded = res.ok;
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[CRM webhook] non-2xx response", res.status, text.slice(0, 300));
      }
    } catch (err) {
      console.error("[CRM webhook] forward failed", err);
    }
  } else {
    console.warn("[CRM webhook] CRM_WEBHOOK_URL is not set — lead NOT forwarded to CRM.");
  }

  // Always log the lead server-side as a recoverable backup if the CRM call fails.
  console.log("[SITASRM enquiry]", { ...lead, crmForwarded, crmStatus });

  // The visitor always gets a successful experience; lead capture never blocks on the CRM.
  return NextResponse.json({
    ok: true,
    message: "Enquiry received. A counsellor will call you within 24 hours.",
  });
}
