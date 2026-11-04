import Reveal from "./Reveal";

type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  badgeColor: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "web-frameworks",
    title: "Web & API Frameworks",
    icon: "fa-cubes",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Modern SSR/SSG frameworks, enterprise MVC, and vertical-slice RESTful architectures.",
    skills: [
      { name: "Next.js 16 (App Router)", highlight: true },
      { name: "React 19", highlight: true },
      { name: "ASP.NET Core 10 MVC", highlight: true },
      { name: "Node.js / Express" },
      { name: "RESTful APIs" },
      { name: "Entity Framework Core 10", highlight: true },
      { name: "Prisma ORM 7", highlight: true },
      { name: "Tailwind CSS v4" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "fa-code",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    description: "Strong foundation in typed, object-oriented, and systems programming languages.",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "C# (.NET 10)", highlight: true },
      { name: "C / C++" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "fa-database",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    description: "Relational schema modeling, migration pipelines, and NoSQL document storage.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "SQL Server (LocalDB)", highlight: true },
      { name: "SQLite" },
      { name: "MongoDB" },
      { name: "AWS S3 Object Storage" },
    ],
  },
  {
    id: "testing-devops",
    title: "Testing, DevOps & Security",
    icon: "fa-vial-circle-check",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description: "Comprehensive test pyramids (770+ tests), containerization, and secure auth.",
    skills: [
      { name: "Vitest (500 tests)", highlight: true },
      { name: "Playwright E2E", highlight: true },
      { name: "xUnit & Moq (277 tests)", highlight: true },
      { name: "Docker Containerization", highlight: true },
      { name: "Git / GitHub Actions" },
      { name: "axe-core (WCAG 2.2 AA)" },
      { name: "Better Auth & ASP.NET Identity" },
      { name: "VNPay HMAC-SHA512" },
      { name: "Server-Sent Events (SSE)" },
      { name: "Postman" },
    ],
  },
  {
    id: "embedded-iot",
    title: "Embedded & IoT Engineering",
    icon: "fa-microchip",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    description: "Microcontroller programming, hardware-firmware integration, and PCB prototyping.",
    skills: [
      { name: "ESP32", highlight: true },
      { name: "Raspberry Pi" },
      { name: "Sensor & Actuator Control", highlight: true },
      { name: "Custom PCB Design" },
      { name: "Relays & Power Electronics" },
      { name: "Embedded C/C++" },
    ],
  },
  {
    id: "practices",
    title: "Architecture & Practices",
    icon: "fa-diagram-project",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    description: "Robust software engineering paradigms and collaborative workflow standards.",
    skills: [
      { name: "Clean Tiered Architecture", highlight: true },
      { name: "Vertical Slice Architecture", highlight: true },
      { name: "Zero-Trust RBAC (Actor Pattern)", highlight: true },
      { name: "Test-Driven Development (TDD)", highlight: true },
      { name: "O(1) Fractional Drag & Drop" },
      { name: "Agile / Scrum" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <i aria-hidden="true" className="fas fa-layer-group text-[10px]" />
            Technical Competencies
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Skills &amp; Technology Stack
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Practical, production-tested tools and frameworks used across enterprise web applications,
            security implementations, automated testing suites, and hardware systems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, index) => (
            <Reveal key={group.id} delay={index * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700">
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg transition-transform group-hover:scale-110 ${group.badgeColor}`}
                  >
                    <i className={`fas ${group.icon}`} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="mb-1.5 text-lg font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h4>

                <p className="mb-5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {group.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                        skill.highlight
                          ? "bg-slate-900 font-semibold text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm"
                          : "border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
