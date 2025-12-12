import React, { useState } from 'react';
import { FlaskConical, TrendingUp, ShieldCheck, Scale, AlertTriangle, CheckCircle2, Factory, Search, Microscope, Layers, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="bg-white text-emphz-navy min-h-screen">
      
      {/* Hero */}
      <div className="relative py-24 md:py-32 bg-[#0B1120] text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-emphz-teal/20 to-transparent opacity-30"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-emphz-teal font-bold tracking-[0.2em] uppercase text-xs mb-4">
                     <Microscope size={16} /> Material Science
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black font-display leading-tight mb-6">
                     The Physics of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal to-white">Longevity.</span>
                  </h1>
                  <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl font-sans">
                     Why global infrastructure is shifting from metals to advanced composites. A technical deep-dive into Life Cycle Costing, corrosion mechanics, and resin chemistry.
                  </p>
               </div>
               <div className="hidden md:block">
                  <div className="w-32 h-32 rounded-full border-4 border-emphz-teal/30 flex items-center justify-center animate-pulse">
                     <div className="text-center">
                        <div className="text-2xl font-black text-white font-display">1/4</div>
                        <div className="text-[10px] uppercase text-emphz-teal font-bold tracking-widest">Weight of Steel</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-200 shadow-sm">
         <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-8 min-w-max">
               {[
                  { id: 'comparison', label: 'Material Matrix' },
                  { id: 'lcc', label: 'Life Cycle Costing' },
                  { id: 'chemical', label: 'Chemical Resistance' },
               ].map(tab => (
                  <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id as any)}
                     className={`py-6 text-sm font-bold uppercase tracking-widest border-b-4 transition-all ${activeTab === tab.id ? 'border-emphz-teal text-emphz-navy' : 'border-transparent text-gray-400 hover:text-emphz-teal'}`}
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
                  <h2 className="text-3xl font-bold font-display mb-4">Head-to-Head Comparison</h2>
                  <p className="text-gray-600">Comparing Glass Reinforced Plastic (GRP) against industry-standard metals for enclosure and structural applications.</p>
               </div>

               <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
                  <table className="w-full min-w-[800px] text-sm">
                     <thead className="bg-[#0B1120] text-white">
                        <tr>
                           <th className="p-6 text-left font-display font-black uppercase tracking-wider w-1/4">Property</th>
                           <th className="p-6 text-center font-display font-bold text-emphz-teal w-1/4 border-l border-white/10 bg-white/5">Emphz GRP</th>
                           <th className="p-6 text-center font-display font-bold w-1/4 border-l border-white/10 text-gray-400">Mild Steel (Painted)</th>
                           <th className="p-6 text-center font-display font-bold w-1/4 border-l border-white/10 text-gray-400">Stainless Steel (304)</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                        {[
                           { prop: 'Corrosion Resistance', grp: 'Excellent (Inert)', ms: 'Poor (Rusts)', ss: 'Good (Pits)' },
                           { prop: 'Weight (Density)', grp: '1.8 g/cm³', ms: '7.8 g/cm³', ss: '8.0 g/cm³' },
                           { prop: 'Electrical Insulation', grp: 'Non-Conductive', ms: 'Conductive', ss: 'Conductive' },
                           { prop: 'Thermal Conductivity', grp: 'Low (Insulator)', ms: 'High', ss: 'High' },
                           { prop: 'Impact Strength', grp: 'High (IK10)', ms: 'High (IK10)', ss: 'High (IK10)' },
                           { prop: 'Radar/RF Transparency', grp: 'Transparent', ms: 'Blocking', ss: 'Blocking' },
                           { prop: 'Maintenance Req.', grp: 'None', ms: 'Regular Painting', ss: 'Cleaning Required' },
                           { prop: 'Cost (Initial)', grp: 'Moderate', ms: 'Low', ss: 'High' },
                        ].map((row, i) => (
                           <tr key={i} className="hover:bg-gray-50 transition-colors">
                              <td className="p-6 font-bold text-gray-700 bg-gray-50/50">{row.prop}</td>
                              <td className="p-6 text-center font-bold text-emphz-teal bg-emphz-teal/5 border-x border-gray-100">{row.grp}</td>
                              <td className="p-6 text-center text-gray-500">{row.ms}</td>
                              <td className="p-6 text-center text-gray-500">{row.ss}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                     <Scale className="w-10 h-10 text-emphz-navy mb-4" />
                     <h4 className="font-bold text-lg mb-2">Weight Savings</h4>
                     <p className="text-sm text-gray-600">GRP is 75% lighter than steel. This drastically reduces transportation costs and allows for easier installation without heavy cranes.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                     <ShieldCheck className="w-10 h-10 text-emphz-navy mb-4" />
                     <h4 className="font-bold text-lg mb-2">Passive Safety</h4>
                     <p className="text-sm text-gray-600">Being electrically non-conductive, GRP enclosures eliminate shock hazards from internal faults, enhancing personnel safety.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                     <AlertTriangle className="w-10 h-10 text-emphz-navy mb-4" />
                     <h4 className="font-bold text-lg mb-2">Vandal Resistance</h4>
                     <p className="text-sm text-gray-600">Unlike steel which has scrap value, GRP has zero scrap value, significantly reducing the risk of theft in public infrastructure.</p>
                  </div>
               </div>
            </div>
         )}

         {/* LCC TAB */}
         {activeTab === 'lcc' && (
            <div className="animate-fade-in">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                   <div className="lg:w-1/2">
                      <div className="bg-emphz-teal/10 inline-block px-4 py-1 rounded-full text-emphz-teal font-bold text-xs uppercase tracking-widest mb-4">Financial Analysis</div>
                      <h2 className="text-3xl md:text-4xl font-black text-emphz-navy mb-6 font-display">The Hidden Cost of "Cheap" Steel.</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                         Procurement decisions are often driven by initial CAPEX. However, in corrosive environments, the OPEX (maintenance, repainting, early replacement) of steel skyrockets.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                         GRP represents a "Fit and Forget" solution. Although the initial investment might be 15-20% higher than mild steel, the crossover point typically occurs at Year 3. Over a 20-year asset life, GRP delivers massive savings.
                      </p>
                      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emphz-teal">
                         <div className="flex items-center gap-4 text-emphz-navy font-bold text-xl mb-1">
                            <TrendingUp /> 300% ROI
                         </div>
                         <p className="text-sm text-gray-500">Typical return on investment over 15 years when switching to GRP in coastal zones.</p>
                      </div>
                   </div>

                   <div className="lg:w-1/2 w-full">
                      {/* Simplified CSS Chart */}
                      <div className="bg-[#0B1120] p-8 rounded-3xl shadow-2xl relative overflow-hidden text-white h-[400px] flex flex-col">
                         <h3 className="text-center font-bold uppercase tracking-widest text-xs text-gray-400 mb-8">Cumulative Cost Over Time</h3>
                         
                         <div className="flex-grow relative border-l border-b border-gray-600 mx-4 mb-4">
                            {/* Grid Lines */}
                            <div className="absolute top-1/4 left-0 w-full h-px bg-gray-700 border-dashed"></div>
                            <div className="absolute top-2/4 left-0 w-full h-px bg-gray-700 border-dashed"></div>
                            <div className="absolute top-3/4 left-0 w-full h-px bg-gray-700 border-dashed"></div>

                            {/* GRP Line (Flat) */}
                            <div className="absolute bottom-1/4 left-0 w-full h-1 bg-emphz-teal transform origin-left scale-x-100 transition-transform duration-1000 shadow-[0_0_10px_#00ADB5]"></div>
                            <div className="absolute bottom-1/4 right-0 transform translate-x-2 -translate-y-2 text-emphz-teal font-bold text-xs">GRP</div>

                            {/* Steel Line (Steep) */}
                            <div className="absolute bottom-0 left-0 w-full h-[80%] border-t-2 border-red-500 bg-gradient-to-t from-red-500/20 to-transparent transform origin-bottom-left skew-y-[-25deg] opacity-50"></div>
                            <div className="absolute top-0 right-0 transform translate-x-2 text-red-500 font-bold text-xs">Steel</div>
                            
                            {/* Crossover Point */}
                            <div className="absolute bottom-[28%] left-[20%] w-4 h-4 bg-white rounded-full border-4 border-emphz-navy z-10 flex items-center justify-center"></div>
                            <div className="absolute bottom-[35%] left-[18%] text-[10px] text-gray-300 bg-black/50 px-2 py-1 rounded">Year 3 Break-Even</div>
                         </div>

                         <div className="flex justify-between text-xs text-gray-500 px-4 font-mono">
                            <span>Year 0</span>
                            <span>Year 5</span>
                            <span>Year 10</span>
                            <span>Year 15</span>
                            <span>Year 20</span>
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
                  <FlaskConical className="w-12 h-12 text-emphz-teal mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-emphz-navy mb-4 font-display">Resin Compatibility Database</h2>
                  <p className="text-gray-600">Not all GRP is the same. The resin matrix determines chemical resistance. Search our database to find the right formulation for your medium.</p>
               </div>

               <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-inner">
                  <div className="relative max-w-xl mx-auto mb-10">
                     <input 
                        type="text" 
                        value={chemicalQuery}
                        onChange={(e) => setChemicalQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter chemical name (e.g. Sulphuric Acid)..."
                        className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-300 focus:border-emphz-teal focus:ring-2 focus:ring-emphz-teal/20 outline-none text-lg shadow-sm"
                     />
                     <button 
                        onClick={handleSearch}
                        className="absolute right-2 top-2 bottom-2 w-12 bg-emphz-navy text-white rounded-full flex items-center justify-center hover:bg-emphz-teal transition-colors"
                     >
                        <Search size={20} />
                     </button>
                  </div>

                  {chemicalResult && (
                     <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-xl animate-fade-up">
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-xl font-bold text-emphz-navy">{chemicalResult.chemical}</h3>
                           <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${chemicalResult.rating === 'Excellent' ? 'bg-green-100 text-green-700' : chemicalResult.rating === 'Good' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                              {chemicalResult.rating}
                           </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Recommended Resin</span>
                              <div className="text-emphz-teal font-bold text-lg">{chemicalResult.resin}</div>
                           </div>
                           <div>
                              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Engineering Note</span>
                              <div className="text-gray-600 text-sm">{chemicalResult.note}</div>
                           </div>
                        </div>
                     </div>
                  )}

                  {!chemicalResult && (
                     <div className="text-center text-gray-400 text-sm italic py-8">
                        Try searching for "Sea Water", "Diesel", or "Chlorine".
                     </div>
                  )}
               </div>
               
               <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                     <div className="font-bold text-emphz-navy mb-2">Orthophthalic</div>
                     <p className="text-xs text-gray-500">General purpose. Good for water and mild atmospheric conditions. Not for aggressive chemicals.</p>
                  </div>
                  <div className="p-4 border-x border-gray-200">
                     <div className="font-bold text-emphz-teal mb-2">Isophthalic (Standard)</div>
                     <p className="text-xs text-gray-500">Superior corrosion and water resistance. Our standard for coastal enclosures.</p>
                  </div>
                  <div className="p-4">
                     <div className="font-bold text-purple-600 mb-2">Vinyl Ester</div>
                     <p className="text-xs text-gray-500">Premium grade. Extreme resistance to acids, alkalis, and solvents. High temperature stability.</p>
                  </div>
               </div>
            </div>
         )}

      </div>

      <div className="bg-gray-50 border-t border-gray-200 py-16 text-center">
         <h3 className="text-2xl font-bold text-emphz-navy mb-6">Need specific technical advice?</h3>
         <Link to="/contact" className="inline-flex items-center justify-center bg-emphz-navy text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emphz-teal transition-all shadow-lg">
            Consult Our Engineers
         </Link>
      </div>

    </div>
  );
};

export default MaterialScience;