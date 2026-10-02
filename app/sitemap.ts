import type { MetadataRoute } from "next";
import { disciplines } from "@/lib/disciplines";
import { news } from "@/lib/news";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/disciplinas", "/el-club", "/socios", "/noticias", "/contacto"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return [
    ...staticRoutes,
    ...disciplines.map((d) => ({ url: `${site.url}/disciplinas/${d.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...news.map((n) => ({ url: `${site.url}/noticias/${n.slug}`, lastModified: n.date, priority: 0.6 })),
  ];
}
