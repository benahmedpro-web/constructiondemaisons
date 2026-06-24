# FeaturesGrid Specification

## Overview
- **Target file:** `src/components/FeaturesGrid.tsx`
- **Interaction model:** static

## DOM Structure
```
<section>
  <h2>Une maison qui vous ressemble</h2>
  <p>Choisissez votre future maison neuve à partir de nos 4 gammes de modèles de maisons. Maisons Pierre vous propose plus de 190 références toutes conformes à la RE2020.</p>
  <div class="features-grid"> (4 icons in a row)
    <div class="feature-item">
      <img icon />
      <span>Qualité de construction</span>
    </div>
    <!-- x4 -->
  </div>
  <a href="/results-maisons/" class="btn-red">Découvrir nos modèles</a>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff
- padding: 60px 20px
- text-align: center

### H2
- font-size: 35px
- font-weight: 700
- color: #000000
- margin-bottom: 16px

### Description paragraph
- font-size: 18px
- color: #5f7475
- max-width: 700px
- margin: 0 auto 40px
- line-height: 1.6

### Features grid
- display: flex
- justify-content: center
- gap: 32px
- flex-wrap: wrap
- margin-bottom: 40px

### Feature item
- display: flex
- flex-direction: column
- align-items: center
- gap: 12px
- min-width: 120px

### Feature icon
- width: 60px
- height: 60px
- object-fit: contain

### Feature label
- font-size: 15px
- color: #5f7475
- font-weight: 500
- text-align: center

### CTA button
- background-color: #e02623
- color: #ffffff
- padding: 14px 32px
- font-size: 17px
- font-weight: 700
- text-decoration: none
- display: inline-block

## Feature Items (4 items)
1. icon: picto-qualite.png, label: "Qualité de construction"
2. icon: picto-1984.png (or similar), label: "Accompagnement de A à Z"
3. icon: picto-equipements.png, label: "Equipements connectés"
4. icon: picto-garanties.png, label: "Garanties et transparence"

## Text Content (verbatim)
H2: "Une maison qui vous ressemble"
P: "Choisissez votre future maison neuve à partir de nos 4 gammes de modèles de maisons. Maisons Pierre vous propose plus de 190 références toutes conformes à la RE2020."
CTA: "Découvrir nos modèles"

## Responsive Behavior
- **Desktop:** 4 icons in a row
- **Mobile:** 2x2 grid
- **Breakpoint:** 768px
