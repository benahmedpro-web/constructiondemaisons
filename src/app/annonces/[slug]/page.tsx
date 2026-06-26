import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { annonces, getAnnonce, getAutresAnnonces } from "@/lib/annonces";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return annonces.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAnnonce(slug);
  if (!a) return {};
  return {
    title: a.surfaceHabitable > 0
      ? `${a.type} ${a.commune} — ${a.surfaceHabitable} m² | M&M CONSTRUCTION`
      : `${a.type} ${a.commune} — ${a.surfaceTerrain} m² | M&M CONSTRUCTION`,
    description: a.accroche,
    alternates: {
      canonical: `https://www.constructiondemaisons.com/annonces/${slug}/`,
    },
  };
}

const statutColors: Record<string, string> = {
  "Disponible": "bg-emerald-100 text-emerald-800",
  "En cours":   "bg-amber-100 text-amber-800",
  "Livré":      "bg-[#F2EDE6] text-[#888780]",
};

function formatBudget(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default async function AnnonceDetailPage({ params }: Props) {
  const { slug } = await params;
  const a = getAnnonce(slug);
  if (!a) notFound();

  const autres = getAutresAnnonces(slug);

  return (
    <main>
      {/* Breadcrumb + Hero */}
      <div className="bg-[#2C2C2A] py-10 px-5">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex gap-2 text-[13px] text-white/40 mb-4">
            <Link href="/" className="text-white/40 no-underline hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/annonces/" className="text-white/40 no-underline hover:text-white">Annonces</Link>
            <span>/</span>
            <span className="text-white/70">{a.commune}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 ${statutColors[a.statut]}`}>
              {a.statut}
            </span>
            <span className="text-[13px] text-[#BA7517] font-bold">{a.type}</span>
          </div>
          <h1 className="text-white text-[30px] md:text-[42px] font-black leading-tight mb-2">
            {a.type} — {a.commune}
          </h1>
          <p className="text-white/60 text-[16px]">{a.departement} · {a.zone}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <section className="bg-white py-10 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* Colonne gauche */}
          <div>
            {/* Photo principale */}
            <div className="relative h-[380px] md:h-[480px] overflow-hidden bg-[#2C2C2A] mb-6">
              <Image
                src={a.images[0]}
                alt={`${a.type} ${a.commune}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Galerie miniatures */}
            {a.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                {a.images.slice(1).map((img, i) => (
                  <div key={i} className="relative h-[100px] overflow-hidden bg-[#2C2C2A]">
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Accroche */}
            <p className="text-[17px] font-medium text-[#2C2C2A] leading-[1.7] mb-6 border-l-4 border-[#BA7517] pl-5">
              {a.accroche}
            </p>

            {/* Description */}
            <div className="flex flex-col gap-4 mb-8">
              {a.description.map((para, i) => (
                <p key={i} className="text-[15px] text-[#888780] leading-[1.8]">{para}</p>
              ))}
            </div>

            {/* Points clés */}
            <div className="bg-[#F2EDE6] p-6 mb-8">
              <h2 className="text-[16px] font-bold text-[#2C2C2A] uppercase tracking-wide mb-4">Points clés</h2>
              <ul className="flex flex-col gap-2.5">
                {a.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#2C2C2A]">
                    <span className="text-[#BA7517] mt-0.5 flex-shrink-0">◆</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contexte local */}
            {a.contexte && (
              <div className="mb-8">
                <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-3">Contexte du projet</h2>
                <p className="text-[15px] text-[#888780] leading-[1.8]">{a.contexte}</p>
              </div>
            )}

            {/* Section terrain — contenu additionnel */}
            {a.type === "Terrain à bâtir" && (
              <div className="mb-8">
                <h2 className="text-[20px] font-bold text-[#2C2C2A] mb-4">Construire en ossature bois sur ce terrain</h2>
                <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
                  La maison ossature bois est particulièrement adaptée aux terrains du Genevois français et de Haute-Savoie.
                  Sa légèreté structurelle réduit les contraintes sur les fondations — un avantage concret en zone sismique 3,
                  où le calcul parasismique est obligatoire. La mise hors d&apos;eau et hors d&apos;air est réalisée en 4 à 6 semaines,
                  limitant les risques liés aux intempéries alpines pendant le chantier.
                </p>
                <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
                  La réglementation RE2020 en vigueur depuis janvier 2022 favorise nettement le bois parmi les matériaux de construction :
                  faible bilan carbone, performance thermique élevée (R ≥ 5 en mur, R ≥ 7 en toiture) et compatibilité native
                  avec les systèmes de chauffage basse consommation (PAC, plancher chauffant, VMC double flux).
                  Sur ce type de parcelle, une maison bien orientée peut atteindre un Bbio inférieur à 50 sans surcoût significatif.
                </p>
                <p className="text-[15px] text-[#888780] leading-[1.8]">
                  Avec M&M CONSTRUCTION, l&apos;accompagnement commence dès l&apos;étude de faisabilité : analyse du PLU, simulation
                  d&apos;emprises, orientation bioclimatique, budget poste par poste. Un seul interlocuteur de la conception
                  jusqu&apos;à la réception des travaux — sans frais de commission d&apos;entreprise générale.
                </p>
              </div>
            )}

            {/* Guides liés */}
            {a.guidesLies && a.guidesLies.length > 0 && (
              <div className="border-t border-[#D9D4CC] pt-6">
                <h2 className="text-[16px] font-bold text-[#2C2C2A] uppercase tracking-wide mb-4">Guides utiles pour ce projet</h2>
                <div className="flex flex-col gap-2">
                  {a.guidesLies.map((g, i) => (
                    <Link
                      key={i}
                      href={g.href}
                      className="flex items-center gap-3 p-3 bg-[#F2EDE6] no-underline hover:bg-[#E8E2D9] transition-colors group"
                    >
                      <span className="text-[#BA7517] flex-shrink-0">→</span>
                      <span className="text-[14px] font-medium text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{g.titre}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Colonne droite — fiche + CTA sticky */}
          <div>
            <div className="sticky top-20">
              {/* Fiche chiffrée */}
              <div className="border border-[#D9D4CC] mb-5">
                <div className="bg-[#2C2C2A] px-5 py-4">
                  <div className="text-[11px] text-white/50 uppercase tracking-widest mb-1">{a.type === "Terrain à bâtir" ? "Prix du terrain" : "Budget estimé"}</div>
                  <div className="text-[32px] font-black text-[#BA7517]">{formatBudget(a.budget)}</div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {[
                    a.surfaceTerrain > 0 ? { label: "Terrain", val: `${a.surfaceTerrain} m²` } : null,
                    a.surfaceHabitable > 0 ? { label: "Surface habitable", val: `${a.surfaceHabitable} m²` } : null,
                    a.pieces > 0 ? { label: "Pièces", val: `${a.pieces} pièces` } : null,
                    { label: "Type", val: a.type },
                    { label: "Commune", val: a.commune },
                    { label: "Zone", val: a.zone },
                    { label: "Statut", val: a.statut },
                  ].filter((row): row is { label: string; val: string } => row !== null).map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-1.5 border-b border-[#D9D4CC] last:border-0 text-[14px]">
                      <span className="text-[#888780]">{row.label}</span>
                      <span className="font-bold text-[#2C2C2A]">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/demande-etude/?ref=${a.slug}`}
                className="block bg-[#BA7517] text-white text-center text-[16px] font-bold py-4 no-underline hover:bg-[#9E6312] transition-colors mb-3"
              >
                Je suis intéressé(e) →
              </Link>
              <Link
                href="/annonces/"
                className="block text-center text-[13px] text-[#888780] no-underline hover:text-[#2C2C2A] transition-colors"
              >
                ← Retour aux annonces
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autres annonces */}
      {autres.length > 0 && (
        <section className="bg-[#F2EDE6] py-12 px-5">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-7">Autres annonces</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {autres.map((b) => (
                <Link key={b.slug} href={`/annonces/${b.slug}/`} className="no-underline group">
                  <div className="bg-white overflow-hidden group-hover:shadow-md transition-shadow">
                    <div className="relative h-[160px] bg-[#2C2C2A]">
                      <Image src={b.image} alt={b.commune} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="text-[11px] text-[#888780] mb-0.5">{b.departement}</div>
                      <div className="text-[16px] font-black text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors mb-1">{b.commune}</div>
                      <div className="text-[12px] text-[#BA7517] font-bold mb-2">{b.type}</div>
                      <div className="text-[16px] font-black text-[#2C2C2A]">{formatBudget(b.budget)}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
