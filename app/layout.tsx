import type { Metadata, Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site } from "@/lib/site";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#e53935",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Club Deportivo en Villa Allende, Córdoba`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Villa Allende Sport Club",
    "VASC",
    "Club Deportivo Villa Allende",
    "club Villa Allende",
    "básquet Villa Allende",
    "vóley Villa Allende",
    "patín artístico Villa Allende",
    "taekwondo Villa Allende",
    "gimnasia rítmica Córdoba",
    "tango Villa Allende",
    "Sierras Chicas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — La familia más grande de Villa Allende`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/** Datos estructurados para buscadores y motores de IA (Schema.org SportsClub). */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: site.name,
  alternateName: [site.shortName, "Club Deportivo Villa Allende", "Sport Club Villa Allende"],
  url: site.url,
  logo: `${site.url}/images/brand/logo-vasc.png`,
  image: `${site.url}/opengraph-image.jpg`,
  foundingDate: site.foundedAt,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.locations.sede.street,
    addressLocality: site.locations.sede.city,
    addressRegion: site.locations.sede.region,
    postalCode: site.locations.sede.postalCode,
    addressCountry: site.locations.sede.country,
  },
  telephone: `+${site.whatsapp}`,
  location: [site.locations.sede, site.locations.predio].map((l) => ({
    "@type": "Place",
    name: l.label,
    address: {
      "@type": "PostalAddress",
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: l.region,
      postalCode: l.postalCode,
      addressCountry: l.country,
    },
  })),
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${barlow.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-vasc-500 focus:px-4 focus:py-2 focus:text-white">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
