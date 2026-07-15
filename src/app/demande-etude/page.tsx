"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type Answers = {
  typeProjet: string;
  gamme: string;
  zone: string;
  terrainStatus: string;
  surface: string;
  budget: string;
  bienAVendre: string;
  delai: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
};

const STEPS_WITH_TERRAIN = 8;
const STEPS_WITHOUT_TERRAIN = 7;

function needsTerrainStep(typeProjet: string) {
  return typeProjet === "Maison neuve ossature bois" || typeProjet === "";
}

// ─── Step options ─────────────────────────────────────────────────────────────

const TYPE_OPTIONS = [
  {
    id: "Maison neuve ossature bois",
    label: "Maison neuve",
    sublabel: "Construction individuelle en ossature bois",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
        <rect x="9" y="14" width="6" height="7"/>
      </svg>
    ),
  },
  {
    id: "Extension ossature bois",
    label: "Extension / surélévation",
    sublabel: "Agrandissement d'une maison existante",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="13" height="13"/>
        <path d="M15 11h5a1 1 0 0 1 1 1v9H15V11z"/>
        <path d="M2 8l6.5-5 6.5 5"/>
      </svg>
    ),
  },
  {
    id: "Rénovation & isolation bois",
    label: "Rénovation & isolation",
    sublabel: "Amélioration énergétique bois",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: "Je cherche un terrain à bâtir",
    label: "Je cherche un terrain",
    sublabel: "Terrain à bâtir dans le Genevois français",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const ZONES = [
  "Annemasse / Agglomération",
  "Saint-Julien-en-Genevois",
  "Pays de Gex (01)",
  "Annecy et environs",
  "Thonon / Chablais",
  "Autre Haute-Savoie (74)",
  "Autre Ain (01)",
  "Autre zone",
];

const TERRAIN_OPTIONS = [
  {
    id: "Terrain acquis ou en cours d'acquisition",
    label: "J'ai mon terrain",
    sublabel: "Propriétaire ou acquisition en cours",
  },
  {
    id: "Terrain en cours de recherche",
    label: "Je cherche encore",
    sublabel: "Voir les terrains disponibles sur le site →",
  },
  {
    id: "Pas encore de terrain",
    label: "Pas encore de terrain",
    sublabel: "M&M CONSTRUCTION peut m'aider à en identifier un",
  },
];

const SURFACES = [
  "Moins de 80 m²",
  "80 – 100 m²",
  "100 – 120 m²",
  "120 – 150 m²",
  "150 – 180 m²",
  "180 m² et plus",
  "À définir",
];

const BUDGETS = [
  "Moins de 250 000 €",
  "250 000 – 350 000 €",
  "350 000 – 500 000 €",
  "500 000 – 700 000 €",
  "Plus de 700 000 €",
  "À définir / Je ne sais pas encore",
];

const BIEN_OPTIONS = [
  {
    id: "Non",
    label: "Non",
    sublabel: "Je finance sans vendre de bien",
  },
  {
    id: "Oui, c'est déjà en cours",
    label: "Oui, déjà en cours",
    sublabel: "Mon bien est mis en vente ou vendu",
  },
  {
    id: "Oui, prochainement",
    label: "Oui, prochainement",
    sublabel: "Je prévois de vendre pour financer",
  },
];

const DELAI_OPTIONS = [
  {
    id: "Moins de 6 mois",
    label: "Moins de 6 mois",
    sublabel: "Projet urgent, démarrage rapide souhaité",
  },
  {
    id: "6 à 12 mois",
    label: "6 à 12 mois",
    sublabel: "Projet en cours de maturation",
  },
  {
    id: "1 à 2 ans",
    label: "1 à 2 ans",
    sublabel: "Je prépare sans précipitation",
  },
  {
    id: "Plus de 2 ans",
    label: "Plus de 2 ans",
    sublabel: "Je me renseigne pour l'avenir",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildMessage(a: Answers): string {
  return [
    "CONFIGURATEUR M&M CONSTRUCTION — RÉSUMÉ DU PROJET",
    "",
    `Type de projet : ${a.typeProjet}`,
    a.gamme ? `Gamme catalogue : ${a.gamme}` : "",
    `Zone : ${a.zone}`,
    a.terrainStatus ? `Situation terrain : ${a.terrainStatus}` : "",
    `Surface souhaitée : ${a.surface}`,
    `Budget global : ${a.budget}`,
    a.bienAVendre ? `Bien à vendre : ${a.bienAVendre}` : "",
    `Délai envisagé : ${a.delai}`,
    a.message ? `\nPrécisions complémentaires :\n${a.message}` : "",
  ].filter(Boolean).join("\n");
}

// ─── OptionCard ───────────────────────────────────────────────────────────────

function OptionCard({
  selected,
  onClick,
  label,
  sublabel,
  icon,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full text-left p-4 border-2 transition-all duration-150 cursor-pointer group ${
        selected
          ? "border-[#BA7517] bg-[#FDF8F0]"
          : "border-[#D9D4CC] bg-white hover:border-[#BA7517]/50 hover:bg-[#FEFCF8]"
      }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-5 h-5 bg-[#BA7517] flex items-center justify-center flex-shrink-0">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      {icon && (
        <div className={`mb-2.5 transition-colors ${selected ? "text-[#BA7517]" : "text-[#888780] group-hover:text-[#BA7517]"}`}>
          {icon}
        </div>
      )}
      <div className={`text-[15px] font-bold leading-tight pr-6 ${selected ? "text-[#BA7517]" : "text-[#2C2C2A]"}`}>
        {label}
      </div>
      {sublabel && (
        <div className="text-[12px] text-[#888780] mt-0.5 leading-snug pr-6">{sublabel}</div>
      )}
    </button>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white p-6 flex flex-col gap-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Ce qui se passe ensuite</p>
        {[
          { num: "01", titre: "Réponse sous 48h", detail: "Mahmoud analyse votre demande et revient avec un premier retour." },
          { num: "02", titre: "Appel de 20 minutes", detail: "Échange pour clarifier le projet, le terrain, les délais et priorités." },
          { num: "03", titre: "Étude de faisabilité", detail: "Analyse PLU, contraintes techniques, première fourchette budgétaire." },
          { num: "04", titre: "Proposition MOE", detail: "Si la faisabilité est confirmée, une proposition de mission sur mesure." },
        ].map((s) => (
          <div key={s.num} className="flex gap-3">
            <div className="text-[#BA7517] font-black text-[17px] w-7 flex-shrink-0">{s.num}</div>
            <div>
              <div className="text-[14px] font-bold text-[#2C2C2A]">{s.titre}</div>
              <div className="text-[13px] text-[#888780] leading-[1.6] mt-0.5">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2C2C2A] p-6 flex flex-col gap-3">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">Garanties</p>
        {[
          "Réponse garantie sous 48h ouvrées",
          "Zéro engagement à ce stade",
          "Données confidentielles, non revendues",
          "Étude initiale entièrement gratuite",
        ].map((g) => (
          <div key={g} className="flex items-start gap-2 text-[14px] text-white/80">
            <span className="text-[#BA7517] flex-shrink-0 mt-0.5">✓</span>
            {g}
          </div>
        ))}
      </div>

      <div className="bg-white p-5 border-l-4 border-[#BA7517]">
        <p className="text-[13px] font-bold text-[#2C2C2A] mb-1">Préférez-vous appeler ?</p>
        <p className="text-[13px] text-[#888780] mb-3">Disponible lundi–vendredi, 8h–19h.</p>
        <a href="tel:+33625590926" className="inline-block bg-[#BA7517] text-white text-[14px] font-bold px-4 py-2.5 no-underline hover:bg-[#9E6312] transition-colors">
          Appeler directement
        </a>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DemandeEtudePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    typeProjet: "", gamme: "", zone: "", terrainStatus: "", surface: "",
    budget: "", bienAVendre: "", delai: "", prenom: "", nom: "",
    email: "", telephone: "", message: "",
  });

  useEffect(() => {
    const type = searchParams.get("type");
    const gamme = searchParams.get("gamme");
    if (type === "maison-neuve") {
      setAnswers(prev => ({
        ...prev,
        typeProjet: "Maison neuve ossature bois",
        gamme: gamme ?? "",
      }));
      setStep(2);
    }
  }, [searchParams]);

  const totalSteps = needsTerrainStep(answers.typeProjet) ? STEPS_WITH_TERRAIN : STEPS_WITHOUT_TERRAIN;

  function displayStep(s: number): number {
    if (!needsTerrainStep(answers.typeProjet) && s >= 4) return s - 1;
    return s;
  }

  function set<K extends keyof Answers>(key: K, value: string) {
    setAnswers(prev => ({ ...prev, [key]: value }));
  }

  function pick<K extends keyof Answers>(key: K, value: string) {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);
    setTimeout(() => {
      setStep(s => {
        if (s === 2 && !needsTerrainStep(newAnswers.typeProjet)) return 4;
        return Math.min(s + 1, STEPS_WITH_TERRAIN);
      });
    }, 280);
  }

  const fromCatalogue = answers.gamme !== "";

  function prev() {
    setError("");
    if (step === 2 && fromCatalogue) {
      router.push("/catalogue/");
      return;
    }
    setStep(s => {
      if (s === 4 && !needsTerrainStep(answers.typeProjet)) return 2;
      return Math.max(s - 1, 1);
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!answers.email || !answers.prenom) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: answers.nom || answers.prenom,
          prenom: answers.prenom,
          email: answers.email,
          telephone: answers.telephone,
          typeProjet: answers.typeProjet,
          zone: answers.zone,
          budget: answers.budget,
          message: buildMessage(answers),
        }),
      });
      if (!res.ok) throw new Error();
      router.push("/demande-etude/merci");
    } catch {
      setError("Une erreur est survenue. Réessayez ou appelez-nous directement.");
      setLoading(false);
    }
  }

  const progress = step === 1 ? 0 : ((displayStep(step) - 1) / (totalSteps - 1)) * 100;

  const isTravaux = answers.typeProjet === "Extension ossature bois" || answers.typeProjet === "Rénovation & isolation bois";

  const stepMeta: Record<number, { title: string; sub: string }> = {
    1: { title: "Quel est votre projet ?", sub: "Sélectionnez le type de travaux envisagés" },
    2: { title: "Dans quelle zone ?", sub: "Sélectionnez votre secteur géographique" },
    3: { title: "Votre situation foncière", sub: "Où en êtes-vous avec le terrain ?" },
    4: {
      title: isTravaux ? "Surface des travaux" : "Surface souhaitée",
      sub: isTravaux ? "Surface concernée par les travaux" : "Surface habitable visée pour le projet",
    },
    5: { title: "Budget global estimé", sub: "Travaux, honoraires MOE et taxes compris" },
    6: { title: "Avez-vous un bien à vendre ?", sub: "Pour financer tout ou partie du projet" },
    7: { title: "Délai du projet", sub: "Quand souhaitez-vous démarrer ?" },
    8: { title: "Vos coordonnées", sub: "Mahmoud vous recontacte sous 48h" },
  };

  return (
    <main className="bg-[#F2EDE6] min-h-screen">

      {/* Header */}
      <div className="bg-[#2C2C2A] pt-10 pb-0 px-5">
        <div className="max-w-[1100px] mx-auto">
          <Link href={fromCatalogue ? "/catalogue/" : "/"} className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">
            {fromCatalogue ? "← Retour au catalogue" : "← Retour à l'accueil"}
          </Link>
          <h1 className="text-white text-[28px] md:text-[38px] font-black mt-4 mb-1 leading-tight">
            {fromCatalogue ? `Obtenir les plans — Gamme ${answers.gamme}` : "Configurez votre projet"}
          </h1>
          <p className="text-white/60 text-[14px] mb-5">
            {fromCatalogue ? totalSteps - 1 : totalSteps} questions · Gratuit · Sans engagement · Réponse sous 48h
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-3 pb-4">
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#BA7517] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[12px] text-white/40 whitespace-nowrap flex-shrink-0">
              {displayStep(step)} / {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-[1100px] mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

        {/* Configurator */}
        <div className="order-1">

          {/* Step header */}
          <div className="mb-6">
            <div className="text-[11px] text-[#BA7517] font-bold uppercase tracking-widest mb-1">
              Étape {displayStep(step)} sur {totalSteps}
            </div>
            <h2 className="text-[22px] font-black text-[#2C2C2A] mb-1">{stepMeta[step].title}</h2>
            <p className="text-[13px] text-[#888780]">{stepMeta[step].sub}</p>
          </div>

          {/* Step 1 — Type de projet */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TYPE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  selected={answers.typeProjet === opt.id}
                  onClick={() => pick("typeProjet", opt.id)}
                  label={opt.label}
                  sublabel={opt.sublabel}
                  icon={opt.icon}
                />
              ))}
            </div>
          )}

          {/* Step 2 — Zone */}
          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ZONES.map((z) => (
                <OptionCard
                  key={z}
                  selected={answers.zone === z}
                  onClick={() => pick("zone", z)}
                  label={z}
                />
              ))}
            </div>
          )}

          {/* Step 3 — Terrain */}
          {step === 3 && (
            <div className="flex flex-col gap-3">
              {TERRAIN_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  selected={answers.terrainStatus === opt.id}
                  onClick={() => pick("terrainStatus", opt.id)}
                  label={opt.label}
                  sublabel={opt.sublabel}
                />
              ))}
              {answers.terrainStatus === "Terrain en cours de recherche" && (
                <div className="bg-[#BA7517]/10 border border-[#BA7517]/30 px-4 py-3 flex items-center justify-between">
                  <p className="text-[13px] text-[#2C2C2A]">
                    Des terrains sont disponibles dans le Genevois français.
                  </p>
                  <Link href="/annonces/" className="text-[13px] font-bold text-[#BA7517] no-underline hover:underline whitespace-nowrap ml-4">
                    Voir les annonces →
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Step 4 — Surface */}
          {step === 4 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SURFACES.map((s) => (
                <OptionCard
                  key={s}
                  selected={answers.surface === s}
                  onClick={() => pick("surface", s)}
                  label={s}
                />
              ))}
            </div>
          )}

          {/* Step 5 — Budget */}
          {step === 5 && (
            <div className="flex flex-col gap-3">
              {BUDGETS.map((b) => (
                <OptionCard
                  key={b}
                  selected={answers.budget === b}
                  onClick={() => pick("budget", b)}
                  label={b}
                />
              ))}
              <p className="text-[12px] text-[#888780] mt-1 leading-relaxed">
                Budget indicatif : travaux + honoraires MOE + taxes. Une estimation précise sera fournie lors de l&apos;étude de faisabilité.
              </p>
            </div>
          )}

          {/* Step 6 — Bien à vendre */}
          {step === 6 && (
            <div className="flex flex-col gap-3">
              {BIEN_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  selected={answers.bienAVendre === opt.id}
                  onClick={() => pick("bienAVendre", opt.id)}
                  label={opt.label}
                  sublabel={opt.sublabel}
                />
              ))}
            </div>
          )}

          {/* Step 7 — Délai */}
          {step === 7 && (
            <div className="flex flex-col gap-3">
              {DELAI_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.id}
                  selected={answers.delai === opt.id}
                  onClick={() => pick("delai", opt.id)}
                  label={opt.label}
                  sublabel={opt.sublabel}
                />
              ))}
            </div>
          )}

          {/* Step 8 — Contact */}
          {step === 8 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Récapitulatif */}
              <div className="bg-white border-l-4 border-[#BA7517] p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] mb-3">Votre projet en résumé</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    ["Projet", answers.typeProjet],
                    ["Zone", answers.zone],
                    ["Terrain", answers.terrainStatus],
                    ["Surface", answers.surface],
                    ["Budget", answers.budget],
                    ["Bien à vendre", answers.bienAVendre],
                    ["Délai", answers.delai],
                  ].map(([label, value]) =>
                    value ? (
                      <div key={label}>
                        <div className="text-[10px] text-[#888780] uppercase tracking-widest">{label}</div>
                        <div className="text-[13px] font-bold text-[#2C2C2A] leading-tight mt-0.5">{value}</div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              {/* Champs */}
              <div className="bg-white p-5 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">Prénom <span className="text-[#BA7517]">*</span></label>
                    <input
                      type="text"
                      required
                      value={answers.prenom}
                      onChange={(e) => set("prenom", e.target.value)}
                      placeholder="Votre prénom"
                      className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">Nom</label>
                    <input
                      type="text"
                      value={answers.nom}
                      onChange={(e) => set("nom", e.target.value)}
                      placeholder="Votre nom"
                      className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">Email <span className="text-[#BA7517]">*</span></label>
                    <input
                      type="email"
                      required
                      value={answers.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="votre@email.com"
                      className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">
                      Téléphone <span className="font-normal normal-case tracking-normal">(optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      value={answers.telephone}
                      onChange={(e) => set("telephone", e.target.value)}
                      placeholder="06 xx xx xx xx"
                      className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">
                    Précisions <span className="font-normal normal-case tracking-normal">(optionnel)</span>
                  </label>
                  <textarea
                    value={answers.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={3}
                    placeholder="Informations complémentaires, contraintes spécifiques, questions…"
                    className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors resize-y"
                  />
                </div>
              </div>

              {/* RGPD */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={rgpd}
                  onChange={(e) => setRgpd(e.target.checked)}
                  className="mt-0.5 flex-shrink-0 w-4 h-4 accent-[#BA7517] cursor-pointer"
                />
                <span className="text-[13px] text-[#888780] leading-[1.6]">
                  J&apos;accepte la{" "}
                  <Link href="/vie-privee/" className="text-[#BA7517] no-underline hover:underline" target="_blank">
                    politique de confidentialité
                  </Link>
                  . Mes données sont utilisées uniquement pour traiter ma demande. *
                </span>
              </label>

              {error && (
                <p className="text-red-600 text-[14px] bg-red-50 border border-red-200 px-4 py-3">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !rgpd}
                className="bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
              >
                {loading ? "Envoi en cours…" : "Envoyer ma demande d'étude →"}
              </button>

              <p className="text-[12px] text-[#888780]">
                Réponse garantie sous 48h · Sans engagement · Données confidentielles
              </p>
            </form>
          )}

          {/* Navigation */}
          <div className="flex items-center mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="text-[14px] text-[#888780] hover:text-[#2C2C2A] transition-colors cursor-pointer flex items-center gap-1"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Retour
              </button>
            )}
          </div>
        </div>

        {/* Sidebar — visible desktop always, mobile only on last step */}
        <aside className={`order-2 ${displayStep(step) < totalSteps ? "hidden lg:block" : "block"}`}>
          <Sidebar />
        </aside>
      </div>
    </main>
  );
}
