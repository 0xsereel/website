# Proposal: Site-wide SEO overhaul

## Why

A Semrush audit (Aug 2026) surfaced two infrastructure issues: (1) `askini.sereel.com/web` is indexed with backlinks but returns 404, wasting link equity; (2) the homepage is indexed under 4 URL variants (https/http × www/apex) splitting 578 backlinks across 173 referring domains instead of consolidating authority onto one canonical host.

A deeper repo audit found the site is a client-rendered SPA where all 33 URLs serve identical metadata: an existing SEO component library (`src/components/SEO/`, `src/utils/seo.ts`) is dead code after the redesign revert (`c6982cc`), `vite-plugin-sitemap` is installed but unregistered, and there is no robots.txt, no canonicals, no JSON-LD, no 404 route, and blog URLs are bare numeric IDs with truncated summaries unusable as meta descriptions.

## What

1. Canonicalize on `https://www.sereel.com` — 301 redirects (apex→www, askini→www) in `vercel.json`; per-page `rel=canonical` site-wide.
2. Fix latent bugs in the SEO library (wrong host, wrong social handles, SVG og:image, fake SearchAction, unsafe date fallback) and wire it into every routed page.
3. JSON-LD: Organization + WebSite on `/`, BlogPosting + BreadcrumbList on posts, Blog listing on `/blog`, FAQPage on `/faq`.
4. `public/robots.txt` + generated `sitemap.xml` with blog routes.
5. Blog schema upgrade: `slug`, `description`, `tags`, `author` fields for all 22 posts; `/blog/:slug` URLs with numeric-ID redirects; duplicate-h1 fix; crawler-visible hero image.
6. `path="*"` 404 route (noindex) + noindex on blog-not-found.
7. AGENTS.md SEO checklist so every future blog post ships with complete metadata.
