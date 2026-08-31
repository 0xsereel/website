# Agent Development Guide

## Setup
```bash
pnpm install                           # Install dependencies
```

## Commands
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **Dev Server**: `pnpm dev`
- **Tests**: No test framework configured

## Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Build Tool**: Vite 7
- **Package Manager**: pnpm 10

## Architecture
- `/src/components` - React components
- `/src/pages` - Page components
- `/src/routes` - Route definitions
- `/src/contexts` - React contexts
- `/src/hooks` - Custom hooks
- `/src/utils` - Utility functions
- `/src/Blog Data/Blogs.json` - All blog content (newest-first array)

## SEO architecture (do not regress)

- **Canonical host is `https://www.sereel.com`** (www). It is defined in
  `src/utils/seo.ts` (`SITE_CONFIG.url`), enforced by 301 redirects in
  `vercel.json`, and used by the sitemap in `vite.config.ts`. If the canonical
  host ever changes, update all three together.
- **Every routed page must render the `<SEO>` component**
  (`src/components/SEO/SEO.tsx`) with a unique `title` (≤60 chars where
  possible — the component appends `" | Sereel"`; long editorial blog titles
  may exceed this and will be truncated in SERPs), a unique `description`
  (140–160 chars), and a `canonical` path. Pages that must not be indexed (404, error states)
  pass `noIndex`.
- **Structured data**: homepage emits `Organization` + `WebSite`; `/blog`
  emits `Blog`; blog posts emit `BlogPosting` + `BreadcrumbList`; `/faq`
  emits `FAQPage`. Generators live in `src/utils/seo.ts` and
  `src/components/SEO/StructuredData.tsx`.
- **Sitemap**: generated at build time by the inline plugin in
  `vite.config.ts`. New static routes must be added to its `staticRoutes`
  list AND to `src/routes/AppRoutes.tsx`; blog routes are derived from
  `Blogs.json` automatically. `public/robots.txt` allows all crawlers
  (including AI crawlers — intentional) and points at the sitemap.
- **One h1 per page.** Blog markdown h1s are demoted to h2 at render time in
  `BlogPost.tsx`; do not add `# ` headings to post content.
- **Do not reintroduce `react-helmet-async`** — it is unreliable under
  React 19 StrictMode. The `<SEO>` component manages `document.head`
  directly.

## Blog authoring — REQUIRED for every new post

New posts go at the **top** of `src/Blog Data/Blogs.json` (array is
newest-first). Every post MUST include ALL of these fields — the build,
sitemap, structured data, and related-posts features depend on them:

| Field | Rules |
|---|---|
| `id` | Next integer above the current max. Never renumber existing posts. |
| `title` | ≤60 chars ideally; put the primary keyword near the front. |
| `date` | `"Month D, YYYY"` format (e.g. `"August 19, 2026"`). |
| `image` | Leading-slash, forward-slash path (`/images/blog/...`). File must exist in `public/images/blog/`. Prefer 1200×630 (og:image aspect). |
| `imageAlt` | Descriptive alt text for the cover image, under 12 words. |
| `slug` | kebab-case, lowercase, keyword-focused, 3–8 words, unique. This is the URL — it can never change after publication without a redirect. |
| `description` | Meta description: 140–160 chars, complete sentence(s), ends with punctuation, contains the primary keyword, written for click-through. Never truncate mid-word. |
| `summary` | Short human-readable teaser (may equal `description`). |
| `tags` | 3–5 Title Case topics. **Reuse existing tag strings** from other posts where possible — tags drive the Related Articles links. |
| `author` | `"Sereel Team"` unless an individual author is credited. |
| `content` | Markdown. **No `# ` h1 headings** (the page renders the title as h1) — structure with `## ` h2 / `### ` h3. Give every image alt text: `![meaningful alt](path)`. Link related Sereel posts inline with relative URLs (`/blog/<slug>`) where natural. |

After adding a post, run `pnpm build` and confirm:
1. Build succeeds and `dist/sitemap.xml` contains the new `/blog/<slug>` URL.
2. Visit `/blog/<slug>` in `pnpm preview` — check title, meta description,
   canonical, and `BlogPosting` JSON-LD are present (view page head in
   devtools).

## Known SEO limitations / follow-ups

- The site is a client-rendered SPA: Google indexes the JS-rendered metadata,
  but social scrapers (LinkedIn/X/Slack) and most AI crawlers do **not**
  execute JS — they see only the static `index.html` defaults. The planned
  fix is build-time prerendering (React Router v7 framework mode with
  `ssr: false` + `prerender`). Until then, keep the static tags in
  `index.html` aligned with `SITE_CONFIG` defaults in `src/utils/seo.ts`.
- The `askini.sereel.com` redirect in `vercel.json` only takes effect if that
  subdomain is attached to this Vercel project; otherwise it must be
  configured where that subdomain is hosted.
