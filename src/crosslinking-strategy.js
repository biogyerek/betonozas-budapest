// Keresztlinkelési Stratégiai Terv
// Térkövezés Debrecen Topical Authority Projekt

export const CROSSLINKING_STRATEGY = {
  // 1. PILLAR OLDAL - Központi hub
  pillar: {
    url: "/terkovezes-debrecen",
    title: "Térkövezés Debrecen - Szakértő Szolgáltatás",
    type: "service",
    linkingPower: 100, // Legmagasabb prioritás
    internalLinksFrom: "ALL", // Minden oldal linkel ide
    internalLinksTo: [
      "supporting-articles", // Minden támogató cikkhez
      "contact", // Kapcsolat oldalhoz
      "portfolio" // Referenciákhoz
    ]
  },

  // 2. TÁMOGATÓ CIKKEK - Topical Cluster
  supportingArticles: [
    {
      url: "/terkovezes-arak-debrecen",
      title: "Térkövezés árak Debrecenben 2025",
      type: "blog",
      keywords: ["térkövezés ár", "térkövezés költség", "debrecen árak"],
      linksTo: ["pillar", "kovezes-tipusok", "beruhazas-megtérülés"],
      linksFrom: ["pillar", "anyagok", "kivitelezes"]
    },
    {
      url: "/terkovezes-anyagok-tipusok",
      title: "Térkövezés anyagok és típusok útmutatója",
      type: "guide", 
      keywords: ["térköves típusok", "járólapok", "kő anyagok"],
      linksTo: ["pillar", "arak", "karbantartas"],
      linksFrom: ["pillar", "kivitelezes", "beruhazas"]
    },
    {
      url: "/terkovezes-kivitelezes-lepesek",
      title: "Térkövezés kivitelezése lépésről lépésre",
      type: "tutorial",
      keywords: ["térkövezés folyamat", "kivitelezés", "építés lépések"],
      linksTo: ["pillar", "anyagok", "beruhazas"],
      linksFrom: ["pillar", "arak", "hibak"]
    },
    {
      url: "/terkovezes-karbantartas-tippek",
      title: "Térkövezés karbantartása - Gyakorlati tippek",
      type: "blog",
      keywords: ["térkő tisztítás", "karbantartás", "felújítás"],
      linksTo: ["pillar", "anyagok", "hibak"],
      linksFrom: ["pillar", "arak", "kivitelezes"]
    },
    {
      url: "/terkovezes-beruhazas-megtérülés",
      title: "Térkövezés mint befektetés - Megtérülési számítás",
      type: "blog",
      keywords: ["ingatlan érték", "befektetés megtérülés", "ROI"],
      linksTo: ["pillar", "arak", "anyagok"],
      linksFrom: ["pillar", "kivitelezes", "hibak"]
    },
    {
      url: "/gyakori-terkovezes-hibak-elkeruelse",
      title: "7 gyakori térkövezési hiba és elkerülésük",
      type: "blog",
      keywords: ["térkövezés hibák", "rossz kivitelezés", "problémák"],
      linksTo: ["pillar", "kivitelezes", "karbantartas"],
      linksFrom: ["pillar", "beruhazas", "anyagok"]
    },
    {
      url: "/terkovezes-engedelyezes-hatosagi-ugyintézes",
      title: "Térkövezés engedélyezése és hatósági ügyintézés",
      type: "guide",
      keywords: ["építési engedély", "hatóság", "ügyintézés"],
      linksTo: ["pillar", "kivitelezes", "beruhazas"],
      linksFrom: ["pillar", "arak", "hibak"]
    },
    {
      url: "/modern-terkovezes-trendek-2025",
      title: "Modern térkövezési trendek 2025-ben",
      type: "blog",
      keywords: ["térkövezés trendek", "modern design", "új anyagok"],
      linksTo: ["pillar", "anyagok", "beruhazas"],
      linksFrom: ["pillar", "karbantartas", "arak"]
    },
    {
      url: "/terkovezes-vs-egyeb-burkolatok",
      title: "Térkövezés vs. egyéb udvari burkolatok összehasonlítása",
      type: "guide",
      keywords: ["burkolat típusok", "összehasonlítás", "választás"],
      linksTo: ["pillar", "anyagok", "arak"],
      linksFrom: ["pillar", "beruhazas", "trendek"]
    },
    {
      url: "/terkovezes-debrecen-referenciák-esettanulmányok",
      title: "Debreceni térkövezési referenciák és esettanulmányok",
      type: "content",
      keywords: ["referenciák", "projektek", "esettanulmányok"],
      linksTo: ["pillar", "beruhazas", "trendek"],
      linksFrom: ["pillar", "arak", "anyagok"]
    }
  ],

  // 3. TÁMOGATÓ OLDALAK
  supportingPages: [
    {
      url: "/kapcsolat",
      title: "Kapcsolat - Térkövezés Debrecen",
      type: "contact",
      linksTo: ["pillar"],
      linksFrom: ["pillar", "ALL_ARTICLES"] // Minden cikkből
    },
    {
      url: "/galeria-referenciák",
      title: "Galéria és referenciák",
      type: "content", 
      linksTo: ["pillar", "referenciák"],
      linksFrom: ["pillar", "beruhazas", "trendek"]
    }
  ]
};

