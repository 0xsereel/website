import { Helmet } from 'react-helmet-async';
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

export function SEO({
  title,
  description = SITE_CONFIG.defaultDescription,
  keywords = [],
  canonical,
  noIndex = false,
  noFollow = false,
  openGraph = {},
  twitter = {},
  structuredData,
}: SEOProps) {
  const pageTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.defaultTitle;

  const allKeywords = [...SITE_CONFIG.defaultKeywords, ...keywords];
  const keywordsString = allKeywords.join(', ');

  const canonicalUrl = canonical 
    ? canonical.startsWith('http') 
      ? canonical 
      : `${SITE_CONFIG.url}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : SITE_CONFIG.url;

  const robotsDirectives = [];
  if (noIndex) robotsDirectives.push('noindex');
  else robotsDirectives.push('index');
  if (noFollow) robotsDirectives.push('nofollow');
  else robotsDirectives.push('follow');
  const robotsContent = robotsDirectives.join(', ');

  const ogType = openGraph.type || 'website';
  const ogTitle = openGraph.title || title || SITE_CONFIG.defaultTitle;
  const ogDescription = openGraph.description || description;
  const ogUrl = openGraph.url || canonicalUrl;
  const ogImage = openGraph.image || DEFAULT_OG_CONFIG.image.url;
  const ogImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${SITE_CONFIG.url}${ogImage}`;
  const ogImageAlt = openGraph.imageAlt || DEFAULT_OG_CONFIG.image.alt;
  const ogImageWidth = openGraph.imageWidth || DEFAULT_OG_CONFIG.image.width;
  const ogImageHeight = openGraph.imageHeight || DEFAULT_OG_CONFIG.image.height;
  const ogSiteName = openGraph.siteName || DEFAULT_OG_CONFIG.siteName;
  const ogLocale = openGraph.locale || DEFAULT_OG_CONFIG.locale;

  const twitterCard = twitter.card || DEFAULT_TWITTER_CONFIG.card;
  const twitterSite = twitter.site || DEFAULT_TWITTER_CONFIG.site;
  const twitterCreator = twitter.creator || DEFAULT_TWITTER_CONFIG.creator;
  const twitterTitle = twitter.title || title || SITE_CONFIG.defaultTitle;
  const twitterDescription = twitter.description || description;
  const twitterImageRaw = twitter.image || openGraph.image || DEFAULT_TWITTER_CONFIG.image;
  const twitterImage = twitterImageRaw.startsWith('http')
    ? twitterImageRaw
    : `${SITE_CONFIG.url}${twitterImageRaw}`;

  const structuredDataArray = structuredData 
    ? Array.isArray(structuredData) 
      ? structuredData 
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />

      {ogType === 'article' && openGraph.article && (
        <>
          {openGraph.article.publishedTime && (
            <meta property="article:published_time" content={openGraph.article.publishedTime} />
          )}
          {openGraph.article.modifiedTime && (
            <meta property="article:modified_time" content={openGraph.article.modifiedTime} />
          )}
          {openGraph.article.author && (
            <meta property="article:author" content={openGraph.article.author} />
          )}
          {openGraph.article.section && (
            <meta property="article:section" content={openGraph.article.section} />
          )}
          {openGraph.article.tags && openGraph.article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />

      {structuredDataArray.map((data, index) => (
        <script 
          key={index} 
          type="application/ld+json"
        >
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
