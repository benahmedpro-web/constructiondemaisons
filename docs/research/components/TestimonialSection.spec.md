# TestimonialSection Specification

## Overview
- **Target file:** `src/components/TestimonialSection.tsx`
- **Interaction model:** static + video embed

## DOM Structure
```
<section>
  <div class="row">
    <!-- Left: video/testimonial -->
    <div class="col-md-4">
      <div class="video-wrapper"> (YouTube embed placeholder)
        <p>Je ne pensais pas pouvoir faire construire ma maison</p>
        <p>Découvrez le témoignage de Nadine...</p>
      </div>
    </div>
    <!-- Right: satisfaction + guarantees -->
    <div class="col-md-8 bottom-testimonial-block">
      <h4>La satisfaction client est notre priorité</h4>
      <p>...</p>
      <div class="garantie-wrapper"> (3 guarantee cards)
        <div class="garantie-card">
          <img icon />
          <h5>Délais</h5>
          <p>...</p>
        </div>
        <div class="garantie-card">
          <img icon />
          <h5>Prix</h5>
          <p>...</p>
        </div>
        <div class="garantie-card">
          <img icon />
          <h5>Qualité</h5>
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff
- padding: 60px 20px

### Video wrapper
- background-color: #000 (video placeholder)
- aspect-ratio: 16/9
- position: relative
- cursor: pointer

### Video title overlay
- font-size: 18px
- font-weight: 700
- color: #ffffff
- text-align: center

### H4 (right side)
- font-size: 22px
- font-weight: 700
- color: #000000
- margin-bottom: 16px

### Satisfaction text
- font-size: 15px
- color: #5f7475
- line-height: 1.7

### Garantie wrapper
- display: flex
- gap: 20px
- margin-top: 32px

### Garantie card
- flex: 1
- display: flex
- flex-direction: column
- align-items: center
- text-align: center
- padding: 20px
- background: #dfe3e4

### Garantie icon
- width: 48px
- height: 48px
- margin-bottom: 12px

### Garantie h5
- font-size: 18px
- font-weight: 700
- color: #000000
- margin-bottom: 8px

### Garantie text
- font-size: 14px
- color: #5f7475
- line-height: 1.5

## Assets
- Icons: picto-delais.png, picto-prix.png, picto-qualite-1.png

## Text Content (verbatim)
Video title: "Je ne pensais pas pouvoir faire construire ma maison"
Video subtitle: "Découvrez le témoignage de Nadine qui n'imaginait pas avoir la possibilité de faire construire sa propre maison. Un rêve inaccessible ? Pas tant que ça..."

H4: "La satisfaction client est notre priorité"
Body: "Parce que chaque famille est unique, nous vous accompagnons tout au long de votre projet de construction de maison et s'engageons sur la qualité et la date de livraison de votre logement. Chaque détail est pensé pour vous rendre la vie plus agréable."

Délais: "En réalisant votre projet avec Maisons Pierre, vous disposez d'une garantie de livraison à prix et délais convenus. Le Contrat de Construction de Maison Individuelle (CCMI) vous assure le respect de toutes les garanties légales."

Prix: "L'accessibilité de nos maisons est à la base de notre raison d'être : permettre au plus grand nombre d'accéder à une meilleure qualité de vie. Elle repose sur des partenariats de longue date et un savoir-faire établi qui nous permettent de maîtriser au mieux nos prix."

Qualité: "Nous confier votre projet de construction, c'est avoir la garantie d'une maison neuve bâtie selon des règles de constructions strictes avec des matériaux innovants. C'est aussi profiter d'équipements connectés et très performants en matière d'économies d'énergie pour une maison bioclimatique."

## Responsive Behavior
- **Desktop:** 2 columns (4/8 split)
- **Mobile:** stacked, video first
- **Breakpoint:** 768px
