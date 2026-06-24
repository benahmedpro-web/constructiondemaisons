# Behaviors — maisons-pierre.com

## Global
- Font: Brandon Grotesque (self-hosted woff2) — Regular, Medium, Bold, Black
- No smooth scroll library
- overflow-x: hidden on body

## Header
- STATIC — no scroll-triggered change detected in HTML/CSS (no scroll listener class)
- Logo: `logo-mp.png` left aligned
- Utility bar top: icons + labels for RDV, Agence, Espace client, Parrainage, Phone
- Main nav: horizontal links with dropdown for "Nos maisons" (sub-items visible in HTML)
- Search icon right side

## Hero Slider (neutral-slides)
- INTERACTION MODEL: time-driven auto-cycling slider (Slick or custom JS)
- Multiple slide divs with `background-image` CSS property
- `data-link` attribute on each slide for click navigation
- Left/right arrow buttons (`neutral-slides-left`, `neutral-slides-right`)
- Each slide has desktop bg-image and `--bg-mobile-img` CSS var for mobile

## Steps Section
- INTERACTION MODEL: click-driven tabs
- 4 tabs: "1 Me préparer", "2 Mon financement", "3 Choisir ma maison", "4 Suivre mon projet"
- Mobile: vertical list (`bottom-steps d-flex d-lg-none`)
- Desktop: horizontal 4-column (`row bottom-steps d-none d-lg-flex`)
- Each step has image + text + button

## Why Invest / Top Blocks
- INTERACTION MODEL: click-driven expand/collapse (Bootstrap collapse or custom)
- 3 cards that expand to show more text
- Class `collapsing-wrapper d-md-none d-block` suggests mobile collapse

## Blog/Conseils Section
- List of blog post cards with image, title, excerpt
- Left column: featured long article
- Right column: grid of smaller posts

## Hover States (observed from CSS)
- Nav links: color change to #e02623
- Cards: likely subtle shadow or background change (standard)
- CTA buttons: background darkens

## Responsive
- Mobile breakpoint: 768px (md)
- Desktop breakpoint: 992px (lg)
- Hero slider has different mobile images via `--bg-mobile-img` CSS variable
- Steps switch from horizontal (desktop) to vertical list (mobile)
