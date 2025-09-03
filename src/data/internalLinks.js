// Internal linking structure for cross-referencing content
// Based on blogPosts.js and all_links.txt analysis

export const contentRelationships = {
  // Alapozás kategória kapcsolatok
  "alapozas-budapest": {
    mainTopics: ["lemezalapok-budapest", "pontalapok-budapest", "savalapok-budapest"],
    related: ["aljzatbetonozas-budapest", "betonozasi-technologiak", "zsaluzas-budapest"],
    supporting: ["alapozas-lepései", "betonelem-gyartas"]
  },
  
  "lemezalapok-budapest": {
    mainTopics: ["pontalapok-budapest", "savalapok-budapest"],
    related: ["alapozas-budapest", "aljzatbetonozas-budapest", "zsaluzas-budapest"],
    supporting: ["alapozas-lepései", "dilatacios-hezagok"]
  },
  
  "pontalapok-budapest": {
    mainTopics: ["lemezalapok-budapest", "savalapok-budapest"], 
    related: ["alapozas-budapest", "betonozasi-technologiak"],
    supporting: ["alapozas-lepései", "betonelem-gyartas"]
  },
  
  "savalapok-budapest": {
    mainTopics: ["alapozas-budapest", "lemezalapok-budapest", "pontalapok-budapest"],
    related: ["aljzatbetonozas-budapest", "zsaluzas-budapest"],
    supporting: ["alapozas-lepései", "dilatacios-hezagok"]
  },

  // Aljzatkészítés kapcsolatok
  "aljzatbetonozas-budapest": {
    mainTopics: ["estrich-aljzat-budapest", "padlofutes-aljzat-budapest"],
    related: ["alapozas-budapest", "ipari-padlobetonozas-budapest"],
    supporting: ["padlofutes-betonozas", "betoncsiszolas-budapest"]
  },
  
  "estrich-aljzat-budapest": {
    mainTopics: ["aljzatbetonozas-budapest", "padlofutes-aljzat-budapest"],
    related: ["ipari-padlobetonozas-budapest", "betoncsiszolas-budapest"],
    supporting: ["padlofutes-betonozas", "betonozasi-technologiak"]
  },
  
  "padlofutes-aljzat-budapest": {
    mainTopics: ["estrich-aljzat-budapest", "padlofutes-betonozas"],
    related: ["aljzatbetonozas-budapest", "ipari-padlobetonozas-budapest"],
    supporting: ["betonozasi-technologiak", "dilatacios-hezagok"]
  },

  // Ipari megoldások
  "ipari-padlobetonozas-budapest": {
    mainTopics: ["ipari-padlobetonok", "ipari-padloburkolatok"],
    related: ["aljzatbetonozas-budapest", "estrich-aljzat-budapest"],
    supporting: ["betoncsiszolas-budapest", "specialis-betonozas-budapest"]
  },

  // Speciális betonok
  "specialis-betonozas-budapest": {
    mainTopics: ["gyorskoto-beton-budapest", "konnyubeton-budapest", "vizallo-beton-budapest"],
    related: ["betonozasi-technologiak", "ipari-padlobetonozas-budapest"],
    supporting: ["beton-adalekanyagok", "betonkeveres-titkai"]
  },
  
  "gyorskoto-beton-budapest": {
    mainTopics: ["konnyubeton-budapest", "vizallo-beton-budapest"],
    related: ["specialis-betonozas-budapest", "betonpumpa-szolgaltatas-budapest"],
    supporting: ["beton-adalekanyagok", "teli-betonozas"]
  },
  
  "konnyubeton-budapest": {
    mainTopics: ["gyorskoto-beton-budapest", "vizallo-beton-budapest"],
    related: ["specialis-betonozas-budapest", "betonozasi-technologiak"],
    supporting: ["beton-adalekanyagok", "betonelem-gyartas"]
  },
  
  "vizallo-beton-budapest": {
    mainTopics: ["gyorskoto-beton-budapest", "konnyubeton-budapest"],
    related: ["specialis-betonozas-budapest", "vizszigeteles-betonozas"],
    supporting: ["beton-adalekanyagok", "kulso-beton-feluletek-vedjetek"]
  },

  // Technológiák
  "betonozasi-technologiak": {
    mainTopics: ["zsaluzas-budapest", "betonpumpa-szolgaltatas-budapest"],
    related: ["alapozas-budapest", "specialis-betonozas-budapest"],
    supporting: ["betonelem-gyartas", "nagy-magassagu-betonozas"]
  },
  
  "zsaluzas-budapest": {
    mainTopics: ["betonozasi-technologiak", "zsaluzat-anyagok-osszehasonlitas"],
    related: ["alapozas-budapest", "betoncsiszolas-budapest"],
    supporting: ["betonelem-gyartas", "dilatacios-hezagok"]
  },

  // Általános szolgáltatások
  "jarda-betonozas-budapest": {
    mainTopics: ["terasz-betonozas-budapest", "udvar-betonozas-budapest"],
    related: ["kocsibeallo-betonozas-budapest", "kulso-beton-feluletek-vedjetek"],
    supporting: ["vizelvezetes-betonozott-teruleten", "beton-csuszasmentesites"]
  },
  
  "terasz-betonozas-budapest": {
    mainTopics: ["terasz-betonozas", "terasz-tervezes"],
    related: ["jarda-betonozas-budapest", "udvar-betonozas-budapest"],
    supporting: ["vizelvezetes-betonozott-teruleten", "kulso-beton-feluletek-vedjetek"]
  },
  
  "udvar-betonozas-budapest": {
    mainTopics: ["jarda-betonozas-budapest", "terasz-betonozas-budapest"],
    related: ["kocsibeallo-betonozas-budapest", "vizelvezetes-betonozott-teruleten"],
    supporting: ["dilatacios-hezagok", "kulso-beton-feluletek-vedjetek"]
  },
  
  "kocsibeallo-betonozas-budapest": {
    mainTopics: ["kocsibeallo-meretek", "jarda-betonozas-budapest"],
    related: ["terasz-betonozas-budapest", "udvar-betonozas-budapest"],
    supporting: ["alapozas-budapest", "dilatacios-hezagok"]
  },

  // Blog posts kapcsolatok
  "teli-betonozas": {
    mainTopics: ["nyari-betonozas-vedelem", "kulso-beton-feluletek-vedjetek"],
    related: ["gyorskoto-beton-budapest", "beton-adalekanyagok"],
    supporting: ["betonkeveres-titkai", "minosegbiztositas"]
  },
  
  "betonkeveres-titkai": {
    mainTopics: ["beton-adalekanyagok", "minosegbiztositas"],
    related: ["teli-betonozas", "specialis-betonozas-budapest"],
    supporting: ["szerkezeti-problemak"]
  },
  
  "beton-adalekanyagok": {
    mainTopics: ["betonkeveres-titkai", "specialis-betonozas-budapest"],
    related: ["gyorskoto-beton-budapest", "vizallo-beton-budapest"],
    supporting: ["minosegbiztositas", "utokezeles-fontossaga"]
  },
  
  "repedesek-okai": {
    mainTopics: ["szerkezeti-problemak", "beton-javitas"],
    related: ["rehabilitacio-megerosites", "dilatacios-hezagok"],
    supporting: ["minosegbiztositas", "utokezeles-fontossaga"]
  },
  
  "szerkezeti-problemak": {
    mainTopics: ["repedesek-okai", "beton-javitas"],
    related: ["rehabilitacio-megerosites", "minosegbiztositas"],
    supporting: ["betonkeveres-titkai", "utokezeles-fontossaga"]
  },
  
  "beton-javitas": {
    mainTopics: ["rehabilitacio-megerosites", "repedesek-okai"],
    related: ["szerkezeti-problemak", "minosegbiztositas"],
    supporting: ["beton-adalekanyagok", "dilatacios-hezagok"]
  },
  
  "rehabilitacio-megerosites": {
    mainTopics: ["beton-javitas", "szerkezeti-problemak"],
    related: ["repedesek-okai", "minosegbiztositas"],
    supporting: ["betonelem-gyartas", "koltsegoptimalizalas"]
  }
};

