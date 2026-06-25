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
  phones: ["+91 92-89-89-6157", "+91 92-17-67-6022", "+91 92-17-67-6046"],
  primaryPhone: "+919289896157",
  whatsapp: "919289896157",
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
  { value: 5, suffix: "", label: "Future-Ready Programs" },
  { value: 100, suffix: "%", label: "Max Merit Scholarship" },
  { value: 120, suffix: "+", label: "Hiring Network" }, // [VERIFY]
];

export const hero = {
  kicker: "MBA & B.Tech Admissions 2026 · Greater Noida",
  titleLead: "Master Technology and Leadership with our",
  titleAccent: "Integrated", // rendered in editorial serif italic
  titleTail: "MBA and B.Tech Programme",
  subtitle:
    "Industry-synced curriculum, AI-powered labs, global immersion and 100% placement assistance — engineered on a Knowledge Park-III campus in the heart of Delhi NCR.",
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
    tag: "AI Labs & Innovation Center",
    title: "Labs where machine learning isn't a chapter — it's the air.",
    body:
      "GPU-backed AI/ML labs, an IoT & electronics workbench and a dedicated R&D cell focused on artificial intelligence, automation and sustainability. Build, break and ship inside a true Centre of Excellence.",
    points: ["GPU compute for ML", "IoT & embedded workbench", "R&D cell: AI · Automation · Sustainability"],
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
    id: "mba",
    code: "MBA",
    degree: "Master of Business Administration",
    duration: "2 Years · Full-time",
    icon: "briefcase",
    accent: "flame",
    featured: true,
    tagline: "Lead teams, build ventures, decide with data.",
    blurb:
      "A management degree built for the AI economy — strategy and leadership fused with business analytics and real consulting briefs.",
    specializations: ["Marketing", "Finance", "Human Resource", "Business Analytics", "Strategy & Leadership"],
    careers: ["Business Analyst", "Product Manager", "Consultant", "Brand Manager", "Founder"],
    salary: "₹4.5 – 12 LPA", // [VERIFY]
  },
  {
    id: "cse",
    code: "B.Tech CSE",
    degree: "Computer Science & Engineering",
    duration: "4 Years · Full-time",
    icon: "code",
    accent: "royal",
    featured: true,
    tagline: "Engineer the software the world runs on.",
    blurb:
      "Deep computer-science foundations meet modern software engineering — data structures to cloud-native systems and full-stack delivery.",
    specializations: ["Software Development", "Cloud Computing", "Data Structures", "Full-Stack", "DevOps"],
    careers: ["Software Engineer", "Cloud Engineer", "Backend Developer", "SDE", "Architect"],
    salary: "₹4 – 14 LPA", // [VERIFY]
  },
  {
    id: "aiml",
    code: "B.Tech AI / ML",
    degree: "Computer Science & Engineering (AI & ML)",
    duration: "4 Years · Full-time",
    icon: "brain",
    accent: "gold",
    featured: false,
    tagline: "Teach machines to think — and to ship.",
    blurb:
      "Specialise in artificial intelligence, machine learning, automation and data science with hands-on GPU labs from year one.",
    specializations: ["Machine Learning", "Deep Learning", "Automation", "Data Science", "Computer Vision"],
    careers: ["ML Engineer", "Data Scientist", "AI Researcher", "MLOps Engineer"],
    salary: "₹5 – 18 LPA", // [VERIFY]
  },
  {
    id: "csit",
    code: "B.Tech CS & IT",
    degree: "Computer Science & Information Technology",
    duration: "4 Years · Full-time",
    icon: "shield",
    accent: "ice",
    featured: false,
    tagline: "Secure, connect and scale the digital world.",
    blurb:
      "Cybersecurity, networking, database systems and IT infrastructure for the engineers who keep the internet safe and fast.",
    specializations: ["Cybersecurity", "Networking", "Database Systems", "IT Infrastructure", "Cloud Security"],
    careers: ["Security Analyst", "Network Engineer", "DB Administrator", "DevSecOps"],
    salary: "₹4 – 13 LPA", // [VERIFY]
  },
  {
    id: "ece",
    code: "B.Tech ECE",
    degree: "Electronics & Communication Engineering",
    duration: "4 Years · Full-time",
    icon: "circuit",
    accent: "royal",
    featured: false,
    tagline: "From silicon to signal to system.",
    blurb:
      "Electronics, communication systems, embedded design and networking — the backbone of 5G, IoT and modern hardware.",
    specializations: ["Embedded Systems", "Communication", "VLSI", "IoT", "Signal Processing"],
    careers: ["Embedded Engineer", "VLSI Engineer", "IoT Developer", "RF Engineer"],
    salary: "₹3.5 – 11 LPA", // [VERIFY]
  },
];

