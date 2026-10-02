# Villa Allende Sport Club — Sitio institucional

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (31 páginas estáticas)
```

Deploy: importar el repo en Vercel y cargar las variables de `.env.example`.

## Estructura

- `app/` — rutas: `/`, `/disciplinas`, `/disciplinas/[slug]`, `/el-club`, `/socios`, `/noticias`, `/noticias/[slug]`, `/contacto`, `/creditos`, `sitemap.xml`, `robots.txt`, íconos y OpenGraph.
- `components/` — `layout/` (Header + drawer mobile, Footer con mapa, PageHeader, WhatsApp flotante), `ui/` (Button, Modal/Drawer, Logo, Reveal, SectionHeading), `disciplines/`, `news/`, `club/` (Gallery con lightbox, Timeline, StatsCounter), `membership/` (formulario → WhatsApp), `home/`.
- `lib/` — **todo el contenido editable**: `site.ts` (contacto, redes, horarios), `disciplines.ts`, `news.ts`, `history.ts`, `membership.ts`, `credits.ts`.
- `public/images/` — `brand/` (escudo), `historia/` (archivo restaurado), `sum/` (renders del S.U.M.), `disciplinas/` y `stock/` (fotos libres provisorias), `public/video/` (video del hero).

## Pendiente antes de publicar (buscar `TODO` en `lib/`)

1. Horarios y profesores de cada disciplina (`lib/disciplines.ts`, hoy "A confirmar").
2. Horarios de Secretaría y valores de cuota (`lib/site.ts`, `lib/membership.ts`).
3. Dominio definitivo (`NEXT_PUBLIC_SITE_URL`).
4. Reemplazar fotos de `stock/` y `disciplinas/` por fotos propias del club; al hacerlo, quitar su entrada en `lib/credits.ts`.

## Agregar una noticia

Sumar un objeto al principio del array en `lib/news.ts` y poner las imágenes en `public/images/`.
