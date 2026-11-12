# DESIGN.md — Marcello William Wijaya portfolio

## Visual direction
Editorial engineering portfolio. It should feel like a personal field notebook about building working software, not a generic SaaS landing page.

## Dials
ENERGY 2 / RHYTHM 2 / MOTION 2.

## Palette
Warm paper (#f5f2eb), charcoal evergreen (#232a28), restrained terracotta (#a64029). Dark mode reverses the paper/ink relationship. Project artwork keeps a few muted solid hues to distinguish projects, not decorate the interface.

## Type
Manrope for readable display text and narrative, DM Mono for compact factual metadata. Monospace is a utility, not the entire identity. Large headline leads with engineering outcomes.

## Layout
A large left-led title, compact personal photo and description, a flat information strip, real project descriptions, a distinctly separated biography, and a high-clarity contact section. Avoid generic centered hero cards and fabricated metrics.

## Motion
Hover motion shows that an element is interactive. Buttons lift by 1–2 px and cards by up to 3 px in about 190 ms, without loops or animated gradients. Reduced-motion users see stable controls.

## Constraints
Never use gradients, glows, translucent glass cards or ornamental starbursts. Real project evidence over fabricated figures. Full keyboard focus, touch targets, mobile layout and light/dark modes remain functional.

## Anti-Slop filter
Use https://github.com/miqdadbadjuber/anti-slop/blob/main/ANTISLOP.md as the review filter; verify its current rules before future changes. Decision reasons are documented above. Audit before delivery, including visual regression and interaction checks.
