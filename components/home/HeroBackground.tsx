"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** Fotos del carrusel: todas reales del club. */
const slides = [
  "/images/club/cancha-vasc.jpg",
  "/images/disciplinas/basquet-formativas.jpg",
  "/images/disciplinas/patin-medallas.jpg",
  "/images/disciplinas/gimnasia-ritmica-grupo.jpg",
  "/images/disciplinas/basquet-plantel.jpg",
  "/images/historia/historia-equipo-futbol.jpg",
  "/images/sum/sum-render-interior.jpg",
];

const SLIDE_MS = 4500;
/** El video sólo se usa en pantallas grandes y conexiones normales. */
const VIDEO_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/**
 * Fondo del hero: carrusel automático de fotos (fundido + zoom lento) y, en
 * desktop, un video en loop que se carga recién cuando la página terminó de
 * cargar. Así la portada pinta al instante y las disciplinas "se cambian
 * solas" siempre, aunque el navegador bloquee el autoplay.
 *
 * Rendimiento: sólo se montan la foto actual y la siguiente (no las 7).
 */
export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [index, setIndex] = useState(0);

  // Decide si cargar el video, después del evento load y en un momento ocioso.
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!window.matchMedia(VIDEO_QUERY).matches || conn?.saveData) return;
    let idleId = 0;
    const start = () => {
      const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
      idleId = ric(() => setLoadVideo(true)) as number;
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      window.cancelIdleCallback?.(idleId);
    };
  }, []);

  // Reproduce el video cuando su fuente ya está montada.
  useEffect(() => {
    const v = videoRef.current;
    if (!loadVideo || !v) return;
    v.muted = true;
    const onPlaying = () => setVideoPlaying(true);
    const onStop = () => setVideoPlaying(false);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("pause", onStop);
    v.addEventListener("error", onStop);
    v.load();
    v.play().catch(onStop);
    return () => {
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", onStop);
      v.removeEventListener("error", onStop);
    };
  }, [loadVideo]);

  // Carrusel: avanza mientras el video no se está reproduciendo.
  useEffect(() => {
    if (videoPlaying) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [videoPlaying]);

  const next = (index + 1) % slides.length;

  return (
    <div className="absolute inset-0 -z-30 overflow-hidden" aria-hidden="true">
      {slides.map((src, i) =>
        i === index || i === next ? (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="low"
            quality={50}
            className={`object-cover transition-[opacity,transform] ease-out ${
              i === index ? "scale-110 opacity-100 duration-[1200ms,6000ms]" : "scale-100 opacity-0 duration-[1200ms,0ms]"
            }`}
          />
        ) : null,
      )}
      {loadVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${videoPlaying ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/hero-vasc.webm" type="video/webm" />
          <source src="/video/hero-vasc.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
