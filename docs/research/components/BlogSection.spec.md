# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Interaction model:** static

## DOM Structure
```
<section class="conseils_wrapper">
  <div class="conseils_block">
    <h2 class="conseils_title">Conseils d'experts</h2>
    <div class="conseils_content_blocks">
      <!-- Left: Featured long article -->
      <div class="conseils_main_block">
        <div class="conseils_image"> <img /></div>
        <h3>Comment réussir le plan de votre future maison ?</h3>
        <p>...</p>
      </div>
      <!-- Right: list of posts -->
      <div class="conseils_list_block">
        <div class="conseils_list_left_wrapper">
          <div class="post-card">...</div>
          <div class="post-card">...</div>
          ...
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

### Section title
- font-size: 35px
- font-weight: 700
- color: #000000
- text-align: center
- margin-bottom: 40px

### Content grid
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 40px
- max-width: 1200px
- margin: 0 auto

### Main featured article image
- width: 100%
- aspect-ratio: 16/9
- object-fit: cover
- margin-bottom: 16px

### Featured article title
- font-size: 22px
- font-weight: 700
- color: #000000
- margin-bottom: 12px

### Featured article excerpt
- font-size: 15px
- color: #5f7475
- line-height: 1.7

### Post card (right column list)
- display: flex
- gap: 16px
- padding: 16px 0
- border-bottom: 1px solid #cfd5d6

### Post card image
- width: 100px
- height: 75px
- object-fit: cover
- flex-shrink: 0

### Post card title
- font-size: 15px
- font-weight: 700
- color: #000000
- line-height: 1.4

## Assets
- Main image: /images/Fotolia_58453596_XL-scaled.jpg
- Post images: /images/SATURNIA-4.112-Web.jpg-300x212.jpg, /images/maisons_pierre_Cadence_4_132_gi_nord_noir_detail4-300x273.jpg, etc.

## Text Content (verbatim)
Section title: "Conseils d'experts"

Featured title: "Comment réussir le plan de votre future maison ?"
Featured excerpt: "Vous aimeriez vous lancer dans un projet immobilier afin de construire votre maison ? Peut-être désirez-vous concevoir vous-même les plans de votre futur lieu de vie ?..."

Blog posts (sidebar):
1. "Garanties et assurances : les indispensables lors de la construction d'une maison"
2. "Prix d'une maison neuve : nos informations pour tout savoir"
3. "Maison contemporaine ou maison traditionnelle : les principales différences"
4. "Qu'est-ce qu'un constructeur de maison individuelle ?"
5. "Achat maison neuve : tout ce que vous devez savoir"
6. "Maison connectée : tout ce que vous devez savoir"
7. "Permis de construire : tout ce que vous devez savoir"
8. "Comment bien définir un terrain constructible ?"
9. "Acheter dans le neuf : le guide pour bien investir"
10. "Qu'est-ce qu'une maison écologique ?"

## Responsive Behavior
- **Desktop:** 2 columns
- **Mobile:** stacked, featured first then list
- **Breakpoint:** 768px
