# ConvertFast UI website

Product website and documentation for [ConvertFast UI](https://convertfa.st), built with Next.js 16, React 19, and Nextra 4. The CLI lives in [convertfast-ui](https://github.com/ObservedObserver/convertfast-ui).

## Development

Use Node.js 22 and Yarn Classic:

```sh
yarn install --frozen-lockfile
yarn dev
```

MDX documentation lives in `content/`; product pages and metadata routes live in `app/`. Before development and production builds, `scripts/sync-release.mjs` copies the pinned, published `convertfast-ui@0.2.1` package into the generated demo and registry directories. Do not edit those generated copies. Set `CONVERTFAST_PACKAGE_ROOT` to a local package directory when validating an unpublished release candidate.

Nextra's bundled CSS and the legacy Tailwind 3 component styles use explicit cascade layers. The Zod resolution is pinned to 4.1.12 because newer Zod behavior breaks Nextra 4.6.1's layout validation. The xmldom resolution applies the patched 0.9.12 serializer while speech-rule-engine still pins 0.9.10. Verify the documentation layout and MathML speech output before changing these integrations.

## Verification

```sh
yarn typecheck
yarn build
yarn start -p 3201
SEO_BASE_URL=http://localhost:3201 yarn seo:check
```

The production build also generates the Pagefind search index. The SEO check verifies every sitemap page, canonical URLs, unique descriptions, a single H1, demo exclusion, registry content, redirects, and inaccessible local notes. Browser verification should cover desktop/mobile navigation, search, copy commands, and both interactive template previews.

## Deployment and domains

The Vercel project is `kanaries/convertfast-docs`. `SITE_URL` is the canonical origin, defaulting to `https://convertfa.st`. Set it before building. Host redirects preserve old document paths and query strings; keep the legacy domain attached to Vercel after migration.

The homepage renders product content on the server. Template previews load only after a visitor requests them, under `/demo/`, with `noindex` headers and metadata. Public registry JSON under `/r/` is generated from the same npm release. The sitemap contains the homepage and published MDX pages.

`.local-docs/` contains private working notes and evidence. It is excluded from both Git and Vercel uploads and must never be imported into public site content.

## License

MIT.
