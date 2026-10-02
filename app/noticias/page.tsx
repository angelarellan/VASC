import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { NewsCard } from "@/components/news/NewsCard";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Novedades, obras, eventos, resultados y recuerdos del Villa Allende Sport Club.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  const [featured, ...rest] = news;
  return (
    <>
      <PageHeader eyebrow="Noticias & Eventos" title="La vida del club" description="Obras, torneos, eventos sociales y recuerdos de nuestra historia." image="/images/sum/sum-render-exterior.jpg" />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Últimas noticias</h2>
          <NewsCard item={featured} featured />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
