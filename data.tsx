
// ... existing imports ...
import React from 'react';
import {
  ShieldCheck,
  Zap,
  Settings,
  Truck,
  Box,
  Layout,
  Warehouse,
  DraftingCompass,
  Hammer,
  FileCheck,
  Globe,
  CloudRain,
  Building2,
  Factory,
  Cpu,
  RadioTower,
  Landmark,
  Layers,
  Thermometer,
  Activity,
  CheckCircle,
  Recycle,
  Sun,
  Shield,
  Droplets,
  Flame,
  Wind,
  Volume2,
  Sparkles,
  Eye,
  ShoppingBag,
  Palette
} from 'lucide-react';

// Cinematic Unsplash Images
const unsplash = (id: string, w: number = 1200, h: number = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}&h=${h}`;

export const SITE_IMAGES = {
  hero: unsplash("1536842386914-53606f71b9c1", 1920, 1080),
  about: unsplash("1581091226825-a6a2a5aee158", 800, 1200),
  valueProp: unsplash("1486406146926-c627a92ad1ab", 1920, 1080),
  contact: unsplash("1451187580459-43490279c0fa", 800, 1200),
  sustainability: unsplash("1473341304177-f26f840b04b5", 1920, 1080),
  manifesto: unsplash("1497366216548-37526070297c", 1920, 1080),
};

export interface VariantOption {
  id: string;
  label: string;
  hex?: string;
}

export interface VariantGroup {
  id: string;
  label: string;
  options: VariantOption[];
}

export interface ProductBenefit {
  title: string;
  icon: React.ReactNode;
}

export interface SizeEntry {
  model: string;
  dims: string;
  weight?: string;
  capacity?: string;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  gallery: string[];
  blueprint?: string;
  vettedBy: string[];
  sectorApps: string[];
  keyBenefits: ProductBenefit[];
  features: string[];
  specs: Record<string, string>;
  sizeMatrix: SizeEntry[];
  variantGroups: VariantGroup[];
  materialProperties: string;
  performanceData: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Electrical & Grounding",
    subtitle: "Power Distribution Protection",
    category: "Power",
    description: "Industrial-grade protection for LV/HV switchgear. Engineered with high-dielectric GRP laminates to eliminate arcing risks and earthing maintenance in corrosive utility environments.",
    icon: <Zap className="w-6 h-6" />,
    image: unsplash("1563229864-4e4277b91485", 1200, 1200),
    gallery: [
      unsplash("1563229864-4e4277b91485", 1200, 1200),
      unsplash("1621905235277-22f6d0f62b4c", 1200, 1200),
      unsplash("1558494949-efc68158f3f0", 1200, 1200),
      unsplash("1562408590-e32931084e23", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["POWERGRID", "NTPC", "TATA POWER"],
    sectorApps: ["Substations", "Solar Parks", "Industrial Plants"],
    keyBenefits: [
      { title: "Non-Conductive", icon: <Shield className="w-4 h-4" /> },
      { title: "Corrosion Proof", icon: <Droplets className="w-4 h-4" /> },
      { title: "Fire Retardant", icon: <Flame className="w-4 h-4" /> }
    ],
    features: ["Single/Double Door", "Internal Mounting Plate", "IP67 Gasketing", "Ventilation Louvers"],
    specs: { material: "GRP Composite", rating: "IP65 / IP67", thickness: "3.5mm Nominal", dielectric: "18kV/mm" },
    sizeMatrix: [
      { model: "EP-4030", dims: "400 x 300 x 200", weight: "4.2kg" },
      { model: "EP-6040", dims: "600 x 400 x 250", weight: "6.8kg" },
      { model: "EP-8060", dims: "800 x 600 x 300", weight: "12.5kg" },
      { model: "EP-1080", dims: "1000 x 800 x 400", weight: "19.2kg" }
    ],
    variantGroups: [
      {
        id: 'door',
        label: 'Access Architecture',
        options: [
          { id: 'single', label: 'Single Door' },
          { id: 'double', label: 'Double Door' },
          { id: 'window', label: 'Polycarb Window' }
        ]
      },
      {
        id: 'mounting',
        label: 'Mounting Style',
        options: [
          { id: 'wall', label: 'Wall Mounted' },
          { id: 'pole', label: 'Pole Clamp' },
          { id: 'pedestal', label: 'Base Pedestal' }
        ]
      },
      {
        id: 'color',
        label: 'RAL Technical Finish',
        options: [
          { id: '7035', label: '7035 Grey', hex: '#d1d5d8' },
          { id: '7032', label: '7032 Pebble', hex: '#b5ad93' },
          { id: '9010', label: '9010 White', hex: '#f7f7f7' }
        ]
      }
    ],
    materialProperties: "Isophthalic GRP Composite utilizing advanced resin systems for complete chemical inertia and superior dielectric strength.",
    performanceData: [
      "Corrosion: Excellent (Chemically Inert)",
      "Logistics: Lightweight (Low Transport Cost)",
      "Safety: 100% Non-Conductive",
      "Maintenance: Zero (No Rust/Paint)",
      "Lifespan: 50+ Years Certified"
    ]
  },
  {
    id: 2,
    title: "Canopy Systems",
    subtitle: "Heavy-Duty Weather Shields",
    category: "Custom",
    description: "Designed for extreme coastal and desert environments. These canopies protect sensitive instrumentation from solar radiation, rain, and sand-ingress using UV-stabilized architectural GRP.",
    icon: <CloudRain className="w-6 h-6" />,
    image: unsplash("1516131206008-560372a069eb", 1200, 1200),
    gallery: [
      unsplash("1516131206008-560372a069eb", 1200, 1200),
      unsplash("1486406146926-c627a92ad1ab", 1200, 1200),
      unsplash("1497366216548-37526070297c", 1200, 1200),
      unsplash("1466854076813-4aa9b02e804e", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1581291518857-4e27f48f518c?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["RELIANCE", "ADANI", "INDIAN RAILWAYS"],
    sectorApps: ["Offshore Rigs", "Highway Hubs", "Transit Gates"],
    keyBenefits: [
      { title: "UV Stabilized", icon: <Sun className="w-4 h-4" /> },
      { title: "Waterproof", icon: <CloudRain className="w-4 h-4" /> },
      { title: "Wind Resistant", icon: <Wind className="w-4 h-4" /> }
    ],
    features: ["Cantilever Design", "SS316 Fixings", "Drainage Channels", "Impact Reinforced"],
    specs: { load: "150kg/m2", uv_resistance: "99.9% UV Block", wind_speed: "180 km/h Rated" },
    sizeMatrix: [
      { model: "CS-800", dims: "800 x 600", weight: "3.5kg" },
      { model: "CS-1200", dims: "1200 x 800", weight: "5.8kg" },
      { model: "CS-1500", dims: "1500 x 1000", weight: "8.2kg" }
    ],
    variantGroups: [
      {
        id: 'mounting',
        label: 'Support Structure',
        options: [
          { id: 'wall', label: 'Wall Bracket' },
          { id: 'column', label: 'I-Beam Clamp' },
          { id: 'suspended', label: 'Suspension Kit' }
        ]
      },
      {
        id: 'color',
        label: 'RAL Colorway',
        options: [
          { id: '9010', label: '9010 White', hex: '#f7f7f7' },
          { id: '7035', label: '7035 Grey', hex: '#d1d5d8' },
          { id: '5010', label: '5010 Blue', hex: '#004b93' }
        ]
      }
    ],
    materialProperties: "UV-treated architectural GRP composite engineered for sustained exposure to high-salinity and extreme solar environments.",
    performanceData: [
      "Resistance: Excellent UV & Corrosion",
      "Weight: 80% Lighter than Steel",
      "Conductivity: Fully Non-Conductive",
      "Aesthetics: Retains Color Integrity",
      "Durability: Structural Lifetime of 50Y"
    ]
  },
  {
    id: 5,
    title: "Security Cabins",
    subtitle: "Strategic Observation Units",
    category: "Commercial",
    description: "Continuous-duty surveillance pods. Features sandwich-panel construction with PU-foam core for thermal insulation, designed for personnel comfort in 45°C+ industrial environments.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: unsplash("1486304873000-235643847519", 1200, 1200),
    gallery: [
      unsplash("1486304873000-235643847519", 1200, 1200),
      unsplash("1550751827-4bd374c3f58b", 1200, 1200),
      unsplash("1455587734955-081b22074882", 1200, 1200),
      unsplash("1487958449943-2429e8be8625", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["DLF", "GODREJ", "L&T CONSTRUCTION"],
    sectorApps: ["Gated Communities", "Factories", "Govt HQ"],
    keyBenefits: [
      { title: "360 Observation", icon: <Eye className="w-4 h-4" /> },
      { title: "Thermal Control", icon: <Thermometer className="w-4 h-4" /> },
      { title: "Rapid Deploy", icon: <Truck className="w-4 h-4" /> }
    ],
    features: ["Toughened Glass", "AC-Mounting Bracket", "Integrated Writing Desk", "Anti-Skid Flooring"],
    specs: { insulation: "40mm PU Sandwich", windows: "5mm Safety Glass", pre_wired: "DB + 5/15A Sockets" },
    sizeMatrix: [
      { model: "SC-Mini", dims: "1.2 x 1.2 x 2.2m", capacity: "1 Person" },
      { model: "SC-Std", dims: "1.5 x 1.5 x 2.3m", capacity: "1-2 Person" },
      { model: "SC-Wide", dims: "2.4 x 1.5 x 2.4m", capacity: "2-4 Person" }
    ],
    variantGroups: [
      {
        id: 'glass',
        label: 'Glazing Architecture',
        options: [
          { id: 'std', label: 'Toughened' },
          { id: 'tint', label: 'Tinted Heat-Shield' },
          { id: 'one-way', label: 'One-Way Mirror' }
        ]
      },
      {
        id: 'cladding',
        label: 'Thermal Core',
        options: [
          { id: 'pu', label: '40mm PU Sandwich' },
          { id: 'rockwool', label: 'Rockwool Fire-Safe' }
        ]
      },
      {
        id: 'color',
        label: 'RAL Aesthetic',
        options: [
          { id: '7035', label: '7035 Grey', hex: '#d1d5d8' },
          { id: '1013', label: '1013 Oyster', hex: '#eae3cd' },
          { id: '6005', label: '6005 Green', hex: '#1f3d33' }
        ]
      }
    ],
    materialProperties: "Insulated GRP sandwich construction with high-strength outer skin, providing superior thermal regulation and impact resistance.",
    performanceData: [
      "Thermal: PU Foam Core (Inert)",
      "Logistics: Modular (Rapid Deployment)",
      "Safety: Flame Retardant Shell",
      "Maintenance: Zero (Self-Cleaning Surface)",
      "Lifespan: 50+ Years (Non-Degrading)"
    ]
  },
  {
    id: 4,
    title: "Sanitation Units",
    subtitle: "Public Hygiene Modules",
    category: "Infra",
    description: "Rapidly deployable hygiene infrastructure. Engineered with non-porous gel-coated surfaces to prevent bacterial growth and withstand high-pressure cleaning in public transit zones.",
    icon: <Layout className="w-6 h-6" />,
    image: unsplash("1584622650111-993a426fbf0a", 1200, 1200),
    gallery: [
      unsplash("1584622650111-993a426fbf0a", 1200, 1200),
      unsplash("1584622704456-df33c7bd61d0", 1200, 1200),
      unsplash("1600585154526-990dcea46e9f", 1200, 1200),
      unsplash("1506307907530-1845bbcd5463", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1564347743260-262ce40484bc?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["SWACHH BHARAT", "NHAI", "SMART CITY MISSION"],
    sectorApps: ["Public Parks", "Highways", "Construction Sites"],
    keyBenefits: [
      { title: "Anti-Bacterial", icon: <Sparkles className="w-4 h-4" /> },
      { title: "Modular", icon: <Layout className="w-4 h-4" /> },
      { title: "Low Maintenance", icon: <Settings className="w-4 h-4" /> }
    ],
    features: ["Slip-Resistant Floor", "Gravity Flush System", "Solar Lighting Ready", "Vandal-Proof Shell"],
    specs: { tank_capacity: "250L - 1200L", floor: "Diamond GRP Finish", hygiene: "Non-Porous Resin" },
    sizeMatrix: [
      { model: "SU-Single", dims: "1.2 x 1.2 x 2.2m", weight: "120kg" },
      { model: "SU-Multi", dims: "4.0 x 1.5 x 2.4m", weight: "650kg" },
      { model: "SU-Exec", dims: "2.0 x 2.0 x 2.4m", weight: "320kg" }
    ],
    variantGroups: [
      {
        id: 'flush',
        label: 'Fluid Management',
        options: [
          { id: 'gravity', label: 'Gravity Flow' },
          { id: 'pressure', label: 'Pumped Flush' },
          { id: 'vacuum', label: 'Vacuum (Eco)' }
        ]
      },
      {
        id: 'fitout',
        label: 'Interior Grade',
        options: [
          { id: 'std', label: 'Industrial Standard' },
          { id: 'premium', label: 'Executive SS304' }
        ]
      },
      {
        id: 'color',
        label: 'RAL Palette',
        options: [
          { id: '9010', label: '9010 White', hex: '#f7f7f7' },
          { id: '6005', label: '6005 Dark Green', hex: '#1f3d33' },
          { id: '1015', label: '1015 Ivory', hex: '#e6d9bd' }
        ]
      }
    ],
    materialProperties: "Non-porous medical-grade GRP gel coat surface engineered for zero bacterial adhesion and high chemical resistance.",
    performanceData: [
      "Hygiene: Bacterial Resistance (Excellent)",
      "Logistics: Lightweight (Rapid Load)",
      "Insulation: Non-Conductive / Safe",
      "Maintenance: Zero (Non-Degrading Shell)",
      "Lifespan: 50+ Years Service Life"
    ]
  },
  {
    id: 3,
    title: "Power House",
    subtitle: "Acoustic Generator Rooms",
    category: "Power",
    description: "Secure, high-integrity housing for power generation units. Features multi-layered GRP panels for superior acoustic attenuation and integrated ventilation for thermal regulation.",
    icon: <Warehouse className="w-6 h-6" />,
    image: unsplash("1563968743335-e6f642646d78", 1200, 1200),
    gallery: [
      unsplash("1563968743335-e6f642646d78", 1200, 1200),
      unsplash("1531206715424-455747634818", 1200, 1200),
      unsplash("1581092336129-94d048d0df52", 1200, 1200),
      unsplash("1504917595217-d4dc5e61a84b", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["CUMMINS", "KIRLOSKAR", "SIEMENS"],
    sectorApps: ["Telecom Towers", "Hospital Backup", "Data Centers"],
    keyBenefits: [
      { title: "Acoustic Insulation", icon: <Volume2 className="w-4 h-4" /> },
      { title: "Ventilated", icon: <Wind className="w-4 h-4" /> },
      { title: "Heavy Duty", icon: <Warehouse className="w-4 h-4" /> }
    ],
    features: ["Acoustic Rockwool Core", "Forced Air Cooling", "Cable Gland Plates", "Anti-Vibration Base"],
    specs: { acoustic: "25-35dB Reduction", fire_rating: "Class 0 / BS 476", ventilation: "Active 500 CFM" },
    sizeMatrix: [
      { model: "PH-2020", dims: "2.0 x 2.0 x 2.4m", weight: "450kg" },
      { model: "PH-3030", dims: "3.0 x 3.0 x 2.6m", weight: "780kg" },
      { model: "PH-Custom", dims: "Bespoke Scale", weight: "Variable" }
    ],
    variantGroups: [
      {
        id: 'acoustic',
        label: 'Attenuation Matrix',
        options: [
          { id: 'std', label: '25dB Standard' },
          { id: 'high', label: '35dB Critical' }
        ]
      },
      {
        id: 'cooling',
        label: 'Thermal Mgmt',
        options: [
          { id: 'passive', label: 'Passive Louvers' },
          { id: 'active', label: 'Forced Fan (AC)' }
        ]
      },
      {
        id: 'color',
        label: 'Environmental RAL',
        options: [
          { id: '6005', label: '6005 Dark Green', hex: '#1f3d33' },
          { id: '7035', label: '7035 Grey', hex: '#d1d5d8' }
        ]
      }
    ],
    materialProperties: "Multi-layered acoustic GRP composite with mineral-core damping, providing extreme noise attenuation and thermal stability.",
    performanceData: [
      "Acoustic: Excellent (25-35dB Reduction)",
      "Logistics: Rapid Build (No Wet Work)",
      "Safety: Non-Conductive / Dielectric",
      "Maintenance: Zero (Corrosion Proof)",
      "Lifespan: 50+ Year Integrity"
    ]
  },
  {
    id: 6,
    title: "Retail Kiosks",
    subtitle: "Commercial Franchise Units",
    category: "Commercial",
    description: "Bespoke retail modules designed for high-traffic zones. Lightweight yet structurally reinforced to allow frequent relocation without structural fatiguing or aesthetic degradation.",
    icon: <Box className="w-6 h-6" />,
    image: unsplash("1507914464562-6ff4ac29692f", 1200, 1200),
    gallery: [
      unsplash("1507914464562-6ff4ac29692f", 1200, 1200),
      unsplash("1556740738-b6a63e27c4df", 1200, 1200),
      unsplash("1567401893414-76b7b1e5a7a5", 1200, 1200),
      unsplash("1441986300917-64674bd600d8", 1200, 1200)
    ],
    blueprint: "https://images.unsplash.com/photo-1564347743260-262ce40484bc?auto=format&fit=crop&q=80&w=1200&h=800",
    vettedBy: ["PEPSICO", "AMUL", "CAFE COFFEE DAY"],
    sectorApps: ["University Campuses", "Food Courts", "Retail Zones"],
    keyBenefits: [
      { title: "Retail-Ready", icon: <ShoppingBag className="w-4 h-4" /> },
      { title: "Custom Colors", icon: <Palette className="w-4 h-4" /> },
      { title: "Secure Shutters", icon: <ShieldCheck className="w-4 h-4" /> }
    ],
    features: ["Gas-Strut Opening", "Internal Countertop", "Signage Backlighting", "External GRP Shell"],
    specs: { finish: "Automotive RAL Coat", floor: "GRP Vinyl Planks", mobility: "Forklift Ready" },
    sizeMatrix: [
      { model: "RK-Cube", dims: "1.8 x 1.8 x 2.3m", weight: "180kg" },
      { model: "RK-Cafe", dims: "2.4 x 2.4 x 2.4m", weight: "350kg" },
      { model: "RK-Longo", dims: "3.6 x 2.4 x 2.4m", weight: "520kg" }
    ],
    variantGroups: [
      {
        id: 'opening',
        label: 'Aperture Control',
        options: [
          { id: 'gas', label: 'Gas Strut (Up)' },
          { id: 'side', label: 'Side Sliding' },
          { id: 'fold', label: 'Bi-Folding' }
        ]
      },
      {
        id: 'color',
        label: 'Corporate RAL',
        options: [
          { id: 'brand-red', label: 'Coca Red', hex: '#fe001a' },
          { id: 'brand-blue', label: 'Pepsi Blue', hex: '#004b93' },
          { id: 'brand-white', label: 'Classic White', hex: '#f7f7f7' }
        ]
      }
    ],
    materialProperties: "Lightweight architectural GRP with automotive-grade gel finish, providing high structural rigidity and aesthetic permanence.",
    performanceData: [
      "Mobility: Lightweight (Forklift Ready)",
      "Finish: UV Stable (Non-Degrading)",
      "Logistics: Ultra-Portable",
      "Maintenance: Zero (No Paint Loss)",
      "Lifespan: 50+ Years Aesthetic Stability"
    ]
  }
];

export const CAPABILITIES = [
  {
    id: "tech-01",
    name: "Hot Press Molding (SMC)",
    icon: <Layers className="w-6 h-6" />,
    image: unsplash("1581090464777-f3220bbe1b8b", 1000, 600),
    desc: "Automated Sheet Molding Compound (SMC) compression molding for high-precision, high-volume component production.",
    stats: [
      { label: "Pressure", value: "2,000 Tons" },
      { label: "Cycle Time", value: "< 3 Mins" },
      { label: "Capacity", value: "500 Units/Day" }
    ]
  },
  {
    id: "tech-02",
    name: "Resin Transfer (RTM)",
    icon: <Activity className="w-6 h-6" />,
    image: unsplash("1565439396656-5471c26191b2", 1000, 600),
    desc: "Vacuum-assisted Resin Transfer Molding for complex geometries and double-finished surfaces with superior aesthetic quality.",
    stats: [
      { label: "Finish", value: "Class A Surface" },
      { label: "Void Content", value: "< 1%" },
      { label: "Max Size", value: "4m x 4m" }
    ]
  },
  {
    id: "tech-03",
    name: "Automated Pultrusion",
    icon: <Settings className="w-6 h-6" />,
    image: unsplash("1504328345606-18aff8cc597f", 1000, 600),
    desc: "Continuous automated production of structural GRP profiles, beams, and channels with consistent cross-sectional properties.",
    stats: [
      { label: "Line Speed", value: "1.5m / min" },
      { label: "Length", value: "Infinite" },
      { label: "Strength", value: "High Tensile" }
    ]
  },
  {
    id: "tech-04",
    name: "PU Gasketing",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: unsplash("1530124566582-161823ba4fab", 1000, 600),
    desc: "Robotic application of Polyurethane foam gaskets ensuring seamless IP65/67 sealing for all enclosure systems.",
    stats: [
      { label: "Precision", value: "±0.1mm" },
      { label: "IP Rating", value: "IP66 / IP67" },
      { label: "Material", value: "Thixotropic PU" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Analysis",
    description: "Site survey & specs definition.",
    image: unsplash("1503387762-592deb58ef4e", 800, 600),
    icon: <Globe className="w-6 h-6 text-white" />
  },
  {
    id: 2,
    title: "Design",
    description: "CAD modeling & Structural analysis.",
    image: unsplash("1581291518857-4e27f48f518c", 800, 600),
    icon: <DraftingCompass className="w-6 h-6 text-white" />
  },
  {
    id: 3,
    title: "Manufacturing",
    description: "Precision GRP molding.",
    image: unsplash("1564347743260-262ce40484bc", 800, 600),
    icon: <Hammer className="w-6 h-6 text-white" />
  },
  {
    id: 4,
    title: "Quality",
    description: "Compliance & Safety audits.",
    image: unsplash("1581092335397-9583eb92d232", 800, 600),
    icon: <FileCheck className="w-6 h-6 text-white" />
  },
  {
    id: 5,
    title: "Deployment",
    description: "Delivery & rapid deployment.",
    image: unsplash("1541888946425-d81bb19240f5", 800, 600),
    icon: <Truck className="w-6 h-6 text-white" />
  }
];

export const INDUSTRIES = [
  "Government",
  "Utilities",
  "Renewables",
  "Telecom",
  "Transport",
  "Real Estate",
  "Industry"
];

export const SECTORS = [
  {
    id: "govt",
    title: "Govt. & Municipal",
    desc: "Scalable public GRP infrastructure for rapid urban development.",
    items: ["Public Sanitation Blocks", "Bus Shelters", "Police Booths", "Information Kiosks"],
    icon: <Landmark className="w-8 h-8 text-white" />,
    color: "from-blue-900 to-slate-900"
  },
  {
    id: "power",
    title: "Power & Energy",
    desc: "Critical GRP protection for electrical distribution networks.",
    items: ["Feeder Pillars", "Transformer Enclosures", "Solar Combiner Boxes", "Meter Panels"],
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "from-amber-900/40 to-slate-900"
  },
  {
    id: "industry",
    title: "Industrial Parks",
    desc: "Heavy-duty modular GRP units for manufacturing campuses.",
    items: ["Security Cabins", "Control Rooms", "Storage Sheds", "Labor Amenities"],
    icon: <Factory className="w-8 h-8 text-white" />,
    color: "from-slate-800 to-slate-900"
  },
  {
    id: "smart",
    title: "Smart Cities",
    desc: "Next-gen GRP urban furniture integrated with technology.",
    items: ["WiFi Kiosks", "EV Charging Stations", "Smart Vending", "Interactive Stops"],
    icon: <Cpu className="w-8 h-8 text-white" />,
    color: "from-emerald-900/40 to-slate-900"
  },
  {
    id: "telecom",
    title: "Telecom & Data",
    desc: "Weatherproof GRP shelters for sensitive communications gear.",
    items: ["BTS Shelters", "Fiber Distribution Hubs", "Edge Data Centers"],
    icon: <RadioTower className="w-8 h-8 text-white" />,
    color: "from-indigo-900/40 to-slate-900"
  },
  {
    id: "realestate",
    title: "Commercial Real Estate",
    desc: "Aesthetic and functional GRP additions to modern developments.",
    items: ["Rooftop Utility Rooms", "Garden Gazebos", "Security Posts", "Sales Offices"],
    icon: <Building2 className="w-8 h-8 text-white" />,
    color: "from-cyan-900/40 to-slate-900"
  }
];

export const ROADMAP = [
  {
    year: "NOW",
    title: "GRP Standardization",
    desc: "Catalog-based procurement for Govt tenders.",
    status: "active"
  },
  {
    year: "2025",
    title: "Solar Integration",
    desc: "Native solar-roof variants for all cabins.",
    status: "upcoming"
  },
  {
    year: "2026",
    title: "Global Export",
    desc: "IEC/UL certified GRP lines for MENA & EU markets.",
    status: "upcoming"
  },
  {
    year: "2027",
    title: "Smart GRP Infra",
    desc: "IoT-enabled monitoring in all enclosures.",
    status: "concept"
  }
];

export const PROJECTS = [
  {
    id: "PRJ-24-001",
    title: "Solar Park Phase III",
    location: "Rajasthan, IN",
    client: "National Renewable Corp",
    type: "Energy",
    image: unsplash("1509391366360-2e959784a276", 800, 600),
    stats: {
      units: "450+",
      product: "Combiner Boxes",
      duration: "3 Months"
    }
  },
  {
    id: "PRJ-24-002",
    title: "Metro Transit Network",
    location: "Bangalore, IN",
    client: "Metro Rail Corporation",
    type: "Transport",
    image: unsplash("1494522057782-b164e037207c", 800, 600),
    stats: {
      units: "120+",
      product: "Bus Shelters",
      duration: "Ongoing"
    }
  },
  {
    id: "PRJ-23-089",
    title: "Coastal Refinery",
    location: "Jamnagar, IN",
    client: "PetroChem Industries",
    type: "Industrial",
    image: unsplash("1535202640274-12349195d033", 800, 600),
    stats: {
      units: "35",
      product: "Control Rooms",
      duration: "6 Months"
    }
  },
  {
    id: "PRJ-23-045",
    title: "Smart Surveillance",
    location: "Hyderabad, IN",
    client: "Municipal Corp",
    type: "Smart City",
    image: unsplash("1550751827-4bd374c3f58b", 800, 600),
    stats: {
      units: "80+",
      product: "Security Cabins",
      duration: "2 Months"
    }
  }
];

export const NEWS_ITEMS = [
  {
    id: 1,
    date: "OCT 2024",
    title: "EMPHZ at Middle East Energy 2024",
    category: "EXHIBITION",
    image: unsplash("1551288049-bebda4e38f71", 600, 400),
    excerpt: "Showcasing our latest IP67 Vetted GRP Enclosures designed for extreme desert climates."
  },
  {
    id: 2,
    date: "SEP 2024",
    title: "New Automated Molding Line Operational",
    category: "MANUFACTURING",
    image: unsplash("1565514020125-0150965e9409", 600, 400),
    excerpt: "Doubling our production capacity with robotic SMC/RTM lines in our Bangalore facility."
  },
  {
    id: 3,
    date: "AUG 2024",
    title: "Strategic Partnership with Smart City Corp",
    category: "PARTNERSHIP",
    image: unsplash("1451187580459-43490279c0fa", 600, 400),
    excerpt: "Deploying 500+ IoT-enabled GRP utility kiosks across major metro corridors."
  }
];

export const DOWNLOADS = [
  {
    id: "CAT-01",
    title: "GRP Product Catalogue 2024",
    size: "12.4 MB",
    type: "PDF"
  },
  {
    id: "SPEC-EL",
    title: "Vetted GRP Tech Specs",
    size: "4.2 MB",
    type: "PDF"
  },
  {
    id: "GDE-INS",
    title: "Site Installation Guide (GRP)",
    size: "8.1 MB",
    type: "PDF"
  },
  {
    id: "CRT-ISO",
    title: "ISO 9001:2024 Vetting",
    size: "1.2 MB",
    type: "PDF"
  }
];

export const APPROVALS = [
  { id: "A-01", name: "National Power Grid", type: "Utility", status: "Class A Vendor" },
  { id: "A-02", name: "Central Public Works", type: "Govt", status: "Pre-qualified" },
  { id: "A-03", name: "Metro Rail Corp", type: "Transit", status: "Preferred Partner" },
  { id: "A-04", name: "Airport Authority", type: "Infra", status: "Safety Rated" },
  { id: "A-05", name: "Smart City Mission", type: "Urban", status: "Empanelled" },
  { id: "A-06", name: "PetroGas Ltd", type: "Energy", status: "Global Vendor" },
];

export const OFFICES = [
  {
    id: "hq",
    name: "Corporate HQ",
    address: "Prestige Trade Tower, Palace Road, Bangalore, KA 560001",
    phone: "+91 80 4000 1234",
    email: "corporate@emphz.in",
    type: "Management",
    image: unsplash("1486406146926-c627a92ad1ab", 1000, 600)
  },
  {
    id: "fac-1",
    name: "Plant I (Composites)",
    address: "Peenya Industrial Area, Phase IV, Bangalore, KA 560058",
    phone: "+91 80 2836 5678",
    email: "plant1@emphz.in",
    type: "Manufacturing",
    image: unsplash("1565514020125-0150965e9409", 1000, 600)
  },
  {
    id: "fac-2",
    name: "Plant II (Assembly)",
    address: "Jigani Link Road, Bommasandra, Hosur Road, KA 560105",
    phone: "+91 80 2783 9012",
    email: "plant2@emphz.in",
    type: "Assembly",
    image: unsplash("1581091226825-a6a2a5aee158", 1000, 600)
  }
];

export const SUSTAINABILITY_STATS = [
  { label: "Recyclable", value: "100%", icon: <Recycle className="w-5 h-5" /> },
  { label: "Lifespan", value: "50+ Yrs", icon: <CheckCircle className="w-5 h-5" /> },
  { label: "Solar Usage", value: "40%", icon: <Sun className="w-5 h-5" /> },
];

export const COMPARISON_DATA = [
  {
    criteria: "Corrosion Resistance",
    grp: "Excellent (Chemically Inert)",
    steel: "Poor (Prone to Rust)",
    concrete: "Moderate (Spalling Risk)"
  },
  {
    criteria: "Weight / Logistics",
    grp: "Lightweight (Easy Transport)",
    steel: "Heavy (Crane Required)",
    concrete: "Very Heavy (Site Cast)"
  },
  {
    criteria: "Electrical Insulation",
    grp: "Non-Conductive (Safe)",
    steel: "Conductive (Earthing Req)",
    concrete: "Non-Conductive"
  },
  {
    criteria: "Maintenance Cost",
    grp: "Zero (No Painting)",
    steel: "High (Regular Painting)",
    concrete: "Medium (Crack Repair)"
  },
  {
    criteria: "Life Cycle (Years)",
    grp: "50+ Years",
    steel: "15-20 Years",
    concrete: "30-40 Years"
  }
];

export const CAREERS_DATA = [
  {
    id: "JOB-01",
    role: "Senior Design Engineer (CAD/SolidWorks)",
    location: "Bangalore HQ",
    type: "Full-Time",
    dept: "Engineering"
  },
  {
    id: "JOB-02",
    role: "Production Manager (Composites)",
    location: "Plant I - Peenya",
    type: "Full-Time",
    dept: "Manufacturing"
  },
  {
    id: "JOB-03",
    role: "Sales Executive - Govt Projects",
    location: "Delhi / NCR",
    type: "Remote / Travel",
    dept: "Sales"
  }
];

export const FAQS = [
  {
    q: "How does GRP compare to traditional concrete construction cost-wise?",
    a: "While initial material costs for GRP can be marginally higher, the total cost of ownership is significantly lower due to zero painting requirements, 50+ year lifespan, and rapid installation (saving labor costs)."
  },
  {
    q: "What are the standard lead times for modular units?",
    a: "Standard catalog items (Guard Cabins, Toilets) are dispatched within 7-10 days. Custom engineered solutions typically require 4-6 weeks for mold development and production."
  },
  {
    q: "Are the structures fire and impact resistant?",
    a: "Yes. Our industrial units use Fire Retardant (FR) grade resins meeting BS 476 Class 1 standards. The composite layup provides high impact resistance suitable for vandal-prone public areas."
  },
  {
    q: "Can you deliver to remote or difficult terrains?",
    a: "Absolutely. EMPHZ units are lightweight and modular. They can be flat-packed for transport to high-altitude or remote locations and assembled on-site without heavy cranes."
  }
];

export const NETWORK_NODES = [
  { id: "BLR", city: "Bangalore (HQ)", x: 45, y: 70, type: "hub" },
  { id: "DEL", city: "New Delhi", x: 40, y: 25, type: "hub" },
  { id: "MUM", city: "Mumbai", x: 25, y: 55, type: "logistics" },
  { id: "KOL", city: "Kolkata", x: 70, y: 45, type: "logistics" },
  { id: "CHE", city: "Chennai", x: 50, y: 75, type: "logistics" },
  { id: "AHM", city: "Ahmedabad", x: 20, y: 45, type: "logistics" },
  { id: "HYD", city: "Hyderabad", x: 45, y: 60, type: "hub" },
];
