# HeroSlider Specification

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Interaction model:** time-driven auto-cycling slider with left/right arrows

## DOM Structure
```
<div class="neutral-slides-wrapper">
  <div class="neutral-slides">
    <div class="neutral-slide" style="background-image: url(...)" data-link="..."></div>
    ... (7 slides total)
  </div>
  <button class="neutral-slides-left">←</button>
  <button class="neutral-slides-right">→</button>
  <div class="hero-text-overlay">
    <h1>Je choisis, puis je personnalise<br/>Ma Maison "A la Carte"</h1>
    <a href="?">?</a>
  </div>
  <!-- RE2020 badge bottom left -->
  <div class="re2020-badge">
    <img src="/images/RE2020-2.png" />
  </div>
</div>
```

## Computed Styles

### Slides wrapper
- position: relative
- width: 100%
- height: 750px (desktop)
- height: 400px (mobile)
- overflow: hidden

### Each slide (.neutral-slide)
- position: absolute (or transition-based)
- width: 100%
- height: 100%
- background-size: cover
- background-position: center
- cursor: pointer (has data-link)

### Hero text overlay
- position: absolute
- top: 50%
- left: 5%
- transform: translateY(-50%)
- z-index: 10

### H1 text
- font-size: 40px
- font-weight: 700 (bold)
- color: #ffffff
- background-color: #e02623
- padding: 8px 16px
- display: inline
- line-height: 1.4
- Two lines, each on its own div with red bg

### Arrow buttons
- position: absolute
- top: 50%
- transform: translateY(-50%)
- background: rgba(255,255,255,0.3)
- border: none
- width: 40px
- height: 40px
- cursor: pointer
- Left: left: 20px
- Right: right: 20px

### RE2020 badge
- position: absolute
- bottom: 80px
- left: 20px
- width: ~80px
- z-index: 10

## Slide Data (7 slides)
1. bg: `/images/4P__0012_CORAIL_6192_4Pans_FAV.jpg`, link: "link" (no-op)
2. bg: `/images/1920x750_Maisons_Pierre_NORD_SPITI_4.112_FAR-1.jpg`, bgMobile: `/images/0001_MOB_SPITI_4.112_FAR.jpg`, link: results-maisons/?gamme=1300881
3. bg: `/images/4P__0001_QUARTZ_3169-GI_4Pans_FAR.jpg`, link: "link" (no-op)
4. bg: `/images/4P__0003_QUARTZ_3148_GI_4Pans_FAR.jpg`, bgMobile: `/images/MAB4451.jpg`, link: results-maisons/?gamme=4544
5. bg: `/images/1920x750_Maisons_Pierre_NORD_CONDENSIA_4.090_GI_FAV-1.jpg`, bgMobile: `/images/0003_MOB_CONDENSIA_4.090_GI_FAV.jpg`, link: results-maisons/?gamme=1300881
6. bg: `/images/1920x750_Maisons_Pierre_SUD_XANEO_4.132_FAV-1.jpg`, bgMobile: `/images/0000__XANEO_4.132_FAV.jpg`, link: results-maisons/?gamme=1300881
7. bg: `/images/1920x750_Maisons_Pierre_SUD_OTTHONA_4.129_GI_FAV-1.jpg`, bgMobile: `/images/0002_MOB_OTTHONA_4.129_GI_FAV.jpg`, link: results-maisons/?gamme=1300881

## Text Content (verbatim)
H1 line 1: "Je choisis, puis je personnalise"
H1 line 2: `Ma Maison "A la Carte"`

## Responsive Behavior
- **Desktop:** height 750px, desktop bg images
- **Mobile:** height 400px, mobile bg images via `--bg-mobile-img` CSS variable (use `@media` to switch)
- **Breakpoint:** 768px
