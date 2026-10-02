import type { Metadata } from "next";
import { imageCredits } from "@/lib/credits";

export const metadata: Metadata = {
  title: "Créditos de imágenes",
  robots: { index: false },
};

export default function CreditosPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-36 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold uppercase">Créditos de imágenes</h1>
      <p className="mt-4 text-ink/65">Agradecemos a los autores que comparten su trabajo con licencias abiertas.</p>
      <ul className="mt-10 divide-y divide-ink/10">
        {imageCredits.map((c) => (
          <li key={c.file} className="py-4 text-sm">
            <p className="font-mono text-xs text-ink/65">{c.file}</p>
            <p className="mt-1">
              <span className="font-semibold">{c.author}</span> · {c.license} ·{" "}
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-vasc-600 underline">
                Fuente
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
