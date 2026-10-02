import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, MapPin, UserRound } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Gallery } from "@/components/club/Gallery";
import { DisciplineCard } from "@/components/disciplines/DisciplineCard";
import { MembershipForm } from "@/components/membership/MembershipForm";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { categoryLabels, disciplines, getDiscipline } from "@/lib/disciplines";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return disciplines.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/disciplinas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDiscipline(slug);
  if (!d) return {};
  return {
    title: `${d.name} en Villa Allende`,
    description: `${d.summary} Categorías: ${d.ages.join(", ")}. Villa Allende Sport Club.`,
    alternates: { canonical: `/disciplinas/${d.slug}` },
    openGraph: { images: [{ url: d.image }] },
  };
}

export default async function DisciplinaPage({ params }: PageProps<"/disciplinas/[slug]">) {
  const { slug } = await params;
  const d = getDiscipline(slug);
  if (!d) notFound();

  const related = disciplines.filter((x) => x.category === d.category && x.slug !== d.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={categoryLabels[d.category]} title={d.name} description={d.summary} image={d.image}>
        <div className="flex flex-wrap gap-2">
          {d.ages.map((a) => (
            <span key={a} className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold md:backdrop-blur">
              {a}
            </span>
          ))}
        </div>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <Link href="/disciplinas" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/65 hover:text-vasc-600">
              <ArrowLeft className="size-4" /> Todas las disciplinas
            </Link>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">{d.description}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {d.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 rounded-2xl bg-vasc-50 p-4 text-sm font-semibold text-vasc-800">
                  <CheckCircle2 className="size-5 shrink-0 text-vasc-500" /> {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-3xl font-extrabold uppercase">Galería</h2>
            <div className="mt-6">
              <Gallery images={d.gallery.map((src) => ({ src, caption: d.name }))} />
            </div>
          </div>

          {/* Ficha lateral */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl bg-ink text-white">
              <div className="stripes h-1.5" />
              <div className="space-y-5 p-6">
                <h2 className="font-display text-2xl font-bold uppercase">Horarios</h2>
                <ul className="space-y-3">
                  {d.schedule.map((s) => (
                    <li key={s.group} className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold">{s.group}</p>
                      <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
                        <Clock className="size-4 text-vasc-400" /> {s.days} · {s.hours}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="flex items-center gap-2 text-sm text-white/70">
                  <UserRound className="size-4 text-vasc-400" /> {d.coach}
                </p>
                <p className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="size-4 text-vasc-400" /> {d.venue}
                </p>
                <ButtonLink href={whatsappLink(`¡Hola! Quiero consultar por ${d.name} en el Villa Allende Sport Club.`)} external variant="whatsapp" className="w-full">
                  <WhatsAppIcon /> Consultar por {d.name}
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-3xl bg-paper p-6 ring-1 ring-ink/5">
              <h2 className="mb-4 font-display text-2xl font-bold uppercase">Pedí información</h2>
              <MembershipForm defaultTopic="Consulta por una disciplina" />
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl font-extrabold uppercase">También te puede interesar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <DisciplineCard key={r.slug} discipline={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
