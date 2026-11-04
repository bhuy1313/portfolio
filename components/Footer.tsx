export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 text-slate-500 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 font-mono text-sm font-bold text-emerald-500 ring-1 ring-emerald-500/30">
            &lt;/&gt;
          </div>
          <span className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            Bui Le Duc Huy
          </span>
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Bui Le Duc Huy. Crafted with Next.js 16, React 19 &amp; Tailwind CSS v4.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/bhuy1313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
            aria-label="GitHub Profile"
          >
            <i aria-hidden="true" className="fab fa-github text-lg" />
          </a>
          <a
            href="mailto:bhuy1212@gmail.com"
            className="text-slate-400 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
            aria-label="Send Email"
          >
            <i aria-hidden="true" className="fas fa-envelope text-lg" />
          </a>
          <a
            href="/BUILEDUCHUY_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
            aria-label="Download CV"
          >
            <i aria-hidden="true" className="fas fa-file-pdf text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
