# Marcello William Wijaya portfolio

A personal software-engineering portfolio built with React 19, Vite 7 and Tailwind CSS 4. The canonical production URL is **https://marcello-william-wijaya.vercel.app/**.

The portfolio contains case studies of public company profile websites, independent software, selected professional work, and earlier UI/UX concepts. Company projects link to public websites; their private repositories are not linked. Project descriptions distinguish confirmed implementation details from plans and unverified deployment equivalence.

## Development

Node.js 22 or newer.

```sh
npm ci
npm run dev
npm test
npm run build
```

Preview: `npm run preview`. Build output: `dist/`.

## Deployment

- Vercel is the canonical production host and deploys changes to `main` through Git integration.
- GitHub Pages is also configured in `.github/workflows/pages.yml`, but canonical metadata and sitemap point to Vercel.
- Validation on pull requests runs `npm ci`, `npm test`, `npm run build`, and checks that styles contain no gradients.
- The production branch should be updated only after checking the PR and validation results.

## Where to update content

- `src/data/companyProfiles.js`: verified company websites and text for their case studies.
- `src/EngineeringProfile.jsx`: additional engineering projects, skills, and project filtering.
- `src/ProjectCaseStudy.jsx`: project detail content and case-study pages.
- `src/main.jsx`: homepage text, navigation, older design concepts, contact details.
- `src/ProjectFlipCard.jsx`: accessible flip card behavior.
- `src/soft-human.css`: final responsive theme, company cards, motion and flip behavior.
- `src/style.css`, `src/editorial-theme.css`, `src/profile.css`, and `src/case-studies.css`: older styles. New rules should be consolidated rather than adding further overlapping layers.
- `index.html`, `public/robots.txt`, `public/sitemap.xml`: canonical URL and indexing.
- `public/assets/`: public images, favicon and downloadable CV.

## Disclosure

Existing generic illustration blocks are concept artwork, not screenshots of the actual products. The company project source repos are private. The site's professional examples describe public, generalized work and must not expose internal endpoints, customer records, or other confidential information. If real screenshots are added, check rights and redact private information before committing.

## QA and roadmap

See `AUDIT-2026-11-12.md` for what was fixed and what still requires browser-based verification.
