"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { disciplines } from "@/lib/disciplines";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const field =
  "w-full rounded-2xl border-0 bg-paper px-4 py-3.5 text-ink ring-1 ring-ink/10 transition placeholder:text-ink/35 focus:bg-white focus:outline-none focus:ring-2 focus:ring-vasc-500";

/**
 * Formulario de consulta. No requiere backend: arma el mensaje y abre
 * WhatsApp de Secretaría con los datos precargados.
 */
export function MembershipForm({ defaultTopic = "Quiero hacerme socio" }: { defaultTopic?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "¡Hola VASC! 👋",
      `Motivo: ${data.get("topic")}`,
      `Nombre: ${data.get("name")}`,
      data.get("age") ? `Edad: ${data.get("age")}` : null,
      data.get("discipline") ? `Disciplina de interés: ${data.get("discipline")}` : null,
      data.get("message") ? `Mensaje: ${data.get("message")}` : null,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">Nombre y apellido *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Juan Pérez" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">Edad del interesado/a</span>
          <input name="age" inputMode="numeric" className={field} placeholder="Ej: 9" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">Motivo</span>
          <select name="topic" defaultValue={defaultTopic} className={field}>
            <option>Quiero hacerme socio</option>
            <option>Consulta por una disciplina</option>
            <option>Cuotas y pagos</option>
            <option>Alquiler de instalaciones</option>
            <option>Otra consulta</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink/80">Disciplina</span>
          <select name="discipline" defaultValue="" className={field}>
            <option value="">Ninguna en particular</option>
            {disciplines.map((d) => (
              <option key={d.slug}>{d.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink/80">Mensaje</span>
        <textarea name="message" rows={4} className={field} placeholder="Contanos en qué te podemos ayudar" />
      </label>
      <button
        type="submit"
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#15803d] font-semibold text-white shadow-lg shadow-[#15803d]/25 transition hover:-translate-y-0.5 hover:bg-[#166534]"
      >
        <WhatsAppIcon /> Enviar por WhatsApp <Send className="size-4" />
      </button>
      <p className="text-center text-xs text-ink/65" aria-live="polite">
        {sent ? "¡Listo! Se abrió WhatsApp con tu mensaje. Si no se abrió, revisá el bloqueador de ventanas." : "Al enviar se abrirá WhatsApp con tu consulta lista para mandar."}
      </p>
    </form>
  );
}
