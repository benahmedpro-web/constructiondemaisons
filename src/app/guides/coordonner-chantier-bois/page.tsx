import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coordonner un chantier maison bois",
  description: "Les étapes clés de la coordination de chantier bois : planning, corps de métier, suivi qualité, livraison. Guide par M&M CONSTRUCTION, maître d'œuvre.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/coordonner-chantier-bois/",
  },
};

const BASE = "https://www.constructiondemaisons.com";

const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment coordonner un chantier maison bois ?",
  description: "Les étapes clés de la coordination de chantier bois : planning, corps de métier, suivi qualité.",
  url: BASE + "/guides/coordonner-chantier-bois/",
  author: { "@type": "Person", name: "Mahmoud Ben Ahmed" },
  publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
  datePublished: "2025-01-15",
  dateModified: "2025-06-01",
  inLanguage: "fr-FR",
  image: "https://www.constructiondemaisons.com/images/hero-maison-bois-alpine.jpg",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: BASE + "/guides/" },
    { "@type": "ListItem", position: 3, name: "Coordonner un chantier bois", item: BASE + "/guides/coordonner-chantier-bois/" },
  ],
};

const faqItems = [
  {
    "@type": "Question",
    name: "Combien de temps dure le chantier d'une maison ossature bois ?",
    acceptedAnswer: { "@type": "Answer", text: "Le chantier proprement dit (hors permis) dure 6 à 10 mois pour une maison ossature bois de 100 à 150 m². Le gros œuvre bois (hors d'eau, hors d'air) se réalise en 2 à 3 mois, le second œuvre en 3 à 5 mois. En Haute-Savoie, l'hiver peut ralentir certains corps de métier entre novembre et mars (enduits extérieurs, peinture)." },
  },
  {
    "@type": "Question",
    name: "Qu'est-ce qu'un coordonnateur SPS et est-il obligatoire pour une maison bois ?",
    acceptedAnswer: { "@type": "Answer", text: "Le coordonnateur SPS (Sécurité et Protection de la Santé) est obligatoire dès lors que le chantier fait intervenir au moins 2 entreprises et dépasse certains seuils de volume de travaux. Pour une maison individuelle neuve avec plusieurs corps de métier, il est généralement requis. Le maître d'œuvre peut être désigné coordonnateur SPS s'il a suivi la formation ad hoc." },
  },
  {
    "@type": "Question",
    name: "Quels sont les risques d'un chantier bois coordonné directement par le particulier ?",
    acceptedAnswer: { "@type": "Answer", text: "L'autogestion du chantier expose à plusieurs risques : retards en cascade si un corps de métier est absent, malfaçons aux interfaces entre matériaux (jonction charpente/maçonnerie, raccordement étanchéité/bardage), difficultés de recours en cas de litige entre artisans, et surcoût final souvent supérieur aux honoraires d'un maître d'œuvre." },
  },
  {
    "@type": "Question",
    name: "Comment se déroule la réception d'un chantier ossature bois ?",
    acceptedAnswer: { "@type": "Answer", text: "La réception se fait contradictoirement entre le client et chaque artisan. Le maître d'œuvre dresse un procès-verbal avec liste de réserves (défauts à corriger). Les réserves sont levées dans un délai convenu, généralement 30 à 60 jours. La date de réception fait partir les garanties légales : parfait achèvement (1 an), bon fonctionnement (2 ans), décennale (10 ans)." },
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems,
};

export default function GuideCoordonnationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
    <main>
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[780px] mx-auto">
          <div className="flex gap-2 text-[13px] text-white/40 mb-4">
            <Link href="/" className="text-white/40 no-underline hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/guides/" className="text-white/40 no-underline hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white/70">Coordonner un chantier bois</span>
          </div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Coordination de chantier</span>
          <h1 className="text-white text-[32px] md:text-[44px] font-black leading-tight mb-4">
            Comment coordonner un chantier maison bois sans perdre le contrôle ?
          </h1>
          <Link href="/a-propos/" className="inline-flex items-center gap-3 no-underline group mt-4">
            <Image
              src="/images/mahmoud-ben-ahmed.jpg"
              alt="Mahmoud Ben Ahmed, maître d'œuvre"
              width={40}
              height={40}
              className="rounded-full object-cover object-top flex-shrink-0"
            />
            <div>
              <span className="block text-[14px] font-bold text-white group-hover:text-[#BA7517] transition-colors leading-tight">
                Mahmoud Ben Ahmed
              </span>
              <span className="block text-[12px] text-white/50">
                Maître d'œuvre · M&M CONSTRUCTION · Haute-Savoie
              </span>
            </div>
          </Link>
          <p className="text-white/40 text-[13px]">Mis à jour le 1er août 2026</p>
        </div>
      </div>

      <article className="bg-white py-14 px-5">
        <div className="max-w-[780px] mx-auto prose-custom">

          <p className="text-[18px] text-[#888780] leading-[1.8] mb-8 font-medium">
            La coordination de chantier bois est souvent sous-estimée par les particuliers. On imagine qu&apos;il suffit de trouver un bon charpentier. En réalité, une maison ossature bois implique 6 à 10 corps de métier qui doivent intervenir dans un ordre précis — et quand l&apos;un prend du retard, c&apos;est toute la chaîne qui déraille.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Pourquoi le bois demande une coordination plus rigoureuse que le maçon traditionnel ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Dans une construction maçonnée, les délais entre corps de métier sont élastiques : le gros œuvre avance lentement, et on a du temps pour ajuster. En ossature bois, l&apos;élévation de la structure se fait en quelques semaines. Le bardage, l&apos;isolation, l&apos;étanchéité à l&apos;air, les menuiseries — tout s&apos;enchaîne rapidement. Mal coordonné, un retard de 3 jours sur les menuiseries peut bloquer le plaquiste pendant 3 semaines.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            À cela s&apos;ajoute la spécificité technique du bois : les jonctions entre matériaux (bois/béton, bois/maçonnerie, bois/menuiserie) demandent une précision que tous les artisans ne maîtrisent pas. Un mauvais calfeutrement à la liaison mur/fenêtre et vous avez un pont thermique qui gâche l&apos;isolation de toute la façade.
          </p>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les corps de métier impliqués et leur ordre d&apos;intervention</h2>
          <div className="flex flex-col gap-3 mb-6">
            {[
              { num: "1", label: "Terrassement & fondations", detail: "La dalle ou les fondations doivent être parfaitement planes et de niveau — critère non négociable avant la pose de la plateforme bois." },
              { num: "2", label: "Charpentier ossature bois", detail: "Il monte la structure (semelles, montants, lisses, chevêtres). C'est lui qui donne le tempo du chantier." },
              { num: "3", label: "Couvreur", detail: "La toiture est prioritaire pour mettre hors d'eau avant de commencer les travaux intérieurs." },
              { num: "4", label: "Menuisier extérieur", detail: "Fenêtres et portes posées avant la mise en œuvre de l'isolation. L'ordre inverse crée des reprises coûteuses." },
              { num: "5", label: "Isolation & étanchéité à l'air", detail: "Mise en œuvre de la membrane frein-vapeur et du pare-pluie. Réalisé en une phase, pas en plusieurs fois." },
              { num: "6", label: "Bardeur", detail: "Pose du bardage ventilé extérieur. Coordonné avec le menuisier pour les habillages de tableaux." },
              { num: "7", label: "Plombier, électricien, chauffagiste", detail: "Corps de métier du second œuvre, coordonnés en parallèle une fois l'enveloppe fermée." },
              { num: "8", label: "Plaquiste & finitions intérieures", detail: "Intervient après passage des réseaux et vérification de l'étanchéité à l'air." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-4 bg-[#F2EDE6] items-start">
                <div className="flex-shrink-0 w-7 h-7 bg-[#BA7517] text-white flex items-center justify-center font-black text-[13px]">{item.num}</div>
                <div>
                  <div className="font-bold text-[#2C2C2A] text-[15px]">{item.label}</div>
                  <div className="text-[13px] text-[#888780] mt-0.5">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Les 5 erreurs les plus courantes sans maître d&apos;œuvre</h2>
          <div className="flex flex-col gap-4 mb-6">
            {[
              { titre: "Commander les menuiseries trop tard", corps: "Les menuiseries sur mesure ont un délai de fabrication de 8 à 14 semaines. Si vous les commandez après la pose de l'ossature, vous immobilisez le chantier." },
              { titre: "Ne pas vérifier la plateforme avant montage", corps: "Une dalle hors niveau de 1 cm, c'est un mur qui penche. Le charpentier le voit mais ne le dit pas toujours — c'est au maître d'œuvre de valider avant de laisser commencer." },
              { titre: "Confier le bardage à l'électricien", corps: "Chaque artisan est dans son métier. Quand on demande à un électricien d'attendre un bardeur qui a du retard, on paie deux fois : des heures non productives et un chantier qui s'étire." },
              { titre: "Signer les situations de travaux sans visite", corps: "Les acomptes se paient à l'avancement. Sans visite de contrôle, vous pouvez payer une phase non réalisée. Ça arrive." },
              { titre: "Réceptionner sans grille de contrôle", corps: "Une réception sans réserve, c'est un chantier accepté en l'état. Les défauts non consignés à la réception sont difficiles à faire prendre en charge par la décennale après." },
            ].map((item) => (
              <div key={item.titre} className="border-l-[3px] border-[#BA7517] pl-5 py-1">
                <div className="font-bold text-[#2C2C2A] text-[15px] mb-1">{item.titre}</div>
                <div className="text-[14px] text-[#888780] leading-[1.7]">{item.corps}</div>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] font-bold text-[#2C2C2A] mt-10 mb-4">Ce que fait concrètement un maître d&apos;œuvre sur votre chantier bois</h2>
          <p className="text-[16px] text-[#888780] leading-[1.8] mb-4">
            Le rôle du maître d&apos;œuvre n&apos;est pas de se substituer aux artisans — c&apos;est de les coordonner. Avant le démarrage : planning général par corps de métier, vérification des décennales, validation des commandes critiques. En cours de chantier : réunions de suivi, comptes-rendus écrits, validation des situations avant paiement. En fin de chantier : grille de contrôle qualité à la pré-réception, levée des réserves, procès-verbal de réception.
          </p>
          <p className="text-[16px] text-[#888780] leading-[1.8]">
            En Haute-Savoie et dans l&apos;Ain, les conditions climatiques (gel, neige, pluie) imposent également de prévoir des fenêtres de chantier adaptées. C&apos;est le maître d&apos;œuvre qui adapte le planning en temps réel — pas les artisans, dont ce n&apos;est pas la mission.
          </p>

          {/* Sources */}
          <div className="border-t border-[#D9D4CC] mt-10 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-3">Sources</p>
            <ul className="flex flex-col gap-1.5 list-none p-0">
              <li><a href="https://www.georisques.gouv.fr/risques/seisme" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Zonage sismique — Géorisques (BRGM) ↗</a></li>
              <li><a href="https://www.qualibat.com/trouver-une-entreprise/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Vérifier les qualifications artisans — Qualibat ↗</a></li>
              <li><a href="https://www.service-public.fr/particuliers/vosdroits/F2034" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#888780] hover:text-[#BA7517] transition-colors">Garantie décennale — service-public.fr ↗</a></li>
            </ul>
          </div>
        </div>
      </article>

      <section className="bg-[#F2EDE6] py-12 px-5">
        <div className="max-w-[780px] mx-auto flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Vous préparez un projet maison bois ?</h2>
            <p className="text-[15px] text-[#888780] leading-[1.7]">Premier échange gratuit avec Mahmoud — analyse de faisabilité, budget estimatif, délais réalistes. Sans engagement.</p>
          </div>
          <Link href="/demande-etude/" className="flex-shrink-0 inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors self-center">
            Décrire mon chantier →
          </Link>
        </div>
      </section>

      <section className="bg-white py-10 px-5 border-t border-[#D9D4CC]">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[13px] text-[#888780] mb-3 font-bold uppercase tracking-widest">Guides associés</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Maison ossature bois : coûts et délais", href: "/guides/maison-ossature-bois/" },
              { label: "Choisir ses artisans bois", href: "/guides/choisir-artisans-maison-bois/" },
              { label: "MOE vs CCMI", href: "/guides/moe-vs-ccmi/" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="border border-[#D9D4CC] px-4 py-2 text-[14px] text-[#2C2C2A] no-underline hover:border-[#BA7517] hover:text-[#BA7517] transition-colors">
                {g.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
