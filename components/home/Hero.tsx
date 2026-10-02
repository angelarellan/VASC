import Image from "next/image";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { clubAge } from "@/lib/site";
import { HeroBackground } from "./HeroBackground";

/**
 * Hero de alto impacto: fondo animado con las disciplinas (video + carrusel
 * de respaldo), degradé rojo institucional y bastones del escudo.
 */
export function Hero() {
  const years = clubAge();

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      {/* Video de fondo + carrusel automático de respaldo */}
      <HeroBackground />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-ink via-ink/75 to-vasc-900/40" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="stripes-dark absolute inset-0 -z-10" aria-hidden="true" />

      {/* Bastones verticales decorativos */}
      <div className="absolute -right-10 top-0 -z-10 hidden h-full w-[38%] skew-x-[-8deg] opacity-[0.12] lg:block stripes" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <p className="inline-flex animate-[fadeUp_0.6s_ease_both] items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] md:backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <span className="size-2 animate-pulse rounded-full bg-vasc-500" />
            Desde 1940 · {years} años junto a vos
          </p>
          <h1 className="mt-6 font-display text-[3.4rem] font-extrabold uppercase leading-[0.85] tracking-tight text-balance sm:text-8xl lg:text-[7.5rem]">
            El corazón
            <br />
            deportivo de <span className="text-vasc-500">Villa Allende</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Básquet, vóley, patín, taekwondo, gimnasia, danzas y tango. Una pasión albirroja que une generaciones:
            somos <strong className="text-white">la familia más grande de Villa Allende</strong>.
          </p>
          <div className="mt-10 animate-[fadeUp_0.7s_0.3s_ease_both] grid gap-3 sm:w-fit sm:grid-cols-2">
            <ButtonLink href="/disciplinas" size="lg" className="w-full">
              Explorar Disciplinas <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/contacto" size="lg" variant="light" className="w-full">
              <Phone className="size-5" /> Contacto / Secretaría
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden justify-center lg:col-span-4 lg:flex">
          <div className="absolute inset-0 m-auto size-80 rounded-full bg-vasc-500/30 blur-3xl" aria-hidden="true" />
          <Image
            src="/images/brand/logo-vasc.png"
            alt="Escudo del Villa Allende Sport Club"
            width={340}
            height={340}
            loading="eager"
            className="relative h-auto animate-float drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <a href="#disciplinas" aria-label="Scroll a disciplinas" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:text-white">
        Scroll
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