/* ============================================================
   STUDENT SUCCESS — journey + testimonials [VERIFY profiles]
   ============================================================ */
export const journey = [
  { step: "Admission", icon: "clipboard", text: "Counselling, scholarship & seat — a guided start." },
  { step: "Foundations", icon: "book", text: "Core engineering & management, tools from day one." },
  { step: "Live Projects", icon: "code", text: "Industry briefs, hackathons and the innovation studio." },
  { step: "Internship", icon: "briefcase", text: "Real teams, real shipping, mentor-backed." },
  { step: "Placement", icon: "trending", text: "Interview prep, offers and your first big role." },
];

export const testimonials = [
  {
    name: "Aarav Mehta",
    program: "B.Tech CSE · 2025",
    role: "Software Engineer",
    company: "Accenture",
    package: "₹9.2 LPA",
    quote:
      "The labs felt like a startup floor. By final year I'd shipped three real projects — my interviews were just show-and-tell.",
  },
  {
    name: "Sneha Verma",
    program: "MBA · 2025",
    role: "Business Analyst",
    company: "Deloitte",
    package: "₹8.5 LPA",
    quote:
      "Live consulting briefs and analytics made the difference. I walked into placements already speaking the industry's language.",
  },
  {
    name: "Mohd. Faizan",
    program: "B.Tech AI/ML · 2025",
    role: "ML Engineer",
    company: "LTIMindtree",
    package: "₹11 LPA",
    quote:
      "GPU labs from second year meant I trained real models, not toy ones. The mentorship here is genuinely industry-grade.",
  },
];

/* (Placement Ecosystem section removed — page focused on admission conversions.) */

/* (Campus Life section removed — page focused on admission conversions.) */

/* (Scholarship section removed — page focused on admission conversions.) */

/* ============================================================
   ELIGIBILITY — MBA vs B.Tech comparison
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
  btech: {
    label: "B.Tech",
    duration: "4 Years",
    rows: [
      { k: "Qualification", v: "10+2 with PCM / Computer Science" },
      { k: "Minimum Marks", v: "45% · General  |  40% · SC/ST" },
      { k: "Entrance Routes", v: "JEE Main / CUET" },
      { k: "Other Routes", v: "State Entrance · Management Quota" },
      { k: "Ideal For", v: "12th pass / appearing students" },
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
    q: "What programs does SITASRM offer for 2026 admissions?",
    a: "SITASRM offers a 2-year MBA and four 4-year B.Tech programs — Computer Science & Engineering (CSE), CSE with AI & ML, Computer Science & Information Technology (CS&IT), and Electronics & Communication Engineering (ECE).",
  },
  {
    q: "Is SITASRM approved and affiliated?",
    a: "Yes. SITASRM Engineering & Research Institute is approved by AICTE (LOA 2025-26) and follows the affiliating university norms for its technical programs.",
  },
  {
    q: "What is the eligibility for B.Tech admission?",
    a: "Candidates need 10+2 with Physics, Chemistry & Mathematics (or Computer Science) — a minimum of 45% for General and 40% for SC/ST. Admission is via JEE Main, CUET, State Entrance or Management Quota.",
  },
  {
    q: "What is the eligibility for the MBA program?",
    a: "A bachelor's degree in any discipline with at least 50% (General) or 45% (SC/ST). Admission is through CAT, MAT, CMAT, CUET-PG, State Entrance or Management Quota.",
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
  "B.Tech — CSE",
  "B.Tech — AI & ML",
  "B.Tech — CS & IT",
  "B.Tech — ECE",
  "Not sure yet",
];

export const indianStates = [
  "Uttar Pradesh", "Delhi", "Haryana", "Rajasthan", "Uttarakhand", "Bihar",
  "Madhya Pradesh", "Punjab", "Jharkhand", "West Bengal", "Maharashtra",
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
    title: "Programs",
    links: [
      { label: "MBA", href: "#programs" },
      { label: "B.Tech CSE", href: "#programs" },
      { label: "B.Tech AI & ML", href: "#programs" },
      { label: "B.Tech CS & IT", href: "#programs" },
      { label: "B.Tech ECE", href: "#programs" },
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
