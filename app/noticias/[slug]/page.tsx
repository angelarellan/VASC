import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Gallery } from "@/components/club/Gallery";
import { NewsCard } from "@/components/news/NewsCard";
import { formatDate, getNews, news } from "@/lib/news";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/noticias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.excerpt,
    alternates: { canonical: `/noticias/${n.slug}` },
    openGraph: { type: "article", images: [{ url: n.cover }], publishedTime: n.date },
  };
}

export default async function NoticiaPage({ params }: PageProps<"/noticias/[slug]">) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();
  const date = formatDate(n.date);
  const more = news.filter((x) => x.slug !== n.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: n.title,
    description: n.excerpt,
    image: `${site.url}${n.cover}`,
    datePublished: n.date,
    publisher: { "@type": "SportsClub", name: site.name, logo: `${site.url}/images/brand/logo-vasc.png` },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }} />
      <header className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-40">
        <Image src={n.cover} alt="" fill preload quality={50} sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-vasc-900/50" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white">
            <ArrowLeft className="size-4" /> Noticias
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
            <span className="rounded-full bg-vasc-500 px-3 py-1">{n.category}</span>
            {date && (
              <time dateTime={n.date} className="flex items-center gap-1.5 text-white/70">
                <CalendarDays className="size-3.5" /> {date}
              </time>
            )}
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] text-balance sm:text-6xl">{n.title}</h1>
          <p className="mt-5 text-lg text-white/75">{n.excerpt}</p>
        </div>
        <div className="stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-5 text-lg leading-relaxed text-ink/80">
          {n.body.map((p, i) => (
            <p key={i} className={i === 0 ? "text-xl font-medium text-ink first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-7xl first-letter:font-extrabold first-letter:leading-[0.8] first-letter:text-vasc-500" : ""}>
              {p}
            </p>
          ))}
        </div>
        {n.images && n.images.length > 1 && (
          <div className="mt-12">
            <Gallery images={n.images.map((src) => ({ src }))} />
          </div>
        )}
      </div>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold uppercase">Más noticias</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <NewsCard key={m.slug} item={m} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
