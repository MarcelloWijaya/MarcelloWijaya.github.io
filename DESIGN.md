# Design direction: Soft Modern Engineer

This is a portfolio for Marcello William Wijaya. It needs to show credible professional software work in a friendly, approachable layout, not imitate a generic SaaS landing page.

## Direction chosen

The selected reference is a warm cream, sage and terracotta composition with an expressive portrait, clear project navigation, rounded corners and comfortable whitespace. The interface does not use gradients, glass backgrounds, or large decorative glows.

Core colors:
- Cream: #f7f5f0
- Charcoal: #222725
- Sage: #687d64
- Terracotta: #b75d40
- Quiet neutral: #e9ede5

Manrope handles headlines, navigation, and body text. DM Mono is reserved for compact factual metadata. Light is the default; dark mode remains available.

## Content hierarchy

Hero: identity and personal expertise, real photo and CV.
Work: four public company profiles first, followed by personal and professional projects, then earlier design exploration.
Project detail: what the site or application does, implementation details that are supported by the source, and a live link where available.
About and contact: verified professional profile, resume and clear contact options.

## Motion

Cards rotate to reveal details on hover only when the pointing device supports hover. Native toggle buttons provide touch and keyboard access. Reduced-motion support must remove transitions without hiding functionality. Buttons react to hover and press with restrained translations.

## Quality rules

- Every project claim must be grounded in provided source or clearly qualified as conceptual.
- Do not create fictitious metrics, testimonials, customer logos, or screenshots.
- Keep private repository links out of client-side data.
- Flat colors only. Maintain the light and dark variants.
- No horizontal overflow at 320px. All interactive targets must remain reachable using keyboard and touch.
- Prefer simple components and data files over adding more unrelated dependencies.
- Test search/filter, card flip, deep-link case studies, contact, CV and metadata before release.
