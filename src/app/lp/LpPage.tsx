"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const PHONE = "+33625590926";

const TEMOIGNAGES = [
  {
    nom: "Jocelyn S.",
    date: "juin 2023",
    texte: "Excellent professionnel, très à l'écoute qui a su cerner nos besoins et envies. Disponible, réactif et rassurant tout au long du processus. Je recommande fortement.",
  },
  {
    nom: "Martin M.",
    date: "avril 2024",
    texte: "M. Ben Ahmed est un professionnel très consciencieux. Grâce à lui nous avons pu construire notre maison. Vous pouvez lui faire confiance pour votre projet.",
  },
  {
    nom: "Joelle T.",
    date: "mai 2025",
    texte: "Du plan de la maison à la réception, vous avez été attentif aux détails, toujours avec une grande empathie. Mr BEN AHMED est un homme de confiance et de parole.",
  },
];

const ETAPES = [
  { label: "Évaluation", detail: "Analyse terrain, programme, budget — on vous dit si c'est faisable." },
  { label: "Conception & permis", detail: "Plans sur mesure, dépôt en mairie, suivi de l'instruction." },
  { label: "Sélection artisans", detail: "Appel d'offres, vérification décennales, contrats directs avec vous." },
  { label: "Coordination chantier", detail: "Planning, réunions, suivi des délais. Un seul numéro à appeler." },
];

