import { Product, TeamMember, TimelineEvent, WineType } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop"; 
// Using a high-quality vineyard stock image to represent Rock Lodge Vineyard

export const PRODUCTS: Product[] = [
  {
    id: 'brut-classic-nv',
    name: 'Brut Classic NV',
    type: WineType.SPARKLING,
    price: 28.00,
    vintage: 'NV',
    grapeComposition: '58% Chardonnay, 29% Pinot Meunier, 13% Pinot Noir',
    tastingNotes: 'Crisp apple & citrus with creamy brioche; balanced, long refreshing finish.',
    awards: ['Gold & Best in Class (CSWWC 2023)', 'CSWWC 2016 Gold'],
    description: 'Crafted from a classic Champagne blend and aged on lees for at least 1–2 years, this is Plumpton’s flagship sparkling. Hand-picked grapes, whole-bunch pressed; base wines fermented separately in stainless steel.',
    image: 'https://images.unsplash.com/photo-1594145070972-e5f8d169c735?auto=format&fit=crop&q=80&w=800', // Mock bottle
  },
  {
    id: 'brut-rose-nv',
    name: 'Brut Rosé NV',
    type: WineType.SPARKLING,
    price: 30.00,
    vintage: 'NV',
    grapeComposition: 'Pinot Noir, Pinot Meunier',
    tastingNotes: 'White peach & strawberry; dry, crisp acidity with delicate persistent mousse.',
    awards: ['Bronze (WineGB 2024)', 'CSWWC 2018 Gold'],
    description: 'Described as a “superb marriage of freshness and finesse”, this dry rosé has crisp acidity and a fine mousse. Flavor profile: white peach and strawberry notes, with subtle brioche creaminess.',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'brut-reserve-2017',
    name: 'Brut Reserve',
    type: WineType.SPARKLING,
    price: 35.00,
    vintage: '2017',
    grapeComposition: 'Riesling, Seyval Blanc, Pinot Blanc, Regner',
    tastingNotes: 'Rich and complex: aromas of yellow plum, pear, brioche; caramel & nutmeg notes.',
    awards: ['Silver (WineGB 2022)'],
    pairing: 'Nuts, antipasti, desserts',
    description: 'A special cuvée blending unusual grapes for sparkling, showcasing Plumpton’s experimental edge. Aged ~5 years on lees. Notably, the dosage uses a local brandy.',
    image: 'https://images.unsplash.com/photo-1621644085448-c3093952f01f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'charmat-nv',
    name: 'Plumpton Estate Charmat',
    type: WineType.SPARKLING,
    price: 22.00,
    vintage: '2024',
    grapeComposition: 'Reichensteiner, Chardonnay, Pinot Noir, Ortega',
    tastingNotes: 'Fresh and fruity: vibrant aromas of apple & citrus blossom; lively effervescence.',
    description: 'A new product aimed at a fresher, fruit-driven style of sparkling wine, fermented in pressurized tanks (like Prosecco). An easy-drinking sparkling wine.',
    image: 'https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: 'bacchus-reserve-2023',
    name: 'Bacchus Reserve',
    type: WineType.STILL_WHITE,
    price: 19.50,
    vintage: '2023',
    grapeComposition: '100% Bacchus',
    tastingNotes: 'Aromatic & elegant: notes of dried apricots, honeysuckle, lime; creamy finish.',
    pairing: 'Grilled chicken, poached fish, salads',
    description: 'A special "Reserve" selection. Only 324 bottles produced. Fermented with an advanced technique by Vinalchemy to lengthen the finish.',
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: 'rock-lodge-white-2023',
    name: 'Rock Lodge White',
    type: WineType.STILL_WHITE,
    price: 16.00,
    vintage: '2023',
    grapeComposition: 'Ortega, Bacchus, Regner',
    tastingNotes: 'Bright & floral: elderflower, grapefruit, lime peel; well-rounded and vibrant.',
    pairing: 'Seafood canapés, Asian dishes',
    description: 'A blend of varieties suited to cooler climates from the Rock Lodge Vineyard. Extensive blending trials conducted by students and the winemaking team.',
    image: 'https://images.unsplash.com/photo-1572569693059-7a3297a78a62?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rock-lodge-rose-2024',
    name: 'Rock Lodge Rosé',
    type: WineType.STILL_ROSE,
    price: 16.00,
    vintage: '2024',
    grapeComposition: 'Reichensteiner, Pinot Meunier, Pinot Noir, Rondo',
    tastingNotes: 'Summer fruits: uplifting strawberry, peach, gooseberry aromas; fresh and balanced.',
    pairing: 'Seafood, salads',
    description: 'A field blend rosé from Rock Lodge Vineyard. Grapes are harvested by students each year. Perfect on its own in warm weather.',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rock-lodge-red-2023',
    name: 'Rock Lodge Red',
    type: WineType.STILL_RED,
    price: 17.50,
    vintage: '2023',
    grapeComposition: 'Dornfelder, Pinot Noir, Acolon, Rondo',
    tastingNotes: 'Light & juicy: aromas of plum, cranberry, dark fruits; soft tannins.',
    pairing: 'Tomato-based dishes, English cheddar',
    description: 'A blend highlighting cooler-climate red varietals. Chillable red for summer. The style is reminiscent of a very light Pinot or a German red.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
  }
];

export const HISTORY: TimelineEvent[] = [
  { year: '1960s', title: 'Rock Lodge Vineyard Planted', description: 'One of Plumpton’s primary vineyards was first planted in East Sussex.' },
  { year: '1988', title: 'Wine Programme Initiated', description: 'Plumpton College launched its Wine Division. Chris Foss began teaching two small rows of vines.' },
  { year: '2014', title: 'Wine Research Centre Opened', description: 'Inaugurated by HRH The Duchess of Cornwall. The UK’s first-ever MSc in Viticulture & Oenology launched.' },
  { year: '2023', title: 'Best in Class Gold', description: 'Plumpton Estate Brut Classic NV won a Gold medal and "Best in Class" at CSWWC.' },
  { year: '2025', title: 'Sustainability Leadership', description: 'Nearly four decades of wine education, with hundreds of graduates influencing the English wine renaissance.' }
];

export const TEAM: TeamMember[] = [
  { name: 'Sam Linter', role: 'Director of Wine', description: 'Former MD & Head Winemaker at Bolney Estate; Chair of WineGB. Pioneered UK wine tourism and sustainability.' },
  { name: 'Deepika Koushik', role: 'Head Winemaker', description: 'International winemaking experience (USA & Burgundy); award-winning enologist. Introduced Vinalchemy for Bacchus Reserve.' },
  { name: 'David Blaker', role: 'Vineyard Manager', description: 'Oversees 10 ha of vineyards, ensuring quality grapes and teaching viticulture. Has global vineyard experience (NZ, USA).' },
  { name: 'Sarah Midgley', role: 'Winemaking Lecturer', description: 'Advocates sustainable winemaking. Leads wine apprenticeships and mentors students in the winery.' },
];