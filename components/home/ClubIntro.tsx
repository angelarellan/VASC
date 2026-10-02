import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StatsCounter } from "@/components/club/StatsCounter";
import { disciplines } from "@/lib/disciplines";
import { clubAge } from "@/lib/site";

/** Bloque institucional: identidad, collage de archivo y contadores. */
export function ClubIntro() {
  const stats = [
    { value: clubAge(), prefix: "+", label: "Años de historia" },
    { value: disciplines.length, label: "Disciplinas" },
    { value: 3, label: "Títulos Liga Regional" },
    { value: 500, prefix: "+", label: "Socios activos" },
  ];

  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="stripes-subtle absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Collage */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-square">
              <div className="grain absolute left-0 top-0 w-[78%] rotate-[-3deg] overflow-hidden rounded-2xl bg-white p-3 pb-12 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image src="/images/historia/historia-socios-bar.jpg" alt="Primeros socios del Villa Allende Sport Club" fill sizes="(min-width:1024px) 40vw, 80vw" className="object-cover" />
                </div>
                <p className="absolute bottom-3 left-4 font-mono text-xs text-ink/60">Archivo histórico V.A.S.C.</p>
              </div>
              <div className="grain absolute bottom-0 right-0 w-[72%] rotate-[4deg] overflow-hidden rounded-2xl bg-white p-3 pb-12 shadow-2xl">
                <div className="relative aspect-[16/10]">
                  <Image src="/images/historia/historia-equipo-futbol.jpg" alt="Plantel histórico del club" fill sizes="(min-width:1024px) 40vw, 80vw" className="object-cover" />
                </div>
                <p className="absolute bottom-3 left-4 font-mono text-xs text-ink/60">Los albirrojos de bastones</p>
              </div>
              <div className="absolute left-[40%] top-[42%] grid size-28 place-items-center rounded-full bg-vasc-500 text-center text-white shadow-xl ring-8 ring-paper sm:size-32">
                <div>
                  <Trophy className="mx-auto size-6" />
                  <p className="font-display text-3xl font-extrabold leading-none">1940</p>
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest">Fundación</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="El Club"
              title={
                <>
                  Nueve vecinos,
                  <br />
                  <span className="text-vasc-500">un peso cada uno</span>
                  <br />y un sueño
                </>
              }
              description="El 24 de mayo de 1940, de la fusión de Recreativo Sport Argentino y Villa Allende Foot Ball, nació el Villa Allende Sport Club. Desde entonces, el albirrojo de bastones verticales es sinónimo de deporte, amistad y comunidad en las Sierras Chicas."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Campeones Liga Regional Colón 1953 · 1968 · 1972", "Sede social propia desde 1970", "Predio deportivo en San Clemente", "Nuevo Estadio Techado en marcha"].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-ink/80 shadow-sm ring-1 ring-ink/5">
                  <span className="mt-1 flex shrink-0 gap-0.5" aria-hidden="true">
                    <span className="h-3.5 w-1 bg-vasc-500" />
                    <span className="h-3.5 w-1 bg-vasc-500/40" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/el-club" variant="secondary" className="mt-8">
              Conocé nuestra historia <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>

        <Reveal className="mt-20 text-ink/10">
          <StatsCounter stats={stats} />
        </Reveal>
      </div>
    </section>
  );
}
