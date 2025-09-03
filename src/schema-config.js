// Schema konfigurációs fájl - automatikus betöltés a Cloud számára
export const SCHEMAS = {
  // Local Business Schema
  LOCAL_BUSINESS: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "",
    "description": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "postalCode": "",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "",
      "longitude": ""
    },
    "telephone": "",
    "openingHours": [],
    "url": "",
    "priceRange": "",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "",
      "reviewCount": ""
    }
  },

  // Article Schema
  ARTICLE: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "",
    "description": "",
    "author": {
      "@type": "Person",
      "name": ""
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "",
    "dateModified": "",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ""
    },
    "image": {
      "@type": "ImageObject",
      "url": "",
      "width": "",
      "height": ""
    }
  },

  // FAQ How-to Schema kombináció
  FAQ_HOWTO: {
    "faq": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": []
    },
    "howto": {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "",
      "description": "",
      "image": "",
      "totalTime": "",
      "estimatedCost": "",
      "supply": [],
      "tool": [],
      "step": []
    }
  }
};

// Oldaltípusok és hozzájuk tartozó schema konfigurációk
export const PAGE_TYPE_SCHEMAS = {
  // Szolgáltatás oldalak - teljes schema lefedettség
  "service": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq],
  
  // Blog bejegyzések - minden blog gyakorlati útmutató FAQ-val
  "blog": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // Útmutató/Tutorial oldalak - lépésről lépésre + FAQ
  "tutorial": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // FAQ oldalak - tisztán GYIK
  "faq": [SCHEMAS.FAQ_HOWTO.faq],
  
  // Komplex útmutatók - teljes schema spektrum
  "guide": [SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // Helyi szolgáltatás oldalak - helyi üzlet + gyakorlati tanácsok
  "local-service": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq, SCHEMAS.FAQ_HOWTO.howto],
  
  // Termék/szolgáltatás bemutató - üzleti + tartalmi
  "product": [SCHEMAS.LOCAL_BUSINESS, SCHEMAS.ARTICLE, SCHEMAS.FAQ_HOWTO.faq],
  
  // Általános tartalmi oldalak - csak cikk
  "content": [SCHEMAS.ARTICLE],
  
  // Kapcsolat/Elérhetőség oldalak - helyi üzlet info
  "contact": [SCHEMAS.LOCAL_BUSINESS]
};

// Schema generáló függvény
export function getSchemas(pageType) {
  const schemas = PAGE_TYPE_SCHEMAS[pageType];
  if (!schemas) {
    console.warn(`Ismeretlen oldaltípus: ${pageType}. Alapértelmezett Article schema használata.`);
    return [SCHEMAS.ARTICLE];
  }
  return schemas;
}

// Schema kitöltő függvény
export function fillSchema(schemaTemplate, data) {
  const schema = JSON.parse(JSON.stringify(schemaTemplate));
  
  // Rekurzív kitöltés
  function fillRecursive(obj, dataObj) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          if (dataObj[key] && Array.isArray(dataObj[key])) {
            obj[key] = dataObj[key];
          }
        } else {
          fillRecursive(obj[key], dataObj[key] || {});
        }
      } else if (obj[key] === "" && dataObj[key]) {
        obj[key] = dataObj[key];
      }
    }
  }
  
  fillRecursive(schema, data);
  return schema;
}

// Automatikus schema generálás oldaltípus alapján
export function generateSchemasForPage(pageType, contentData) {
  const requiredSchemas = getSchemas(pageType);
  const filledSchemas = [];
  
  for (const schema of requiredSchemas) {
    const filledSchema = fillSchema(schema, contentData);
    filledSchemas.push(filledSchema);
  }
  
  return filledSchemas;
}

// Export a Cloud számára
export default {
  SCHEMAS,
  PAGE_TYPE_SCHEMAS,
  getSchemas,
  fillSchema,
  generateSchemasForPage
};