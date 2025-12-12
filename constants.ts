import { Product, ProductCategory, CaseStudy, BlogPost } from './types';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Technology', path: '/technology' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Technical Center', path: '/technical' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const WHATSAPP_LINK = "https://wa.me/919037874080";

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'grp-future-of-infrastructure',
    title: 'Why GRP Is the Future of Portable Infrastructure',
    category: 'High-Intent',
    date: '2024-08-15',
    author: 'Emphz Engineering Team',
    summary: 'Explore the fundamental advantages of Glass Reinforced Plastic (GRP) over traditional materials like steel and concrete, especially in harsh environments.',
    imageUrl: 'https://images.unsplash.com/photo-1581092921462-6870002878b6?auto=format&fit=crop&w=800&q=80',
    content: `In the world of industrial and public infrastructure, the choice of material is paramount. For decades, steel and concrete have been the default options. However, in environments plagued by corrosion, moisture, and chemical exposure, these traditional materials reveal their weaknesses, leading to costly maintenance cycles and premature failure.\n\nEnter Glass Reinforced Plastic (GRP), a composite material engineered to thrive where others falter. GRP's inherent resistance to rust and corrosion makes it the definitive choice for coastal installations, chemical plants, and water treatment facilities. Unlike steel, it does not require painting or protective coatings, offering a maintenance-free lifespan of over 25 years.\n\nFurthermore, GRP's lightweight nature—up to 40% lighter than steel for equivalent strength—revolutionizes logistics and installation. A GRP kiosk or enclosure can be transported and installed with minimal heavy machinery, dramatically reducing project timelines and costs, especially in remote or difficult-to-access locations. This combination of durability and practicality positions GRP not just as an alternative, but as the successor to traditional materials for all future-proof infrastructure projects.`
  },
  {
    slug: 'grp-vs-steel-enclosures',
    title: 'GRP vs. Steel: Which Is Better for Electrical Enclosures?',
    category: 'High-Intent',
    date: '2024-08-05',
    author: 'Technical Department',
    summary: 'A head-to-head comparison of GRP and steel for protecting sensitive electrical components, focusing on safety, longevity, and total cost of ownership.',
    imageUrl: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?auto=format&fit=crop&w=800&q=80',
    content: `When specifying electrical enclosures, engineers have a critical choice to make: GRP or steel? While mild steel and stainless steel have been industry standards, GRP offers a compelling set of advantages that address the core weaknesses of metal.\n\n**Corrosion:** This is GRP's home ground. In saline or chemical-rich atmospheres, a steel enclosure's integrity is compromised from day one. GRP is chemically inert and will not rust, ensuring a perfect seal (IP66/67) for decades.\n\n**Electrical Safety:** Steel is a conductor. A fault within a steel enclosure can energize the body, creating a severe shock hazard. GRP is a natural insulator, eliminating this risk and often simplifying earthing requirements.\n\n**Weight & Installation:** GRP's high strength-to-weight ratio makes it far easier to handle and install. This is a significant advantage for wall-mounted or pole-mounted applications, reducing both labor costs and structural load requirements.\n\nWhile steel may offer higher initial impact resistance (IK rating), modern GRP composites achieve IK10 ratings, making them suitable for all but the most extreme physical abuse scenarios. When considering the total cost of ownership, including maintenance and replacement, GRP emerges as the clear winner for long-term, reliable asset protection.`
  },
  {
    slug: 'portable-toilets-for-construction',
    title: 'Best Portable Toilet Setup for Construction Sites',
    category: 'High-Intent',
    date: '2024-07-28',
    author: 'Project Solutions Team',
    summary: "An essential guide for project managers on selecting durable, hygienic, and low-maintenance GRP portable toilets for demanding construction environments.",
    imageUrl: 'https://images.unsplash.com/photo-1599057571583-696441b8b688?auto=format&fit=crop&w=800&q=80',
    content: `Construction sites demand robust and reliable facilities. GRP portable toilets are engineered to withstand the rigors of a busy site, offering significant benefits over standard plastic units.\n\n**Durability:** The GRP shell is resistant to impacts, scratches, and UV degradation, preventing the fading and brittleness common in cheaper alternatives. They are built for a long service life across multiple projects.\n\n**Hygiene:** The smooth, non-porous gelcoat finish of a GRP cabin is incredibly easy to clean and sanitize. It doesn't absorb odors and is resistant to graffiti and chemical cleaners.\n\n**Flexibility:** Our GRP units can be configured with various options, from basic waterless bio-toilets for remote sites to executive cabins with freshwater flushing, sinks, and solar-powered lighting for site offices. This modularity allows you to create a welfare setup that matches your project's specific needs and scale.`
  },
  {
    slug: 'grp-pods-eco-tourism',
    title: 'How GRP Pods Are Transforming Eco-Tourism',
    category: 'High-Intent',
    date: '2024-07-15',
    author: 'Hospitality Division',
    summary: 'Discover how the minimal environmental impact and high durability of GRP sleeping pods make them the perfect solution for sustainable luxury in nature.',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    content: `The eco-tourism industry faces a unique challenge: providing comfortable, even luxurious, accommodation with minimal disturbance to the natural environment. GRP sleeping and resort pods, like our Xpod series, are the ideal solution.\n\n**Low-Impact Installation:** The lightweight monocoque shell of a GRP pod can be craned or even helicoptered into position, requiring minimal foundation work. This preserves the natural landscape and allows for placement in stunning, remote locations that are inaccessible to traditional construction.\n\n**Energy Efficiency:** The GRP composite shell, often insulated with a PU foam core, provides excellent thermal insulation. This reduces the energy required for heating and cooling, a critical factor for off-grid or solar-powered resorts.\n\n**Longevity in Nature:** A GRP pod is impervious to rot, termites, and moisture. It will not warp or degrade in humid forests or on salty coastlines, ensuring a long, maintenance-free lifespan that respects the principle of sustainable investment.`
  },
  {
    slug: 'low-maintenance-bus-shelters',
    title: 'Low-Maintenance Bus Shelters for Municipal Projects',
    category: 'High-Intent',
    date: '2024-06-30',
    author: 'Public Infrastructure Dept.',
    summary: 'A look at why municipal governments are turning to GRP for public transport shelters to combat vandalism, corrosion, and high maintenance budgets.',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    content: 'Public infrastructure is a long-term investment, and maintenance costs are a primary concern for municipal authorities. GRP bus shelters offer a "fit and forget" solution that dramatically reduces lifetime costs.\n\n**Vandalism Resistance:** GRP has high impact strength and a through-pigmented color that cannot be scratched off. Graffiti can be easily removed from the gelcoat surface without damaging the material.\n\n**Weatherproof:** GRP will never rust, rot, or corrode. This is a critical advantage over steel shelters, especially in cities with high rainfall or coastal climates. The UV-stabilized material ensures it will not become brittle or fade under years of sun exposure.\n\n**Modular Design:** Our GRP bus shelters can be delivered in a flat-pack, modular format for quick and easy assembly on-site, minimizing disruption to public spaces. This makes them ideal for large-scale urban mobility projects with tight deadlines.'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'emp-xpod-x7',
    name: 'Xpod X7 Smart Cabin',
    category: ProductCategory.SMART_CABIN,
    shortDescription: 'Futuristic GRP monocoque living pod with integrated voice automation and panoramic smart glass.',
    fullDescription: 'The Xpod X7 redefines modular luxury. Built on a high-strength GRP monocoque chassis, this plug-and-play living unit is designed for rapid deployment in resorts, rooftops, and remote locations. It features floor-to-ceiling smart privacy glass, voice-controlled lighting and curtains, and a complete suite of integrated entertainment systems. The seamless white GRP shell reflects solar heat, keeping the interior cool even in tropical climates.',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    // Added for GLB Testing as per diagnosis action plan
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613553422381-05d97858c49d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Structure', value: 'Monocoque GRP Shell' },
      { label: 'Dimensions', value: '6.5m x 3.2m x 3.0m' },
      { label: 'Glazing', value: 'Switchable Smart Glass' },
      { label: 'Power', value: 'Hybrid (Grid + Solar)' },
      { label: 'Weight', value: '3200 kg (Crane Liftable)' },
    ],
    features: ['Voice Controlled Automation', 'Projector & Surround Sound', 'Smart Privacy Glass', 'Zero Maintenance Exterior', 'Rot-Proof Construction'],
    downloads: [
      { title: 'Xpod X7 Brochure', type: 'PDF' },
      { title: 'Site Prep Guide', type: 'PDF' },
      { title: 'Electrical Schematics', type: 'CAD' }
    ],
    accessories: ['Solar Roof Package', 'Bio-Digester Tank', 'External Decking Module', 'Star-Gazing Skylight'],
    annotations: [
      { id: 'glass', position: [0, 1.5, 1.1], title: 'Smart Glass', description: 'Switchable opacity for instant privacy.' },
      { id: 'shell', position: [1.5, 2, 0], title: 'Monocoque GRP', description: 'Seamless composite shell for zero leaks.' },
      { id: 'deck', position: [0, -0.1, 1.5], title: 'WPC Decking', description: 'Rot-proof composite decking integrated into chassis.' }
    ]
  },
  {
    id: 'emp-pt-exec',
    name: 'Executive GRP Portable Toilet',
    category: ProductCategory.PORTABLE_TOILET,
    shortDescription: 'Premium portable toilet cabin with modern amenities for events and executive sites.',
    fullDescription: 'Our Executive GRP Portable Toilet offers superior hygiene and comfort. The robust GRP shell is easy to clean and resistant to vandalism. It comes equipped with a ceramic toilet, freshwater flushing system, a wash basin, and optional solar-powered lighting.',
    imageUrl: 'https://images.unsplash.com/photo-1599057571583-696441b8b688?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Base Size', value: '4ft x 4ft' },
      { label: 'Material', value: 'Insulated GRP Panels' },
      { label: 'Water Tank', value: '150L Fresh, 250L Waste' },
      { label: 'Features', value: 'Flush, Sink, Mirror, Vent' },
    ],
    features: ['Freshwater flush system', 'Anti-slip flooring', 'Lockable door with indicator', 'Easy to transport and install', 'Optional waterless bio-toilet'],
    downloads: [ { title: 'Portable Toilet Brochure', type: 'PDF' } ],
    accessories: ['Solar Lighting Kit', 'Hand Sanitizer Dispenser', 'Exhaust Fan']
  },
   {
    id: 'emp-bs-metro',
    name: 'Metro GRP Bus Shelter',
    category: ProductCategory.BUS_SHELTER,
    shortDescription: 'Durable and maintenance-free GRP bus shelter for modern urban transport projects.',
    fullDescription: 'The Metro GRP Bus Shelter is designed for public spaces, offering protection from the elements with a modern aesthetic. The composite structure is fire retardant, UV resistant, and will not corrode, making it ideal for any climate. It features integrated seating and space for advertising panels.',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Dimensions', value: '4.5m x 1.5m x 2.8m' },
      { label: 'Frame', value: 'Pultruded GRP Sections' },
      { label: 'Roof', value: 'Translucent GRP Sheet' },
      { label: 'Seating', value: 'Integrated GRP Bench' },
    ],
    features: ['Corrosion and rust proof', 'Vandal resistant', 'Integrated seating', 'Advertising panel space', 'Low maintenance'],
    downloads: [ { title: 'Bus Shelter Datasheet', type: 'PDF' } ],
    accessories: ['Solar LED Lighting', 'Timetable Display Case', 'Waste Bin']
  },
  {
    id: 'emp-kiosk-101',
    name: 'Modular Utility Kiosk M2',
    category: ProductCategory.KIOSK,
    shortDescription: 'Expandable modular GRP kiosk for substations and metering units.',
    fullDescription: 'Our Modular Utility Kiosk M2 is designed for rapid deployment in infrastructure projects. The modular panel design allows for flat-packing to site and quick assembly. Excellent thermal insulation properties protect internal switchgear from extreme heat typical in Southern India.',
    imageUrl: 'https://images.unsplash.com/photo-1617999192569-c6e7d0573934?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Construction', value: 'Sandwich Panel GRP' },
      { label: 'Thermal Insulation', value: 'PU Foam Core' },
      { label: 'Wind Load', value: '120 km/h' },
      { label: 'Color', value: 'RAL 7035 (Light Grey)' },
    ],
    features: ['Modular assembly', 'High thermal efficiency', 'Customizable cutouts', 'Graffiti resistant'],
    downloads: [
      { title: 'Kiosk Brochure', type: 'PDF' },
      { title: 'Structural Specs', type: 'PDF' }
    ],
    accessories: ['Exhaust Fan Unit', 'LED Lighting Pack', 'Fire Extinguisher Mount', 'Anti-Vandal Lock'],
    annotations: [
      { id: 'roof', position: [0, 2.9, 0], title: 'Conical Roof', description: 'Self-cleaning design with overhang for rain protection.' },
      { id: 'base', position: [0, -0.1, 0], title: 'Reinforced Plinth', description: 'Heavy-duty steel-reinforced composite base.' }
    ]
  },
  {
    id: 'emp-cab-v1',
    name: 'Security Guard Villa',
    category: ProductCategory.CABIN,
    shortDescription: 'All-weather GRP security cabin with integrated electricals.',
    fullDescription: 'A turnkey solution for industrial gatehouses. The seamless GRP shell ensures zero leakage during monsoons. Comes pre-wired with lighting and ventilation fans.',
    imageUrl: 'https://images.unsplash.com/photo-1588525287394-135b3d7c95e4?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Size', value: '4ft x 4ft or 6ft x 6ft' },
      { label: 'Flooring', value: 'Marine Ply with Vinyl' },
      { label: 'Windows', value: 'Sliding Aluminum' },
    ],
    features: ['Plug and play', 'Rot proof', 'Aesthetically pleasing'],
    downloads: [
      { title: 'Cabin Floorplans', type: 'PDF' }
    ],
    accessories: ['Air Conditioning Support', 'Custom Desk Unit', 'External Floodlights', 'Bio-Toilet Add-on']
  },
  {
    id: 'emp-fire-cab1',
    name: 'RedGuard Fire Hose Cabinet',
    category: ProductCategory.FIRE_SAFETY,
    shortDescription: 'UV-stable, bright red GRP cabinet for fire hose reels and extinguishers.',
    fullDescription: 'Designed for high-visibility and extreme durability, the RedGuard cabinet protects vital fire safety equipment from the elements. Unlike steel cabinets that rust shut in coastal areas, our GRP hinges and locks remain functional for decades. The UV-stabilized red gelcoat ensures the color does not fade even under intense direct sunlight.',
    imageUrl: 'https://images.unsplash.com/photo-1621253456100-e1b12b5087a5?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Color', value: 'Signal Red (RAL 3000)' },
      { label: 'Material', value: 'Fire Retardant GRP' },
      { label: 'Window', value: 'Acrylic / Wired Glass' },
      { label: 'Mounting', value: 'Wall / Post / Recessed' },
    ],
    features: ['Corrosion Proof', 'High Visibility', 'Stainless Steel Hardware', 'Weatherproof Seal'],
    downloads: [
      { title: 'Fire Cabinet Specs', type: 'PDF' },
      { title: 'Dimensions Drawing', type: 'CAD' }
    ],
    accessories: ['Break-Glass Key Box', 'Stand Mounting Kit', 'Internal Hose Reel']
  },
  {
    id: 'emp-tank-mod',
    name: 'Modular GRP Panel Tank',
    category: ProductCategory.WATER_STORAGE,
    shortDescription: 'Sectional hot-press molded water tanks for potable water storage.',
    fullDescription: 'Our modular GRP tanks are assembled from hot-pressed SMC panels, allowing for customizable capacities from 1,000 to 1,000,000 liters. Certified for potable water storage, the smooth internal surface prevents algae growth and bacteria buildup. The modular design makes it perfect for installation in basements or rooftops with restricted access.',
    imageUrl: 'https://images.unsplash.com/photo-1632516421426-529075e7a934?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Panel Size', value: '1m x 1m / 1m x 0.5m' },
      { label: 'Process', value: 'SMC Hot Press' },
      { label: 'Certification', value: 'WRAS Approved' },
      { label: 'Insulation', value: 'Pre-insulated PU Foam' },
    ],
    features: ['Hygienic Storage', 'Zero Leakage', 'Easy Assembly', 'Thermal Insulation'],
    downloads: [
      { title: 'Tank Capacity Chart', type: 'PDF' },
      { title: 'Assembly Manual', type: 'PDF' }
    ],
    accessories: ['Internal Ladder (GRP)', 'Level Indicator', 'Roof Vent', 'Manhole Cover']
  },
  {
    id: 'emp-shade-s2',
    name: 'Instrument Sunshade S2',
    category: ProductCategory.INDUSTRIAL_PROTECTION,
    shortDescription: 'Protective GRP canopy for field instruments and transmitters.',
    fullDescription: 'Essential for Oil & Gas refineries, this GRP sunshade protects expensive instrumentation (pressure transmitters, gauges, analyzers) from direct solar radiation and heavy rain. The material is anti-static and fire-retardant, making it safe for hazardous zones.',
    imageUrl: 'https://images.unsplash.com/photo-1560942484-91e34a02d8a4?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Material', value: 'Anti-static GRP' },
      { label: 'Thickness', value: '4mm - 6mm' },
      { label: 'Wind Load', value: '160 km/h' },
      { label: 'Mounting', value: '2-inch Pipe Mount' },
    ],
    features: ['UV Blocking', 'Impact Resistant', 'Maintenance Free', 'Chemical Resistant'],
    downloads: [
      { title: 'Sunshade Datasheet', type: 'PDF' },
      { title: 'Mounting Details', type: 'CAD' }
    ],
    accessories: ['SS316 Mounting Bracket', 'Side Walls', 'Rear Mounting Plate']
  },
  {
    id: 'emp-auto-ev1',
    name: 'EV Battery Pack Shield',
    category: ProductCategory.AUTOMOBILE,
    shortDescription: 'Lightweight fire-retardant GRP composite cover for EV battery modules.',
    fullDescription: 'Engineered for the next generation of electric mobility, this GRP battery shield offers a 40% weight reduction compared to steel equivalents while maintaining superior impact resistance. It is rigorously tested for fire retardancy (UL94 V-0) and provides excellent thermal insulation to manage battery temperatures effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1552658514-a9557ee6f1b3?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Material', value: 'Fire Retardant GRP' },
      { label: 'Fire Rating', value: 'UL94 V-0' },
      { label: 'Weight', value: '12 kg/sqm' },
      { label: 'Impact Strength', value: 'High Energy Absorption' },
    ],
    features: ['Lightweight Construction', 'Thermal Insulation', 'Corrosion Free', 'Electrically Non-Conductive'],
    downloads: [
      { title: 'Automotive Datasheet', type: 'PDF' },
      { title: 'Crash Test Report', type: 'PDF' }
    ],
    accessories: ['Mounting Brackets', 'Thermal Paste Kit', 'Sealant Gasket']
  },
  {
    id: 'emp-enc-001',
    name: 'E-Series IP66 Coastal Enclosure',
    category: ProductCategory.ENCLOSURE,
    shortDescription: 'Heavy-duty GRP enclosure designed for high-salinity coastal environments.',
    fullDescription: 'The E-Series represents the pinnacle of protection for sensitive electrical equipment in harsh environments. Specifically engineered for the coastal climates of Kerala and Karnataka, this GRP enclosure offers superior corrosion resistance compared to stainless steel. It features a UV-stabilized formulation to prevent chalking and degradation under intense tropical sun.',
    imageUrl: 'https://images.unsplash.com/photo-1621947081720-86970823b77a?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Material', value: 'Hot Press Molded GRP' },
      { label: 'IP Rating', value: 'IP66 / IP67' },
      { label: 'IK Rating', value: 'IK10' },
      { label: 'Fire Rating', value: 'UL94 V-0' },
      { label: 'Dimensions', value: '600 x 400 x 250 mm' },
    ],
    features: ['Non-corrosive', 'Maintenance free', 'High impact strength', 'Electrically insulating'],
    downloads: [
      { title: 'Datasheet E-Series', type: 'PDF' },
      { title: 'Installation Guide', type: 'PDF' },
      { title: 'CAD Drawing (DWG)', type: 'CAD' }
    ],
    accessories: ['Pole Mounting Kit (SS304)', 'Wall Brackets', 'Internal Mounting Plate', 'Padlock Hasp'],
    annotations: [
      { id: 'door', position: [0, 1.5, 0.6], title: 'Double Seal Door', description: 'EPDM gasket ensures IP66 weatherproof rating.' },
      { id: 'body', position: [0, 1.5, -0.5], title: 'SMC Body', description: 'Hot press molded GRP with IK10 impact strength.' }
    ]
  },
  {
    id: 'emp-tray-hd',
    name: 'Heavy Duty Cable Tray',
    category: ProductCategory.STRUCTURAL,
    shortDescription: 'Pultruded GRP cable trays for chemical plants and offshore platforms.',
    fullDescription: 'Manufactured using the pultrusion process, these cable trays offer the longitudinal strength of steel with the corrosion resistance of high-grade vinylester resin. Ideal for supporting heavy power cables in highly corrosive industrial atmospheres like refineries, fertilizer plants, and jetties.',
    imageUrl: 'https://images.unsplash.com/photo-1664273388755-2239d5718a38?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Process', value: 'Pultrusion' },
      { label: 'Resin', value: 'Isophthalic / Vinylester' },
      { label: 'Load Class', value: 'NEMA 20C' },
      { label: 'Length', value: '3m Standard' },
    ],
    features: ['Zero Maintenance', 'High Load Bearing', 'UV Stabilized', 'Fire Retardant'],
    downloads: [
      { title: 'Load Span Tables', type: 'PDF' },
      { title: 'Chemical Resistance Chart', type: 'PDF' }
    ],
    accessories: ['Coupler Plates', 'SS316 Hardware', 'Cover Clips', 'Divider Strip']
  },
  {
    id: 'emp-grat-m4',
    name: 'Anti-Slip Walkway Grating',
    category: ProductCategory.STRUCTURAL,
    shortDescription: 'Molded GRP grating with concave anti-slip surface for industrial safety.',
    fullDescription: 'Our molded GRP gratings provide the ultimate safety solution for wet and oily environments. The integral concave surface ensures positive traction for footwear, significantly reducing slip-and-fall accidents. Available in various mesh sizes and resin systems (Ortho, Iso, Vinyl) to suit specific chemical exposure requirements.',
    imageUrl: 'https://images.unsplash.com/photo-1579930359708-f58c7e997a38?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Mesh Size', value: '38 x 38 mm' },
      { label: 'Thickness', value: '38 mm' },
      { label: 'Surface', value: 'Concave / Gritted' },
      { label: 'Color', value: 'Yellow / Grey / Green' },
    ],
    features: ['Anti-Slip', 'Bi-directional Strength', 'Easy Cutting on Site', 'Non-Sparking'],
    downloads: [
      { title: 'Grating Selection Guide', type: 'PDF' },
      { title: 'Fixing Clip Detail', type: 'CAD' }
    ],
    accessories: ['M-Clips (SS316)', 'C-Clips', 'Rubber Feet', 'Pedestal Jacks']
  },
  {
    id: 'emp-jb-x5',
    name: 'Ex-Proof Junction Box',
    category: ProductCategory.JUNCTION_BOX,
    shortDescription: 'Explosion-proof GRP junction box for petrochemical and industrial zones.',
    fullDescription: 'Certified for Zone 1 and Zone 2 hazardous areas, this junction box ensures safety in volatile environments. The carbon-loaded GRP material prevents static buildup, making it ideal for refineries and chemical plants.',
    imageUrl: 'https://images.unsplash.com/photo-1665518204787-81816e0261b0?auto=format&fit=crop&w=800&q=80',
    specs: [
      { label: 'Certification', value: 'ATEX / IECEx' },
      { label: 'Material', value: 'Carbon-loaded GRP' },
      { label: 'Temp Range', value: '-50°C to +110°C' },
    ],
    features: ['Anti-static', 'Flameproof', 'Chemical resistant'],
    downloads: [
      { title: 'ATEX Certificate', type: 'PDF' }
    ],
    accessories: ['Cable Glands (Ex-Rated)', 'Din Rail Kit', 'Earth Tag', 'Breather Drain']
  }
];

