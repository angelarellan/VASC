import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, UserRound, Users } from "lucide-react";
import { categoryLabels, type DisciplineCardData } from "@/lib/disciplines";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

/** Tarjeta de disciplina: foto, edades, horarios, profe y CTA a WhatsApp. */
export function DisciplineCard({ discipline: d }: { discipline: DisciplineCardData }) {
  const firstSlot = d.schedule[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-vasc-500/10">
      <Link href={`/disciplinas/${d.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={d.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-vasc-600 shadow">
          {categoryLabels[d.category]}
        </span>
        <span className="absolute right-4 top-4 grid size-9 translate-y-1 place-items-center rounded-full bg-vasc-500 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
        <h3 className="absolute bottom-4 left-5 right-5 font-display text-3xl font-extrabold uppercase leading-none text-white">
          {d.name}
        </h3>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-ink/65">{d.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.ages.map((age) => (
            <span key={age} className="rounded-full bg-vasc-50 px-2.5 py-1 text-xs font-semibold text-vasc-700">
              {age}
            </span>
          ))}
        </div>

        <dl className="mb-5 mt-4 space-y-2 border-t border-dashed border-ink/10 pt-4 text-sm">
          <div className="flex items-start gap-2 text-ink/70">
            <Clock className="mt-0.5 size-4 shrink-0 text-vasc-500" />
            <dt className="sr-only">Horarios</dt>
            <dd>
              {firstSlot.group}: <span className="font-medium text-ink">{firstSlot.days}</span>
              {d.schedule.length > 1 && <span className="text-ink/65"> · +{d.schedule.length - 1} grupos</span>}
            </dd>
          </div>
          <div className="flex items-start gap-2 text-ink/70">
            <UserRound className="mt-0.5 size-4 shrink-0 text-vasc-500" />
            <dt className="sr-only">Profesor</dt>
            <dd>{d.coach}</dd>
          </div>
          <div className="flex items-start gap-2 text-ink/70">
            <Users className="mt-0.5 size-4 shrink-0 text-vasc-500" />
            <dt className="sr-only">Lugar</dt>
            <dd>{d.venue}</dd>
          </div>
        </dl>

        <a
          href={whatsappLink(`¡Hola! Quiero consultar por ${d.name} en el Villa Allende Sport Club.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-white transition hover:bg-[#15803d]"
        >
          <WhatsAppIcon className="size-4" />
          Consultar por esta disciplina
        </a>
      </div>
    </article>
  );
}
