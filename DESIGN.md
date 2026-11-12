# Design direction: Soft Slate & Navy

Portfolio for Marcello William Wijaya. It should remain a personal, approachable presentation of real software work rather than a generic startup template.

## Chosen palette

The user selected Soft Slate & Navy as a modern minimal alternative. Flat colors only, no gradient or glow.

| Token | Light | Dark |
| --- | --- | --- |
| Background | #F7F9FB | #111B27 |
| Primary text | #202934 | #F0F5F9 |
| Accent | #506B80 | #B9D3E6 |
| Surface | #FFFFFF | #1C2B3B |
| Soft surface | #E8EEF2 | #26394B |
| Border | #D8E2E9 | #3F5365 |
| Muted text | #52687A | #C1CFD9 |

The design relies on cool off-white, deep navy, and restrained slate-blue. Avoid warm terracotta, green, neon, gradients and rainbow project cards. Manrope is the main font, DM Mono is only for narrow metadata.

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
