"use client";

import { useEffect, useRef, useState } from "react";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

/** Contador animado que arranca al entrar en pantalla. */
function Counter({ value, prefix = "", suffix = "", duration = 1600 }: Omit<Stat, "label"> & { duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduce) return setN(value);
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export function StatsCounter({ stats, tone = "dark" }: { stats: Stat[]; tone?: "dark" | "light" }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-current/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className={`flex flex-col-reverse p-6 sm:p-8 ${tone === "light" ? "bg-ink" : "bg-white"}`}>
          <dt className={`mt-2 text-sm font-medium uppercase tracking-wider ${tone === "light" ? "text-white/60" : "text-ink/65"}`}>{s.label}</dt>
          <dd className="font-display text-5xl font-extrabold text-vasc-500 sm:text-6xl">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
