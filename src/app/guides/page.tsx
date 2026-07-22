import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides techniques maison bois — M&M CONSTRUCTION",
  description: "Guides maison ossature bois : coûts, délais, RE2020, permis, choix des artisans — par M&M CONSTRUCTION, maître d'œuvre en Haute-Savoie.",
  alternates: {
    canonical: "https://www.constructiondemaisons.com/guides/",
  },
};

const guides = [
  {
    title: "Comment coordonner un chantier maison bois sans perdre le contrôle ?",
    excerpt: "Les étapes clés, les pièges courants et pourquoi un maître d'œuvre spécialisé fait la différence entre un chantier qui tient ses délais et un qui dérive.",
    image: "/images/Fotolia_58453596_XL-scaled.jpg",
    href: "/guides/coordonner-chantier-bois/",
    tag: "Coordination",
  },
  {
    title: "Maison ossature bois : avantages, coûts et délais en 2025",
    excerpt: "Tout ce qu'il faut savoir avant de se lancer : budget réaliste, durée de chantier, avantages thermiques et pièges à éviter.",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    href: "/guides/maison-ossature-bois/",
    tag: "Construction",
  },
  {
    title: "RE2020 : ce que ça change pour une maison bois en Haute-Savoie",
    excerpt: "La réglementation RE2020 favorise-t-elle le bois ? Quelles exigences concrètes pour votre projet en zone alpine ?",
    image: "/images/hero-maison-bois-alpine.jpg",
    href: "/guides/re2020-maison-bois/",
    tag: "Réglementation",
  },
  {
    title: "Maîtrise d'œuvre vs CCMI : quelles différences concrètes ?",
    excerpt: "Budget, liberté de choix, garanties, suivi de chantier — ce que vous gagnez (et ce que vous cédez) avec chaque formule.",
    image: "/images/hero-maison-bois-montagne-2.jpg",
    href: "/guides/moe-vs-ccmi/",
    tag: "Comparatif",
  },
  {
    title: "Extension ossature bois : permis, coût, délais",
    excerpt: "Surface, budget, démarches administratives et durée de chantier : tout ce qu'il faut anticiper pour une extension bois réussie.",
    image: "/images/hero-extension-bois-jardin.jpg",
    href: "/guides/extension-ossature-bois/",
    tag: "Extension",
  },
  {
    title: "Comment choisir ses artisans pour une maison bois ?",
    excerpt: "Décennale, qualification Qualibat, références locales : les critères concrets pour ne pas se tromper sur les intervenants de votre chantier bois.",
    image: "/images/hero-extension-bois-golden.jpg",
    href: "/guides/choisir-artisans-maison-bois/",
    tag: "Artisans",
  },
  {
    title: "Permis de construire en zone Genevois français : les pièges à éviter",
    excerpt: "Délais d'instruction, PLU locaux, recours des voisins, demandes de pièces complémentaires — ce que les services d'urbanisme ne vous diront pas d'emblée.",
    image: "/images/1200x742_Bretagne.jpg",
    href: "/guides/permis-construire-genevois/",
    tag: "Urbanisme",
  },
  {
    title: "Prix construction maison 2026 : budget complet par type de projet",
    excerpt: "Maison neuve, extension, rénovation — fourchettes réalistes, tableau des postes de coût et surcoûts spécifiques au Genevois français.",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    href: "/guides/prix-construction-maison/",
    tag: "Budget",
  },
  {
    title: "Prix maison ossature bois en Haute-Savoie : tarifs 2026",
    excerpt: "Budget réaliste par poste, écarts avec le reste de la France, honoraires MOE inclus — tous les chiffres pour cadrer votre projet en zone alpine.",
    image: "/images/hero-maison-bois-montagne-1.jpg",
    href: "/guides/prix-maison-ossature-bois-haute-savoie/",
    tag: "Budget",
  },
  {
    title: "Construction chalet ossature bois en Haute-Savoie",
    excerpt: "Différences techniques avec une maison classique, contraintes PLU en zone de montagne, budget indicatif et rôle du maître d'œuvre.",
    image: "/images/hero-maison-bois-alpine.jpg",
    href: "/guides/construction-chalet-ossature-bois-haute-savoie/",
    tag: "Chalet",
  },
  {
    title: "Garantie décennale et assurance dommage ouvrage en maîtrise d'œuvre",
    excerpt: "Qui souscrit quoi, ce que couvre la DO quand il n'y a pas de CCMI, et les points de vigilance spécifiques à l'ossature bois.",
    image: "/images/hero-maison-bois-montagne-2.jpg",
    href: "/guides/garanties-assurance-maitre-oeuvre/",
    tag: "Juridique",
  },
  {
    title: "Prix maison ossature bois 100m² en Haute-Savoie — Budget estimatif",
    excerpt: "Fourchette 210 000 – 290 000 €, décomposé poste par poste : terrassement, ossature, isolation, menuiseries, honoraires MOE et VRD.",
    image: "/images/Fotolia_58453596_XL-scaled.jpg",
    href: "/guides/prix-maison-ossature-bois-100m2/",
    tag: "Budget 100m²",
  },
  {
    title: "Prix maison ossature bois 120m² en Haute-Savoie — Budget estimatif",
    excerpt: "Fourchette 250 000 – 340 000 €, comparatif R+1 vs plain-pied, et tous les postes détaillés pour un projet 4 chambres en Genevois.",
    image: "/images/hero-extension-bois-jardin.jpg",
    href: "/guides/prix-maison-ossature-bois-120m2/",
    tag: "Budget 120m²",
  },
  {
    title: "Prix maison ossature bois 150m² en Haute-Savoie — Budget estimatif",
    excerpt: "Fourchette 310 000 – 420 000 €, pourquoi le MOE devient rentable à cette surface, et les spécificités RE2020 pour les grandes surfaces.",
    image: "/images/hero-extension-bois-golden.jpg",
    href: "/guides/prix-maison-ossature-bois-150m2/",
    tag: "Budget 150m²",
  },
];