// Function to get related links for a given slug
export function getInternalLinks(slug, type = 'related', limit = 3) {
  const relationships = contentRelationships[slug];
  if (!relationships || !relationships[type]) return [];
  
  return relationships[type].slice(0, limit);
}

// Function to get contextual links (for embedding within content)
export function getContextualLinks(slug) {
  const relationships = contentRelationships[slug];
  if (!relationships) return {};
  
  return {
    primary: relationships.mainTopics || [],
    secondary: relationships.related || [],
    supporting: relationships.supporting || []
  };
}

// SEO-friendly anchor text suggestions for internal links
export const anchorTexts = {
  "alapozas-budapest": ["alapozási szolgáltatások", "szakértő alapozás", "budapesti alapozás"],
  "lemezalapok-budapest": ["lemezalap készítés", "monolit lemezalapok", "lemezalapos alapozás"],
  "pontalapok-budapest": ["pontalap készítés", "fúrt pontalapok", "mélység alapozás"],
  "savalapok-budapest": ["sávalapos alapozás", "hagyományos sávalapok", "falazó alapok"],
  "aljzatbetonozas-budapest": ["aljzat betonozás", "sima aljzatok", "burkolható aljzat"],
  "estrich-aljzat-budapest": ["estrich aljzat", "önterülő estrich", "cementestrich"],
  "padlofutes-aljzat-budapest": ["padlófűtés aljzat", "fűtött aljzat", "hővezető aljzat"],
  "specialis-betonozas-budapest": ["speciális betonozás", "egyedi betonmegoldások", "különleges betonok"],
  "gyorskoto-beton-budapest": ["gyorskötő beton", "gyors betonozás", "sürgősségi betonozás"],
  "vizallo-beton-budapest": ["vízálló beton", "víztiszta betonok", "medence betonozás"],
  "betonozasi-technologiak": ["modern betonozási technológiák", "professzionális betonozás", "betonozási eljárások"],
  "zsaluzas-budapest": ["zsaluzási szolgáltatások", "rendszerzsaluzás", "beton zsaluzás"],
  "repedesek-okai": ["betonrepedések okai", "repedések megelőzése", "beton repedés"],
  "beton-javitas": ["betonjavítás", "szerkezet javítás", "beton helyreállítás"],
  "betonkeveres-titkai": ["helyes betonkeverés", "tökéletes betonkeverék", "keverési technikák"],
  "beton-adalekanyagok": ["beton adalékanyagok", "betonkeverék javítás", "speciális adalékok"]
};

// Function to get anchor text for a link
export function getAnchorText(slug, index = 0) {
  const texts = anchorTexts[slug];
  if (!texts || !texts[index]) return slug.replace(/-/g, ' ');
  return texts[index];
}