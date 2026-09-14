import type { Metadata } from "next";
import { LpPage } from "./LpPage";

export const metadata: Metadata = {
  title: "Maison bois Haute-Savoie — Étude gratuite",
  description: "Coordination de votre projet maison bois en Haute-Savoie et Grand Genève : permis, artisans vérifiés, suivi de chantier. Taux d'honoraires connu d'avance, zéro marge sur les travaux.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LpPage />;
}
