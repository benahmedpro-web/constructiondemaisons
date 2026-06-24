"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const typesProjet = [
  "Maison ossature bois neuve",
  "Extension ossature bois",
  "Rénovation & isolation bois",
  "Autre projet bois",
];

const zones = [
  "Haute-Savoie (74)",
  "Ain (01)",
  "Genevois français",
  "Autre zone",
];

const budgets = [
  "Moins de 150 000 €",
  "150 000 – 250 000 €",
  "250 000 – 400 000 €",
  "Plus de 400 000 €",
  "À définir",
];

export default function DemandeEtudePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      router.push("/demande-etude/merci");
    } catch {
      setError("Une erreur est survenue. Merci de réessayer ou de nous contacter directement.");
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#F2EDE6] min-h-screen">
      {/* Header simple */}
      <div className="bg-[#2C2C2A] py-12 px-5">
        <div className="max-w-[780px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-white text-[32px] md:text-[40px] font-black mt-4 mb-2 leading-tight">
            Demande d&apos;étude gratuite
          </h1>
          <p className="text-white/60 text-[17px] leading-[1.6]">
            Décrivez votre projet. Mahmoud vous recontacte sous 48h pour un premier échange sans engagement.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-[780px] mx-auto px-5 py-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Identité */}
          <div className="bg-white p-6 flex flex-col gap-4">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#BA7517] mb-1">Vos coordonnées</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Prénom <span className="text-[#BA7517]">*</span></label>
                <input
                  name="prenom"
                  type="text"
                  required
                  placeholder="Jean"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Nom <span className="text-[#BA7517]">*</span></label>
                <input
                  name="nom"
                  type="text"
                  required
                  placeholder="Dupont"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Email <span className="text-[#BA7517]">*</span></label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jean.dupont@email.com"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Téléphone</label>
                <input
                  name="telephone"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Projet */}
          <div className="bg-white p-6 flex flex-col gap-4">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#BA7517] mb-1">Votre projet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Type de projet</label>
                <select
                  name="typeProjet"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">— Sélectionner —</option>
                  {typesProjet.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-[#2C2C2A]">Zone d&apos;intervention</label>
                <select
                  name="zone"
                  className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">— Sélectionner —</option>
                  {zones.map((z) => <option key={z} value={z}>{z}</option>)}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-[#2C2C2A]">Budget approximatif</label>
              <select
                name="budget"
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors appearance-none cursor-pointer"
              >
                <option value="">— Sélectionner —</option>
                {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-bold text-[#2C2C2A]">Décrivez votre projet <span className="text-[#BA7517]">*</span></label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Surface souhaitée, terrain disponible, délais envisagés, questions spécifiques…"
                className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] bg-white focus:outline-none focus:border-[#BA7517] transition-colors resize-y"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-[14px] bg-red-50 border border-red-200 px-4 py-3">{error}</p>
          )}

          {/* Consentement RGPD */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="rgpd"
              required
              className="mt-0.5 flex-shrink-0 w-4 h-4 accent-[#BA7517] cursor-pointer"
            />
            <span className="text-[13px] text-[#888780] leading-[1.6]">
              J&apos;accepte la{" "}
              <Link href="/vie-privee/" className="text-[#BA7517] no-underline hover:underline" target="_blank">politique de confidentialité</Link>
              {" "}et la{" "}
              <Link href="/politique-cookies/" className="text-[#BA7517] no-underline hover:underline" target="_blank">politique de cookies</Link>
              . Mes données sont utilisées uniquement pour traiter ma demande d&apos;étude. *
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#BA7517] text-white text-[17px] font-bold px-8 py-4 hover:bg-[#9E6312] transition-colors disabled:opacity-60 disabled:cursor-not-allowed self-start"
          >
            {loading ? "Envoi en cours…" : "Envoyer ma demande d'étude →"}
          </button>

          <p className="text-[13px] text-[#888780]">
            Réponse garantie sous 48h · Sans engagement · Vos données restent confidentielles
          </p>
        </form>
      </div>
    </main>
  );
}
