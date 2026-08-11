"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { annonces } from "@/lib/annonces";


const statutColors: Record<string, string> = {
  "Disponible": "bg-emerald-100 text-emerald-800",
  "En cours":   "bg-amber-100 text-amber-800",
  "Livré":      "bg-[#F2EDE6] text-[#888780]",
};

const COMMUNE_COORDS: Record<string, [number, number]> = {
  // Haute-Savoie (74)
  "Allonzier-la-Caille": [45.968, 6.073], "Ambilly": [46.208, 6.241],
  "Amancy": [46.040, 6.378], "Annecy": [45.899, 6.130], "Annemasse": [46.194, 6.234],
  "Archamps": [46.148, 6.108], "Argonay": [45.930, 6.130], "Ayse": [46.070, 6.600],
  "Ballaison": [46.292, 6.408], "Beaumont": [46.115, 6.025], "Bellevaux": [46.238, 6.590],
  "Bogève": [46.150, 6.540], "Bonne": [46.120, 6.520], "Bonneville": [46.083, 6.408],
  "Bons-en-Chablais": [46.263, 6.383], "Bossey": [46.160, 6.143], "Cervens": [46.283, 6.418],
  "Chamonix-Mont-Blanc": [45.923, 6.870], "Charvonnex": [46.003, 6.153], "Châtel": [46.268, 6.838],
  "Chênex": [46.142, 6.093], "Cluses": [46.063, 6.580], "Collonges-sous-Salève": [46.157, 6.132],
  "Combloux": [45.903, 6.618], "Contamine-sur-Arve": [46.098, 6.452], "Copponex": [46.003, 6.063],
  "Cordon": [45.910, 6.632], "Cranves-Sales": [46.188, 6.224], "Cruseilles": [46.013, 6.087],
  "Dingy-en-Vuache": [46.082, 5.973], "Dingy-Saint-Clair": [45.973, 6.228],
  "Domancy": [45.898, 6.660], "Doussard": [45.783, 6.222], "Douvaine": [46.298, 6.303],
  "Draillant": [46.303, 6.432], "Étrembières": [46.172, 6.202], "Évian-les-Bains": [46.397, 6.590],
  "Évires": [45.983, 6.178], "Faverges": [45.742, 6.293], "Feigères": [46.097, 6.015],
  "Fillinges": [46.200, 6.352], "Gaillard": [46.192, 6.213], "Groisy": [45.983, 6.128],
  "La Balme-de-Sillingy": [45.970, 6.013], "La Roche-sur-Foron": [46.068, 6.313],
  "Larringes": [46.382, 6.662], "Les Gets": [46.158, 6.668], "Les Houches": [45.893, 6.798],
  "Lucinges": [46.208, 6.333], "Machilly": [46.213, 6.302], "Magland": [46.033, 6.613],
  "Marignier": [46.093, 6.507], "Marnaz": [46.063, 6.533], "Megève": [45.857, 6.617],
  "Menthon-Saint-Bernard": [45.847, 6.197], "Meythet": [45.923, 6.098], "Mieussy": [46.137, 6.527],
  "Morzine": [46.178, 6.712], "Nancy-sur-Cluses": [46.082, 6.523], "Nangy": [46.112, 6.433],
  "Neydens": [46.118, 6.063], "Onnion": [46.197, 6.532], "Orcier": [46.323, 6.528],
  "Poisy": [45.928, 6.068], "Présilly": [46.090, 6.013], "Pringy": [45.923, 6.087],
  "Reignier-Ésery": [46.143, 6.267], "Rumilly": [45.867, 5.938],
  "Saint-Gervais-les-Bains": [45.883, 6.718], "Saint-Jeoire": [46.143, 6.507],
  "Saint-Jorioz": [45.822, 6.172], "Saint-Julien-en-Genevois": [46.143, 6.080],
  "Saint-Martin-Bellevue": [45.963, 6.153], "Saint-Paul-en-Chablais": [46.348, 6.538],
  "Saint-Pierre-en-Faucigny": [46.063, 6.443], "Sallanches": [45.932, 6.632],
  "Samoëns": [46.077, 6.722], "Savigny": [46.073, 5.983], "Scientrier": [46.112, 6.467],
  "Scionzier": [46.052, 6.553], "Seynod": [45.877, 6.088], "Sillingy": [45.967, 5.992],
  "Talloires": [45.842, 6.213], "Taninges": [46.113, 6.598], "Thonon-les-Bains": [46.373, 6.477],
  "Vétraz-Monthoux": [46.192, 6.258], "Vers": [46.103, 6.030], "Veyrier-du-Lac": [45.867, 6.183],
  "Ville-la-Grand": [46.202, 6.243], "Viry": [46.100, 5.978], "Viuz-en-Sallaz": [46.177, 6.392],
  "Vulbens": [46.087, 5.979],
  "Étaux": [46.082, 6.388], "Saint-Jean-de-Tholome": [46.107, 6.495],
  "Glières-Val-de-Borne": [45.977, 6.283],
  // Ain (01)
  "Ambérieu-en-Bugey": [45.947, 5.352], "Bellegarde-sur-Valserine": [46.108, 5.828],
  "Belley": [45.760, 5.693], "Bourg-en-Bresse": [46.205, 5.227], "Cessy": [46.333, 6.088],
  "Challex": [46.192, 5.988], "Châtillon-en-Michaille": [46.073, 5.793], "Chevry": [46.282, 6.043],
  "Collonges": [46.152, 5.893], "Crozet": [46.280, 6.033], "Divonne-les-Bains": [46.357, 6.143],
  "Échenevex": [46.333, 6.053], "Farges": [46.217, 5.972], "Ferney-Voltaire": [46.258, 6.107],
  "Gex": [46.335, 6.058], "Grilly": [46.338, 6.098], "Injoux-Génissiat": [46.038, 5.793],
  "Léaz": [46.112, 5.867], "Montluel": [45.847, 5.067], "Nantua": [46.153, 5.608],
  "Ornex": [46.282, 6.103], "Oyonnax": [46.257, 5.657], "Péron": [46.222, 5.952],
  "Pougny": [46.152, 5.858], "Prévessin-Moëns": [46.268, 6.103],
  "Saint-Genis-Pouilly": [46.243, 6.018], "Saint-Jean-de-Gonville": [46.208, 5.933],
  "Segny": [46.293, 6.103], "Sergy": [46.303, 6.108], "Thoiry": [46.277, 6.058],
  "Valserhône": [46.083, 5.797], "Versonnex": [46.282, 6.133],
};

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

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
    "Dingy-en-Vuache", "Étaux", "Glières-Val-de-Borne", "Saint-Jean-de-Tholome", "Savigny",
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
  const searchParams = useSearchParams();

  // Type filter — initialisé depuis le param URL (liens nav), modifiable via dropdown
  const typeParam = searchParams.get("type");
  const typeInit = typeParam === "terrain" ? "terrain" : typeParam === "maison" ? "maison" : "";
  const [typeActif, setTypeActif] = useState(typeInit);
  const [typeOpen, setTypeOpen] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  const TYPE_OPTIONS = [
    { value: "",        label: "Tous" },
    { value: "terrain", label: "Terrain à bâtir" },
    { value: "maison",  label: "Maison + terrain" },
  ];

  const [communesFiltrees, setCommunesFiltrees] = useState<string[]>([]);
  const [prixMin, setPrixMin] = useState("");
  const [prixMax, setPrixMax] = useState("");
  const [surfaceMin, setSurfaceMin] = useState("");
  const [surfaceMax, setSurfaceMax] = useState("");
  const [prixOpen, setPrixOpen] = useState(false);
  const [surfaceOpen, setSurfaceOpen] = useState(false);
  const prixRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [rayon, setRayon] = useState<number | null>(null);
  const [rayonManuel, setRayonManuel] = useState("");

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
          statut: typeActif ?? "Tous",
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

  useEffect(() => {
    if (!typeOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) setTypeOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [typeOpen]);

  useEffect(() => {
    if (!prixOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (prixRef.current && !prixRef.current.contains(e.target as Node)) setPrixOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [prixOpen]);

  useEffect(() => {
    if (!surfaceOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (surfaceRef.current && !surfaceRef.current.contains(e.target as Node)) setSurfaceOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [surfaceOpen]);

  function toggleCommune(c: string) {
    setCommunesFiltrees((prev) => {
      const next = prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c];
      if (next.length !== 1) { setRayon(null); setRayonManuel(""); }
      return next;
    });
  }

  const villesFiltrees = Object.entries(villesParDept).reduce<Record<string, string[]>>((acc, [dept, villes]) => {
    const filtered = search
      ? villes.filter((v) => v.toLowerCase().includes(search.toLowerCase()))
      : villes;
    if (filtered.length > 0) acc[dept] = filtered;
    return acc;
  }, {});

  const prixMinN = prixMin !== "" ? parseInt(prixMin, 10) : 0;
  const prixMaxN = prixMax !== "" ? parseInt(prixMax, 10) : Infinity;
  const surfaceMinN = surfaceMin !== "" ? parseInt(surfaceMin, 10) : 0;
  const surfaceMaxN = surfaceMax !== "" ? parseInt(surfaceMax, 10) : Infinity;
  const prixActif = prixMin !== "" || prixMax !== "";
  const surfaceActif = surfaceMin !== "" || surfaceMax !== "";

  const visibles = annonces
    .filter((a) => {
      if (typeActif === "terrain") return a.type === "Terrain à bâtir";
      if (typeActif === "maison") return a.type !== "Terrain à bâtir";
      return true;
    })
    .filter((a) => a.budget >= prixMinN && a.budget <= prixMaxN)
    .filter((a) => a.surfaceTerrain >= surfaceMinN && a.surfaceTerrain <= surfaceMaxN)
    .filter((a) => {
      if (communesFiltrees.length === 0) return true;
      if (rayon !== null && communesFiltrees.length === 1) {
        const center = COMMUNE_COORDS[communesFiltrees[0]];
        const aCoords = COMMUNE_COORDS[a.commune];
        if (!center || !aCoords) return communesFiltrees.includes(a.commune);
        return haversineKm(center[0], center[1], aCoords[0], aCoords[1]) <= rayon;
      }
      return communesFiltrees.includes(a.commune);
    });

  return (<>
    <main>
      {/* Filtres */}
      <div className="bg-white border-b border-[#D9D4CC] px-5 sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto flex flex-wrap items-center gap-x-3 gap-y-2 py-3">

          {/* Dropdown Type */}
          <div className="relative" ref={typeRef}>
            <button
              onClick={() => { setTypeOpen((o) => !o); setPrixOpen(false); setSurfaceOpen(false); setDropdownOpen(false); }}
              className={`flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                typeActif
                  ? "bg-[#BA7517] text-white border-[#BA7517]"
                  : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
              }`}
            >
              <span>{TYPE_OPTIONS.find((o) => o.value === typeActif)?.label ?? "Type"}</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform ${typeOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {typeOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#D9D4CC] shadow-lg z-50">
                {TYPE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setTypeActif(opt.value); setTypeOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors cursor-pointer ${
                      typeActif === opt.value
                        ? "bg-[#FDF8F0] font-bold text-[#BA7517]"
                        : "text-[#2C2C2A] hover:bg-[#F2EDE6]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

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
                      onClick={() => { setCommunesFiltrees([]); setRayon(null); setRayonManuel(""); setDropdownOpen(false); }}
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

          {/* Dropdown Prix */}
          <div className="relative" ref={prixRef}>
            <button
              onClick={() => { setPrixOpen((o) => !o); setSurfaceOpen(false); setTypeOpen(false); setDropdownOpen(false); }}
              className={`flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                prixActif
                  ? "bg-[#BA7517] text-white border-[#BA7517]"
                  : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
              }`}
            >
              <span>
                {prixActif
                  ? `${prixMin ? parseInt(prixMin).toLocaleString("fr-FR") : "0"} – ${prixMax ? parseInt(prixMax).toLocaleString("fr-FR") : "∞"} €`
                  : "Prix"}
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform ${prixOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {prixOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#D9D4CC] shadow-lg z-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#888780] mb-3">Budget (€)</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="text-[11px] text-[#888780] mb-1 block">Min</label>
                    <div className="relative">
                      <input
                        type="number" min="0" step="10" placeholder="0"
                        value={prixMin}
                        onChange={(e) => setPrixMin(e.target.value)}
                        className="w-full border border-[#D9D4CC] px-2 py-1.5 text-[13px] text-[#2C2C2A] outline-none focus:border-[#BA7517] pr-6"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#888780]">€</span>
                    </div>
                  </div>
                  <span className="text-[#D9D4CC] mt-4">—</span>
                  <div className="flex-1">
                    <label className="text-[11px] text-[#888780] mb-1 block">Max</label>
                    <div className="relative">
                      <input
                        type="number" min="0" step="10" placeholder="∞"
                        value={prixMax}
                        onChange={(e) => setPrixMax(e.target.value)}
                        className="w-full border border-[#D9D4CC] px-2 py-1.5 text-[13px] text-[#2C2C2A] outline-none focus:border-[#BA7517] pr-6"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#888780]">€</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => { setPrixMin(""); setPrixMax(""); }}
                    className="flex-1 py-1.5 text-[12px] border border-[#D9D4CC] text-[#888780] hover:border-[#2C2C2A] hover:text-[#2C2C2A] transition-colors cursor-pointer"
                  >
                    Effacer
                  </button>
                  <button
                    onClick={() => setPrixOpen(false)}
                    className="flex-1 py-1.5 text-[12px] bg-[#2C2C2A] text-white hover:bg-[#BA7517] transition-colors cursor-pointer"
                  >
                    Appliquer
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown Surface */}
          <div className="relative" ref={surfaceRef}>
            <button
              onClick={() => { setSurfaceOpen((o) => !o); setPrixOpen(false); setTypeOpen(false); setDropdownOpen(false); }}
              className={`flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium border transition-colors cursor-pointer ${
                surfaceActif
                  ? "bg-[#BA7517] text-white border-[#BA7517]"
                  : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#BA7517] hover:text-[#BA7517]"
              }`}
            >
              <span>
                {surfaceActif
                  ? `${surfaceMin || "0"} – ${surfaceMax || "∞"} m²`
                  : "Surface terrain"}
              </span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`transition-transform ${surfaceOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {surfaceOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#D9D4CC] shadow-lg z-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#888780] mb-3">Surface terrain (m²)</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="text-[11px] text-[#888780] mb-1 block">Min</label>
                    <div className="relative">
                      <input
                        type="number" min="0" step="50" placeholder="0"
                        value={surfaceMin}
                        onChange={(e) => setSurfaceMin(e.target.value)}
                        className="w-full border border-[#D9D4CC] px-2 py-1.5 text-[13px] text-[#2C2C2A] outline-none focus:border-[#BA7517] pr-7"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#888780]">m²</span>
                    </div>
                  </div>
                  <span className="text-[#D9D4CC] mt-4">—</span>
                  <div className="flex-1">
                    <label className="text-[11px] text-[#888780] mb-1 block">Max</label>
                    <div className="relative">
                      <input
                        type="number" min="0" step="50" placeholder="∞"
                        value={surfaceMax}
                        onChange={(e) => setSurfaceMax(e.target.value)}
                        className="w-full border border-[#D9D4CC] px-2 py-1.5 text-[13px] text-[#2C2C2A] outline-none focus:border-[#BA7517] pr-7"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-[#888780]">m²</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => { setSurfaceMin(""); setSurfaceMax(""); }}
                    className="flex-1 py-1.5 text-[12px] border border-[#D9D4CC] text-[#888780] hover:border-[#2C2C2A] hover:text-[#2C2C2A] transition-colors cursor-pointer"
                  >
                    Effacer
                  </button>
                  <button
                    onClick={() => setSurfaceOpen(false)}
                    className="flex-1 py-1.5 text-[12px] bg-[#2C2C2A] text-white hover:bg-[#BA7517] transition-colors cursor-pointer"
                  >
                    Appliquer
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sélecteur de rayon — visible si 1 commune sélectionnée */}
          {communesFiltrees.length === 1 && (
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#888780] uppercase tracking-widest hidden sm:block">Périmètre :</span>
              {[5, 10, 15, 20].map((km) => (
                <button
                  key={km}
                  onClick={() => { setRayon(rayon === km ? null : km); setRayonManuel(""); }}
                  className={`px-3 py-1.5 text-[12px] font-medium border transition-colors cursor-pointer ${
                    rayon === km
                      ? "bg-[#2C2C2A] text-white border-[#2C2C2A]"
                      : "bg-white text-[#888780] border-[#D9D4CC] hover:border-[#2C2C2A] hover:text-[#2C2C2A]"
                  }`}
                >
                  {km} km
                </button>
              ))}
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="1"
                  max="100"
                  placeholder="—"
                  value={rayonManuel}
                  onChange={(e) => {
                    const v = e.target.value;
                    setRayonManuel(v);
                    const n = parseInt(v, 10);
                    if (!isNaN(n) && n > 0) setRayon(n);
                    else if (v === "") setRayon(null);
                  }}
                  className="w-[46px] border border-[#D9D4CC] px-1.5 py-1.5 text-[12px] text-center text-[#2C2C2A] outline-none focus:border-[#2C2C2A] placeholder-[#D9D4CC]"
                />
                <span className="text-[11px] text-[#888780]">km</span>
              </div>
            </div>
          )}

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
                {typeActif && <div><span className="text-[#2C2C2A]">Type :</span> {TYPE_OPTIONS.find((o) => o.value === typeActif)?.label}</div>}
                {prixActif && <div><span className="text-[#2C2C2A]">Prix :</span> {prixMin ? parseInt(prixMin).toLocaleString("fr-FR") + " €" : "0"} – {prixMax ? parseInt(prixMax).toLocaleString("fr-FR") + " €" : "∞"}</div>}
                {surfaceActif && <div><span className="text-[#2C2C2A]">Surface :</span> {surfaceMin || "0"} – {surfaceMax || "∞"} m²</div>}
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
