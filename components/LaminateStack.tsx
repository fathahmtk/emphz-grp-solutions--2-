
import React, { useState } from 'react';
import { Layers, Shield, Sparkles, Zap, Binary } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const LAYERS = [
  {
    id: 1,
    title: 'AESTHETIC GEL COAT',
    desc: 'UV-Stabilized isophthalic layer with high-gloss automotive finish. Provides primary environmental barrier.',
    icon: <Sparkles className="w-5 h-5" />,
    thickness: '500-800 Microns',
    spec: 'ISO/UV-900'
  },
  {
    id: 2,
    title: 'CHEMICAL BARRIER',
    desc: 'Resin-rich surfacing veil preventing fiber blooming and offering extreme acid/saline resistance.',
    icon: <Shield className="w-5 h-5" />,
    thickness: '20% Resin Content',
    spec: 'ASTM D3299'
  },
  {
    id: 3,
    title: 'STRUCTURAL LAMINATE',
    desc: 'Multi-directional E-Glass reinforcement for peak tensile and flexural strength.',
    icon: <Layers className="w-5 h-5" />,
    thickness: 'Variable Structural Ply',
    spec: 'BS 4994'
  },
  {
    id: 4,
    title: 'INSULATING CORE',
    desc: 'Optional PU/PIR foam core for thermal and acoustic regulation in habitation modules.',
    icon: <Zap className="w-5 h-5" />,
    thickness: '25-50mm Core',
    spec: 'CFC-Free PIR'
  }
];

const LaminateStack: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="laminate-stack" className="py-24 md:py-32 bg-emphz-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

          <div className="lg:w-1/2 flex flex-col justify-center">
            <SectionHeader
              number="10"
              category="MATERIAL INTELLIGENCE"
              title="Diamond GRP Matrix"
              subtitle="Proprietary composite layup engineered to survive aggressive climates. We optimize resin-to-reinforcement ratios for specific site stressors."
            />

            <div className="space-y-4">
              {LAYERS.map((layer) => (
                <GlowCard
                  key={layer.id}
                  onMouseEnter={() => setHovered(layer.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`p-6 rounded-3xl border transition-all duration-500 cursor-default ${hovered === layer.id ? 'bg-emphz-teal/10 border-emphz-teal animate-pulse-glow' : 'bg-white/5 border-white/5'}`}
                >
                  <div className="flex items-center justify-between mb-0">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${hovered === layer.id ? 'bg-emphz-teal text-white' : 'bg-white/5 text-neutral-500'}`}>
                        {layer.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-white uppercase tracking-widest mb-1">{layer.title}</h4>
                        <span className="text-[8px] font-mono text-neutral-600 uppercase tracking-widest">LAYER_ID: 0{layer.id}_ALPHA</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-[10px] text-emphz-teal font-bold">{layer.thickness}</span>
                      <span className="text-[8px] font-mono text-neutral-600 uppercase">{layer.spec}</span>
                    </div>
                  </div>
                  {hovered === layer.id && (
                    <p className="mt-4 pt-4 border-t border-emphz-teal/20 text-[10px] text-neutral-400 font-mono uppercase leading-relaxed animate-in fade-in slide-in-from-top-2 duration-400">
                      {layer.desc}
                    </p>
                  )}
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center min-h-[500px]">
            {/* 3D Exploded View Representation */}
            <div className="relative w-full max-w-md h-full flex items-center justify-center py-20">
              <div className="absolute inset-0 bg-emphz-teal/5 blur-3xl rounded-full opacity-20 animate-pulse"></div>

              {LAYERS.map((layer, idx) => {
                const offset = idx * 60;
                const isActive = hovered === layer.id || hovered === null;
                return (
                  <div
                    key={layer.id}
                    className="absolute w-72 h-40 border-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center rounded-2xl group overflow-hidden"
                    style={{
                      transform: `perspective(1500px) rotateX(65deg) rotateZ(-35deg) translateZ(${isActive ? offset : offset + 40}px)`,
                      backgroundColor: isActive ? `rgba(20, 184, 166, ${0.05 + (idx * 0.08)})` : 'rgba(255,255,255,0.01)',
                      borderColor: hovered === layer.id ? '#14B8A6' : 'rgba(255,255,255,0.05)',
                      boxShadow: hovered === layer.id ? '0 0 50px rgba(20, 184, 166, 0.3)' : 'none',
                      zIndex: 4 - idx
                    }}
                  >
                    <div className="absolute inset-0 bg-grid-small opacity-10"></div>
                    <div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">LAYER_0{layer.id}</span>
                      <h5 className="font-bold text-[8px] text-white/20 uppercase tracking-[0.2em]">{layer.title.split(' ')[0]}</h5>
                    </div>
                    {/* Interactive scanline on active layer */}
                    {hovered === layer.id && (
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emphz-teal/20 to-transparent animate-shuttle"></div>
                    )}
                  </div>
                );
              })}

              {/* Vertical Optical Axis */}
              <div className="absolute w-px h-[120%] bg-gradient-to-t from-transparent via-emphz-teal/20 to-transparent left-1/2 -top-1/4 -translate-x-1/2 pointer-events-none"></div>

              {/* HUD Data Markers */}
              {hovered && (
                <div className="absolute -right-12 top-1/4 p-6 bg-emphz-dark/80 backdrop-blur-xl border border-emphz-teal/30 rounded-3xl animate-in fade-in zoom-in-95 duration-500 shadow-2xl z-50 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-4">
                    <Binary className="w-4 h-4 text-emphz-teal" />
                    <span className="text-[8px] font-mono text-emphz-teal uppercase tracking-[0.3em] font-bold">TELEMETRY_SYNCED</span>
                  </div>
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-2 leading-tight">{LAYERS.find(l => l.id === hovered)?.title}</p>
                  <div className="h-px w-full bg-white/10 mb-3"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[8px] font-mono">
                      <span className="text-neutral-500 uppercase">Integrity</span>
                      <span className="text-emerald-500">100%</span>
                    </div>
                    <div className="flex justify-between text-[8px] font-mono">
                      <span className="text-neutral-500 uppercase">Stress</span>
                      <span className="text-emerald-500">0.00%</span>
                    </div>
                  </div>
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
