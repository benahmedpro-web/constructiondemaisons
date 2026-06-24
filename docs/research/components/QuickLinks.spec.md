# QuickLinks Specification

## Overview
- **Target file:** `src/components/QuickLinks.tsx`
- **Interaction model:** static links

## DOM Structure
```
<div class="quick-links-container"> (3-column grid)
  <a class="quick-link-card">
    <img icon />
    <div>
      <span class="title">Maisons</span>
      <span class="subtitle">Modèles <span class="arrow">›</span></span>
    </div>
  </a>
  <!-- x3 -->
</div>
```

## Computed Styles

### Container
- display: flex (3 equal columns)
- background-color: #ffffff
- border-top: none (sits below slider)
- max-width: 100%
- padding: 0

### Each card
- flex: 1
- display: flex
- align-items: center
- gap: 16px
- padding: 20px 24px
- border-right: 1px solid #cfd5d6 (between cards)
- background-color: #ffffff
- cursor: pointer
- text-decoration: none

### Card icon
- width: 50px
- height: 50px
- object-fit: contain
- The icons use red/teal house illustrations

### Card title
- font-size: 20px
- font-weight: 700
- color: #000000
- display: block

### Card subtitle
- font-size: 17px
- color: #5f7475
- display: flex
- align-items: center
- gap: 4px

### Arrow (›)
- color: #e02623
- font-size: 18px

## Cards Data
1. icon: house.png, title: "Maisons", subtitle: "Modèles", href: /results-maisons/
2. icon: house2.png, title: "Annonces", subtitle: "Maison neuve + Terrain", href: /annonces/
3. icon: (building icon), title: "Résidences", subtitle: "Programmes immobiliers", href: /residences/

## Text Content
- "Maisons" / "Modèles ›"
- "Annonces" / "Maison neuve + Terrain ›"
- "Résidences" / "Programmes immobiliers ›"

## Responsive Behavior
- **Desktop:** 3 columns side by side
- **Mobile:** stack vertically
- **Breakpoint:** 768px
