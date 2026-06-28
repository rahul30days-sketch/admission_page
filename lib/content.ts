/* ============================================================
   SITASRM ENGINEERING & RESEARCH INSTITUTE (SERI)
   Central content source for the admissions landing page.

   AUTHENTIC (from seri.net.in): institute name, taglines, address,
   programs, eligibility, contacts, socials, scholarships, approvals.

   PLACEHOLDER — marked with [VERIFY]: numeric stats (counters,
   packages, partner counts), faculty profiles and student
   testimonials are illustrative. Replace with verified data
   before going live.
   ============================================================ */

export const site = {
  name: "SITASRM Engineering & Research Institute",
  shortName: "SITASRM",
  alt: "SERI",
  tagline: "A premier Engineering & Research Institute in Delhi NCR",
  motto: "Innovate. Learn. Lead.",
  promise: "Mapping your education to your ambition.",
  url: "https://www.seri.net.in",
  admissionsUrl: "https://admissions.seri.net.in",
  address: {
    line: "Plot No. 14, Knowledge Park-III",
    city: "Greater Noida",
    region: "Uttar Pradesh",
    pincode: "201306",
    country: "India",
  },
  phones: ["+91 92-17-67-6046", "+91 92-17-67-6035", "+91 92-17-67-6022"],
  primaryPhone: "+919217676022", // calling
  callDisplay: "+91 92-17-67-6022", // shown on Call buttons (matches what is dialled)
  whatsapp: "919289896157", // unchanged — number currently in use for WhatsApp
  emails: ["admissions@seri.net.in", "info@seri.net.in"],
  socials: {
    facebook: "https://www.facebook.com/sitasrm.seri",
    instagram: "https://www.instagram.com/seri.grnoida",
    linkedin: "https://www.linkedin.com/company/sitasrm-engineering-and-research-institute",
    twitter: "https://twitter.com/seri_grnoida",
  },
  mapsQuery: "Knowledge Park III, Greater Noida, Uttar Pradesh 201306",
};

export const approvals = [
  { short: "AICTE", full: "All India Council for Technical Education", note: "Approved · LOA 2025-26" },
  { short: "AKTU", full: "Dr. A.P.J. Abdul Kalam Technical University", note: "Affiliated" },
  { short: "UGC", full: "University Grants Commission", note: "Recognised norms" },
  { short: "Govt. of U.P.", full: "Government of Uttar Pradesh", note: "Approved" },
];

/* Hero badges — quick-trust chips */
export const heroBadges = [
  "AICTE Approved",
  "AKTU Affiliated",
  "Up to 100% Scholarship",
  "100% Placement Assistance",
];

/* Animated hero counters. [VERIFY] numbers before launch. */
export const heroStats = [
  { value: 100, suffix: "%", label: "Placement Assistance" },
  { value: 5, suffix: "", label: "MBA Specializations" },
  { value: 100, suffix: "%", label: "Max Merit Scholarship" },
  { value: 120, suffix: "+", label: "Hiring Network" }, // [VERIFY]
];

export const hero = {
  kicker: "MBA Admissions 2026 · Greater Noida",
  titleLead: "Master Business and Leadership with our",
  titleAccent: "Future-Ready", // rendered in editorial serif italic
  titleTail: "MBA Programme",
  subtitle:
    "Industry-synced curriculum, business analytics, global immersion and 100% placement assistance — delivered on a Knowledge Park-III campus in the heart of Delhi NCR.",
  primaryCta: "Apply for 2026",
  secondaryCta: "Request Brochure",
  tertiaryCta: "Watch Campus Film",
};

/* (Trust / recruiters band removed — page focused on admission conversions.) */

/* ============================================================
   WHY SITASRM — alternating storytelling features
   ============================================================ */
