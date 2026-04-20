# Project Notes

## What Was Built
- MAISON VOSS luxury fashion house hero section — full single-page build
- Aesthetic: editorial-serif — Playfair Display 900 italic at clamp(80px, 13vw, 160px), raw black ground, single lime accent #aaff4d
- Fonts: Playfair Display (display/headings) + DM Sans (UI/body), loaded via Google Fonts in index.html

## Architecture Decisions
- Single page app: src/pages/Home.tsx + src/App.tsx as BrowserRouter shell
- All styling via inline styles (precise editorial values) + Tailwind utility classes
- Horizontal rule cutting through "SILENCE" via absolute positioned div at top: 54%
- Ticker: CSS keyframes animation, 40s linear infinite, duplicate spans for seamless loop
- Portrait placeholder: SVG fashion silhouette + horizontal scan lines, ash gray #1c1c1c fill
- "NOW ARRIVING" lime pill badge positioned absolute top-right of portrait frame

## Palette
- Black: #000000 (background)
- Off-white: #f5f0eb (primary text)
- Taupe: #9a9080 (muted/secondary)
- Lime: #aaff4d (sole accent — pill badge, CTA hover)
- Ash: #1c1c1c (portrait fill, section dividers)
- Rule: #2a2a2a / #3a3a3a (horizontal lines)

## Current State
- Dev server: running
- Last verified: tsc clean
- Files created: 4 (index.html, tailwind.config.ts, src/index.css, src/pages/Home.tsx, src/App.tsx)

## User Preferences
- Raw editorial elegance, no gradients, no glow, no button boxes
- Thin horizontal rule cutting through the "SILENCE" letterforms
- Very slow ticker (40s per loop)
- Lime green ONLY on the "NOW ARRIVING" badge and CTA hover state

## Next Steps
- Could add a second page for the collection grid
- Could animate the horizontal rule on page load (scale-x from 0 to 1)
- Could add a cursor-follower dot in lime green as the one signature motion element
