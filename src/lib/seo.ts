import { SEO_CONFIG } from './constants';

export function generateMetaTags(pageTitle?: string, pageDescription?: string) {
  const title = pageTitle ? `${pageTitle} | ${SEO_CONFIG.title}` : SEO_CONFIG.title;
  const description = pageDescription || SEO_CONFIG.description;
  
  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: SEO_CONFIG.keywords },
    { name: 'author', content: SEO_CONFIG.author },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: SEO_CONFIG.url },
    { property: 'og:image', content: SEO_CONFIG.image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: SEO_CONFIG.image },
    { name: 'twitter:site', content: SEO_CONFIG.twitter },
  ];
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Growmate',
    description: 'Criação e orquestração de agentes de IA enterprise-ready',
    url: 'https://growmate.ai',
    logo: 'https://growmate.ai/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://linkedin.com/company/growmate',
      'https://twitter.com/growmateai',
      'https://github.com/growmate',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
  };
}