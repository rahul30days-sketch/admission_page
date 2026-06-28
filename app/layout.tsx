import type { Metadata, Viewport } from "next";
import { Geist, Sora, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

const description =
  "MBA Admissions 2026 open at SITASRM Engineering & Research Institute, Greater Noida. AICTE-approved MBA with specializations in Marketing, Finance, Business Analytics, HR and Strategy — up to 100% scholarship and 100% placement assistance in Delhi NCR.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "MBA Admissions 2026 | SITASRM Engineering & Research Institute, Greater Noida",
    template: "%s | SITASRM Greater Noida",
  },
  description,
  applicationName: site.name,
  keywords: [
    "MBA Admissions 2026",
    "Best MBA College Delhi NCR",
    "MBA college Greater Noida",
    "MBA in Marketing Greater Noida",
    "MBA in Finance Delhi NCR",
    "MBA Business Analytics",
    "MBA Human Resource",
    "Top AKTU MBA College",
    "SITASRM",
    "SERI Greater Noida",
    "MBA admissions Delhi NCR",
    "AICTE approved MBA Greater Noida",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title:
      "MBA Admissions 2026 — SITASRM, Greater Noida",
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SITASRM Engineering & Research Institute — Admissions 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Admissions 2026 — SITASRM, Greater Noida",
    description,
    images: ["/opengraph-image"],
    creator: "@seri_grnoida",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#100d27" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geist.variable} ${sora.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Universal CSP fallback for hosts that don't apply `.htaccess` / `_headers`.
            Header-only directives (frame-ancestors, HSTS, X-Frame-Options) are set
            at the host layer — see public/.htaccess and public/_headers.
            `'unsafe-eval'` is added ONLY in dev (React debugging needs it); the
            production CSP never includes it. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={
            `default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; ` +
            `img-src 'self' data: https:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; ` +
            `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}; ` +
            `connect-src 'self' https:; frame-src 'self' https://www.google.com https://maps.google.com; ` +
            `upgrade-insecure-requests`
          }
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen bg-mist text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
