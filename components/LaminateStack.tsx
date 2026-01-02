
import React, { useState } from 'react';
import { Layers, Shield, Sparkles, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const LAYERS = [
  { 
    id: 1, 
    title: 'AESTHETIC GEL COAT', 
    desc: 'UV-Stabilized isophthalic layer with high-gloss automotive finish. Provides primary environmental barrier.', 
    icon: <Sparkles className="w-5 h-5" />,
    thickness: '500-800 Microns'
  },
  { 
    id: 2, 
    title: 'CHEMICAL BARRIER', 
    desc: 'Resin-rich surfacing veil preventing fiber blooming and offering extreme acid/saline resistance.', 
    icon: <Shield className="w-5 h-5" />,
    thickness: '20% Resin Content'
  },
  { 
    id: 3, 
    title: 'STRUCTURAL LAMINATE', 
    desc: 'Multi-directional E-Glass reinforcement for peak tensile and flexural strength.', 
    icon: <Layers className="w-5 h-5" />,
    thickness: 'Variable Structural Ply'
  },
  { 
    id: 4, 
    title: 'INSULATING CORE', 
    desc: 'Optional PU/PIR foam core for thermal and acoustic regulation in habitation modules.', 
    icon: <Zap className="w-5 h-5" />,
    thickness: '25-50mm Core'
  }
];

const LaminateStack: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-emphz-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2">
             <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">MATERIAL INTELLIGENCE</span>
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9]">
               Diamond <br/><span className="text-emphz-teal">GRP Matrix.</span>
             </h2>
             <p className="text-neutral-400 text-lg leading-relaxed mb-12 font-light">
               Our proprietary composite layup is engineered to survive the world's most aggressive climates. 
               By varying the resin-to-reinforcement ratio, we optimize each module for its specific site stressor.
             </p>

             <div className="space-y-4">
                {LAYERS.map((layer) => (
                  <div 
                    key={layer.id}
                    onMouseEnter={() => setHovered(layer.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`p-6 rounded-2xl border transition-all duration-500 cursor-default ${hovered === layer.id ? 'bg-emphz-teal/10 border-emphz-teal' : 'bg-white/5 border-white/5'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${hovered === layer.id ? 'bg-emphz-teal text-white' : 'bg-white/5 text-neutral-500'}`}>
                             {layer.icon}
                          </div>
                          <h4 className="font-bold text-xs text-white uppercase tracking-widest">{layer.title}</h4>
                       </div>
                       <span className="font-mono text-[9px] text-emphz-teal font-bold">{layer.thickness}</span>
                    </div>
                    {hovered === layer.id && (
                       <p className="text-[10px] text-neutral-400 font-mono uppercase leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
                          {layer.desc}
                       </p>
                    )}
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
             {/* 3D Exploded View Representation */}
             <div className="relative w-80 h-96 flex items-center justify-center">
                {LAYERS.map((layer, idx) => {
                   const offset = idx * 40;
                   const isActive = hovered === layer.id || hovered === null;
                   return (
                     <div 
                       key={layer.id}
                       className="absolute w-64 h-32 border-2 transition-all duration-700 ease-out flex items-center justify-center"
                       style={{ 
                         transform: `perspective(1000px) rotateX(60deg) rotateZ(-30deg) translateZ(${isActive ? offset : offset + 20}px)`,
                         backgroundColor: isActive ? `rgba(24, 154, 158, ${0.1 + (idx * 0.1)})` : 'rgba(255,255,255,0.02)',
                         borderColor: hovered === layer.id ? '#189A9E' : 'rgba(255,255,255,0.1)',
                         boxShadow: hovered === layer.id ? '0 0 30px rgba(24, 154, 158, 0.4)' : 'none',
                         zIndex: 4 - idx
                       }}
                     >
                        <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100">
                           <span className="font-mono text-[10px] text-white">L_0{layer.id}</span>
                        </div>
                     </div>
                   );
                })}

                {/* Vertical Connector Line */}
                <div className="absolute w-px h-64 bg-gradient-to-t from-transparent via-emphz-teal/30 to-transparent left-1/2 -translate-x-1/2"></div>
                
                {/* HUD Markers */}
                {hovered && (
                  <div className="absolute -right-24 top-1/2 -translate-y-1/2 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl animate-in zoom-in-95">
                     <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emphz-teal" />
                        <span className="text-[9px] font-mono text-white uppercase tracking-widest">LAYER_SYNCED</span>
                     </div>
                     <p className="text-white font-bold text-xs uppercase tracking-widest">{LAYERS.find(l => l.id === hovered)?.title}</p>
                  </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaminateStack;
