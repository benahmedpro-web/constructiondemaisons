import type { Metadata } from "next";
import DemandEtudeClient from "./DemandEtudeClient";

export const metadata: Metadata = {
  title: "Demande d'étude gratuite",
  description: "Analysez la faisabilité de votre projet maison ossature bois en Haute-Savoie : superficie, budget, terrain, délai. Étude gratuite, sans engagement.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/demande-etude/",
  },
  openGraph: {
    title: "Demande d'étude gratuite — M&M CONSTRUCTION",
    description: "Analysez la faisabilité de votre projet maison ossature bois en Haute-Savoie. Étude gratuite, sans engagement.",
    url: "https://www.constructiondemaisons.com/demande-etude/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function DemandEtudePage() {
  return <DemandEtudeClient />;
}
