import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,

  async redirects() {
    // With trailingSlash: true, Next.js normalises paths before matching —
    // /foo/ matches source "/foo". Keep one rule per slug, destination always with trailing slash.
    return [
      { source: "/zone-intervention", destination: "/annonces/", statusCode: 301 },
      { source: "/realisations", destination: "/annonces/", statusCode: 301 },
      { source: "/artisans", destination: "/guides/choisir-artisans-maison-bois/", statusCode: 301 },
      // 404 recovery — old URLs Google indexed during early build phase
      { source: "/services", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/nos-services", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/maison-bois", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/construction-bois", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/ossature-bois", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/maisons", destination: "/maison-ossature-bois/", statusCode: 301 },
      { source: "/blog", destination: "/guides/", statusCode: 301 },
      { source: "/projets", destination: "/annonces/", statusCode: 301 },
      { source: "/nos-realisations", destination: "/annonces/", statusCode: 301 },
      { source: "/qui-sommes-nous", destination: "/a-propos/", statusCode: 301 },
      { source: "/faq", destination: "/notre-methode/", statusCode: 301 },
      { source: "/equipe", destination: "/a-propos/", statusCode: 301 },
      { source: "/tarifs", destination: "/demande-etude/", statusCode: 301 },
      { source: "/devis", destination: "/demande-etude/", statusCode: 301 },
      { source: "/construction-maison", destination: "/faire-construire-haute-savoie/", statusCode: 301 },
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
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://bzrcdn.openai.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: https://bzr.openai.com",
              "font-src 'self'",
              // *.google-analytics.com ET *.analytics.google.com (pas seulement les domaines nus) :
              // GA4 route vers des sous-domaines régionaux (region1., region2., ...) pour le
              // traitement des données en zone UE, sur les deux familles de domaines — un blocage
              // CSP ici est silencieux, GA4 semble fonctionner (script chargé, gtag configuré)
              // mais aucune donnée n'atteint jamais Google. Repéré une deuxième fois le 22/08/2026 :
              // *.analytics.google.com manquait encore (seul le domaine nu était autorisé).
              "connect-src 'self' https://*.google-analytics.com https://google-analytics.com https://*.analytics.google.com https://analytics.google.com https://www.googletagmanager.com https://www.google.com/recaptcha/ https://bzr.openai.com https://bzrcdn.openai.com",
              "frame-src https://www.google.com/recaptcha/",
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
