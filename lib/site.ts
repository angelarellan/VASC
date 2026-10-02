/**
 * Configuración central del sitio.
 * Todo dato institucional (contacto, redes, direcciones) vive acá para
 * poder actualizarlo en un solo lugar.
 */

export const site = {
  name: "Villa Allende Sport Club",
  shortName: "VASC",
  tagline: "La familia más grande de Villa Allende",
  description:
    "Club Deportivo Villa Allende: básquet, vóley, patín artístico, gimnasia rítmica, taekwondo, danzas, tango y más. 86 años formando deportistas y comunidad en Villa Allende, Córdoba.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://villaallendesportclub.com.ar",
  foundedAt: "1940-05-24",
  locale: "es_AR",

  /** WhatsApp de Secretaría, formato internacional sin "+" ni espacios. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5493543691919",
  /** Mismo número, formato para mostrar en pantalla. */
  whatsappDisplay: "+54 9 3543 69-1919",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "secretaria@villaallendesportclub.com.ar",

  social: {
    instagram: "https://www.instagram.com/villaallendesportcluboficial/",
    instagramHandle: "@villaallendesportcluboficial",
    facebook: "https://facebook.com/VillaAllendeSportClubVASC",
  },

  locations: {
    sede: {
      label: "Sede Social",
      street: "Av. Roque Sáenz Peña 444",
      reference: "Frente al Polideportivo Atilio Milondo",
      city: "Villa Allende",
      region: "Córdoba",
      postalCode: "5105",
      country: "AR",
      mapsQuery: "Villa Allende Sport Club, Villa Allende, Córdoba",
    },
    predio: {
      label: "Complejo Deportivo San Clemente",
      street: "Balcarce 70, B° San Clemente",
      reference: "Junto al arroyo Saldán",
      city: "Villa Allende",
      region: "Córdoba",
      postalCode: "5105",
      country: "AR",
      mapsQuery: "Complejo Sport Villa Allende, Balcarce 70, Villa Allende",
    },
  },

  // TODO: confirmar horarios de Secretaría.
  secretariaHours: [
    { days: "Lunes a viernes", hours: "17:00 a 21:00 hs" },
    { days: "Sábados", hours: "09:00 a 12:00 hs" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/disciplinas", label: "Disciplinas" },
  { href: "/el-club", label: "El Club" },
  { href: "/socios", label: "Socios" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

/** Años de historia calculados en base a la fecha de fundación. */
export function clubAge(now = new Date()): number {
  const founded = new Date(site.foundedAt);
  let age = now.getFullYear() - founded.getFullYear();
  const beforeAnniversary =
    now.getMonth() < founded.getMonth() ||
    (now.getMonth() === founded.getMonth() && now.getDate() < founded.getDate());
  if (beforeAnniversary) age -= 1;
  return age;
}

/** Link de WhatsApp con mensaje pre-cargado. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
