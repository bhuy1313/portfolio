"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

type Category = "all" | "web" | "iot";

type Screenshot = {
  src: string;
  title: string;
};

type FlagshipProject = {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  timeline: string;
  role: string;
  description: string;
  category: "web" | "iot";
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  screenshots: Screenshot[];
};

const flagshipProjects: FlagshipProject[] = [
  {
    id: "mini-jira",
    title: "Mini Jira — Enterprise Agile Project Management Platform",
    badge: "Flagship Full-Stack",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    timeline: "08/2026 – 10/2026",
    role: "Full-Stack Software Engineer (Personal Project)",
    description:
      "A production-grade Jira & Linear-inspired collaboration platform featuring multi-tenant workspaces, Scrum sprints, hierarchical sub-tasks, dynamic custom fields, and real-time burndown analytics.",
    category: "web",
    githubUrl: "https://github.com/bhuy1313/mini-jira",
    liveUrl: "https://mini-jira-neon.vercel.app",
    techStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM 7",
      "Better Auth",
      "Tailwind CSS v4",
      "Vitest",
      "Playwright",
      "Server-Sent Events (SSE)",
    ],
    keyHighlights: [
      "Engineered an O(1) Fractional Decimal Positioning algorithm for Kanban drag-and-drop (@dnd-kit), completely eliminating PostgreSQL table-locking batch re-indexes under concurrent updates.",
      "Implemented server-authoritative Role-Based Access Control (RBAC) via a zero-trust Actor Context Pattern and engineered a real-time event pipeline using Server-Sent Events (SSE) with replay buffers.",
      "Developed a custom zero-dependency AST-based Markdown tokenizer and renderer with multi-word @mention autocomplete, eliminating XSS vulnerabilities by strictly avoiding dangerouslySetInnerHTML.",
      "Designed a 60 FPS GPU-accelerated micro-interaction and animation system (Linear-grade cubic-bezier curves, card hover elevations, and spring dialogs) fully compliant with WCAG 2.2 AA accessibility.",
    ],
    metrics: [
      { label: "Automated Tests", value: "500 Vitest + 30+ Playwright" },
      { label: "Algorithm Complexity", value: "O(1) Kanban Drag & Drop" },
      { label: "Accessibility", value: "WCAG 2.2 AA Compliant" },
      { label: "TypeScript Safety", value: "0 Compile Errors" },
    ],
    screenshots: [
      { src: "/projects/mini-jira/02-kanban-board-light.png", title: "Interactive Kanban Board (Light)" },
      { src: "/projects/mini-jira/09-kanban-board-dark.png", title: "Kanban Board (Dark Mode)" },
      { src: "/projects/mini-jira/03-task-detail-drawer.png", title: "Task Detail Drawer & AST Markdown" },
      { src: "/projects/mini-jira/04-sprint-burndown-report.png", title: "Sprint Burndown Analytics" },
      { src: "/projects/mini-jira/05-command-palette.png", title: "Quick Command Palette (Cmd+K)" },
      { src: "/projects/mini-jira/06-workspace-analytics.png", title: "Workspace Analytics & Health" },
      { src: "/projects/mini-jira/07-timesheet-worklogs.png", title: "Timesheet & Worklogs Tracker" },
      { src: "/projects/mini-jira/08-project-settings-automation.png", title: "Project Settings & RBAC Rules" },
      { src: "/projects/mini-jira/01-auth-showcase.png", title: "Authentication & Workspace Switcher" },
    ],
  },
  {
    id: "ecommerce-web",
    title: "ECommerce.Web — Modern Full-Stack E-Commerce Platform",
    badge: "Enterprise .NET 10",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    timeline: "05/2026 – 08/2026",
    role: "Full-Stack Software Engineer (Personal Project)",
    description:
      "A production-ready e-commerce platform built with ASP.NET Core 10 MVC featuring customer storefronts, address books, multi-tier checkout, coupon engines, VNPay payment gateway, and an administrative control portal.",
    category: "web",
    githubUrl: "https://github.com/bhuy1313/ECommerce.Web",
    liveUrl: "https://ecommerce-demo-9phe.onrender.com",
    techStack: [
      "ASP.NET Core 10 MVC",
      "C#",
      "Entity Framework Core 10",
      "SQL Server / SQLite",
      "ASP.NET Core Identity",
      "VNPay Gateway (HMAC-SHA512)",
      "xUnit & Moq",
      "Docker",
      "Tailwind CSS",
    ],
    keyHighlights: [
      "Integrated the VNPay online payment gateway with cryptographic HMAC-SHA512 checksum validation, return URL verification, and idempotent IPN webhook callbacks to prevent duplicate payment processing.",
      "Clean Tiered Architecture: Designed a decoupled ASP.NET Core 10 MVC architecture separating Controllers, Domain Services (Cart, Order, Payment, Coupon, Shipping, Review), ViewModels, and Data Access.",
      "Implemented verified-purchase product reviews, configurable shipping carrier methods, automated VAT tax computation, and promotional coupon engine (% and fixed discounts with total usage caps).",
      "Hardened security: ASP.NET Core Identity, CSRF ValidateAntiForgeryToken across all mutating endpoints, brute-force account lockout (5 attempts / 5 mins), and production IP rate limiting.",
    ],
    metrics: [
      { label: "Automated Tests", value: "277 xUnit & Moq Tests" },
      { label: "Payment Security", value: "HMAC-SHA512 + Idempotent IPN" },
      { label: "Deployment", value: "Docker on Render" },
      { label: "Data Layer", value: "EF Core 10 Dual DB Support" },
    ],
    screenshots: [
      { src: "/projects/ecommerce/01-storefront-home.png", title: "Storefront Home & Featured Collections" },
      { src: "/projects/ecommerce/02-catalog-browsing.png", title: "Product Catalog & Filtering" },
      { src: "/projects/ecommerce/03-product-detail.png", title: "Product Detail & Verified Reviews" },
      { src: "/projects/ecommerce/04-shopping-cart.png", title: "Cart & Auto-Animate Micro-interactions" },
      { src: "/projects/ecommerce/05-checkout-flow.png", title: "Multi-tier Checkout & VNPay Redirect" },
      { src: "/projects/ecommerce/07-admin-dashboard.png", title: "Admin Portal & Revenue Analytics" },
      { src: "/projects/ecommerce/08-admin-products.png", title: "Inventory & Catalog Management" },
      { src: "/projects/ecommerce/09-admin-orders.png", title: "Order Lifecycle & Payment State Transitions" },
      { src: "/projects/ecommerce/06-dark-mode-showcase.png", title: "Dark Theme System" },
      { src: "/projects/ecommerce/10-mobile-responsive.png", title: "Mobile Responsive Layout" },
    ],
  },
];

