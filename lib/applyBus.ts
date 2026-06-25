/* Tiny event bus so any CTA can open the global enquiry modal without
   threading state through server components. */

export const APPLY_EVENT = "seri:open-enquiry";

export function openEnquiry(course?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(APPLY_EVENT, { detail: { course } }));
}
