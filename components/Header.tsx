"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const desktopIconRef = useRef<HTMLElement>(null);
  const mobileIconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const syncIcons = () => {
      const dark = document.documentElement.classList.contains("dark");
      for (const ref of [desktopIconRef, mobileIconRef]) {
        ref.current?.classList.toggle("fa-sun", dark);
        ref.current?.classList.toggle("fa-moon", !dark);
      }
    };
    syncIcons();

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    localStorage.theme = dark ? "dark" : "light";
    for (const ref of [desktopIconRef, mobileIconRef]) {
      ref.current?.classList.toggle("fa-sun", dark);
      ref.current?.classList.toggle("fa-moon", !dark);
    }
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience & Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`glass fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/5 dark:shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="#home"
              className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 transition-transform group-hover:scale-110">
                &lt;/&gt;
              </span>
              <span>
                Huy<span className="text-emerald-500">.</span>dev
              </span>
            </Link>
          </div>

          <div className="hidden items-center space-x-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/BUILEDUCHUY_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <i aria-hidden="true" className="fas fa-file-pdf text-emerald-500" />
              CV (PDF)
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2.5 text-slate-600 transition-colors hover:bg-slate-200/60 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <i
                ref={desktopIconRef}
                aria-hidden="true"
                className="fas fa-moon text-base"
              />
            </button>

            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-600 hover:scale-105 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2.5 text-slate-600 transition-colors hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <i
                ref={mobileIconRef}
                aria-hidden="true"
                className="fas fa-moon text-base"
              />
            </button>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-700 transition-colors hover:text-emerald-500 dark:text-slate-300"
            >
              <i
                aria-hidden="true"
                className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-4 pt-3 pb-6 backdrop-blur-lg md:hidden dark:border-slate-800 dark:bg-[#090d16]/95">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <a
                href="/BUILEDUCHUY_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                <i aria-hidden="true" className="fas fa-download text-emerald-500" />
                Download CV (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-emerald-600 py-2.5 text-center text-sm font-semibold text-white shadow-md dark:bg-emerald-500 dark:text-slate-950"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
