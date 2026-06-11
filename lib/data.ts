/**
 * Single source of truth for all portfolio content.
 *
 * Edit the data in this file to update the whole site — every page reads
 * from here. No need to touch the page components for content changes.
 *
 * TODO: update the GitHub / LinkedIn URLs below with your real profile links.
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  tagline: string;
  period: string;
  /** Card preview image, served from /public (placeholder SVGs for now). */
  image: string;
  blurb: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const profile = {
  name: "Aryan Deshmukh",
  role: "Software Development Engineer",
  tagline:
    "I build scalable backend systems and developer tooling — from LLM observability pipelines to real-time, data-heavy platforms.",
  location: "Bengaluru, India",
  email: "adeshmukh843@gmail.com",
  phone: "+91 9309520482",
  available: true,
  availabilityLabel: "Open to opportunities & freelance work",
  // The hero sentence is split so the first clause can render in the accent color.
  heroIntro: {
    lead: "I build ",
    highlight: "production-grade systems and developer tooling,",
    rest: " engineered for real-world scale.",
  },
  summary: [
    "I'm a Software Development Engineer at Maxim AI, where I build scalable backend systems for LLM observability — parsing SQL across ClickHouse, PostgreSQL and MySQL, streaming synthetic-data pipelines, and designing distributed simulation architectures. I care about clean architecture, performance under real production constraints, and tools that make complex systems understandable.",
    "Previously I built NestJS property-management backends deployed for government use. I enjoy working across the stack — from Redis-backed real-time systems to large React state architectures — and I'm happiest turning a gnarly, ambiguous problem into something simple and reliable.",
  ],
};

// TODO: replace the placeholder GitHub / LinkedIn URLs with your real ones.
export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/aryandeshmukh",
    handle: "@aryandeshmukh",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aryan-deshmukh",
    handle: "in/aryan-deshmukh",
  },
  {
    label: "Email",
    href: "mailto:adeshmukh843@gmail.com",
    handle: "adeshmukh843@gmail.com",
  },
];

export const stats: Stat[] = [
  { value: "Millions", label: "LLM trace logs parsed" },
  { value: "3", label: "Production databases orchestrated" },
  { value: "17+", label: "Query state variables unified" },
  { value: "8.55", label: "CGPA" },
];

export const skills: Skill[] = [
  { category: "Languages", items: ["TypeScript", "Python", "SQL"] },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "ClickHouse",
      "Firestore",
      "Redis",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Cloud Computing"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Maxim AI",
    location: "Bengaluru, Karnataka",
    period: "Jul 2025 — Present",
    current: true,
    summary:
      "Building scalable backend systems and AI tooling for an LLM observability and evaluation platform.",
    highlights: [
      "Built a highly scalable system that parses and manipulates SQL across three production databases — ClickHouse (millions of LLM trace logs), PostgreSQL with pgvector (semantic clustering & embeddings), and MySQL (evaluation metrics) — filtering across millions of logs under tight memory constraints on a Node.js backend.",
      "Designed an asynchronous synthetic-data generation pipeline integrating the frontend, GCP Pub/Sub and a streaming service; LLM-generated rows stream via SSE and persist incrementally to MySQL through background workers to prevent data loss, with real-time progress over WebSockets, job polling via RTK Query, and resilient orchestration.",
      "Designed and implemented the end-to-end simulation architecture, from SDK experiment definitions to distributed execution pipelines.",
      "Developed multiple AI demo agents with integrated observability — code generation, transcript scribing, document parsing, and NL2SQL systems.",
      "Re-architected log-repository state management handling 17+ query state variables, replacing a Redux + localStorage + URL multi-source system with a single URL-driven model — eliminating race conditions and enabling shareable views.",
      "Contributed to platform UX including onboarding flows, samples integration, and dataset creation.",
    ],
    stack: [
      "Node.js",
      "ClickHouse",
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "GCP Pub/Sub",
      "WebSockets",
      "RTK Query",
      "SSE",
    ],
  },
  {
    role: "Junior Backend Engineer",
    company: "Onpoint Software Services",
    location: "Remote, India",
    period: "Feb 2025 — Jul 2025",
    summary:
      "Built backend services for a Smart Property Management System deployed for district administration.",
    highlights: [
      "Developed backend services using NestJS for a Smart Property Management System (SPMS) deployed for the Shirol District administration.",
      "Improved database performance using pagination and indexing strategies on PostgreSQL EDB, managing 10,000+ property records.",
      "Implemented logging and monitoring pipelines integrated with Grafana.",
      "Created standardized API documentation using Swagger and OpenAPI.",
    ],
    stack: ["NestJS", "PostgreSQL EDB", "Grafana", "Swagger", "OpenAPI"],
  },
];

