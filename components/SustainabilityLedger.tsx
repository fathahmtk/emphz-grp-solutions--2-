
import React, { useState } from 'react';
import { Recycle, Wind, ArrowRight, Zap, TrendingDown } from 'lucide-react';

const SustainabilityLedger: React.FC = () => {
  const [projectSize, setProjectSize] = useState(100); // Metric Tons of infrastructure

  // Rough estimates for Carbon impact (kg CO2 per kg material including maintenance/replacement)
  const grpCarbon = 1.2 * projectSize * 1000;
  const steelCarbon = 3.8 * projectSize * 1000 * 2.5; // Includes 2.5x replacement/maintenance cycles over 50 years
  const savings = steelCarbon - grpCarbon;

  return (
    <section id="sustainability-ledger" className="py-24 md:py-32 bg-white text-emphz-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="font-mono text-green-600 text-xs font-bold tracking-[0.5em] uppercase mb-4 block">18 / ESG COMPLIANCE</span>
            <h2 className="text-4xl md:text-6xl font-bold text-emphz-blue mb-8 tracking-tighter uppercase leading-[0.9]">
              The Carbon <br /><span className="text-green-600">Ledger.</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-12 font-light">
              Quantify your infrastructure's environmental footprint. Vetted GRP systems reduce cumulative CO2 emissions by eliminating maintenance heavy-cycles and premature corrosion-led replacement.
            </p>

            <div className="bg-neutral-50 p-10 rounded-[3rem] border border-neutral-100 shadow-sm mb-12">
              <div className="flex justify-between items-center mb-6">
                <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Project Scale (Metric Tons)</label>
                <span className="text-2xl font-bold text-emphz-blue">{projectSize} MT</span>
              </div>
              <input
                type="range" min="10" max="1000" value={projectSize}
                onChange={(e) => setProjectSize(parseInt(e.target.value))}
                className="w-full h-1.5 bg-neutral-200 appearance-none cursor-pointer accent-green-500 rounded-full"
              />
              <div className="flex justify-between mt-4 font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-widest">
                <span>Small Scale</span>
                <span>Industrial Grid</span>
              </div>
            </div>

            <button className="flex items-center gap-3 font-mono text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] hover:text-emphz-blue transition-colors group">
              REQUEST FULL LCA REPORT <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-emphz-blue rounded-[3.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/5 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                  <div>
                    <span className="text-green-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Projected Emission Reduction</span>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">{(savings / 1000).toLocaleString()}</h3>
                      <span className="text-green-500 text-2xl font-bold">TONS_CO2</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                    <TrendingDown className="w-8 h-8 text-green-500 mb-2" />
                    <span className="block text-white font-bold text-xl tracking-tight">64% Savings</span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Lifecycle Impact</span>
                  </div>
                </div>

                <div className="space-y-12 mb-20">
                  <div className="group">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-500 mb-4">
                      <span>EMPHZ GRP Ecosystem</span>
                      <span className="text-green-400">Low Maintenance Path</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full relative overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-green-500 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        style={{ width: `${(grpCarbon / steelCarbon) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-500 mb-4">
                      <span>Galvanized Steel Cycle</span>
                      <span className="text-neutral-400">High Replacement Burden</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full relative overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-neutral-500 transition-all duration-1000 ease-out opacity-40"
                        style={{ width: `100%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                <div className="space-y-2">
                  <Recycle className="w-5 h-5 text-green-500" />
                  <span className="block text-white font-bold text-sm uppercase tracking-tight">Circular</span>
                  <p className="text-[9px] text-neutral-500 font-mono leading-relaxed">Recyclable composite recovery systems.</p>
                </div>
                <div className="space-y-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  <span className="block text-white font-bold text-sm uppercase tracking-tight">Efficient</span>
                  <p className="text-[9px] text-neutral-500 font-mono leading-relaxed">80% lighter logistics footprint.</p>
                </div>
                <div className="space-y-2 hidden md:block">
                  <Wind className="w-5 h-5 text-green-500" />
                  <span className="block text-white font-bold text-sm uppercase tracking-tight">Clean</span>
                  <p className="text-[9px] text-neutral-500 font-mono leading-relaxed">Zero harmful chemical leaching.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SustainabilityLedger;
