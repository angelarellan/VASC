"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, ArrowRight, MapPin, Clock } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

/**
 * Header fijo. Transparente sobre el hero de la home y sólido al hacer
 * scroll o en páginas internas. En mobile abre un drawer lateral.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = pathname === "/" && !scrolled;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overHero ? "bg-transparent py-4" : "border-b border-ink/5 bg-white/95 py-2 shadow-sm md:bg-white/85 md:backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo tone={overHero ? "light" : "dark"} />

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  overHero ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ink"
                } ${isActive(item.href) ? (overHero ? "!text-white" : "!text-vasc-600") : ""}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-vasc-500" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <ButtonLink href="/socios#asociate" size="sm">
                Hacete Socio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
            </span>
            <button
              onClick={() => setOpen(true)}
              className={`grid size-11 place-items-center rounded-full transition lg:hidden ${
                overHero ? "bg-white/15 text-white md:backdrop-blur hover:bg-white/25" : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile */}
      <Modal open={open} onClose={close} variant="right" label="Menú de navegación">
        {/* Fondo: bastones finos + brillo rojo */}
        <div className="stripes h-1.5 w-full shrink-0" aria-hidden="true" />
        <div className="stripes-dark pointer-events-none absolute inset-0 top-1.5" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-vasc-500/25 blur-3xl" aria-hidden="true" />

        <div className="relative px-6 pb-2 pt-5">
          <Logo tone="light" />
        </div>

        <nav aria-label="Móvil" className="relative flex-1 overflow-y-auto px-6 pt-6">
          <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/60">Menú</p>
          <ul>
            {nav.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.href}
                  className={`border-b border-white/10 transition-all duration-500 ease-out ${
                    open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-4 py-4 transition-colors ${active ? "text-white" : "text-white/75 hover:text-white"}`}
                  >
                    <span className={`w-6 text-xs font-semibold tabular-nums ${active ? "text-vasc-400" : "text-white/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-[1.9rem] font-bold uppercase leading-none tracking-wide">{item.label}</span>
                    {active ? (
                      <span className="size-2.5 rounded-full bg-vasc-500 shadow-[0_0_12px] shadow-vasc-500" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="size-5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`relative space-y-5 border-t border-white/10 bg-white/[0.03] p-6 transition-all delay-300 duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/socios#asociate"
              onClick={close}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-vasc-500 text-sm font-semibold text-white shadow-lg shadow-vasc-500/30 transition hover:bg-vasc-600"
            >
              Hacete Socio
            </Link>
            <a
              href={whatsappLink("¡Hola! Quiero hacer una consulta al club.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#166534]"
            >
              <WhatsAppIcon className="size-4" /> Escribinos
            </a>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1.5 text-xs text-white/60">
              <p className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-vasc-400" /> {site.locations.sede.street}
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-vasc-400" /> {site.secretariaHours[0].days}, {site.secretariaHours[0].hours}
              </p>
            </div>
            <div className="flex gap-2">
              {[
                { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-vasc-500"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
