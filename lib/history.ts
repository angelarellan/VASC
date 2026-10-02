/**
 * Hitos institucionales.
 * Fuentes: La Unión Regional ("Los 80 del Sport Club"), Estadios Cordobeses
 * y publicaciones del Instagram oficial.
 */

export interface Milestone {
  year: string;
  title: string;
  text: string;
  image?: string;
}

export const founders = [
  "Benjamín Cáceres",
  "Tomás Ceballos",
  "José Amato",
  "Raúl Escalante",
  "Juan Foropón",
  "Atilio Maluf",
  "Julio Maluf",
  "Mario Monje",
  "Ángel Perassi",
];

export const milestones: Milestone[] = [
  {
    year: "1940",
    title: "Nace el Sport Club",
    text: "El 24 de mayo, de la fusión de Recreativo Sport Argentino y Villa Allende Foot Ball, nueve socios fundadores aportan un peso cada uno y dan vida al Villa Allende Sport Club. La primera cancha estuvo en calle 25 de Mayo, junto al arroyo.",
    image: "/images/historia/historia-socios-bar.jpg",
  },
  {
    year: "1953",
    title: "Cancha propia y primer título",
    text: "Se inaugura el campo deportivo de Barrio San Clemente y el albirrojo se consagra campeón de la Liga Regional Colón por primera vez.",
    image: "/images/historia/historia-equipo-futbol.jpg",
  },
  {
    year: "1956",
    title: "La sede social",
    text: "El club comienza a funcionar en la sede de Av. Roque Sáenz Peña, que en 1970 pasaría a ser propiedad de la institución. Hoy, frente al Polideportivo Atilio Milondo, sigue siendo nuestra casa.",
    image: "/images/club/sede-social-fachada.jpg",
  },
  {
    year: "1968",
    title: "Bicampeones de la Liga Regional",
    text: "Segundo título de la Liga Regional Colón, en una época dorada en la que el club también sumaba básquet, bochas, ciclismo, boxeo y patín.",
  },
  {
    year: "1972",
    title: "El tercer campeonato",
    text: "Tercera estrella para \"el glorioso\". El Sport Club disputó 21 temporadas en la Liga Regional Colón entre 1953 y 1999.",
  },
  {
    year: "1980s",
    title: "Un club de muchas disciplinas",
    text: "El club se transforma: básquet, vóley, taekwondo, aikido, gimnasia rítmica y actividades para adultos mayores pasan a ser el corazón de la vida institucional.",
    image: "/images/historia/historia-picnic.jpg",
  },
  {
    year: "2026",
    title: "86 años y un sueño que toma forma",
    text: "Celebramos 86 años junto a la comunidad y comienzan los trabajos de agrimensura para el futuro Estadio Techado / S.U.M. en el predio de San Clemente.",
    image: "/images/sum/sum-render-exterior.jpg",
  },
];

export const values = [
  { title: "Comunidad", text: "Somos la familia más grande de Villa Allende: socios, deportistas, familias y vecinos." },
  { title: "Tradición", text: "Desde 1940 honramos el legado de quienes soñaron y construyeron el club." },
  { title: "Formación", text: "El deporte como escuela de valores: respeto, esfuerzo y compañerismo." },
  { title: "Inclusión", text: "Actividades para todas las edades, desde la escuelita hasta los adultos mayores." },
];

export const archive = [
  { src: "/images/historia/historia-socios-bar.jpg", caption: "Primeros socios del club. Gentileza de José Mario Albano." },
  { src: "/images/historia/historia-equipo-futbol.jpg", caption: "Plantel albirrojo de bastones verticales." },
  { src: "/images/historia/historia-socios-gala.jpg", caption: "Encuentro de socios en la sede." },
  { src: "/images/historia/historia-plantel-campeon.jpg", caption: "Plantel histórico de fútbol del Sport Club." },
  { src: "/images/historia/historia-picnic.jpg", caption: "Las familias del club, siempre presentes." },
];
