import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE = "https://www.constructiondemaisons.com";

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": BASE + "/#business",
  name: "M&M CONSTRUCTION",
  url: BASE + "/",
  logo: BASE + "/seo/logo.svg",
  image: BASE + "/images/hero-maison-bois-montagne-1.jpg",
  description:
    "Maîtrise d'œuvre spécialisée construction maison ossature bois en Haute-Savoie, Ain et Genevois français. Conception, permis de construire, coordination de chantier.",
  email: "contact@constructiondemaisons.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
    addressLocality: "Haute-Savoie / Genevois français",
  },
  areaServed: [
    { "@type": "State", name: "Haute-Savoie" },
    { "@type": "State", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Genevois français" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5.0,
    reviewCount: 14,
    bestRating: 5,
    worstRating: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sébastien M." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Mahmoud a géré notre projet de A à Z — permis, artisans, chantier. Résultat impeccable, délais tenus. Je recommande sans hésiter.",
      datePublished: "2025-09-12",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Claire et Thomas R." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Très professionnel et transparent sur les coûts dès le départ. Notre extension bois est exactement ce qu'on voulait.",
      datePublished: "2025-11-03",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Frédéric L." },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Interlocuteur unique, artisans sérieux, suivi rigoureux. Maison livrée en 14 mois, comme prévu. Excellent rapport qualité/prix.",
      datePublished: "2026-01-18",
    },
  ],
  sameAs: [
    "https://g.page/r/Cdn_3K5QUh7wEBM",
  ],
  founder: {
    "@type": "Person",
    "@id": BASE + "/#person-mahmoud",
    name: "Mahmoud Ben Ahmed",
    jobTitle: "Maître d'œuvre spécialisé ossature bois",
    url: BASE + "/a-propos/",
    knowsAbout: [
      "Maison ossature bois",
      "Maîtrise d'œuvre",
      "RE2020",
      "Construction bois Haute-Savoie",
    ],
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": BASE + "/#website",
  url: BASE + "/",
  name: "M&M CONSTRUCTION",
  description:
    "Maîtrise d'œuvre maison ossature bois en Haute-Savoie et Genevois français.",
  publisher: { "@id": BASE + "/#business" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: BASE + "/?s={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  title: {
    default: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie",
    template: "%s | M&M CONSTRUCTION",
  },
  description:
    "Maîtrise d'œuvre maison ossature bois en Haute-Savoie et Genevois français. 20 ans d'expérience, artisans vérifiés. Étude gratuite.",
  metadataBase: new URL(BASE),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE + "/",
    siteName: "M&M CONSTRUCTION",
    title: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie",
    description:
      "Maîtrise d'œuvre maison ossature bois en Haute-Savoie et Genevois français. 20 ans d'expérience, artisans vérifiés. Étude gratuite.",
    images: [
      {
        url: BASE + "/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie",
    description:
      "Maîtrise d'œuvre maison ossature bois en Haute-Savoie et Genevois français. 20 ans d'expérience, artisans vérifiés.",
    images: [BASE + "/images/og-homepage.jpg"],
    site: "@mmconstruction74",
    creator: "@mmconstruction74",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/seo/site.webmanifest",
  themeColor: "#BA7517",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <link
          rel="preload"
          href="/fonts/BrandonGrotesque-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BrandonGrotesque-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
