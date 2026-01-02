
import React, { useState } from 'react';
import { NETWORK_NODES } from '../data';
import { Truck, MapPin, Activity, Navigation, ShieldCheck, Globe } from 'lucide-react';

const Logistics: React.FC = () => {
  const [nearestHub, setNearestHub] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const detectLocation = () => {
    setIsLocating(true);
    // Simulate detecting location and finding nearest hub for UI feel
    setTimeout(() => {
      const hubs = NETWORK_NODES.filter(n => n.type === 'hub');
      setNearestHub(hubs[Math.floor(Math.random() * hubs.length)].city);
      setIsLocating(false);
    }, 1500);
  };

  return (
    <section id="logistics" className="py-24 md:py-32 bg-neutral-50 text-emphz-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          <div className="lg:w-2/5 flex flex-col justify-center">
             <div className="mb-12">
               <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">10 / LOGISTICS</span>
               <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker leading-[1.1] mb-8 tracking-tighter">
                 Supply <br/>
                 <span className="text-emphz-teal">Matrix.</span>
               </h2>
               <p className="text-neutral-500 text-lg leading-relaxed mb-10 font-light">
                 Integrated supply chain spanning major industrial hubs. Our modular GRP units are flat-packed for optimized cargo density and rapid multi-modal transport.
               </p>
               
               <button 
                onClick={detectLocation}
                disabled={isLocating}
                className="group flex items-center gap-4 text-[10px] font-bold text-emphz-teal hover:text-emphz-darker transition-all border border-emphz-teal/30 px-10 py-5 rounded-full bg-white shadow-xl shadow-emphz-teal/5 uppercase tracking-[0.2em]"
               >
                 {isLocating ? (
                   <><Activity className="w-4 h-4 animate-spin" /> SCANNING_NODES...</>
                 ) : nearestHub ? (
                   <><Navigation className="w-4 h-4" /> NEAREST HUB: {nearestHub.toUpperCase()}</>
                 ) : (
                   <><MapPin className="w-4 h-4 group-hover:animate-bounce" /> CALCULATE REACH</>
                 )}
               </button>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100">
                  <span className="block text-4xl font-bold text-emphz-darker mb-1">07</span>
                  <span className="text-[9px] uppercase text-neutral-400 font-mono tracking-widest font-bold">Active Hubs</span>
               </div>
               <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100">
                  <span className="block text-4xl font-bold text-emphz-darker mb-1">~48h</span>
                  <span className="text-[9px] uppercase text-neutral-400 font-mono tracking-widest font-bold">Transit Lead</span>
               </div>
             </div>
          </div>

          <div className="lg:w-3/5 relative">
             <div className="relative h-[600px] bg-emphz-darker rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white group">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emphz-teal/30 to-black"></div>
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                
                {/* Map Node visualization */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                   {NETWORK_NODES.map((node, i) => {
                     const nextNode = NETWORK_NODES[(i + 1) % NETWORK_NODES.length];
                     return (
                       <line 
                         key={`l-${i}`}
                         x1={`${node.x}%`} y1={`${node.y}%`}
                         x2={`${nextNode.x}%`} y2={`${nextNode.y}%`}
                         stroke="#189A9E"
                         strokeWidth="0.5"
                         strokeDasharray="4,8"
                       />
                     );
                   })}
                </svg>

                {NETWORK_NODES.map((node) => (
                  <div 
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group/node"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${node.type === 'hub' ? 'bg-emphz-teal border-white scale-125' : 'bg-white border-neutral-800'} group-hover/node:scale-150 shadow-[0_0_15px_rgba(24,154,158,0.5)]`}></div>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover/node:opacity-100 transition-all duration-300 z-50">
                       <div className="bg-white/95 backdrop-blur-md border border-neutral-100 px-4 py-2 rounded-full shadow-2xl">
                          <span className="text-[9px] font-mono text-emphz-darker font-bold uppercase tracking-widest whitespace-nowrap">{node.city}</span>
                       </div>
                    </div>
                  </div>
                ))}

                <div className="absolute top-10 left-10 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-emphz-teal/10 flex items-center justify-center text-emphz-teal border border-emphz-teal/20">
                      <Globe className="w-5 h-5 animate-spin-slow" />
                   </div>
                   <span className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em]">Node_Tracking_v2.4</span>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logistics;
