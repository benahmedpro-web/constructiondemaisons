import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      { source: "/zone-intervention", destination: "/annonces", permanent: true },
      { source: "/zone-intervention/", destination: "/annonces/", permanent: true },
      { source: "/realisations", destination: "/annonces", permanent: true },
      { source: "/realisations/", destination: "/annonces/", permanent: true },
      { source: "/artisans", destination: "/guides/choisir-artisans-maison-bois", permanent: true },
      { source: "/artisans/", destination: "/guides/choisir-artisans-maison-bois/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
