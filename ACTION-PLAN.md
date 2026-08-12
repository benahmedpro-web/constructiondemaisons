# Plan d'action SEO — Post Audit #20
**Mise à jour :** 6 août 2026 | Score actuel : 89/100

---

## Priorité 1 — IMMÉDIAT (dans les 7 jours)

### P1.1 — Corriger le titre du guide "2025" → "2026"
- **Fichier :** `src/app/guides/maison-ossature-bois/page.tsx`
- **Action :** Changer `title` de "Maison ossature bois : guide complet 2025" → "Maison ossature bois : guide complet 2026"
- **Impact :** Cohérence contenu/titre — signal fraîcheur pour Google et IA
- **Effort :** 5 min

### P1.2 — Valider le correctif 404 dans GSC
- **Action :** Google Search Console → Couverture → Erreur 404 → "Valider le correctif"
- **Prérequis :** Le déploiement Vercel des redirections doit être visible (commit de l'audit #20)
- **Impact :** Récupération du crawl budget sur ces URLs

### P1.3 — Demander l'indexation des 10 pages prioritaires (GSC)
- **Outil :** GSC → Inspection d'URL → "Demander l'indexation"
- **Pages :**
  1. `/maison-ossature-bois/`
  2. `/extension-bois/`
  3. `/renovation-bois/`
  4. `/faire-construire-haute-savoie/`
  5. `/demande-etude/`
  6. `/temoignages/`
  7. `/notre-methode/`
  8. `/guides/maison-ossature-bois/`
  9. `/guides/moe-vs-ccmi/`
  10. `/guides/re2020-maison-bois/`

---

## Priorité 2 — COURT TERME (dans les 30 jours)

### P2.1 — Enrichir les passages citables (GEO)
- **Objectif :** Porter 5 guides supplémentaires à ≥1 paragraphe de 134-167 mots
- **Guides cibles :**
  - `/guides/re2020-maison-bois/` — section norme RE2020 en chiffres
  - `/guides/extension-ossature-bois/` — section budget extension
  - `/guides/choisir-artisans-maison-bois/` — section critères sélection
  - `/guides/coordonner-chantier-bois/` — section planning chantier
  - `/guides/permis-construire-genevois/` — section délais instruction
- **Impact :** +5-10 pts GEO (citabilité IA)
- **Effort :** 2-3h

### P2.2 — BreadcrumbList sur les pages services
- **Pages :** `/maison-ossature-bois/`, `/extension-bois/`, `/renovation-bois/`, pages villes
- **Impact :** Rich snippet breadcrumb dans les SERPs
- **Effort :** 1h (composant JSON-LD réutilisable)

### P2.3 — Liens internes vers les 15 pages orphelines
- **Pages concernées :** Pages villes (annecy, annemasse, saint-julien, gex, thonon)
- **Action :** Ajouter des liens depuis les pages guides et services vers les pages villes correspondantes
- **Impact :** Améliore le crawl budget + autorité interne
- **Effort :** 2h

### P2.4 — Mettre à jour les mentions légales avec le SIREN
- **Prérequis :** Réception du SIREN du Greffe de Thonon-les-Bains
- **Fichier :** `src/app/mentions-legales/page.tsx`
- **Données à ajouter :**
  - Forme : SASU
  - Capital : 15 000 €
  - RCS Thonon-les-Bains + SIREN
  - Siège : 5 Rue du 18 Août 1944, 74100 Annemasse
- **Impact :** E-E-A-T légal, confiance Google

---

## Priorité 3 — MOYEN TERME (30-90 jours)

### P3.1 — LinkedIn Mahmoud Ben Ahmed
- **Action :** Créer le profil LinkedIn avec URL constructiondemaisons.com
- **Impact :** +3 pts GEO (signal brand authority)
- **À faire manuellement**

### P3.2 — Réclamer la fiche Pappers.fr
- **Prérequis :** RCS immatriculé + SIREN reçu
- **Action :** Revendiquer la fiche M&M CONSTRUCTION sur pappers.fr, ajouter URL du site
- **Impact :** Backlink autoritaire depuis un annuaire légal indexé

### P3.3 — Campagne avis Google : 14 → 20+ avis
- **Lien à partager :** `https://g.page/r/Cdn_3K5QUh7wEBM/review`
- **Action :** Partager à tous les clients récents (SMS, email de fin de chantier)
- **Impact :** reviewCount Schema + signal GEO + confiance locale

### P3.4 — Backlinks off-site
- **Cibles prioritaires :**
  - Annuaires bâtiment Haute-Savoie
  - Architectes / maîtres d'œuvre partenaires
  - Articles presse locale (lemessager.fr déjà publié)
  - Fédérations construction bois (FNB, CNDB)
- **Impact :** Domain Authority + crawl budget

---

## Suivi des scores

| Date | Score | Delta | Événement |
|------|-------|-------|-----------|
| Audit #18 | 94/100 | — | Score record |
| Audit #19 | ~65/100 | -29 | Régression layout.tsx |
| Audit #20 | 89/100 | +24 | Récupération + GEO |
| Objectif | 95/100 | +6 | Après P2.1-P2.3 |

---

## Ce qui est DONE depuis l'audit #18

- ✅ layout.tsx restauré avec tous les schémas
- ✅ 18 redirections 301 (anciens URLs 404)
- ✅ Chaînes redirect 2 hops → 1 hop (audit #20)
- ✅ OAI-SearchBot dans robots.txt
- ✅ GBP sameAs dans HomeAndConstructionBusiness
- ✅ Lien "Laisser un avis Google" (footer + temoignages)
- ✅ Passages citables 248 et 148 mots (2 guides)
- ✅ Bylines "Mis à jour" sur 6 guides
- ✅ Mentions légales SASU mises à jour
- ✅ Titres dupliqués/trop longs corrigés (SEMrush)
- ✅ H1 sur /demande-etude/
- ✅ HTML sémantique + canonical /catalogue/
- ✅ Rating values en numbers dans JSON-LD
- ✅ robots.txt nettoyé (/_next/ disallow supprimé)
- ✅ /catalogue/ ajouté au sitemap (51 URLs)
