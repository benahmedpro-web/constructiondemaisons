"use client";

import { useState, useMemo, useRef, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { gtagEvent } from "@/lib/ga";
import { QUESTIONS, getVisibleQuestions, findNextIndex, getSectionProgress, SECTION_GROUPS } from "@/lib/indice-faisabilite/questions";
import { searchCities, type CitySuggestion } from "@/lib/indice-faisabilite/villes";
import { computeDiagnostic, domainText, DOMAIN_LABELS, CONCLUSION_TITRES, type Diagnostic } from "@/lib/indice-faisabilite/diagnostic";
import { formatEur, FOURCHETTE_TERRAIN_MARGE } from "@/lib/indice-faisabilite/estimate";
import { DOMAIN_MAX } from "@/lib/indice-faisabilite/scoring";
import type { Answers, Domain, Question } from "@/lib/indice-faisabilite/types";

// ─── Etoiles / logo Google (repris de temoignages/page.tsx pour cohérence visuelle) ───────────

function Etoiles({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#BA7517">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function LogoGoogle() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// Les 14 avis repris tels quels (mêmes noms, mêmes textes, note 5/5 pour tous) de la page
// /temoignages/ — aucun avis inventé. Textes tronqués à la première phrase/idée pour tenir dans
// une carte compacte défilante (les plus longs, ex. Joelle Thise/Francis Nossin, feraient exploser
// la hauteur des cartes) ; le texte intégral reste consultable sur /temoignages/.
const AVIS_LANDING = [
  { nom: "Jocelyn Schreiner", texte: "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies. Disponible, réactif et rassurant." },
  { nom: "Sandrine Revaux", texte: "A su nous écouter et établir un projet correspondant à nos attentes. Nous a parfaitement accompagné." },
  { nom: "Supa Wesman", texte: "Bienveillant, à l'écoute, visionnaire. Un professionnel de qualité aux analyses justes et pertinentes." },
  { nom: "Laurent Ramos", texte: "Vraiment très professionnel. Une personne de confiance. Sans lui je n'aurais pas construit ma nouvelle maison." },
  { nom: "Kévin Ducrot", texte: "Un professionnel à l'écoute, réactif, qui prend le temps d'affiner les projets. Un travail de qualité." },
  { nom: "Michael Camalet", texte: "Très belle expérience avec un excellent professionnel. De bons conseils tout au long du projet." },
  { nom: "Mathieu S.", texte: "Très professionnel et réactif, il nous fournit un travail de qualité lors de l'élaboration de notre projet." },
  { nom: "Julien B.", texte: "Nous a accompagné pour la construction de notre premier bien de la meilleure des façons." },
  { nom: "Elodie Maes", texte: "Conseiller au top, disponible, bienveillant, à l'écoute. A su cerner le projet, nos besoins et envies." },
  { nom: "Martin Mous", texte: "Un professionnel très consciencieux. Grâce à lui nous avons pu construire notre maison. Vous pouvez lui faire confiance." },
  { nom: "Theresa Deblaine", texte: "À l'écoute de ses clients, réactif et soucieux du travail bien réalisé jusqu'au bout. Nous le recommandons pleinement." },
  { nom: "Joelle Thise", texte: "Un immense merci. Vous nous avez écoutés dans les moindres détails, du plan de la maison à la réception." },
  { nom: "Francis Nossin", texte: "Un rêve réalisé ! Écoute, dialogue, engagement sans compter ses heures nous ont été consacrées." },
  { nom: "Mahamadi Kabore", texte: "Un professionnel de bons conseils et à l'écoute, avec au centre de ses interventions notre satisfaction." },
];

// ─── OptionCard (reprend le style de demande-etude/DemandEtudeClient.tsx) ─────

function OptionCard({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
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
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <div className={`text-[15px] font-bold leading-tight pr-6 ${selected ? "text-[#BA7517]" : "text-[#2C2C2A]"}`}>
        {label}
      </div>
    </button>
  );
}

// ─── Landing hero (recommandation UX du 08/08/2026) ───────────────────────────

function Landing({ onStart }: { onStart: () => void }) {
  return (
    // Fond ambiant + colonne élargie (640 → 760px) — ajustement du 08/08/2026 : sur grand écran,
    // la colonne étroite laissait un vide flagrant de chaque côté. Pas de photo plein cadre (le
    // reste du parcours garde un fond clair/questionnaire, un hero sombre aurait cassé la
    // continuité visuelle en passant à l'écran de question suivant) — juste un dégradé doré très
    // discret en pur CSS pour que les marges ne lisent plus comme du vide brut.
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 12% 15%, rgba(186,117,23,0.09), transparent 45%), radial-gradient(circle at 88% 80%, rgba(186,117,23,0.07), transparent 50%), #F2EDE6",
      }}
    >
      {/* Header dédié — demande de Mahmoud du 08/08/2026 : logo à gauche, signal de confiance
          (Mahmoud + note Google) à droite. Volontairement PAS le <Header /> mega-menu du reste du
          site (celui-ci n'est utilisé que sur la home, cf. src/components/Header.tsx) : ça
          réintroduirait de la navigation qui ferait sortir le prospect de la landing, à l'inverse
          de la demande précédente du même jour. Logo en texte brut, non cliquable, même raison. */}
      <header className="bg-white border-b border-[#D9D4CC]">
        <div className="max-w-[1000px] mx-auto px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col leading-none">
            <span className="text-[18px] font-black text-[#2C2C2A] tracking-tight">M&amp;M CONSTRUCTION</span>
            <span className="text-[10px] text-[#888780] tracking-widest uppercase mt-0.5">Maîtrise d&apos;œuvre · Maison bois</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#2C2C2A]">
              <Image src="/images/mahmoud-ben-ahmed.png" alt="Mahmoud Ben Ahmed" fill sizes="32px" className="object-cover" />
            </div>
            <span className="text-[12px] text-[#2C2C2A] leading-tight hidden sm:inline">
              <span className="font-bold">Mahmoud Ben Ahmed</span>
              <span className="text-[#888780]"> — 20 ans de terrain, 200+ projets accompagnés</span>
            </span>
            <div className="flex items-center gap-1 pl-2.5 border-l border-[#D9D4CC]">
              <LogoGoogle />
              <span className="text-[12px] font-bold text-[#2C2C2A]">5,0</span>
              <Etoiles n={5} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[760px] mx-auto px-5 py-16 text-center">
        <h1 className="text-[32px] md:text-[40px] font-black text-[#2C2C2A] leading-tight mb-5">
          Votre projet de construction est-il réalisable ?
        </h1>
        <p className="text-[16px] text-[#888780] leading-relaxed mb-6 max-w-[520px] mx-auto">
          Budget, terrain, financement et calendrier : obtenez en quelques minutes un premier
          diagnostic personnalisé de votre projet de construction.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {["≈ 5 minutes", "Gratuit", "Sans engagement"].map((b) => (
            <span key={b} className="bg-white border border-[#D9D4CC] rounded-full px-4 py-1.5 text-[13px] text-[#888780]">
              {b}
            </span>
          ))}
        </div>

        {/* Avis Google — identité + note déjà dans le header ci-dessus. Les 14 avis défilent en
            bande continue (demande de Mahmoud du 08/08/2026 : "il y en a 14, il faut les faire
            défiler") plutôt qu'une sélection statique de 3 — liste dupliquée une fois pour une
            boucle visuelle sans coupure (translateX -50% = exactement une copie). Pause au survol
            pour laisser le temps de lire. Coup d'œil hors de la colonne à 760px (w-screen +
            centrage négatif) pour que la bande traverse toute la largeur, cohérent avec le header
            et le fond déjà pleine largeur. */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-8 [mask-image:linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)]">
          <div className="flex gap-3 w-max animate-[avis-marquee_60s_linear_infinite] hover:[animation-play-state:paused] px-5">
            {[...AVIS_LANDING, ...AVIS_LANDING].map((a, i) => (
              <div key={`${a.nom}-${i}`} className="bg-white border border-[#D9D4CC] p-3 text-left w-[240px] flex-shrink-0">
                <Etoiles n={5} />
                <p className="text-[12px] text-[#888780] italic leading-[1.5] mt-1.5 mb-1.5 line-clamp-3">&ldquo;{a.texte}&rdquo;</p>
                <p className="text-[11px] font-bold text-[#2C2C2A]">{a.nom}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={onStart}
            className="bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors"
          >
            Commencer mon analyse
          </button>
        </div>
        <p className="text-[13px] text-[#888780] mt-3">
          Vos coordonnées ne vous seront demandées qu&apos;après votre résultat.
        </p>

        <div className="mt-14 pt-10 border-t border-[#D9D4CC] text-left flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[16px] font-bold text-[#2C2C2A] mb-2">Ce que nous analysons</h3>
              <ul className="text-[14px] text-[#888780] leading-relaxed list-disc pl-5">
                <li>Budget</li>
                <li>Terrain</li>
                <li>Financement</li>
                <li>Calendrier</li>
                <li>Cohérence globale du projet</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-[#2C2C2A] mb-2">Ce que vous obtenez</h3>
              <ul className="text-[14px] text-[#888780] leading-relaxed list-disc pl-5">
                <li>Un premier diagnostic</li>
                <li>Une estimation budgétaire indicative</li>
                <li>Les points forts du projet</li>
                <li>Les éléments à sécuriser</li>
                <li>Les prochaines étapes à envisager</li>
              </ul>
            </div>
          </div>
          <div className="bg-white border border-[#D9D4CC] p-5 text-center">
            <h3 className="text-[16px] font-bold text-[#2C2C2A] mb-2">Pourquoi faire cette analyse ?</h3>
            <p className="text-[14px] text-[#888780] leading-relaxed mb-4">
              Pour vérifier si les bases de votre projet sont cohérentes avant d&apos;engager
              davantage de temps, de démarches ou de budget.
            </p>
            <button
              type="button"
              onClick={onStart}
              className="bg-[#BA7517] text-white text-[15px] font-bold px-6 py-3 hover:bg-[#9E6312] transition-colors"
            >
              Commencer mon analyse
            </button>
          </div>
        </div>

        <footer className="mt-10 pt-6 border-t border-[#D9D4CC] flex flex-wrap justify-center gap-x-3 gap-y-1 text-[12px] text-[#888780]">
          <Link href="/mentions-legales/" className="hover:text-[#2C2C2A] transition-colors">
            Mentions légales
          </Link>
          <span>·</span>
          <Link href="/vie-privee/" className="hover:text-[#2C2C2A] transition-colors">
            Politique de confidentialité
          </Link>
        </footer>
      </div>
    </main>
  );
}

// ─── Question screen ────────────────────────────────────────────────────────

function QuestionScreen({
  question,
  answers,
  stepNumber,
  totalSteps,
  onAnswer,
  onPick,
  onNext,
  onBack,
}: {
  question: Question;
  answers: Answers;
  stepNumber: number;
  totalSteps: number;
  onAnswer: (code: string, value: Answers[string]) => void;
  onPick: (code: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [fieldValue, setFieldValue] = useState<string>(() => {
    const v = answers[question.code];
    return typeof v === "number" || typeof v === "string" ? String(v) : "";
  });
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = ((stepNumber - 1) / Math.max(totalSteps - 1, 1)) * 100;
  const isNumber = question.type === "number";
  const isCity = question.type === "city-autocomplete";
  const isMulti = question.type === "multi-choice";
  const isInfo = question.type === "info";

  const useGrid = (question.options?.length ?? 0) <= 6 && (question.options?.every((o) => o.label.length < 30) ?? false);

  const section = getSectionProgress(question.code);

  // Point de réassurance mi-parcours (recommandation UX du 08/08/2026) : ancré sur la première
  // question de la section "Votre terrain", qui tombe précisément au milieu du parcours réel
  // (~étape 12 sur 18-20 selon les branchements) — pas de calcul de pourcentage fragile, un
  // point d'ancrage stable dans la structure des questions.
  const isMidpoint = question.code === SECTION_GROUPS[2].codes[0];

  function handleFieldChange(value: string) {
    setFieldValue(value);
    onAnswer(question.code, isNumber ? (value === "" ? undefined : Number(value)) : value);
    if (isCity) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (value.trim().length < 3) {
        setSuggestions([]);
        return;
      }
      debounceRef.current = setTimeout(() => setSuggestions(searchCities(value.trim())), 200);
    }
  }

  function pickSingle(value: string) {
    gtagEvent("indice_faisabilite_question", { question: question.code });
    // Passe par le parent (onPick) plutôt que onAnswer + setTimeout(onNext) local : onNext
    // capturerait une closure de `answers` figée avant la mise à jour, et sauterait à tort
    // les questions conditionnelles qui dépendent de cette réponse (bug constaté en test).
    onPick(question.code, value);
  }

  function toggleMulti(optValue: string, exclusive?: boolean) {
    const current = new Set(Array.isArray(answers[question.code]) ? (answers[question.code] as string[]) : []);
    if (exclusive) {
      current.clear();
      current.add(optValue);
    } else {
      const exclusiveVal = question.options?.find((o) => o.exclusive)?.value;
      if (exclusiveVal) current.delete(exclusiveVal);
      if (current.has(optValue)) current.delete(optValue);
      else current.add(optValue);
    }
    onAnswer(question.code, Array.from(current));
  }

  function canContinue(): boolean {
    if (!question.required) return true;
    if (isMulti) return Array.isArray(answers[question.code]) && (answers[question.code] as string[]).length > 0;
    if (isNumber) return typeof answers[question.code] === "number" && (answers[question.code] as number) > 0;
    if (isInfo) return true;
    const v = answers[question.code];
    return typeof v === "string" && v.trim().length > 0;
  }

  function handleNext() {
    gtagEvent("indice_faisabilite_question", { question: question.code });
    onNext();
  }

  return (
    <main className="bg-[#F2EDE6] min-h-screen">
      <div className="bg-[#2C2C2A] pt-10 pb-0 px-5">
        <div className="max-w-[640px] mx-auto">
          <div className="flex items-center gap-3 pb-4">
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#BA7517] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-[12px] text-white/40 whitespace-nowrap flex-shrink-0">
              Section {section.index + 1}/{section.total} · {section.label}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[640px] mx-auto px-5 py-10">
        {stepNumber > 1 && (
          <button
            type="button"
            onClick={onBack}
            className="text-[14px] text-[#888780] hover:text-[#2C2C2A] transition-colors cursor-pointer flex items-center gap-1 mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Précédent
          </button>
        )}

        {isMidpoint && (
          <div className="bg-[#FDF8F0] border border-[#BA7517]/30 p-4 mb-6">
            <p className="text-[13px] text-[#2C2C2A] font-bold">🕒 Vous êtes à mi-parcours — encore environ 2 minutes.</p>
          </div>
        )}

        <div className="mb-6">
          <div className="text-[11px] text-[#BA7517] font-bold uppercase tracking-widest mb-1">{question.section}</div>
          <h2 className="text-[22px] font-black text-[#2C2C2A] mb-1">{question.title}</h2>
          {question.subtitle && <p className="text-[13px] text-[#888780]">{question.subtitle}</p>}
        </div>

        {question.type === "single-choice" && (
          <div className={useGrid ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "flex flex-col gap-3"}>
            {question.options?.map((opt) => (
              <OptionCard key={opt.value} selected={answers[question.code] === opt.value} onClick={() => pickSingle(opt.value)} label={opt.label} />
            ))}
          </div>
        )}

        {isMulti && (
          <div className="flex flex-col gap-3">
            {question.options?.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={Array.isArray(answers[question.code]) && (answers[question.code] as string[]).includes(opt.value)}
                onClick={() => toggleMulti(opt.value, opt.exclusive)}
                label={opt.label}
              />
            ))}
          </div>
        )}

        {(isNumber || isCity) && (
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type={isNumber ? "number" : "text"}
                min={isNumber ? 0 : undefined}
                inputMode={isNumber ? "decimal" : undefined}
                value={fieldValue}
                onChange={(e) => handleFieldChange(e.target.value)}
                placeholder={question.placeholder}
                autoComplete="off"
                className="w-full border border-[#D9D4CC] px-4 py-3 text-[16px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
              />
              {isCity && suggestions.length > 0 && (
                <div className="flex flex-col gap-1.5 mt-2">
                  {suggestions.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => {
                        setFieldValue(s.label);
                        onAnswer(question.code, s.label);
                        setSuggestions([]);
                      }}
                      className="text-left px-4 py-2.5 text-[14px] border border-[#D9D4CC] bg-white hover:border-[#BA7517]"
                    >
                      {s.label} ({s.postcode})
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              disabled={!canContinue()}
              onClick={handleNext}
              className="bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors disabled:opacity-40 disabled:cursor-not-allowed self-start"
            >
              Suivant
            </button>
          </div>
        )}

        {isMulti || isInfo ? (
          <button
            type="button"
            disabled={!canContinue()}
            onClick={handleNext}
            className="mt-3 bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors disabled:opacity-40 disabled:cursor-not-allowed self-start"
          >
            Suivant
          </button>
        ) : null}
      </div>
    </main>
  );
}

// ─── Result screen ──────────────────────────────────────────────────────────

const NIVEAU_STYLES: Record<string, string> = {
  vert: "bg-[#EEF6F0] border-[#4C7A5A] text-[#4C7A5A]",
  orange: "bg-[#FDF3E8] border-[#C97A28] text-[#C97A28]",
  rouge: "bg-[#FBEEEC] border-[#B5433B] text-[#B5433B]",
};

const COMPLEMENT_ITEMS = [
  "adaptation au sol",
  "terrassement",
  "fondations spéciales",
  "VRD",
  "raccordement eau",
  "raccordement électricité",
  "assainissement",
  "taxes et participations éventuelles",
  "frais liés à l'acquisition du terrain",
  "prestations ou options spécifiques",
  "éventuels travaux extérieurs",
];

function ResultScreen({
  diagnostic,
  answers,
  onContinue,
  onRestart,
}: {
  diagnostic: Diagnostic;
  answers: Answers;
  onContinue: () => void;
  onRestart: () => void;
}) {
  const { estimate } = diagnostic;
  const niveauClass = NIVEAU_STYLES[diagnostic.niveau.couleur];

  return (
    <main className="bg-[#F2EDE6] min-h-screen">
      <div className="max-w-[640px] mx-auto px-5 py-10 flex flex-col gap-6">
        <h1 className="text-[13px] font-bold uppercase tracking-widest text-[#888780]">Votre résultat</h1>

        <div className={`border-2 p-7 text-center ${niveauClass}`}>
          <div className="text-[44px] font-black leading-none">
            {diagnostic.total}
            <span className="text-[20px] font-medium opacity-60">/100</span>
          </div>
          <div className="text-[15px] font-bold uppercase tracking-wide mt-2">{diagnostic.niveau.label}</div>
          <p className="text-[14px] text-[#2C2C2A] leading-relaxed mt-4 pt-4 border-t border-current/20">{diagnostic.synthese}</p>
        </div>

        <div>
          <h2 className="text-[16px] font-bold text-[#2C2C2A] mb-3">Votre diagnostic</h2>
          <div className="bg-white border border-[#D9D4CC] divide-y divide-[#D9D4CC]">
            {(Object.keys(DOMAIN_LABELS) as Domain[]).map((d) => {
              const { tier, texte } = domainText(d, diagnostic.detail[d], estimate, answers);
              const icon = tier === "fort" ? " ✓" : tier === "faible" ? " ⚠️" : "";
              return (
                <div key={d} className="p-4">
                  <div className="flex justify-between text-[14px] font-bold text-[#2C2C2A]">
                    <span>
                      {DOMAIN_LABELS[d]}
                      {icon}
                    </span>
                    <span>
                      {diagnostic.detail[d]}/{DOMAIN_MAX[d]}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#888780] mt-1 leading-relaxed">{texte}</p>
                </div>
              );
            })}
          </div>
        </div>

        {estimate && (
          <div className="bg-white border border-[#D9D4CC] p-5">
            <h2 className="text-[16px] font-bold text-[#2C2C2A] mb-3">Votre estimation</h2>
            <div className="flex justify-between text-[14px] py-2 border-b border-[#D9D4CC]">
              <span className="text-[#888780]">Construction estimée</span>
              <strong>{formatEur(estimate.coutConstruction)}</strong>
            </div>

            {estimate.coutTerrain !== null && estimate.zone ? (
              <>
                <div className="flex justify-between text-[14px] py-2 border-b border-[#D9D4CC]">
                  <span className="text-[#888780]">Terrain estimé</span>
                  <strong>
                    {formatEur(estimate.coutTerrain * (1 - FOURCHETTE_TERRAIN_MARGE))} – {formatEur(estimate.coutTerrain * (1 + FOURCHETTE_TERRAIN_MARGE))}
                  </strong>
                </div>
                <p className="text-[13px] text-[#888780] mt-2">
                  Hypothèse retenue pour le calcul : {formatEur(estimate.coutTerrain)}
                  {estimate.surfaceTerrainEstimee ? " (basée sur le milieu de la fourchette de surface que vous avez choisie)" : ""}.
                </p>
                {estimate.coutTotal !== null && (
                  <div className="flex justify-between text-[15px] font-bold py-2 mt-2 pt-3 border-t border-[#D9D4CC]">
                    <span>Total estimé</span>
                    <span>{formatEur(estimate.coutTotal)}</span>
                  </div>
                )}
              </>
            ) : estimate.zone ? (
              <p className="text-[13px] text-[#888780] mt-2">
                Vous n&apos;avez pas encore de terrain précis — à titre indicatif, le prix moyen constaté dans le secteur {estimate.zone.nom} est de{" "}
                {estimate.zone.prix_moyen_eur_m2} €/m². On affinera le coût total dès que vous aurez une surface de terrain.
              </p>
            ) : (
              <p className="text-[13px] text-[#888780] mt-2">
                Coût du terrain non estimable : secteur pas encore couvert par nos données de prix — un conseiller affinera ce point avec vous.
              </p>
            )}

            {estimate.budget > 0 && estimate.coutTotal !== null && (
              <>
                <div className="flex justify-between text-[14px] py-2 mt-2 border-t border-[#D9D4CC]">
                  <span className="text-[#888780]">Budget annoncé</span>
                  <strong>{formatEur(estimate.budget)}</strong>
                </div>
                <BudgetMargeRow estimate={estimate} />
              </>
            )}

            {estimate.zone && (
              <div className="mt-4 pt-3 border-t border-dashed border-[#D9D4CC]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-1">Hypothèse utilisée</p>
                <p className="text-[13px]">
                  Terrain : <strong>{estimate.surfaceTerrain} m²</strong> · Secteur : <strong>{estimate.zone.nom}</strong>
                </p>
              </div>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-dashed border-[#D9D4CC]">
          <h3 className="text-[14px] font-bold text-[#2C2C2A] mb-2">À prévoir en complément</h3>
          <p className="text-[13px] text-[#888780] mb-2">L&apos;estimation ne comprend pas nécessairement :</p>
          <ul className="text-[13px] text-[#888780] grid grid-cols-2 gap-x-4 list-disc pl-5 mb-3">
            {COMPLEMENT_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-[12px] text-[#888780] leading-relaxed">
            <strong>Estimation indicative et non contractuelle.</strong> Les montants présentés constituent une première estimation basée sur les
            informations renseignées. Ils devront être confirmés après étude du terrain, du projet et des prestations.
          </p>
        </div>

        <div className="text-center pt-4">
          <h3 className="text-[18px] font-black text-[#2C2C2A] mb-2">{CONCLUSION_TITRES[diagnostic.faisabilite]}</h3>
          <p className="text-[14px] text-[#888780] mb-5">Découvrez maintenant les points à sécuriser pour pouvoir avancer.</p>
          <button
            type="button"
            onClick={onContinue}
            className="bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors"
          >
            Obtenir mon analyse personnalisée
          </button>
          <p className="text-[12px] text-[#888780] mt-3">Gratuit · Sans engagement</p>
          <button type="button" onClick={onRestart} className="block mx-auto mt-5 text-[13px] text-[#888780] underline hover:text-[#2C2C2A]">
            ↻ Modifier mes réponses
          </button>
        </div>
      </div>
    </main>
  );
}

function BudgetMargeRow({ estimate }: { estimate: NonNullable<Diagnostic["estimate"]> }) {
  if (!estimate.coutTotal) return null;
  const ecart = estimate.budget - estimate.coutTotal;
  const ecartRatio = ecart / estimate.budget;
  let titre: string;
  let classe: string;
  let messages: string[];

  if (ecart < 0) {
    titre = "Écart budgétaire estimé";
    classe = "text-[#B5433B]";
    messages = [
      "Le budget annoncé est actuellement inférieur à l'estimation de votre projet.",
      "Des ajustements pourront être nécessaires sur le terrain, la construction ou le budget global.",
      "Cette estimation ne tient pas encore compte de certains frais complémentaires liés notamment au terrain, aux raccordements ou à l'adaptation au sol.",
    ];
  } else if (ecartRatio < 0.05) {
    titre = "Marge budgétaire limitée";
    classe = "text-[#C97A28]";
    messages = [
      "Votre budget est très proche de l'estimation actuelle du projet. Les frais complémentaires pourraient nécessiter un ajustement du projet ou du budget global.",
      "Cette estimation ne tient pas encore compte de certains coûts liés notamment au terrain, aux raccordements et à l'adaptation au sol.",
    ];
  } else {
    titre = "Marge budgétaire avant frais complémentaires";
    classe = "text-[#4C7A5A]";
    messages = [
      "Cette marge pourra contribuer à absorber certains frais complémentaires liés notamment au terrain, aux raccordements, à l'adaptation au sol et aux choix définitifs de prestations.",
    ];
  }

  return (
    <>
      <div className="flex justify-between text-[15px] font-bold py-2 mt-2 pt-3 border-t border-[#D9D4CC]">
        <span>{titre}</span>
        <span className={classe}>
          {ecart >= 0 ? "+" : ""}
          {formatEur(ecart)}
        </span>
      </div>
      {messages.map((m) => (
        <p key={m} className="text-[13px] text-[#888780] mt-1 leading-relaxed">
          {m}
        </p>
      ))}
    </>
  );
}

// ─── Lead capture ───────────────────────────────────────────────────────────

function buildMessage(answers: Answers, diagnostic: Diagnostic): string {
  const e = diagnostic.estimate;
  const lines = [
    "INDICE DE FAISABILITÉ — RÉSUMÉ DU DIAGNOSTIC",
    "",
    `Score : ${diagnostic.total}/100 — ${diagnostic.niveau.label}`,
    `Faisabilité financière : ${diagnostic.faisabilite}`,
    `Maturité du projet : ${diagnostic.maturite}`,
    `Principal point à sécuriser : ${DOMAIN_LABELS[diagnostic.pointFaible]}`,
    "",
    `Budget : ${diagnostic.detail.budget}/25 · Terrain : ${diagnostic.detail.terrain}/25 · Financement : ${diagnostic.detail.financement}/20 · Calendrier : ${diagnostic.detail.calendrier}/10 · Cohérence : ${diagnostic.detail.coherence}/20`,
    "",
  ];
  if (e) {
    lines.push(
      `Construction estimée : ${formatEur(e.coutConstruction)}`,
      e.coutTotal ? `Total estimé : ${formatEur(e.coutTotal)}` : "",
      e.zone ? `Secteur : ${e.zone.nom}` : "",
      ""
    );
  }
  lines.push(
    "--- Réponses du questionnaire ---",
    answers.motivation_projet ? `Motivation : ${answers.motivation_projet}` : "",
    answers.echeance_emmenagement ? `Échéance d'emménagement : ${answers.echeance_emmenagement}` : "",
    answers.regarde_ancien ? `Regarde aussi l'ancien : ${answers.regarde_ancien}` : "",
    answers.nombre_chambres ? `Chambres souhaitées : ${answers.nombre_chambres}` : "",
    Array.isArray(answers.pieces_complementaires) ? `Pièces complémentaires : ${(answers.pieces_complementaires as string[]).join(", ")}` : "",
    answers.type_maison ? `Type de maison : ${answers.type_maison}` : "",
    answers.style_maison ? `Style : ${answers.style_maison}` : "",
    answers.terrain_status ? `Situation terrain : ${answers.terrain_status}` : "",
    answers.mode_financement ? `Mode de financement : ${answers.mode_financement}` : "",
    answers.budget_valide_professionnel ? `Budget vu avec banquier/courtier : ${answers.budget_valide_professionnel === "true" ? "Oui" : "Non"}` : "",
    answers.vente_bien_pour_projet ? `Vente d'un bien pour financer : ${answers.vente_bien_pour_projet}` : "",
    answers.apport ? `Apport personnel : ${formatEur(Number(answers.apport))}` : "",
    answers.financement_statut ? `Statut financement : ${answers.financement_statut}` : "",
    answers.calendrier_demarrage ? `Démarrage souhaité : ${answers.calendrier_demarrage}` : ""
  );
  return lines.filter(Boolean).join("\n");
}

function LeadForm({ answers, diagnostic }: { answers: Answers; diagnostic: Diagnostic }) {
  const router = useRouter();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: nom || prenom,
          prenom,
          email,
          telephone,
          typeProjet: "Indice de faisabilité",
          zone: answers.location,
          budget: answers.budget_global ? formatEur(Number(answers.budget_global)) : "",
          message: buildMessage(answers, diagnostic),
        }),
      });
      if (!res.ok) throw new Error();
      gtagEvent("generate_lead", { event_category: "formulaire", event_label: "indice_faisabilite" });
      router.push("/demande-etude/merci");
    } catch {
      setError("Une erreur est survenue. Réessayez ou appelez-nous directement.");
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#F2EDE6] min-h-screen">
      <div className="max-w-[560px] mx-auto px-5 py-10">
        <h1 className="text-[22px] font-black text-[#2C2C2A] mb-1">Pour recevoir votre analyse</h1>
        <p className="text-[13px] text-[#888780] mb-6">
          Vos coordonnées servent uniquement à vous transmettre votre rapport et à organiser un rendez-vous si vous le souhaitez — voir notre{" "}
          <Link href="/vie-privee/" className="text-[#BA7517] underline" target="_blank">
            politique de confidentialité
          </Link>
          .
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">
                Prénom <span className="text-[#BA7517]">*</span>
              </label>
              <input
                type="text"
                required
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[#BA7517]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">Nom</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[#BA7517]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">
                Email <span className="text-[#BA7517]">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[#BA7517]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">
                Téléphone <span className="font-normal normal-case">(optionnel)</span>
              </label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-[#BA7517]"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={rgpd}
              onChange={(e) => setRgpd(e.target.checked)}
              className="mt-0.5 flex-shrink-0 w-4 h-4 accent-[#BA7517] cursor-pointer"
            />
            <span className="text-[13px] text-[#888780] leading-[1.6]">
              J&apos;accepte que M&amp;M Construction utilise ces informations pour me recontacter au sujet de mon projet. *
            </span>
          </label>

          {error && <p className="text-red-600 text-[14px] bg-red-50 border border-red-200 px-4 py-3">{error}</p>}

          <button
            type="submit"
            disabled={loading || !rgpd}
            className="bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
          >
            {loading ? "Envoi en cours…" : "Recevoir mon analyse"}
          </button>
        </form>
      </div>
    </main>
  );
}

// ─── Root component ─────────────────────────────────────────────────────────

type Phase = "landing" | "questions" | "result" | "lead";

export default function IndiceFaisabiliteClient() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [answers, setAnswers] = useState<Answers>({});
  const [pointer, setPointer] = useState(0);

  const visibleQuestions = useMemo(() => getVisibleQuestions(answers), [answers]);
  const currentQuestion = QUESTIONS[pointer];
  const stepNumber = visibleQuestions.findIndex((q) => q.code === currentQuestion?.code) + 1;

  const diagnostic = useMemo(() => (phase === "result" || phase === "lead" ? computeDiagnostic(answers) : null), [phase, answers]);

  function handleAnswer(code: string, value: Answers[string]) {
    setAnswers((prev) => ({ ...prev, [code]: value }));
  }

  // Choix unique : enregistre la réponse et avance après un court délai (retour visuel de la
  // sélection), en calculant la suite sur la réponse fraîchement posée — pas sur `answers` qui
  // ne serait pas encore à jour au moment où le setTimeout se déclenche.
  function pickAndAdvance(code: string, value: string) {
    const updated = { ...answers, [code]: value };
    setAnswers(updated);
    setTimeout(() => {
      const next = findNextIndex(updated, pointer + 1, 1);
      if (next >= QUESTIONS.length) {
        setPhase("result");
        return;
      }
      setPointer(next);
    }, 220);
  }

  function goNext() {
    const next = findNextIndex(answers, pointer + 1, 1);
    if (next >= QUESTIONS.length) {
      setPhase("result");
      return;
    }
    setPointer(next);
  }

  function goBack() {
    const prev = findNextIndex(answers, pointer - 1, -1);
    if (prev < 0) {
      setPhase("landing");
      return;
    }
    setPointer(prev);
  }

  function restart() {
    setAnswers({});
    setPointer(0);
    setPhase("landing");
  }

  if (phase === "landing") {
    return (
      <Landing
        onStart={() => {
          setPointer(findNextIndex(answers, 0, 1));
          setPhase("questions");
        }}
      />
    );
  }

  if (phase === "questions" && currentQuestion) {
    return (
      <QuestionScreen
        key={currentQuestion.code}
        question={currentQuestion}
        answers={answers}
        stepNumber={stepNumber}
        totalSteps={visibleQuestions.length}
        onAnswer={handleAnswer}
        onPick={pickAndAdvance}
        onNext={goNext}
        onBack={goBack}
      />
    );
  }

  if (phase === "result" && diagnostic) {
    return <ResultScreen diagnostic={diagnostic} answers={answers} onContinue={() => setPhase("lead")} onRestart={restart} />;
  }

  if (phase === "lead" && diagnostic) {
    return <LeadForm answers={answers} diagnostic={diagnostic} />;
  }

  return null;
}
