# StatsBar Specification

## Overview
- **Target file:** `src/components/StatsBar.tsx`
- **Interaction model:** static

## Computed Styles

### Container
- background-color: #5f7576 (teal/dark)
- color: #ffffff
- padding: 24px 20px
- display: flex
- justify-content: center
- align-items: center
- gap: 48px
- flex-wrap: wrap

### Stat item
- display: flex
- align-items: center
- gap: 12px
- text-align: center

### Stat icon
- width: 40px
- height: 40px
- filter: brightness(0) invert(1) (white icons)

### Stat value
- font-size: 25px
- font-weight: 700
- color: #ffffff
- display: block

### Stat label
- font-size: 15px
- color: #ffffff
- opacity: 0.9

## Stats Data (4 items)
1. icon: picto-5-maisons.png, value: "5 maisons", label: "livrées par jour"
2. icon: picto-1984.png, value: "+ de 40 ans", label: "à vos côtés"
3. icon: picto-familles.png, value: "+ de 60 000", label: "clients nous font confiance"
4. icon: picto-garanties.png, value: "10 ans", label: "de Garanties et de Services"

## Text Content (verbatim)
"5 maisons livrées par jour"
"+ de 40 ans à vos côtés"
"+ de 60 000 clients nous font confiance"
"10 ans de Garanties et de Services"

## Responsive Behavior
- **Desktop:** single row of 4
- **Mobile:** 2x2 grid
- **Breakpoint:** 768px
