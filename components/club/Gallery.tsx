"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export interface GalleryImage {
  src: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  /** "archive" aplica estética de foto antigua. */
  variant?: "default" | "archive";
}

/** Celdas del mosaico: la primera es grande y nunca quedan huecos. */
function spanFor(i: number, total: number): string {
  if (total === 1) return "col-span-full row-span-2";
  if (total === 2) return "col-span-2 row-span-2";
  if (i === 0) return "col-span-2 row-span-2";
  // Si queda una celda libre al final, la última imagen ocupa dos columnas.
  if (i === total - 1 && (total - 1) % 2 === 1) return "col-span-2";
  return "";
}

/** Galería en mosaico con lightbox navegable (teclado: ← →, Esc). */
export function Gallery({ images, variant = "default" }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const go = (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length));
  const current = index !== null ? images[index] : null;
  const archive = variant === "archive";

  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden rounded-2xl ${spanFor(i, images.length)} ${
              archive ? "bg-sepia p-2 ring-1 ring-white/10" : "bg-paper"
            }`}
            aria-label={`Ampliar imagen${img.caption ? `: ${img.caption}` : ""}`}
          >
            <div className="relative size-full overflow-hidden rounded-xl">
              <Image
                src={img.src}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`object-cover transition-all duration-700 group-hover:scale-105 ${archive ? "sepia-[0.25] group-hover:sepia-0" : ""}`}
              />
            </div>
            <div className="absolute inset-2 flex items-end rounded-xl bg-gradient-to-t from-ink/80 to-transparent p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{img.caption}</span>
              <Expand className="ml-auto size-5 shrink-0 text-white" />
            </div>
          </button>
        ))}
      </div>

      <Modal open={current !== null} onClose={close} label="Visor de imágenes" className="bg-ink">
        {current && (
          <div
            className="relative"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(1);
              if (e.key === "ArrowLeft") go(-1);
            }}
          >
            <div className="relative aspect-[3/2] w-full">
              <Image src={current.src} alt={current.caption ?? ""} fill sizes="90vw" className="object-contain" />
            </div>
            {current.caption && <p className="p-5 text-center text-sm text-white/80">{current.caption}</p>}
            {images.length > 1 && (
              <>
                <button onClick={() => go(-1)} aria-label="Anterior" className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink hover:bg-vasc-500 hover:text-white">
                  <ChevronLeft className="size-5" />
                </button>
                <button onClick={() => go(1)} aria-label="Siguiente" className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink hover:bg-vasc-500 hover:text-white">
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