type CompactProject = {
  title: string;
  badge: string;
  timeline: string;
  team: string;
  description: string;
  category: "iot" | "web";
  techStack: string[];
  keyPoints: string[];
};

const otherProjects: CompactProject[] = [
  {
    title: "Smart Power Control Box — IoT Embedded System",
    badge: "Hardware & IoT",
    timeline: "12/2025 – 01/2026",
    team: "Developer (Team of 4)",
    description:
      "An IoT-enabled electrical power control system that autonomously activates and regulates high-voltage power supply upon verifying digital QR-code transactions.",
    category: "iot",
    techStack: ["ESP32", "Embedded C/C++", "WiFi Protocols", "Custom PCB Design", "Power Relays", "TFT Display"],
    keyPoints: [
      "Engineered embedded firmware on ESP32 to parse transaction callbacks, compute active usage duration, and trigger automatic relay cutoffs.",
      "Designed and hand-assembled custom PCB schematic integrating power supplies, multi-channel relays, and status displays.",
    ],
  },
  {
    title: "Parking Lot Counter & Sensor Display System",
    badge: "Embedded / IoT",
    timeline: "Academic Project",
    team: "Personal Project",
    description:
      "Automated vehicle entry/exit monitoring system utilizing sensor logic and real-time occupancy counting.",
    category: "iot",
    techStack: ["Microcontroller Logic", "Sensors & Actuators", "7-Segment / LED Displays", "C/C++"],
    keyPoints: [
      "Implemented push button and sensor debounce logic to reliably detect directional vehicle transit.",
      "Provided real-time full/empty boundary notifications and dynamic LED occupancy feedback.",
    ],
  },
  {
    title: "SCZR — 2D Platformer Game",
    badge: "Game Engineering",
    timeline: "Academic Project",
    team: "Team size: 2",
    description:
      "2D action-platformer game emphasizing tight character movement physics and extensible component architectures.",
    category: "iot",
    techStack: ["Unity", "C#", "Physics 2D", "Component-Based Architecture"],
    keyPoints: [
      "Engineered custom player controllers, collision mechanics, and state machines for smooth responsiveness.",
      "Structured reusable game loop behaviors reducing script interdependencies.",
    ],
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Full-Stack Web (.NET & Next.js)" },
  { key: "iot", label: "IoT & Embedded Systems" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("all");
  const [activeScreenshots, setActiveScreenshots] = useState<Record<string, number>>({
    "mini-jira": 0,
    "ecommerce-web": 0,
  });
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const filteredFlagships =
    filter === "all" || filter === "web" ? flagshipProjects : [];

  const filteredOthers =
    filter === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === filter);

  function selectScreenshot(projectId: string, index: number) {
    setActiveScreenshots((prev) => ({ ...prev, [projectId]: index }));
  }

  function nextScreenshot(project: FlagshipProject) {
    const current = activeScreenshots[project.id] ?? 0;
    const next = (current + 1) % project.screenshots.length;
    selectScreenshot(project.id, next);
  }

  function prevScreenshot(project: FlagshipProject) {
    const current = activeScreenshots[project.id] ?? 0;
    const prev = (current - 1 + project.screenshots.length) % project.screenshots.length;
    selectScreenshot(project.id, prev);
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-slate-200/80 bg-slate-100/60 py-24 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <i aria-hidden="true" className="fas fa-folder-open text-[10px]" />
              Production Showcase
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              Featured Engineering Projects
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              End-to-end applications designed, architected, and built with production constraints.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  filter === f.key
                    ? "bg-slate-900 text-white shadow-md dark:bg-emerald-500 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Flagship Projects Section */}
        {filteredFlagships.length > 0 && (
          <div className="space-y-16">
            {filteredFlagships.map((project, index) => {
              const currentImgIdx = activeScreenshots[project.id] ?? 0;
              const currentScreenshot = project.screenshots[currentImgIdx];

              return (
                <Reveal key={project.id} delay={index * 100}>
                  <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left side: Interactive Screenshot Viewer */}
                      <div className="p-6 lg:col-span-7 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800">
                        <div>
                          {/* Main display image with lightbox trigger */}
                          <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 dark:border-slate-800">
                            <Image
                              src={currentScreenshot.src}
                              alt={currentScreenshot.title}
                              fill
                              unoptimized
                              className="object-cover transition-transform duration-500 group-hover:scale-102 cursor-zoom-in"
                              onClick={() => setModalImage(currentScreenshot)}
                            />

                            {/* Overlay navigation arrows */}
                            <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 transition-opacity group-hover:opacity-100">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevScreenshot(project);
                                }}
                                aria-label="Previous screenshot"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110"
                              >
                                <i aria-hidden="true" className="fas fa-chevron-left text-xs" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextScreenshot(project);
                                }}
                                aria-label="Next screenshot"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-md backdrop-blur-sm transition-transform hover:scale-110"
                              >
                                <i aria-hidden="true" className="fas fa-chevron-right text-xs" />
                              </button>
                            </div>

                            {/* Caption badge */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-slate-900/85 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                              <span className="truncate font-medium">
                                <i aria-hidden="true" className="fas fa-image mr-1.5 text-emerald-400" />
                                {currentScreenshot.title}
                              </span>
                              <span className="font-mono text-[11px] text-slate-400">
                                {currentImgIdx + 1} / {project.screenshots.length}
                              </span>
                            </div>
                          </div>

                          {/* Thumbnail rail */}
                          <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                            {project.screenshots.map((s, idx) => (
                              <button
                                key={s.src}
                                onClick={() => selectScreenshot(project.id, idx)}
                                aria-label={`Select screenshot ${idx + 1}`}
                                className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                                  idx === currentImgIdx
                                    ? "border-emerald-500 ring-2 ring-emerald-500/30 scale-105"
                                    : "border-slate-200 opacity-60 hover:opacity-100 dark:border-slate-700"
                                }`}
                              >
                                <Image
                                  src={s.src}
                                  alt={s.title}
                                  fill
                                  unoptimized
                                  className="object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Project Key Metrics Row */}
                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/50">
                              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                                {m.label}
                              </div>
                              <div className="mt-0.5 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right side: Project Details & Engineering Depth */}
                      <div className="p-6 lg:col-span-5 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.badgeColor}`}
                            >
                              {project.badge}
                            </span>
                            <span className="font-mono text-xs text-slate-500">
                              {project.timeline}
                            </span>
                          </div>

                          <h4 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {project.title}
                          </h4>

                          <p className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            {project.role}
                          </p>

                          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {project.description}
                          </p>

                          {/* Key Highlights list */}
                          <div className="mt-5 space-y-2.5">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                              Key Technical Accomplishments:
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                              {project.keyHighlights.map((hl, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-check-circle mt-0.5 text-emerald-500 flex-shrink-0 text-xs"
                                  />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack pills */}
                          <div className="mt-6">
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-slate-200 bg-slate-100/80 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* External Actions Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-600 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
                            >
                              <i aria-hidden="true" className="fas fa-arrow-up-right-from-square" />
                              Live Demo
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 transition-all hover:border-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-white"
                          >
                            <i aria-hidden="true" className="fab fa-github" />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Compact Projects (IoT & Systems) */}
        {filteredOthers.length > 0 && (
          <div className="mt-16">
            <Reveal className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Embedded, Hardware &amp; Systems Engineering
              </h4>
              <p className="text-xs text-slate-500">
                Custom firmware, hardware control, and multi-disciplinary software projects.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredOthers.map((project, idx) => (
                <Reveal key={project.title} delay={idx * 80}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-bold uppercase tracking-wider text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {project.badge}
                        </span>
                        <span className="font-mono text-slate-400">{project.timeline}</span>
                      </div>

                      <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h5>

                      <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {project.team}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>

                      <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {project.keyPoints.map((kp, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                      {project.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* GitHub link banner */}
        <Reveal className="mt-16 text-center">
          <a
            href="https://github.com/bhuy1313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-900 hover:scale-105 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-emerald-400"
          >
            <i aria-hidden="true" className="fab fa-github text-base" />
            Explore Repositories on GitHub (bhuy1313)
          </a>
        </Reveal>
      </div>

      {/* Lightbox Modal for Full-Resolution Screenshot */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 text-white">
              <span className="text-sm font-semibold truncate">{modalImage.title}</span>
              <button
                onClick={() => setModalImage(null)}
                aria-label="Close modal"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-800 text-slate-300 hover:text-white"
              >
                <i aria-hidden="true" className="fas fa-times" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full max-h-[82vh] overflow-hidden rounded-xl bg-slate-950">
              <Image
                src={modalImage.src}
                alt={modalImage.title}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
