
import React, { useState } from 'react';
import { Target, Info, Shield, Layers, Wind, Eye, Sun, Droplets, ArrowUpRight } from 'lucide-react';

const HOTSPOTS = [
  { top: '15%', left: '50%', title: 'Reinforced Roof', desc: 'Cantilevered canopy design with UV-treated gel coat for desert thermal protection.', icon: <Sun className="w-5 h-5" /> },
  { top: '45%', left: '80%', title: 'SS316 Locking', desc: 'Marine-grade multi-point locking mechanism, vetted for high-salinity coastal sites.', icon: <Shield className="w-5 h-5" /> },
  { top: '80%', left: '50%', title: 'Robotic PU Gasket', desc: 'Seamlessly applied thixotropic gasketing ensures IP67 seal integrity.', icon: <Droplets className="w-5 h-5" /> },
  { top: '50%', left: '20%', title: 'Modular Core', desc: 'High-strength GRP laminate with fire-retardant additive meeting BS 476 standard.', icon: <Layers className="w-5 h-5" /> },
];

const FeatureAnatomy: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<typeof HOTSPOTS[0] | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white text-emphz-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">16 / SHOWCASE DETAIL</span>
          <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker mb-10 tracking-tighter uppercase">Anatomy of <span className="text-emphz-teal">Resilience.</span></h2>
          <div className="w-24 h-1 bg-emphz-teal mx-auto mb-10 rounded-full"></div>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Deconstructing the EMPHZ Diamond Series Enclosure—engineered to survive where metal and concrete fail.
          </p>
        </div>

        <div className="relative aspect-video w-full bg-neutral-50 rounded-[3.5rem] overflow-hidden border border-neutral-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] group">
           {/* Technical Grid Background */}
           <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

           {/* Main Central Visual (Schematic Feel) */}
           <div className="absolute inset-0 flex items-center justify-center p-12 md:p-24">
              <div className="relative w-full h-full flex items-center justify-center">
                 {/* This represents the product shell in a technical way */}
                 <div className="w-64 h-80 md:w-96 md:h-[500px] border-[1px] border-emphz-teal/30 relative flex items-center justify-center">
                    <div className="absolute -inset-6 border border-emphz-teal/10"></div>
                    <div className="absolute -inset-12 border border-emphz-teal/5"></div>
                    
                    {/* Inner schematic detail */}
                    <div className="w-full h-full bg-emphz-teal/5 flex items-center justify-center overflow-hidden">
                       <Shield className="w-48 h-48 text-emphz-teal opacity-[0.03] animate-pulse-slow" />
                       {/* Schematic Lines */}
                       <div className="absolute top-0 left-0 w-full h-px bg-emphz-teal/20"></div>
                       <div className="absolute bottom-0 left-0 w-full h-px bg-emphz-teal/20"></div>
                       <div className="absolute top-0 left-0 w-px h-full bg-emphz-teal/20"></div>
                       <div className="absolute top-0 right-0 w-px h-full bg-emphz-teal/20"></div>
                    </div>

                    {/* Hotspots (HOTELOR Style) */}
                    {HOTSPOTS.map((spot, idx) => (
                      <div 
                        key={idx} 
                        className="absolute group/spot cursor-pointer" 
                        style={{ top: spot.top, left: spot.left }}
                        onMouseEnter={() => setActiveSpot(spot)}
                        onMouseLeave={() => setActiveSpot(null)}
                      >
                         <div className="relative">
                           <div className="w-6 h-6 bg-emphz-teal/20 rounded-full shadow-[0_0_20px_#189A9E44] animate-ping absolute -inset-1"></div>
                           <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-20 ${activeSpot === spot ? 'bg-emphz-teal border-white scale-125 shadow-xl' : 'bg-white border-emphz-teal shadow-md'}`}></div>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Information Overlay Panel */}
                 {activeSpot && (
                    <div className="absolute bottom-12 right-12 w-80 p-10 bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-neutral-200 shadow-2xl animate-in zoom-in-95 duration-500 z-50">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-emphz-teal/10 flex items-center justify-center text-emphz-teal">
                             {activeSpot.icon}
                          </div>
                          <h5 className="text-xl font-bold text-emphz-darker tracking-tight uppercase leading-none">{activeSpot.title}</h5>
                       </div>
                       <p className="text-[11px] text-neutral-500 leading-relaxed font-mono uppercase tracking-widest">{activeSpot.desc}</p>
                       <div className="mt-8 pt-8 border-t border-neutral-100 flex justify-between items-center">
                          <span className="text-[9px] font-bold text-emphz-teal uppercase tracking-widest">Spec Verified</span>
                          <ArrowUpRight className="w-4 h-4 text-neutral-300" />
                       </div>
                    </div>
                 )}
              </div>
           </div>

           {/* Aesthetic Labels (Reference Detail) */}
           <div className="absolute top-12 left-12 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emphz-darker flex items-center justify-center text-emphz-teal shadow-xl">
                 <Target className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-emphz-darker font-bold text-sm uppercase tracking-widest">DIAMOND_V2_BLUEPRINT</p>
                 <p className="text-neutral-400 font-mono text-[9px] uppercase">Ref: EMPHZ_MOD_2024</p>
              </div>
           </div>

           <div className="absolute bottom-12 left-12 p-8 bg-emphz-darker rounded-[2rem] text-white/50 font-mono text-[9px] uppercase leading-loose tracking-[0.2em] shadow-2xl">
              TOLERANCE_CHECK: +/- 0.01MM<br/>
              LAMINATE_YIELD: OPTIMAL<br/>
              STATUS: SYSTEM_READY
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
           {[
             { title: 'Modular Core', desc: 'Integrated ribbing for high impact resistance IK10.', icon: <Layers className="w-6 h-6" /> },
             { title: 'Thermal Control', icon: <Wind className="w-6 h-6" />, desc: 'Passive ventilation louvers optimized for heat dissipation.' },
             { title: 'Visible Access', icon: <Eye className="w-6 h-6" />, desc: 'Optional polycarbonate viewing windows with IP66 seals.' }
           ].map((feat, i) => (
             <div key={i} className="group bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:shadow-xl transition-all duration-500 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-emphz-teal shadow-sm group-hover:bg-emphz-teal group-hover:text-white transition-all">
                   {feat.icon}
                </div>
                <div>
                   <h4 className="text-xl font-bold text-emphz-darker mb-3 uppercase tracking-tight">{feat.title}</h4>
                   <p className="text-[11px] text-neutral-400 font-mono leading-relaxed uppercase tracking-widest">{feat.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.03; }
          50% { transform: scale(1.1); opacity: 0.06; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeatureAnatomy;
