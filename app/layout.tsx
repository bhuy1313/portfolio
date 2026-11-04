import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export const metadata: Metadata = {
  title: "Bui Le Duc Huy | Software Engineer & Full-Stack Developer",
  description:
    "Software Engineering graduate specializing in Next.js 16, React 19, ASP.NET Core 10, TypeScript, PostgreSQL, and scalable web architectures.",
  authors: [{ name: "Bui Le Duc Huy", url: "https://github.com/bhuy1313" }],
  keywords: [
    "Bui Le Duc Huy",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js 16",
    "React 19",
    "ASP.NET Core 10",
    "TypeScript",
    "PostgreSQL",
    "Ho Chi Minh City",
  ],
  openGraph: {
    title: "Bui Le Duc Huy | Software Engineer & Full-Stack Developer",
    description:
      "Explore production-grade full-stack projects: Mini Jira, ECommerce.Web (.NET 10), and Embedded IoT systems.",
    type: "website",
    locale: "en_US",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-[#090d16] dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-500">
        {children}
      </body>
    </html>
  );
}
