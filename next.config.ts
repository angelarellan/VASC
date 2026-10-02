import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primero (≈30-50% más liviano que WebP), WebP como respaldo.
    formats: ["image/avif", "image/webp"],
    // 50 para fondos con overlay (no se nota y pesan ~40% menos), 75 por defecto.
    qualities: [50, 75],
    // Las fotos no cambian de URL: cache largo en el CDN.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
