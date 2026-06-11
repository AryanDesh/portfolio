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
  description: string;
};

/** A single skill chip for the "What I use" marquee. `icon` maps to a logo. */
export type Tech = {
  name: string;
  icon?: string;
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
    "Software engineer who likes the part of the stack where things get messy. Currently at Maxim AI, where I build infrastructure for LLM observability, hadnling multiple DBs ClickHouse, Postgres (pgvector), and MySQL, designing async data-generation pipelines on GCP Pub/Sub with SSE streaming and WebSocket progress and architecting end-to-end simulation systems.",
    "I spent four years at VIT writing more side projects than was probably advisable a multi-tenant SaaS builder, an HLS music streaming platform, a WebRTC chat app, etc.",
    "I care about systems that scale gracefully, code that the next person can read, and shipping things that real users touch",
  ],
};

// TODO: replace the placeholder GitHub / LinkedIn URLs with your real ones.
export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/AryanDesh",
    handle: "@AryanDesh",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryandeshmukh-profile/",
    handle: "in/aryandeshmukh",
  },
  {
    label: "Email",
    href: "mailto:adeshmukh843@gmail.com",
    handle: "adeshmukh843@gmail.com",
  },
];

// Flat stack for the "What I use" marquee. Ordered so the few that carry a
// brand logo are spread across the three rows; the rest render as text chips.
export const techStack: Tech[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "NestJS", icon: "nestjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Express.js", icon: "express" },
  { name: "REST APIs", icon: "restapi" },
  { name: "MySQL", icon: "mysql" },
  { name: "ClickHouse", icon: "clickhouse" },
  { name: "CI/CD", icon: "cicd" },
  { name: "Cloud Computing", icon: "cloud" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Redux", icon: "redux" },
  { name: "SQL", icon: "sql" },
  { name: "Microservices", icon: "microservices" },
  { name: "Firestore", icon: "firestore" },
  { name: "Prisma", icon: "prisma" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "GitHub Actions", icon: "githubactions" },
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
      "Designed and implemented the end-to-end simulation architecture, from the SDK to Go worker microservices.",
      "Developed multiple AI demo agents with integrated observability — code generation, transcript scribing, document parsing, and NL2SQL systems.",
      "Re-architected log-repository state management handling 17+ query state variables, replacing a Redux + localStorage + URL multi-source system with a single URL-driven model — eliminating race conditions and enabling shareable views.",
      "Contributed to platform UX including onboarding flows, samples integration, and dataset creation.",
    ],
    stack: [
      "Node.js",
      "Go",
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
    name: "Mnemo",
    tagline: "AI Agents Platform",
    period: "2026",
    image: "/projects/mnemo.svg",
    blurb:
      "An AI agents platform where agents are persistent entities with memory, personality, and tools — reachable from chat apps and the web.",
    highlights: [
      "Contributed in building an AI agent platform where agents are persistent entities — each with memory, personality, model config, tools, and budget controls.",
      "Integrated across Discord, WhatsApp, Slack, and web with shared memory and channel-isolated threads.",
      "Built with Bifrost for governance, observability, and provider routing.",
    ],
    stack: ["Go", "Next.js", "SQL", "Bifrost"],
  },
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
    href: "https://github.com/AryanDesh/WebCraft-nextapp",
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
    href: "https://github.com/AryanDesh/video-chat-solid",
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
    href: "https://github.com/AryanDesh/Tone-Deaf",
  },
  {
    name: "Ink & Insight",
    tagline: "Real-Time Collaborative Blogging Platform",
    period: "2024 — 2025",
    image: "/projects/ink-insight.svg",
    blurb:
      "A collaborative writing platform where authors co-edit rich block-based posts in real time.",
    highlights: [
      "Built an Express + TypeScript backend on Prisma/PostgreSQL with JWT auth, bcrypt-hashed credentials, Zod validation, and per-route rate limiting.",
      "Implemented live co-editing with Socket.IO rooms syncing an Editor.js block editor (headers, code, tables, embeds) across collaborators.",
      "Used Prisma Accelerate for connection pooling and query caching, with scheduled background jobs via node-schedule.",
      "Built the React + Vite frontend with Recoil state management and sanitized Markdown rendering.",
    ],
    stack: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Socket.IO", "React"],
    href: "https://github.com/AryanDesh/Ink-Insight",
  },
  {
    name: "Psyche-Care",
    tagline: "AI Therapy Companion",
    period: "2023",
    image: "/projects/psyche-care.svg",
    blurb:
      "An AI therapist web app offering guided, private therapy-style chat sessions.",
    highlights: [
      "Built on Next.js 13 with the App Router, with a dedicated start-session flow for therapy conversations.",
      "Implemented authentication with NextAuth and bcrypt-hashed credentials backed by user models in MongoDB.",
      "Persisted users and session data with Mongoose against a MongoDB sessions database.",
      "Styled a clean, calming interface with Tailwind CSS.",
    ],
    stack: ["Next.js", "NextAuth", "MongoDB", "Mongoose", "Tailwind CSS"],
    href: "https://github.com/AryanDesh/psyche-care",
  }
];

export const education: Education[] = [
  {
    school: "Vishwakarma Institute of Technology",
    degree: "Bachelor of Technology",
    period: "2021 — 2025",
    detail: "CGPA 8.55",
    description:
      "Four years of Engineering, a healthy obsession with side projects, and an unhealthy number of half-finished repos on GitHub.",
  },
];
