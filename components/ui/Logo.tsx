import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** "light" para fondos oscuros. */
  tone?: "dark" | "light";
  className?: string;
  showText?: boolean;
}

/** Escudo oficial + nombre del club. */
export function Logo({ tone = "dark", className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/images/brand/logo-vasc.png"
        alt={showText ? "" : "Villa Allende Sport Club"}
        width={48}
        height={48}
        className="size-11 drop-shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 md:size-12"
        loading="eager"
      />
      {showText && (
        <span className={`font-display leading-none ${tone === "light" ? "text-white" : "text-ink"}`}>
          <span className="block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-vasc-500">Villa Allende</span>
          <span className="block text-xl font-extrabold uppercase tracking-wide md:text-2xl">Sport Club</span>
        </span>
      )}
    </Link>
  );
}
