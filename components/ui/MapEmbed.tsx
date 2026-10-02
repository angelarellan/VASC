"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface MapEmbedProps {
  src: string;
  title: string;
  className?: string;
}

/**
 * Google Maps diferido: el iframe (≈1 MB de JS de terceros) se monta recién
 * con la primera interacción del usuario (scroll, toque, tecla o clic), así no
 * bloquea la carga inicial de la página.
 */
export function MapEmbed({ src, title, className = "" }: MapEmbedProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) return;
    const events = ["scroll", "pointerdown", "keydown", "touchstart", "wheel"] as const;
    const on = () => setActive(true);
    events.forEach((e) => window.addEventListener(e, on, { once: true, passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, on));
  }, [active]);

  if (active) {
    return <iframe title={title} src={src} className={className} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className={`stripes-subtle group grid place-items-center bg-paper text-ink/65 transition hover:text-vasc-600 ${className}`}
      aria-label={`Cargar mapa: ${title}`}
    >
      <span className="flex flex-col items-center gap-2 text-sm font-semibold">
        <span className="grid size-12 place-items-center rounded-full bg-vasc-500 text-white shadow-lg transition group-hover:scale-110">
          <MapPin className="size-6" />
        </span>
        Ver mapa
      </span>
    </button>
  );
}
