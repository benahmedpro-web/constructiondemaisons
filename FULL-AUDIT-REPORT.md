# Rapport d'audit SEO complet — Audit #20
**Site :** https://www.constructiondemaisons.com  
**Date :** 6 août 2026  
**Score global : 89/100** *(Excellent)*  
**Précédent :** Audit #18 : 94/100 → Audit #19 : régression layout.tsx détectée → **Audit #20 : 89/100 (récupération + améliorations GEO)**

---

## Résumé exécutif

Le site a subi une régression critique entre les audits #18 et #19 (layout.tsx réduit de 164 → 21 lignes, perte totale de l'infrastructure SEO). Ce layout a été restauré en audit #19 et une série d'améliorations supplémentaires a été déployée : redirections 301, signaux GEO, données structurées, liens internes. L'audit #20 confirme la récupération à 89/100, avec des points d'amélioration résiduels sur les chaînes de redirections et la citabilité des passages.

---

## Scores par catégorie

| Catégorie | Poids | Score | Points |
|-----------|-------|-------|--------|
| Technical SEO | 25% | 92% | 23/25 |
| Content Quality | 20% | 80% | 16/20 |
| On-Page SEO | 15% | 100% | 15/15 |
| Schema / Données structurées | 15% | 93% | 14/15 |
| Performance (CWV) | 10% | 80% | 8/10 |
| Optimisation images | 10% | 80% | 8/10 |
| AI Search Readiness (GEO) | 5% | 90% | 4.5/5 |
| **TOTAL** | **100%** | | **88.5 → 89/100** |

---

## Technical SEO (23/25)

### ✅ Passes

| Élément | Valeur | Statut |
|---------|--------|--------|
| HTTPS + HSTS | max-age=63072000, preload | ✅ |
| Security headers | 100/100 (6/6 headers présents) | ✅ |
| robots.txt | Allow / + Disallow /api/ | ✅ |
| Crawleurs IA | 11 bots explicitement autorisés | ✅ |
| OAI-SearchBot | Présent | ✅ |
| Sitemap XML | 51 URLs indexées | ✅ |
| Pages core (200) | /, /maison-ossature-bois/, /extension-bois/, /catalogue/, /guides/... | ✅ |
| 301 redirects | 18 redirections pour anciens URLs 404 | ✅ |
| trailingSlash | true — cohérent sur tout le site | ✅ |

### ⚠️ Avertissements