export const whyStories = [
  {
    no: "01",
    icon: "cpu",
    tag: "Industry-Synced Curriculum",
    title: "A curriculum co-authored with the people who hire.",
    body:
      "Every program is reverse-engineered from real job descriptions at top tech and management firms — so what you learn on Monday is what the industry needs on Friday. Live tools, real datasets, current frameworks.",
    points: ["Updated each semester", "Tool-first, theory-deep", "Capstone with industry briefs"],
    accent: "royal",
  },
  {
    no: "02",
    icon: "flask",
    tag: "Analytics & Innovation Center",
    title: "Where business analytics isn't a chapter — it's the air.",
    body:
      "A Bloomberg-style finance lab, a business-analytics studio and a dedicated incubation cell focused on data-driven strategy, automation and entrepreneurship. Model, decide and pitch inside a true Centre of Excellence.",
    points: ["Live analytics & finance labs", "AI-driven decision tools", "Incubation cell: Strategy · Analytics · Ventures"],
    accent: "flame",
  },
  {
    no: "03",
    icon: "rocket",
    tag: "Incubation & Entrepreneurship",
    title: "Walk in with an idea. Walk out with a company.",
    body:
      "Our startup incubator gives founders mentorship, seed guidance and a runway to launch while they study. Hackathons, pitch days and a leadership-development track turn ambition into traction.",
    points: ["On-campus startup incubator", "Hackathons & pitch days", "Leadership & soft-skills track"],
    accent: "gold",
  },
  {
    no: "04",
    icon: "globe",
    tag: "Global Immersion",
    title: "A Greater Noida address with a global outlook.",
    body:
      "International collaborations, global-industry partnerships and immersion opportunities expand your horizon beyond the classroom — plus a lifetime alumni network that opens doors long after graduation.",
    points: ["International collaborations", "Global immersion opportunity", "Lifetime alumni network"],
    accent: "ice",
  },
];

/* (Campus Experience section removed — page focused on admission conversions.) */

/* ============================================================
   PROGRAMS — bento grid
   ============================================================ */
export const programs = [
  {
    id: "marketing",
    code: "MBA · Marketing",
    degree: "Marketing & Brand Management",
    duration: "2 Years · Full-time",
    icon: "rocket",
    accent: "flame",
    featured: true,
    tagline: "Build brands people remember.",
    blurb:
      "Master digital marketing, brand strategy and consumer insight with live campaigns and real industry briefs from day one.",
    specializations: ["Digital Marketing", "Brand Strategy", "Consumer Behaviour", "Sales", "Market Research"],
    careers: ["Brand Manager", "Marketing Analyst", "Growth Lead", "Product Marketer", "Digital Strategist"],
    salary: "₹4.5 – 12 LPA", // [VERIFY]
  },
  {
    id: "finance",
    code: "MBA · Finance",
    degree: "Finance & Investment Management",
    duration: "2 Years · Full-time",
    icon: "trending",
    accent: "royal",
    featured: true,
    tagline: "Make the numbers tell the strategy.",
    blurb:
      "Corporate finance, capital markets, valuation and risk — decision-grade financial skills backed by analytics and live case work.",
    specializations: ["Corporate Finance", "Investment Banking", "Financial Analytics", "Risk Management", "FinTech"],
    careers: ["Financial Analyst", "Investment Associate", "Risk Manager", "Equity Researcher", "Consultant"],
    salary: "₹5 – 14 LPA", // [VERIFY]
  },
  {
    id: "analytics",
    code: "MBA · Business Analytics",
    degree: "Business Analytics & Data Science",
    duration: "2 Years · Full-time",
    icon: "brain",
    accent: "gold",
    featured: false,
    tagline: "Turn data into decisions.",
    blurb:
      "Blend management with data science — predictive analytics, visualisation and AI-driven decision-making for the modern enterprise.",
    specializations: ["Predictive Analytics", "Data Visualisation", "Machine Learning", "Business Intelligence", "Decision Science"],
    careers: ["Business Analyst", "Data Analyst", "Analytics Consultant", "Product Analyst"],
    salary: "₹5 – 15 LPA", // [VERIFY]
  },
  {
    id: "hr",
    code: "MBA · Human Resource",
    degree: "Human Resource Management",
    duration: "2 Years · Full-time",
    icon: "handshake",
    accent: "ice",
    featured: false,
    tagline: "Build the teams that build companies.",
    blurb:
      "Talent strategy, organisational behaviour and people analytics — lead culture, hiring and growth in fast-scaling organisations.",
    specializations: ["Talent Acquisition", "Org Behaviour", "People Analytics", "Compensation", "L&D"],
    careers: ["HR Manager", "Talent Partner", "HR Business Partner", "People Ops Lead"],
    salary: "₹4 – 11 LPA", // [VERIFY]
  },
  {
    id: "strategy",
    code: "MBA · Strategy & Leadership",
    degree: "Strategy & General Management",
    duration: "2 Years · Full-time",
    icon: "target",
    accent: "royal",
    featured: false,
    tagline: "Lead teams, build ventures, decide with data.",
    blurb:
      "Strategy, leadership and entrepreneurship — the general-management track for future founders, consultants and business leaders.",
    specializations: ["Business Strategy", "Leadership", "Entrepreneurship", "Operations", "Consulting"],
    careers: ["Consultant", "Product Manager", "Strategy Associate", "Founder", "Operations Lead"],
    salary: "₹5 – 16 LPA", // [VERIFY]
  },
];

