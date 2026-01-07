import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, generateStructuredData } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  schema?: any; // New prop for custom page schema
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  schema
}) => {
  const metaTags = generateMetaTags(title, description, url);
  const corporationSchema = generateStructuredData();

  return (
    <Helmet>
      {metaTags.map((tag, index) => {
        if ('title' in tag) {
          return <title key={index}>{tag.title}</title>;
        }
        if ('rel' in tag) {
          return <link key={index} {...tag} />;
        }
        return <meta key={index} {...tag} />;
      })}

      {/* Corporation Schema (Global) */}
      <script type="application/ld+json">
        {JSON.stringify(corporationSchema)}
      </script>

      {/* Page Specific Schema (Article, Breadcrumbs, etc.) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};