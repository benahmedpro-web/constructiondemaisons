# InvestSection Specification

## Overview
- **Target file:** `src/components/InvestSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section>
  <h3>Maisons Pierre, c'est aussi...</h3>
  <p>la possibilité d'investir dans le locatif...</p>
  
  <!-- 2 large blocks side by side -->
  <div class="row bottom-blocks">
    <div class="col-md-6 block"> <!-- Wagram Résidences -->
      <img />
      <div>
        <span>les résidences wagram</span>
        <h4>Des programmes immobiliers</h4>
        <p>...</p>
        <a>Nos programmes Wagram</a>
      </div>
    </div>
    <div class="col-md-6 block"> <!-- Gamme Patrimoine -->
      <img />
      <div>
        <span>Les maisons patrimoine</span>
        <h4>Des maisons pour investir</h4>
        <p>...</p>
        <a>Notre gamme Patrimoine</a>
      </div>
    </div>
  </div>
  
  <!-- 3 smaller top blocks (Why invest) -->
  <div class="row top-blocks">
    <div class="col-md-4 top-block">...</div>
    <div class="col-md-4 top-block">...</div>
    <div class="col-md-4 top-block">...</div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #dfe3e4
- padding: 60px 20px

### H3
- font-size: 35px
- font-weight: 700
- color: #000000
- text-align: center

### Bottom blocks row
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 24px
- margin-bottom: 40px

### Block card
- background-color: #ffffff
- display: flex
- gap: 20px
- padding: 24px
- align-items: flex-start

### Block image
- width: 200px
- height: 150px
- object-fit: cover
- flex-shrink: 0

### Block category label
- font-size: 13px
- text-transform: uppercase
- color: #5f7475
- letter-spacing: 1px

### Block h4
- font-size: 22px
- font-weight: 700
- color: #000000
- margin: 8px 0

### Block paragraph
- font-size: 15px
- color: #5f7475
- line-height: 1.6

### Block CTA link
- color: #e02623
- font-weight: 700
- text-decoration: underline
- font-size: 15px

### Top blocks (Why invest)
- display: grid
- grid-template-columns: 1fr 1fr 1fr
- gap: 20px

### Top block
- background-color: #ffffff
- padding: 24px
- display: flex
- gap: 16px
- align-items: flex-start

### Why block icon
- width: 50px
- height: 50px
- object-fit: contain
- flex-shrink: 0

### Why block title
- font-size: 18px
- font-weight: 700
- color: #000000

### Why block text
- font-size: 15px
- color: #5f7475
- line-height: 1.6

## Assets
- Wagram image: /images/Sans-titre-2.jpg (or Sans-titre-2-1.jpg)
- Patrimoine image: /images/Visuel-e1614714709396.jpg (or left-image-e1614714656684.png)

## Text Content (verbatim)
H3: "Maisons Pierre, c'est aussi..."
Intro: "la possibilité d'investir dans le locatif grâce à notre gamme Patrimoine dédiée, mais aussi devenir propriétaire d'une maison neuve avec jardin clé en main, grâce à Wagram Résidences."

Block 1:
- Category: "les résidences wagram"
- Title: "Des programmes immobiliers"
- Body: "Vous pouvez faire le choix d'un investissement simple et sécurisé dans lequel tout est compris : une maison neuve prête à vivre."
- CTA: "Nos programmes Wagram"

Block 2:
- Category: "Les maisons patrimoine"
- Title: "Des maisons pour investir"
- Body: "Découvrez notre gamme Patrimoine qui bénéficie de distributions intelligentes et de performances énergétiques excellentes !"
- CTA: "Notre gamme Patrimoine"

H3 Why: "Pourquoi investir dans le neuf ?"
Intro Why: "Confier son projet de construction à Maisons Pierre, c'est avoir la garantie d'acquérir une maison de qualité, construite avec des matériaux très performants. Mais c'est aussi bénéficier d'un SAV pendant 10 ans, d'une aide au financement (Prêt à Taux Zéro par exemple) etc."

Why 1: icon: picto-placement.png, title: "Un placement sûr", body: "Chaque mois, la valeur de votre patrimoine augmente et vous maitrisez votre investissement pour l'avenir de votre famille. En cas de revente, vous réaliserez une plus-value."
Why 2: icon: picto-avantages.png, title: "Des avantages financiers", body: "En faisant construire votre maison neuve, vous devenez maître de vos consommations d'énergie. Mais aussi, vous bénéficierez d'aides de l'Etat."
Why 3: icon: picto-innovation.png, title: "La qualité et l'innovation", body: "Nos maisons à énergie positive sont équipées de matériaux très performants en matière d'économie d'énergie, majoritairement produits en France."

## Responsive Behavior
- **Desktop:** 2-col bottom blocks, 3-col top blocks
- **Mobile:** all stacked single column
- **Breakpoint:** 768px
