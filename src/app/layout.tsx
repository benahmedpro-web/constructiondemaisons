import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieBanner } from "@/components/CookieBanner";
import { OpenAIAdsPixel } from "@/components/OpenAIAdsPixel";
import "./globals.css";

const BASE = "https://www.constructiondemaisons.com";
const OPENAI_ADS_PIXEL_ID = "Lv6Ep5Q2Lt1n63MFnmUjxD";

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
    addressLocality: "Annemasse",
    postalCode: "74100",
    addressRegion: "Haute-Savoie",
    addressCountry: "FR",
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
      author: { "@type": "Person", name: "Laurent Ramos" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Vraiment très professionnel. Mr Ben Ahmed est une personne de confiance. Sans lui je n'aurais pas construit ma nouvelle maison. Je le recommande vivement.",
      datePublished: "2021-04-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Francis Nossin" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Malgré notre éloignement du lieu choisi pour notre projet, nous avons trouvé en Mr BEN AHMED une personne entièrement disponible dès le premier contact. Écoute, dialogue, engagement sans compter ses heures nous ont été consacrés jusqu'à la finalisation. Notre nouvelle vie démarre grâce à vous et à votre totale disponibilité !",
      datePublished: "2025-05-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jocelyn Schreiner" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies. De plus disponible, réactif et rassurant tout au long du processus, bref je recommande fortement.",
      datePublished: "2023-06-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Joelle Thise" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Un immense Merci à Mr Ben Ahmed. Vous nous avez écoutés et ce dans les moindres détails. Du plan de la maison à la réception de celle-ci, vous avez été attentif aux détails de façon très professionnelle, et ce toujours avec une grande empathie afin de nous satisfaire totalement.",
      datePublished: "2025-05-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael Camalet" },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody:
        "Très belle expérience avec un excellent professionnel Mr Ben Ahmed. Avec son professionnalisme, il a donné de bons conseils tout au long du projet. Nous sommes très satisfaits !",
      datePublished: "2024-05-01",
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
    sameAs: ["https://g.page/r/Cdn_3K5QUh7wEBM"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("consent",false);oaiq("init",{pixelId:${JSON.stringify(OPENAI_ADS_PIXEL_ID)}});`,
          }}
        />
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
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
        )}
      </head>
      <body className="h-full">
        {children}
        <Analytics />
        <GoogleAnalytics />
        <OpenAIAdsPixel />
        <CookieBanner />
      </body>
    </html>
  );
}
