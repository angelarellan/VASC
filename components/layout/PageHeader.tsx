import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  children?: ReactNode;
}

/** Cabecera de páginas internas: foto de fondo + degradé rojo institucional. */
export function PageHeader({ eyebrow, title, description, image, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
      <Image src={image} alt="" fill preload quality={50} sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-vasc-700/90 via-ink/80 to-ink" />
      <div className="stripes-dark absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-vasc-300">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div className="stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
    </section>
  );
}
