"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu, ArrowRight, MapPin } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

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
        <div className="stripes h-2 w-full" />
        <div className="px-6 pb-4 pt-6">
          <Logo />
        </div>
        <nav aria-label="Móvil" className="flex-1 overflow-y-auto px-3">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-bold uppercase tracking-wide transition ${
                isActive(item.href) ? "bg-vasc-50 text-vasc-600" : "text-ink hover:bg-paper"
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
              <ArrowRight className="size-5 opacity-40" />
            </Link>
          ))}
        </nav>
        <div className="space-y-3 border-t border-ink/5 p-6">
          <ButtonLink href="/socios#asociate" onClick={close} className="w-full" size="lg">
            Hacete Socio
          </ButtonLink>
          <ButtonLink href={whatsappLink("¡Hola! Quiero hacer una consulta al club.")} external variant="whatsapp" className="w-full">
            <WhatsAppIcon /> Escribinos
          </ButtonLink>
          <div className="flex items-center justify-between pt-2 text-sm text-ink/60">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-vasc-500" /> {site.locations.sede.street}
            </span>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-vasc-500">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
