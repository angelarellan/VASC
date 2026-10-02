import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] ${tone === "light" ? "text-vasc-300" : "text-vasc-600"} ${center ? "justify-center" : ""}`}>
        <span className="inline-block h-3 w-1.5 bg-vasc-500" />
        <span className="inline-block h-3 w-1.5 bg-vasc-500/50" />
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${tone === "light" ? "text-white/75" : "text-ink/65"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
