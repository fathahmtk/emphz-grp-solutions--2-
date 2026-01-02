
import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, DollarSign, Activity, ArrowRight } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [units, setUnits] = useState(50);
  const [years, setYears] = useState(20);

  const grpInitial = 2500; 
  const steelInitial = 1800; 
  const steelAnnualMaint = 150; 
  const grpAnnualMaint = 10;    
  const steelReplacementCycle = 15; 
  
  const calculateTotal = (type: 'grp' | 'steel') => {
    if (type === 'grp') {
      return (grpInitial + (grpAnnualMaint * years)) * units;
    } else {
      const replacements = Math.floor(years / steelReplacementCycle);
      const initialCost = steelInitial * units;
      const maintenance = steelAnnualMaint * years * units;
      const replacementCost = replacements * steelInitial * units;
      return initialCost + maintenance + replacementCost;
    }
  };

  const grpTotal = calculateTotal('grp');
  const steelTotal = calculateTotal('steel');
  const savings = steelTotal - grpTotal;

  return (
    <section id="roi" className="py-24 md:py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="font-mono text-emphz-blue text-xs font-bold tracking-[0.4em] uppercase mb-4 block">09 / ANALYSIS</span>
            <h2 className="text-4xl md:text-6xl font-bold text-emphz-blue mb-10 tracking-tighter uppercase leading-[1.1]">
              Lifecycle <br/>
              <span className="text-emphz-silver">Value Model.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
              Industrial procurement often prioritizes upfront cost. Our model demonstrates why GRP is the standard for long-term fiscal efficiency.
            </p>

            <div className="space-y-12 mb-12">
              <div className="group">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] font-bold">Project Scale (Units)</label>
                  <span className="text-2xl font-bold text-emphz-blue">{units}</span>
                </div>
                <input 
                  type="range" min="1" max="500" value={units} 
                  onChange={(e) => setUnits(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 appearance-none cursor-pointer accent-emphz-silver rounded-full"
                />
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-6">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] font-bold">Operations Horizon (Years)</label>
                  <span className="text-2xl font-bold text-emphz-blue">{years} <span className="text-slate-400 text-sm">YRS</span></span>
                </div>
                <input 
                  type="range" min="5" max="50" value={years} 
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 appearance-none cursor-pointer accent-emphz-silver rounded-full"
                />
              </div>
            </div>

            <button className="bg-emphz-blue text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-emphz-silver hover:text-emphz-blue transition-all flex items-center gap-3 self-start shadow-xl">
               EXPORT FISCAL STUDY <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:w-3/5">
             <div className="bg-white rounded-[3.5rem] p-12 md:p-16 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden h-full flex flex-col">
                <div className="flex flex-col md:flex-row gap-10 items-end justify-between mb-16">
                   <div className="text-left">
                      <p className="text-slate-400 font-mono text-[9px] uppercase tracking-[0.4em] mb-3 font-bold">Projected Net Savings</p>
                      <h3 className="text-6xl md:text-7xl font-bold text-emphz-blue tracking-tighter leading-none">
                        <span className="text-emphz-silver">$</span>{Math.abs(savings).toLocaleString()}
                      </h3>
                   </div>
                   <div className="bg-green-500/10 text-green-600 px-8 py-4 rounded-full text-[10px] font-bold font-mono border border-green-500/20 flex items-center gap-3">
                     <TrendingUp className="w-5 h-5" /> 
                     {Math.round((savings / steelTotal) * 100)}% COST REDUCTION
                   </div>
                </div>

                <div className="space-y-10 flex-grow">
                  <div className="group">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 mb-4">
                      <span>EMPHZ GRP Systems</span>
                      <span className="text-emphz-blue">${grpTotal.toLocaleString()}</span>
                    </div>
                    <div className="h-4 bg-slate-50 rounded-full relative overflow-hidden border border-slate-100">
                       <div 
                         className="h-full bg-emphz-silver transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(197,198,199,0.5)]"
                         style={{ width: `${(grpTotal / Math.max(grpTotal, steelTotal)) * 100}%` }}
                       ></div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 mb-4">
                      <span>Galvanized Steel Counterpart</span>
                      <span className="text-emphz-blue">${steelTotal.toLocaleString()}</span>
                    </div>
                    <div className="h-4 bg-slate-50 rounded-full relative overflow-hidden border border-slate-100">
                       <div 
                         className="h-full bg-slate-400 transition-all duration-1000 ease-out"
                         style={{ width: `${(steelTotal / Math.max(grpTotal, steelTotal)) * 100}%` }}
                       ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-10 pt-12 border-t border-slate-100">
                   <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-emphz-silver/10 flex items-center justify-center text-emphz-blue shrink-0">
                         <ShieldCheck className="w-6 h-6" />
                      </div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold leading-relaxed">Zero Surface Refinishing Over Lifetime</p>
                   </div>
                   <div className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-emphz-silver/10 flex items-center justify-center text-emphz-blue shrink-0">
                         <Activity className="w-6 h-6" />
                      </div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold leading-relaxed">Integrated Thermal Performance Advantage</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
