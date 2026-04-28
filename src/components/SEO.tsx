import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  schema?: any;
}

const SEO = ({
  title,
  description,
  keywords = "web design platform, web development services, modern website design agency, UI/UX design company, custom web solutions, DenveX",
  ogTitle,
  ogDescription,
  ogImage = "/projects/project5.jpg",
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
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', window.location.href);

    // Twitter Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical || window.location.href);

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
