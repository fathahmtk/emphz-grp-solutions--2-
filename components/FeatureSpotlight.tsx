import React, { useState } from 'react';
import { Shield, Zap, Flame, Sun, Move, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    id: 'corrosion',
    title: 'NON-CORROSIVE',
    icon: <Shield className="w-6 h-6" />,
    desc: 'Chemically inert GRP laminate. Ideal for coastal and acidic industrial zones where steel fails.',
    stat: '50+ YR Lifespan',
    details: ['Salt Spray Tested', 'Chemical Resistance Class 1', 'Zero Oxidation Risk']
  },
  {
    id: 'conductive',
    title: 'NON-CONDUCTIVE',
    icon: <Zap className="w-6 h-6" />,
    desc: 'High dielectric strength provides native electrical insulation, eliminating earthing requirements.',
    stat: '18kV/mm Strength',
    details: ['Zero Risk of Arcing', 'Native Personnel Safety', 'Self-Insulating Shell']
  },
  {
    id: 'fire',
    title: 'FIRE RETARDANT',
    icon: <Flame className="w-6 h-6" />,
    desc: 'Proprietary FR resin systems meeting global safety standards for flame spread and toxicity.',
    stat: 'BS 476 Class 1',
    details: ['Self-Extinguishing', 'Low Smoke Emission', 'ASTM D635 Compliant']
  },
  {
    id: 'uv',
    title: 'UV STABLE',
    icon: <Sun className="w-6 h-6" />,
    desc: 'Gel-coated surfaces with UV inhibitors ensure color fastness and structural integrity in desert heat.',
    stat: '99% UV Block',
    details: ['Non-Yellowing Finish', 'Thermal Expansion Control', 'RAL-Grade Stability']
  },
  {
    id: 'weight',
    title: 'ULTRA LIGHTWEIGHT',
    icon: <Move className="w-6 h-6" />,
    desc: 'High strength-to-weight ratio allows for rapid site handling without heavy-duty cranes.',
    stat: '1/4 Weight of Steel',
    details: ['Reduced Logistics Cost', 'Fast Site Assembly', 'Modular Jointing Ease']
  }
];

const FeatureSpotlight: React.FC = () => {
  const [active, setActive] = useState(FEATURES[0]);

  return (
    <section className="py-24 bg-emphz-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">13 / Material DNA</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">THE GRP ADVANTAGE</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Engineering a superior alternative to traditional materials through the precise science of composite laminates.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Feature List */}
          <div className="lg:w-1/2 space-y-4">
            {FEATURES.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActive(item)}
                className={`w-full p-6 text-left border transition-all duration-300 group ${
                  active.id === item.id 
                  ? 'bg-emphz-teal border-emphz-teal text-white' 
                  : 'bg-white/5 border-white/5 text-neutral-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`${active.id === item.id ? 'text-white' : 'text-emphz-teal'} transition-colors`}>
                      {item.icon}
                    </div>
                    <span className="font-bold tracking-widest uppercase text-sm">{item.title}</span>
                  </div>
                  <CheckCircle2 className={`w-5 h-5 transition-opacity ${active.id === item.id ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Detail Panel */}
          <div className="lg:w-1/2 w-full h-full">
            <div className="bg-emphz-darker border border-white/10 p-10 md:p-16 relative group min-h-[500px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-12 text-emphz-teal opacity-[0.03] pointer-events-none">
                 {active.icon}
              </div>

              <div className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-500" key={active.id}>
                <div className="font-mono text-emphz-teal text-2xl font-bold mb-6 tracking-tight">
                  {active.stat}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-wide uppercase">{active.title}</h3>
                <p className="text-neutral-300 text-xl leading-relaxed mb-10 max-w-md">
                  {active.desc}
                </p>
                
                <div className="space-y-4 pt-10 border-t border-white/10">
                  {active.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                       <div className="w-1.5 h-1.5 bg-emphz-teal rounded-full"></div>
                       {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;