import type { Metadata } from "next";
import { LpPage } from "./LpPage";

export const metadata: Metadata = {
  title: "Maison bois Haute-Savoie — Étude gratuite",
  description: "Coordination de votre projet maison bois en Haute-Savoie et Genevois français : permis, artisans vérifiés, suivi de chantier. Honoraires fixes, zéro marge cachée.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LpPage />;
}
