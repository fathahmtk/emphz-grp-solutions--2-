import React, { useState } from 'react';
import { BookOpen, PenTool, FileText, Download, Cpu, Thermometer, FlaskConical, Search, X, Server, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';
import GatedDownloadModal from '../components/GatedDownloadModal';
import SEO from '../components/SEO';

// --- DATA ---

const CHEMICAL_DB = [
   // Acids
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

   // Alkalis & Salts
   { name: 'Ammonium Hydroxide', conc: '20%', temp: '40°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
   { name: 'Calcium Chloride', conc: 'Sat.', temp: '95°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Caustic Soda (NaOH)', conc: '10%', temp: '80°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
   { name: 'Chlorine Water', conc: 'Sat.', temp: '80°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Ferric Chloride', conc: 'Sat.', temp: '100°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Potassium Hydroxide', conc: '20%', temp: '50°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
   { name: 'Sea Water', conc: '100%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Sodium Chloride', conc: 'Sat.', temp: '100°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Sodium Hypochlorite', conc: '15%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Recommended' },

   // Solvents & Organics
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

   // Others
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

// --- SUB-COMPONENTS ---

// 2. Thermal Calculator Tool
const ThermalCalculator: React.FC = () => {
   const [dims, setDims] = useState({ h: 600, w: 400, d: 250 });
   const [heatLoad, setHeatLoad] = useState(45); // Watts
   const [ambient, setAmbient] = useState(35); // Celsius
   const [install, setInstall] = useState<'wall' | 'free'>('wall');

   // Heat transfer coefficient for GRP (approx W/m²K)
   const K_GRP = 3.5;

   // Calculation Logic (Simplified VDE 0660 / IEC 60890)
   const calculate = () => {
      const h = (dims.h || 0) / 1000; // meters
      const w = (dims.w || 0) / 1000;
      const d = (dims.d || 0) / 1000;

      // Effective cooling surface area
      let area = 0;
      if (h > 0 && w > 0 && d > 0) {
         if (install === 'wall') {
            // Wall mounted (back covered)
            area = 1.4 * w * (h + d) + 1.8 * d * h;
         } else {
            // Free standing (all sides exposed)
            area = 1.8 * h * (w + d) + 1.4 * w * d;
         }
      }

      // dT = P / (k * A)
      // Avoid division by zero
      const dt = (area > 0 && K_GRP > 0) ? heatLoad / (K_GRP * area) : 0;
      const internalTemp = ambient + dt;

      return {
         area: area.toFixed(2),
         dt: dt.toFixed(1),
         internalTemp: internalTemp.toFixed(1),
         safe: internalTemp <= 55 // Assuming 55C is a generic safe limit for electronics
      };
   };

   const result = calculate();

   const handleDimChange = (key: keyof typeof dims, value: string) => {
      const num = parseFloat(value);
      setDims(prev => ({ ...prev, [key]: isNaN(num) ? 0 : num }));
   };

   return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 font-mono h-full flex flex-col">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Thermometer size={20} />
               </div>
               <div>
                  <h3 className="text-white font-bold text-lg leading-none">Thermal Sizing</h3>
                  <span className="text-xs text-neutral-500">Heat Transfer Simulation</span>
               </div>
            </div>
            <div className="text-[10px] text-neutral-600 border border-neutral-800 px-2 py-1 rounded bg-black">
               VER 2.1.2
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
            {/* Inputs */}
            <div className="space-y-6">
               <div className="space-y-4">
                  <label className="text-xs text-blue-500 font-bold uppercase tracking-wider block">Dimensions (mm)</label>
                  <div className="grid grid-cols-3 gap-3">
                     <div>
                        <span className="text-[10px] text-neutral-500 block mb-1">HEIGHT</span>
                        <input type="number" value={dims.h || ''} onChange={e => handleDimChange('h', e.target.value)} className="w-full bg-black border border-neutral-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                     <div>
                        <span className="text-[10px] text-neutral-500 block mb-1">WIDTH</span>
                        <input type="number" value={dims.w || ''} onChange={e => handleDimChange('w', e.target.value)} className="w-full bg-black border border-neutral-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                     <div>
                        <span className="text-[10px] text-neutral-500 block mb-1">DEPTH</span>
                        <input type="number" value={dims.d || ''} onChange={e => handleDimChange('d', e.target.value)} className="w-full bg-black border border-neutral-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                  </div>
               </div>

               <div>
                  <label className="text-xs text-blue-500 font-bold uppercase tracking-wider block mb-3">Thermal Load</label>
                  <div className="flex items-center gap-4 bg-neutral-950 p-3 rounded border border-neutral-800">
                     <div className="flex-1">
                        <span className="text-[10px] text-neutral-500 block mb-1">INTERNAL HEAT (WATTS)</span>
                        <input type="number" value={heatLoad} onChange={e => setHeatLoad(Number(e.target.value))} className="w-full bg-transparent border-none p-0 text-white font-bold text-lg focus:ring-0" />
                     </div>
                     <Activity className="text-neutral-600" size={20} />
                  </div>
                  <input
                     type="range" min="0" max="500" value={heatLoad} onChange={e => setHeatLoad(Number(e.target.value))}
                     className="w-full mt-3 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="text-[10px] text-neutral-500 block mb-1 uppercase">Ambient Temp (°C)</label>
                     <input type="number" value={ambient} onChange={e => setAmbient(Number(e.target.value))} className="w-full bg-black border border-neutral-700 rounded p-2 text-white text-sm" />
                  </div>
                  <div>
                     <label className="text-[10px] text-neutral-500 block mb-1 uppercase">Mounting</label>
                     <select value={install} onChange={e => setInstall(e.target.value as 'wall' | 'free')} className="w-full bg-black border border-neutral-700 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-600 outline-none">
                        <option value="wall">Wall Mount</option>
                        <option value="free">Free Standing</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* Results */}
            <div className="bg-black/40 rounded-xl border border-neutral-800 p-6 flex flex-col justify-between relative overflow-hidden">
               {/* Scanline effect for result box */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>

               <div>
                  <h4 className="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-6">Simulation Results</h4>

                  <div className="space-y-4">
                     <div className="flex justify-between items-end border-b border-neutral-800 pb-2">
                        <span className="text-xs text-neutral-500">Effective Surface Area</span>
                        <span className="text-sm font-bold text-white">{result.area} m²</span>
                     </div>
                     <div className="flex justify-between items-end border-b border-neutral-800 pb-2">
                        <span className="text-xs text-neutral-500">Temp Rise (ΔT)</span>
                        <span className="text-sm font-bold text-blue-500">+{result.dt} °C</span>
                     </div>
                     <div className="flex justify-between items-end pb-2">
                        <span className="text-xs text-neutral-500">Final Internal Temp</span>
                        <span className={`text-2xl font-black ${result.safe ? 'text-green-500' : 'text-red-500'}`}>{result.internalTemp} °C</span>
                     </div>
                  </div>
               </div>

               <div className={`mt-8 p-4 rounded-lg border flex items-start gap-3 ${result.safe ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                  {result.safe ? <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} /> : <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />}
                  <div>
                     <span className={`block text-xs font-bold mb-1 ${result.safe ? 'text-green-400' : 'text-red-400'}`}>
                        {result.safe ? 'PASS: THERMAL INTEGRITY OK' : 'WARNING: CRITICAL TEMP EXCEEDED'}
                     </span>
                     <p className="text-[10px] text-neutral-400 leading-relaxed">
                        {result.safe
                           ? 'Passive heat dissipation via GRP surface is sufficient.'
                           : 'Internal temperature exceeds 55°C limit. Add ventilation.'}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

// 3. Chemical Resistance Finder (NEW)
const ChemicalFinder: React.FC = () => {
   const [query, setQuery] = useState('');

   const filtered = CHEMICAL_DB.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.resin.toLowerCase().includes(query.toLowerCase())
   );

   return (
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 font-mono h-full flex flex-col">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <FlaskConical size={20} />
               </div>
               <div>
                  <h3 className="text-white font-bold text-lg leading-none">Chemical Compatibility</h3>
                  <span className="text-xs text-neutral-500">Resin Selection Matrix (ASTM C581)</span>
               </div>
            </div>
         </div>

         <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
            <input
               type="text"
               placeholder="Search chemical..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full bg-black border border-neutral-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            {query && (
               <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                  <X size={14} />
               </button>
            )}
         </div>

         <div className="flex-grow overflow-hidden rounded-xl border border-neutral-800 bg-black/20">
            <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-neutral-700">
               <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-900/50 sticky top-0 text-neutral-400 font-bold uppercase tracking-wider backdrop-blur-md">
                     <tr>
                        <th className="p-4 border-b border-neutral-800">Medium</th>
                        <th className="p-4 border-b border-neutral-800">Conc.</th>
                        <th className="p-4 border-b border-neutral-800">Max Temp</th>
                        <th className="p-4 border-b border-neutral-800">Resin Rec.</th>
                        <th className="p-4 border-b border-neutral-800 text-right">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/50">
                     {filtered.length > 0 ? (
                        filtered.map((item, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors group">
                              <td className="p-4 font-bold text-white">{item.name}</td>
                              <td className="p-4 text-neutral-400">{item.conc}</td>
                              <td className="p-4 text-neutral-400">{item.temp}</td>
                              <td className="p-4 text-blue-500 font-semibold">{item.resin}</td>
                              <td className="p-4 text-right">
                                 <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${item.rating === 'Recommended' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                    item.rating === 'Caution' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                       'bg-red-500/10 text-red-500 border-red-500/20'
                                    }`}>
                                    {item.rating === 'Recommended' && <CheckCircle2 size={10} className="mr-1" />}
                                    {item.rating === 'Caution' && <AlertTriangle size={10} className="mr-1" />}
                                    {item.rating === 'Avoid' && <X size={10} className="mr-1" />}
                                    {item.rating}
                                 </span>
                              </td>
                           </tr>
                        ))
                     ) : (
                        <tr>
                           <td colSpan={5} className="p-8 text-center text-neutral-500 italic">
                              No chemicals found matching &quot;{query}&quot;. <br />
                              <span className="text-[10px] not-italic text-blue-500 cursor-pointer hover:underline" onClick={() => setQuery('')}>Clear search</span>
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="mt-4 text-[10px] text-neutral-600 flex justify-between items-center">
            <span>SOURCE: ASTM C581-15 COMPLIANCE MATRIX</span>
            <span>{filtered.length} RECORDS</span>
         </div>
      </div>
   );
};

// --- MAIN PAGE ---

const TechnicalCenter: React.FC = () => {
   const [activeModule, setActiveModule] = useState<'thermal' | 'chemical' | 'library'>('library');
   const [activeCategory, setActiveCategory] = useState('Datasheets');
   const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
   const [fileToDownload, setFileToDownload] = useState<{ title: string; type: string } | null>(null);

   const handleDownloadClick = (file: { title: string; type: string }) => {
      setFileToDownload(file);
      setIsDownloadModalOpen(true);
   };

   const downloadCategories = [
      { title: 'Datasheets', count: RESOURCES_DB.filter(r => r.category === 'Datasheets').length, icon: <FileText className="w-4 h-4" /> },
      { title: 'Brochures', count: RESOURCES_DB.filter(r => r.category === 'Brochures').length, icon: <BookOpen className="w-4 h-4" /> },
      { title: 'Installation', count: RESOURCES_DB.filter(r => r.category === 'Installation').length, icon: <PenTool className="w-4 h-4" /> },
      { title: 'Certifications', count: RESOURCES_DB.filter(r => r.category === 'Certifications').length, icon: <Download className="w-4 h-4" /> },
   ];

   return (
      <>
         <SEO
            title="Technical Center | Datasheets & Support"
            description="Access our Technical Center for GRP datasheets, installation guides, chemical resistance matrices, and direct consultation with our engineering assistant."
         />
         <div className="bg-neutral-950 min-h-screen text-neutral-300 font-mono">
            <style>{`
          .scanline {
            width: 100%;
            height: 100px;
            z-index: 10;
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(30, 64, 175, 0.05) 50%, rgba(0,0,0,0) 100%);
            opacity: 0.1;
            position: absolute;
            bottom: 100%;
            animation: scanline 10s linear infinite;
            pointer-events: none;
          }
          @keyframes scanline {
            0% { bottom: 100%; }
            100% { bottom: -100%; }
          }
        `}</style>

            <div className="bg-neutral-900 pb-12 relative overflow-hidden border-b border-white/5">
               <div className="absolute inset-0 bg-dots opacity-5"></div>
               <div className="max-w-7xl mx-auto px-4 relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <Cpu className="text-blue-500 animate-pulse" size={24} />
                     </div>
                     <div>
                        <h1 className="text-2xl font-semibold text-white tracking-tight">Technical Center</h1>
                        <p className="text-blue-500 font-mono text-xs tracking-wide">
                           {'// CORE_ACCESS: GRANTED // MAN_PROC_V1'}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-120px)] min-h-[600px]">

               {/* Navigation Sidebar */}
               <div className="lg:col-span-3 flex flex-col gap-4">
                  {/* Module Selector */}
                  <div className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-2 space-y-1 backdrop-blur-md">
                     <div className="pt-2 pb-1 px-4 text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Resources</div>
                     <button
                        onClick={() => setActiveModule('library')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'library' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <Server size={16} /> ASSET_LIBRARY
                     </button>
                     <div className="pt-2 pb-1 px-4 text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Calculators</div>
                     <button
                        onClick={() => setActiveModule('thermal')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'thermal' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <Thermometer size={16} /> THERMAL_LOAD
                     </button>
                     <button
                        onClick={() => setActiveModule('chemical')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'chemical' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <FlaskConical size={16} /> CHEM_RESIST
                     </button>
                  </div>

                  {/* Dynamic Sidebar Content */}
                  <div className="flex-grow bg-[#0B1120] rounded-xl border border-gray-800 p-4 overflow-y-auto">
                     <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                        {activeModule === 'library' ? 'Asset Categories' : 'Module Info'}
                     </h3>

                     {activeModule === 'library' && (
                        <div className="space-y-1">
                           {downloadCategories.map((cat, i) => (
                              <button
                                 key={i}
                                 onClick={() => setActiveCategory(cat.title)}
                                 className={`w-full text-left p-3 rounded flex items-center justify-between group transition-colors ${activeCategory === cat.title ? 'bg-white/10' : 'hover:bg-white/5'}`}
                              >
                                 <div className="flex items-center gap-3">
                                    <span className={`transition-colors ${activeCategory === cat.title ? 'text-white' : 'text-gray-600 group-hover:text-emphz-teal'}`}>{cat.icon}</span>
                                    <span className={`text-xs font-bold transition-colors ${activeCategory === cat.title ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{cat.title}</span>
                                 </div>
                                 <span className="text-[9px] bg-black px-1.5 py-0.5 rounded text-gray-600 font-mono">{cat.count}</span>
                              </button>
                           ))}
                        </div>
                     )}

                     {(activeModule === 'thermal' || activeModule === 'chemical') && (
                        <div className="text-xs text-gray-500 space-y-4">
                           {activeModule === 'thermal' && (
                              <div className="p-3 bg-white/5 rounded border border-white/5 border-l-2 border-l-orange-500">
                                 <div className="font-bold text-white mb-1">Thermal Calc</div>
                                 <p className="text-[10px] leading-relaxed">Calculate heat rise in enclosures based on IEC 60890.</p>
                              </div>
                           )}
                           {activeModule === 'chemical' && (
                              <div className="p-3 bg-white/5 rounded border border-white/5 border-l-2 border-l-purple-500">
                                 <div className="font-bold text-white mb-1">Chem. Matrix</div>
                                 <p className="text-[10px] leading-relaxed">Database of GRP resin compatibility for 20+ common industrial reagents.</p>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
               </div>

               {/* Main Content Area */}
               <div className="lg:col-span-9 h-full relative">
                  {/* Background Effects */}
                  <div className="scanline absolute inset-0 pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,173,181,0.03)_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none z-0"></div>

                  {/* View Switching */}

                  {activeModule === 'thermal' && (
                     <div className="h-full z-10 relative animate-fade-in">
                        <ThermalCalculator />
                     </div>
                  )}

                  {activeModule === 'chemical' && (
                     <div className="h-full z-10 relative animate-fade-in">
                        <ChemicalFinder />
                     </div>
                  )}

                  {activeModule === 'library' && (
                     <div className="flex flex-col h-full z-10 relative animate-fade-in">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 h-full flex flex-col">
                           <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                              <h3 className="text-white font-bold text-lg">{activeCategory}</h3>
                              <span className="text-xs text-neutral-500 font-mono">{RESOURCES_DB.filter(r => r.category === activeCategory).length} FILES FOUND</span>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar">
                              {RESOURCES_DB.filter(r => r.category === activeCategory).map((file) => (
                                 <div key={file.id} className="bg-black/40 border border-neutral-800 rounded-lg p-4 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative flex justify-between items-start">
                                       <div className="flex items-start gap-4">
                                          <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-neutral-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                                             {file.format === 'PDF' && <FileText size={20} />}
                                             {file.format === 'ZIP' && <Server size={20} />}
                                          </div>
                                          <div>
                                             <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white mb-1 transition-colors pr-8">{file.title}</h4>
                                             <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono">
                                                <span className="bg-neutral-900 px-1.5 py-0.5 rounded uppercase">{file.format}</span>
                                                <span>{file.size}</span>
                                             </div>
                                          </div>
                                       </div>
                                       <button
                                          onClick={() => handleDownloadClick({ title: file.title, type: file.format })}
                                          className="p-2 text-neutral-500 hover:text-blue-400 bg-neutral-900 rounded-lg border border-transparent hover:border-blue-500/30 transition-all"
                                       >
                                          <Download size={16} />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}

               </div>
            </div>
         </div>

         <GatedDownloadModal
            isOpen={isDownloadModalOpen}
            onClose={() => setIsDownloadModalOpen(false)}
            fileToDownload={fileToDownload}
         />
      </>
   );
};

export default TechnicalCenter;