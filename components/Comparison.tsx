import React from 'react';
import { COMPARISON_DATA } from '../data';
import { Layers, CheckSquare } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-emphz-darker border-t border-white/5 relative">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">05 / Analysis</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MATERIAL ADVANTAGE</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Engineering data confirms GRP composites outperform traditional construction materials in total cost of ownership and longevity.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 px-6 py-4 bg-white/5 border border-white/10 rounded-t-sm">
              <div className="font-mono text-neutral-500 text-xs uppercase tracking-widest">Performance Criteria</div>
              <div className="font-mono text-emphz-teal font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4" /> EMPHZ GRP
              </div>
              <div className="font-mono text-neutral-500 text-xs uppercase tracking-widest">Galvanized Steel</div>
              <div className="font-mono text-neutral-500 text-xs uppercase tracking-widest">Reinforced Concrete</div>
            </div>

            {/* Table Body */}
            <div className="space-y-2">
              {COMPARISON_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-4 gap-4 px-6 py-5 bg-emphz-dark border border-white/5 items-center hover:bg-white/5 transition-colors group"
                >
                  <div className="font-bold text-white text-sm">{row.criteria}</div>

                  {/* GRP Column - Highlighted */}
                  <div className="text-emphz-teal font-bold text-sm relative">
                    <div className="absolute -left-4 -top-5 -bottom-5 w-[1px] bg-emphz-teal/20 group-hover:bg-emphz-teal/50 transition-colors"></div>
                    <span className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4" /> {row.grp}
                    </span>
                    <div className="absolute -right-4 -top-5 -bottom-5 w-[1px] bg-emphz-teal/20 group-hover:bg-emphz-teal/50 transition-colors"></div>
                  </div>

                  <div className="text-neutral-400 text-sm">{row.steel}</div>
                  <div className="text-neutral-400 text-sm">{row.concrete}</div>
                </div>
              ))}
            </div>

            {/* Comparison Summary */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="col-span-1 border-t-2 border-emphz-teal pt-4">
                <p className="text-emphz-teal font-mono text-xs uppercase tracking-widest mb-1">Conclusion</p>
                <p className="text-neutral-300 text-sm">Lowest Total Cost of Ownership</p>
              </div>
              <div className="col-span-1 border-t-2 border-neutral-700 pt-4 opacity-50">
                <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-1">Conclusion</p>
                <p className="text-neutral-400 text-sm">High Maintenance Liability</p>
              </div>
              <div className="col-span-1 border-t-2 border-neutral-700 pt-4 opacity-50">
                <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-1">Conclusion</p>
                <p className="text-neutral-400 text-sm">Heavy Logistic Burden</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;