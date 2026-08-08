import type { Metadata } from "next";
import IndiceFaisabiliteClient from "./IndiceFaisabiliteClient";

export const metadata: Metadata = {
  title: "Indice de Faisabilité — Votre projet est-il réalisable ?",
  description:
    "Budget, terrain, financement et calendrier : obtenez en quelques minutes un premier diagnostic personnalisé de votre projet de construction en Haute-Savoie. Gratuit, sans engagement.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/indice-de-faisabilite/",
  },
  openGraph: {
    title: "Indice de Faisabilité — M&M CONSTRUCTION",
    description: "Votre projet de construction est-il réalisable ? Diagnostic gratuit en quelques minutes.",
    url: "https://www.constructiondemaisons.com/indice-de-faisabilite/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function IndiceFaisabilitePage() {
  return <IndiceFaisabiliteClient />;
}