**Chaînes de redirect 2 hops (→ FIX déployé en audit #20)**  
- Avant : `/services/` → 301 → `/maison-ossature-bois` → 308 → `/maison-ossature-bois/`  
- Cause : avec `trailingSlash: true`, Next.js normalise les chemins avant matching — la source `/services/` matchait la règle `/services` dont la destination manquait le trailing slash.  
- Fix appliqué : suppression des variantes redondantes + trailing slash dans toutes les destinations → 1 hop direct.

**15 pages orphelines (≤1 lien interne entrant)**  
- Pages de villes (annecy, annemasse, saint-julien...) et certains guides reçoivent peu de liens internes.

---

## Content Quality (16/20)

### ✅ Passes

| Élément | Détail |
|---------|--------|
| H1 unique sur toutes les pages | Vérifié (/demande-etude/ H1 ajouté en commit 8740dd1) |
| Meta descriptions | Présentes sur toutes les pages core |
| Bylines avec dates | "Mis à jour le 1er août 2026" — 6 guides + 2 pages enrichies |
| Passage citable 248 mots | `/guides/maison-ossature-bois/` — para coûts enrichi |
| Passage citable 148 mots | `/guides/moe-vs-ccmi/` — para CCMI enrichi |
| E-E-A-T : fondateur | Person schema avec jobTitle + 20 ans d'expérience |
| Avis clients | 14 avis Google, 3 en JSON-LD |

### ⚠️ Avertissements

| Élément | Détail |
|---------|--------|
| Passages <134 mots | Majorité des paragraphes des guides encore courts (46-77 mots) |
| Titre guide "2025" | `/guides/maison-ossature-bois/` — title tag dit "guide complet 2025", contenu mis à jour août 2026 |
| Citabilité GEO limitée | Seuls 2 guides ont des passages dans la zone 134-167 mots |

---

## On-Page SEO (15/15)

| Élément | Valeur | Statut |
|---------|--------|--------|
| Title tag homepage | "M&M CONSTRUCTION — Maison ossature bois Haute-Savoie" (61 chars) | ✅ |
| Meta description | 130 chars, avec CTA "Étude gratuite" | ✅ |
| Canonical | `https://www.constructiondemaisons.com/` | ✅ |
| Open Graph | 7/7 tags — score 100/100 | ✅ |
| Twitter Card | 6/6 tags — summary_large_image | ✅ |
| OG image | `/images/og-homepage.jpg` (1200×630) | ✅ |
| Titres dupliqués | Corrigés (commit 940e212) | ✅ |
| Titres trop longs | 9 titres >60 chars corrigés (commit 940e212) | ✅ |

---

## Schema / Données structurées (14/15)

| Schéma | Pages | Statut |
|--------|-------|--------|
| HomeAndConstructionBusiness | Layout global | ✅ |
| WebSite + SearchAction | Layout global | ✅ |
| AggregateRating | ratingValue: 5.0, reviewCount: 14 | ✅ |
| Review[] | 3 avis datés (2025-09-12 à 2026-01-18) | ✅ |
| Person (fondateur) | Mahmoud Ben Ahmed, Maître d'œuvre | ✅ |
| sameAs | `https://g.page/r/Cdn_3K5QUh7wEBM` | ✅ |
| Article | Guides (datePublished + dateModified) | ✅ |
| BreadcrumbList | Guides | ✅ |
| FAQPage | Absent — correct (restreint gov/santé depuis août 2023) | ✅ |

**Manque :** BreadcrumbList sur les pages services (/maison-ossature-bois/, /extension-bois/, etc.) → gain potentiel de rich snippet.

---

## Performance CWV (8/10)

| Métrique | Valeur | Statut |
|----------|--------|--------|
| PageSpeed API | Rate limited — non mesuré ce cycle | ℹ️ |
| Infrastructure | Vercel CDN Edge + Next.js Standalone | ✅ |
| Font preloading | BrandonGrotesque-Black.woff2 + Bold | ✅ |
| trailingSlash | Normalisé — pas de duplication cache | ✅ |
| CSP | Stricte (pas de CDN externe) | ✅ |

Confiance : Likely — basé sur l'infrastructure. Mesurer avec PageSpeed dans 24h (rate limit).

---

## Optimisation images (8/10)

| Élément | Statut |
|---------|--------|
| OG image présente | ✅ |
| Next.js Image (lazy + srcset) | ✅ (assumé, framework) |
| Audit alt text complet | Non réalisé ce cycle |
| WebP/AVIF | Activé par Next.js Image par défaut |

---

## AI Search Readiness / GEO (4.5/5)

| Signal | Statut |
|--------|--------|
| GPTBot | Autorisé ✅ |
| OAI-SearchBot | Autorisé ✅ |
| ClaudeBot / anthropic-ai | Autorisé ✅ |
| PerplexityBot | Autorisé ✅ |
| Google-Extended, Applebot-Extended | Autorisé ✅ |
| Bytespider, CCBot, FacebookBot, Amazonbot | Autorisé ✅ |
| llms.txt | Présent ✅ |
| sameAs GBP | `https://g.page/r/Cdn_3K5QUh7wEBM` ✅ |
| Passages citables (134-167 mots) | 2 pages ✅ |
| Bylines + dates visibles | 6+ guides ✅ |
| LinkedIn Mahmoud Ben Ahmed | Absent ⚠️ |
| Fiche Pappers.fr | Absent (RCS en attente) ⚠️ |
| Avis Google 20+ | 14 actuellement ⚠️ |

---

## Évolution des scores

| Audit | Score | Événement clé |
|-------|-------|---------------|
| #18 | 94/100 | Score record pré-régression |
| #19 | ~65/100 | Régression layout.tsx (164 → 21 lignes) |
| #20 | 89/100 | Récupération + GEO + 301 + schémas |

---

## Commits déployés entre #18 et #20

| Commit | Description |
|--------|-------------|
| 56d6fae | Restauration complète layout.tsx + /catalogue/ sitemap |
| 6d9e0a7 | 301 redirects 11 anciens URLs 404 |
| dae185b | GEO : passages citables + OAI-SearchBot |
| 698bda6 | GEO : GBP sameAs + liens avis |
| 5522179 | GEO : dates visibles 6 guides |
| 8e82587 | Mentions légales SASU |
| 83d0ad1 | Corrections SEMrush (robots.txt, JSON-LD, FAQPage) |
| 940e212 | 4 titres en double + 9 titres trop longs + données invalides |
| 8740dd1 | H1 manquant /demande-etude/ |
| 38098ff | robots.txt : suppression /_next/ disallow |
| 6ffb414 | Liens internes + page orpheline |
| 6687b71 | Rating values en numbers dans JSON-LD |
| 408f292 | HTML sémantique politique-cookies + canonical catalogue |
| 10ab079 | Nav : réorganisation menu |
| **Audit #20** | **Fix chaînes redirect 2→1 hop** |
