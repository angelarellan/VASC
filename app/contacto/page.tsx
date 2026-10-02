import type { Metadata } from "next";
import { Clock, Mail, MapPin, Navigation } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { MembershipForm } from "@/components/membership/MembershipForm";
import { ButtonLink } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { mapsEmbedUrl, mapsLink, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto · Secretaría",
  description: `Contacto del Villa Allende Sport Club: ${site.locations.sede.street}, Villa Allende, Córdoba. Horarios de Secretaría, WhatsApp y redes.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const locations = [site.locations.sede, site.locations.predio];

  return (
    <>
      <PageHeader eyebrow="Contacto" title="Hablemos" description="Secretaría te responde consultas sobre disciplinas, cuotas, inscripciones y alquiler de instalaciones." image="/images/club/sede-social-fachada.jpg">
        <ButtonLink href={whatsappLink("¡Hola! Quiero hacer una consulta al club.")} external variant="whatsapp" size="lg">
          <WhatsAppIcon /> Escribir por WhatsApp
        </ButtonLink>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-5 lg:col-span-2">
            {locations.map((l) => (
              <div key={l.label} className="overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 shadow-sm">
                <MapEmbed title={`Mapa: ${l.label}`} src={mapsEmbedUrl(l.mapsQuery)} className="h-48 w-full" />
                <div className="flex items-start justify-between gap-4 p-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-vasc-500" />
                    <div>
                      <p className="font-semibold">{l.label}</p>
                      <p className="text-sm text-ink/60">
                        {l.street}, {l.city}, {l.region}
                      </p>
                      <p className="text-xs text-ink/65">{l.reference}</p>
                    </div>
                  </div>
                  <a href={mapsLink(l.mapsQuery)} target="_blank" rel="noopener noreferrer" className="grid size-10 shrink-0 place-items-center rounded-full bg-vasc-50 text-vasc-600 transition hover:bg-vasc-500 hover:text-white" aria-label={`Cómo llegar a ${l.label}`}>
                    <Navigation className="size-4" />
                  </a>
                </div>
              </div>
            ))}

            <div className="rounded-3xl bg-ink p-6 text-white">
              <p className="flex items-center gap-2 font-display text-xl font-bold uppercase">
                <Clock className="size-5 text-vasc-500" /> Horarios de Secretaría
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {site.secretariaHours.map((h) => (
                  <li key={h.days} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/70">{h.days}</span>
                    <span className="font-semibold">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <a href={whatsappLink("¡Hola! Quiero hacer una consulta al club.")} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <WhatsAppIcon className="size-4 text-[#25D366]" /> {site.whatsappDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <Mail className="size-4 text-vasc-500" /> {site.email}
              </a>
              <div className="mt-5 flex gap-3">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-vasc-500">
                  <InstagramIcon />
                </a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-vasc-500">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-ink/10 ring-1 ring-ink/5 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-4xl font-extrabold uppercase">Envianos tu consulta</h2>
            <p className="mb-8 mt-2 text-ink/60">Completá el formulario y se abrirá WhatsApp con tu mensaje listo.</p>
            <MembershipForm defaultTopic="Otra consulta" />
          </div>
        </div>
      </section>
    </>
  );
}
