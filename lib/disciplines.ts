/**
 * Catálogo de disciplinas del club.
 * Fuente: destacados del Instagram oficial e historia institucional.
 *
 * Los campos marcados con TODO (horarios, profesores) deben completarse
 * con la información de Secretaría antes de publicar.
 */

export type DisciplineCategory = "equipo" | "individual" | "recreativo";
export type AgeGroup = "Infantil" | "Juvenil" | "Mayores" | "Adultos +60";

export interface ScheduleSlot {
  group: string;
  days: string;
  hours: string;
}

export interface Discipline {
  slug: string;
  name: string;
  category: DisciplineCategory;
  /** Bajada corta para la tarjeta. */
  summary: string;
  /** Texto largo para la página de detalle. */
  description: string;
  image: string;
  gallery: string[];
  ages: AgeGroup[];
  coach: string;
  schedule: ScheduleSlot[];
  venue: string;
  highlights: string[];
  featured?: boolean;
}

export const categoryLabels: Record<DisciplineCategory | "todos", string> = {
  todos: "Todos",
  equipo: "Deportes de Equipo",
  individual: "Individuales",
  recreativo: "Recreativos",
};

const TBD_COACH = "Profesor/a a confirmar";
const TBD = "A confirmar";

export const disciplines: Discipline[] = [
  {
    slug: "basquet",
    name: "Básquet",
    category: "equipo",
    featured: true,
    summary: "Escuelita, formativas y primera. El deporte que hace vibrar la cancha albirroja.",
    description:
      "El básquet es una de las disciplinas insignia del Villa Allende Sport Club. Desde la escuelita para los más chicos hasta las categorías formativas y mayores, trabajamos los fundamentos, el juego en equipo y los valores que nos identifican dentro y fuera de la cancha. Con el futuro Estadio Techado en San Clemente, el básquet tendrá la casa que se merece.",
    image: "/images/club/cancha-vasc.jpg",
    gallery: [
      "/images/disciplinas/basquet-plantel.jpg",
      "/images/disciplinas/basquet-primera.jpg",
      "/images/disciplinas/basquet-mini.jpg",
      "/images/club/cancha-vasc.jpg",
      "/images/disciplinas/basquet-escuelita.jpg",
      "/images/disciplinas/basquet-formativas.jpg",
      "/images/disciplinas/basquet-banco.jpg",
      "/images/disciplinas/basquet-charla.jpg",
      "/images/sum/sum-render-interior.jpg",
    ],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [
      { group: "Escuelita (6 a 10 años)", days: TBD, hours: TBD },
      { group: "Formativas (U11 a U17)", days: TBD, hours: TBD },
      { group: "Primera", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Escuelita mixta", "Competencia federada", "Futuro estadio techado"],
  },
  {
    slug: "voley",
    name: "Vóley",
    category: "equipo",
    featured: true,
    summary: "Mini vóley, juveniles y mayores femenino. Saque, bloqueo y mucho equipo.",
    description:
      "El vóley crece año a año en el club. Entrenamos técnica, táctica y preparación física en un ambiente de compañerismo, con equipos juveniles y de mayores que compiten en torneos, y la nueva categoría de Mini Vóley mixto para chicos y chicas de 9 a 13 años.",
    image: "/images/disciplinas/voley-femenino.jpg",
    gallery: [
      "/images/disciplinas/voley-femenino.jpg",
      "/images/disciplinas/voley-juveniles.jpg",
      "/images/disciplinas/voley-entrenador.jpg",
      "/images/disciplinas/voley-mini-flyer.jpg",
    ],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: "Prof. Miguel",
    schedule: [
      { group: "Mini Vóley mixto (9 a 13 años)", days: "Viernes", hours: "18:00 a 20:00 hs" },
      { group: "Juveniles", days: TBD, hours: TBD },
      { group: "Mayores femenino", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Nuevo: Mini Vóley mixto", "Juveniles en competencia", "Mayores femenino"],
  },
  {
    slug: "futbol",
    name: "Fútbol",
    category: "equipo",
    summary: "Donde todo empezó en 1940. Campeones de la Liga Regional Colón en 1953, 1968 y 1972.",
    description:
      "El Sport Club nació en 1940 para tener un lugar donde jugar al fútbol. Con la cancha de Barrio San Clemente inaugurada en 1953, el albirrojo de bastones verticales se consagró campeón de la Liga Regional Colón en 1953, 1968 y 1972. Hoy mantenemos viva esa pasión con propuestas para chicos y grandes.",
    image: "/images/stock/futbol-infantil.jpg",
    gallery: ["/images/stock/futbol-infantil.jpg", "/images/historia/historia-equipo-futbol.jpg", "/images/stock/futbol-cancha.jpg"],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [
      { group: "Infantiles", days: TBD, hours: TBD },
      { group: "Juveniles", days: TBD, hours: TBD },
    ],
    venue: "Predio San Clemente",
    highlights: ["3 títulos de Liga Regional Colón", "Cancha propia desde 1953", "Historia fundacional"],
  },
  {
    slug: "patin-artistico",
    name: "Patín Artístico",
    category: "individual",
    featured: true,
    summary: "Técnica, expresión y show. Escuela, competencia y festivales de fin de año.",
    description:
      "El patín artístico combina disciplina deportiva y arte. Nuestras patinadoras y patinadores aprenden desde los primeros pasos sobre ruedas hasta coreografías de competencia, con festivales y muestras que llenan de orgullo a las familias del club.",
    image: "/images/disciplinas/patin-medallas.jpg",
    gallery: ["/images/disciplinas/patin-medallas.jpg", "/images/disciplinas/patin-flyer.jpg"],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [
      { group: "Escuela (iniciación)", days: TBD, hours: TBD },
      { group: "Competencia", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Desde los 4 años", "Muestras anuales", "Torneos provinciales"],
  },
  {
    slug: "gimnasia-ritmica",
    name: "Gimnasia Rítmica",
    category: "individual",
    summary: "Cinta, aro, pelota y mazas. Elegancia, flexibilidad y mucha disciplina.",
    description:
      "La gimnasia rítmica desarrolla coordinación, flexibilidad, musicalidad y confianza. Trabajamos con elementos (cinta, aro, pelota, mazas y cuerda) en grupos por edad y nivel, con participación en encuentros y torneos.",
    image: "/images/disciplinas/gimnasia-ritmica-grupo.jpg",
    gallery: ["/images/disciplinas/gimnasia-ritmica-grupo.jpg"],
    ages: ["Infantil", "Juvenil"],
    coach: "Prof. Laura Comensaña",
    schedule: [
      { group: "Iniciación", days: TBD, hours: TBD },
      { group: "Avanzadas", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Trabajo con elementos", "Encuentros y torneos", "Grupos por nivel"],
  },
  {
    slug: "taekwondo",
    name: "Taekwondo",
    category: "individual",
    featured: true,
    summary: "Arte marcial olímpico: respeto, autocontrol y técnica para todas las edades.",
    description:
      "El taekwondo forma cuerpo y carácter. En nuestras clases se trabaja técnica, formas, combate y exámenes de graduación, siempre con los valores de respeto, perseverancia y autocontrol que caracterizan a este arte marcial olímpico.",
    image: "/images/disciplinas/taekwondo-familia.jpg",
    gallery: ["/images/disciplinas/taekwondo-familia.jpg"],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [
      { group: "Infantiles", days: TBD, hours: TBD },
      { group: "Juveniles y adultos", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Exámenes de graduación", "Deporte olímpico", "Clases mixtas"],
  },
  {
    slug: "aikido",
    name: "Aikido",
    category: "individual",
    summary: "Arte marcial japonés de armonía y defensa personal. Sin competencia, todo aprendizaje.",
    description:
      "El aikido es un arte marcial de origen japonés basado en la armonía del movimiento y el uso de la energía del compañero. Ideal para jóvenes y adultos que buscan defensa personal, concentración y bienestar.",
    image: "/images/stock/artes-marciales.jpg",
    gallery: ["/images/stock/artes-marciales.jpg"],
    ages: ["Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [{ group: "Jóvenes y adultos", days: TBD, hours: TBD }],
    venue: "Sede Social",
    highlights: ["Defensa personal", "Concentración", "Para todas las condiciones físicas"],
  },
  {
    slug: "danzas",
    name: "Estudio de Danzas",
    category: "recreativo",
    summary: "Ritmos, expresión y escenario. Clases para chicas, chicos y grandes.",
    description:
      "Nuestro Estudio de Danzas es un espacio de expresión, técnica y alegría. Clases por edades con muestras de fin de año, para descubrir el movimiento y compartir el escenario con amigos.",
    image: "/images/disciplinas/danzas-show-86.jpg",
    gallery: ["/images/disciplinas/danzas-show-86.jpg", "/images/disciplinas/danzas-grupo.jpg"],
    ages: ["Infantil", "Juvenil", "Mayores"],
    coach: TBD_COACH,
    schedule: [
      { group: "Infantiles", days: TBD, hours: TBD },
      { group: "Adolescentes y adultos", days: TBD, hours: TBD },
    ],
    venue: "Sede Social",
    highlights: ["Muestra anual", "Grupos por edad", "Expresión artística"],
  },
  {
    slug: "tango",
    name: "Tango",
    category: "recreativo",
    featured: true,
    summary: "¿Te gustaría bailar tango? En el club tenemos lo que buscabas.",
    description:
      "Clases de tango para principiantes y avanzados, en pareja o sin pareja. Un espacio social para aprender nuestra danza más emblemática, compartir milongas y hacer nuevos amigos en la sede del club.",
    image: "/images/disciplinas/tango-flyer.jpg",
    gallery: ["/images/disciplinas/tango-flyer.jpg"],
    ages: ["Mayores", "Adultos +60"],
    coach: TBD_COACH,
    schedule: [{ group: "Principiantes y avanzados", days: TBD, hours: TBD }],
    venue: "Sede Social",
    highlights: ["Con o sin pareja", "Milongas sociales", "Todos los niveles"],
  },
  {
    slug: "gimnasia-adultos",
    name: "Gimnasia Adultos Mayores",
    category: "recreativo",
    summary: "Movimiento, salud y encuentro para nuestros socios de más de 60.",
    description:
      "Actividad física adaptada para adultos mayores: movilidad, fuerza, equilibrio y, sobre todo, un espacio de encuentro y amistad dentro de la gran familia del club.",
    image: "/images/stock/gimnasio.jpg",
    gallery: ["/images/stock/gimnasio.jpg"],
    ages: ["Adultos +60"],
    coach: TBD_COACH,
    schedule: [{ group: "Adultos mayores", days: TBD, hours: TBD }],
    venue: "Sede Social",
    highlights: ["Actividad adaptada", "Salud y bienestar", "Espacio social"],
  },
];

/** Campos que usa la tarjeta: es lo único que se envía al componente cliente. */
export type DisciplineCardData = Pick<Discipline, "slug" | "name" | "category" | "summary" | "image" | "ages" | "coach" | "schedule" | "venue">;

export function toCardData({ slug, name, category, summary, image, ages, coach, schedule, venue }: Discipline): DisciplineCardData {
  return { slug, name, category, summary, image, ages, coach, schedule, venue };
}

export function getDiscipline(slug: string): Discipline | undefined {
  return disciplines.find((d) => d.slug === slug);
}
