import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      { source: "/zone-intervention", destination: "/annonces", statusCode: 301 },
      { source: "/zone-intervention/", destination: "/annonces/", statusCode: 301 },
      { source: "/realisations", destination: "/annonces", statusCode: 301 },
      { source: "/realisations/", destination: "/annonces/", statusCode: 301 },
      { source: "/artisans", destination: "/guides/choisir-artisans-maison-bois", statusCode: 301 },
      { source: "/artisans/", destination: "/guides/choisir-artisans-maison-bois/", statusCode: 301 },
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
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self'",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