export function LpPage() {
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    telephone: "",
    commune: "",
    typeProjet: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.prenom || !form.email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.prenom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
          typeProjet: form.typeProjet || "Non précisé",
          zone: form.commune,
          budget: "",
          message: `Type de projet : ${form.typeProjet || "Non précisé"}. Commune : ${form.commune || "Non précisée"}.`,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      window.location.href = "/demande-etude/merci/";
    } catch {
      setError("Une erreur est survenue. Réessayez ou appelez-nous directement.");
      setLoading(false);
    }
  }

  const inputCls =
    "w-full bg-white border border-[#D9D4CC] text-[#2C2C2A] text-[15px] px-4 py-3 outline-none focus:border-[#BA7517] transition-colors placeholder:text-[#BBBAB5]";
  const labelCls = "block text-[11px] font-bold uppercase tracking-widest text-[#888780] mb-1.5";

  return (
    <main className="bg-white">

      {/* ── Barre supérieure ──────────────────────────────── */}
      <div className="bg-[#2C2C2A] px-5 py-3 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <span className="text-white font-black text-[16px] tracking-tight">M&M CONSTRUCTION</span>
        </Link>
        <a
          href={`tel:${PHONE}`}
          className="bg-[#BA7517] text-white text-[13px] font-bold px-4 py-2 no-underline hover:bg-[#9E6312] transition-colors"
          aria-label="Nous appeler"
        >
          Être rappelé
        </a>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative bg-[#2C2C2A] py-16 px-5 overflow-hidden">
        <Image
          src="/images/hero-maison-bois-montagne-1.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2C2C2A]/75" />
        <div className="relative z-10 max-w-[720px] mx-auto text-center">
          <p className="text-[#BA7517] text-[11px] font-bold uppercase tracking-widest mb-4">
            Maîtrise d&apos;œuvre · Haute-Savoie &amp; Genevois français
          </p>
          <h1 className="text-white text-[32px] md:text-[46px] font-black leading-tight mb-5" style={{ textWrap: "balance" } as React.CSSProperties}>
            Avant de vous engager avec un constructeur, demandez un avis indépendant.
          </h1>
          <p className="text-white/70 text-[17px] leading-[1.7] max-w-[580px] mx-auto mb-8">
            M&M CONSTRUCTION coordonne votre projet de A à Z — construction neuve, extension ou rénovation. Spécialiste maison ossature bois. Honoraires fixes, aucune marge cachée sur vos artisans.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {["20 ans de BTP", "200+ projets", "Haute-Savoie · Ain 01", "Étude gratuite"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-white/60 text-[13px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                {b}
              </span>
            ))}
          </div>

          <a
            href="#formulaire"
            className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors"
          >
            Demander mon étude gratuite →
          </a>
          <p className="mt-3 text-white/40 text-[12px]">Premier échange sans engagement — réponse sous 48h</p>
        </div>
      </section>

      {/* ── Pourquoi un pro indépendant ───────────────────── */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[860px] mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#2C2C2A] text-center mb-10" style={{ textWrap: "balance" } as React.CSSProperties}>
            Constructeur catalogue ou maître d&apos;œuvre — la différence qui compte
          </h2>
          {/* En-têtes */}
          <div className="hidden md:grid md:grid-cols-[140px_1fr_1fr] border border-[#D9D4CC]">
            <div className="bg-[#2C2C2A]" />
            <div className="px-6 py-3 border-l border-[#D9D4CC] bg-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#888780]">Constructeur CCMI</span>
            </div>
            <div className="px-6 py-3 border-l-4 border-l-[#BA7517] bg-[#F2EDE6]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">M&M CONSTRUCTION</span>
            </div>
          </div>

          {/* Lignes */}
          <div className="border border-t-0 border-[#D9D4CC] md:border-t-0">
            {[
              {
                dim: "Votre projet",
                ccmi: "Cadre prédéfini par le constructeur",
                mm: "Conçu autour de vos besoins et de votre terrain",
              },
              {
                dim: "Vos artisans",
                ccmi: "Sous-traitants du constructeur, marges intégrées",
                mm: "Mis en concurrence, contrats directs avec vous",
              },
              {
                dim: "Votre budget",
                ccmi: "Prix global, détail non communiqué",
                mm: "Devis poste par poste avant toute décision",
              },
              {
                dim: "Vos honoraires",
                ccmi: "Intégrés dans le prix global",
                mm: "Forfaitaires et connus à la signature",
              },
              {
                dim: "Votre suivi",
                ccmi: "Interlocuteurs multiples selon les phases",
                mm: "Un seul interlocuteur de la conception à la livraison",
              },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] border-t border-[#D9D4CC] last:border-b-0">
                {/* Dimension */}
                <div className="bg-[#2C2C2A] px-4 py-4 flex items-center">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517]">{row.dim}</span>
                </div>
                {/* CCMI */}
                <div className="px-6 py-4 bg-white border-t md:border-t-0 md:border-l border-[#D9D4CC]">
                  <span className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#888780] block mb-1">CCMI</span>
                  <span className="text-[14px] text-[#888780]">{row.ccmi}</span>
                </div>
                {/* M&M */}
                <div className="px-6 py-4 bg-[#F2EDE6] border-t md:border-t-0 md:border-l-4 md:border-l-[#BA7517]">
                  <span className="md:hidden text-[10px] font-bold uppercase tracking-widest text-[#BA7517] block mb-1">M&M CONSTRUCTION</span>
                  <span className="text-[14px] font-semibold text-[#2C2C2A]">{row.mm}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire ────────────────────────────────────── */}
      <section id="formulaire" className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[#BA7517] text-[11px] font-bold uppercase tracking-widest text-center mb-3">Étude gratuite</p>
          <h2 className="text-white text-[26px] font-black text-center mb-2" style={{ textWrap: "balance" } as React.CSSProperties}>
            Décrivez votre projet en 30 secondes
          </h2>
          <p className="text-white/50 text-[14px] text-center mb-8">
            Mahmoud analyse votre situation et vous recontacte sous 48h.
          </p>

          {sent ? (
            <div className="bg-[#BA7517]/10 border border-[#BA7517] p-6 text-center">
              <p className="text-white font-bold">Votre demande a bien été envoyée.</p>
              <p className="text-white/60 text-[13px] mt-1">Mahmoud vous recontacte sous 48h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${labelCls} text-[#888780]`} htmlFor="lp-prenom">Prénom *</label>
                  <input
                    id="lp-prenom"
                    className={inputCls}
                    type="text"
                    placeholder="Votre prénom"
                    value={form.prenom}
                    onChange={(e) => update("prenom", e.target.value)}
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className={`${labelCls} text-[#888780]`} htmlFor="lp-email">Email *</label>
                  <input
                    id="lp-email"
                    className={inputCls}
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`${labelCls} text-[#888780]`} htmlFor="lp-tel">Téléphone</label>
                  <input
                    id="lp-tel"
                    className={inputCls}
                    type="tel"
                    placeholder="06 XX XX XX XX"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className={`${labelCls} text-[#888780]`} htmlFor="lp-commune">Commune du projet</label>
                  <input
                    id="lp-commune"
                    className={inputCls}
                    type="text"
                    placeholder="Annecy, Thonon…"
                    value={form.commune}
                    onChange={(e) => update("commune", e.target.value)}
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div>
                <label className={`${labelCls} text-[#888780]`} htmlFor="lp-type">Type de projet</label>
                <select
                  id="lp-type"
                  className={`${inputCls} cursor-pointer`}
                  value={form.typeProjet}
                  onChange={(e) => update("typeProjet", e.target.value)}
                >
                  <option value="">Sélectionner…</option>
                  <option value="Construction neuve">Construction neuve</option>
                  <option value="Extension / surélévation">Extension / surélévation</option>
                  <option value="Rénovation & isolation">Rénovation &amp; isolation</option>
                  <option value="Je cherche un terrain à bâtir">Je cherche un terrain à bâtir</option>
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-[13px] text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !form.prenom || !form.email}
                className="bg-[#BA7517] text-white text-[16px] font-bold py-4 px-6 hover:bg-[#9E6312] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {loading ? "Envoi en cours…" : "Envoyer ma demande d'étude →"}
              </button>
              <p className="text-white/30 text-[11px] text-center">
                Sans engagement — vos données ne sont pas revendues
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#2C2C2A] text-center mb-10">
            Ce qui se passe après votre demande
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#F2EDE6]">
            {ETAPES.map((e, i) => (
              <div key={i} className="flex gap-4 p-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#BA7517] flex items-center justify-center text-white font-black text-[13px]">
                  {i + 1}
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#2C2C2A] mb-1">{e.label}</div>
                  <p className="text-[13px] text-[#888780] leading-[1.6]">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Témoignages ───────────────────────────────────── */}
      <section className="bg-[#F2EDE6] py-14 px-5">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#BA7517] text-center mb-2">Avis Google vérifiés</p>
          <h2 className="text-[22px] font-bold text-[#2C2C2A] text-center mb-8">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TEMOIGNAGES.map((t) => (
              <div key={t.nom} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#BA7517"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="text-[13px] text-[#888780] leading-[1.7] flex-1 italic">&ldquo;{t.texte}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#2C2C2A]">{t.nom}</span>
                  <span className="text-[11px] text-[#BBBAB5]">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mahmoud ───────────────────────────────────────── */}
      <section className="bg-white py-14 px-5">
        <div className="max-w-[760px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
            <div className="bg-[#F2EDE6] aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/images/mahmoud-ben-ahmed.jpg"
                alt="Mahmoud Ben Ahmed — M&M CONSTRUCTION"
                width={200}
                height={200}
                className="w-full h-full object-cover object-top"
                onError={() => {}}
              />
            </div>
            <div>
              <p className="text-[#BA7517] text-[11px] font-bold uppercase tracking-widest mb-2">Votre interlocuteur</p>
              <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-3">Mahmoud Ben Ahmed</h2>
              <p className="text-[15px] text-[#888780] leading-[1.8] mb-4">
                20 ans de terrain dans le BTP, plus de 200 projets coordonnés en Haute-Savoie et Genevois français. Je travaille en indépendant — je n&apos;ai aucune marge à prendre sur les matériaux ou les artisans. Mon seul objectif : que votre projet aboutisse dans les délais, dans le budget prévu, avec les bons intervenants.
              </p>
              <div className="flex flex-wrap gap-3">
                {["20 ans BTP", "200+ projets", "Zone 74 · 01", "Spécialiste bois"].map((tag) => (
                  <span key={tag} className="text-[12px] font-bold bg-[#F2EDE6] text-[#2C2C2A] px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────── */}
      <section className="bg-[#2C2C2A] py-14 px-5 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[24px] font-bold text-white mb-3" style={{ textWrap: "balance" } as React.CSSProperties}>
            Un premier échange gratuit, sans engagement
          </h2>
          <p className="text-white/55 text-[15px] leading-[1.7] mb-8">
            Mahmoud analyse votre terrain, votre programme et votre budget — et vous dit ce qui est faisable avant toute contractualisation.
          </p>
          <a
            href="#formulaire"
            className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-8 py-4 no-underline hover:bg-[#9E6312] transition-colors"
          >
            Demander mon étude gratuite →
          </a>
        </div>
      </section>

      {/* ── Footer minimal ────────────────────────────────── */}
      <footer className="bg-[#1E1C19] py-5 px-5">
        <div className="max-w-[860px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <span className="text-white/30 text-[12px]">© 2026 M&M CONSTRUCTION — Haute-Savoie &amp; Genevois français</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales/" className="text-white/30 text-[12px] no-underline hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact/" className="text-white/30 text-[12px] no-underline hover:text-white/60 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
