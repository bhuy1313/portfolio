import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal variant="left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Software Engineer / Full-Stack Roles
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Bui Le Duc Huy
              <br />
              <span className="text-gradient">Software Engineer</span>
              <br />
              <span className="text-slate-700 dark:text-slate-300 font-semibold text-3xl sm:text-4xl lg:text-5xl">
                &amp; Full-Stack Web Developer.
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Software Engineering graduate with hands-on experience in full-stack web development,
              RESTful APIs, and secure authentication/authorization architectures. Proficient in{" "}
              <strong className="text-slate-900 dark:text-white">TypeScript, C#, Next.js 16 (App Router), React 19, ASP.NET Core 10</strong>,
              and modern database systems. Passionate about engineering high-concurrency systems,
              test-driven development, and containerized deployments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:scale-105 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
              >
                Explore Projects
                <i aria-hidden="true" className="fas fa-arrow-down text-xs" />
              </a>
              <a
                href="/BUILEDUCHUY_CV.pdf"
                download="BUILEDUCHUY_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
              >
                Download CV (PDF)
                <i aria-hidden="true" className="fas fa-file-pdf text-emerald-500" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/bhuy1313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <i aria-hidden="true" className="fab fa-github text-xl" />
                <span className="font-mono text-xs">github.com/bhuy1313</span>
              </a>
              <a
                href="mailto:bhuy1212@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                aria-label="Send Email"
              >
                <i aria-hidden="true" className="fas fa-envelope text-lg text-emerald-500" />
                <span className="font-mono text-xs">bhuy1212@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <i aria-hidden="true" className="fas fa-location-dot text-slate-400" />
                <span className="text-xs">Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Code / Architecture Card mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <Reveal variant="right" className="w-full max-w-lg">
            <div className="relative">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-70" />

              <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 font-mono text-xs">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-950/50">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans font-medium">
                    developer.config.ts
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    v2026.4
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 space-y-2 text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
                  <p>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">&quot;Bui Le Duc Huy&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500">degree:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">&quot;B.S. Software Engineering (GPA 3.17)&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500">coreStack:</span> [
                  </p>
                  <p className="pl-8 text-amber-600 dark:text-amber-300">
                    &quot;Next.js 16&quot;, &quot;React 19&quot;, &quot;ASP.NET Core 10&quot;,
                  </p>
                  <p className="pl-8 text-amber-600 dark:text-amber-300">
                    &quot;TypeScript&quot;, &quot;PostgreSQL&quot;, &quot;Docker&quot;, &quot;EF Core 10&quot;
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-slate-500">automatedTests:</span>{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">770</span>{" "}
                    <span className="text-slate-400 text-[11px]">// Vitest, Playwright, xUnit</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500">flagships:</span> &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-500">agile:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">&quot;Mini Jira (O(1) DnD + SSE)&quot;</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-500">commerce:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">&quot;ECommerce.Web (VNPay HMAC)&quot;</span>,
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-slate-500">seeking:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300">&quot;Software Engineer / Full-Stack&quot;</span>,
                  </p>
                  <p>&#125;;</p>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                        <i aria-hidden="true" className="fas fa-check-circle" />
                        Tests Passing: 777/777
                      </span>
                      <span>0 Type Errors</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/95 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <i aria-hidden="true" className="fas fa-shield-halved text-lg" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white">Security-First</div>
                  <div className="text-[10px] text-slate-500">HMAC-SHA512 &amp; Zero-Trust RBAC</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900/95 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <i aria-hidden="true" className="fas fa-bolt text-lg" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white">High Performance</div>
                  <div className="text-[10px] text-slate-500">O(1) Fractional Drag &amp; Drop</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-slate-400 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          aria-label="Scroll to About section"
        >
          <i aria-hidden="true" className="fas fa-chevron-down text-lg" />
        </a>
      </div>
    </section>
  );
}
