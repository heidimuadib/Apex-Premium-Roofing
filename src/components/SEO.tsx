import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  pagePath?: string;
  schemaType?: "LocalBusiness" | "RoofingService" | "WebSite";
  customSchema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  pagePath = "",
  schemaType = "LocalBusiness",
  customSchema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Apex Premium Roofing`;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // 3. Inject Open Graph Meta Tags
    const ogTags = [
      { property: "og:title", content: `${title} | Apex Premium Roofing` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://apex-premium-roofing.com${pagePath}` },
      { property: "og:site_name", content: "Apex Premium Roofing" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" },
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", tag.content);
    });

    // 4. Inject JSON-LD Schema
    const existingScript = document.getElementById("seo-schema-script");
    if (existingScript) {
      existingScript.remove();
    }

    const defaultSchema =
      schemaType === "LocalBusiness"
        ? {
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            "name": "Apex Premium Roofing",
            "image": "https://images.unsplash.com/photo-1632829172927-348532038581?auto=format&fit=crop&w=800&q=80",
            "priceRange": "$$$$",
            "email": "inquiries@apex-premium-roofing.com",
            "telephone": "+61 2 8000 0000",
            "url": "https://apex-premium-roofing.com",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Level 32, 200 George Street",
                "addressLocality": "Sydney",
                "addressRegion": "NSW",
                "postalCode": "2000",
                "addressCountry": "AU"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "One Canada Square, Canary Wharf",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "postalCode": "E14 5AB",
                "addressCountry": "GB"
              }
            ],
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Sydney, NSW, Australia" },
              { "@type": "AdministrativeArea", "name": "Melbourne, VIC, Australia" },
              { "@type": "AdministrativeArea", "name": "Brisbane, QLD, Australia" },
              { "@type": "AdministrativeArea", "name": "Perth, WA, Australia" },
              { "@type": "AdministrativeArea", "name": "London, Greater London, United Kingdom" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "584"
            }
          }
        : {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title,
            "provider": {
              "@type": "RoofingContractor",
              "name": "Apex Premium Roofing"
            },
            "description": description,
            "areaServed": ["AU", "GB"]
          };

    const finalSchema = customSchema || defaultSchema;

    const script = document.createElement("script");
    script.id = "seo-schema-script";
    script.type = "application/ld+json";
    script.text = JSON.stringify(finalSchema);
    document.head.appendChild(script);

    return () => {
      const cleanupScript = document.getElementById("seo-schema-script");
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [title, description, pagePath, schemaType, customSchema]);

  return null;
}
