"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, sujet: "Contact site web" }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Une erreur est survenue. Réessayez ou appelez directement.");
      }
    } catch {
      setError("Une erreur est survenue. Réessayez ou appelez directement.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <div className="bg-[#2C2C2A] py-14 px-5">
        <div className="max-w-[900px] mx-auto">
          <Link href="/" className="text-white/50 text-[13px] no-underline hover:text-white transition-colors">← Accueil</Link>
          <h1 className="text-white text-[34px] md:text-[46px] font-black mt-4 mb-3 leading-tight">
            Contactez M&amp;M CONSTRUCTION
          </h1>
          <p className="text-white/60 text-[17px] leading-[1.6] max-w-[560px]">
            Une question, un projet, une parcelle à évaluer — répondez dans les 48h.
          </p>
        </div>
      </div>

      <section className="bg-white py-12 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* Formulaire */}
          <div>
            {sent ? (
              <div className="bg-[#F2EDE6] p-8 text-center">
                <div className="text-[#BA7517] text-[48px] mb-4">✓</div>
                <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Message envoyé</h2>
                <p className="text-[15px] text-[#888780] leading-[1.7]">
                  Mahmoud vous répond sous 48h. En cas d&apos;urgence, appelez directement au <strong className="text-[#2C2C2A]">+33 6 25 59 09 26</strong>.
                </p>
                <Link href="/" className="inline-block mt-6 text-[#BA7517] text-[14px] font-bold no-underline hover:underline">
                  ← Retour à l&apos;accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-1">Envoyez un message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Prénom *</label>
                    <input name="prenom" required className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white" placeholder="Prénom" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Nom *</label>
                    <input name="nom" required className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white" placeholder="Nom" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Email *</label>
                    <input name="email" type="email" required className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white" placeholder="votre@email.com" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Téléphone</label>
                    <input name="telephone" type="tel" className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white" placeholder="06 XX XX XX XX" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Objet</label>
                  <select name="objet" className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white">
                    <option value="">Sélectionnez un objet</option>
                    <option value="Projet maison neuve ossature bois">Projet maison neuve ossature bois</option>
                    <option value="Projet extension bois">Projet extension bois</option>
                    <option value="Projet rénovation">Projet rénovation</option>
                    <option value="Annonce — renseignement">Annonce — renseignement</option>
                    <option value="Autre question">Autre question</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-bold text-[#2C2C2A] uppercase tracking-wide">Message *</label>
                  <textarea name="message" required rows={5} className="border border-[#D9D4CC] px-4 py-3 text-[15px] text-[#2C2C2A] outline-none focus:border-[#BA7517] bg-white resize-none" placeholder="Décrivez votre projet ou votre question..." />
                </div>

                {error && <p className="text-red-600 text-[14px]">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#BA7517] text-white text-[16px] font-bold py-4 px-8 hover:bg-[#9E6312] transition-colors cursor-pointer border-none disabled:opacity-60"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message →"}
                </button>

                <p className="text-[12px] text-[#888780]">* Champs obligatoires. Vos données ne sont pas transmises à des tiers.</p>
              </form>
            )}
          </div>

          {/* Coordonnées */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#F2EDE6] p-6">
              <h3 className="text-[15px] font-bold text-[#2C2C2A] uppercase tracking-wide mb-4">Coordonnées</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.35 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <div className="text-[13px] font-bold text-[#2C2C2A]">Téléphone</div>
                    <a href="tel:+33625590926" className="text-[14px] text-[#888780] no-underline hover:text-[#BA7517]">+33 6 25 59 09 26</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <div className="text-[13px] font-bold text-[#2C2C2A]">Email</div>
                    <a href="mailto:benahmed.pro@icloud.com" className="text-[14px] text-[#888780] no-underline hover:text-[#BA7517]">benahmed.pro@icloud.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <div className="text-[13px] font-bold text-[#2C2C2A]">Localisation</div>
                    <div className="text-[14px] text-[#888780]">Annemasse (74100)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F2EDE6] p-6">
              <h3 className="text-[15px] font-bold text-[#2C2C2A] uppercase tracking-wide mb-3">Zone d&apos;intervention</h3>
              <div className="flex flex-wrap gap-1.5">
                {["Haute-Savoie (74)", "Ain (01)", "Genevois français", "Pays de Gex", "Chablais", "Annecy"].map((z) => (
                  <span key={z} className="text-[12px] bg-white text-[#888780] px-2.5 py-1 border border-[#D9D4CC]">{z}</span>
                ))}
              </div>
            </div>

            <div className="bg-[#2C2C2A] p-6">
              <h3 className="text-[15px] font-bold text-white uppercase tracking-wide mb-2">Disponibilités</h3>
              <p className="text-[14px] text-white/60 leading-[1.6]">
                Lundi – Vendredi : 8h – 19h<br />
                Samedi : 9h – 12h<br />
                Réponse email sous 48h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA demande d'étude */}
      <section className="bg-[#F2EDE6] py-12 px-5 text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="text-[22px] font-bold text-[#2C2C2A] mb-2">Vous avez un projet de construction ?</h2>
          <p className="text-[15px] text-[#888780] leading-[1.7] mb-6">
            La demande d&apos;étude inclut une analyse de faisabilité complète et un budget estimatif. Gratuit, sans engagement.
          </p>
          <Link href="/demande-etude/" className="inline-block bg-[#BA7517] text-white text-[16px] font-bold px-7 py-3.5 no-underline hover:bg-[#9E6312] transition-colors">
            Demande d&apos;étude gratuite →
          </Link>
        </div>
      </section>
    </main>
  );
}