export const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-kerala-resort',
    title: 'Coastal Resort Infrastructure Upgrade',
    location: 'Kovalam, Kerala',
    category: 'Hospitality',
    challenge: 'Traditional steel switchgear boxes were corroding within 18 months due to high salinity spray, causing frequent power outages and safety hazards.',
    solution: 'Replaced all outdoor assets with Emphz E-Series GRP Enclosures (IP66). Installed custom GRP Security Cabins at all entry points.',
    outcome: 'Zero corrosion reported after 3 years. Maintenance costs reduced by 100%. Enhanced aesthetic appeal matched the resort theme.',
    imageUrl: 'https://images.unsplash.com/photo-1588525287394-135b3d7c95e4?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.ENCLOSURE, ProductCategory.CABIN]
  },
  {
    id: 'cs-mysore-utility',
    title: 'Urban Substation Protection',
    location: 'Mysore, Karnataka',
    category: 'Utilities',
    challenge: 'High vandalism rates and extreme heat damaging sensitive metering equipment in urban distribution zones.',
    solution: 'Deployed 50 units of Modular Utility Kiosk M2 with IK10 impact rating and high-grade PU foam insulation.',
    outcome: 'Equipment failure rate dropped by 85% due to thermal management. No break-ins reported in the pilot phase.',
    imageUrl: 'https://images.unsplash.com/photo-1617999192569-c6e7d0573934?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.KIOSK]
  },
  {
    id: 'cs-kochi-port',
    title: 'Port Trust Junction Boxes',
    location: 'Kochi Port Trust',
    category: 'Industrial',
    challenge: 'Need for chemical-resistant and waterproof junction boxes for fuel handling jetty operations.',
    solution: 'Installed ATEX-certified Ex-Proof Junction Boxes with custom cable gland entries.',
    outcome: 'Full compliance with safety audits. Reliable operation during monsoon flooding events.',
    imageUrl: 'https://images.unsplash.com/photo-1665518204787-81816e0261b0?auto=format&fit=crop&w=800&q=80',
    relatedProductCategories: [ProductCategory.JUNCTION_BOX]
  }
];

export const INDUSTRIES = [
  { title: 'Utilities' },
  { title: 'Rail' },
  { title: 'Automotive' },
  { title: 'Water' },
  { title: 'Telecom' },
  { title: 'Oil & Gas' },
  { title: 'Solar' },
  { title: 'Fire Safety' },
];