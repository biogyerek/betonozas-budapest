import { contentRelationships, anchorTexts } from '../data/internalLinks.js';

// Kulcsszavak és a hozzájuk tartozó slug-ok
const keywordMappings = {
  // Alapozás kategória
  'alapozás': 'alapozas-budapest',
  'alapozási': 'alapozas-budapest',
  'alapozási szolgáltatások': 'alapozas-budapest',
  'lemezalap': 'lemezalapok-budapest',
  'lemezalapok': 'lemezalapok-budapest',
  'lemezalapos': 'lemezalapok-budapest',
  'pontalap': 'pontalapok-budapest',
  'pontalapok': 'pontalapok-budapest',
  'pont alapok': 'pontalapok-budapest',
  'sávalapos': 'savalapok-budapest',
  'sávalapok': 'savalapok-budapest',
  'sáv alapok': 'savalapok-budapest',
  
  // Aljzat kategória
  'aljzat betonozás': 'aljzatbetonozas-budapest',
  'aljzatok': 'aljzatbetonozas-budapest',
  'estrich': 'estrich-aljzat-budapest',
  'estrich aljzat': 'estrich-aljzat-budapest',
  'padlófűtés aljzat': 'padlofutes-aljzat-budapest',
  'padlófűtéses aljzat': 'padlofutes-aljzat-budapest',
  
  // Speciális betonok
  'speciális betonozás': 'specialis-betonozas-budapest',
  'gyorskötő beton': 'gyorskoto-beton-budapest',
  'gyorskötő': 'gyorskoto-beton-budapest',
  'könnyűbeton': 'konnyubeton-budapest',
  'könnyű beton': 'konnyubeton-budapest',
  'vízálló beton': 'vizallo-beton-budapest',
  'vízálló': 'vizallo-beton-budapest',
  
  // Technológiák
  'betonozási technológiák': 'betonozasi-technologiak',
  'betonozási technológia': 'betonozasi-technologiak',
  'zsaluzás': 'zsaluzas-budapest',
  'zsaluzat': 'zsaluzas-budapest',
  'betonpumpa': 'betonpumpa-szolgaltatas-budapest',
  
  // Szolgáltatások
  'járda betonozás': 'jarda-betonozas-budapest',
  'terasz betonozás': 'terasz-betonozas-budapest',
  'udvar betonozás': 'udvar-betonozas-budapest',
  'kocsibeálló betonozás': 'kocsibeallo-betonozas-budapest',
  'ipari padló': 'ipari-padlobetonozas-budapest',
  'ipari padlók': 'ipari-padlobetonozas-budapest',
  
  // Blog témák
  'téli betonozás': 'teli-betonozas',
  'betonkeverés': 'betonkeveres-titkai',
  'beton adalékanyagok': 'beton-adalekanyagok',
  'adalékanyagok': 'beton-adalekanyagok',
  'repedések': 'repedesek-okai',
  'beton repedések': 'repedesek-okai',
  'szerkezeti problémák': 'szerkezeti-problemak',
  'beton javítás': 'beton-javitas',
  'betonjavítás': 'beton-javitas',
  'rehabilitáció': 'rehabilitacio-megerosites',
  'dilatációs hézagok': 'dilatacios-hezagok',
  'hézagok': 'dilatacios-hezagok',
  'minőségbiztosítás': 'minosegbiztositas',
  'utókezelés': 'utokezeles-fontossaga'
};

// Már linkelt szavak nyomon követése egy bekezdésben
let linkedWordsInParagraph = new Set();

// Reset a bekezdés elején
export function resetParagraphLinks() {
  linkedWordsInParagraph.clear();
}

// Ellenőrzi, hogy egy szó már linkelt-e ebben a bekezdésben
function isAlreadyLinked(word) {
  return linkedWordsInParagraph.has(word.toLowerCase());
}

// Megjelöli egy szót linkeltként
function markAsLinked(word) {
  linkedWordsInParagraph.add(word.toLowerCase());
}

// Anchor szöveg generálás változatossággal
function getVariedAnchorText(slug, originalText) {
  const texts = anchorTexts[slug];
  if (!texts) return originalText;
  
  // Random kiválasztás a 3 variáció közül
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// Szöveg feldolgozás természetes linkeléssel
export function processContentForLinks(content, currentSlug, maxLinksPerParagraph = 2) {
  resetParagraphLinks();
  
  // Split paragraphs to handle links per paragraph
  const paragraphs = content.split(/\n\s*\n/);
  
  return paragraphs.map(paragraph => {
    resetParagraphLinks();
    let processedParagraph = paragraph;
    let linksInThisParagraph = 0;
    
    // Prioritási sorrend: hosszabb kifejezések előbb
    const sortedKeywords = Object.keys(keywordMappings).sort((a, b) => b.length - a.length);
    
    for (const keyword of sortedKeywords) {
      if (linksInThisParagraph >= maxLinksPerParagraph) break;
      
      const targetSlug = keywordMappings[keyword];
      
      // Ne linkeljük önmagunkra
      if (targetSlug === currentSlug) continue;
      
      // Ne linkeljünk már linkelt szavakat
      if (isAlreadyLinked(keyword)) continue;
      
      // Regex a teljes szó megtalálásához (word boundaries)
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      
      if (regex.test(processedParagraph)) {
        // Használjuk a variált anchor szöveget
        const anchorText = getVariedAnchorText(targetSlug, keyword);
        const linkHtml = `<a href="/${targetSlug}" class="text-primary-600 hover:text-primary-700 underline">${anchorText}</a>`;
        
        // Csak az első előfordulást cseréljük le
        processedParagraph = processedParagraph.replace(regex, linkHtml);
        
        markAsLinked(keyword);
        linksInThisParagraph++;
        
        // Reset regex lastIndex
        regex.lastIndex = 0;
      }
    }
    
    return processedParagraph;
  }).join('\n\n');
}

// Kapcsolódó cikkek lekérése egy adott slug-hoz
export function getRelatedArticles(currentSlug, limit = 3) {
  const relationships = contentRelationships[currentSlug];
  if (!relationships) return [];
  
  const relatedSlugs = [
    ...(relationships.mainTopics || []),
    ...(relationships.related || [])
  ].slice(0, limit);
  
  return relatedSlugs.map(slug => ({
    slug,
    anchorText: getVariedAnchorText(slug, slug.replace(/-/g, ' '))
  }));
}

// Kontextuális linkek beszerzése (sidebar vagy kapcsolódó tartalom blokkokhoz)
export function getContextualLinkSuggestions(currentSlug, type = 'related') {
  const relationships = contentRelationships[currentSlug];
  if (!relationships || !relationships[type]) return [];
  
  return relationships[type].map(slug => ({
    slug,
    url: `/${slug}`,
    title: getVariedAnchorText(slug, slug.replace(/-/g, ' ')),
    anchorText: getVariedAnchorText(slug, slug.replace(/-/g, ' '))
  }));
}

// Smart link density számítás (ne túl sok link legyen)
export function calculateOptimalLinkCount(textLength) {
  // Kb. 150-200 szóként 1 link
  const words = textLength / 6; // Átlagos szóhossz becslés
  return Math.max(1, Math.floor(words / 175));
}

// Debug funkció - melyik kulcsszavak találhatók egy szövegben
export function findPotentialLinks(content) {
  const foundKeywords = [];
  
  Object.keys(keywordMappings).forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    if (regex.test(content)) {
      foundKeywords.push({
        keyword,
        targetSlug: keywordMappings[keyword]
      });
    }
  });
  
  return foundKeywords;
}