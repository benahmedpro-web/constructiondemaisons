import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: "Contactez Mahmoud Ben Ahmed, responsable de projets maison ossature bois en Haute-Savoie et Genevois français. Réponse sous 48h.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/contact/",
  },
  openGraph: {
    title: "Contact M&M CONSTRUCTION",
    description: "Contactez Mahmoud Ben Ahmed pour votre projet maison ossature bois en Haute-Savoie et Genevois français.",
    url: "https://www.constructiondemaisons.com/contact/",
    siteName: "M&M CONSTRUCTION",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
