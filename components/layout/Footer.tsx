import Link from "next/link";
import { Clock, Mail, MapPin, Navigation, Map as MapIcon } from "lucide-react";
import { nav, site, whatsappLink, mapsLink, clubAge } from "@/lib/site";
import { disciplines } from "@/lib/disciplines";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

/**
 * Footer con información local (GEO): las dos sedes en tarjetas compactas
 * con "Cómo llegar" (los mapas interactivos viven en /contacto), horarios,
 * contacto y redes.
 */
export function Footer() {
  const sedes = [site.locations.sede, site.locations.predio];
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="stripes h-1.5 w-full" />
      <div className="stripes-dark absolute inset-0 top-1.5" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Sedes */}
        <div className="grid gap-4 border-b border-white/10 py-12 md:grid-cols-2">
          {sedes.map((l, i) => (
            <div
              key={l.label}
              className="group relative flex items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-vasc-500/60 hover:bg-white/[0.07] sm:p-6"
            >
              <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-vasc-500 shadow-lg shadow-vasc-500/30">
                <MapPin className="size-6" />
                <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-white font-display text-xs font-extrabold text-vasc-600">
                  {i + 1}
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xl font-bold uppercase leading-tight tracking-wide">{l.label}</p>
                <p className="mt-0.5 text-sm text-white/70">
                  {l.street}, {l.city}
                </p>
                <p className="text-xs text-white/60">{l.reference}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <a
                  href={mapsLink(l.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cómo llegar a ${l.label}`}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-ink transition hover:bg-vasc-500 hover:text-white"
                >
                  <Navigation className="size-4" />
                  <span className="hidden sm:inline">Cómo llegar</span>
                </a>
                <Link
                  href="/contacto"
                  aria-label={`Ver mapa de ${l.label}`}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-3 text-white/80 transition hover:border-white hover:text-white"
                >
                  <MapIcon className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              Desde 1940, {clubAge()} años siendo la familia más grande de Villa Allende. Deporte, tradición y comunidad en el
              corazón de las Sierras Chicas.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: whatsappLink("¡Hola! Quiero hacer una consulta al club."), label: "WhatsApp", Icon: WhatsAppIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-vasc-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider">El club</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider">Disciplinas</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {disciplines.slice(0, 7).map((d) => (
                  <li key={d.slug}>
                    <Link href={`/disciplinas/${d.slug}`} className="transition hover:text-white">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacto */}
          <address className="space-y-5 not-italic lg:col-span-4">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider">Secretaría</h3>
            <div className="flex gap-3 text-sm text-white/70">
              <Clock className="mt-0.5 size-5 shrink-0 text-vasc-400" />
              <span>
                {site.secretariaHours.map((h) => (
                  <span key={h.days} className="block">
                    <span className="text-white">{h.days}:</span> {h.hours}
                  </span>
                ))}
              </span>
            </div>
            <a
              href={whatsappLink("¡Hola! Quiero hacer una consulta al club.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 text-sm text-white/70 transition hover:text-white"
            >
              <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-vasc-400" />
              {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex gap-3 break-all text-sm text-white/70 transition hover:text-white">
              <Mail className="mt-0.5 size-5 shrink-0 text-vasc-400" />
              {site.email}
            </a>
          </address>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-xs text-white/60 sm:text-left">
          <p>
            © {year} {site.name}. Villa Allende, Córdoba, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
