
import React, { useState } from 'react';
import { Clock, AlertTriangle, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

const MaterialAgingSim: React.FC = () => {
  const [year, setYear] = useState(0);

  // Simulation logic for visual states
  const getSteelState = (y: number) => {
    if (y < 5) return 'Pristine (New)';
    if (y < 15) return 'Surface Oxidation (Rust)';
    if (y < 25) return 'Pitting & Flaking';
    if (y < 40) return 'Structural Thinning';
    return 'CRITICAL FAILURE';
  };

  const getGRPState = (y: number) => {
    if (y < 45) return 'Nominal Integrity';
    return 'Surface Fading (UV Only)';
  };

  return (
    <section id="aging-sim" className="py-24 md:py-32 bg-emphz-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-emphz-silver text-xs font-bold tracking-[0.5em] uppercase mb-4 block">20 / DURABILITY LAB</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase">The 50-Year <br/><span className="text-emphz-silver">Time Machine.</span></h2>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light text-lg">
            Drag the cursor to witness the structural delta between traditional steel and vetted GRP composites in aggressive industrial climates.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Comparison Panels */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* Steel Specimen */}
            <div className="bg-emphz-blue-mid rounded-[3rem] p-10 border border-white/5 relative overflow-hidden group">
               <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-neutral-500">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Specimen_ID</span>
                    <span className="text-white font-mono text-xs font-bold">GALV_STEEL_Q235</span>
                  </div>
               </div>

               <div className="aspect-square bg-black/40 rounded-full mb-12 flex items-center justify-center relative border-8 border-white/5 overflow-hidden">
                  {/* CSS Visual degradation */}
                  <div 
                    className="absolute inset-0 transition-all duration-700"
                    style={{ 
                      backgroundColor: `rgba(185, 28, 28, ${year / 60})`, // Rusted hue
                      filter: `blur(${year / 10}px) contrast(${1 + (year / 50)})`,
                      opacity: year / 50
                    }}
                  ></div>
                  <div className="relative z-10 text-center">
                     <span className="text-6xl font-bold text-white/20 tracking-tighter">{year}Y</span>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                     <span className="text-neutral-500">Structural Status</span>
                     <span className={year > 35 ? 'text-red-500 font-bold animate-pulse' : 'text-neutral-300'}>{getSteelState(year)}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-red-500 transition-all duration-700"
                       style={{ width: `${Math.max(0, 100 - (year * 2.5))}%` }}
                     ></div>
                  </div>
               </div>
            </div>

            {/* GRP Specimen */}
            <div className="bg-emphz-blue-mid rounded-[3rem] p-10 border border-emphz-silver/20 relative overflow-hidden group shadow-2xl shadow-emphz-silver/5">
               <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-emphz-silver/10 flex items-center justify-center text-emphz-silver">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-emphz-silver uppercase tracking-widest font-bold">Specimen_ID</span>
                    <span className="text-white font-mono text-xs font-bold">VETTED_GRP_EMPHZ</span>
                  </div>
               </div>

               <div className="aspect-square bg-emphz-silver/5 rounded-full mb-12 flex items-center justify-center relative border-8 border-emphz-silver/10 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-grid-small opacity-20"
                  ></div>
                  <div className="relative z-10 text-center">
                     <span className="text-6xl font-bold text-emphz-silver/40 tracking-tighter">{year}Y</span>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                     <span className="text-emphz-silver">Structural Status</span>
                     <span className="text-green-400 font-bold">{getGRPState(year)}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-emphz-silver transition-all duration-700 shadow-[0_0_15px_#C5C6C7]"
                       style={{ width: `${Math.max(98, 100 - (year * 0.02))}%` }}
                     ></div>
                  </div>
               </div>
            </div>

          </div>

          {/* Controls */}
          <div className="lg:w-80 shrink-0 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 flex flex-col justify-center text-center">
             <Clock className="w-12 h-12 text-emphz-silver mx-auto mb-8 animate-pulse" />
             <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-8">Timeline_Sync</h4>
             
             <div className="space-y-12 mb-12">
                <div className="relative">
                   <input 
                     type="range" min="0" max="50" value={year} 
                     onChange={(e) => setYear(parseInt(e.target.value))}
                     className="w-full h-1.5 bg-white/10 appearance-none cursor-pointer accent-emphz-silver rounded-full"
                   />
                   <div className="flex justify-between mt-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-bold">
                      <span>Deployment</span>
                      <span>Decommission</span>
                   </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-left">
                   <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-[0.3em] mb-3">Analysis_Note</span>
                   <p className="text-[10px] text-neutral-300 leading-relaxed font-mono uppercase">
                     {year > 20 ? "Significant cathodic protection required for Steel. GRP remains functionally inert." : "Initial coatings performing on both. Maintenance costs beginning to diverge."}
                   </p>
                </div>
             </div>

             <button className="w-full py-4 bg-emphz-silver text-emphz-blue rounded-full font-bold text-[9px] uppercase tracking-[0.3em] hover:bg-white transition-all">
                EXPORT LIFECYCLE DATA
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaterialAgingSim;
