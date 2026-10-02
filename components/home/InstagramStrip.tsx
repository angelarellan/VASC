import Image from "next/image";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

const tiles = [
  "/images/disciplinas/basquet-plantel.jpg",
  "/images/disciplinas/patin-medallas.jpg",
  "/images/disciplinas/tango-flyer.jpg",
  "/images/disciplinas/voley-femenino.jpg",
  "/images/disciplinas/danzas-show-86.jpg",
  "/images/historia/historia-socios-gala.jpg",
];

/** Franja tipo feed que invita a seguir el Instagram oficial. */
export function InstagramStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center">
          <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg transition group-hover:scale-110">
            <InstagramIcon className="size-7" />
          </span>
          <span className="mt-4 font-display text-3xl font-extrabold uppercase text-ink sm:text-4xl">Seguinos en Instagram</span>
          <span className="mt-1 font-semibold text-vasc-500 group-hover:underline">{site.social.instagramHandle}</span>
        </a>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-1 sm:grid-cols-6">
        {tiles.map((src) => (
          <a key={src} href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden" aria-label="Ver en Instagram">
            <Image src={src} alt="" fill sizes="(min-width:640px) 17vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" />
            <span className="absolute inset-0 grid place-items-center bg-vasc-500/0 transition group-hover:bg-vasc-500/70">
              <InstagramIcon className="size-8 text-white opacity-0 transition group-hover:opacity-100" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
