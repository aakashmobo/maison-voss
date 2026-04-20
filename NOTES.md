# Project Notes

## What Was Built
- MAISON VOSS luxury fashion house — full single-page editorial site
- Aesthetic: editorial-serif — Playfair Display 900 italic at clamp(96px, 16vw, 200px), raw black ground, single lime accent #aaff4d
- Fonts: Playfair Display (display/headings) + DM Sans (UI/body), loaded via Google Fonts in index.html

## Architecture Decisions
- Single page app: src/pages/Home.tsx + src/App.tsx as BrowserRouter shell
- All styling via inline styles (precise editorial values)
- Hero: full two-column layout — left text column (55%) with border-right, right portrait column (45%) full-bleed flush
- Horizontal rule cutting through "SILENCE" extends right: -60vw to slice across both columns
- Ticker: CSS keyframes animation, 50s linear infinite, duplicate spans for seamless loop
- Portrait: full-bleed to edges of right column, film grain SVG overlay, left edge fade blending into left column
- "NOW ARRIVING" lime pill badge absolute top-right of portrait

## Palette
- Black: #000000 (background)
- Off-white: #f5f0eb (primary text)
- Taupe: #9a9080 (muted/secondary)
- Dark muted: #4a4540 (nav links, meta)
- Lime: #aaff4d (sole accent — pill badge, CTA hover)
- Rule: #141414 / #2a2a2a / #2e2e2e (structural lines)

## Current State
- Dev server: running
- Last verified: tsc clean
- Collection: AW 2025 — THE VOID COLLECTION

## Product Cards (Section 2)
- Look 01: Deconstructed Cocoon Coat · Bonded Wool Felt, Ash Grey — Antwerp · €4,800 — photo-1539109136881
- Look 02: Asymmetric Draped Tunic · Recycled Parachute Nylon, Obsidian — Tokyo · €1,640 — photo-1554412933-514a83d2f3c8
- Look 03: Pleated Spiral Trousers · Pressed Paper Fabric, Raw White — Antwerp · €2,100 — photo-1506629082955
- Look 04: Inverted Seam Blazer · Double-Face Wool, Charcoal — Paris · €3,200 — photo-1507679799987
- Look 05: Sculptural Wrap Dress · Heat-Moulded Organza, Bone — Tokyo · €2,750 — photo-1469334031218

## Sections Built
1. Hero — redesigned: full-bleed portrait right col, massive SILENCE typography, architectural rule, film grain, refined nav, slow ticker
2. Collection Grid — asymmetric CSS grid (1.4fr 1fr 1fr), 2px gap, Unsplash product photos, hover states, lime NEW badge
3. Pull Quote — centered editorial quote, lime accent on "presence"
4. Brand Story — two-col, atelier photo, stats (12/47/16)
5. Lookbook Strip — 6 scrollable portrait plates
6. Newsletter — two-col, italic serif heading, lime JOIN button
7. Footer — 4-col grid, wordmark, socials, MOBO/VibX credit

## User Preferences
- Raw editorial elegance, no gradients, no glow, no button boxes
- Thin horizontal rule cutting through the "SILENCE" letterforms
- Very slow ticker (50s per loop)
- Lime green ONLY on the "NOW ARRIVING" badge and CTA hover state
- Full-bleed portrait on right side of hero

## Next Steps
- Animate horizontal rule on page load (scale-x 0→1)
- Add cursor-follower lime dot as signature motion element
- Add individual product detail page
