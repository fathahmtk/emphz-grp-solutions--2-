import { Product, ProductCategory, CaseStudy, BlogPost } from './types';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Manufacturing', path: '/technology' },
  { label: 'Industries', path: '/industries' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Resources', path: '/technical' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const WHATSAPP_LINK = "https://wa.me/919037874080";

export const INDUSTRIES = [
  {
    id: 'elec-dist',
    title: 'Electrical & Power Distribution',
    category: 'Energy',
    description: 'Housing for panels, junction boxes, and meters in distribution networks.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'telecom',
    title: 'Telecom & Network Infrastructure',
    category: 'Telecom',
    description: 'Enclosures and shelters for 5G, fiber optic, and network hardware.',
    imageUrl: 'https://images.unsplash.com/photo-1544669146-6dec42bc7438?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'smart-city',
    title: 'Infrastructure & Smart Cities',
    category: 'Public',
    description: 'Kiosks, shelters, and utility boxes for urban infrastructure projects.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'water-waste',
    title: 'Water & Wastewater Facilities',
    category: 'Utility',
    description: 'Corrosion-resistant covers and tanks for treatment plants.',
    imageUrl: 'https://images.unsplash.com/photo-1523365063870-827e85c138f2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'industrial',
    title: 'Industrial Plants & Factories',
    category: 'Industrial',
    description: 'Custom GRP parts and enclosures for chemical and manufacturing units.',
    imageUrl: 'https://images.unsplash.com/photo-1516937941348-c09e554b96d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar-renew',
    title: 'Solar and Renewable Energy',
    category: 'Renewables',
    description: 'Weatherproof boxes for solar combiners and inverters in remote sites.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'grp-future-of-infrastructure',
    title: 'Why GRP is Used in Outdoor Infrastructure',
    category: 'High-Intent',
    date: '2024-08-15',
    author: 'Emphz Engineering Team',
    summary: 'A look at why GRP is often preferred over steel for enclosures and cabins in coastal or industrial sites.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921462-6870002878b6?auto=format&fit=crop&w=800&q=80',
    content: `GRP (Glass Reinforced Plastic) is becoming the standard material for outdoor infrastructure where traditional materials fail. We see this most often in coastal areas or chemical plants where steel enclosures rust through in a few years.`
  }
];

export const MOCK_PRODUCTS: Product[] = [
  // 1. GRP Electrical Enclosures
  {
    id: 'emp-encl-001',
    name: 'Industrial GRP Junction Box (J-Series)',
    category: ProductCategory.ENCLOSURE,
    shortDescription: 'Outdoor and indoor enclosures used for electrical panels, junction boxes, and meters.',
    fullDescription: 'GRP electrical enclosures manufactured by EMPHZ are used to house electrical and electronic equipment in outdoor and indoor locations. These enclosures are commonly selected where steel cabinets corrode or require frequent maintenance.',
    whyItExists: 'Practical replacement for steel where corrosion, repainting, and maintenance become recurring problems.',
    typicalUsage: 'Typical applications include electrical distribution panels, junction boxes, metering enclosures, solar inverter housings, and telecom equipment cabinets.',
    recommendedWhen: [
      'Outdoor installations',
      'Coastal and humid regions',
      'Industrial environments'
    ],
    notRecommendedWhen: [
      'Explosion-proof certification is required without additional specification'
    ],
    imageUrl: 'https://image.made-in-china.com/2f0j00UVrCiOMyLBqP/GRP-Glass-Reinforced-Polyester-Enclosure-Electrical-Distribution-Fiberglass-Enclosure-IP65.webp',
    gallery: ['https://cpimg.tistatic.com/00883297/b/6/FRP-Electric-Panel-Box.jpg'],
    specs: [
      { label: 'Material', value: 'Glass Reinforced Plastic (SMC)' },
      { label: 'Protection', value: 'IP66 Waterproof' },
      { label: 'Impact Rating', value: 'IK10 (High impact)' },
      { label: 'Fire Rating', value: 'Self-extinguishing (UL 94 V0)' }
    ],
    features: ['No rust or corrosion', 'No repainting required', 'Non-conductive body', 'UV stable outer finish'],
    downloads: [{ title: 'J-Series Datasheet', type: 'PDF' }]
  },

  // 2. Portable Toilet Units
  {
    id: 'emp-toil-001',
    name: 'Eco-San GRP Toilet Cabin',
    category: ProductCategory.PORTABLE_TOILET,
    shortDescription: 'Factory-made GRP toilet cabins for construction sites and public areas.',
    fullDescription: 'GRP portable toilet units are factory-manufactured cabins used in construction sites, public places, events, and institutions. GRP construction helps avoid corrosion and water damage common in steel toilets.',
    whyItExists: 'Avoids corrosion and water damage common in steel toilets in high-use or outdoor locations.',
    typicalUsage: 'Labor camps, construction sites, public grounds, and temporary institutions.',
    recommendedWhen: [
      'Sites requiring frequent cleaning with water',
      'Coastal areas prone to rusting',
      'Temporary installations needing quick deployment'
    ],
    notRecommendedWhen: [
      'Permanent brick-and-mortar requirements'
    ],
    imageUrl: 'https://tiimg.tistatic.com/fp/1/004/995/grp-single-portable-toilet-082.jpg',
    specs: [
      { label: 'Size', value: '1100 x 1100 x 2300 mm' },
      { label: 'Surface', value: 'Glossy Gelcoat Finish' },
      { label: 'Base', value: 'Skid Base for lifting' }
    ],
    features: ['Strong GRP shell', 'Easy to wash', 'Does not absorb odors'],
    downloads: [{ title: 'Eco-San Brochure', type: 'PDF' }]
  },

  // 3. Security Cabins
  {
    id: 'emp-cbn-001',
    name: 'Sentinel Guard Kiosk',
    category: ProductCategory.CABIN,
    shortDescription: 'GRP guard cabins for industrial, commercial, and infrastructure sites.',
    fullDescription: 'Security cabins are manufactured using GRP panels and structural components for long-term outdoor use. These cabins are commonly installed at factory gates, residential complexes, and infrastructure sites.',
    whyItExists: 'Provides an insulated, rust-free alternative to GI sheet cabins that leak or get too hot.',
    typicalUsage: 'Factory gates, residential complexes, and infrastructure construction points.',
    recommendedWhen: [
      'High rainfall areas requiring leak-proof roofs',
      'Long-term deployment at site gates',
      'Projects requiring AC-ready design'
    ],
    notRecommendedWhen: [
      'Multi-story control tower requirements'
    ],
    imageUrl: 'https://www.aradhanafrp.com/assets/img/frp-security-guard-cabin.jpg',
    specs: [
      { label: 'Windows', value: 'Sliding glass panels' },
      { label: 'Wall', value: 'PUF Insulated' },
      { label: 'Electrical', value: 'Cabling and points provided' }
    ],
    features: ['Leak proof roof', 'Resists heat', 'Easy to install'],
    downloads: [{ title: 'Sentinel Series Specs', type: 'PDF' }]
  },

  // 4. GRP Kiosks
  {
    id: 'emp-ksk-001',
    name: 'Neo-Retail Kiosk',
    category: ProductCategory.KIOSK,
    shortDescription: 'Food, retail, ticketing, and service kiosks manufactured using GRP construction.',
    fullDescription: 'GRP kiosks are used for food stalls, retail counters, ticket booths, and service points. These kiosks are manufactured as single-piece or panel-type structures depending on size and usage.',
    whyItExists: 'Quickly deployable retail and service points that do not require painting or rust treatment.',
    typicalUsage: 'Food kiosks, retail kiosks, ticket counters, and information booths.',
    recommendedWhen: [
      'Coastal areas where metal kiosks rust',
      'High mobility requirement (mobile kiosks)',
      'Custom branding via gelcoat color'
    ],
    imageUrl: 'https://tejaswi-group.com/wp-content/uploads/2025/03/Food-Retail-Kiosk-Designer-1080x675.webp',
    specs: [
      { label: 'Shutters', value: 'Hydraulic lifting type' },
      { label: 'Counters', value: 'Easy-to-clean GRP' }
    ],
    features: ['Scratch resistant', 'Custom colors', 'Easy to move'],
    downloads: [{ title: 'Retail Kiosk Catalog', type: 'PDF' }]
  },

  // 5. Modular Pods & Shelters
  {
    id: 'emp-pod-001',
    name: 'Xpod X7 Living System',
    category: ProductCategory.POD_SHELTER,
    shortDescription: 'Sleeping pods, site offices, equipment shelters, and custom GRP rooms.',
    fullDescription: 'GRP modular pods and shelters are manufactured for accommodation, site offices, and equipment housing. These units are preferred where quick installation and long service life are required.',
    whyItExists: 'Lightweight and waterproof alternative to site containers that rust and get too hot.',
    typicalUsage: 'Sleeping pods, site offices, equipment shelters, and temporary rooms.',
    recommendedWhen: [
      'Remote sites needing quick housing',
      'Areas with extreme humidity or rainfall',
      'Project-specific custom rooms'
    ],
    imageUrl: 'https://www.karmod.com/media/products/174/grp-buildings-59281.jpg',
    specs: [
      { label: 'Body', value: 'Reinforced GRP' },
      { label: 'Lifting', value: 'Integrated hook points' }
    ],
    features: ['Fully waterproof', 'Well insulated', 'Long life'],
    downloads: [{ title: 'Xpod X7 Living Guide', type: 'PDF' }]
  },

  // 6. Custom GRP Fabrication
  {
    id: 'emp-cust-001',
    name: 'Project Specific GRP Fabrication',
    category: ProductCategory.CUSTOM,
    shortDescription: 'Project-specific GRP products manufactured as per approved drawings.',
    fullDescription: 'EMPHZ undertakes custom GRP fabrication based on client drawings or jointly developed designs. Products are manufactured after drawing approval and specification finalization.',
    whyItExists: 'When standard products do not meet unique site dimensions or structural requirements.',
    typicalUsage: 'Custom enclosures, special-purpose cabins, GRP rooms, covers, and project-specific components.',
    recommendedWhen: [
      'Unique dimensions required',
      'Special resin requirements (Acid resistance)',
      'Joint engineering development needed'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587575494201-11fe74d90d38?auto=format&fit=crop&w=600&q=80',
    specs: [
      { label: 'Scope', value: 'Custom Fabrication' },
      { label: 'Standard', value: 'As per approved drawing' }
    ],
    features: ['Custom design', 'Material choice', 'Precision molding'],
    downloads: [{ title: 'Radome Design Specs', type: 'PDF' }]
  }
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-kerala-resort',
    title: 'Coastal Resort Asset Replacement',
    location: 'Kovalam, Kerala',
    category: 'Hospitality',
    challenge: 'Steel electrical boxes were rusting within 18 months because of the salty sea air, causing power failures and frequent maintenance.',
    solution: 'Replaced all outdoor boxes with GRP enclosures. Also installed GRP security cabins at the site entry points.',
    outcome: 'No rust after 3 years. No repainting or rust treatment needed since installation.',
    imageUrl: 'https://images.unsplash.com/photo-1588525287394-135b3d7c95e4?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.ENCLOSURE, ProductCategory.CABIN]
  },
  {
    id: 'cs-mysore-utility',
    title: 'Metering Protection for Urban Areas',
    location: 'Mysore, Karnataka',
    category: 'Utilities',
    challenge: 'Meters were getting damaged due to rain and heavy outdoor heat in city distribution sites.',
    solution: 'Supplied GRP kiosks with PUF insulation to keep the equipment safe and at a manageable temperature.',
    outcome: 'Meter failures were reduced. The GRP cabinets remained in good condition without any maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1617999192569-c6e7d0573934?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.KIOSK]
  }
];