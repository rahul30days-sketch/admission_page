import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SITASRM Engineering & Research Institute",
    short_name: "SITASRM",
    description:
      "MBA & B.Tech Admissions 2026 — AICTE-approved, AI-powered campus in Greater Noida, Delhi NCR.",
    start_url: "/",
    display: "standalone",
    background_color: "#100d27",
    theme_color: "#100d27",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
