import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title,
  description,
  keywords = "web design platform, web development services, modern website design agency, UI/UX design company, custom web solutions, DenveX",
  ogTitle,
  ogDescription,
  ogImage = "/relogo.png",
  canonical,
  schema
}: SEOProps) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (attribute: string, attrValue: string, content: string, contentAttr: string = "content") => {
      let tag = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute(contentAttr, content);
    };

    // Update Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // OG Tags
    updateMetaTag('property', 'og:site_name', 'DenveX');
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', 'website');

    // Make sure og:url uses www.denvex.in
    let finalOgUrl = window.location.href;
    try {
      const urlObj = new URL(finalOgUrl);
      if (urlObj.hostname === 'denvex.in') {
        urlObj.hostname = 'www.denvex.in';
      }
      finalOgUrl = urlObj.toString();
    } catch (e) {
      finalOgUrl = 'https://www.denvex.in';
    }
    updateMetaTag('property', 'og:url', finalOgUrl);

    // Twitter Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', 'DenveX');
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    
    let finalCanonical = canonical || window.location.href;
    try {
      const urlObj = new URL(finalCanonical);
      if (urlObj.hostname === 'denvex.in') {
        urlObj.hostname = 'www.denvex.in';
      }
      finalCanonical = urlObj.toString();
    } catch (e) {
      finalCanonical = 'https://www.denvex.in';
    }
    canonicalTag.setAttribute('href', finalCanonical);

    // Structured Data (Schema)
    if (schema) {
      const existingScript = document.getElementById('json-ld-schema');
      if (existingScript) {
        existingScript.innerHTML = JSON.stringify(schema);
      } else {
        const script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, schema]);

  return null;
};

export default SEO;
