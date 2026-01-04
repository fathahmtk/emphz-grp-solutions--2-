import { MOCK_PRODUCTS, INDUSTRIES, MOCK_BLOG_POSTS, MOCK_CASE_STUDIES } from '../constants';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const CHEMICAL_DB = [
    { name: 'Acetic Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Acetic Acid', conc: '50%', temp: '60°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Acetic Acid', conc: 'Glacial', temp: '40°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Benzoic Acid', conc: 'Sat.', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Chromic Acid', conc: '20%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Citric Acid', conc: 'Sat.', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Formic Acid', conc: '10%', temp: '40°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Hydrochloric Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Hydrochloric Acid', conc: '37%', temp: '90°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Hydrofluoric Acid', conc: '10%', temp: '40°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
    { name: 'Nitric Acid', conc: '20%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Nitric Acid', conc: '5%', temp: '60°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Phosphoric Acid', conc: '80%', temp: '100°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Sulphuric Acid', conc: '25%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sulphuric Acid', conc: '75%', temp: '60°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Sulphuric Acid', conc: '98%', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Ammonium Hydroxide', conc: '20%', temp: '40°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
    { name: 'Calcium Chloride', conc: 'Sat.', temp: '95°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Caustic Soda (NaOH)', conc: '10%', temp: '80°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
    { name: 'Chlorine Water', conc: 'Sat.', temp: '80°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Ferric Chloride', conc: 'Sat.', temp: '100°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Potassium Hydroxide', conc: '20%', temp: '50°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
    { name: 'Sea Water', conc: '100%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sodium Chloride', conc: 'Sat.', temp: '100°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sodium Hypochlorite', conc: '15%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Acetone', conc: '100%', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Benzene', conc: 'Pure', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Carbon Tetrachloride', conc: '100%', temp: '40°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Diesel Fuel', conc: '100%', temp: '60°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Ethanol', conc: '50%', temp: '40°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Ethanol', conc: '96%', temp: '30°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Formaldehyde', conc: '37%', temp: '60°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Gasoline (Unleaded)', conc: '100%', temp: '40°C', resin: 'Vinyl Ester', rating: 'Recommended' },
    { name: 'Glycerin', conc: '100%', temp: '95°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Kerosene', conc: '100%', temp: '60°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Methanol', conc: '100%', temp: '30°C', resin: 'Vinyl Ester', rating: 'Caution' },
    { name: 'Toluene', conc: '100%', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Xylene', conc: '100%', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Alum. Sulphate', conc: 'Sat.', temp: '95°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Urea', conc: 'Sat.', temp: '90°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Water (Potable)', conc: '100%', temp: '60°C', resin: 'Isophthalic (WRAS)', rating: 'Recommended' },
    { name: 'Water (Demineralized)', conc: '100%', temp: '80°C', resin: 'Vinyl Ester', rating: 'Recommended' }
];

const RESOURCES_DB = [
    { id: 'ds-001', category: 'Datasheets', title: 'EMPHZ-700 Series Technical Datasheet', format: 'PDF', size: '2.4 MB' },
    { id: 'ds-002', category: 'Datasheets', title: 'EMPHZ-500 Series Technical Datasheet', format: 'PDF', size: '2.2 MB' },
    { id: 'ds-003', category: 'Datasheets', title: 'Fire Retardant Grating Specs (ASTM E84)', format: 'PDF', size: '1.8 MB' },
    { id: 'ds-004', category: 'Datasheets', title: 'Structural Pultruded Profiles Catalog', format: 'PDF', size: '4.5 MB' },
    { id: 'bro-001', category: 'Brochures', title: 'Corporate Capability Statement 2025', format: 'PDF', size: '5.1 MB' },
    { id: 'bro-002', category: 'Brochures', title: 'Oil & Gas Sector Solutions', format: 'PDF', size: '3.3 MB' },
    { id: 'bro-003', category: 'Brochures', title: 'Water Treatment Infrastructure', format: 'PDF', size: '3.1 MB' },
    { id: 'ins-001', category: 'Installation', title: 'Cable Tray Installation Guide', format: 'PDF', size: '1.4 MB' },
    { id: 'ins-002', category: 'Installation', title: 'Storage Tank Handling & Setup', format: 'PDF', size: '1.9 MB' },
    { id: 'ins-003', category: 'Installation', title: 'Field Jointing Procedures', format: 'PDF', size: '1.2 MB' },
    { id: 'cert-001', category: 'Certifications', title: 'ISO 9001:2015 Certificate', format: 'PDF', size: '0.5 MB' },
    { id: 'cert-002', category: 'Certifications', title: 'IP65/IP66 Test Reports', format: 'ZIP', size: '8.4 MB' },
    { id: 'cert-003', category: 'Certifications', title: 'NEMA 4X Compliance Docs', format: 'PDF', size: '1.1 MB' }
];

const staticDataDir = path.join(process.cwd(), 'static', 'data');
if (!fs.existsSync(staticDataDir)) {
    fs.mkdirSync(staticDataDir, { recursive: true });
}

fs.writeFileSync(path.join(dataDir, 'chemicals.json'), JSON.stringify(CHEMICAL_DB, null, 2));
fs.writeFileSync(path.join(dataDir, 'resources.json'), JSON.stringify(RESOURCES_DB, null, 2));
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(MOCK_PRODUCTS, null, 2));
fs.writeFileSync(path.join(dataDir, 'industries.json'), JSON.stringify(INDUSTRIES, null, 2));
fs.writeFileSync(path.join(dataDir, 'blog.json'), JSON.stringify(MOCK_BLOG_POSTS, null, 2));
fs.writeFileSync(path.join(dataDir, 'case_studies.json'), JSON.stringify(MOCK_CASE_STUDIES, null, 2));

// Export products to static for client-side RFQ logic
fs.writeFileSync(path.join(staticDataDir, 'products.json'), JSON.stringify(MOCK_PRODUCTS, null, 2));

console.log('Data exported to Hugo data directory and static/data.');
