
import React, { useState } from 'react';
import { Clock, ShieldCheck, Activity } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

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
    <section id="aging-sim" className="py-24 md:py-32 bg-emphz-darker text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          number="08"
          category="DURABILITY LAB"
          title="The 50-Year Structural Delta"
          subtitle="Simulate the volumetric degradation between corporate-standard steel and vetted GRP composites in aggressive industrial micro-climates."
          align="center"
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Comparison Panels */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

            {/* Steel Specimen */}
            <GlowCard className="bg-white/5 rounded-[3rem] p-10 border border-white/5 relative overflow-hidden group">
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
            </GlowCard>

            {/* GRP Specimen */}
            <GlowCard className="bg-white/5 rounded-[3rem] p-10 border border-emphz-teal/20 relative overflow-hidden group shadow-2xl shadow-emphz-teal/5">
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 rounded-2xl bg-emphz-teal/10 flex items-center justify-center text-emphz-teal">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-mono text-emphz-teal uppercase tracking-widest font-bold">Specimen_ID</span>
                  <span className="text-white font-mono text-xs font-bold">VETTED_GRP_EMPHZ</span>
                </div>
              </div>

              <div className="aspect-square bg-white/5 rounded-full mb-12 flex items-center justify-center relative border-8 border-white/10 overflow-hidden">
                <div
                  className="absolute inset-0 bg-grid-small opacity-20"
                ></div>
                <div className="relative z-10 text-center">
                  <span className="text-6xl font-bold text-white/20 tracking-tighter">{year}Y</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-emphz-teal">Structural Status</span>
                  <span className="text-emerald-400 font-bold">{getGRPState(year)}</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emphz-teal transition-all duration-700 shadow-[0_0_15px_rgba(20,184,166,0.4)]"
                    style={{ width: `${Math.max(98, 100 - (year * 0.02))}%` }}
                  ></div>
                </div>
              </div>
            </GlowCard>

          </div>

          {/* Controls */}
          <div className="lg:w-80 shrink-0 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 flex flex-col justify-center text-center">
            <Clock className="w-12 h-12 text-emphz-teal mx-auto mb-8 animate-pulse" />
            <h4 className="text-white font-bold text-xl uppercase tracking-tight mb-8">Timeline_Sync</h4>

            <div className="space-y-12 mb-12">
              <div className="relative">
                <input
                  type="range" min="0" max="50" value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 appearance-none cursor-pointer accent-emphz-teal rounded-full"
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

            <button className="w-full py-4 bg-emphz-teal text-white rounded-full font-bold text-[9px] uppercase tracking-[0.3em] hover:bg-white hover:text-emphz-darker transition-all shadow-xl shadow-emphz-teal/20">
              EXPORT LIFECYCLE DATA
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaterialAgingSim;
