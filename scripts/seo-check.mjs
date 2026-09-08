import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { request as httpRequest } from 'node:http';
const require = createRequire(import.meta.url);
const { SITE_URL } = require('../site.config.js');
const base = process.env.SEO_BASE_URL || 'http://localhost:3000';
const report = { base, canonical: SITE_URL, checkedAt: new Date().toISOString(), pages: [], registry: [] };
async function get(route, options = {}) {
  return fetch(new URL(route, base), { headers: { 'User-Agent': 'Googlebot', ...options.headers }, ...options });
}
function tags(html, name) { return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(match => match[0]); }
function attr(tag, name) { return new RegExp(`\\b${name}=["']([^"']*)["']`, 'i').exec(tag)?.[1]; }
function meta(html, name) { return tags(html, 'meta').filter(tag => attr(tag, 'name') === name).map(tag => attr(tag, 'content')); }
try {
  const sitemapResponse = await get('/sitemap.xml');
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.ok(locations.length >= 26, 'Sitemap must retain existing content URLs');
  const descriptions = new Set();
  for (const location of locations) {
    const url = new URL(location);
    assert.equal(url.origin, SITE_URL);
    assert.ok(!/^\/(demo|r|_pagefind)(\/|$)/.test(url.pathname), `Non-content URL in sitemap: ${location}`);
    const response = await get(url.pathname);
    assert.equal(response.status, 200, url.pathname);
    assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${url.pathname} response is noindex`);
    const html = await response.text();
    const canonicals = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'canonical').map(tag => attr(tag, 'href'));
    assert.deepEqual(canonicals.map(value => new URL(value).href), [url.href], `${url.pathname} canonical`);
    assert.equal(tags(html, 'h1').length, 1, `${url.pathname} must have one main heading`);
    assert.ok(!meta(html, 'robots').some(value => /noindex/i.test(value)), `${url.pathname} HTML is noindex`);
    const description = meta(html, 'description');
    assert.equal(description.length, 1, `${url.pathname} description count`);
    assert.ok(description[0].length >= 40, `${url.pathname} needs a meaningful description`);
    assert.ok(!descriptions.has(description[0]), `${url.pathname} duplicates a description`);
    descriptions.add(description[0]);
    if (url.pathname === '/') {
      for (const sample of ['Hear from Our Customers', 'Emily Chen', 'ethical approach to AI development']) assert.ok(!html.includes(sample), `Demo text leaked into homepage: ${sample}`);
      assert.ok(!html.includes('/logos/Vercel.svg'), 'Incorrect organization logo');
      assert.equal(tags(html, 'iframe').length, 0, 'Homepage preview should load on demand');
    }
    report.pages.push({ path: url.pathname, status: response.status, canonical: canonicals[0], h1: 1 });
  }
  const robots = await (await get('/robots.txt')).text();
  assert.ok(robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`));
  assert.ok(!/^Disallow:\s*\/\s*$/mi.test(robots));
  for (const route of ['/demo/default', '/demo/editorial?section=faq']) {
    const response = await get(route);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('x-robots-tag') || '', /noindex/);
    assert.ok(meta(await response.text(), 'robots').some(value => /noindex/.test(value)));
  }
  for (const route of ['/not-a-real-convertfast-page', '/demo/missing', '/.local-docs/README.md']) assert.equal((await get(route)).status, 404, route);
  const manifest = await (await get('/r/registry.json')).json();
  assert.equal(manifest.homepage, SITE_URL);
  assert.equal(manifest.items.length, 15);
  for (const item of manifest.items) {
    const response = await get(`/r/${item.name}.json`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.name, item.name);
    for (const file of payload.files) assert.ok(typeof file.content === 'string' && file.content.length, `${item.name} missing inline content`);
    report.registry.push(item.name);
  }
  const oldSitemap = await get('/sitemap-0.xml', { redirect: 'manual' });
  assert.equal(oldSitemap.status, 308);
  assert.equal(oldSitemap.headers.get('location'), `${SITE_URL}/sitemap.xml`);
  // A Host override validates the Next routing rules without requiring DNS changes.
  if (new URL(base).hostname === 'localhost' || new URL(base).hostname === '127.0.0.1') {
    // Node fetch can replace Host with its URL authority; the HTTP client preserves the test header.
    const response = await new Promise((resolve, reject) => {
      const req = httpRequest(new URL('/docs/cli?source=legacy&value=a%20b', base), { headers: { Host: 'ui.convertfa.st' } }, res => { res.resume(); resolve(res); });
      req.on('error', reject); req.end();
    });
    assert.equal(response.statusCode, 308);
    assert.equal(response.headers.location, `${SITE_URL}/docs/cli?source=legacy&value=a%20b`);
  }
  report.status = 'passed';
  const colorPicker = await (await get('/shadcn-color-picker')).text();
  assert.match(colorPicker, /A color picker/);
  assert.match(colorPicker, /Live example/);
  assert.match(colorPicker, /color-picker\.json/);
  console.log(`SEO check passed: ${report.pages.length} pages, 15 registry items, color picker landing page, demo isolation, privacy, and redirects.`);
} catch (error) {
  report.status = 'failed'; report.error = error.message;
  process.exitCode = 1; console.error(error);
} finally {
  if (process.env.SEO_REPORT) {
    await fs.mkdir(path.dirname(process.env.SEO_REPORT), { recursive: true });
    await fs.writeFile(process.env.SEO_REPORT, JSON.stringify(report, null, 2) + '\n');
  }
}
