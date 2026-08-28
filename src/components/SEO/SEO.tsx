import { useEffect } from 'react';
import { SITE_CONFIG, DEFAULT_OG_CONFIG, DEFAULT_TWITTER_CONFIG } from '../../utils/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  openGraph?: {
    type?: 'website' | 'article' | 'profile';
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    siteName?: string;
    locale?: string;
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      author?: string;
      section?: string;
      tags?: string[];
    };
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

type TagSpec =
  | { kind: 'meta-name'; key: string; content: string }
  | { kind: 'meta-property'; key: string; content: string }
  | { kind: 'link'; rel: string; href: string }
  | { kind: 'jsonld'; json: string };

const MANAGED_ATTR = 'data-seo';

function buildTagSpecs(props: SEOProps): { pageTitle: string; specs: TagSpec[] } {
  const {
    title,
    description = SITE_CONFIG.defaultDescription,
    keywords = [],
    canonical,
    noIndex = false,
    noFollow = false,
    openGraph = {},
    twitter = {},
    structuredData,
  } = props;

  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.defaultTitle;

  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_CONFIG.url}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : SITE_CONFIG.url;

  const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;

  const ogType = openGraph.type || 'website';
  const ogImage = openGraph.image || DEFAULT_OG_CONFIG.image.url;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`;
  const twitterImageRaw = twitter.image || openGraph.image || DEFAULT_TWITTER_CONFIG.image;
  const twitterImage = twitterImageRaw.startsWith('http')
    ? twitterImageRaw
    : `${SITE_CONFIG.url}${twitterImageRaw}`;

  const allKeywords = [...SITE_CONFIG.defaultKeywords, ...keywords];

  const specs: TagSpec[] = [
    { kind: 'meta-name', key: 'description', content: description },
    { kind: 'meta-name', key: 'keywords', content: allKeywords.join(', ') },
    { kind: 'meta-name', key: 'robots', content: robotsContent },
    { kind: 'link', rel: 'canonical', href: canonicalUrl },
    { kind: 'meta-property', key: 'og:type', content: ogType },
    { kind: 'meta-property', key: 'og:title', content: openGraph.title || title || SITE_CONFIG.defaultTitle },
    { kind: 'meta-property', key: 'og:description', content: openGraph.description || description },
    { kind: 'meta-property', key: 'og:url', content: openGraph.url || canonicalUrl },
    { kind: 'meta-property', key: 'og:site_name', content: openGraph.siteName || DEFAULT_OG_CONFIG.siteName },
    { kind: 'meta-property', key: 'og:locale', content: openGraph.locale || DEFAULT_OG_CONFIG.locale },
    { kind: 'meta-property', key: 'og:image', content: ogImageUrl },
    { kind: 'meta-property', key: 'og:image:alt', content: openGraph.imageAlt || DEFAULT_OG_CONFIG.image.alt },
    { kind: 'meta-property', key: 'og:image:width', content: String(openGraph.imageWidth || DEFAULT_OG_CONFIG.image.width) },
    { kind: 'meta-property', key: 'og:image:height', content: String(openGraph.imageHeight || DEFAULT_OG_CONFIG.image.height) },
    { kind: 'meta-name', key: 'twitter:card', content: twitter.card || DEFAULT_TWITTER_CONFIG.card },
    { kind: 'meta-name', key: 'twitter:site', content: twitter.site || DEFAULT_TWITTER_CONFIG.site },
    { kind: 'meta-name', key: 'twitter:creator', content: twitter.creator || DEFAULT_TWITTER_CONFIG.creator },
    { kind: 'meta-name', key: 'twitter:title', content: twitter.title || title || SITE_CONFIG.defaultTitle },
    { kind: 'meta-name', key: 'twitter:description', content: twitter.description || description },
    { kind: 'meta-name', key: 'twitter:image', content: twitterImage },
  ];

  if (ogType === 'article' && openGraph.article) {
    const { publishedTime, modifiedTime, author, section, tags } = openGraph.article;
    if (publishedTime) specs.push({ kind: 'meta-property', key: 'article:published_time', content: publishedTime });
    if (modifiedTime) specs.push({ kind: 'meta-property', key: 'article:modified_time', content: modifiedTime });
    if (author) specs.push({ kind: 'meta-property', key: 'article:author', content: author });
    if (section) specs.push({ kind: 'meta-property', key: 'article:section', content: section });
    (tags || []).forEach((tag) =>
      specs.push({ kind: 'meta-property', key: 'article:tag', content: tag }),
    );
  }

  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  structuredDataArray.forEach((data) =>
    specs.push({
      kind: 'jsonld',
      // Escape < and & so content cannot break out of the script block.
      json: JSON.stringify(data).replace(/</g, '\\u003c').replace(/&/g, '\\u0026'),
    }),
  );

  return { pageTitle, specs };
}

function applyTagSpecs(pageTitle: string, specs: TagSpec[]): () => void {
  const head = document.head;
  const previousTitle = document.title;
  document.title = pageTitle;

  const created: Element[] = [];
  const overridden: Array<{ el: Element; attr: string; value: string | null }> = [];

  // Duplicate-key tags (article:tag, JSON-LD) are always created fresh, so
  // clear any managed leftovers from a previous route first.
  head.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((el) => el.remove());

  const upsert = (selector: string, make: () => Element, attr: string, value: string) => {
    const existing = head.querySelector(selector);
    if (existing) {
      overridden.push({ el: existing, attr, value: existing.getAttribute(attr) });
      existing.setAttribute(attr, value);
      return;
    }
    const el = make();
    el.setAttribute(attr, value);
    el.setAttribute(MANAGED_ATTR, '1');
    head.appendChild(el);
    created.push(el);
  };

  for (const spec of specs) {
    if (spec.kind === 'meta-name' || spec.kind === 'meta-property') {
      const attrName = spec.kind === 'meta-name' ? 'name' : 'property';
      const isRepeatable = spec.key === 'article:tag';
      if (isRepeatable) {
        const el = document.createElement('meta');
        el.setAttribute(attrName, spec.key);
        el.setAttribute('content', spec.content);
        el.setAttribute(MANAGED_ATTR, '1');
        head.appendChild(el);
        created.push(el);
      } else {
        upsert(
          `meta[${attrName}="${spec.key}"]`,
          () => {
            const el = document.createElement('meta');
            el.setAttribute(attrName, spec.key);
            return el;
          },
          'content',
          spec.content,
        );
      }
    } else if (spec.kind === 'link') {
      upsert(
        `link[rel="${spec.rel}"]`,
        () => {
          const el = document.createElement('link');
          el.setAttribute('rel', spec.rel);
          return el;
        },
        'href',
        spec.href,
      );
    } else {
      const el = document.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute(MANAGED_ATTR, '1');
      el.textContent = spec.json;
      head.appendChild(el);
      created.push(el);
    }
  }

  return () => {
    document.title = previousTitle;
    created.forEach((el) => el.remove());
    overridden.forEach(({ el, attr, value }) => {
      if (value === null) el.removeAttribute(attr);
      else el.setAttribute(attr, value);
    });
  };
}

/**
 * Per-page head manager. Renders nothing; applies title/meta/canonical/JSON-LD
 * to document.head in an effect and restores previous values on unmount.
 * (Replaces react-helmet-async, which is unreliable under React 19 StrictMode.)
 */
export function SEO(props: SEOProps) {
  const { pageTitle, specs } = buildTagSpecs(props);
  // Serialize so the effect re-runs only when the resolved output changes.
  const serialized = JSON.stringify({ pageTitle, specs });

  useEffect(() => {
    const parsed = JSON.parse(serialized) as { pageTitle: string; specs: TagSpec[] };
    return applyTagSpecs(parsed.pageTitle, parsed.specs);
  }, [serialized]);

  return null;
}
