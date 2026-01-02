
import React from 'react';
import { Activity, Beaker, Zap, Shield, Ruler } from 'lucide-react';

const TechnicalLedger: React.FC = () => {
  const data = [
    { property: 'Tensile Strength', value: '110 - 150 MPa', method: 'ASTM D638', icon: <Activity className="w-4 h-4" /> },
    { property: 'Flexural Strength', value: '180 - 220 MPa', method: 'ASTM D790', icon: <Ruler className="w-4 h-4" /> },
    { property: 'Dielectric Strength', value: '12 - 18 kV/mm', method: 'ASTM D149', icon: <Zap className="w-4 h-4" /> },
    { property: 'Thermal Conductivity', value: '0.2 - 0.3 W/mK', method: 'ASTM C177', icon: <Beaker className="w-4 h-4" /> },
    { property: 'Specific Gravity', value: '1.6 - 1.9', method: 'ASTM D792', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <section className="py-24 bg-emphz-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">07 / Lab Reports</span>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">PHYSICAL PROPERTIES LEDGER</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Standardized testing data for our proprietary GRP laminates. All tests performed at NABL accredited third-party laboratories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Data Table */}
          <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500 uppercase tracking-widest rounded-t-xl">
              <span>Property</span>
              <span>Observed Value</span>
              <span>Test Method</span>
            </div>
            {data.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 px-6 py-5 bg-emphz-darker border border-white/5 hover:bg-emphz-teal/5 transition-colors group ${i === data.length - 1 ? 'rounded-b-xl' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-emphz-teal opacity-50 group-hover:opacity-100 transition-opacity">{row.icon}</span>
                  <span className="text-sm text-white font-bold">{row.property}</span>
                </div>
                <div className="text-sm text-slate-300 font-mono">{row.value}</div>
                <div className="text-[10px] text-slate-500 font-mono self-center">{row.method}</div>
              </div>
            ))}
          </div>

          {/* Chemical Resistance Highlight */}
          <div className="bg-emphz-darker p-8 md:p-12 border border-white/10 relative rounded-[2rem]">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Beaker className="w-24 h-24 text-emphz-teal" />
             </div>
             
             <h3 className="text-xl font-bold text-white mb-8 border-l-2 border-emphz-teal pl-4 uppercase tracking-wider">CHEMICAL COMPATIBILITY</h3>
             
             <div className="space-y-6">
                {[
                  { chem: 'Sulphuric Acid (25%)', rating: 'Exceptional' },
                  { chem: 'Sodium Hydroxide (10%)', rating: 'Stable' },
                  { chem: 'Hydrocarbon Fuels', rating: 'Inert' },
                  { chem: 'Saline Environments', rating: 'Immune' },
                ].map((c, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-sm text-slate-400 font-mono uppercase">{c.chem}</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 font-bold tracking-widest rounded-full">
                      {c.rating}
                    </span>
                  </div>
                ))}
             </div>

             <div className="mt-12 p-6 bg-emphz-teal/5 border border-dashed border-emphz-teal/20 text-xs text-slate-400 leading-relaxed italic rounded-xl">
               Note: For specific chemical concentrations and temperature variations, please consult our engineering department for a detailed compatibility certificate.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalLedger;
