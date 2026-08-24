import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const BASE = "https://www.constructiondemaisons.com";

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Extension ossature bois — M&M CONSTRUCTION",
  serviceType: "Extension ossature bois",
  description: "Coordination complète de votre extension ossature bois en Haute-Savoie, Ain et Genevois français. Permis de construire, sélection artisans qualifiés bois, suivi de chantier.",
  provider: { "@type": "HomeAndConstructionBusiness", name: "M&M CONSTRUCTION", url: BASE },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "AdministrativeArea", name: "Genevois français" },
  ],
  offers: {
    "@type": "Offer",
    description: "Extension ossature bois de 15 à 80 m². Devis gratuit après étude de faisabilité PLU.",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      description: "1 600 à 2 400 € HT/m² selon finitions et contraintes techniques",
    },
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Faut-il un permis de construire pour une extension ossature bois ?",
      acceptedAnswer: { "@type": "Answer", text: "En zone PLU, une extension de moins de 40 m² nécessite une simple déclaration préalable. Au-delà, un permis de construire est obligatoire. Hors zone PLU, le seuil descend à 20 m². Si l'extension porte la surface totale à plus de 150 m², le recours à un architecte devient obligatoire. M&M CONSTRUCTION vérifie le PLU de votre commune et constitue le dossier complet." },
    },
    {
      "@type": "Question",
      name: "Quel budget prévoir pour une extension ossature bois en Haute-Savoie ?",
      acceptedAnswer: { "@type": "Answer", text: "En Haute-Savoie et Genevois, le coût d'une extension ossature bois se situe entre 1 600 et 2 400 € HT/m² selon les finitions et les contraintes du chantier. Pour une extension de 30 m², comptez 48 000 à 72 000 € HT de travaux, auxquels s'ajoutent les honoraires de maîtrise d'œuvre (8 à 12 % des travaux) et les éventuels frais d'études et de raccordement." },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure le chantier d'une extension ossature bois ?",
      acceptedAnswer: { "@type": "Answer", text: "Le chantier d'une extension bois dure généralement 3 à 5 mois selon la surface et les finitions. La structure bois (hors d'eau, hors d'air) est posée en 3 à 6 semaines. Le second œuvre (isolation, cloisons, électricité, plomberie, finitions) prend ensuite 2 à 4 mois. À cela s'ajoute le délai d'instruction administrative (1 à 3 mois selon la surface et la commune)." },
    },
    {
      "@type": "Question",
      name: "Peut-on faire une extension bois sur une maison maçonnée ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui, c'est une configuration très courante. La légèreté de l'ossature bois est un avantage sur les fondations existantes. La liaison bois/maçonnerie nécessite une conception soignée pour éviter les ponts thermiques et assurer l'étanchéité à l'air à l'interface. M&M CONSTRUCTION coordonne avec un bureau d'études structure pour valider les calculs de jonction." },
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Extension ossature bois", item: BASE + "/extension-bois/" },
  ],
};

export const metadata: Metadata = {
  title: "Extension ossature bois Haute-Savoie",
  description: "M&M CONSTRUCTION coordonne votre extension ossature bois en Genevois français, Haute-Savoie et Ain. Permis de construire, artisans vérifiés, suivi complet.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/extension-bois/",
  },
};

const etapes = [
  { title: "Faisabilité & PLU", body: "Analyse de votre terrain, de l'existant et des règles PLU locales. On vérifie le coefficient d'emprise au sol, les marges de recul, la hauteur autorisée et les règles de mitoyenneté — avant de dessiner quoi que ce soit." },
  { title: "Conception & intégration architecturale", body: "L'extension doit s'intégrer à l'existant sur le plan structurel et esthétique. Nous coordonnons avec le bureau d'études structure bois pour garantir la liaison ossature neuve / maçonnerie existante." },
  { title: "Permis ou déclaration préalable", body: "Selon la surface et la commune, il faut un permis de construire ou une déclaration préalable. On s'occupe du dossier complet, du dépôt et du suivi en mairie." },
  { title: "Sélection artisans & chantier", body: "Charpentier bois, menuisier, isolation, bardage, plomberie, électricité — chaque artisan est sélectionné sur ses qualifications bois et ses références locales. Coordination complète de votre côté : zéro." },
];

