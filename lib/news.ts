/**
 * Noticias y novedades del club.
 * Contenido tomado de las publicaciones del Instagram oficial.
 * Para agregar una noticia nueva, sumá un objeto al principio del array.
 */

export type NewsCategory = "Institucional" | "Obras" | "Recuerdos" | "Eventos" | "Socios" | "Disciplinas";

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  /** ISO date. Si no se conoce la fecha exacta, se omite. */
  date?: string;
  cover: string;
  images?: string[];
  body: string[];
}

export const news: NewsItem[] = [
  {
    slug: "un-paso-historico-estadio-techado-sum",
    title: "¡Un paso histórico! Avanza el futuro Estadio Techado / S.U.M.",
    excerpt:
      "Se realizaron los trabajos de agrimensura y toma de niveles en el predio de San Clemente. Compartimos los primeros renders y planos del proyecto.",
    category: "Obras",
    date: "2026-09-18",
    cover: "/images/sum/sum-render-exterior.jpg",
    images: ["/images/sum/sum-render-exterior.jpg", "/images/sum/sum-render-interior.jpg", "/images/sum/sum-agrimensura.jpg"],
    body: [
      "Los grandes proyectos no nacen de un día para el otro: se construyen con visión, gestión y el compromiso de toda nuestra comunidad.",
      "Hoy queremos compartir los avances del futuro Estadio Techado / Salón de Usos Múltiples (S.U.M.) en el predio de San Clemente. El pasado 5 de septiembre se llevaron a cabo los trabajos de agrimensura y toma de niveles sobre el terreno, un paso técnico indispensable para definir los cimientos y avanzar con las siguientes etapas de la obra.",
      "Porque este no es solo un techo o una estructura: es un espacio pensado para albergar más disciplinas, más chicos practicando deporte y nuevos eventos sociales para toda la ciudad.",
      "Gracias a cada socio, familia, vecino, a la municipalidad e instituciones que hacen que el Villa Allende Sport Club siga creciendo día a día. El futuro ya empezó.",
    ],
  },
  {
    slug: "raices-de-nuestra-historia",
    title: "Raíces de nuestra historia: fotos originales de los primeros socios",
    excerpt:
      "José Mario Albano, hijo de nuestro querido socio vitalicio José Albano, nos acercó un tesoro invaluable para el archivo histórico del club.",
    category: "Recuerdos",
    cover: "/images/historia/historia-socios-bar.jpg",
    images: [
      "/images/historia/historia-socios-bar.jpg",
      "/images/historia/historia-socios-gala.jpg",
      "/images/historia/historia-equipo-futbol.jpg",
      "/images/historia/historia-picnic.jpg",
    ],
    body: [
      "Queremos agradecer especialmente al Sr. José Mario Albano, hijo de nuestro querido socio vitalicio José Albano, por acercarnos un tesoro invaluable: fotografías originales de algunos de los primeros socios del Villa Allende Sport Club.",
      "Gracias a gestos como este, mantenemos viva la memoria de quienes soñaron y construyeron el club que hoy disfrutamos todos.",
    ],
  },
  {
    slug: "abri-el-cajon-de-los-recuerdos",
    title: "¡Abrí el cajón de los recuerdos!",
    excerpt:
      "¿Tenés fotos retro del VASC? Nos encantaría que las compartas con nosotros para sumarlas al archivo histórico.",
    category: "Recuerdos",
    cover: "/images/historia/historia-picnic.jpg",
    body: [
      "¿Tenés fotos retro del VASC? Nos encantaría que las compartas con nosotros.",
      "Podés enviarnos las fotos por Instagram o al WhatsApp del club. ¡Ayudanos a mantener viva la memoria!",
    ],
  },
  {
    slug: "86-aniversario",
    title: "¡86 años junto a vos!",
    excerpt: "El 24 de mayo celebramos un nuevo aniversario de la familia más grande de Villa Allende.",
    category: "Institucional",
    date: "2026-05-24",
    cover: "/images/historia/historia-socios-gala.jpg",
    body: [
      "El 24 de mayo de 1940 nueve vecinos soñaron un club. 86 años después, somos la familia más grande de Villa Allende.",
      "Gracias a cada socio, deportista, profe, dirigente y familia que hace posible esta historia todos los días.",
    ],
  },
  {
    slug: "jornada-de-puertas-abiertas",
    title: "La familia del Sport se reunió a festejar: jornada de puertas abiertas",
    excerpt:
      "Una tarde abierta, gratuita y familiar con exhibiciones de todas las disciplinas, música, baile y comidas típicas en la sede del club.",
    category: "Eventos",
    date: "2025-11-09",
    cover: "/images/disciplinas/gimnasia-ritmica-grupo.jpg",
    images: ["/images/disciplinas/gimnasia-ritmica-grupo.jpg", "/images/disciplinas/basquet-escuelita.jpg", "/images/club/sede-social-fachada.jpg"],
    body: [
      "El domingo 9 de noviembre, de 18 a 21 horas, el Villa Allende Sport Club abrió sus puertas frente al Polideportivo Atilio Milondo para compartir con toda la comunidad una jornada abierta, gratuita y familiar que reunió a todas las disciplinas y espacios de la institución.",
      "Hubo demostraciones deportivas, música, baile y comidas típicas, en un ambiente festivo pensado para celebrar el trabajo realizado durante el año y proyectar los nuevos desafíos del club.",
      "\"El club no es solo un espacio deportivo, sino también un lugar de encuentro y contención\", destacó Laura Comensaña, profesora de Gimnasia Rítmica. Hoy el Sport cuenta con entre 500 y 600 socios activos.",
      "\"El club lo formamos entre todos. Queremos que siga siendo un lugar de contención y encuentro para muchas familias de Villa Allende.\"",
    ],
  },
  {
    slug: "clases-de-tango",
    title: "¿Te gustaría bailar tango? En el club tenemos lo que buscabas",
    excerpt: "Abrimos clases de tango para todos los niveles, con o sin pareja. ¡Sumate a la milonga del Sport!",
    category: "Disciplinas",
    cover: "/images/disciplinas/tango-flyer.jpg",
    body: [
      "Sumamos clases de tango a la propuesta del club: un espacio para aprender, bailar y compartir.",
      "No hace falta experiencia ni pareja. Consultá días y horarios en Secretaría o por WhatsApp.",
    ],
  },
  {
    slug: "descuentos-para-socios",
    title: "Descuentos exclusivos para socios",
    excerpt: "Ser socio del VASC tiene beneficios: descuentos en comercios adheridos de Villa Allende.",
    category: "Socios",
    cover: "/images/stock/futbol-noche.jpg",
    body: [
      "Presentando tu carnet de socio al día accedés a descuentos en comercios adheridos de la ciudad.",
      "Seguí nuestras historias destacadas en Instagram para conocer todos los beneficios vigentes.",
    ],
  },
];

export function getNews(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function formatDate(iso?: string): string | null {
  if (!iso) return null;
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(iso),
  );
}
