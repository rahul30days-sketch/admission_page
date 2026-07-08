import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { StickyDock } from "@/components/layout/StickyDock";
import { EnquiryModal } from "@/components/forms/EnquiryModal";
import { JsonLd } from "@/components/seo/JsonLd";

import { Hero } from "@/components/sections/Hero";
import { WhySeri } from "@/components/sections/WhySeri";
import { Programs } from "@/components/sections/Programs";
import { Eligibility } from "@/components/sections/Eligibility";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { StudentSuccess } from "@/components/sections/StudentSuccess";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Lean conversion funnel: hook → value → programs → qualify → how → proof → objections → act */}
        <Hero />
        <WhySeri />
        <Programs />
        <Eligibility />
        <AdmissionProcess />
        <StudentSuccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyDock />
      <EnquiryModal />
      <JsonLd />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18118087570"
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18118087570');`}
      </Script>
    </>
  );
}
