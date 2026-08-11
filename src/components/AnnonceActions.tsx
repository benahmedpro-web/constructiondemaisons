"use client";
import { useState } from "react";
import { useFavoris } from "@/hooks/useFavoris";

type Props = { slug: string; title: string };

export function AnnonceActions({ slug, title }: Props) {
  const { isFavori, toggle } = useFavoris();
  const [copied, setCopied] = useState(false);
  const favori = isFavori(slug);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="flex items-center gap-2 shrink-0">
      {/* Partager */}
      <button
        onClick={handleShare}
        title="Partager cette annonce"
        className="flex items-center gap-1.5 px-3 py-1 border border-white/30 text-white text-[12px] font-medium cursor-pointer hover:bg-white/10 transition-colors shrink-0"
      >
        {copied ? (
          <>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Lien copié
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Partager
          </>
        )}
      </button>

      {/* Favori */}
      <button
        onClick={() => toggle(slug)}
        title={favori ? "Retirer des favoris" : "Ajouter aux favoris"}
        className="flex items-center gap-1.5 px-3 py-1 border border-white/30 text-white text-[12px] font-medium cursor-pointer hover:bg-white/10 transition-colors shrink-0"
      >
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill={favori ? "currentColor" : "none"}
          stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        {favori ? "Sauvegardé" : "Sauvegarder"}
      </button>
    </div>
  );
}
