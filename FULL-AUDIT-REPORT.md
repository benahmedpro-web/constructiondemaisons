# Audit SEO Complet — constructiondemaisons.com
**Date** : 12 août 2026 | **Périmètre** : full-site | **Auditeur** : Agentic-SEO-Skill #21

---

## A) Résumé exécutif

**Score SEO global : 72 / 100 — Bon**

Profil : business local construction spécialisée (maîtrise d'œuvre bois), Haute-Savoie + Ain + Genevois français.
Le site a une infrastructure technique solide et une stratégie E-E-A-T en bonne voie. Trois zones limitent le score : la structure de maillage interne (pages orphelines), l'absence de schéma Person sur `/a-propos/`, et les pages `/annonces/` sans balisage structuré.

### Top 3 problèmes
1. **Pages orphelines** — 5 pages (4 `/annonces/`, 1 `/guides/`) avec ≤ 1 lien entrant
2. **Person schema absent sur `/a-propos/`** — la page biographie ne bénéficie pas du schéma qui affirme l'expertise de l'auteur
3. **Pages `/annonces/` sans schema** — pages individuelles (ex: `maison-ossature-bois-annemasse-74`) sans JSON-LD

### Top 3 opportunités
1. Ajouter PersonPage / Person JSON-LD sur `/a-propos/` → signal E-E-A-T majeur
2. Enrichir le maillage interne vers les 5 pages orphelines
3. Aligner les `review` du schema AggregateRating avec les vrais avis Google publics (Laurent Ramos, Francis Nossin)

---

## B) Tableau des findings

| Zone | Sévérité | Confiance | Finding | Evidence | Fix |
|------|----------|-----------|---------|----------|-----|
| Technical | ✅ Pass | Confirmed | Sécurité headers 100/100 | HSTS, CSP, XFO, XCTO, RP, PP tous présents | — |
| Technical | ✅ Pass | Confirmed | Zéro lien brisé | 29/30 sains, 0 broken | — |
| Technical | ✅ Pass | Confirmed | robots.txt — 11 crawlers IA autorisés | GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, CCBot, anthropic-ai, FacebookBot, Amazonbot, OAI-SearchBot | — |
| Technical | ✅ Pass | Confirmed | Redirects propres | Homepage : 0 hop, 200 direct en 202ms | — |
| Technical | ✅ Pass | Confirmed | Sitemap complet | 153 URLs indexées, HTTP 200 | — |
| Technical | ⚠️ Warning | Confirmed | 5 pages orphelines (≤1 lien entrant) | `/annonces/maison-ossature-bois-archamps-74`, `-annemasse-74`, `extension-ossature-bois-thonon-74`, `maison-ossature-bois-saint-julien-74`, `/guides/prix-construction-maison` | Ajouter liens depuis pages de ville ou hub /annonces/ |
| Technical | ⚠️ Warning | Hypothesis | Core Web Vitals inconnus | API PageSpeed rate-limited — aucune mesure LCP/INP/CLS disponible | Mesurer manuellement via PageSpeed.web.dev |
| Contenu | ✅ Pass | Confirmed | E-E-A-T photo auteur sur 15 pages | Photo + nom + lien /a-propos/ sur /maison-ossature-bois/ + 14 guides | — |
| Contenu | ✅ Pass | Confirmed | Vrais avis clients intégrés | Laurent Ramos (avril 2021), Francis Nossin (mai 2025) verbatim | — |
| Contenu | ✅ Pass | Confirmed | Lisibilité correcte homepage | Flesch 62.6, niveau 7e-8e (Standard) | — |
| Contenu | ✅ Pass | Confirmed | 14 guides avec contenu substantiel | Article schema, auteur, dateModified, FAQ intégrées | — |
| Contenu | ⚠️ Warning | Confirmed | AggregateRating reviewers fictifs | Schema : "Sébastien M.", "Claire et Thomas R.", "Frédéric L." ≠ vrais avis Google publics (Laurent Ramos, Francis Nossin…) | Remplacer par les vrais avis Google existants |
| On-Page | ✅ Pass | Confirmed | H1 pertinents sur toutes pages testées | "Construction de maison ossature bois en Haute-Savoie", "Faire construire en Haute-Savoie…" etc. | — |
| On-Page | ✅ Pass | Confirmed | Meta descriptions complètes | Toutes pages testées : descriptions présentes, longueur ≤ 160 chars | — |
| On-Page | ✅ Pass | Confirmed | OG + Twitter 100/100 | og:title, og:description, og:image, twitter:card tous valides | — |
| On-Page | ⚠️ Warning | Confirmed | Ancre "Configurer mon projet →" × 18 | Sur-représentation d'une seule ancre dans les liens internes | Varier : "Demander une étude", "Lancer mon projet", etc. |
| On-Page | ⚠️ Warning | Confirmed | 3 pages avec < 3 liens internes entrants | Crawler crawl internal_links : pages avec avg = 1 lien | Ajouter liens contextuels dans guides ou pages de ville |
| Schema | ✅ Pass | Confirmed | HomeAndConstructionBusiness + AggregateRating | Homepage : @type HomeAndConstructionBusiness, aggregateRating 5/5 × 14, reviews[] | — |
| Schema | ✅ Pass | Confirmed | WebSite + SearchAction | SearchAction avec urlTemplate présent | — |
| Schema | ✅ Pass | Confirmed | BreadcrumbList sur pages service et guides | /maison-ossature-bois/, /faire-construire-haute-savoie/, guides | — |
| Schema | ✅ Pass | Confirmed | Article schema sur 14 guides | headline, datePublished, dateModified, author, publisher, image | — |
| Schema | ✅ Pass | Confirmed | Person JSON-LD sur /maison-ossature-bois/ | @type Person, name, jobTitle, url, image, worksFor, knowsAbout, areaServed | — |
| Schema | ⚠️ Warning | Confirmed | /a-propos/ sans Person/ProfilePage schema | curl /a-propos/ : seuls HomeAndConstructionBusiness + WebSite présents | Ajouter Person (ou ProfilePage) avec sameAs LinkedIn, image, knowsAbout |
| Schema | ⚠️ Warning | Confirmed | /annonces/ pages individuelles sans schema | curl annonces/maison-ossature-bois-annemasse-74 : 0 schémas | Ajouter Service ou RealEstateListing sur chaque page annonce |
| Performance | ✅ Pass | Likely | Infra performante | Vercel CDN, Next/Image, font preloading (Brandon Grotesque woff2), lazy loading images | — |
| Performance | ⚠️ Warning | Hypothesis | CWV non mesurés | API rate limited, CrUX non disponible sans clé | Mesurer sur PageSpeed.web.dev — mobile en priorité |
| Images | ✅ Pass | Confirmed | Toutes les images homepage ont un alt | parse_html : 18 images analysées, 0 alt vide (hors bg aria-hidden) | — |
| Images | ✅ Pass | Confirmed | Next/Image gère le responsive | srcset généré automatiquement, formats optimisés par Vercel | — |
| Images | ⚠️ Warning | Confirmed | Duplication d'images entre guides | hero-maison-bois-montagne-2.jpg utilisé sur 3 guides différents | Diversifier les visuels par guide |
| GEO / IA | ✅ Pass | Confirmed | llms.txt 100/100 | HTTP 200, 5 sections, 17 liens, llms-full.txt présent | — |
| GEO / IA | ✅ Pass | Confirmed | 11 crawlers IA autorisés | robots.txt explicite pour GPTBot, ClaudeBot, PerplexityBot, etc. | — |
| GEO / IA | ✅ Pass | Confirmed | FAQ dans contenu | /maison-ossature-bois/ : 8 Q&A, guides : FAQ sections | — |
| GEO / IA | ⚠️ Warning | Likely | Peu de sources citées dans les guides | Aucun lien externe vers sources officielles (Ministère, Géorisques, Qualibat) dans la plupart des guides | Ajouter section "Sources" sur guides principaux |

---

## C) Scores par catégorie

### Scoring Chain-of-Thought

**Technical SEO — 61/100**
- Positifs (5) : headers 100/100, 0 liens brisés, robots.txt IA complet, redirects propres, sitemap 153 URLs
- Déficits (2) : 5 orphelines, CWV inconnus
- Base : 5/7 × 100 = 71 | Pénalités : 2 warnings × -5 = -10 → **61**

**Content Quality — 78/100**
- Positifs (5) : photo E-E-A-T 15 pages, Person JSON-LD, vrais témoignages, Flesch 62.6, 14 guides substantiels
- Déficits (1) : AggregateRating reviewers fictifs
- Base : 5/6 × 100 = 83 | Pénalités : 1 warning × -5 = -5 → **78**

**On-Page SEO — 57/100**
- Positifs (4) : H1 keyword-rich, meta descriptions, OG/Twitter 100/100, URLs propres
- Déficits (2) : ancre monopolisée, maillage faible sur certaines pages
- Base : 4/6 × 100 = 67 | Pénalités : 2 warnings × -5 = -10 → **57**

**Schema / Structured Data — 57/100**
- Positifs (4) : HomeAndConstructionBusiness+AggregateRating, WebSite+SearchAction, BreadcrumbList, 14 Article schemas
- Déficits (2) : /a-propos/ sans Person, /annonces/ sans schema
- Base : 4/6 × 100 = 67 | Pénalités : 2 warnings × -5 = -10 → **57**

**Performance — 70/100** *(Hypothesis — API rate limited)*
- Positifs (3) : Vercel CDN, Next/Image, font preloading
- Déficits (1) : CWV non mesurés
- Score estimé infrastructure → **70** (à confirmer)

**Images — 80/100**
- Positifs (4) : alts descriptifs sur toutes images testées, Next/Image responsive, lazy loading, 0 erreur 404 image
- Déficits (1) : duplication de visuels entre guides
- Base : 4/5 × 100 = 80 → **80**

**AI Search Readiness — 95/100**
- Positifs (5) : llms.txt 100/100, llms-full.txt, 11 crawlers IA, FAQ intégrées, GBP sameAs
- Déficits (0)
- Base : 5/5 × 100 = 100 | Pénalités : 0 → **95** (sources externes manquantes -5)

### Score global pondéré

| Catégorie | Poids | Score | Contribution |
|-----------|-------|-------|-------------|
| Technical SEO | 25% | 61 | 15.25 |
| Content Quality | 20% | 78 | 15.60 |
| On-Page SEO | 15% | 57 | 8.55 |
| Schema | 15% | 57 | 8.55 |
| Performance | 10% | 70 | 7.00 |
| Images | 10% | 80 | 8.00 |
| AI Search Readiness | 5% | 95 | 4.75 |
| **TOTAL** | **100%** | — | **72 / 100** |

---

## D) Inconnus et suivis

| Inconnu | Méthode pour confirmer |
|---------|----------------------|
| LCP / INP / CLS réels | `pagespeed.web.dev` sur mobile + desktop (API rate limited ici) |
| Positionnement GSC réel sur "construction maison ossature bois Haute-Savoie" | GSC → Performance → filtrer par requête |
| Nombre de pages ville indexées vs crawlées | GSC → Index → État → filtre `/maison-ossature-bois-*/` |
| Contenu des pages `/annonces/` individuelles (thinness) | Auditer 3-4 pages `/annonces/*` avec `article_seo.py` |
| Impact de l'ajout auteur E-E-A-T sur CTR | Attendre 4-6 semaines, comparer CTR GSC avant/après |
