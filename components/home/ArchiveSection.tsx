import { Camera } from "lucide-react";
import { Gallery } from "@/components/club/Gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { archive } from "@/lib/history";
import { site, whatsappLink } from "@/lib/site";

/** "Raíces de nuestra historia": archivo fotográfico + convocatoria. */
export function ArchiveSection() {
  return (
    <section className="grain relative overflow-hidden bg-sepia py-24 text-white sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <SectionHeading
            tone="light"
            eyebrow="Recuerdos"
            title="Raíces de nuestra historia"
            description="Fotografías originales de los primeros socios del Villa Allende Sport Club, gentileza del Sr. José Mario Albano, hijo de nuestro querido socio vitalicio José Albano."
          />
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 md:backdrop-blur">
            <p className="flex items-center gap-2 font-display text-2xl font-bold uppercase">
              <Camera className="size-6 text-vasc-400" /> ¡Abrí el cajón de los recuerdos!
            </p>
            <p className="mt-2 text-white/70">¿Tenés fotos retro del VASC? Compartilas con nosotros y ayudanos a mantener viva la memoria.</p>
            <div className="mt-5 grid gap-3 sm:w-fit sm:grid-cols-2">
              <ButtonLink href={whatsappLink("¡Hola! Tengo fotos antiguas del club para compartir.")} external variant="whatsapp" size="sm" className="w-full">
                <WhatsAppIcon className="size-4" /> Enviar por WhatsApp
              </ButtonLink>
              <ButtonLink href={site.social.instagram} external variant="light" size="sm" className="w-full">
                <InstagramIcon className="size-4" /> Por Instagram
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <Gallery images={archive} variant="archive" />
        </div>
      </div>
    </section>
  );
}
