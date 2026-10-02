"use client";

import { useMemo, useState } from "react";
import { categoryLabels, type DisciplineCardData, type DisciplineCategory } from "@/lib/disciplines";
import { DisciplineCard } from "./DisciplineCard";

type Filter = DisciplineCategory | "todos";
const filters: Filter[] = ["todos", "equipo", "individual", "recreativo"];

interface Props {
  disciplines: DisciplineCardData[];
  /** Limita la cantidad de tarjetas (ej. en la home). */
  limit?: number;
  /** En mobile muestra las tarjetas en un carrusel horizontal deslizable. */
  mobileCarousel?: boolean;
}

/** Grilla de disciplinas con barra de filtros por categoría. */
export function DisciplinesExplorer({ disciplines, limit, mobileCarousel = false }: Props) {
  const [filter, setFilter] = useState<Filter>("todos");

  const visible = useMemo(() => {
    const list = filter === "todos" ? disciplines : disciplines.filter((d) => d.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [disciplines, filter, limit]);

  const count = (f: Filter) => (f === "todos" ? disciplines.length : disciplines.filter((d) => d.category === f).length);

  return (
    <div>
      <h2 className="sr-only">Listado de disciplinas</h2>
      <div role="tablist" aria-label="Filtrar disciplinas" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active ? "bg-vasc-600 text-white shadow-lg shadow-vasc-600/30" : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-ink hover:ring-ink/25"
              }`}
            >
              {categoryLabels[f]}
              <span className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-black/20" : "bg-ink/5"}`}>{count(f)}</span>
            </button>
          );
        })}
      </div>

      <div
        className={`mt-8 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
          mobileCarousel ? "-mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0" : "grid"
        }`}
      >
        {visible.map((d, i) => (
          <div
            key={d.slug}
            className={`h-full animate-[fadeUp_0.5s_ease_both] ${mobileCarousel ? "w-[82%] shrink-0 snap-center sm:w-auto" : ""}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <DisciplineCard discipline={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
