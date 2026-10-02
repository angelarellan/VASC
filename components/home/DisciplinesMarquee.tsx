import { disciplines } from "@/lib/disciplines";

/** Cinta roja con las disciplinas en movimiento continuo. */
export function DisciplinesMarquee() {
  const items = [...disciplines, ...disciplines];
  return (
    <div className="relative -mt-px overflow-hidden bg-vasc-500 py-5 text-white" aria-label="Disciplinas del club">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((d, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase tracking-wide sm:text-3xl" aria-hidden={i >= disciplines.length}>
            {d.name}
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="h-5 w-1.5 bg-white" />
              <span className="h-5 w-1.5 bg-white/50" />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