export const projects: Project[] = [
  {
    name: "Web-Craft",
    tagline: "Multi-Tenant SaaS Website Builder",
    period: "2024",
    image: "/projects/web-craft.svg",
    blurb:
      "A multi-tenant SaaS platform that lets users build and launch sites from customizable templates.",
    highlights: [
      "Built a multi-tenant SaaS platform on Next.js with PostgreSQL as the primary database.",
      "Implemented role-based access control (RBAC) and Clerk OAuth for secure authentication.",
      "Integrated Razorpay APIs as the payment gateway for smooth subscription billing.",
      "Designed customizable templates and drag-and-drop UI components for dynamic product creation.",
    ],
    stack: ["Next.js", "PostgreSQL", "Razorpay", "Clerk"],
  },
  {
    name: "RT-Chat",
    tagline: "Real-Time Chat Platform",
    period: "2024",
    image: "/projects/rt-chat.svg",
    blurb:
      "A peer-to-peer real-time chat platform with presence tracking and reliable message delivery.",
    highlights: [
      "Built real-time chat using WebRTC peer-to-peer communication with a Node.js signaling server to establish connections between clients.",
      "Implemented Redis-backed presence tracking and message broadcasting to manage concurrent users across chat rooms.",
      "Designed backend APIs for session management, authentication, and chat-room coordination.",
      "Added automated tests for reliable connection handling and message delivery across multiple peers.",
    ],
    stack: ["WebRTC", "Node.js", "Redis"],
  },
  {
    name: "Tone-Deaf",
    tagline: "Music Streaming Platform",
    period: "2025",
    image: "/projects/tone-deaf.svg",
    blurb:
      "An HLS-based audio streaming service with personalized playlists and shared listening rooms.",
    highlights: [
      "Built an HLS-based audio streaming service with personalized playlists and real-time music rooms for shared listening.",
      "Integrated WebSockets for live user interactions, enabling seamless group sessions and dynamic music experiences.",
      "Designed a scalable architecture by introducing Redis caching for improved performance.",
      "Created unit tests with Vitest to ensure stability and reliability.",
    ],
    stack: ["Node.js", "WebSockets", "Redis", "HLS"],
  },
  {
    name: "Quanta",
    tagline: "Real-Time Analytics Engine",
    period: "2023",
    image: "/projects/quanta.svg",
    blurb:
      "A real-time analytics dashboard that streams millions of events with sub-second query latency.",
    highlights: [
      "Built a streaming ingestion pipeline handling millions of events with ClickHouse for sub-second aggregations.",
      "Streamed live metrics to the browser over WebSockets with backpressure-aware batching.",
      "Designed a query layer with materialized rollups and Redis caching for instant dashboard loads.",
    ],
    stack: ["Next.js", "ClickHouse", "WebSockets", "Redis"],
  },
  {
    name: "PaperTrail",
    tagline: "Document Intelligence Pipeline",
    period: "2022",
    image: "/projects/papertrail.svg",
    blurb:
      "An OCR + LLM pipeline that turns messy documents into structured, searchable data.",
    highlights: [
      "Built an asynchronous OCR and parsing pipeline with FastAPI workers behind a queue for high-throughput ingestion.",
      "Generated vector embeddings stored in PostgreSQL/pgvector to power semantic search across documents.",
      "Exposed a typed REST API with auto-generated OpenAPI docs for downstream consumers.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector"],
  },
  {
    name: "Loophole",
    tagline: "Secure Localhost Tunneling",
    period: "2021",
    image: "/projects/loophole.svg",
    blurb:
      "A self-hosted tunneling service that exposes local servers over secure public URLs.",
    highlights: [
      "Built a reverse-tunnel server that multiplexes many local services over a single persistent WebSocket connection.",
      "Issued on-demand subdomains with automatic TLS termination at the edge.",
      "Added request inspection and replay to make debugging webhooks locally painless.",
    ],
    stack: ["Node.js", "WebSockets", "TLS", "Docker"],
  },
];

export const education: Education[] = [
  {
    school: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Technology",
    period: "2021 — 2025",
    detail: "CGPA: 8.55",
  },
];