/* ============================================================
   STUDENT SUCCESS — journey + testimonials [VERIFY profiles]
   ============================================================ */
export const journey = [
  { step: "Admission", icon: "clipboard", text: "Counselling, scholarship & seat — a guided start." },
  { step: "Foundations", icon: "book", text: "Core management & analytics, tools from day one." },
  { step: "Live Projects", icon: "code", text: "Industry briefs, hackathons and the innovation studio." },
  { step: "Internship", icon: "briefcase", text: "Real teams, real shipping, mentor-backed." },
  { step: "Placement", icon: "trending", text: "Interview prep, offers and your first big role." },
];

export const testimonials = [
  {
    name: "Sneha Verma",
    program: "MBA · Business Analytics · 2025",
    role: "Business Analyst",
    company: "Deloitte",
    package: "₹8.5 LPA",
    quote:
      "Live consulting briefs and analytics made the difference. I walked into placements already speaking the industry's language.",
  },
  {
    name: "Aarav Mehta",
    program: "MBA · Marketing · 2025",
    role: "Brand Manager",
    company: "Accenture",
    package: "₹9.2 LPA",
    quote:
      "Real campaigns from semester one meant my interviews were just show-and-tell. I had a portfolio before I had a degree.",
  },
  {
    name: "Mohd. Faizan",
    program: "MBA · Finance · 2025",
    role: "Investment Associate",
    company: "LTIMindtree",
    package: "₹11 LPA",
    quote:
      "Case work on real valuations and live markets made the difference. The mentorship here is genuinely industry-grade.",
  },
];

/* (Placement Ecosystem section removed — page focused on admission conversions.) */

/* (Campus Life section removed — page focused on admission conversions.) */

/* (Scholarship section removed — page focused on admission conversions.) */

/* ============================================================
   ELIGIBILITY — MBA admission criteria
   ============================================================ */
export const eligibility = {
  mba: {
    label: "MBA",
    duration: "2 Years",
    rows: [
      { k: "Qualification", v: "Bachelor's degree, any discipline" },
      { k: "Minimum Marks", v: "50% · General  |  45% · SC/ST" },
      { k: "Entrance Routes", v: "CAT / MAT / CMAT / CUET-PG" },
      { k: "Other Routes", v: "State Entrance · Management Quota" },
      { k: "Ideal For", v: "Graduates & working professionals" },
    ],
  },
};

