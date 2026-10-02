import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-vasc-500/40 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-vasc-600 text-white shadow-lg shadow-vasc-600/25 hover:bg-vasc-700 hover:shadow-vasc-700/30 hover:-translate-y-0.5",
  secondary: "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
  outline: "border-2 border-vasc-500 text-vasc-600 hover:bg-vasc-500 hover:text-white",
  ghost: "text-ink hover:bg-ink/5",
  whatsapp: "bg-[#15803d] text-white shadow-lg shadow-[#15803d]/25 hover:bg-[#166534] hover:-translate-y-0.5",
  light: "border-2 border-white/80 text-white md:backdrop-blur-sm hover:bg-white hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

/** Botón con aspecto de link. Usa <a> para links externos. */
export function ButtonLink({ variant, size, className, children, external, href, ...rest }: ButtonLinkProps) {
  const cls = buttonClasses(variant, size, className);
  if (external) {
    return (
      <a href={href.toString()} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant, size, className = "", type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}