export default function GuidesPage() {
  const [featured, ...rest] = guides;
  return (
    <main>
      <div className="bg-[#2C2C2A] py-16 px-5">
        <div className="max-w-[900px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[36px] md:text-[48px] font-black mt-4 mb-3">Guides techniques</h1>
          <p className="text-white/60 text-[17px] leading-[1.6] max-w-[600px]">
            Rédigés par Mahmoud Ben Ahmed, maître d&apos;œuvre spécialisé maison ossature bois en Genevois français.
          </p>
        </div>
      </div>

      <section className="bg-white py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            {/* Featured */}
            <div>
              <Link href={featured.href} className="no-underline block group">
                <div className="overflow-hidden mb-4">
                  <Image src={featured.image} alt={featured.title} width={540} height={304}
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-2">{featured.tag}</span>
                <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-3 group-hover:text-[#BA7517] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-[#888780] leading-[1.7]">{featured.excerpt}</p>
                <span className="inline-block mt-4 text-[#BA7517] font-bold text-[14px]">Lire le guide →</span>
              </Link>
            </div>
            {/* Sidebar */}
            <div className="flex flex-col gap-0 divide-y divide-[#D9D4CC]">
              {rest.map((g) => (
                <Link key={g.href} href={g.href} className="flex gap-4 py-4 no-underline group">
                  <div className="flex-shrink-0">
                    <Image src={g.image} alt={g.title} width={100} height={75}
                      className="w-[100px] h-[70px] object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#BA7517] mb-1">{g.tag}</span>
                    <h3 className="text-[14px] font-bold text-[#2C2C2A] leading-[1.4] group-hover:text-[#BA7517] transition-colors">
                      {g.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2EDE6] py-14 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-3">Un projet en tête ?</h2>
          <p className="text-[16px] text-[#888780] leading-[1.7] mb-6">
            Ces guides vous donnent les clés. Pour votre projet spécifique, Mahmoud vous répond directement — premier échange gratuit.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
            Configurer mon projet →
          </Link>
        </div>
      </section>
    </main>
  );
}
