# Design direction: Graphite & Titanium

Portfolio for Marcello William Wijaya. It should remain a personal, approachable presentation of real software work rather than a generic startup template.

## Chosen palette

The user selected Graphite & Titanium as a more masculine and minimalist direction. Flat colors only, no gradient or glow.

| Token | Light | Dark |
| --- | --- | --- |
| Background | #F5F6F7 | #15191D |
| Primary text | #202428 | #F3F5F6 |
| Accent | #586873 | #B8C5CD |
| Surface | #FFFFFF | #232B31 |
| Soft surface | #E5E9EC | #2B353C |
| Border | #D8DEE2 | #46535C |
| Muted text | #58646D | #C7D0D6 |

The design relies on clean off-white, deep graphite, and restrained titanium grey. Avoid saturated accent colors, neon, gradients and rainbow project cards. Manrope is the main font, DM Mono is only for narrow metadata.

## Composition and existing features

Maintain the portrait-led hero, project search, category filters, four public company profiles and all prior project cards. Maintain working light/dark modes, case-study navigation, company website links, CV download, contact methods and mobile navigation. Do not expose private source repositories.

## Motion and accessibility

Project cards flip on pointer hover and via accessible native toggle button for touch and keyboard. Retain reduced-motion support and scrollable card backs for long descriptions. Buttons and controls receive gentle hover feedback without endless animation. Keep focus indicators visible and accessible touch targets.

## Content

Descriptions, links and outcomes must be grounded in real project facts; no fictitious metrics or screenshots. Project illustrations are typographic concepts, not screenshots of deployed products.

## Quality gate

Execute test and production build before release, validate that no CSS gradients have been introduced, check the new palette tokens in both light and dark, and verify the Vercel deployment SHA. Browser visual review and accessibility scanning are separate checks and should not be claimed without execution.

## Default theme behavior

Light mode is selected on each fresh page load, regardless of any previously saved browser preference. Dark mode is still available through the toggle for the current page session; refreshing the page returns to Light Mode. The browser theme-color tracks the active theme.

## Interactive motion and bilingual interface

- EN is the default language; ID is an explicit user-selectable translation, and the page `lang` attribute changes accordingly.
- Motion includes staggered hero entrance, scroll reveal of below-the-fold sections, subtle hover motion on buttons, cards and career entries, and an unobtrusive scroll progress line.
- Never add continuous decorative loops, aggressive parallax, gradient effects, scroll jacking or motion that blocks keyboard and touch usage.
- Support `prefers-reduced-motion: reduce` and keep all content visible if intersection observation is unavailable.

## Visual identity: MWW

- **01 Clean Type**: inline scalable, readable MWW lettermark in the navbar, case-study header and footer. It adapts automatically to both theme color systems.
- **03 Compact**: graphite-square favicon with a white M and two smaller titanium-grey Ws, distributed as `public/assets/mww-favicon.svg`.
- Keep identity flat, minimal and crisp, with no gradient, orbit, glow, icon-font substitution or reliance on a network image. Avoid reusing the old `marcello.` wordmark.
- Ensure labels remain understandable to assistive technology, and preserve navbar space at mobile/tablet widths.
