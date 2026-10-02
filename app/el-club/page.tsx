import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Landmark, GraduationCap, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Timeline } from "@/components/club/Timeline";
import { StatsCounter } from "@/components/club/StatsCounter";
import { Gallery } from "@/components/club/Gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { archive, founders, milestones, values } from "@/lib/history";
import { disciplines } from "@/lib/disciplines";
import { clubAge } from "@/lib/site";

export const metadata: Metadata = {
  title: "El Club · Historia y valores",
  description:
    "Fundado el 24 de mayo de 1940, el Villa Allende Sport Club es una institución histórica de Villa Allende, Córdoba. Tres veces campeón de la Liga Regional Colón.",
  alternates: { canonical: "/el-club" },
};

const valueIcons = [Users, Landmark, GraduationCap, HeartHandshake];

export default function ElClubPage() {
  const stats = [
    { value: clubAge(), label: "Años de historia" },
    { value: disciplines.length, label: "Disciplinas" },
    { value: 3, label: "Títulos de Liga" },
    { value: 21, label: "Temporadas en Liga Colón" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="El Club"
        title={
          <>
            Desde 1940, <span className="text-vasc-400">albirrojos</span> de corazón
          </>
        }
        description="Una historia escrita por nueve fundadores, generaciones de deportistas y una comunidad que nunca dejó de soñar."
        image="/images/historia/historia-socios-gala.jpg"
      />

      {/* Identidad */}
      <section className="overflow-hidden py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Identidad"
              title="Rojo y blanco a bastones verticales"
              description="Nuestros colores nacieron en la cancha de fútbol y hoy visten a cada disciplina. El escudo con las iniciales V.A.S.C. es símbolo de pertenencia para miles de familias de Villa Allende y las Sierras Chicas."
            />
            <div className="mt-8 rounded-3xl bg-paper p-6 ring-1 ring-ink/5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-vasc-500">Socios fundadores · 24/05/1940</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink/75">
                {founders.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-3 w-1 bg-vasc-500" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Reveal className="relative">
            <div className="stripes absolute -inset-4 -z-10 rotate-2 rounded-[2rem] opacity-90" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/historia/historia-equipo-futbol.jpg" alt="Plantel histórico del Villa Allende Sport Club" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading tone="light" eyebrow="Valores" title="Lo que nos mueve" align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal key={v.title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-vasc-500 hover:bg-vasc-500/10">
                  <Icon className="size-9 text-vasc-500" />
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-16 text-white/10">
            <StatsCounter stats={stats} tone="light" />
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Nuestra historia" title={`${clubAge()} años en hitos`} align="center" />
          <div className="mt-16">
            <Timeline items={milestones} />
          </div>
        </div>
      </section>

      {/* Archivo */}
      <section className="grain relative bg-sepia py-20 text-white sm:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading tone="light" eyebrow="Archivo histórico V.A.S.C." title="Raíces de nuestra historia" />
          <div className="mt-12">
            <Gallery images={archive} variant="archive" />
          </div>
        </div>
      </section>
    </>
  );
}
