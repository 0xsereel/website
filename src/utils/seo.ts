export const SITE_CONFIG = {
  name: 'Sereel',
  url: 'https://sereel.com',
  defaultTitle: 'Sereel - RWA Tokenization Platform | Institutional Tokenization Infrastructure',
  defaultDescription: 'Leading RWA tokenization platform and institutional tokenization infrastructure. Security token issuance, CMTA tokenization, enterprise digital asset custody, bond tokenization, and Canton Network tokenization solutions for institutional DeFi.',
  defaultKeywords: [
    'RWA tokenization platform',
    'institutional tokenization infrastructure',
    'security token issuance',
    'CMTA tokenization',
    'enterprise digital asset custody',
    'bond tokenization platform',
    'Regulation S token issuance',
    'Regulation D token issuance',
    'multi-chain tokenization',
    'Canton Network tokenization',
    'institutional DeFi infrastructure',
    'real world asset tokenization',
    'private credit tokenization',
    'treasury tokenization',
    'stablecoin issuance platform',
    'tokenized securities platform',
  ],
  author: 'Sereel',
  social: {
    twitter: '@sereel',
    linkedin: 'sereel',
  },
} as const;

export const DEFAULT_OG_CONFIG = {
  type: 'website' as const,
  siteName: SITE_CONFIG.name,
  locale: 'en_US',
  image: {
    url: '/images/Hero/glowing_seree_logo_expanded.svg',
    alt: 'Sereel Logo',
    width: 1200,
    height: 630,
    type: 'image/svg+xml',
  },
} as const;

export const DEFAULT_TWITTER_CONFIG = {
  card: 'summary_large_image' as const,
  site: SITE_CONFIG.social.twitter,
  creator: SITE_CONFIG.social.twitter,
  image: '/images/Hero/glowing_seree_logo_expanded.svg',
} as const;

export interface PageMetaConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export interface GeneratedPageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  robots: string;
  openGraph: {
    type: string;
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
      type: string;
    };
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      author?: string;
      section?: string;
      tags?: string[];
    };
  };
  twitter: {
    card: string;
    site: string;
    creator: string;
    title: string;
    description: string;
    image: string;
  };
}

export function generatePageMeta(config: PageMetaConfig = {}): GeneratedPageMeta {
  const {
    title,
    description = SITE_CONFIG.defaultDescription,
    keywords = [],
    canonical,
    ogType = 'website',
    ogImage,
    ogImageAlt,
    twitterCard = DEFAULT_TWITTER_CONFIG.card,
    twitterImage,
    noIndex = false,
    noFollow = false,
    article,
  } = config;

  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.defaultTitle;

  const allKeywords = [...SITE_CONFIG.defaultKeywords, ...keywords];
  const keywordsString = allKeywords.join(', ');

  const canonicalUrl = canonical 
    ? `${SITE_CONFIG.url}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : SITE_CONFIG.url;

  const robotsDirectives = [];
  if (noIndex) robotsDirectives.push('noindex');
  else robotsDirectives.push('index');
  if (noFollow) robotsDirectives.push('nofollow');
  else robotsDirectives.push('follow');

  const ogImageUrl = ogImage || DEFAULT_OG_CONFIG.image.url;
  const fullOgImageUrl = ogImageUrl.startsWith('http') 
    ? ogImageUrl 
    : `${SITE_CONFIG.url}${ogImageUrl}`;

  const twitterImageUrl = twitterImage || ogImage || DEFAULT_TWITTER_CONFIG.image;
  const fullTwitterImageUrl = twitterImageUrl.startsWith('http')
    ? twitterImageUrl
    : `${SITE_CONFIG.url}${twitterImageUrl}`;

  return {
    title: fullTitle,
    description,
    keywords: keywordsString,
    canonical: canonicalUrl,
    robots: robotsDirectives.join(', '),
    openGraph: {
      type: ogType,
      title: title || SITE_CONFIG.defaultTitle,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_OG_CONFIG.siteName,
      locale: DEFAULT_OG_CONFIG.locale,
      image: {
        url: fullOgImageUrl,
        alt: ogImageAlt || DEFAULT_OG_CONFIG.image.alt,
        width: DEFAULT_OG_CONFIG.image.width,
        height: DEFAULT_OG_CONFIG.image.height,
        type: DEFAULT_OG_CONFIG.image.type,
      },
      ...(ogType === 'article' && article ? { article } : {}),
    },
    twitter: {
      card: twitterCard,
      site: DEFAULT_TWITTER_CONFIG.site,
      creator: DEFAULT_TWITTER_CONFIG.creator,
      title: title || SITE_CONFIG.defaultTitle,
      description,
      image: fullTwitterImageUrl,
    },
  };
}

export function getPageTitle(pageTitle?: string): string {
  return pageTitle 
    ? `${pageTitle} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.defaultTitle;
}

export function getCanonicalUrl(path?: string): string {
  if (!path) return SITE_CONFIG.url;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/Hero/glowing_seree_logo_expanded.svg`,
    description: SITE_CONFIG.defaultDescription,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      `https://www.linkedin.com/company/${SITE_CONFIG.social.linkedin}`,
    ],
  };
}

export interface BlogArticleData {
  id: number;
  title: string;
  date?: string;
  image: string;
  content: string;
  summary?: string;
  author?: string;
}

export function generateArticleSchema(article: BlogArticleData) {
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_CONFIG.url}/${article.image.replace(/^\//, '')}`;

  const publishedDate = article.date ? parsePublishedDate(article.date) : new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary || extractSummary(article.content),
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Organization',
      name: article.author || SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/Hero/glowing_seree_logo_expanded.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${article.id}`,
    },
  };
}

function parsePublishedDate(dateString: string): string {
  const monthMap: { [key: string]: string } = {
    January: '01', February: '02', March: '03', April: '04',
    May: '05', June: '06', July: '07', August: '08',
    September: '09', October: '10', November: '11', December: '12'
  };

  const match = dateString.match(/(\w+)\s+(\d+),\s+(\d{4})/);
  if (match) {
    const [, month, day, year] = match;
    const monthNum = monthMap[month] || '01';
    const dayNum = day.padStart(2, '0');
    return `${year}-${monthNum}-${dayNum}T00:00:00Z`;
  }

  return new Date().toISOString();
}

function extractSummary(content: string): string {
  const textContent = content
    .replace(/[#*`]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    .trim();
  
  const firstParagraph = textContent.split('\n\n')[0] || textContent;
  return firstParagraph.substring(0, 160).trim() + (firstParagraph.length > 160 ? '...' : '');
}

export function generateBlogListingSchema(articles: BlogArticleData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_CONFIG.name} Blog`,
    description: 'Insights from the forefront of institutional blockchain adoption, RWA tokenization, and DeFi innovation.',
    url: `${SITE_CONFIG.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/Hero/glowing_seree_logo_expanded.svg`,
      },
    },
    blogPost: articles.slice(0, 10).map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.summary || extractSummary(article.content),
      url: `${SITE_CONFIG.url}/blog/${article.id}`,
      datePublished: article.date ? parsePublishedDate(article.date) : new Date().toISOString(),
      image: article.image.startsWith('http')
        ? article.image
        : `${SITE_CONFIG.url}/${article.image.replace(/^\//, '')}`,
    })),
  };
}
