import type { Metadata } from "next";
import { BadgePercent, Building, CalendarHeart, Heart, Medal, Vote } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { MembershipForm } from "@/components/membership/MembershipForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { membershipBenefits, membershipPlans, membershipSteps } from "@/lib/membership";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Socios · Hacete socio",
  description: "Cómo asociarte al Villa Allende Sport Club: pasos, categorías y beneficios para socios en Villa Allende, Córdoba.",
  alternates: { canonical: "/socios" },
};

const benefitIcons = [Medal, BadgePercent, CalendarHeart, Vote, Building, Heart];

export default function SociosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Socios & Secretaría"
        title={
          <>
            Hacete <span className="text-vasc-400">socio</span>
          </>
        }
        description="Sumate a la familia más grande de Villa Allende. Tu cuota sostiene las disciplinas, el archivo histórico y el nuevo Estadio Techado."
        image="/images/stock/futbol-infantil.jpg"
      >
        <div className="grid gap-3 sm:w-fit sm:grid-cols-2">
          <ButtonLink href="#asociate" size="lg" className="w-full">
            Quiero asociarme
          </ButtonLink>
          <ButtonLink href={whatsappLink("¡Hola! Quiero hacerme socio del Villa Allende Sport Club.")} external variant="whatsapp" size="lg" className="w-full">
            <WhatsAppIcon /> WhatsApp Secretaría
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Pasos */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Cómo asociarse" title="4 pasos y ya sos parte" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {membershipSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="relative overflow-hidden rounded-3xl bg-paper p-7 ring-1 ring-ink/5">
                <span aria-hidden="true" data-step={`0${i + 1}`} className="block font-display text-8xl font-extrabold leading-none text-vasc-500/15 before:content-[attr(data-step)]" />
                <span className="sr-only">Paso {i + 1}: </span>
                <h3 className="-mt-6 font-display text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading tone="light" eyebrow="Beneficios" title="Ser socio tiene sus ventajas" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <Reveal key={b.title} delay={i * 60} className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-vasc-500">
                  <span className="grid size-12 place-items-center rounded-2xl bg-vasc-500 transition group-hover:rotate-6">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{b.text}</p>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {membershipPlans.map((p) => (
              <div key={p.name} className={`rounded-3xl p-6 ${p.highlight ? "bg-vasc-500" : "bg-white/5 ring-1 ring-white/10"}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${p.highlight ? "text-white" : "text-white/70"}`}>{p.detail}</p>
                <p className="mt-2 font-display text-3xl font-extrabold uppercase">{p.name}</p>
                <p className={`mt-4 text-sm ${p.highlight ? "text-white" : "text-white/80"}`}>Cuota: {p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="asociate" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Secretaría"
              title="Empezá hoy"
              description="Dejanos tus datos y te respondemos por WhatsApp. También podés acercarte a la sede."
            />
            <div className="mt-8 rounded-3xl bg-paper p-6 text-sm ring-1 ring-ink/5">
              <p className="font-semibold">{site.locations.sede.label}</p>
              <p className="text-ink/65">
                {site.locations.sede.street}, {site.locations.sede.city}
              </p>
              <div className="mt-4 space-y-1 text-ink/65">
                {site.secretariaHours.map((h) => (
                  <p key={h.days}>
                    <span className="font-medium text-ink">{h.days}:</span> {h.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-ink/10 ring-1 ring-ink/5 sm:p-10 lg:col-span-3">
            <MembershipForm />
          </div>
        </div>
      </section>
    </>
  );
}
