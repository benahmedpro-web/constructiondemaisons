# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/desktop-above-fold.png`
- **Interaction model:** static (no scroll-triggered change)

## DOM Structure
```
<header>
  ├── Utility bar (top row)
  │   ├── Icon link: Prendre rendez-vous
  │   ├── Icon link: Trouver une agence
  │   ├── Icon link: Espace client
  │   ├── Icon link: Parrainage
  │   └── Phone button: "0 800 647 647" (green bg)
  └── Main nav row
      ├── Logo: MAISONS PIERRE (left)
      ├── Nav links: Nos maisons | Votre projet | Nos annonces | Nos valeurs et engagements
      └── Search icon (right)
```

## Computed Styles

### Header container
- background-color: #ffffff
- border-bottom: 1px solid #cfd5d6
- position: relative (no sticky in CSS — overlays hero)
- z-index: 100
- width: 100%

### Utility bar
- display: flex
- justify-content: flex-end
- align-items: center
- padding: 8px 20px
- gap: 24px
- font-size: 13px
- color: #5f7475
- border-bottom: 1px solid #cfd5d6

### Utility bar icon links
- display: flex
- align-items: center
- gap: 6px
- color: #5f7475
- text-decoration: none
- font-size: 13px
- font-weight: 400

### Phone button "0 800 647 647"
- background-color: #4caf50 (green)
- color: #ffffff
- padding: 4px 12px
- font-size: 13px
- font-weight: 700
- border-radius: 4px
- Sub-label: "Service & appel gratuits" smaller green text

### Main nav container
- display: flex
- align-items: center
- padding: 12px 20px
- max-width: 1200px
- margin: 0 auto
- width: 100%

### Logo
- img src: /images/logo-mp.png
- height: ~50px
- margin-right: auto

### Nav links
- font-size: 17px
- font-weight: 500
- color: #000000
- text-transform: uppercase
- letter-spacing: 0.5px
- padding: 8px 16px
- text-decoration: none
- hover color: #e02623

### Search icon
- color: #5f7475
- font-size: 20px
- cursor: pointer

## "Nos maisons" Dropdown (submenu)
Nav item "Nos maisons" has a mega-dropdown with:
- "Modèles de maison" — "Trouver le modèle de maison qui vous convient parmi nos 190 modèles."
- "Programmes immobiliers" — "Un investissement simple et sécurisé dans lequel tout est compris."
- "Gamme Patrimoine" — "Un ensemble immobilier pour investir durablement"
- Image: /images/patrimoine-menu-nav.jpg

## Assets
- Logo: `public/images/logo-mp.png`
- Icons: SVG inline (calendar, location pin, person, heart icons from original)

## Text Content
- Utility: "Prendre rendez-vous", "Trouver une agence", "Espace client", "Parrainage"
- Phone: "0 800 647 647" / "Service & appel gratuits"
- Nav: "Nos maisons", "Votre projet", "Nos annonces", "Nos valeurs et engagements"

## Responsive Behavior
- **Desktop (1440px):** Full horizontal layout as described
- **Mobile (390px):** Hamburger menu, utility bar hidden or collapsed, phone shown prominently
- **Breakpoint:** ~992px (lg)
