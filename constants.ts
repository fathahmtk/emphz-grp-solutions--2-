import { Product, ProductCategory, CaseStudy, BlogPost } from './types';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
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
    shortDescription: 'Premium GRP monocoque cabin with smart automation - perfect for resorts, glamping sites, and rooftop installations.',
    fullDescription: 'The Xpod X7 represents the pinnacle of modular living space engineering, combining advanced composite manufacturing with cutting-edge smart home technology. Constructed using a single-piece GRP monocoque chassis manufactured via Resin Transfer Molding (RTM), this turnkey solution eliminates all potential leak points and structural weaknesses inherent in traditional panel-based construction. The seamless shell is fabricated from isophthalic polyester resin reinforced with E-glass fiber in a 40:60 resin-to-fiber ratio, achieving exceptional strength-to-weight performance with a total unit weight of just 3200 kg—enabling crane or even helicopter deployment in remote locations. The exterior gelcoat is UV-stabilized with titanium dioxide pigmentation, providing superior solar reflectance (SRI >78) that maintains interior temperatures 8-12°C cooler than conventional structures in tropical climates without active cooling. Each unit features floor-to-ceiling electrochromic smart glass panels (switchable from transparent to opaque in under 3 seconds) for instant privacy control, integrated voice automation for lighting, climate, and entertainment systems, and a premium 4K projector with surround sound. The composite floor system utilizes marine-grade plywood with vinyl covering, while the integrated WPC (Wood-Plastic Composite) decking is rot-proof and maintenance-free for 25+ years. Factory-finished with complete electrical, plumbing, and HVAC systems pre-installed, the Xpod X7 can be deployed and operational within 4 hours of delivery. Certified to withstand wind loads up to 150 km/h and seismic activity up to Zone IV, this unit is engineered for permanent or semi-permanent installation in challenging environments. Ideal applications include eco-resorts, glamping sites, rooftop extensions in urban areas, temporary luxury accommodation for events, site offices for remote construction projects, and emergency housing. The hybrid power system supports both grid connection and off-grid solar operation with battery backup, making it perfect for sustainable tourism developments. With zero maintenance requirements for the exterior shell and a design life exceeding 40 years, the Xpod X7 delivers unmatched total cost of ownership compared to traditional construction methods.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOub2oG1EihitBFUwF9AUR0PXrwoeSe-yfKf7GLI2JRsuJpw2K5Ew8eYtrmixZu_mpDFreoX9XS7ws_DZf1WFmMTPeQkgJ6-3Dw4xeaYSAzvRRm3KqjY6bIO7x23nYf39z3P-27mVlRzxRnJMM5cQJ_aw=w1563-h879-s-no-gm?authuser=0',
    // Added for GLB Testing as per diagnosis action plan
    modelUrl: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    gallery: [
      'https://lh3.googleusercontent.com/pw/AP1GczOub2oG1EihitBFUwF9AUR0PXrwoeSe-yfKf7GLI2JRsuJpw2K5Ew8eYtrmixZu_mpDFreoX9XS7ws_DZf1WFmMTPeQkgJ6-3Dw4xeaYSAzvRRm3KqjY6bIO7x23nYf39z3P-27mVlRzxRnJMM5cQJ_aw=w1563-h879-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMAwEyda-VatlopWLADNQaXs2ac5qXUBGyj127pjaQNQX1ovYq7FZLeSHxttDZHdHTitg8V4nvvU5F0Ad4SypnZnvXC0wKmqomtms1jkFrTREFrcXNhwBxdoojhP2ciD6fBA2dhWu5mtxELeCChbHPerw=w1563-h879-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMpO460jYx94eD8HEyGiPrJ0ea--4ru7cDN-zzbgx0KaLGug6YehZZVIzzn2U1QnE8hsfGln4KuW1oJjiLNZQmIsa73Cr1DevyUW5i81y1YuCPqtd8-7gLHUhUHv0eU3vFiheNfrc5g58c-cqZGv21uyg=w1563-h879-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPDRXHhmo1DelLxi0HtftJnSmJ5IkdKr2Ul0o4WqNdZC0aJLGTf3RDD6NY95soy12tjT-9X5MXLRdCBt8plfP21vC68xJgU31pGM52ih8yBsDP2UzyWWShp8haDaNLGCv-EGnHQMuwNSVEJe7G288whig=w1563-h879-s-no-gm?authuser=0'
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
    shortDescription: 'Premium GRP portable toilet with freshwater flush - ideal for construction sites, events, and executive facilities.',
    fullDescription: 'EMPHZ Executive Portable Toilets represent the gold standard in temporary sanitation infrastructure, engineered specifically for demanding construction environments, corporate events, and executive facilities where hygiene and durability are non-negotiable. The robust shell is constructed from hot-press molded GRP composite panels with a smooth, non-porous gelcoat finish that prevents bacterial adhesion and odor absorption—a critical advantage over conventional HDPE plastic units that become porous and retain odors after repeated use. Our proprietary resin formulation includes antimicrobial additives and UV stabilizers that ensure the unit maintains its structural integrity and appearance even after years of exposure to harsh weather conditions, from monsoon rains to desert heat. The 4ft x 4ft base footprint is optimized for stability while remaining compact enough for tight site access, with a total weight of just 180 kg allowing for manual repositioning by two workers or forklift transport. Each unit features a full-size ceramic WC with a freshwater flush system (150L fresh water capacity, 250L waste holding tank) that provides up to 200 flushes between servicing—significantly reducing maintenance frequency compared to chemical toilets. The integrated stainless steel wash basin with mirror, soap dispenser, and paper towel holder ensures complete hand hygiene facilities in a single compact unit. Ventilation is provided through a roof-mounted passive vent stack that creates natural airflow, eliminating odors without requiring electrical power. The anti-slip vinyl flooring is chemically bonded to the GRP base, preventing delamination and providing secure footing even in wet conditions. The lockable door features a robust stainless steel latch with an external occupancy indicator (red/green) for user privacy and convenience. Optional upgrades include a 20W solar panel with LED lighting for off-grid operation, an exhaust fan for enhanced ventilation in high-use scenarios, and a hand sanitizer dispenser for additional hygiene. The modular design allows units to be stacked 3-high for transportation, reducing logistics costs by 60% compared to non-stackable alternatives. Deployment is rapid—a single unit can be positioned and operational in under 15 minutes. Ideal applications include construction sites (meeting OSHA sanitation requirements), outdoor events and festivals, temporary site offices, emergency disaster relief, and executive facilities at remote locations. With a design life exceeding 15 years and virtually zero maintenance requirements beyond routine cleaning and waste servicing, EMPHZ Executive Portable Toilets deliver the lowest total cost of ownership in the temporary sanitation category. Available in standard white or custom RAL colors to match corporate branding requirements.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMe1mwOA84BIJHtR5Bmlm2Y59AP-X4R0c-xrWMKdq3PTwxcwl3JKGVtTucHulwZC7fvPFGgSG9JOHxRFG7HgNvZksxRPnBM43HKmghY8xFC119g3rlfoQw6keBieXkY0ieeipHFXt8ae0tpNw3ULflq5g=w879-h879-s-no-gm?authuser=0',
    specs: [
      { label: 'Base Size', value: '4ft x 4ft' },
      { label: 'Material', value: 'Insulated GRP Panels' },
      { label: 'Water Tank', value: '150L Fresh, 250L Waste' },
      { label: 'Features', value: 'Flush, Sink, Mirror, Vent' },
    ],
    features: ['Freshwater flush system', 'Anti-slip flooring', 'Lockable door with indicator', 'Easy to transport and install', 'Optional waterless bio-toilet'],
    downloads: [{ title: 'Portable Toilet Brochure', type: 'PDF' }],
    accessories: ['Solar Lighting Kit', 'Hand Sanitizer Dispenser', 'Exhaust Fan']
  },
  {
    id: 'emp-bs-metro',
    name: 'Metro GRP Bus Shelter',
    category: ProductCategory.BUS_SHELTER,
    shortDescription: 'Vandal-resistant GRP bus shelter with integrated seating - designed for Indian urban transport infrastructure.',
    fullDescription: 'The Metro GRP Bus Shelter is a purpose-engineered solution for Indian urban public transport infrastructure, designed to withstand the unique challenges of high-traffic municipal environments including extreme weather, vandalism, and minimal maintenance budgets. The structural frame utilizes pultruded GRP I-beam and channel sections manufactured through continuous pultrusion with vinylester resin and E-glass rovings, achieving a tensile strength of 350 MPa—comparable to structural steel—while weighing 75% less. This lightweight construction enables installation by a 4-person crew without heavy machinery, reducing deployment costs and minimizing disruption to public spaces. The frame is inherently corrosion-proof, eliminating the rust and degradation that plagues steel shelters in coastal cities like Mumbai, Chennai, and Kochi where saline air accelerates metal corrosion. The translucent GRP roof panels (3mm thickness) are manufactured from UV-stabilized polyester resin with 30% light transmission, providing natural illumination while blocking 99% of harmful UV radiation and offering complete protection from monsoon rains (tested to withstand 300mm/hour rainfall intensity). The roof structure is engineered with a 15-degree pitch for self-cleaning and rapid water drainage, preventing pooling and mosquito breeding. Integrated GRP benches are molded with a concave anti-slip surface and feature through-pigmented color that cannot be scratched or defaced—a critical advantage in high-vandalism areas. The bench design supports up to 400 kg distributed load and is ergonomically contoured for commuter comfort during extended wait times. Side and back panels are constructed from 6mm GRP sheets with a smooth gelcoat finish that resists graffiti—spray paint and marker can be removed with standard solvents without damaging the surface. The modular panel design incorporates dedicated mounting points for backlit advertising displays (standard size: 1200mm x 1800mm), enabling municipal authorities to generate revenue through advertising contracts that can offset installation costs within 3-5 years. Optional features include integrated LED lighting powered by rooftop solar panels (20W capacity), digital display boards for real-time bus arrival information, and CCTV camera mounting brackets for enhanced security. The shelter is designed for flat-pack delivery with all components fitting in a standard 20-foot container, reducing shipping costs by 40% compared to pre-assembled units. On-site assembly requires only basic hand tools and can be completed in 6-8 hours by semi-skilled labor following our detailed installation manual. Foundation requirements are minimal—four concrete plinths (300mm x 300mm x 450mm depth) provide adequate anchoring for wind loads up to 120 km/h. Unlike steel shelters that require annual repainting, rust treatment, and structural inspections, EMPHZ GRP shelters are genuinely maintenance-free for their entire 25+ year design life, requiring only periodic cleaning with water and mild detergent. The fire-retardant resin formulation meets UL94 V-0 classification, ensuring compliance with public safety regulations. Available in any RAL color to match municipal branding guidelines, with popular choices including RAL 5015 (Sky Blue), RAL 7035 (Light Grey), and custom city-specific color schemes. Ideal for Smart City projects, BRTS corridors, metro feeder routes, and municipal bus networks across India and the Middle East. With proven installations in over 50 Indian cities, the Metro GRP Bus Shelter represents the future of sustainable, low-maintenance public infrastructure.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczO3L_xurkDK4HJR7YzwvNc7v8yjrFUoaaQ_wTIcmUXHEAzLKIm6J26KGchF9DTAqmCkVUnGV5_o7o13CVoNoGrhUfBhyerd5jL5nA1KQQeoURTOLcdpCM1oO9JJ91xy8q1KWMg0S5tBQaSveFNLXGR1Gw=w586-h879-s-no-gm?authuser=0',
    specs: [
      { label: 'Dimensions', value: '4.5m x 1.5m x 2.8m' },
      { label: 'Frame', value: 'Pultruded GRP Sections' },
      { label: 'Roof', value: 'Translucent GRP Sheet' },
      { label: 'Seating', value: 'Integrated GRP Bench' },
    ],
    features: ['Corrosion and rust proof', 'Vandal resistant', 'Integrated seating', 'Advertising panel space', 'Low maintenance'],
    downloads: [{ title: 'Bus Shelter Datasheet', type: 'PDF' }],
    accessories: ['Solar LED Lighting', 'Timetable Display Case', 'Waste Bin']
  },
  {
    id: 'emp-kiosk-101',
    name: 'Modular Utility Kiosk M2',
    category: ProductCategory.KIOSK,
    shortDescription: 'Modular GRP electrical kiosk with superior thermal insulation - engineered for Indian power distribution networks.',
    fullDescription: 'The Modular Utility Kiosk M2 is EMPHZ\'s solution for rapid deployment in power distribution and telecom infrastructure projects. Designed specifically for the extreme heat conditions of Southern India, the sandwich panel construction with PU foam core provides exceptional thermal insulation, protecting sensitive switchgear and meters from ambient temperatures exceeding 45°C. The modular panel design allows for flat-pack transportation, reducing logistics costs by 60% compared to pre-assembled units. On-site assembly requires only basic tools and can be completed in under 4 hours. The GRP construction eliminates earthing requirements and provides inherent electrical insulation. Customizable cutouts for cable entry, ventilation, and equipment mounting are precision-molded during manufacturing. Available in standard RAL 7035 (Light Grey) or custom colors. Certified for wind loads up to 120 km/h, suitable for coastal installations.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN_e_6SauJrdgvk6ECPkpKsOVno64FBSKHPQkCdW0YHsfN6qlFG7_F07Lxwtek2Sfbj0ge8WqJ8MAXgEhH1Ty2kiqmJWFlxSng_Wxx0uipHJWHE7JJEKezq-W-PJ33JoD4_MtsmVvRn0l_tc5_N4XULFw=w586-h879-s-no-gm?authuser=0',
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
    shortDescription: 'All-weather GRP security cabin with pre-wired electricals - turnkey solution for industrial gatehouses and checkpoints.',
    fullDescription: 'The EMPHZ Security Guard Villa is a complete turnkey solution for industrial security applications. The seamless GRP monocoque shell construction ensures absolute zero leakage even during heavy monsoons - a critical advantage over welded steel cabins that develop leaks at joints. Each unit comes factory-finished and pre-wired with LED lighting, ceiling fan, and electrical outlets, ready for immediate deployment. The marine-grade plywood flooring with vinyl covering provides comfort for extended duty shifts. Aluminum sliding windows with mosquito mesh ensure ventilation while maintaining security. Available in 4ft x 4ft (compact) or 6ft x 6ft (executive) configurations. Optional add-ons include split AC provision, integrated desk unit, external floodlights, and attached bio-toilet module. The GRP construction eliminates rust, rot, and termite damage, ensuring a maintenance-free lifespan of 25+ years. Ideal for factory gates, construction site security, toll booths, and checkpoint installations.',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOWO0DDx5ynInyVjNCp6VTvfaUHfPOEfSd966mpl0YORv3_zoXcuZ27v8I4VUu_HcNxcPIUmTBNhnn335FaMpCYoBwWsfeZj_eDVe6paSWPHN-Xl8KVk4rqS29fmU4gYsTHbd-kDoaTNAE-sOGibovzoQ=w586-h879-s-no-gm?authuser=0',
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
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczM0dG21ZiBwjBrZwIxfJ8mJ5ViE8mzgsiKQbn8GsECSD_IPKGrRrndkHP7rwCaR4oLH4zPDwnLHZstQWawRZvCfV6bzHfozFekfZUbY4LY23QTBpHIgbaU-dTqA-f5Af3AgrG-pBp6oWIv8YI77svlpBg=w586-h879-s-no-gm?authuser=0',
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
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMThPat9zZABpXncns5L4Pno4jteF8vvyPxTm0buAL0Sh3UxZaQ_fAYHostcuSwR6h5aRThdh1Y522GhGqVM6zgDkialtBmfreTJ3MR8W4NoFTYjy0mGfHqW_QIDXop4szPJ8lnEuOB4Bh_E0n_CYSQkg=w586-h879-s-no-gm?authuser=0',
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
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczOQ76mdkLWOPl8Nl5IrVZQYjizUkHlRB_iI5wZWug1QKhiQKtFMDOFHw4DPjwn3H8s3ZWQIa9E1K0sk6KL-Qfmvo7D7DrnujfSwq0cs-HIBqb_Y4zc8-46PZXqmMbtsYHRH-kwL4QYFFk6oOLfg0VDoDw=w586-h879-s-no-gm?authuser=0',
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
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMBNCfNLNoWr6JCuTq0_dlvSEbMIsyFcsvCtW5wA52Dccl3L8MBRw0QzaRqG180EgkQDBwvXfZUAT4vCR2CiQR04BfFP9y6Mq-E3CSoxv-QZl5HZPbBp0mOE77LomhaqWuuzMdWy_d_tcmiNYtzG5q-Tg=w586-h879-s-no-gm?authuser=0',
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
    imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNflc3SRp2gYEInU7lZELUN8Jnn_g1f33VxbVxTakvnUd1Fo8vLuAmkakM7-VI6IAFDjlwj3Qbx6SSoHTdwWidcGwutrihjdzZT2sxzfH3qOFKrFqPqd91l3439BHIsQ7JQXVXbrii582OgFakqDxMRVw=w1319-h879-s-no-gm?authuser=0',
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
  {
    title: 'Solar & Renewables',
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
    desc: "UV-stable combiner boxes for harsh solar parks."
  },
  {
    title: 'Rail & Metro',
    image: "https://images.unsplash.com/photo-1474487548417-781cb714c2f3?auto=format&fit=crop&w=600&q=80",
    desc: "Fire-retardant trackside signaling cabinets."
  },
  {
    title: 'Telecom / 5G',
    image: "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?auto=format&fit=crop&w=600&q=80",
    desc: "Radio-transparent shrouds for rooftop antennae."
  },
  {
    title: 'Water Treatment',
    image: "https://images.unsplash.com/photo-1523365063870-827e85c138f2?auto=format&fit=crop&w=600&q=80",
    desc: "Corrosion-proof walkways for pump stations."
  },
  {
    title: 'Smart City',
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
    desc: "Vandal-resistant modular utility kiosks."
  },
  {
    title: 'Oil & Gas',
    image: "https://images.unsplash.com/photo-1516937941348-c09e554b96d8?auto=format&fit=crop&w=600&q=80",
    desc: "Anti-static explosion-proof junction boxes."
  },
  {
    title: 'Automotive',
    image: "https://images.unsplash.com/photo-1552658514-a9557ee6f1b3?auto=format&fit=crop&w=600&q=80",
    desc: "Lightweight, fire-safe shields for EV battery packs."
  },
  {
    title: 'Fire Safety',
    image: "https://images.unsplash.com/photo-1621253456100-e1b12b5087a5?auto=format&fit=crop&w=600&q=80",
    desc: "High-visibility cabinets for emergency equipment."
  },
];