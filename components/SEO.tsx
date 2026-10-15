import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  schema,
  image = "https://www.associacaobarnabe.org/images/og-image.jpg", 
  type = "website",
  noindex = false
}) => {
  const location = useLocation();
  const canonicalUrl = `https://www.associacaobarnabe.org${location.pathname === '/' ? '' : location.pathname}`;
  const siteName = "ABA - Associação Barnabé";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Atualiza Título
    document.title = fullTitle;

    // Atualiza Meta Tags
    const setMetaTag = (name: string, content: string, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    
    // Robots
    if (noindex) {
        setMetaTag('robots', 'noindex,nofollow');
    } else {
        setMetaTag('robots', 'index,follow');
    }
    
    // Open Graph
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:image', image, 'property');
    setMetaTag('og:site_name', siteName, 'property');
    
    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Canonical Link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Schema.org JSON-LD
    if (schema) {
      const scriptId = 'json-ld-schema';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [fullTitle, description, canonicalUrl, schema, image, type, noindex]);

  return null;
};

export default SEO;