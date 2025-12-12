export enum ProductCategory {
  AUTOMOBILE = 'Automobile Components',
  BUS_SHELTER = 'Bus Shelters',
  CABIN = 'Security Cabins',
  CUSTOM = 'Custom Structures',
  ENCLOSURE = 'Electrical Enclosures',
  FIRE_SAFETY = 'Fire Safety Equipment',
  INDUSTRIAL_PROTECTION = 'Industrial Protection',
  JUNCTION_BOX = 'Junction Boxes',
  KIOSK = 'Modular Kiosks',
  PORTABLE_TOILET = 'Portable Toilets',
  SMART_CABIN = 'Smart Living Pods',
  STRUCTURAL = 'Structural Profiles',
  WATER_STORAGE = 'Water Storage Solutions'
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product3DAnnotation {
  id: string;
  position: [number, number, number];
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpec[];
  features: string[];
  imageUrl: string;
  gallery?: string[];
  downloads: { title: string; type: 'PDF' | 'CAD' }[];
  accessories?: string[];
  annotations?: Product3DAnnotation[];
  modelUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
  relatedProductCategories?: ProductCategory[];
}

export interface ProductConfiguration {
  color: string;
  finish: 'Glossy' | 'Matte' | 'Textured';
}

export interface RFQItem {
  id: string;
  cartId?: string; // Unique ID for cart entry (product ID + config hash)
  name: string;
  quantity: number;
  image?: string;
  modelUrl?: string;
  configuration?: ProductConfiguration;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  isError?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: 'High-Intent' | 'Long-Tail';
  date: string;
  author: string;
  summary: string;
  imageUrl: string;
  content: string;
}