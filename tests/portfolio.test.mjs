import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { companyProfiles } from '../src/data/companyProfiles.js';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const host = 'https://marcello-william-wijaya.vercel.app';
const expected = new Map([
  ['anakueducare', 'https://anakueducare.id/'],
  ['dw-consulting', 'https://dw-consulting.vercel.app/'],
  ['omah-moesik', 'https://omah-moesik.vercel.app/'],
  ['inti-jaya-teknik', 'https://inti-jaya-tenknik-diesel.vercel.app/'],
]);

test('company portfolio covers all four verified public websites', () => {
  assert.equal(companyProfiles.length, expected.size);
  for (const item of companyProfiles) {
    assert.equal(item.siteUrl, expected.get(item.slug), item.slug);
    assert.ok(item.title && item.description.length >= 40, item.slug);
    assert.ok(item.items.length >= 2 && item.stack.length >= 2, item.slug);
    assert.equal(item.category, 'Websites');
    assert.ok(!JSON.stringify(item).includes('github.com/MarcelloWijaya/'), 'private repo links should not appear');
  }
  assert.equal(new Set(companyProfiles.map(item => item.slug)).size, expected.size);
});

test('all featured projects have reachable case-study route entries in app source', () => {
  const src = read('src/main.jsx');
  const detail = read('src/ProjectCaseStudy.jsx');
  for (const slug of expected.keys()) {
    assert.ok(src.includes("'" + slug + "'"), 'route not present: ' + slug);
  }
  assert.ok(detail.includes('for (const item of companyProfiles)'));
  assert.ok(detail.includes('project.siteUrl'));
});

test('flip cards expose accessible toggle, external link, and reduced-motion support', () => {
  const component = read('src/ProjectFlipCard.jsx');
  const css = read('src/soft-human.css');
  assert.match(component, /<button[\s\S]*?aria-pressed=\{flipped\}/);
  assert.match(component, /inert=\{flipped\}/);
  assert.match(component, /inert=\{!flipped\}/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.match(component, /siteUrl/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /overflow-y:\s*auto/);
});

test('canonical URL, sitemap, robots and structured metadata use live production domain', () => {
  const html = read('index.html');
  const sitemap = read('public/sitemap.xml');
  const robots = read('public/robots.txt');
  assert.ok(html.includes('<link rel="canonical" href="' + host + '/"'));
  assert.ok(html.includes('"url":"' + host + '/"'));
  assert.ok(sitemap.includes('<loc>' + host + '/</loc>'));
  assert.ok(robots.includes('Sitemap: ' + host + '/sitemap.xml'));
  for (const content of [html,sitemap,robots]) {
    assert.ok(!content.includes('marcello-wijaya-github-io-s26f.vercel.app'));
  }
});

test('portfolio styles use solid fills without gradients', () => {
  const files = readdirSync(new URL('../src/', import.meta.url)).filter(file => file.endsWith('.css'));
  for (const file of files) {
    const content = read('src/' + file);
    assert.doesNotMatch(content, /(?:linear|radial|conic)-gradient\s*\(/i, file);
  }
});

test('portfolio includes contact links and downloadable CV', () => {
  const src = read('src/main.jsx');
  assert.ok(src.includes('mailto:'));
  assert.ok(src.includes('LinkedIn'));
  assert.ok(src.includes('/assets/Marcello-Wijaya-CV.pdf'));
});
