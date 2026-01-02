import React, { useState } from 'react';
import { FlaskConical, TrendingUp, ShieldCheck, Scale, AlertTriangle, Search, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MaterialScience: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'comparison' | 'lcc' | 'chemical'>('comparison');
   const [chemicalQuery, setChemicalQuery] = useState('');
   const [chemicalResult, setChemicalResult] = useState<null | { chemical: string, rating: string, resin: string, note: string }>(null);

   // Mock Chemical Database
   const chemicalDB = [
      { chemical: 'Sulphuric Acid (10%)', rating: 'Excellent', resin: 'Isophthalic', note: 'Standard Iso resin handles dilute acids well up to 60°C.' },
      { chemical: 'Sulphuric Acid (50%)', rating: 'Good', resin: 'Vinyl Ester', note: 'Requires premium Vinyl Ester barrier for long-term exposure.' },
      { chemical: 'Hydrochloric Acid', rating: 'Excellent', resin: 'Vinyl Ester', note: 'Vinyl Ester recommended for fumes and direct splash.' },
      { chemical: 'Sodium Hydroxide', rating: 'Fair', resin: 'Special Bisphenol', note: 'Alkalis attack glass. Synthetic veil barrier essential.' },
      { chemical: 'Sea Water', rating: 'Excellent', resin: 'Isophthalic', note: 'Zero corrosion. Standard choice for coastal assets.' },
      { chemical: 'Diesel / Petrol', rating: 'Good', resin: 'Isophthalic', note: 'Surface mat required to prevent wicking.' },
      { chemical: 'Chlorine Water', rating: 'Good', resin: 'Vinyl Ester', note: 'Prevent rapid oxidation of surface.' },
   ];

   const handleSearch = () => {
      if (!chemicalQuery.trim()) return;
      const found = chemicalDB.find(c => c.chemical.toLowerCase().includes(chemicalQuery.toLowerCase()));
      setChemicalResult(found || { chemical: chemicalQuery, rating: 'Unknown', resin: 'Consult Engineering', note: 'Chemical not in public database. Please request a lab test.' });
   };

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleSearch();
   };

   return (
      <div className="bg-neutral-50 text-neutral-900 min-h-screen font-sans">
         <SEO
            title="Material Science | Advanced FRP Engineering | EMPHZ"
            description="Explore the advanced material science behind our GRP composites, including chemical resistance matrices, lifecycle costing, and physical property benchmarks."
         />

         {/* Hero */}
         <div className="relative pb-24 md:pb-32 bg-neutral-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-dots opacity-5"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                  <div className="max-w-3xl">
                     <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                        <Microscope size={16} /> Technical Lab
                     </div>
                     <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        Composite <span className="text-blue-500">Material Science.</span>
                     </h1>
                     <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl">
                        Glass Reinforced Plastic (GRP) is an engineered solution for aggressive environments where traditional materials fail. We prioritize chemical stability, thermal insulation, and structural integrity.
                     </p>
                  </div>
                  <div className="hidden md:block">
                     <div className="w-32 h-32 rounded-3xl border border-white/10 glass flex items-center justify-center">
                        <div className="text-center">
                           <div className="text-2xl font-bold text-white font-mono">25%</div>
                           <div className="text-[10px] uppercase text-blue-400 font-bold tracking-widest mt-1">Weight Index</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Navigation Tabs */}
         <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
               <div className="flex space-x-8 min-w-max">
                  {[
                     { id: 'comparison', label: 'Property Matrix' },
                     { id: 'lcc', label: 'Lifecycle Costing' },
                     { id: 'chemical', label: 'Resin Database' },
                  ].map(tab => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`py-6 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === tab.id ? 'border-blue-600 text-neutral-900' : 'border-transparent text-neutral-400 hover:text-neutral-600'}`}
                     >
                        {tab.label}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

            {/* COMP TAB */}
            {activeTab === 'comparison' && (
               <div className="animate-fade-in space-y-16">
                  <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">Material Property Matrix</h2>
                     <p className="text-neutral-600 font-light">Technical comparison of Fiber Reinforced Composites versus traditional metallic substrates.</p>
                  </div>

                  <div className="overflow-x-auto glass rounded-3xl border border-neutral-200 shadow-2xl bg-white/40">
                     <table className="w-full min-w-[800px] text-sm font-mono">
                        <thead className="bg-neutral-900 text-white">
                           <tr>
                              <th className="p-6 text-left font-semibold uppercase tracking-wider w-1/4">Metric</th>
                              <th className="p-6 text-center font-bold text-blue-500 w-1/4 border-l border-white/5">EMPHZ_GRP_V1</th>
                              <th className="p-6 text-center font-bold w-1/4 border-l border-white/5 text-neutral-400">Mild Steel</th>
                              <th className="p-6 text-center font-bold w-1/4 border-l border-white/5 text-neutral-400">Stain. Steel</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                           {[
                              { prop: 'Corrosion Resistance', grp: 'Inert / Non-Corrosive', ms: 'Oxidizes / Poor', ss: 'Pitting Risk / Good' },
                              { prop: 'Density (Metric)', grp: '1.8 g/cm³', ms: '7.8 g/cm³', ss: '8.0 g/cm³' },
                              { prop: 'Dielectric Strength', grp: 'Full Insulation', ms: 'Conductive', ss: 'Conductive' },
                              { prop: 'Heat Conductivity', grp: 'Insulative (Static)', ms: 'High Energy Loss', ss: 'High Energy Loss' },
                              { prop: 'Impact Resistance', grp: 'IK10 / Elastic', ms: 'IK10 / Plastic', ss: 'IK10 / Plastic' },
                              { prop: 'RF Transparency', grp: 'Fully Transparent', ms: 'EMI Shielding', ss: 'EMI Shielding' },
                              { prop: 'Service Lifestyle', grp: 'Zero Maintenance', ms: 'Mandatory Coating', ss: 'Chemical Cleaning' },
                              { prop: 'Capital Intensity', grp: 'Optimal ROI', ms: 'Low CAPEX', ss: 'High CAPEX' },
                           ].map((row, i) => (
                              <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                 <td className="p-6 font-bold text-neutral-900 bg-neutral-50/50">{row.prop}</td>
                                 <td className="p-6 text-center font-bold text-blue-600 bg-blue-50/10 border-x border-neutral-100">{row.grp}</td>
                                 <td className="p-6 text-center text-neutral-500">{row.ms}</td>
                                 <td className="p-6 text-center text-neutral-500">{row.ss}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="glass p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center bg-white/60">
                        <Scale className="w-10 h-10 text-blue-600 mb-4" />
                        <h4 className="font-semibold text-lg text-neutral-900 mb-2">Mass Reduction</h4>
                        <p className="text-sm text-neutral-600 font-light">75% weight reduction facilitates rapid site deployment and reduced foundation requirements.</p>
                     </div>
                     <div className="glass p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center bg-white/60">
                        <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                        <h4 className="font-semibold text-lg text-neutral-900 mb-2">Dielectric Barrier</h4>
                        <p className="text-sm text-neutral-600 font-light">Inherent insulative properties eliminate the risk of step-and-touch voltage hazards.</p>
                     </div>
                     <div className="glass p-8 rounded-2xl border border-neutral-200 flex flex-col items-center text-center bg-white/60">
                        <AlertTriangle className="w-10 h-10 text-blue-600 mb-4" />
                        <h4 className="font-semibold text-lg text-neutral-900 mb-2">Low Salvage Value</h4>
                        <p className="text-sm text-neutral-600 font-light">Unlike scrap-intensive metals, GRP discourages theft at remote, unmonitored installations.</p>
                     </div>
                  </div>
               </div>
            )}

            {/* LCC TAB */}
            {activeTab === 'lcc' && (
               <div className="animate-fade-in">
                  <div className="flex flex-col lg:flex-row gap-16 items-center">
                     <div className="lg:w-1/2">
                        <div className="bg-blue-600/10 inline-block px-4 py-1 rounded-full text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Financial Feasibility</div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6 tracking-tight">CapEx vs. OpEx Analysis.</h2>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-6 font-light">
                           While metallic enclosures offer a lower initial procurement cost, the operating expenditures associated with corrosion management and asset replacement negatively impact long-term project margins.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8 font-light">
                           Our composite systems eliminate recurring maintenance cycles. Cross-over analysis typically shows total price parity within 36 months of deployment in high-salinity zones.
                        </p>
                        <div className="glass p-6 rounded-xl border-l-4 border-blue-600 bg-white/60">
                           <div className="flex items-center gap-4 text-neutral-900 font-bold text-xl mb-1">
                              <TrendingUp className="text-blue-600" /> +300% Life-Cycle ROI
                           </div>
                           <p className="text-sm text-neutral-500 font-light">Cumulative savings calculated over a 20-year operational window in industrial environments.</p>
                        </div>
                     </div>

                     <div className="lg:w-1/2 w-full">
                        <div className="bg-neutral-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden text-white h-[400px] flex flex-col border border-white/5">
                           <div className="absolute inset-0 bg-dots opacity-5"></div>
                           <h3 className="text-center font-bold uppercase tracking-widest text-[10px] text-neutral-400 mb-8 relative z-10">Asset Cost Projection Index</h3>

                           <div className="flex-grow relative border-l border-b border-neutral-700 mx-4 mb-4 z-10">
                              {/* Grid Lines */}
                              <div className="absolute top-1/4 left-0 w-full h-px bg-neutral-800/50"></div>
                              <div className="absolute top-2/4 left-0 w-full h-px bg-neutral-800/50"></div>
                              <div className="absolute top-3/4 left-0 w-full h-px bg-neutral-800/50"></div>

                              {/* GRP Line (Flat) */}
                              <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                              <div className="absolute bottom-1/4 right-0 transform translate-x-2 -translate-y-4 text-blue-400 font-bold text-[10px] font-mono">GRP_COMPOSITE</div>

                              {/* Steel Line (Steep) */}
                              <div className="absolute bottom-0 left-0 w-full h-[85%] border-t-2 border-neutral-500 transform origin-bottom-left skew-y-[-28deg] opacity-70"></div>
                              <div className="absolute top-0 right-0 transform translate-x-2 text-neutral-400 font-bold text-[10px] font-mono">METALLIC_STD</div>

                              {/* Crossover Point */}
                              <div className="absolute bottom-[28%] left-[22%] w-3 h-3 bg-blue-600 rounded-full border-2 border-neutral-900 z-10 shadow-lg shadow-blue-500/50"></div>
                              <div className="absolute bottom-[35%] left-[20%] text-[9px] text-blue-300 bg-blue-900/50 backdrop-blur-md px-2 py-1 rounded border border-blue-500/30 uppercase tracking-tighter">Parity @ Month 36</div>
                           </div>

                           <div className="flex justify-between text-[9px] text-neutral-500 px-4 font-mono relative z-10 uppercase tracking-widest">
                              <span>Init</span>
                              <span>Y-05</span>
                              <span>Y-10</span>
                              <span>Y-15</span>
                              <span>Y-20</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* CHEMICAL TAB */}
            {activeTab === 'chemical' && (
               <div className="animate-fade-in max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                     <FlaskConical className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                     <h2 className="text-3xl font-semibold text-neutral-900 mb-4 tracking-tight">Chemical Resistance Index</h2>
                     <p className="text-neutral-600 font-light">The chemical integrity of a composite system is governed by its resin matrix. Query our database for performance ratings against specific media.</p>
                  </div>

                  <div className="glass p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-xl bg-white/60">
                     <div className="relative max-w-xl mx-auto mb-10">
                        <input
                           type="text"
                           value={chemicalQuery}
                           onChange={(e) => setChemicalQuery(e.target.value)}
                           onKeyDown={handleKeyDown}
                           placeholder="Enter chemical medium (e.g. Sulphuric Acid)..."
                           className="w-full pl-6 pr-14 py-4 rounded-2xl border border-neutral-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-base shadow-sm bg-white"
                        />
                        <button
                           onClick={handleSearch}
                           className="absolute right-2 top-2 bottom-2 w-12 bg-neutral-950 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                           <Search size={20} />
                        </button>
                     </div>

                     {chemicalResult && (
                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-xl animate-fade-in">
                           <div className="flex justify-between items-start mb-6 border-b border-neutral-50 pb-4">
                              <h3 className="text-xl font-semibold text-neutral-900">{chemicalResult.chemical}</h3>
                              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${chemicalResult.rating === 'Excellent' ? 'bg-green-50 text-green-700 border border-green-100' : chemicalResult.rating === 'Good' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'}`}>
                                 {chemicalResult.rating}
                              </span>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div>
                                 <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-[0.2em] block mb-2">Recommended Matrix</span>
                                 <div className="text-blue-600 font-semibold text-lg">{chemicalResult.resin}</div>
                              </div>
                              <div>
                                 <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-[0.2em] block mb-2">Technical Commentary</span>
                                 <div className="text-neutral-600 text-sm leading-relaxed font-light italic">"{chemicalResult.note}"</div>
                              </div>
                           </div>
                        </div>
                     )}

                     {!chemicalResult && (
                        <div className="text-center text-neutral-400 text-xs tracking-wide py-8 font-mono">
                           READY_FOR_QUERY: ["Sea Water", "Diesel", "Chlorine"]
                        </div>
                     )}
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                     <div className="p-6 glass rounded-2xl border border-neutral-100 bg-white/40">
                        <div className="font-semibold text-neutral-900 mb-2 uppercase text-xs tracking-widest">Orthophthalic</div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">General purpose systems. Optimal for water management and light atmospheric exposure.</p>
                     </div>
                     <div className="p-6 glass rounded-2xl border border-blue-100 bg-blue-50/10">
                        <div className="font-semibold text-blue-700 mb-2 uppercase text-xs tracking-widest">Isophthalic (Standard)</div>
                        <p className="text-xs text-neutral-600 font-light leading-relaxed">High-performance water and corrosion barrier. Our default for coastal infrastructure.</p>
                     </div>
                     <div className="p-6 glass rounded-2xl border border-neutral-100 bg-white/40">
                        <div className="font-semibold text-neutral-900 mb-2 uppercase text-xs tracking-widest">Vinyl Ester</div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">Premium industrial grade. Engineered for aggressive acids, alkalis, and thermal loads.</p>
                     </div>
                  </div>
               </div>
            )}

         </div>

         <div className="bg-neutral-950 py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-dots opacity-5"></div>
            <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 tracking-tight">Requirement Technical Review?</h3>
               <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
                  Contact Laboratory <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>

      </div>
   );
};

export default MaterialScience;