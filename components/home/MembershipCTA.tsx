import { ArrowRight, BadgePercent, CalendarHeart, Medal, Vote } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { clubAge, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const perks = [
  { Icon: Medal, text: "Cuotas preferenciales en disciplinas" },
  { Icon: BadgePercent, text: "% OFF en comercios adheridos" },
  { Icon: CalendarHeart, text: "Eventos y aniversarios" },
  { Icon: Vote, text: "Voz y voto en asambleas" },
];

/** Banner de captación de socios. */
export function MembershipCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-vasc-500 text-white shadow-2xl shadow-vasc-500/30">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-15 lg:block stripes" aria-hidden="true" />
        <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-2 lg:p-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">Socios</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.9] text-balance sm:text-7xl">
              Sumate a la familia más grande
            </h2>
            <p className="mt-6 max-w-md text-lg text-white">
              Ser socio es formar parte de {clubAge()} años de historia y ayudar a construir el club que viene.
            </p>
            <div className="mt-8 grid gap-3 sm:w-fit sm:grid-cols-2">
              <ButtonLink href="/socios" size="lg" className="w-full !bg-white !text-vasc-600 hover:!bg-ink hover:!text-white">
                Cómo asociarme <ArrowRight className="size-5" />
              </ButtonLink>
              <ButtonLink href={whatsappLink("¡Hola! Quiero hacerme socio del Villa Allende Sport Club.")} external size="lg" variant="light" className="w-full">
                <WhatsAppIcon /> Consultar
              </ButtonLink>
            </div>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
            {perks.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/20 md:backdrop-blur">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-vasc-600">
                  <Icon className="size-6" />
                </span>
                <span className="font-semibold leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
