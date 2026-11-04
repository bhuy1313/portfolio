import Reveal from "./Reveal";

type TimelineItem = {
  type: "project" | "education" | "cert";
  role: string;
  organization: string;
  period: string;
  badge: string;
  badgeClass: string;
  dotClass: string;
  align: "left" | "right";
  description: string;
  highlights: string[];
};

const timelineData: TimelineItem[] = [
  {
    type: "project",
    role: "Full-Stack Software Engineer — Mini Jira",
    organization: "Enterprise Agile Platform (Personal Project)",
    period: "08/2026 – 10/2026",
    badge: "Next.js 16 & React 19",
    badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    dotClass: "bg-blue-500 ring-blue-500/30",
    align: "left",
    description:
      "Designed and developed a production-grade Jira & Linear-style collaboration platform featuring multi-tenant workspaces, Scrum sprints, dynamic custom fields, and real-time burndown analytics.",
    highlights: [
      "Engineered O(1) Fractional Decimal Positioning for Kanban drag-and-drop, avoiding DB re-indexing locks.",
      "Implemented zero-trust Actor Context RBAC and Server-Sent Events (SSE) with replay buffers.",
      "Authored 500 Vitest unit/integration tests and 30+ Playwright E2E suites with 0 TypeScript errors.",
    ],
  },
  {
    type: "project",
    role: "Full-Stack Software Engineer — ECommerce.Web",
    organization: "Production .NET Platform (Personal Project)",
    period: "05/2026 – 08/2026",
    badge: "ASP.NET Core 10 MVC",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    dotClass: "bg-emerald-500 ring-emerald-500/30",
    align: "right",
    description:
      "Architected a production-ready e-commerce platform (.NET 10 MVC) featuring customer storefronts, multi-tier checkout, coupon engines, and an administrative management portal.",
    highlights: [
      "Integrated VNPay payment gateway with HMAC-SHA512 checksum validation and idempotent IPN callbacks.",
      "Engineered Clean Tiered Architecture separating Controllers, Domain Services, ViewModels, and EF Core 10 data access.",
      "Established 277 unit & integration tests (xUnit, Moq) with Docker container deployment on Render.",
    ],
  },
  {
    type: "project",
    role: "Embedded Systems Developer — Smart Power Control Box",
    organization: "IoT Engineering Team Project (Team of 4)",
    period: "12/2025 – 01/2026",
    badge: "ESP32 & PCB Design",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    dotClass: "bg-purple-500 ring-purple-500/30",
    align: "left",
    description:
      "Developed an IoT-enabled electrical supply control unit activating power based on QR-code payment confirmation.",
    highlights: [
      "Programmed embedded firmware on ESP32 to validate transaction data and calculate automated power timers.",
      "Designed and assembled custom PCB, integrating relay modules, TFT display, and safety peripheral circuitry.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Science in Software Engineering",
    organization: "Van Lang University",
    period: "2022 – 2026",
    badge: "GPA 3.17 / 4.0",
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    dotClass: "bg-amber-500 ring-amber-500/30",
    align: "right",
    description:
      "Comprehensive 4-year curriculum covering computer science fundamentals, advanced software engineering, distributed systems, and modern web application development.",
    highlights: [
      "Core courses: Data Structures & Algorithms, Software Architecture, Database Systems, Computer Networks, Operating Systems, OOP.",
      "Graduated with GPA 3.17 with extensive portfolio of hands-on full-stack and systems projects.",
    ],
  },
  {
    type: "cert",
    role: "RapidMiner Certificate in Data Analysis",
    organization: "RapidMiner Academy",
    period: "2023 – 2024",
    badge: "Professional Certification",
    badgeClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    dotClass: "bg-cyan-500 ring-cyan-500/30",
    align: "left",
    description:
      "Practical coursework and validation on predictive data modeling, statistical analysis, and machine learning pipelines.",
    highlights: [
      "Trained on data preprocessing, feature engineering, classification models, and algorithmic decision trees.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 text-center">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <i aria-hidden="true" className="fas fa-route text-[10px]" />
            Career &amp; Education
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Experience &amp; Milestones
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Key software projects, academic milestones, and engineering certifications.
          </p>
        </Reveal>

        <div className="relative ml-4 border-l-2 border-slate-200 dark:border-slate-800 md:ml-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:-translate-x-1/2 md:before:bg-slate-200 dark:md:before:bg-slate-800 md:border-l-0">
          {timelineData.map((item, index) => (
            <Reveal key={item.role + index} delay={index * 60}>
              <div
                className={`relative mb-12 flex flex-col md:flex-row md:items-center ${
                  item.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline center node */}
                <div
                  className={`absolute -left-[23px] top-6 z-10 h-5 w-5 rounded-full border-4 border-white dark:border-[#090d16] md:left-1/2 md:-ml-2.5 ${item.dotClass} ring-4`}
                />

                {/* Left/Right content card */}
                <div className="pl-6 md:w-1/2 md:pl-0">
                  <div
                    className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 ${
                      item.align === "left"
                        ? "md:mr-8 md:text-left"
                        : "md:ml-8 md:text-left"
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${item.badgeClass}`}
                      >
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                      {item.role}
                    </h4>

                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                      {item.organization}
                    </div>

                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>

                    {item.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Date stamp desktop side */}
                <div
                  className={`hidden w-1/2 md:block ${
                    item.align === "left" ? "pl-8 text-left" : "pr-8 text-right"
                  }`}
                >
                  <div className="inline-block rounded-xl border border-slate-200/60 bg-slate-100/60 px-4 py-2 font-mono text-xs font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300">
                    <i aria-hidden="true" className="fas fa-calendar-alt mr-1.5 text-emerald-500" />
                    {item.period}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
