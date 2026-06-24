# StepsSection Specification

## Overview
- **Target file:** `src/components/StepsSection.tsx`
- **Interaction model:** click-driven tabs (4 steps, clicking a step tab shows its content)

## DOM Structure
```
<section>
  <h3>Faire construire une maison avec Maisons Pierre, c'est...</h3>
  <p>…se lancer dans un projet de construction en toute sérénité. Nous plaçons l'accompagnement de nos clients au cœur de nos priorités.</p>
  
  <!-- Tab buttons (desktop: horizontal row, mobile: vertical) -->
  <div class="step-tabs">
    <button class="active">1 Me préparer</button>
    <button>2 Mon financement</button>
    <button>3 Choisir ma maison</button>
    <button>4 Suivre mon projet</button>
  </div>
  
  <!-- Step content panels -->
  <div class="step-content active"> (only active one visible)
    <img src="/images/step-1.jpeg" />
    <p>Description text...</p>
    <a href="...">CTA</a>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff
- padding: 60px 20px

### H3
- font-size: 35px
- font-weight: 700
- color: #000000
- text-align: center
- margin-bottom: 16px

### Intro paragraph
- font-size: 18px
- color: #5f7475
- text-align: center
- max-width: 800px
- margin: 0 auto 40px
- line-height: 1.6

### Tab buttons container (desktop)
- display: flex
- justify-content: center
- gap: 0
- border-bottom: 1px solid #cfd5d6

### Tab button
- padding: 12px 24px
- font-size: 17px
- font-weight: 500
- color: #5f7475
- background: none
- border: none
- cursor: pointer
- border-bottom: 3px solid transparent

### Tab button.active
- color: #e02623
- border-bottom: 3px solid #e02623
- font-weight: 700

### Step content area
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 40px
- padding: 40px 0
- align-items: center
- max-width: 1100px
- margin: 0 auto

### Step image
- width: 100%
- border-radius: 4px
- object-fit: cover

### Step description
- font-size: 17px
- color: #5f7475
- line-height: 1.7

### Step CTA
- color: #e02623
- font-weight: 700
- text-decoration: underline

## Steps Data
1. Step "1 Me préparer"
   - image: /images/step-1.jpeg
   - description: (from page: service description about terrain search, financement, démarches admin)
   
2. Step "2 Mon financement"
   - image: /images/step-2.jpeg

3. Step "3 Choisir ma maison"
   - image: /images/step-3.jpeg

4. Step "4 Suivre mon projet"
   - image: /images/step-4.jpeg

## Text Content (verbatim)
H3: "Faire construire une maison avec Maisons Pierre, c'est..."
Intro: "…se lancer dans un projet de construction en toute sérénité. Nous plaçons l'accompagnement de nos clients au cœur de nos priorités."

Long description: "C'est pourquoi nous vous proposons une offre de services gratuits : la recherche d'un terrain (en collaboration avec nos partenaires fonciers), du meilleur financement possible, le conseil sur le choix des plans de maisons, la gestion des démarches administratives et de l'obtention du permis de construire. Et enfin, nous coordonnons tous les travaux avec nos artisans et partenaires locaux. Nos maisons disposent d'équipements hauts de gamme, notamment des panneaux photovoltaïques et d'une batterie de stockage de l'énergie permettant de réaliser jusqu'à 60% d'économies d'énergie.* *Par rapport à une maison de la marque Maisons Pierre non équipée de panneaux photovoltaïques et de batterie de stockage de l'énergie. Résultat obtenu dans le cas d'une utilisation optimale du dispositif."

## Responsive Behavior
- **Desktop (>=992px):** horizontal tabs, 2-column content layout
- **Mobile (<992px):** vertical step list (accordion style), single column content
- **Breakpoint:** 992px (lg)
