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
  },
  {
    slug: 'sustainability-composite-materials',
    title: 'The Sustainability of Composite Materials',
    category: 'Long-Tail',
    date: '2024-09-02',
    author: 'Emphz Research Division',
    summary: 'How long-lifespan composites reduce total carbon footprint compared to frequently replaced metal assets.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    content: `While the initial production of composites captures energy, their 50+ year lifespan significantly offsets the carbon cost compared to steel assets that need replacement every 10-15 years in corrosive zones.`
  },
  {
    slug: 'fire-safety-industrial-enclosures',
    title: 'Critical Fire Safety in Industrial Enclosures',
    category: 'Long-Tail',
    date: '2024-09-10',
    author: 'Emphz Safety Team',
    summary: 'Understanding UL 94 V-0 ratings and why self-extinguishing materials are non-negotiable for electrical housing.',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    content: `In high-voltage electrical distribution, the enclosure is the last line of defense. We explore why specifying UL 94 V-0 rated SMC materials is crucial for preventing fire propagation in substations.`
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

  // 5. Infrastructure Shelters
  {
    id: 'emp-shelter-001',
    name: 'Metro City Bus Shelter',
    category: ProductCategory.SHELTER,
    shortDescription: 'Vandal-resistant GRP bus shelters for urban public transport networks.',
    fullDescription: 'Our modular GRP bus shelters are designed for the modern smart city. They offer high resistance to vandalism, graffiti, and environmental wear while providing a sleek aesthetic for urban landscapes.',
    whyItExists: 'Concrete shelters crack and steel shelters rust. GRP offers a permanent, low-maintenance solution for municipal corporations.',
    typicalUsage: 'City bus stops, metro feeder stations, and campus waiting areas.',
    recommendedWhen: [
      'High-traffic urban areas',
      'Coastal cities with salt air',
      'Municipal projects requiring 20+ year life'
    ],
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/1/YI/WO/XU/3642603/frp-bus-shelter.jpg',
    specs: [
      { label: 'Dimensions', value: 'L5000 x W1500 x H2500 mm' },
      { label: 'Wind Load', value: 'Designed for 180 km/h' },
      { label: 'Seating', value: 'Integrated GRP Bench' }
    ],
    features: ['Graffiti-resistant gelcoat', 'Integrated rain gutter', 'Solar-ready roof'],
    downloads: [{ title: 'Metro Shelter Specs', type: 'PDF' }]
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
  },


  // 8. Fire Hose Cabinet
  {
    id: 'emp-safety-001',
    name: 'RedGuard Fire Hose Cabinet',
    category: ProductCategory.ENCLOSURE,
    shortDescription: 'UV-stable safety equipment housing for fire hoses and extinguishers.',
    fullDescription: 'The RedGuard series is engineered to protect vital fire safety equipment from the elements. Unlike steel cabinets that rust shut, our GRP hinges and bodies ensure the equipment is accessible when it matters most.',
    whyItExists: 'To ensure fire safety equipment is not compromised by rusted cabinet doors in outdoor settings.',
    typicalUsage: 'Refineries, outdoor industrial plants, and marine jetties.',
    recommendedWhen: [
      'Outdoor fire hydrant points',
      'Marine and offshore platforms',
      'Chemical plants with corrosive atmosphere'
    ],
    imageUrl: 'https://m.media-amazon.com/images/I/61kC-IqN+pL.jpg',
    specs: [
      { label: 'Color', value: 'Signal Red (RAL 3000)' },
      { label: 'Material', value: 'UV Stabilized GRP' },
      { label: 'Window', value: 'Break-glass or Acrylic' }
    ],
    features: ['High-visibility finish', 'Corrosion-proof hinges', 'Weather sealed'],
    downloads: [{ title: 'RedGuard Catalog', type: 'PDF' }]
  },

  // 9. Modular Panel Tank
  {
    id: 'emp-tank-001',
    name: 'Modular GRP Panel Tank',
    category: ProductCategory.CUSTOM,
    shortDescription: 'Sectional GRP water storage tanks for potable and industrial water.',
    fullDescription: 'EMPHZ modular tanks are assembled on-site using hot-pressed SMC panels. This allows for massive storage capacities even in areas with restricted access, like basements or rooftops.',
    whyItExists: 'A hygienic, algae-free alternative to concrete tanks that is easier to install than welded steel.',
    typicalUsage: 'Residential complexes, commercial buildings, and industrial fire water storage.',
    recommendedWhen: [
      'High capacity storage needed (10kL - 1000kL)',
      'Rooftop installation (Lightweight)',
      'Hygienic potable water requirement'
    ],
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2020/12/QO/QZ/IG/2456909/smc-panel-tank.jpg',
    specs: [
      { label: 'Panel Size', value: '1m x 1m / 1m x 0.5m' },
      { label: 'Standard', value: 'SS 245:1995' },
      { label: 'Reinforcement', value: 'Internal SS Tie-rods' }
    ],
    features: ['Food-grade material', 'Zero leakage design', 'Fast assembly'],
    downloads: [{ title: 'Tank Capacity Chart', type: 'PDF' }]
  },

  // 10. Instrument Sunshade
  {
    id: 'emp-inst-001',
    name: 'Instrument Sunshade S2',
    category: ProductCategory.ENCLOSURE,
    shortDescription: 'Protective canopies for field instruments and transmitters.',
    fullDescription: 'The S2 Sunshade protects sensitive field instruments from direct sunlight, rain, and physical impact. It prevents overheating of electronics and ensures accurate readings in harsh climates.',
    whyItExists: 'Prevents "LCD blackening" and overheating of transmitters in direct desert or tropical sun.',
    typicalUsage: 'Oil & Gas fields, power plants, and outdoor process industries.',
    recommendedWhen: [
      'Protecting pressure transmitters',
      'Outdoor gauge protection',
      'High UV exposure zones'
    ],
    imageUrl: 'https://cpimg.tistatic.com/08544838/b/4/FRP-Canopy-for-Instruments.jpg',
    specs: [
      { label: 'Material', value: 'Anti-static GRP' },
      { label: 'Mounting', value: '2" Pipe Mount' },
      { label: 'Wind Rating', value: 'Type tested for storms' }
    ],
    features: ['UV blocking', 'Chemical resistant', 'Lightweight'],
    downloads: [{ title: 'S2 Shade Datasheet', type: 'PDF' }]
  },

  // 11. EV Battery Shield
  {
    id: 'emp-auto-001',
    name: 'EV Battery Pack Shield',
    category: ProductCategory.CUSTOM,
    shortDescription: 'Lightweight, flame-retardant covers for electric vehicle battery packs.',
    fullDescription: 'Engineered for the automotive sector, these GRP composite shields provide impact protection and fire retardancy for EV battery packs while keeping weight to a minimum.',
    whyItExists: 'Metal shields are too heavy; standard plastics melt. GRP offers the perfect balance of heat resistance and light weight.',
    typicalUsage: 'Electric buses, 3-wheelers, and commercial EV fleets.',
    recommendedWhen: [
      'Weight reduction is critical',
      'UL 94 V0 fire rating is needed',
      'Impact protection for under-chassis'
    ],
    imageUrl: 'https://www.compositestrategies.com/wp-content/uploads/2019/11/EV-Battery-Box-Composite.jpg',
    specs: [
      { label: 'Resin', value: 'Fire Retardant Vinyl Ester' },
      { label: 'Process', value: 'RTM / Infusion' },
      { label: 'Dielectric', value: 'High strength' }
    ],
    features: ['High strength-to-weight', 'Electrical insulation', 'Thermal barrier'],
    downloads: [{ title: 'EV Automotives Guide', type: 'PDF' }]
  },

  // 12. Cable Management
  {
    id: 'emp-cable-001',
    name: 'Heavy Duty Cable Tray',
    category: ProductCategory.CUSTOM,
    shortDescription: 'Pultruded GRP cable trays for corrosive industrial environments.',
    fullDescription: 'Our GRP cable trays and ladders are manufactured using pultrusion for maximum load-bearing capacity. They are essential in chemical plants where steel trays would corrode within months.',
    whyItExists: 'To carry heavy power cables in acid/alkali rich environments without collapsing from corrosion.',
    typicalUsage: 'Chemical plants, offshore platforms, wastewater treatment plants, and tunnels.',
    recommendedWhen: [
      'Desalination plants (Chlorine)',
      'Fertilizer plants (Ammonia)',
      'Battery rooms (Acid fumes)'
    ],
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XK/QD/OM/3499709/frp-cable-trays.jpg',
    specs: [
      { label: 'Standard', value: 'NEMA FG-1' },
      { label: 'Load Class', value: 'Heavy Duty' },
      { label: 'Length', value: '3m Standard' }
    ],
    features: ['Snap-fit covers', 'Electrical transparency', 'Zero maintenance'],
    downloads: [{ title: 'Cable Support Systems', type: 'PDF' }]
  },
  // 13. UrbanCell Infrastructure
  {
    id: 'emp-uc-retail',
    name: 'UrbanCell™ RETAIL',
    category: ProductCategory.URBANCELL,
    shortDescription: 'Modular, plug-in retail hubs for smart city environments.',
    fullDescription: 'UrbanCell RETAIL is a factory-built, plug-in infrastructure cell designed for rapid deployment as retail hubs, shops, or kiosks. Built with high-durability GRP, it features glass facades and integrated thermal management for modern urban commerce.',
    whyItExists: 'Traditional brick-and-mortar retail takes months to build; UrbanCell deploys in hours with a premium aesthetic.',
    typicalUsage: 'Pop-up shops, ticket booths, information centers, and urban mini-marts.',
    recommendedWhen: [
      'Smart city projects requiring fast ROI',
      'Areas with limited construction footprints',
      'High-traffic urban zones needing premium design'
    ],
    imageUrl: '/Users/emphz/.gemini/antigravity/brain/15646346-04bb-4a12-b3af-96ae443e0327/uploaded_image_1_1766484953999.jpg',
    specs: [
      { label: 'Form Factor', value: 'Modular 3.5m x 4.0m' },
      { label: 'Shell', value: 'GRP Monocoque' },
      { label: 'Glass', value: 'Double Glazed Safety' }
    ],
    features: ['Plug-and-play electrical', 'Integrated POS ready', 'Smart locks', 'Self-cleaning coating'],
    downloads: [{ title: 'UrbanCell Retail Specs', type: 'PDF' }]
  },
  {
    id: 'emp-uc-energy',
    name: 'UrbanCell™ ENERGY',
    category: ProductCategory.URBANCELL,
    shortDescription: 'Integrated EV charging and solar hub for modern transit.',
    fullDescription: 'The UrbanCell ENERGY module combines high-capacity EV charging stations with a solar-active roof structure. It serves as both a charging point and a power management hub for smart grid integration.',
    whyItExists: 'To solve the need for aesthetic, weather-proof, and rapidly deployable EV infrastructure in cities.',
    typicalUsage: 'Parking lots, highway rest stops, and corporate campuses.',
    recommendedWhen: [
      'Transitioning to electric fleets',
      'Municipal green-energy mandates',
      'Remote sites requiring off-grid power'
    ],
    imageUrl: '/Users/emphz/.gemini/antigravity/brain/15646346-04bb-4a12-b3af-96ae443e0327/uploaded_image_1_1766484953999.jpg',
    specs: [
      { label: 'Charger', value: 'Dual 50kW DC Fast Charge' },
      { label: 'Solar Cap', value: '12-Panel HV Array' },
      { label: 'Safety', value: 'Non-conductive GRP shell' }
    ],
    features: ['Solar integration', 'Battery storage ready', 'Weather-proof GRP housing', 'Remote monitoring'],
    downloads: [{ title: 'UrbanCell Energy Guide', type: 'PDF' }]
  },
  {
    id: 'emp-uc-cold',
    name: 'UrbanCell™ COLD',
    category: ProductCategory.URBANCELL,
    shortDescription: 'Industrial-grade modular cold storage and delivery hub.',
    fullDescription: 'UrbanCell COLD provides thermally superior temperature-controlled storage cells. Ideal for last-mile food delivery or medical storage, these units use composite insulation that outperforms traditional sandwich panels.',
    whyItExists: 'To prevent the "thermal leak" common in metal-sheet cold rooms that rust in humid environments.',
    typicalUsage: 'Grocery collection points, pharmaceutical storage, and fresh food markets.',
    recommendedWhen: [
      'Strict temperature control required',
      'Coastal or high-humidity regions',
      'Food-grade hygiene standards'
    ],
    imageUrl: '/Users/emphz/.gemini/antigravity/brain/15646346-04bb-4a12-b3af-96ae443e0327/uploaded_image_1_1766484953999.jpg',
    specs: [
      { label: 'Operating Temp', value: '-20°C to +10°C' },
      { label: 'Wall Type', value: 'High-Density Composite PUF' },
      { label: 'Hygiene', value: 'FDA-compliant Gem-coat' }
    ],
    features: ['Algae-free interior', 'High R-Value insulation', 'Integrated defrost', 'Shock-resistant walls'],
    downloads: [{ title: 'UrbanCell Cold Data', type: 'PDF' }]
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
  },
  {
    id: 'cs-kochi-port',
    title: 'Port Trust Asset Protection',
    location: 'Kochi, Kerala',
    category: 'Industrial',
    challenge: 'Port electrical infrastructure faced extreme corrosion from sea spray and humidity, leading to dangerous short circuits.',
    solution: 'Deployed IP66 rated GRP Junction Boxes and custom sunshades for crane control panels.',
    outcome: 'Electrical safety incidents reduced to zero. Equipment lifespan extended by 5+ years.',
    imageUrl: 'https://images.unsplash.com/photo-1574972767078-4384dbf0687f?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.ENCLOSURE, ProductCategory.CUSTOM]
  }
];