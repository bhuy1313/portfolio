"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Create mailto fallback link to directly open user's email client
    const mailtoUri = `mailto:bhuy1212@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUri, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 8000);
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-contact)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <Reveal variant="left">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <i aria-hidden="true" className="fas fa-paper-plane text-[10px]" />
                Get In Touch
              </div>

              <h3 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let&apos;s Discuss Engineering Opportunities
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-slate-400">
                I am actively seeking <strong className="text-white">Software Engineer / Full-Stack Developer</strong> roles.
                Whether you have an open position, an engineering project to collaborate on, or wish to connect, feel free to reach out.
              </p>

              {/* Contact list cards */}
              <div className="space-y-4">
                <a
                  href="mailto:bhuy1212@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-emerald-500 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className="fas fa-envelope text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Email Address</div>
                    <div className="font-mono text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      bhuy1212@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0707286901"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-emerald-500 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className="fas fa-phone text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Phone &amp; Zalo</div>
                    <div className="font-mono text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      0707 286 901 (+84)
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/bhuy1313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all hover:border-emerald-500 hover:bg-slate-900"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <i aria-hidden="true" className="fab fa-github text-xl" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">GitHub</div>
                    <div className="font-mono text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                      github.com/bhuy1313
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <i aria-hidden="true" className="fas fa-location-dot text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">
                      Go Vap District, Ho Chi Minh City, Vietnam
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <Reveal variant="right">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                <h4 className="text-xl font-bold text-white mb-2">Send Direct Message</h4>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your info below to initiate a direct conversation via email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyen Van A"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-slate-300">
                      Subject / Position
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Role / Project Inquiry"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Huy, we reviewed your projects and would like to discuss..."
                      className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-102"
                    >
                      <i aria-hidden="true" className="fas fa-paper-plane" />
                      Send Message
                    </button>

                    <a
                      href="/BUILEDUCHUY_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-slate-700"
                    >
                      <i aria-hidden="true" className="fas fa-download text-emerald-400" />
                      Download CV
                    </a>
                  </div>
                </form>

                {sent && (
                  <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-medium text-emerald-300">
                    <i aria-hidden="true" className="fas fa-check-circle text-base text-emerald-400" />
                    <span>Opening your email client to send message to bhuy1212@gmail.com!</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