/* ============================================================
   ADMISSION PROCESS — 4 authentic steps
   ============================================================ */
export const admissionSteps = [
  { no: "01", icon: "clipboard", title: "Submit Enquiry", text: "Share your details — name, course and contact. Two minutes, zero paperwork." },
  { no: "02", icon: "phone", title: "Receive Counselling", text: "A dedicated counsellor calls you to map the right program & scholarship." },
  { no: "03", icon: "file", title: "Apply Online", text: "Complete your application and upload documents from anywhere." },
  { no: "04", icon: "check", title: "Confirm Admission", text: "Lock your seat, complete fees and join the 2026 cohort." },
];

/* (Faculty profiles section removed — page focused on admission conversions.) */

/* ============================================================
   FAQ — searchable, schema-ready
   ============================================================ */
export const faqs = [
  {
    q: "What does the MBA at SITASRM offer for 2026 admissions?",
    a: "SITASRM offers a 2-year, full-time MBA with five specializations — Marketing, Finance, Business Analytics, Human Resource, and Strategy & Leadership — built around real industry briefs and analytics.",
  },
  {
    q: "Is SITASRM approved and affiliated?",
    a: "Yes. SITASRM Engineering & Research Institute is approved by AICTE (LOA 2025-26) and follows the affiliating university norms for its programs.",
  },
  {
    q: "What is the eligibility for the MBA program?",
    a: "A bachelor's degree in any discipline with at least 50% (General) or 45% (SC/ST). Admission is through CAT, MAT, CMAT, CUET-PG, State Entrance or Management Quota.",
  },
  {
    q: "Can working professionals and fresh graduates both apply?",
    a: "Yes. The MBA is designed for both fresh graduates and working professionals — counsellors help you choose the right specialization and scholarship based on your background and goals.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes — merit-based scholarships of up to 100% are available, along with education-loan assistance. Use the on-page scholarship calculator to get an instant estimate based on your marks.",
  },
  {
    q: "Does SITASRM provide placement support?",
    a: "Every student receives 100% placement assistance — career mapping, resume and portfolio building, mock interviews and 1:1 industry mentorship, backed by a growing hiring network.",
  },
  {
    q: "Where is the campus located?",
    a: "The campus is at Plot No. 14, Knowledge Park-III, Greater Noida, Uttar Pradesh 201306 — in the heart of the Delhi NCR education hub, well connected by metro and expressway.",
  },
  {
    q: "Is hostel accommodation available?",
    a: "Yes. Secure, modern residential facilities are available separately for girls and boys, along with sports, library, canteen and medical support on campus.",
  },
];

/* ============================================================
   FORM — select options
   ============================================================ */
export const courseOptions = [
  "MBA",
];

export const indianStates = [
  "Uttar Pradesh", "Delhi", "Haryana", "Rajasthan", "Uttarakhand", "Bihar",
  "Madhya Pradesh", "Jharkhand", "West Bengal", "Maharashtra",
  "Gujarat", "Other",
];

/* ============================================================
   NAV + FOOTER
   ============================================================ */
export const navLinks = [
  { label: "Why SITASRM", href: "#why" },
  { label: "Programs", href: "#programs" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Admissions", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const footerNav = [
  {
    title: "Specializations",
    links: [
      { label: "MBA · Marketing", href: "#programs" },
      { label: "MBA · Finance", href: "#programs" },
      { label: "MBA · Business Analytics", href: "#programs" },
      { label: "MBA · Human Resource", href: "#programs" },
      { label: "MBA · Strategy & Leadership", href: "#programs" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Apply 2026", href: "#apply" },
      { label: "Eligibility", href: "#eligibility" },
      { label: "Admission Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "Why SITASRM", href: "#why" },
      { label: "Programs", href: "#programs" },
      { label: "Student Success", href: "#success" },
      { label: "Apply Now", href: "#apply" },
      { label: "Contact", href: "#contact" },
    ],
  },
];
