import { SEO_CONFIG } from './constants';

export function generateMetaTags(pageTitle?: string, pageDescription?: string, canonicalUrl?: string) {
  const title = pageTitle ? `${pageTitle} | ${SEO_CONFIG.title}` : SEO_CONFIG.title;
  const description = pageDescription || SEO_CONFIG.description;
  const url = canonicalUrl || SEO_CONFIG.url;

  const tags: any[] = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: SEO_CONFIG.keywords },
    { name: 'author', content: SEO_CONFIG.author },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: SEO_CONFIG.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: SEO_CONFIG.image },
    { name: 'twitter:site', content: SEO_CONFIG.twitter },
    { rel: 'canonical', href: url }
  ];

  return tags;
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Growmate',
    description: 'Líderes em orquestração de IA Agêntica e automação enterprise no Brasil.',
    url: 'https://www.growmate.io',
    logo: 'https://www.growmate.io/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-4863-5675',
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://linkedin.com/company/growmate-io',
      'https://www.instagram.com/growmate.io/',
      'https://www.youtube.com/@growmate_io',
      'https://github.com/growmatesuite',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Uberlândia',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
  };
}

export function generateArticleSchema(article: any) {
  if (!article) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt || article.description,
    "image": article.cover?.url || SEO_CONFIG.image,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "author": (article.authors || []).map((author: any) => ({
      "@type": "Person",
      "name": author.name
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Growmate",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.growmate.io/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.growmate.io/blog/${article.slug}`
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string, item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.growmate.io${item.item}`
    }))
  };
}