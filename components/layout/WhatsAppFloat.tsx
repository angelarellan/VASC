import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

/** Botón flotante de WhatsApp, siempre visible (pensado para mobile). */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("¡Hola VASC! Quiero hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Secretaría"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3 text-white sm:bottom-5 sm:right-5 sm:p-4 shadow-xl shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe5b]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
      <WhatsAppIcon className="size-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 sm:inline">
        Secretaría
      </span>
    </a>
  );
}
