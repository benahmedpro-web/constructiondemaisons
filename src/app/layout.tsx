import type { Metadata } from "next";
import "./globals.css";

const BASE = "https://www.constructiondemaisons.com";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
  "@id": BASE + "/#business",
  name: "M&M CONSTRUCTION",
  url: BASE,
  telephone: "+33625590926",
  email: "benahmed.pro@icloud.com",
  description:
    "Maîtrise d'œuvre spécialisée maison ossature bois en Haute-Savoie, Genevois français et Ain.",
  address: {
    "@type": "PostalAddress",
    "@id": BASE + "/#address",
    addressLocality: "Annemasse",
    postalCode: "74100",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "State", "@id": BASE + "/#area-haute-savoie", name: "Haute-Savoie" },
    { "@type": "State", "@id": BASE + "/#area-ain", name: "Ain" },
    { "@type": "Place", "@id": BASE + "/#area-genevois", name: "Genevois français" },
  ],
  founder: {
    "@type": "Person",
    "@id": BASE + "/#person-mahmoud",
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
    "@id": BASE + "/#aggregate-rating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      "@id": BASE + "/#review-jocelyn",
      author: { "@type": "Person", "@id": BASE + "/#reviewer-jocelyn", name: "Jocelyn S." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies. Disponible, réactif et rassurant tout au long du processus, je recommande fortement.",
    },
    {
      "@type": "Review",
      "@id": BASE + "/#review-supa",
      author: { "@type": "Person", "@id": BASE + "/#reviewer-supa", name: "Supa W." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Bienveillant, à l'écoute, visionnaire, Mr Ben Ahmed est un professionnel de qualité. Ses analyses sont justes et pertinentes. Vous serez entre de bonnes mains.",
    },
    {
      "@type": "Review",
      "@id": BASE + "/#review-martin",
      author: { "@type": "Person", "@id": BASE + "/#reviewer-martin", name: "Martin M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "M. Ben Ahmed est un professionnel très consciencieux. Grâce à lui nous avons pu construire notre maison. Vous pouvez lui faire confiance pour votre projet.",
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": BASE + "/#website",
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
        {/* Font preloads — critical weights */}
        <link rel="preload" href="/fonts/BrandonGrotesque-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BrandonGrotesque-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
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
