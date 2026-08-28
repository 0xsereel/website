import { SITE_CONFIG } from '../../utils/seo';

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone?: string;
    contactType?: string;
    email?: string;
    areaServed?: string;
    availableLanguage?: string[];
  };
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  } | {
    name: string;
    url?: string;
  }[];
  publisher?: {
    name: string;
    logo?: string;
  };
  url?: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  inLanguage?: string;
}

export function generateOrganizationSchema(props: OrganizationSchemaProps = {}) {
  const {
    name = SITE_CONFIG.name,
    url = SITE_CONFIG.url,
    logo = `${SITE_CONFIG.url}/images/Hero/glowing-seree-logo.png`,
    description = SITE_CONFIG.defaultDescription,
    sameAs = [
      `https://x.com/${SITE_CONFIG.social.twitter.replace('@', '')}`,
      `https://www.linkedin.com/company/${SITE_CONFIG.social.linkedin}`,
    ],
    contactPoint,
    address,
  } = props;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs,
  };

  if (contactPoint) {
    schema.contactPoint = contactPoint;
  }

  if (address) {
    schema.address = address;
  }

  return schema;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    headline,
    description,
    image,
    datePublished,
    dateModified = datePublished,
    author,
    publisher = {
      name: SITE_CONFIG.name,
      logo: `${SITE_CONFIG.url}/images/Hero/glowing-seree-logo.png`,
    },
    url,
    articleSection,
    keywords,
    wordCount,
    inLanguage = 'en',
  } = props;

  const formatAuthor = (authorData: ArticleSchemaProps['author']) => {
    if (Array.isArray(authorData)) {
      return authorData.map(a => ({
        '@type': 'Person',
        name: a.name,
        ...(a.url && { url: a.url }),
      }));
    }
    return {
      '@type': 'Person',
      name: authorData.name,
      ...(authorData.url && { url: authorData.url }),
    };
  };

  const formatPublisher = () => {
    const publisherSchema: Record<string, unknown> = {
      '@type': 'Organization',
      name: publisher.name,
    };

    if (publisher.logo) {
      publisherSchema.logo = {
        '@type': 'ImageObject',
        url: publisher.logo,
      };
    }

    return publisherSchema;
  };

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified,
    author: formatAuthor(author),
    publisher: formatPublisher(),
    inLanguage,
  };

  if (image) {
    schema.image = image;
  }

  if (url) {
    schema.url = url;
    schema.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': url,
    };
  }

  if (articleSection) {
    schema.articleSection = articleSection;
  }

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  if (wordCount) {
    schema.wordCount = wordCount;
  }

  return schema;
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateWebSiteSchema() {
  // No SearchAction: the site has no /search route, and declaring one that
  // does not exist is a false claim to crawlers.
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
  };
}
