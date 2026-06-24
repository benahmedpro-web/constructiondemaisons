# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
```
<footer>
  <div class="footer-top"> (4 columns)
    <div class="first-column footer-column">
      <div class="footer-logo"><img /></div>
      <!-- Immodvisor widget placeholder -->
    </div>
    <div class="second-column footer-column">
      <h5>Navigation</h5>
      <ul>links</ul>
    </div>
    <div class="third-column footer-column">
      <h5>Navigation</h5>
      <ul>links</ul>
    </div>
    <div class="forth-column footer-column">
      <div class="footer-socials">
        <!-- Social icons -->
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>Autre site : ...</span>
    <span>© 2026 Maisons Pierre | Mentions légales | Respect de la vie privée</span>
  </div>
</footer>
```

## Computed Styles

### Footer
- background-color: #5f7576
- color: #ffffff

### Footer top
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 32px
- padding: 48px 20px
- max-width: 1200px
- margin: 0 auto

### Footer logo
- filter: brightness(0) invert(1) (white version)
- width: 160px

### Footer column title
- font-size: 15px
- font-weight: 700
- color: #ffffff
- text-transform: uppercase
- margin-bottom: 16px
- letter-spacing: 0.5px

### Footer links
- font-size: 14px
- color: rgba(255,255,255,0.8)
- text-decoration: none
- line-height: 2
- display: block
- hover: color: #ffffff

### Footer bottom
- background-color: #4a5f60 (slightly darker teal)
- padding: 16px 20px
- text-align: center
- font-size: 13px
- color: rgba(255,255,255,0.7)
- display: flex
- justify-content: center
- gap: 8px

## Text Content (verbatim)
Column 1: Logo + Immodvisor reviews widget

Column 2 links: "Nos modèles", "Votre projet", "Gamme Patrimoine pour investir", "Nos annonces", "Nos valeurs et engagements"

Column 3 links: "Nos programmes immobiliers", "Télécharger notre brochure", "Franchise", "Recrutement", "Parrainage", "Conseils d'experts", "FAQ"

Column 4: "Espace client", "Trouver une agence", "Contact"
+ Social media icons (Facebook, Instagram, YouTube, LinkedIn, etc.)

Footer bottom: "Autre site :" | "© 2026 Maisons Pierre" | "Mentions légales" | "Respect de la vie privée"

## Responsive Behavior
- **Desktop:** 4 columns
- **Mobile:** stacked single column
- **Breakpoint:** 768px
