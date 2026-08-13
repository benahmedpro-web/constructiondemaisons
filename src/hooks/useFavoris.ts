"use client";
import { useState, useCallback } from "react";

const KEY = "mm-favoris";

export function useFavoris() {
  const [favoris, setFavoris] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(KEY);
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  const toggle = useCallback((slug: string) => {
    setFavoris((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isFavori = useCallback((slug: string) => favoris.includes(slug), [favoris]);

  return { favoris, toggle, isFavori };
}
