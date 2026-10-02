import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { DisciplinesExplorer } from "@/components/disciplines/DisciplinesExplorer";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { disciplines, toCardData } from "@/lib/disciplines";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disciplinas",
  description:
    "Básquet, vóley, fútbol, patín artístico, gimnasia rítmica, taekwondo, aikido, danzas, tango y gimnasia para adultos mayores en Villa Allende, Córdoba.",
  alternates: { canonical: "/disciplinas" },
};

export default function DisciplinasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disciplinas"
        title={
          <>
            Un club, <span className="text-vasc-400">mil pasiones</span>
          </>
        }
        description="Deportes de equipo, disciplinas individuales y propuestas recreativas para todas las edades. Encontrá la tuya y sumate."
        image="/images/club/cancha-vasc.jpg"
      >
        <ButtonLink href={whatsappLink("¡Hola! Quiero info sobre las disciplinas del club.")} external variant="whatsapp" size="lg">
          <WhatsAppIcon /> Consultar horarios
        </ButtonLink>
      </PageHeader>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DisciplinesExplorer disciplines={disciplines.map(toCardData)} />
        </div>
      </section>
    </>
  );
}
