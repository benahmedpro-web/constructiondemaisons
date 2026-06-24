import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extension ossature bois — Maître d'œuvre Haute-Savoie | M&M CONSTRUCTION",
  description: "M&M CONSTRUCTION coordonne votre extension ossature bois en Genevois français, Haute-Savoie et Ain. Permis de construire, artisans vérifiés, suivi complet.",
};

const etapes = [
  { title: "Faisabilité & PLU", body: "Analyse de votre terrain, de l'existant et des règles PLU locales. On vérifie le coefficient d'emprise au sol, les marges de recul, la hauteur autorisée — avant de dessiner quoi que ce soit." },
  { title: "Conception & intégration architecturale", body: "L'extension doit s'intégrer à l'existant sur le plan structurel et esthétique. Nous coordonnons avec le bureau d'études structure bois pour garantir la liaison ossature neuve / maçonnerie existante." },
  { title: "Permis ou déclaration préalable", body: "Selon la surface et la commune, il faut un permis de construire ou une déclaration préalable. On s'occupe du dossier complet, du dépôt et du suivi en mairie." },
  { title: "Sélection artisans & chantier", body: "Charpentier bois, menuisier, isolation, bardage, plomberie, électricité — chaque artisan est sélectionné sur ses qualifications bois et ses références locales. Coordination complète de votre côté : zéro." },
];

export default function ExtensionBoisPage() {
  return (
    <main>
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
            Extension ossature bois
          </h1>
          <p className="text-white/75 text-[18px] leading-[1.7] max-w-[640px]">
            Agrandissez votre maison avec une extension bois coordonnée de A à Z — permis, artisans, chantier. Haute-Savoie · Ain · Genevois français.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors">
              Demande d&apos;étude gratuite
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
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              En Haute-Savoie et Ain, les PLU autorisent souvent le bardage bois, ce qui permet une intégration naturelle dans le paysage alpin.
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

      {/* CTA */}
      <section className="bg-[#2C2C2A] py-14 px-5 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[28px] font-bold text-white mb-3">Votre extension bois, sans les complications</h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-8">
            On analyse votre projet gratuitement : faisabilité PLU, budget estimatif, délais réalistes. Sans engagement, sans catalogue imposé.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
