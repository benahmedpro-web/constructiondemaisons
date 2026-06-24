import type { Metadata } from "next";
import "./globals.css";

const BASE = "https://www.constructiondemaisons.com";

export const metadata: Metadata = {
  title: "M&M CONSTRUCTION — Maîtrise d'œuvre maison bois | Genevois",
  description:
    "Maîtrise d'œuvre maison ossature bois en Haute-Savoie et Genevois français. 20 ans d'expérience, artisans vérifiés. Étude gratuite.",
  openGraph: {
    title: "M&M CONSTRUCTION — Maîtrise d'œuvre maison bois | Genevois",
    description:
      "Maîtrise d'œuvre maison ossature bois en Haute-Savoie. 20 ans d'expérience. Étude gratuite.",
    url: BASE,
    siteName: "M&M CONSTRUCTION",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: BASE + "/images/hero-maison-bois-alpine.jpg",
        width: 1920,
        height: 1080,
        alt: "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M&M CONSTRUCTION — Maîtrise d'œuvre maison bois",
    description:
      "Maîtrise d'œuvre maison ossature bois en Haute-Savoie. Étude gratuite.",
    images: [BASE + "/images/hero-maison-bois-alpine.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  themeColor: "#2C2C2A",
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "M&M CONSTRUCTION",
  url: BASE,
  telephone: "+33625590926",
  email: "benahmed.pro@icloud.com",
  description:
    "Maîtrise d'œuvre spécialisée maison ossature bois en Haute-Savoie, Genevois français et Ain.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Annemasse",
    postalCode: "74100",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "State", name: "Haute-Savoie" },
    { "@type": "State", name: "Ain" },
    { "@type": "Place", name: "Genevois français" },
  ],
  founder: {
    "@type": "Person",
    name: "Mahmoud Ben Ahmed",
    jobTitle: "Responsable de projets de construction",
    knowsAbout: [
      "maison ossature bois",
      "construction maison individuelle",
      "extension ossature bois",
      "rénovation bois",
      "coordination de chantier",
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "M&M CONSTRUCTION",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BASE + "/guides/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
