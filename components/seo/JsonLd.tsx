import { faqs, programs, site } from "@/lib/content";

/** Structured data for rich results: Organization, Course, FAQ, Breadcrumb. */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: site.name,
    alternateName: ["SERI", "SITASRM"],
    url: site.url,
    logo: `${site.url}/opengraph-image`,
    image: `${site.url}/opengraph-image`,
    description: `${site.tagline}. AICTE-approved MBA programme in Greater Noida, Delhi NCR.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    telephone: site.primaryPhone,
    email: site.emails[0],
    sameAs: Object.values(site.socials),
    areaServed: ["Greater Noida", "Delhi NCR", "Noida", "Uttar Pradesh"],
  };

  const courseList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.degree,
        description: p.blurb,
        provider: {
          "@type": "CollegeOrUniversity",
          name: site.name,
          sameAs: site.url,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Onsite",
          location: {
            "@type": "Place",
            name: `${site.name}, ${site.address.city}`,
          },
        },
      },
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Admissions 2026", item: `${site.url}/#apply` },
    ],
  };

  const blocks = [organization, courseList, faqPage, breadcrumb];

  return (
    <>
      {blocks.map((b, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }}
        />
      ))}
    </>
  );
}
