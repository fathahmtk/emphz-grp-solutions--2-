
import React, { useState } from 'react';
import { Globe, Crosshair, MapPin, ShieldCheck, Activity, ArrowUpRight } from 'lucide-react';
import { NETWORK_NODES } from '../data';

const OperationsMap: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<typeof NETWORK_NODES[0] | null>(null);

  return (
    <section id="operations" className="py-24 md:py-32 bg-emphz-blue text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
           <div className="max-w-2xl">
              <span className="font-mono text-emphz-silver text-xs tracking-widest uppercase mb-4 block">19 / LOGISTICS & NETWORK</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                Global <br/><span className="text-emphz-silver">Command.</span>
              </h2>
              <p className="text-neutral-500 font-light text-lg">
                Tracking the reach of EMPHZ Vetted GRP systems. From national power grids to remote offshore installations, our logistics backbone ensures zero-delay deployment.
              </p>
           </div>
           
           <div className="flex items-center gap-10 p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem]">
              <div className="text-center">
                 <span className="block text-4xl font-bold text-white tracking-tighter">07</span>
                 <span className="text-[9px] font-mono text-emphz-silver uppercase font-bold tracking-widest">Active Hubs</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                 <span className="block text-4xl font-bold text-white tracking-tighter">2.5k</span>
                 <span className="text-[9px] font-mono text-emphz-silver uppercase font-bold tracking-widest">Vetted Installs</span>
              </div>
           </div>
        </div>

        <div className="relative aspect-[16/9] w-full bg-emphz-blue-mid rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl group">
           {/* Futuristic Grid Map Background */}
           <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emphz-silver/10 to-transparent"></div>
              <div className="absolute inset-0 bg-grid-small"></div>
           </div>

           {/* Central SVG Map Visualizer */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              {NETWORK_NODES.map((node, i) => {
                const neighbors = NETWORK_NODES.slice(i + 1, i + 3);
                return neighbors.map((neighbor, j) => (
                  <line 
                    key={`line-${i}-${j}`}
                    x1={`${node.x}%`} y1={`${node.y}%`}
                    x2={`${neighbor.x}%`} y2={`${neighbor.y}%`}
                    stroke="#C5C6C7"
                    strokeWidth="0.5"
                    strokeDasharray="4,6"
                    className="animate-pulse"
                  />
                ));
              })}
           </svg>

           {/* Interactive Nodes */}
           {NETWORK_NODES.map((node) => (
             <div 
               key={node.id}
               className="absolute transform -tranneutral-x-1/2 -tranneutral-y-1/2 cursor-pointer z-20"
               style={{ left: `${node.x}%`, top: `${node.y}%` }}
               onMouseEnter={() => setHoveredNode(node)}
               onMouseLeave={() => setHoveredNode(null)}
             >
                <div className="relative group/node">
                   <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${node.type === 'hub' ? 'bg-emphz-silver border-white scale-125' : 'bg-white border-emphz-blue'} group-hover/node:scale-150`}>
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                   </div>
                   
                   {/* Node Glow */}
                   <div className="absolute -inset-4 bg-emphz-silver/20 rounded-full blur-xl opacity-0 group-hover/node:opacity-100 transition-opacity"></div>
                </div>
             </div>
           ))}

           {/* Dynamic Node Info HUD */}
           <div className={`absolute bottom-12 right-12 w-80 p-10 bg-emphz-blue/90 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl transition-all duration-700 ${hoveredNode ? 'opacity-100 tranneutral-y-0 scale-100' : 'opacity-0 tranneutral-y-10 scale-95 pointer-events-none'}`}>
              <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-emphz-silver/20 flex items-center justify-center text-emphz-silver">
                       <Crosshair className="w-5 h-5" />
                    </div>
                    <div>
                       <h5 className="text-white font-bold text-lg uppercase tracking-tight leading-none">{hoveredNode?.city}</h5>
                       <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">{hoveredNode?.type} STATUS: ACTIVE</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-6 mb-10">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Inventory Level</span>
                    <span className="text-[10px] font-bold text-white">92%</span>
                 </div>
                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emphz-silver" style={{ width: '92%' }}></div>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Active Dispatches</span>
                    <span className="text-[10px] font-bold text-white">12 Units</span>
                 </div>
              </div>

              <button className="w-full py-4 bg-white text-emphz-blue rounded-full font-bold text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-emphz-silver hover:text-emphz-blue transition-all">
                SYNC LOGISTICS TICKET <ArrowUpRight className="w-4 h-4" />
              </button>
           </div>

           {/* Aesthetic Legend */}
           <div className="absolute top-12 left-12 space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-3xl border border-white/5">
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-emphz-silver shadow-[0_0_10px_#C5C6C7]"></div>
                 <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-bold">Primary Manufacturing Hub</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-3 h-3 rounded-full bg-white"></div>
                 <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-bold">Regional Distribution Node</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsMap;
