import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gammes, gammeParSlug, avecArticle, AvecArticle } from "@/lib/gammes";
import { annonces, type Annonce } from "@/lib/annonces";
import { datePage } from "@/lib/dates-pages";

const BASE = "https://www.constructiondemaisons.com";

export function generateStaticParams() {
  return gammes.map((g) => ({ modele: g.slug }));
}

// Les projets d'une gamme sont identifiés par le visuel de modèle porté par la
// fiche, qui est aussi la clé utilisée par le filtre de /annonces/. Une seule
// convention, donc pas de risque de divergence entre la liste et cette page.
function projetsDeLaGamme(slug: string): Annonce[] {
  return annonces
    .filter((a) => a.images[0] === `/images/modele-${slug}.png`)
    .sort((a, b) => a.budget - b.budget);
}

const eur = (n: number) => n.toLocaleString("fr-FR").replace(/ | /g, " ") + " €";

export async function generateMetadata({ params }: { params: Promise<{ modele: string }> }): Promise<Metadata> {
  const { modele } = await params;
  const g = gammeParSlug(modele);
  if (!g) return {};
  const projets = projetsDeLaGamme(g.slug);
  const prix = projets.length ? ` À partir de ${eur(projets[0].budget)} terrain compris.` : "";
  const description = `${g.pitch} ${g.surfaces}, ${g.typologies}, ossature bois RE2020.${prix}`;
  const url = `${BASE}/catalogue/${g.slug}/`;
  return {
    title: `Maison ${g.nom} — ossature bois ${g.type.toLowerCase()}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Maison ossature bois ${g.nom} — M&M CONSTRUCTION`,
      description,
      url,
      siteName: "M&M CONSTRUCTION",
      locale: "fr_FR",
      type: "website",
      images: [{ url: BASE + g.image }],
    },
  };
}