// 4. KERESZTLINKELÉSI SZABÁLYOK
export const LINKING_RULES = {
  // Anchor text variációk
  anchorTextVariations: {
    pillar: [
      "térkövezés Debrecen",
      "szakértő térkövezési szolgáltatás",
      "térkövezés Debrecenben",
      "megbízható térkövező",
      "térkövezési szakértő"
    ],
    price: [
      "térkövezés árak",
      "költségkalkuláció", 
      "ár információ",
      "árajánlat kérés"
    ],
    materials: [
      "térkő típusok",
      "burkolati anyagok",
      "járólap választék",
      "kő anyagok"
    ],
    process: [
      "kivitelezési folyamat",
      "térkövezés lépései", 
      "munkafázisok",
      "építési folyamat"
    ],
    maintenance: [
      "karbantartási tippek",
      "tisztítási módszerek",
      "felújítás",
      "megóvás"
    ]
  },

  // Link elhelyezési stratégia
  linkPlacement: {
    introduction: "1-2 link a bevezető bekezdésben",
    body: "3-5 kontextuális link a törzsszövegben", 
    conclusion: "1-2 összefoglaló link",
    sidebar: "Kapcsolódó cikkek widget",
    footerCTA: "További információ call-to-action"
  },

  // Link típusok
  linkTypes: {
    contextual: "Természetes szövegkörnyezetben",
    navigational: "Navigációs menüben", 
    related: "Kapcsolódó cikkek szekcióban",
    cta: "Call-to-action gombokban",
    breadcrumb: "Breadcrumb navigációban"
  }
};

// 5. LINK BUILDING PRIORITÁS
export const PRIORITY_MATRIX = {
  high: [
    "Minden cikk → Pillar oldal",
    "Pillar → Top 3 támogató cikk",
    "Árak ↔ Anyagok ↔ Kivitelezés (háromszög)"
  ],
  medium: [
    "Támogató cikkek egymás között (topical clustering)",
    "Referenciák → Pillar",
    "Kapcsolat minden cikkből"
  ],
  low: [
    "Kiegészítő oldalak egymás között",
    "Szezonális cross-linking"
  ]
};

// 6. SEO LINK JUICE FLOW MODELL
export const LINK_AUTHORITY_FLOW = {
  pillarPage: {
    receives: "100% külső link authority",
    distributes: "60% supporting articles, 30% key pages, 10% utility"
  },
  supportingArticles: {
    receives: "Authority pillarből + külső linkek",
    distributes: "20% vissza pillarhez, 80% között elosztva"
  },
  crossLinkingDensity: {
    pillar: "8-12 belső link",
    supporting: "5-8 belső link", 
    utility: "2-4 belső link"
  }
};

// 7. AUTOMATIZÁLÁSI SZABÁLYOK
export const AUTOMATION_RULES = {
  // Új cikk hozzáadásakor
  newArticle: {
    autoLinkTo: ["pillar", "topRelevantArticles"],
    autoLinkFrom: ["pillar", "relatedByKeywords"],
    anchorTextGeneration: "contextualKeywordMatch"
  },
  
  // Link karbantartás
  maintenance: {
    brokenLinkCheck: "weekly",
    anchorTextDiversity: "monthly audit", 
    linkDistribution: "quarterly optimization"
  },

  // Schema kapcsolatok
  schemaLinking: {
    breadcrumb: "automatikus hierarchia",
    sitelinks: "pillar + top supporting",
    faq: "kereszthivatkozások FAQ válaszokban"
  }
};

// 8. HASZNÁLAT
export function generateCrossLinks(currentPage, allPages) {
  const strategy = CROSSLINKING_STRATEGY;
  const rules = LINKING_RULES;
  
  // Logika a releváns linkek generálására
  return {
    outboundLinks: getRelevantOutboundLinks(currentPage, allPages),
    anchorTexts: generateAnchorTexts(currentPage, rules.anchorTextVariations),
    linkPlacements: rules.linkPlacement
  };
}

export default {
  CROSSLINKING_STRATEGY,
  LINKING_RULES,
  PRIORITY_MATRIX,
  LINK_AUTHORITY_FLOW,
  AUTOMATION_RULES,
  generateCrossLinks
};