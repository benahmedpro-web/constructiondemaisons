import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maison ossature bois : guide complet 2025 | M&M CONSTRUCTION",
  description: "Guide complet sur la maison ossature bois en 2025 : budget réaliste, durée de chantier, avantages thermiques, comparaison avec la construction maçonnée.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/maison-ossature-bois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maison ossature bois : avantages, coûts et délais en 2025",
  description: "Guide complet sur la maison ossature bois en 2025 : budget réaliste, durée de chantier, avantages thermiques, comparaison avec la construction maçonnée.",
  url: BASE + "/guides/maison-ossature-bois/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2025-06-01",
  inLanguage: "fr-FR",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Maison ossature bois 2025", item: BASE + "/guides/maison-ossature-bois/" },
  ],
};

export default function GuideMaisonBoisPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[780px] mx-auto">
          <div className="flex gap-2 text-[13px] text-white/40 mb-4">
            <Link href="/" className="text-white/40 no-underline hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/guides/" className="text-white/40 no-underline hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white/70">Maison ossature bois 2025</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Construction</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Maison ossature bois : avantages, coûts et délais en 2025
          </h1>
          <p className="text-white/60 text-[16px]">Par Mahmoud Ben Ahmed · M&M CONSTRUCTION · Maître d&apos;œuvre Haute-Savoie</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto">

          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            La maison ossature bois représente aujourd&apos;hui environ 15 % des constructions neuves en France, et cette part monte à 25–30 % dans les zones alpines où le bois est une tradition constructive. Voici les réponses aux questions que posent tous les particuliers avant de se lancer.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Qu&apos;est-ce que l&apos;ossature bois, concrètement ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            L&apos;ossature bois (ou MOB) est un système constructif dans lequel la structure porteuse de la maison est constituée de montants en bois massif ou en bois lamellé-collé. Ces montants sont assemblés en panneaux, puis remplis d&apos;isolant (laine de bois, ouate de cellulose, paille compressée) et recouerts d&apos;un parement intérieur (plaque de plâtre) et d&apos;un bardage extérieur ventilé.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Ce système est distinct du bois massif (maisons en rondins) et du poteau-poutre (structure apparente). En Haute-Savoie, l&apos;ossature bois est la technique la plus répandue car elle est adaptée aux contraintes sismiques de la zone (Ain, Genevois), aux exigences d&apos;isolation en altitude et à la RE2020.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les avantages réels — et ceux qu&apos;on exagère</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F2EDE6] p-5">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Avantages réels</div>
              {[
                "Chantier 30 à 40 % plus rapide qu'en maçonnerie",
                "Isolation thermique naturellement élevée",
                "Légèreté : fondations moins lourdes",
                "Matériau biosourcé, bilan carbone favorable",
                "Confort hygrothermique en montagne",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[14px] text-[#2C2C2A] py-1.5 border-b border-[#D9D4CC] last:border-0">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#D9D4CC] p-5">
              <div className="text-[12px] font-bold uppercase tracking-widest text-[#888780] mb-3">Ce qu&apos;on exagère parfois</div>
              {[
                "\"Moins cher que la maçonnerie\" : faux, les prix sont comparables",
                "\"Entretien nul\" : le bardage se rénove tous les 15–20 ans",
                "\"Rapide à réaliser\" : le délai inclut le permis (2–6 mois)",
                "\"Risque incendie\" : couvert par les normes DTU, pas de surprime",
                "\"Moins solide\" : les structures RE2020 sont très performantes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[14px] text-[#888780] py-1.5 border-b border-[#D9D4CC] last:border-0">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9D4CC" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Budget : combien coûte une maison ossature bois en 2025 ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            En Haute-Savoie et Ain, les prix de construction sont structurellement plus élevés qu&apos;en moyenne nationale (main-d&apos;œuvre, coût du terrain, contraintes sismiques). Voici les fourchettes réalistes pour 2025 :
          </p>
          <div className="border border-[#D9D4CC] mb-6 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide p-3">
              <div>Prestation</div>
              <div className="text-center">Prix bas</div>
              <div className="text-center">Prix haut</div>
            </div>
            {[
              ["Ossature + charpente + isolation", "600 €/m²", "900 €/m²"],
              ["Second œuvre (plomberie, élec, finitions)", "400 €/m²", "600 €/m²"],
              ["Menuiseries extérieures", "100 €/m²", "180 €/m²"],
              ["Honoraires maître d'œuvre", "8 %", "12 % du coût travaux"],
              ["Total fourni posé (hors terrain)", "1 400 €/m²", "2 000 €/m²"],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-3 text-[14px] ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"}`}>
                <div className="text-[#2C2C2A] font-medium">{row[0]}</div>
                <div className="text-center text-[#888780]">{row[1]}</div>
                <div className="text-center text-[#888780]">{row[2]}</div>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-[#888780] leading-[1.7] mb-6 italic">
            Ces fourchettes incluent la construction mais pas le terrain, les frais de notaire, les VRD (raccordements eau, électricité, assainissement) ni les aménagements extérieurs.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Délais : combien de temps entre la décision et les clés ?</h2>
          <div className="flex flex-col gap-3 mb-6">
            {[
              { phase: "Conception & avant-projet", duree: "1–2 mois" },
              { phase: "Dépôt + instruction du permis de construire", duree: "2–6 mois" },
              { phase: "Sélection artisans & préparation chantier", duree: "1–2 mois" },
              { phase: "Chantier ossature bois (hors d'eau, hors d'air)", duree: "2–3 mois" },
              { phase: "Second œuvre & finitions", duree: "3–5 mois" },
              { phase: "Total réaliste de la décision aux clés", duree: "12–18 mois" },
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center p-3 text-[14px] ${item.phase.includes("Total") ? "bg-[#2C2C2A] text-white font-bold" : "bg-[#F2EDE6] text-[#2C2C2A]"}`}>
                <span>{item.phase}</span>
                <span className={item.phase.includes("Total") ? "text-[#BA7517]" : "text-[#888780]"}>{item.duree}</span>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi faire appel à un maître d&apos;œuvre spécialisé bois ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            La maison ossature bois n&apos;est pas plus simple à réaliser qu&apos;une maison maçonnée — elle est différente. Les artisans doivent connaître les DTU bois (DTU 31.2, DTU 40.29, DTU 36.5), la gestion de la vapeur d&apos;eau, les liaisons entre matériaux. Un maître d&apos;œuvre spécialisé bois comme M&M CONSTRUCTION sélectionne uniquement des artisans avec qualifications bois et références locales — et coordonne le chantier pour que les interfaces entre corps de métier soient gérées, pas laissées au hasard.
          </p>
        </div>
      </article>

      <div className="border-t border-[#D9D4CC] py-10 px-5 bg-white">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-4">Projet similaire en cours</p>
          <Link href="/annonces/maison-ossature-bois-annemasse-74/" className="flex gap-5 items-start no-underline group border border-[#D9D4CC] hover:border-[#BA7517] transition-colors p-4">
            <div className="flex-shrink-0 overflow-hidden w-24 h-16">
              <Image src="/images/hero-maison-bois-alpine.jpg" alt="Maison ossature bois Annemasse" width={96} height={64} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">Maison ossature bois · Annemasse (74)</div>
              <div className="text-[13px] text-[#888780] mt-1">120 m² · 385 000 € · Disponible</div>
              <div className="text-[13px] text-[#BA7517] font-medium mt-2">Voir l&apos;annonce →</div>
            </div>
          </Link>
        </div>
      </div>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Votre projet maison bois en Haute-Savoie ou Ain ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Mahmoud analyse votre terrain et votre budget gratuitement. Réponse sous 48h.</p>
          </div>
          <Link href="/demande-etude/" className="flex-shrink-0 inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors self-center">
            Configurer mon projet →
          </Link>
        </div>
      </section>
    </main>
  );
}