export default async function GammePage({ params }: { params: Promise<{ modele: string }> }) {
  const { modele } = await params;
  const g = gammeParSlug(modele);
  if (!g) notFound();

  const projets = projetsDeLaGamme(g.slug);
  const budgets = projets.map((p) => p.budget);
  const terrains = projets.map((p) => p.surfaceTerrain);
  const surfaces = [...new Set(projets.map((p) => p.surfaceHabitable))].sort((a, b) => a - b);
  const communes = [...new Set(projets.map((p) => p.commune))].sort((a, b) => a.localeCompare(b, "fr"));
  const zones = [...new Set(projets.map((p) => p.zone))];

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
      { "@type": "ListItem", position: 2, name: "Catalogue", item: BASE + "/catalogue/" },
      { "@type": "ListItem", position: 3, name: `Modèle ${g.nom}`, item: `${BASE}/catalogue/${g.slug}/` },
    ],
  };

  const jsonLdPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Maison ossature bois ${g.nom}`,
    description: g.pitch,
    url: `${BASE}/catalogue/${g.slug}/`,
    inLanguage: "fr-FR",
    dateModified: datePage(`/catalogue/${g.slug}/`).toISOString().slice(0, 10),
    publisher: { "@type": "Organization", name: "M&M CONSTRUCTION", url: BASE },
    primaryImageOfPage: BASE + g.image,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }} />

      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-[#2C2C2A] py-14 px-5">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-center gap-2 text-[12px] text-white/40 mb-4">
              <Link href="/" className="text-white/40 no-underline hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/catalogue/" className="text-white/40 no-underline hover:text-white transition-colors">Catalogue</Link>
              <span>/</span>
              <span className="text-white/70">{g.nom}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-center">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">{g.tag}</span>
                <h1 className="text-white text-[34px] md:text-[46px] font-black leading-tight mb-4">
                  Maison ossature bois {g.nom}
                </h1>
                <p className="text-[17px] text-white/70 leading-[1.7] mb-6">{g.pitch}</p>
                <div className="flex flex-wrap gap-6">
                  {[
                    ["Type", g.type],
                    ["Surfaces", g.surfaces],
                    ["Typologies", g.typologies],
                    ["Plans", `${g.variantes}`],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[11px] text-white/40 uppercase tracking-wide">{k}</div>
                      <div className="text-[16px] font-bold text-white mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={g.image} alt={`Maison ossature bois ${g.nom}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Chiffres du modèle sur le terrain */}
        {projets.length > 0 && (
          <section className="border-b border-[#D9D4CC] bg-[#F2EDE6]">
            <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D9D4CC]">
              {[
                ["Projets disponibles", `${projets.length}`],
                ["Budget", `${eur(Math.min(...budgets))} – ${eur(Math.max(...budgets))}`],
                ["Terrains", `${Math.min(...terrains)} – ${Math.max(...terrains)} m²`],
                ["Communes", `${communes.length}`],
              ].map(([k, v]) => (
                <div key={k} className="px-4 py-6 text-center">
                  <div className="text-[18px] md:text-[20px] font-black text-[#2C2C2A]">{v}</div>
                  <div className="text-[12px] text-[#888780] mt-1">{k}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Éditorial */}
        <article className="py-14 px-5">
          <div className="max-w-[780px] mx-auto">
            <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-4">À qui s&apos;adresse {avecArticle(g.nom)}</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-8">{g.pourQui}</p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-4">Comment il se pose sur le terrain</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-8">{g.implantation}</p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-4">L&apos;organisation intérieure</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8] mb-8">{g.amenagement}</p>

            <h2 className="text-[26px] font-bold text-[#2C2C2A] mb-4">Construction et performance</h2>
            <p className="text-[16px] text-[#888780] leading-[1.8]">
              {AvecArticle(g.nom)}{" "}est construit en ossature bois et atteint les exigences RE2020 par l&apos;enveloppe plutôt que par
              les équipements : isolation renforcée en murs et en toiture, ponts thermiques limités par la nature même de
              l&apos;ossature, étanchéité à l&apos;air contrôlée. La mise hors d&apos;eau et hors d&apos;air intervient en
              quatre à six semaines, ce qui limite l&apos;exposition du chantier aux aléas climatiques, un point qui compte
              en zone alpine. Chaque projet est mené en maîtrise d&apos;œuvre : artisans locaux mis en concurrence,
              contrats directs, et un taux d&apos;honoraires connu dès la signature.
            </p>
          </div>
        </article>

        {/* Projets disponibles */}
        {projets.length > 0 && (
          <section className="bg-[#F2EDE6] py-14 px-5">
            <div className="max-w-[1100px] mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
                <h2 className="text-[26px] font-bold text-[#2C2C2A]">
                  {projets.length} projet{projets.length > 1 ? "s" : ""} {g.nom} disponible{projets.length > 1 ? "s" : ""}
                </h2>
                <Link href={`/annonces/?type=${g.slug}`} className="text-[14px] font-bold text-[#BA7517] no-underline hover:underline">
                  Voir dans la liste complète →
                </Link>
              </div>
              <p className="text-[15px] text-[#888780] leading-[1.7] mb-8 max-w-[780px]">
                Terrain et construction compris, honoraires de maîtrise d&apos;œuvre inclus.
                {surfaces.length > 1 ? ` Disponible en ${surfaces.join(", ")} m² habitables.` : ` Surface habitable : ${surfaces[0]} m².`}
                {` Réparti sur ${communes.length} commune${communes.length > 1 ? "s" : ""} en ${zones.join(", ")}.`}
              </p>

              <div className="border border-[#D9D4CC] bg-white overflow-x-auto">
                <div className="min-w-[640px]">
                  <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr_auto] bg-[#2C2C2A] text-white text-[12px] font-bold uppercase tracking-wide px-4 py-3">
                    <div>Commune</div>
                    <div className="text-center">Habitable</div>
                    <div className="text-center">Terrain</div>
                    <div className="text-right">Budget</div>
                    <div />
                  </div>
                  {projets.map((p, i) => (
                    <Link
                      key={p.slug}
                      href={`/annonces/${p.slug}/`}
                      className={`grid grid-cols-[1.4fr_0.8fr_0.8fr_1fr_auto] items-center px-4 py-3 text-[14px] no-underline border-b border-[#D9D4CC] last:border-0 group ${i % 2 === 0 ? "bg-white" : "bg-[#F2EDE6]"} hover:bg-[#E8E2D9] transition-colors`}
                    >
                      <div className="text-[#2C2C2A] font-medium group-hover:text-[#BA7517] transition-colors">
                        {p.commune}
                        <span className="block text-[12px] text-[#888780] font-normal">{p.departement}</span>
                      </div>
                      <div className="text-center text-[#888780]">{p.surfaceHabitable} m²</div>
                      <div className="text-center text-[#888780]">{p.surfaceTerrain} m²</div>
                      <div className="text-right text-[#2C2C2A] font-bold">{eur(p.budget)}</div>
                      <div className="text-[#BA7517] pl-4">→</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Autres gammes */}
        <section className="py-14 px-5">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-6">Les autres gammes du catalogue</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {gammes.filter((o) => o.slug !== g.slug).map((o) => (
                <Link key={o.slug} href={`/catalogue/${o.slug}/`} className="border border-[#D9D4CC] no-underline group hover:border-[#BA7517] transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={o.image} alt={`Maison ossature bois ${o.nom}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                  </div>
                  <div className="p-3">
                    <div className="text-[15px] font-bold text-[#2C2C2A] group-hover:text-[#BA7517] transition-colors">{o.nom}</div>
                    <div className="text-[12px] text-[#888780] mt-0.5">{o.type} · {o.surfaces}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2C2C2A] py-12 px-5">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold text-white mb-2">{AvecArticle(g.nom)}{" "}sur votre terrain ?</h2>
              <p className="text-[15px] text-white/60 leading-[1.7]">
                Décrivez votre projet et recevez une estimation chiffrée, terrain et honoraires compris. Gratuit jusqu&apos;à la remise du chiffrage.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href={`/demande-etude/?type=maison-neuve&gamme=${encodeURIComponent(g.nom)}`} className="inline-block bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 no-underline hover:bg-[#9E6312] transition-colors text-center">
                Décrire mon projet →
              </Link>
              <a href="tel:+33480161783" className="inline-block border border-white/30 text-white text-[14px] px-6 py-2.5 no-underline hover:border-white transition-colors text-center">
                Appeler directement
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