export default function ExtensionBoisPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      {/* Hero */}
      <div
        className="relative bg-[#2C2C2A] py-20 px-5 overflow-hidden"
        style={{ backgroundImage: "url(/images/hero-extension-bois-golden.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#2C2C2A]/65" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <p className="text-[#BA7517] text-[12px] font-bold uppercase tracking-widest mt-4 mb-3">Maîtrise d&apos;œuvre · Extension</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-tight mb-4">
            Extension ossature bois<br className="hidden md:block" /> en Haute-Savoie et Genevois
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            Agrandissez votre maison avec une extension bois coordonnée de A à Z — permis, artisans, chantier. Haute-Savoie · Ain · Genevois français.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
              Configurer mon projet
            </Link>
          </div>
        </div>
      </div>

      {/* Pourquoi bois */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-4">
              Pourquoi l&apos;ossature bois pour une extension ?
            </h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              L&apos;ossature bois est idéale pour les extensions : chantier rapide (semaines, pas mois), poids léger sur les fondations existantes, isolation thermique performante dès le départ, et esthétique contemporaine qui s&apos;intègre sur tous les styles de maisons.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En Haute-Savoie et Ain, les PLU autorisent souvent le bardage bois, ce qui permet une intégration naturelle dans le paysage alpin. La réglementation RE2020 — en vigueur depuis janvier 2022 — favorise les matériaux biosourcés comme le bois : bilan carbone faible, performance thermique élevée, compatibilité native avec les systèmes de chauffage basse consommation (PAC, plancher chauffant).
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
              En zone sismique 3 (Genevois français, Annecy, Annemasse), la légèreté structurelle de l&apos;ossature bois réduit les contraintes sur les fondations existantes — un avantage décisif par rapport à une extension maçonnée, qui nécessite souvent des travaux de reprise en sous-œuvre.
            </p>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              Sur le plan budgétaire, une extension ossature bois en Haute-Savoie représente généralement entre 1 500 et 2 200 €/m² de surface créée, selon la complexité de l&apos;intégration structurelle et le niveau de finitions. Le chantier d&apos;une extension de 20 à 40 m² dure en moyenne 4 à 8 semaines une fois le permis obtenu — soit un délai total de 6 à 12 mois du premier échange à la réception, permis de construire inclus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "⚡", label: "Chantier rapide", detail: "4 à 12 semaines selon surface" },
              { icon: "🏔", label: "Adapté au climat alpin", detail: "Isolation, étanchéité, bardage ventilé" },
              { icon: "⚖", label: "Léger sur l'existant", detail: "Moins de contraintes sur les fondations" },
              { icon: "🌿", label: "Matériau biosourcé", detail: "RE2020 et bilan carbone favorable" },
            ].map((item) => (
              <div key={item.label} className="bg-[#F2EDE6] p-4 flex items-center gap-4">
                <div className="text-[24px] flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-bold text-[15px] text-[#2C2C2A]">{item.label}</div>
                  <div className="text-[13px] text-[#888780]">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] text-center mb-10">
            Comment on coordonne votre extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etapes.map((e, i) => (
              <div key={i} className="bg-white p-6">
                <div className="text-[#BA7517] font-black text-[28px] mb-2">0{i + 1}</div>
                <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-2">{e.title}</h3>
                <p className="text-[14px] text-[#888780] leading-[1.7]">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white py-0">
        <div className="max-w-[900px] mx-auto">
          <Image
            src="/images/hero-extension-bois-jardin.jpg"
            alt="Extension ossature bois coordonnée par M&M CONSTRUCTION"
            width={900}
            height={500}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* FAQ GEO-ready */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2C2C2A] mb-10">
            Questions fréquentes sur l&apos;extension ossature bois
          </h2>
          <div className="flex flex-col divide-y divide-[#E8E2DA]">
            {[
              {
                q: "Faut-il un permis de construire pour une extension ossature bois ?",
                a: "En zone PLU, une extension de moins de 40 m² nécessite une simple déclaration préalable. Au-delà, un permis de construire est obligatoire. Hors zone PLU, le seuil descend à 20 m². Si l'extension porte la surface totale à plus de 150 m², le recours à un architecte devient obligatoire. M&M CONSTRUCTION vérifie le PLU de votre commune et constitue le dossier complet.",
              },
              {
                q: "Quel budget prévoir pour une extension ossature bois en Haute-Savoie ?",
                a: "En Haute-Savoie et Genevois, le coût d'une extension ossature bois se situe entre 1 600 et 2 400 € HT/m² selon les finitions et les contraintes du chantier. Pour une extension de 30 m², comptez 48 000 à 72 000 € HT de travaux, auxquels s'ajoutent les honoraires de maîtrise d'œuvre (8 à 12 % des travaux) et les éventuels frais d'études et de raccordement.",
              },
              {
                q: "Combien de temps dure le chantier d'une extension ossature bois ?",
                a: "Le chantier d'une extension bois dure généralement 3 à 5 mois selon la surface et les finitions. La structure bois (hors d'eau, hors d'air) est posée en 3 à 6 semaines. Le second œuvre (isolation, cloisons, électricité, plomberie, finitions) prend ensuite 2 à 4 mois. À cela s'ajoute le délai d'instruction administrative (1 à 3 mois selon la surface et la commune).",
              },
              {
                q: "Peut-on faire une extension bois sur une maison maçonnée ?",
                a: "Oui, c'est une configuration très courante. La légèreté de l'ossature bois est un avantage sur les fondations existantes. La liaison bois/maçonnerie nécessite une conception soignée pour éviter les ponts thermiques et assurer l'étanchéité à l'air à l'interface. M&M CONSTRUCTION coordonne avec un bureau d'études structure pour valider les calculs de jonction.",
              },
            ].map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="text-[17px] font-bold text-[#2C2C2A] mb-3">{item.q}</h3>
                <p className="text-[15px] text-[#888780] leading-[1.8]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2C2A] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-white mb-3">Votre extension bois, sans les complications</h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-8">
            On analyse votre projet gratuitement : faisabilité PLU, budget estimatif, délais réalistes. Sans engagement, sans standard imposé.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Décrire mon extension →
          </Link>
          <p className="mt-5 text-[13px] text-white/50">
            <Link href="/a-propos/" className="text-[#BA7517] no-underline hover:underline">→ En savoir plus sur Mahmoud Ben Ahmed</Link>
            {" · "}
            <Link href="/contact/" className="text-white/50 no-underline hover:text-white">Nous contacter</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
