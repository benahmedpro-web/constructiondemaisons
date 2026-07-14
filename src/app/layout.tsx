import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&M CONSTRUCTION — Responsable de projets en Haute-Savoie",
  description: "M&M CONSTRUCTION — Accompagnement et coordination de projets de construction en Haute-Savoie, Ain et Genevois français.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full">{children}<Analytics /></body>
    </html>
  );
}
