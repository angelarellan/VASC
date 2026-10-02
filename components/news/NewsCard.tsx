import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { formatDate, type NewsItem } from "@/lib/news";

interface NewsCardProps {
  item: NewsItem;
  /** Variante destacada: más grande, con texto sobre la imagen. */
  featured?: boolean;
}

export function NewsCard({ item, featured = false }: NewsCardProps) {
  const date = formatDate(item.date);

  if (featured) {
    return (
      <Link
        href={`/noticias/${item.slug}`}
        className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10 lg:min-h-[520px]"
      >
        <Image src={item.cover} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
            <span className="rounded-full bg-vasc-500 px-3 py-1">{item.category}</span>
            {date && (
              <span className="flex items-center gap-1.5 text-white/75">
                <CalendarDays className="size-3.5" /> {date}
              </span>
            )}
          </div>
          <h3 className="mt-4 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] text-balance sm:text-5xl">{item.title}</h3>
          <p className="mt-4 max-w-xl text-white/75">{item.excerpt}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold">
            Leer nota <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/noticias/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={item.cover} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-vasc-600">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {date && (
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink/65">
            <CalendarDays className="size-3.5" /> {date}
          </p>
        )}
        <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight text-ink transition-colors group-hover:text-vasc-600">{item.title}</h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/60">{item.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-vasc-600">
          Leer más <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
