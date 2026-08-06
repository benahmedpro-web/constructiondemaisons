"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, FormEvent } from "react";
import { annonces } from "@/lib/annonces";

const filtres = ["Tous", "Disponible", "En cours", "Livré"] as const;
type Filtre = typeof filtres[number];

const statutColors: Record<string, string> = {
  "Disponible": "bg-emerald-100 text-emerald-800",
  "En cours":   "bg-amber-100 text-amber-800",
  "Livré":      "bg-[#F2EDE6] text-[#888780]",
};

const villesParDept: Record<string, string[]> = {
  "Haute-Savoie (74)": [
    "Allonzier-la-Caille", "Ambilly", "Amancy", "Annecy", "Annemasse",
    "Archamps", "Argonay", "Ayse", "Ballaison", "Beaumont",
    "Bellevaux", "Bogève", "Bonne", "Bonneville", "Bons-en-Chablais",
    "Bossey", "Cervens", "Chamonix-Mont-Blanc", "Charvonnex", "Châtel",
    "Chênex", "Cluses", "Collonges-sous-Salève", "Combloux", "Contamine-sur-Arve",
    "Copponex", "Cordon", "Cranves-Sales", "Cruseilles", "Dingy-Saint-Clair",
    "Domancy", "Doussard", "Douvaine", "Draillant", "Étrembières",
    "Évian-les-Bains", "Évires", "Faverges", "Feigères", "Fillinges",
    "Gaillard", "Groisy", "La Balme-de-Sillingy", "La Roche-sur-Foron", "Larringes",
    "Les Gets", "Les Houches", "Lucinges", "Machilly", "Magland",
    "Marignier", "Marnaz", "Megève", "Menthon-Saint-Bernard", "Meythet",
    "Mieussy", "Morzine", "Nancy-sur-Cluses", "Nangy", "Neydens",
    "Onnion", "Orcier", "Poisy", "Présilly", "Pringy",
    "Reignier-Ésery", "Rumilly", "Saint-Gervais-les-Bains", "Saint-Jeoire", "Saint-Jorioz",
    "Saint-Julien-en-Genevois", "Saint-Martin-Bellevue", "Saint-Paul-en-Chablais", "Saint-Pierre-en-Faucigny", "Sallanches",
    "Samoëns", "Scientrier", "Scionzier", "Seynod", "Sillingy",
    "Talloires", "Taninges", "Thonon-les-Bains", "Vétraz-Monthoux", "Vers",
    "Veyrier-du-Lac", "Ville-la-Grand", "Viry", "Viuz-en-Sallaz", "Vulbens",
  ],
  "Ain (01)": [
    "Ambérieu-en-Bugey", "Bellegarde-sur-Valserine", "Belley", "Bourg-en-Bresse",
    "Cessy", "Challex", "Châtillon-en-Michaille", "Chevry", "Collonges",
    "Crozet", "Divonne-les-Bains", "Échenevex", "Farges", "Ferney-Voltaire",
    "Gex", "Grilly", "Injoux-Génissiat", "Léaz", "Montluel",
    "Nantua", "Ornex", "Oyonnax", "Péron", "Pougny",
    "Prévessin-Moëns", "Saint-Genis-Pouilly", "Saint-Jean-de-Gonville", "Segny", "Sergy",
    "Thoiry", "Valserhône", "Versonnex",
  ],
};

