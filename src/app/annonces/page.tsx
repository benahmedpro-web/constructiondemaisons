import type { Metadata } from "next";
import { Suspense } from "react";
import AnnoncesClient from "./AnnoncesClient";

export const metadata: Metadata = {
  title: "Terrains & projets disponibles",
  description: "Terrains à bâtir et projets maison ossature bois à saisir en Haute-Savoie et Genevois français. Sélection de notre partenaire foncier.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/annonces/",
  },
  openGraph: {
    title: "Terrains & projets disponibles en Haute-Savoie",
    description: "Terrains à bâtir et projets maison ossature bois à saisir en Haute-Savoie et Genevois français.",
    url: "https://www.constructiondemaisons.com/annonces/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AnnoncesPage() {
  return (
    <Suspense>
      <AnnoncesClient />
    </Suspense>
  );
}
