import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { getAnnonce } from "@/lib/annonces";

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

type Props = { searchParams: Promise<{ annonce?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { annonce: slug } = await searchParams;
  const annonce = slug ? getAnnonce(slug) : null;

  const annonceInfo = annonce
    ? { slug: annonce.slug, type: annonce.type, commune: annonce.commune }
    : null;

  return <ContactClient annonceInfo={annonceInfo} />;
}
