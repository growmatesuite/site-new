import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateMetaTags, generateStructuredData } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image,
  url 
}) => {
  const metaTags = generateMetaTags(title, description);
  const structuredData = generateStructuredData();

  return (
    <Helmet>
      {metaTags.map((tag, index) => {
        if ('title' in tag) {
          return <title key={index}>{tag.title}</title>;
        }
        return <meta key={index} {...tag} />;
      })}
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};