# Plan d'action SEO — constructiondemaisons.com
**Audit #21 — 12 août 2026**

---

## P1 — Immédiat (cette semaine)

### 1. Person schema sur `/a-propos/` ⭐ Quick Win
**Impact** : E-E-A-T majeur — Google associe la page biographie à une expertise prouvée  
**Effort** : 30 min  
Ajouter dans `src/app/a-propos/page.tsx` :
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.constructiondemaisons.com/#person-mahmoud",
  "name": "Mahmoud Ben Ahmed",
  "jobTitle": "Maître d'œuvre spécialisé maison ossature bois",
  "url": "https://www.constructiondemaisons.com/a-propos/",
  "image": "https://www.constructiondemaisons.com/images/mahmoud-ben-ahmed.jpg",
  "worksFor": { "@type": "Organization", "name": "M&M CONSTRUCTION", "url": "https://www.constructiondemaisons.com/" },
  "knowsAbout": ["maison ossature bois", "maîtrise d'œuvre", "RE2020", "Genevois français", "Haute-Savoie"],
  "areaServed": { "@type": "AdministrativeArea", "name": "Haute-Savoie, Ain, Genevois français" }
}
```

### 2. Corriger AggregateRating reviewers ⭐ Quick Win
**Impact** : Cohérence entre schema et avis publics Google — crédibilité E-E-A-T  
**Effort** : 20 min  
Dans `src/app/layout.tsx` (ou homepage), remplacer les reviewers fictifs par les vrais :
- "Sébastien M." → Laurent Ramos (avril 2021)
- "Claire et Thomas R." → Francis Nossin (mai 2025)
- Conserver un 3e avis réel (ex: prochain avis reçu sur Google)

---

## P2 — Court terme (30 jours)

### 3. Maillage interne vers 5 pages orphelines
**Impact** : Crawl budget + autorité transmise aux pages faibles  
**Effort** : 1h  

Pages à désorphaniser :
- `/annonces/maison-ossature-bois-archamps-74` → lien depuis `/maison-ossature-bois-annemasse/` (zone géo proche)
- `/annonces/maison-ossature-bois-annemasse-74` → lien depuis hub `/annonces/`
- `/annonces/extension-ossature-bois-thonon-les-bains-74` → lien depuis `/extension-bois/`
- `/annonces/maison-ossature-bois-saint-julien-en-genevois-74` → lien depuis `/maison-ossature-bois-saint-julien-en-genevois/`
- `/guides/prix-construction-maison` → vérifier si redirect ou doublon de `/guides/prix-construction-maison/`

### 4. Schema Service sur pages `/annonces/` individuelles
**Impact** : Éligibilité rich results pour pages de projets  
**Effort** : 2h (composant réutilisable)  
Ajouter sur chaque page annonce :
```json
{
  "@type": "Service",
  "name": "Maison ossature bois — [Ville]",
  "provider": { "@id": "https://www.constructiondemaisons.com/#business" },
  "areaServed": { "@type": "City", "name": "[Ville]" }
}
```

### 5. Varier les ancres de CTA
**Impact** : Distribution d'autorité plus naturelle, moins de sur-optimisation  
**Effort** : 1h  
"Configurer mon projet →" apparaît 18× — alterner avec :
- "Demander une étude gratuite"
- "Lancer mon projet bois"  
- "Décrire mon projet"
- "Parler de mon terrain"

### 6. Mesurer les Core Web Vitals
**Impact** : Confirme ou invalide le score Performance (70/100 estimé)  
**Effort** : 30 min  
1. Ouvrir `https://pagespeed.web.dev/`
2. Tester `https://www.constructiondemaisons.com/` — mobile
3. Tester `https://www.constructiondemaisons.com/maison-ossature-bois/` — mobile
4. Reporter LCP, INP, CLS dans ce fichier

---

## P3 — Moyen terme (30–90 jours)

### 7. Sources externes dans les guides principaux
**Impact** : GEO / citabilité IA — les LLMs privilégient les contenus avec références  
**Effort** : 2h (3-4 guides prioritaires)  
Ajouter section "Sources" avec liens `rel="noopener"` vers :
- Ministère (RE2020 → ecologie.gouv.fr)
- Géorisques (zonage sismique)
- Qualibat (qualifications artisans)

Guides prioritaires : `/guides/re2020-maison-bois/`, `/guides/maison-ossature-bois/`, `/guides/garanties-assurance-maitre-oeuvre/`

### 8. Diversifier les visuels dans les guides
**Impact** : Unicité du contenu image, meilleure indexation Google Images  
**Effort** : 2-3h (choix + remplacement)  
`hero-maison-bois-montagne-2.jpg` utilisé sur 3 guides — assigner un visuel unique par guide.

### 9. LinkedIn Mahmoud Ben Ahmed (off-site)
**Impact** : sameAs dans Person schema — signal E-E-A-T fort  
**Effort** : 1h  
Créer profil LinkedIn avec URL `constructiondemaisons.com`, puis ajouter dans Person schema :
```json
"sameAs": ["https://www.linkedin.com/in/mahmoud-ben-ahmed-[id]"]
```

### 10. Atteindre 20+ avis Google
**Impact** : AggregateRating plus crédible, meilleur CTR local  
**Effort** : Continu  
Partager `https://g.page/r/Cdn_3K5QUh7wEBM/review` après chaque livraison de chantier.  
Objectif : 20+ avis avant fin 2026 (actuellement 14).

---

## Récapitulatif priorisé

| # | Action | Impact | Effort | Priorité |
|---|--------|--------|--------|----------|
| 1 | Person schema /a-propos/ | ⭐⭐⭐ | 30 min | P1 |
| 2 | AggregateRating vrais noms | ⭐⭐⭐ | 20 min | P1 |
| 3 | Désorphaniser 5 pages | ⭐⭐ | 1h | P2 |
| 4 | Schema /annonces/ | ⭐⭐ | 2h | P2 |
| 5 | Varier ancres CTA | ⭐ | 1h | P2 |
| 6 | Mesurer CWV | ⭐⭐ | 30 min | P2 |
| 7 | Sources dans guides | ⭐⭐ | 2h | P3 |
| 8 | Diversifier visuels guides | ⭐ | 3h | P3 |
| 9 | LinkedIn + sameAs | ⭐⭐ | 1h | P3 |
| 10 | 20+ avis Google | ⭐⭐⭐ | Continu | P3 |
