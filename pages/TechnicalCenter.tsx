import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, BookOpen, PenTool, FileText, Download, Terminal, Cpu, Thermometer, Activity, Server, AlertTriangle, CheckCircle2, FlaskConical, Search, X } from 'lucide-react';
import { askTechnicalAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';
import GatedDownloadModal from '../components/GatedDownloadModal';

// --- DATA ---

const CHEMICAL_DB = [
   { name: 'Acetic Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Acetic Acid', conc: '50%', temp: '60°C', resin: 'Vinyl Ester', rating: 'Caution' },
   { name: 'Acetone', conc: '100%', temp: '-', resin: 'None', rating: 'Avoid' },
   { name: 'Aluminum Chloride', conc: 'Sat.', temp: '100°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Ammonium Hydroxide', conc: '20%', temp: '40°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
   { name: 'Benzene', conc: 'Pure', temp: '-', resin: 'None', rating: 'Avoid' },
   { name: 'Calcium Chloride', conc: 'Sat.', temp: '95°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Chlorine Water', conc: 'Sat.', temp: '80°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Diesel Fuel', conc: '100%', temp: '60°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Ethanol', conc: '50%', temp: '40°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Hydrochloric Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Hydrochloric Acid', conc: '37%', temp: '90°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Nitric Acid', conc: '20%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Caution' },
   { name: 'Phosphoric Acid', conc: '80%', temp: '100°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Sea Water', conc: '100%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Sodium Hydroxide', conc: '10%', temp: '60°C', resin: 'Synthetic Veil + VE', rating: 'Caution' },
   { name: 'Sodium Hypochlorite', conc: '15%', temp: '50°C', resin: 'Vinyl Ester', rating: 'Recommended' },
   { name: 'Sulphuric Acid', conc: '25%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
   { name: 'Sulphuric Acid', conc: '75%', temp: '60°C', resin: 'Vinyl Ester', rating: 'Caution' },
   { name: 'Water (Potable)', conc: '100%', temp: '60°C', resin: 'Isophthalic (WRAS)', rating: 'Recommended' },
];

// --- SUB-COMPONENTS ---

// 1. Typewriter Effect for Terminal
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
   const [displayedText, setDisplayedText] = useState('');

   useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
         setDisplayedText((prev) => {
            if (index >= text.length) {
               clearInterval(intervalId);
               return prev;
            }
            const nextChar = text.charAt(index);
            index++;
            return prev + nextChar;
         });
      }, 15);
      return () => clearInterval(intervalId);
   }, [text]);

   return <span dangerouslySetInnerHTML={{
      __html: displayedText.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b class="text-white">$1</b>')
   }} />;
};

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
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 font-mono h-full flex flex-col">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <Thermometer size={20} />
               </div>
               <div>
                  <h3 className="text-white font-bold text-lg leading-none">Thermal Sizing</h3>
                  <span className="text-xs text-slate-500">Heat Transfer Simulation</span>
               </div>
            </div>
            <div className="text-[10px] text-slate-600 border border-slate-800 px-2 py-1 rounded bg-black">
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
                        <span className="text-[10px] text-slate-500 block mb-1">HEIGHT</span>
                        <input type="number" value={dims.h || ''} onChange={e => handleDimChange('h', e.target.value)} className="w-full bg-black border border-slate-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                     <div>
                        <span className="text-[10px] text-slate-500 block mb-1">WIDTH</span>
                        <input type="number" value={dims.w || ''} onChange={e => handleDimChange('w', e.target.value)} className="w-full bg-black border border-slate-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                     <div>
                        <span className="text-[10px] text-slate-500 block mb-1">DEPTH</span>
                        <input type="number" value={dims.d || ''} onChange={e => handleDimChange('d', e.target.value)} className="w-full bg-black border border-slate-700 rounded p-2 text-white text-sm focus:border-blue-500 outline-none" placeholder="0" />
                     </div>
                  </div>
               </div>

               <div>
                  <label className="text-xs text-blue-500 font-bold uppercase tracking-wider block mb-3">Thermal Load</label>
                  <div className="flex items-center gap-4 bg-slate-950 p-3 rounded border border-slate-800">
                     <div className="flex-1">
                        <span className="text-[10px] text-slate-500 block mb-1">INTERNAL HEAT (WATTS)</span>
                        <input type="number" value={heatLoad} onChange={e => setHeatLoad(Number(e.target.value))} className="w-full bg-transparent border-none p-0 text-white font-bold text-lg focus:ring-0" />
                     </div>
                     <Activity className="text-slate-600" size={20} />
                  </div>
                  <input
                     type="range" min="0" max="500" value={heatLoad} onChange={e => setHeatLoad(Number(e.target.value))}
                     className="w-full mt-3 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="text-[10px] text-slate-500 block mb-1 uppercase">Ambient Temp (°C)</label>
                     <input type="number" value={ambient} onChange={e => setAmbient(Number(e.target.value))} className="w-full bg-black border border-slate-700 rounded p-2 text-white text-sm" />
                  </div>
                  <div>
                     <label className="text-[10px] text-slate-500 block mb-1 uppercase">Mounting</label>
                     <select value={install} onChange={e => setInstall(e.target.value as 'wall' | 'free')} className="w-full bg-black border border-slate-700 rounded p-2 text-white text-sm focus:ring-1 focus:ring-blue-600 outline-none">
                        <option value="wall">Wall Mount</option>
                        <option value="free">Free Standing</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* Results */}
            <div className="bg-black/40 rounded-xl border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
               {/* Scanline effect for result box */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>

               <div>
                  <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">Simulation Results</h4>

                  <div className="space-y-4">
                     <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                        <span className="text-xs text-slate-500">Effective Surface Area</span>
                        <span className="text-sm font-bold text-white">{result.area} m²</span>
                     </div>
                     <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                        <span className="text-xs text-slate-500">Temp Rise (ΔT)</span>
                        <span className="text-sm font-bold text-blue-500">+{result.dt} °C</span>
                     </div>
                     <div className="flex justify-between items-end pb-2">
                        <span className="text-xs text-slate-500">Final Internal Temp</span>
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
                     <p className="text-[10px] text-slate-400 leading-relaxed">
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
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 font-mono h-full flex flex-col">
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <FlaskConical size={20} />
               </div>
               <div>
                  <h3 className="text-white font-bold text-lg leading-none">Chemical Compatibility</h3>
                  <span className="text-xs text-slate-500">Resin Selection Matrix (ASTM C581)</span>
               </div>
            </div>
         </div>

         <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
               type="text"
               placeholder="Search chemical..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               className="w-full bg-black border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            {query && (
               <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                  <X size={14} />
               </button>
            )}
         </div>

         <div className="flex-grow overflow-hidden rounded-xl border border-slate-800 bg-black/20">
            <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-slate-700">
               <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/50 sticky top-0 text-slate-400 font-bold uppercase tracking-wider backdrop-blur-md">
                     <tr>
                        <th className="p-4 border-b border-slate-800">Medium</th>
                        <th className="p-4 border-b border-slate-800">Conc.</th>
                        <th className="p-4 border-b border-slate-800">Max Temp</th>
                        <th className="p-4 border-b border-slate-800">Resin Rec.</th>
                        <th className="p-4 border-b border-slate-800 text-right">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                     {filtered.length > 0 ? (
                        filtered.map((item, i) => (
                           <tr key={i} className="hover:bg-white/5 transition-colors group">
                              <td className="p-4 font-bold text-white">{item.name}</td>
                              <td className="p-4 text-slate-400">{item.conc}</td>
                              <td className="p-4 text-slate-400">{item.temp}</td>
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
                           <td colSpan={5} className="p-8 text-center text-slate-500 italic">
                              No chemicals found matching &quot;{query}&quot;. <br />
                              <span className="text-[10px] not-italic text-blue-500 cursor-pointer hover:underline" onClick={() => setQuery('')}>Clear search</span>
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="mt-4 text-[10px] text-slate-600 flex justify-between items-center">
            <span>SOURCE: ASTM C581-15 COMPLIANCE MATRIX</span>
            <span>{filtered.length} RECORDS</span>
         </div>
      </div>
   );
};

// --- MAIN PAGE ---

const TechnicalCenter: React.FC = () => {
   const [activeModule, setActiveModule] = useState<'terminal' | 'thermal' | 'chemical' | 'library'>('terminal');
   const [input, setInput] = useState('');
   const [messages, setMessages] = useState<ChatMessage[]>([
      { role: 'model', text: "System initialized. Emphz Technical Database v1.0 online. \nType a query or select a module from the sidebar." }
   ]);
   const [isLoading, setIsLoading] = useState(false);
   const messagesEndRef = useRef<HTMLDivElement>(null);
   const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
   const [fileToDownload, setFileToDownload] = useState<{ title: string; type: string } | null>(null);
   const [apiKey, setApiKey] = useState(localStorage.getItem('emphz_gemini_key') || '');

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   const handleSend = async () => {
      if (!input.trim()) return;

      const userMsg: ChatMessage = { role: 'user', text: input };
      setMessages(prev => [...prev, userMsg]);
      setInput('');
      setIsLoading(true);

      const responseText = await askTechnicalAssistant(input, apiKey);

      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
   };

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSend();
      }
   };

   const handleDownloadClick = (file: { title: string; type: string }) => {
      setFileToDownload(file);
      setIsDownloadModalOpen(true);
   };

   const downloadCategories = [
      { title: 'Product Datasheets', count: 12, icon: <FileText className="w-4 h-4" />, type: 'PDF' },
      { title: 'Brochures & Flyers', count: 4, icon: <BookOpen className="w-4 h-4" />, type: 'PDF' },
      { title: 'Installation Manuals', count: 8, icon: <PenTool className="w-4 h-4" />, type: 'PDF' },
      { title: 'Certifications (ISO/IP)', count: 3, icon: <Download className="w-4 h-4" />, type: 'ZIP' },
   ];

   return (
      <>
         <div className="bg-slate-950 min-h-screen text-slate-300 font-mono">
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

            <div className="bg-slate-900 py-12 relative overflow-hidden border-b border-white/5">
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
                  <div className="hidden md:flex items-center gap-6 text-[10px] text-slate-500 font-mono">
                     <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${apiKey ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                        {apiKey ? 'ENCRYPTION: ACTIVE' : 'ENCRYPTION: OFFLINE'}
                     </div>
                     {!apiKey && (
                        <div className="flex items-center bg-black border border-gray-700 rounded px-2">
                           <input
                              type="password"
                              placeholder="ENTER_API_KEY"
                              className="bg-transparent text-white w-24 focus:outline-none py-1"
                              onKeyDown={(e) => {
                                 if (e.key === 'Enter') {
                                    setApiKey(e.currentTarget.value);
                                    localStorage.setItem('emphz_gemini_key', e.currentTarget.value);
                                 }
                              }}
                           />
                        </div>
                     )}
                     {apiKey && (
                        <button onClick={() => { setApiKey(''); localStorage.removeItem('emphz_gemini_key'); }} className="hover:text-red-400 decoration-slice">
                           [DISCONNECT]
                        </button>
                     )}
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)] min-h-[600px]">

               {/* Navigation Sidebar */}
               <div className="lg:col-span-3 flex flex-col gap-4">
                  {/* Module Selector */}
                  <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-2 space-y-1 backdrop-blur-md">
                     <button
                        onClick={() => setActiveModule('terminal')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'terminal' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <Terminal size={16} /> KNOWLEDGE_BASE
                     </button>
                     <div className="pt-2 pb-1 px-4 text-[9px] font-bold text-slate-600 uppercase tracking-widest">Calculators</div>
                     <button
                        onClick={() => setActiveModule('thermal')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'thermal' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <Thermometer size={16} /> THERMAL_LOAD
                     </button>
                     <button
                        onClick={() => setActiveModule('chemical')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'chemical' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <FlaskConical size={16} /> CHEM_RESIST
                     </button>
                     <div className="pt-2 pb-1 px-4 text-[9px] font-bold text-slate-600 uppercase tracking-widest">Resources</div>
                     <button
                        onClick={() => setActiveModule('library')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold transition-all ${activeModule === 'library' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                     >
                        <Server size={16} /> ASSET_LIBRARY
                     </button>
                  </div>

                  {/* Dynamic Sidebar Content */}
                  <div className="flex-grow bg-[#0B1120] rounded-xl border border-gray-800 p-4 overflow-y-auto">
                     <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                        {activeModule === 'terminal' ? 'Recent Queries' : 'Module Info'}
                     </h3>

                     {activeModule === 'library' && (
                        <div className="space-y-1">
                           {downloadCategories.map((cat, i) => (
                              <button key={i} onClick={() => handleDownloadClick({ title: cat.title, type: cat.type })} className="w-full text-left p-3 hover:bg-white/5 rounded flex items-center justify-between group transition-colors">
                                 <div className="flex items-center gap-3">
                                    <span className="text-gray-600 group-hover:text-emphz-teal transition-colors">{cat.icon}</span>
                                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{cat.title}</span>
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

                     {activeModule === 'terminal' && (
                        <div className="text-center py-8">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mx-auto mb-2"></div>
                           <p className="text-[10px] text-gray-600">Awaiting Input...</p>
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
                  {activeModule === 'terminal' && (
                     <div className="bg-black rounded-xl shadow-2xl border border-slate-800 flex flex-col h-full overflow-hidden relative z-10">
                        <div className="bg-slate-900/50 p-3 flex items-center justify-between border-b border-slate-800 backdrop-blur-sm">
                           <div className="flex items-center text-xs font-mono font-bold text-slate-400">
                              <Terminal size={12} className="mr-2 text-blue-500" /> KNOWLEDGE_BASE_STREAM
                           </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
                           {messages.map((msg, idx) => (
                              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                 <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                    <span className={`text-[10px] uppercase font-bold mb-1 block tracking-widest ${msg.role === 'user' ? 'text-blue-500' : 'text-slate-500'}`}>
                                       {msg.role === 'user' ? 'USER_QUERY' : 'DOC_OUTPUT'}
                                    </span>
                                    <div className={`inline-block p-4 rounded-lg text-xs leading-relaxed border shadow-lg ${msg.role === 'user'
                                       ? 'bg-blue-600/10 border-blue-500/30 text-slate-300'
                                       : 'bg-slate-900/80 border-slate-700 text-blue-400 font-medium'
                                       }`}>
                                       {msg.role === 'model' && idx === 0 ? <TypewriterText text={msg.text} /> : msg.text}
                                    </div>
                                 </div>
                              </div>
                           ))}
                           {isLoading && (
                              <div className="flex justify-start">
                                 <div className="bg-slate-900 border border-slate-800 p-3 rounded-md flex items-center text-blue-500 text-xs shadow-[0_0_15px_rgba(30,64,175,0.1)]">
                                    <Loader2 className="animate-spin h-3 w-3 mr-2" />
                                    <span className="animate-pulse">QUERYING_DB...</span>
                                 </div>
                              </div>
                           )}
                           <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 bg-slate-900/80 border-t border-slate-800 backdrop-blur-sm">
                           <div className="relative flex items-center bg-black border border-slate-700 rounded-md px-3 focus-within:border-blue-500 transition-all">
                              <span className="text-blue-500 font-bold mr-2 text-sm animate-pulse">$</span>
                              <input
                                 type="text"
                                 value={input}
                                 onChange={(e) => setInput(e.target.value)}
                                 onKeyDown={handleKeyDown}
                                 placeholder="Type a technical question..."
                                 className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-slate-600 outline-none text-sm h-12 font-mono"
                                 autoComplete="off"
                              />
                              <button
                                 onClick={handleSend}
                                 disabled={isLoading || !input.trim()}
                                 className="text-slate-500 hover:text-blue-500 disabled:opacity-30 transition-colors p-2"
                              >
                                 <Send size={16} />
                              </button>
                           </div>
                        </div>
                     </div>
                  )}

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
                     <div className="bg-black rounded-xl shadow-2xl border border-gray-800 flex flex-col h-full relative z-10 animate-fade-in p-8 flex items-center justify-center text-center">
                        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-800">
                           <Server className="text-gray-500" size={32} />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Secure Asset Library</h3>
                        <p className="text-gray-500 text-sm max-w-md mb-8">
                           Select a category from the sidebar to access restricted engineering documents, CAD files, and certification reports.
                        </p>
                        <button
                           onClick={() => handleDownloadClick({ title: 'Full Technical Catalog 2025', type: 'ZIP' })}
                           className="bg-emphz-teal text-emphz-navy font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-widest hover:bg-white transition-colors"
                        >
                           Download Full Catalog
                        </button>
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