function formatBudget(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export default function AnnoncesPage() {
  const [actif, setActif] = useState<Filtre>("Tous");
  const [communesFiltrees, setCommunesFiltrees] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [alerteOpen, setAlerteOpen] = useState(false);
  const [alerteForm, setAlerteForm] = useState({ prenom: "", email: "", telephone: "" });
  const [alerteState, setAlerteState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submitAlerte(e: FormEvent) {
    e.preventDefault();
    setAlerteState("loading");
    try {
      const res = await fetch("/api/alerte-annonce", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...alerteForm,
          statut: actif,
          communes: communesFiltrees,
        }),
      });
      setAlerteState(res.ok ? "success" : "error");
    } catch {
      setAlerteState("error");
    }
  }

  function closeAlerte() {
    setAlerteOpen(false);
    setTimeout(() => {
      setAlerteState("idle");
      setAlerteForm({ prenom: "", email: "", telephone: "" });
    }, 300);
  }

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  function toggleCommune(c: string) {
    setCommunesFiltrees((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  const villesFiltrees = Object.entries(villesParDept).reduce<Record<string, string[]>>((acc, [dept, villes]) => {
    const filtered = search
      ? villes.filter((v) => v.toLowerCase().includes(search.toLowerCase()))
      : villes;
    if (filtered.length > 0) acc[dept] = filtered;
    return acc;
  }, {});

  const visibles = annonces
    .filter((a) => actif === "Tous" || a.statut === actif)
    .filter((a) => communesFiltrees.length === 0 || communesFiltrees.includes(a.commune));

  return (<>
    <main>
      <div className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[1100px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[34px] md:text-[46px] font-black mt-4 mb-3 leading-tight">
            Annonces — Projets disponibles
          </h1>
          <p className="text-white/60 text-[17px] max-w-[600px] leading-[1.6]">
            Terrains sélectionnés et projets de construction en Haute-Savoie, Ain et Genevois français. Coordonnés par M&amp;M CONSTRUCTION.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white border-b border-[#D9D4CC] px-5 sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-x-4 gap-y-2 py-3">

          {/* Statut */}
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-[#888780] uppercase tracking-widest mr-2 hidden sm:block">Statut :</span>
            {filtres.map((f) => (
              <button
                key={f}
                onClick={() => setActif(f)}
                className={`px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                  actif === f
                    ? "bg-[#2C2C2A] text-white border-[#2C2C2A]"
                    : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Séparateur */}
          <div className="hidden sm:block w-px h-5 bg-[#D9D4CC]" />

          {/* Dropdown communes */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className={`flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                communesFiltrees.length > 0
                  ? "bg-[#BA7517] text-white border-[#BA7517]"
                  : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
              }`}
            >
              <span>
                {communesFiltrees.length === 0
                  ? "Commune"
                  : communesFiltrees.length === 1
                    ? communesFiltrees[0]
                    : `${communesFiltrees.length} communes`}
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-[#D9D4CC] shadow-lg z-50">
                {/* Search */}
                <div className="p-2 border-b border-[#D9D4CC]">
                  <input
                    type="text"
                    placeholder="Rechercher une commune…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-1.5 text-[13px] border border-[#D9D4CC] outline-none focus:border-[#BA7517] text-[#2C2C2A] placeholder-[#888780]"
                    autoFocus
                  />
                </div>

                {/* Header actions */}
                {communesFiltrees.length > 0 && (
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#D9D4CC] bg-[#F2EDE6]">
                    <span className="text-[11px] text-[#888780]">{communesFiltrees.length} sélectionnée{communesFiltrees.length > 1 ? "s" : ""}</span>
                    <button
                      onClick={() => { setCommunesFiltrees([]); setDropdownOpen(false); }}
                      className="text-[11px] text-[#BA7517] hover:text-[#9E6312] cursor-pointer underline"
                    >
                      Tout effacer
                    </button>
                  </div>
                )}

                {/* List */}
                <div className="max-h-64 overflow-y-auto">
                  {Object.entries(villesFiltrees).map(([dept, villes]) => (
                    <div key={dept}>
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#BA7517] bg-[#F2EDE6] sticky top-0">
                        {dept}
                      </div>
                      {villes.map((v) => {
                        const checked = communesFiltrees.includes(v);
                        return (
                          <label
                            key={v}
                            className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors text-[13px] ${
                              checked ? "bg-[#FDF8F0] text-[#2C2C2A] font-medium" : "text-[#2C2C2A] hover:bg-[#F2EDE6]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleCommune(v)}
                              className="accent-[#BA7517] w-3.5 h-3.5 flex-shrink-0"
                            />
                            {v}
                          </label>
                        );
                      })}
                    </div>
                  ))}
                  {Object.keys(villesFiltrees).length === 0 && (
                    <div className="px-3 py-4 text-[13px] text-[#888780] text-center">Aucune commune trouvée</div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-[#D9D4CC] px-3 py-2">
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className="w-full bg-[#2C2C2A] text-white text-[13px] font-bold py-2 cursor-pointer hover:bg-[#BA7517] transition-colors"
                  >
                    Appliquer
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <span className="text-[13px] text-[#888780] whitespace-nowrap">{visibles.length} annonce{visibles.length > 1 ? "s" : ""}</span>
            <button
              onClick={() => setAlerteOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold border border-[#BA7517] text-[#BA7517] hover:bg-[#BA7517] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M6.5 1a4.5 4.5 0 0 1 4.5 4.5c0 2.5.8 3.5 1.3 4H.7C1.2 9 2 8 2 5.5A4.5 4.5 0 0 1 6.5 1ZM5 10.5h3a1.5 1.5 0 0 1-3 0Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              Créer une alerte
            </button>
          </div>
        </div>
      </div>

      {/* Grille */}
      <section className="bg-[#F2EDE6] py-10 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibles.map((a) => (
            <Link key={a.slug} href={`/annonces/${a.slug}/`} className="no-underline group">
              <div className="bg-white flex flex-col overflow-hidden h-full transition-shadow group-hover:shadow-lg">
                {/* Photo */}
                <div className="relative h-[200px] overflow-hidden bg-[#2C2C2A]">
                  <Image
                    src={a.image}
                    alt={`${a.type} — ${a.commune}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 ${statutColors[a.statut]}`}>
                      {a.statut}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[11px] text-[#888780] uppercase tracking-widest mb-1">{a.departement}</div>
                  <h2 className="text-[18px] font-black text-[#2C2C2A] mb-1 group-hover:text-[#BA7517] transition-colors">{a.commune}</h2>
                  <div className="text-[13px] text-[#BA7517] font-bold mb-3">{a.type}</div>

                  {/* Specs */}
                  {a.type === "Terrain à bâtir" ? (
                    <div className="grid grid-cols-1 gap-2 mb-4 py-3 border-y border-[#D9D4CC]">
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceTerrain > 0 ? a.surfaceTerrain : "—"}</div>
                        <div className="text-[10px] text-[#888780]">m² terrain</div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-[#D9D4CC]">
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceTerrain}</div>
                        <div className="text-[10px] text-[#888780]">m² terrain</div>
                      </div>
                      <div className="text-center border-x border-[#D9D4CC]">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.surfaceHabitable}</div>
                        <div className="text-[10px] text-[#888780]">m² habitables</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[15px] font-black text-[#2C2C2A]">{a.pieces}</div>
                        <div className="text-[10px] text-[#888780]">pièces</div>
                      </div>
                    </div>
                  )}

                  <p className="text-[13px] text-[#888780] leading-[1.6] mb-4 flex-1">{a.accroche}</p>

                  {/* Prix */}
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <div className="text-[11px] text-[#888780]">{a.type === "Terrain à bâtir" ? "Prix du terrain" : "Budget estimé"}</div>
                      <div className="text-[20px] font-black text-[#BA7517]">{formatBudget(a.budget)}</div>
                    </div>
                    <span className="inline-block bg-[#2C2C2A] text-white text-[13px] font-bold px-4 py-2.5 group-hover:bg-[#BA7517] transition-colors">
                      Voir le détail →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2C2C2A] py-12 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="text-white text-[22px] font-bold mb-3">Vous avez un terrain ou un projet ?</h2>
          <p className="text-white/60 text-[15px] leading-[1.7] mb-6">
            M&amp;M CONSTRUCTION peut analyser la faisabilité de votre projet et coordonner l&apos;ensemble du chantier. Premier échange gratuit.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-7 py-3.5 no-underline hover:bg-[#9E6312] transition-colors">
            Configurer mon projet →
          </Link>
        </div>
      </section>
    </main>

    {/* Modale alerte */}
    {alerteOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/60" onClick={closeAlerte} />
        <div className="relative bg-white w-full max-w-[460px] shadow-2xl">
          {/* Header */}
          <div className="bg-[#2C2C2A] px-6 py-5 flex items-start justify-between">
            <div>
              <div className="text-[11px] text-[#BA7517] uppercase tracking-widest font-bold mb-1">Annonces M&amp;M CONSTRUCTION</div>
              <h2 className="text-white text-[20px] font-black leading-tight">Créer une alerte</h2>
              <p className="text-white/50 text-[13px] mt-1">Soyez notifié(e) dès qu&apos;une annonce correspond à vos critères.</p>
            </div>
            <button onClick={closeAlerte} className="text-white/40 hover:text-white transition-colors cursor-pointer mt-0.5 ml-4 flex-shrink-0 text-[20px] leading-none">&times;</button>
          </div>

          {alerteState === "success" ? (
            <div className="px-6 py-10 text-center">
              <div className="text-[40px] mb-3">✓</div>
              <p className="text-[18px] font-bold text-[#2C2C2A] mb-2">Alerte enregistrée !</p>
              <p className="text-[14px] text-[#888780] leading-[1.7]">
                Mahmoud Ben Ahmed vous contactera dès qu&apos;une annonce correspondant à vos critères est disponible.
              </p>
              <button onClick={closeAlerte} className="mt-6 inline-block bg-[#2C2C2A] text-white text-[14px] font-bold px-6 py-2.5 cursor-pointer hover:bg-[#BA7517] transition-colors">
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={submitAlerte} className="px-6 py-5 flex flex-col gap-4">
              {/* Récap critères */}
              <div className="bg-[#F2EDE6] px-4 py-3 text-[13px] text-[#888780] leading-[1.7]">
                <div className="font-bold text-[#2C2C2A] text-[11px] uppercase tracking-widest mb-1.5">Critères de recherche</div>
                <div><span className="text-[#2C2C2A]">Statut :</span> {actif === "Tous" ? "Tous" : actif}</div>
                <div>
                  <span className="text-[#2C2C2A]">Communes :</span>{" "}
                  {communesFiltrees.length === 0
                    ? "Toutes (74 + 01)"
                    : communesFiltrees.join(", ")}
                </div>
              </div>

              {/* Champs */}
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-1.5">Prénom</label>
                  <input
                    type="text"
                    value={alerteForm.prenom}
                    onChange={(e) => setAlerteForm((f) => ({ ...f, prenom: e.target.value }))}
                    placeholder="Votre prénom"
                    className="w-full border border-[#D9D4CC] px-3 py-2.5 text-[14px] text-[#2C2C2A] outline-none focus:border-[#BA7517] placeholder-[#888780]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-1.5">Email <span className="text-[#BA7517]">*</span></label>
                  <input
                    type="email"
                    required
                    value={alerteForm.email}
                    onChange={(e) => setAlerteForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="votre@email.com"
                    className="w-full border border-[#D9D4CC] px-3 py-2.5 text-[14px] text-[#2C2C2A] outline-none focus:border-[#BA7517] placeholder-[#888780]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-1.5">Téléphone <span className="text-[#888780] font-normal normal-case tracking-normal">(optionnel)</span></label>
                  <input
                    type="tel"
                    value={alerteForm.telephone}
                    onChange={(e) => setAlerteForm((f) => ({ ...f, telephone: e.target.value }))}
                    placeholder="06 xx xx xx xx"
                    className="w-full border border-[#D9D4CC] px-3 py-2.5 text-[14px] text-[#2C2C2A] outline-none focus:border-[#BA7517] placeholder-[#888780]"
                  />
                </div>
              </div>

              {alerteState === "error" && (
                <p className="text-[13px] text-red-600">Une erreur est survenue. Réessayez ou contactez-nous directement.</p>
              )}

              <button
                type="submit"
                disabled={alerteState === "loading"}
                className="w-full bg-[#BA7517] text-white text-[15px] font-bold py-3.5 cursor-pointer hover:bg-[#9E6312] transition-colors disabled:opacity-60"
              >
                {alerteState === "loading" ? "Enregistrement…" : "Créer l'alerte →"}
              </button>

              <p className="text-[11px] text-[#888780] text-center leading-[1.6]">
                Vos données sont utilisées uniquement pour vous recontacter au sujet de cette recherche.
              </p>
            </form>
          )}
        </div>
      </div>
    )}
  </>);
}
