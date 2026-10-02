import Image from "next/image";
import { ArrowRight, Building2, Ruler, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Destacado del proyecto Estadio Techado / S.U.M. en San Clemente. */
export function SumProject() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="stripes-dark absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-1/3 hidden size-[500px] rounded-full bg-vasc-600/25 blur-[120px] md:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            tone="light"
            eyebrow="Un paso histórico"
            title={
              <>
                Un sueño que empieza a <span className="text-vasc-500">tomar forma</span>
              </>
            }
          />
          <p className="text-lg leading-relaxed text-white/70">
            El nuevo <strong className="text-white">Estadio Techado / Salón de Usos Múltiples</strong> en el predio de San Clemente:
            más disciplinas, más chicos practicando deporte y nuevos eventos sociales para toda la ciudad.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="relative min-h-[320px] overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <Image src="/images/sum/sum-render-exterior.jpg" alt="Render exterior del futuro Estadio Techado del VASC" fill sizes="(min-width:768px) 66vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="rounded-full bg-vasc-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">Render del proyecto</span>
              <p className="mt-3 font-display text-3xl font-extrabold uppercase sm:text-4xl">Estadio Techado · San Clemente</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative min-h-[220px] overflow-hidden rounded-3xl">
            <Image src="/images/sum/sum-render-interior.jpg" alt="Render interior: cancha de básquet y gradas" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">Interior</span>
          </Reveal>
          <Reveal delay={200} className="relative min-h-[220px] overflow-hidden rounded-3xl">
            <Image src="/images/sum/sum-agrimensura.jpg" alt="Trabajos de agrimensura en el predio" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">Agrimensura · 5/9</span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { Icon: Ruler, title: "Agrimensura completada", text: "Toma de niveles realizada el 5 de septiembre." },
            { Icon: Building2, title: "Próxima etapa: cimientos", text: "Definición de fundaciones y avance de obra." },
            { Icon: Users, title: "Para toda la ciudad", text: "Más disciplinas, más chicos y eventos sociales." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:backdrop-blur">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-vasc-500">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <ButtonLink href="/noticias/un-paso-historico-estadio-techado-sum" variant="light" className="mt-10">
          Leer la novedad completa <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
      </div>
    </section>
  );
}
