import { NextResponse } from "next/server";

/* Enquiry intake endpoint.
   TODO (integration): forward to CRM / Google Sheet / email / WhatsApp API.
   For now it validates server-side and acknowledges the lead. */

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

  // Simulate persistence latency.
  await new Promise((r) => setTimeout(r, 650));

  // eslint-disable-next-line no-console
  console.log("[SITASRM enquiry]", { name, phone, email, course, state, city });

  return NextResponse.json({
    ok: true,
    message: "Enquiry received. A counsellor will call you within 24 hours.",
  });
}
