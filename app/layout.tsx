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
  "Admissions 2026 open at SITASRM Engineering & Research Institute, Greater Noida. AICTE-approved MBA & B.Tech (CSE, AI/ML, CS-IT, ECE) with AI labs, up to 100% scholarship and 100% placement assistance in Delhi NCR.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "MBA & B.Tech Admissions 2026 | SITASRM Engineering & Research Institute, Greater Noida",
    template: "%s | SITASRM Greater Noida",
  },
  description,
  applicationName: site.name,
  keywords: [
    "MBA Admissions 2026",
    "B.Tech Admissions 2026",
    "Engineering College in Greater Noida",
    "Best MBA College Delhi NCR",
    "AI Engineering College",
    "Top AKTU College",
    "B.Tech CSE Greater Noida",
    "AI ML B.Tech",
    "SITASRM",
    "SERI Greater Noida",
    "Computer Science Engineering Greater Noida",
    "MBA college Greater Noida",
    "engineering admissions Delhi NCR",
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
      "MBA & B.Tech Admissions 2026 — SITASRM, Greater Noida",
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
    title: "MBA & B.Tech Admissions 2026 — SITASRM, Greater Noida",
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
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070f26" },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-mist text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
