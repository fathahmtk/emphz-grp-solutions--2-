
import React, { useState } from 'react';
import { Ruler, Maximize2, Layers, Crosshair, ChevronRight, CheckCircle2 } from 'lucide-react';

const BLUEPRINTS = [
  {
    id: 'DB-400',
    name: 'Distribution Box 400 Series',
    file: 'REF_E_400_V2',
    annotations: [
      { top: '30%', left: '20%', label: 'Reinforced Corner Post', detail: 'Impact resistance > 20J' },
      { top: '15%', left: '70%', label: 'Dual-Slope Roof', detail: 'Self-draining water shed' },
      { top: '85%', left: '45%', label: 'Gland Plate Entry', detail: 'Pre-drilled SS316 plate' },
    ]
  },
  {
    id: 'SC-800',
    name: 'Security Cabin 800 Modular',
    file: 'REF_C_800_MOD',
    annotations: [
      { top: '20%', left: '30%', label: 'Sandwich Panel Wall', detail: '40mm PU Insulation' },
      { top: '40%', left: '80%', label: 'Anti-Vandal Glass', detail: '6mm Toughened' },
      { top: '90%', left: '50%', label: 'Anchor Points', detail: 'Internal structural steel frame' },
    ]
  }
];

const TechnicalBlueprint: React.FC = () => {
  const [active, setActive] = useState(BLUEPRINTS[0]);
  const [hoveredNote, setHoveredNote] = useState<string | null>(null);

  return (
    <section id="blueprints" className="py-24 bg-emphz-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">17 / SCHEMATIC VAULT</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              The Design <br/><span className="text-emphz-teal">Blueprint.</span>
            </h2>
            <p className="text-neutral-500 font-light text-lg">
              Precision CAD schematics for engineering integration. Downloadable blocks available in the Technical Library.
            </p>
          </div>

          <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10">
            {BLUEPRINTS.map((bp) => (
              <button
                key={bp.id}
                onClick={() => setActive(bp)}
                className={`px-6 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${active.id === bp.id ? 'bg-emphz-teal text-white shadow-xl shadow-emphz-teal/20' : 'text-neutral-500 hover:text-white'}`}
              >
                {bp.id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Blueprint Display */}
          <div className="lg:col-span-8 bg-black/40 border border-white/10 rounded-[3rem] aspect-video relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            
            {/* Schematic Lines Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 border border-emphz-teal/20 relative animate-pulse-slow">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Maximize2 className="w-12 h-12 text-emphz-teal/20" />
                 </div>
                 {/* Crosshair lines */}
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emphz-teal/10"></div>
                 <div className="absolute top-1/2 left-0 right-0 h-px bg-emphz-teal/10"></div>
              </div>
            </div>

            {/* Annotations */}
            {active.annotations.map((note, idx) => (
              <div 
                key={idx} 
                className="absolute group/note" 
                style={{ top: note.top, left: note.left }}
                onMouseEnter={() => setHoveredNote(note.label)}
                onMouseLeave={() => setHoveredNote(null)}
              >
                 <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-emphz-teal/20 border border-emphz-teal animate-ping absolute -inset-1.5"></div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 relative z-20 ${hoveredNote === note.label ? 'bg-white scale-125' : 'bg-emphz-teal'}`}></div>
                    
                    {/* Tooltip */}
                    <div className={`absolute left-8 top-1/2 -tranneutral-y-1/2 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-neutral-200 shadow-2xl transition-all duration-500 w-48 z-30 ${hoveredNote === note.label ? 'opacity-100 tranneutral-x-0' : 'opacity-0 -tranneutral-x-4 pointer-events-none'}`}>
                       <h5 className="text-[10px] font-bold text-emphz-darker uppercase tracking-wider mb-1">{note.label}</h5>
                       <p className="text-[9px] text-neutral-500 font-mono leading-relaxed">{note.detail}</p>
                    </div>
                 </div>
              </div>
            ))}

            <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
               <div className="flex items-center gap-4 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emphz-teal"></div>
                  <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">FILE_SYS: {active.file}</span>
               </div>
               <p className="text-white font-bold text-sm uppercase tracking-widest">{active.name}</p>
            </div>
            
            <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-emphz-teal transition-all group">
               <Maximize2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="bg-emphz-dark border border-white/10 p-10 rounded-[2.5rem] flex-grow">
                <h4 className="font-mono text-emphz-teal text-[10px] uppercase tracking-[0.4em] mb-8 font-bold">Standard Spec Sheet</h4>
                <div className="space-y-6">
                   {[
                     { label: 'Tolerance', value: '± 0.05 mm' },
                     { label: 'Layering', value: '4-Stage Matrix' },
                     { label: 'Resin Base', value: 'Isophthalic FR' },
                     { label: 'Standard', value: 'IEC 62208' },
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">{item.label}</span>
                        <span className="text-[10px] text-white font-mono">{item.value}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-12 flex items-center gap-4 p-4 bg-emphz-teal/5 border border-emphz-teal/20 rounded-xl">
                   <Layers className="w-5 h-5 text-emphz-teal" />
                   <p className="text-[9px] text-neutral-400 font-mono uppercase leading-relaxed">System supports flat-pack or fully-assembled logistics configurations.</p>
                </div>
             </div>

             <div className="bg-emphz-teal p-10 rounded-[2.5rem] shadow-xl shadow-emphz-teal/10 group cursor-pointer hover:bg-white transition-all duration-700">
                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:bg-emphz-teal/10 group-hover:text-emphz-teal transition-all">
                      <Crosshair className="w-6 h-6" />
                   </div>
                   <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-emphz-darker" />
                </div>
                <h4 className="text-white group-hover:text-emphz-darker font-bold text-xl uppercase tracking-tight mb-2">Request DXF/STEP</h4>
                <p className="text-white/60 group-hover:text-neutral-500 text-[10px] font-mono uppercase tracking-widest font-bold">Direct sync with project CAD blocks.</p>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnicalBlueprint;
