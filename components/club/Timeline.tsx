import Image from "next/image";
import type { Milestone } from "@/lib/history";
import { Reveal } from "@/components/ui/Reveal";

/** Línea de tiempo vertical, alternada en desktop. */
export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative">
      <span className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-vasc-500 via-vasc-500/40 to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
      {items.map((m, i) => {
        const right = i % 2 === 1;
        return (
          <li key={m.year} className="relative mb-12 pl-16 last:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
            <span className="absolute left-0 top-0 grid size-11 place-items-center rounded-full bg-vasc-500 font-display text-xs font-bold text-white ring-8 ring-white md:left-1/2 md:-translate-x-1/2">
              {m.year.slice(-2)}
            </span>
            <Reveal className={`${right ? "md:col-start-2" : "md:text-right"}`}>
              <p className="font-display text-5xl font-extrabold text-vasc-500/90">{m.year}</p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase text-ink">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/65">{m.text}</p>
            </Reveal>
            {m.image && (
              <Reveal delay={120} className={`mt-5 md:mt-0 ${right ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/5">
                  <Image src={m.image} alt={m.title} fill sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
                </div>
              </Reveal>
            )}
          </li>
        );
      })}
    </ol>
  );
}
