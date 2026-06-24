# Page Topology — maisons-pierre.com

## URL: https://www.maisons-pierre.com
## CMS: WordPress 6.8.5, Custom Theme "mp"

## Layout
- Scroll container: body (overflow-x: hidden)
- Max-width content area: 1200px centered
- No smooth scroll library detected (standard browser scroll)
- Background: white

## Sections (top to bottom)

| # | Name | Class | Type | Notes |
|---|------|-------|------|-------|
| 1 | Header | `homepage-header` | Sticky overlay | Logo left, utility bar top, main nav bottom |
| 2 | Hero Slider | `neutral-slides-wrapper` | Time-driven slider | Full-width bg images, auto-cycling, red H1 overlay |
| 3 | Quick Links | `container template-homepage` | Static | 3 card links: Maisons, Annonces, Résidences |
| 4 | Intro Text | `container header-description-container` | Static | "Depuis 40 ans..." paragraph + CTA |
| 5 | Features Grid | (inline) | Static | H2 "Une maison qui vous ressemble" + 4 icons + button |
| 6 | Stats Bar | (inline) | Static | 4 stats: 5 maisons/jour, 40 ans, 60k clients, 10 ans |
| 7 | Steps | `bottom-steps` | Click-driven tabs | 4 steps (Me préparer → Suivre mon projet) |
| 8 | Also Section | `row bottom-blocks` | Static | 2 blocks: Wagram Résidences + Gamme Patrimoine |
| 9 | Why New | `row top-blocks` | Click-driven accordion | 3 cards: Placement sûr, Avantages financiers, Qualité |
| 10 | Testimonial | `col-md-8 bottom-testimonial-block` | Static + Video | Quote + satisfaction + 3 guarantee cards |
| 11 | Blog/Conseils | `conseils_wrapper` | Static | "Conseils d'experts" + article cards grid |
| 12 | Footer | `footer-top / footer-bottom` | Static | 4 columns + socials + copyright |

## Z-Index Layers
- Header: sticky, z-index > content
- Cookie banner: overlay (z-index highest)
- Hero text: absolute positioned over background

## Responsive Breakpoints
- Mobile: < 768px (Bootstrap md)
- Desktop: >= 992px (Bootstrap lg)
- Uses Bootstrap grid (col-md-*, col-lg-*, d-md-*, d-lg-*)
