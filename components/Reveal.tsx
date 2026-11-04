"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const variants = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
} as const;

type RevealProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <div
      ref={ref}
      className={`${variants[variant]} ${active ? "active" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}