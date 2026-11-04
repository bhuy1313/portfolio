import Reveal from "./Reveal";

export default function About() {
  const metrics = [
    {
      value: "3.17",
      label: "Software Engineering GPA",
      sub: "Van Lang University (2022 - 2026)",
      color: "text-emerald-500",
    },
    {
      value: "770+",
      label: "Automated Tests Written",
      sub: "500 Vitest/Playwright + 277 xUnit/Moq",
      color: "text-blue-500",
    },
    {
      value: "2",
      label: "Flagship Full-Stack Platforms",
      sub: "Mini Jira & ECommerce.Web (.NET 10)",
      color: "text-purple-500",
    },
    {
      value: "O(1)",
      label: "Algorithm Optimization",
      sub: "Fractional Kanban Positioning (@dnd-kit)",
      color: "text-amber-500",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-slate-200/80 bg-white py-24 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                About Me
              </h2>
              <h3 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
                Engineering High-Performance Web &amp; Distributed Systems
              </h3>
              
              <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  I am a <strong className="text-slate-900 dark:text-white">Software Engineering graduate</strong> from{" "}
                  <strong>Van Lang University (GPA 3.17)</strong> with hands-on expertise building production-ready,
                  full-stack web platforms and reliable backend architectures.
                </p>
                <p>
                  My engineering philosophy centers around <strong className="text-slate-900 dark:text-white">Clean Architecture</strong>,{" "}
                  <strong className="text-slate-900 dark:text-white">zero-trust security</strong>, and{" "}
                  <strong className="text-slate-900 dark:text-white">rigorous Test-Driven Development (TDD)</strong>.
                  Whether structuring enterprise <span className="font-semibold text-emerald-600 dark:text-emerald-400">ASP.NET Core 10 MVC</span> systems
                  with cryptographic payment gateways (VNPay HMAC-SHA512), or designing high-speed real-time collaboration platforms
                  using <span className="font-semibold text-emerald-600 dark:text-emerald-400">Next.js 16 (App Router)</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">React 19</span>,
                  and <span className="font-semibold text-emerald-600 dark:text-emerald-400">Prisma ORM 7</span>, I focus on scalable, maintainable solutions.
                </p>
                <p>
                  Beyond web applications, my background spans embedded systems and IoT engineering, having designed custom PCBs and
                  firmware for <strong className="text-slate-900 dark:text-white">ESP32</strong> hardware controllers with QR-based transaction validation.
                </p>
              </div>

              {/* Education & Core Focus quick list */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <i aria-hidden="true" className="fas fa-graduation-cap" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Van Lang University</div>
                    <div className="text-xs text-slate-500">Major: Software Engineering (2022 - 2026)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <i aria-hidden="true" className="fas fa-shield-halved" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Security &amp; Testing</div>
                    <div className="text-xs text-slate-500">RBAC, HMAC, CSRF &amp; 770+ Automated Tests</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right">
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700 ${
                      idx === 1 ? "sm:translate-y-4" : idx === 2 ? "sm:-translate-y-4" : ""
                    }`}
                  >
                    <div className={`mb-2 font-mono text-3xl font-extrabold sm:text-4xl ${item.color}`}>
                      {item.value}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.label}
                    </div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
