import { Mail, MapPin, Phone } from "lucide-react";
import { socialIconMap } from "@/components/ui/SocialIcons";
import { approvals, footerNav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-950 text-ice-200/80"
    >
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(120,160,255,0.5), transparent)",
        }}
      />

      <div className="relative">
        <div className="shell py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a href="#top" aria-label="SITASRM Engineering & Research Institute — home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/white-logo.webp"
                  alt="SITASRM Engineering & Research Institute"
                  className="h-14 w-auto"
                />
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ice-200/70">
                {site.tagline}. {site.promise} A Centre of Excellence for
                engineering, management and research in Knowledge Park-III,
                Greater Noida.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {approvals.map((a) => (
                  <span
                    key={a.short}
                    title={`${a.full} — ${a.note}`}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white"
                  >
                    {a.short}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                {Object.entries(site.socials).map(([key, href]) => {
                  const Icon = socialIconMap[key as keyof typeof socialIconMap];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`SITASRM on ${key}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-ice-200/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                    >
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Nav columns */}
            {footerNav.map((col) => (
              <div key={col.title} className="lg:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ice-200/70 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-300" />
                  <span className="text-ice-200/70">
                    {site.address.line}, {site.address.city},{" "}
                    {site.address.region} {site.address.pincode}
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-royal-300" />
                  <div className="flex flex-col gap-1">
                    {site.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+${p.replace(/\D/g, "")}`}
                        className="text-ice-200/70 transition hover:text-white"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-royal-300" />
                  <a
                    href={`mailto:${site.emails[0]}`}
                    className="whitespace-nowrap text-ice-200/70 transition hover:text-white"
                  >
                    {site.emails[0]}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="SITASRM campus location — Knowledge Park III, Greater Noida"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale-[0.2] [filter:invert(0.9)_hue-rotate(180deg)]"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-ice-200/60 sm:flex-row">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Terms &amp; Conditions</a>
              <a href="#faq" className="transition hover:text-white">FAQ</a>
              <span className="text-ice-200/40">Greater Noida · Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
