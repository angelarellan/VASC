import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-paper px-4 pt-24 text-center">
      <div>
        <Image src="/images/brand/logo-vasc.png" alt="" width={110} height={110} className="mx-auto" />
        <p className="mt-6 font-display text-8xl font-extrabold text-vasc-500">404</p>
        <h1 className="font-display text-3xl font-bold uppercase">¡Pelota afuera!</h1>
        <p className="mt-2 text-ink/60">La página que buscás no existe o cambió de lugar.</p>
        <ButtonLink href="/" className="mt-8">
          Volver al inicio
        </ButtonLink>
      </div>
    </section>
  );
}
