"use client";
import { useState, useCallback } from "react";

const KEY = "mm-recherches";

export type SavedSearch = {
  id: string;
  label: string;
  date: string;
  filters: {
    type: string;
    communes: string[];
    prixMin: string;
    prixMax: string;
    surfaceMin: string;
    surfaceMax: string;
    maisonSurfaceMin: string;
    maisonSurfaceMax: string;
    chambresMin: number;
    rayon: number | null;
  };
};

function buildLabel(f: SavedSearch["filters"]): string {
  const parts: string[] = [];
  if (f.type === "terrain") parts.push("Terrain");
  else if (f.type === "maison") parts.push("Maison + terrain");
  else parts.push("Tous types");
  if (f.communes.length > 0) parts.push(f.communes.slice(0, 2).join(", ") + (f.communes.length > 2 ? "…" : ""));
  if (f.prixMax) parts.push(`< ${parseInt(f.prixMax).toLocaleString("fr-FR")} €`);
  if (f.surfaceMin) parts.push(`≥ ${f.surfaceMin} m²`);
  return parts.join(" · ") || "Tous";
}

export function useSavedSearches() {
  const [searches, setSearches] = useState<SavedSearch[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(KEY);
      return stored ? (JSON.parse(stored) as SavedSearch[]) : [];
    } catch {
      return [];
    }
  });

  const save = useCallback((filters: SavedSearch["filters"]) => {
    const entry: SavedSearch = {
      id: Date.now().toString(),
      label: buildLabel(filters),
      date: new Date().toLocaleDateString("fr-FR"),
      filters,
    };
    setSearches((prev) => {
      const next = [entry, ...prev].slice(0, 10);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
    return entry.label;
  }, []);

  const remove = useCallback((id: string) => {
    setSearches((prev) => {
      const next = prev.filter((s) => s.id !== id);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  return { searches, save, remove };
}
