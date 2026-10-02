import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { DisciplinesMarquee } from "@/components/home/DisciplinesMarquee";
import { ClubIntro } from "@/components/home/ClubIntro";
import { SumProject } from "@/components/home/SumProject";
import { MembershipCTA } from "@/components/home/MembershipCTA";
import { ArchiveSection } from "@/components/home/ArchiveSection";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { DisciplinesExplorer } from "@/components/disciplines/DisciplinesExplorer";
import { NewsCard } from "@/components/news/NewsCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { disciplines, toCardData } from "@/lib/disciplines";
import { news } from "@/lib/news";

export default function HomePage() {
  const [featured, ...rest] = news;

  return (
    <>
      <Hero />
      <DisciplinesMarquee />

      {/* Disciplinas */}
      <section id="disciplinas" className="scroll-mt-20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Disciplinas"
              title={
                <>
                  Elegí tu deporte, <span className="text-vasc-500">viví la pasión</span>
                </>
              }
              description="Actividades para todas las edades: desde la escuelita de los más chicos hasta propuestas para adultos mayores."
            />
            <ButtonLink href="/disciplinas" variant="outline" className="shrink-0">
              Ver todas <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <DisciplinesExplorer disciplines={disciplines.slice(0, 8).map(toCardData)} mobileCarousel />
        </div>
      </section>

      <ClubIntro />
      <SumProject />

      {/* Noticias */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Noticias" title="Lo último del club" />
            <ButtonLink href="/noticias" variant="outline" className="shrink-0">
              Todas las noticias <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <NewsCard item={featured} featured />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
              {rest.slice(0, 2).map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MembershipCTA />
      <ArchiveSection />
      <InstagramStrip />
    </>
  );
}
