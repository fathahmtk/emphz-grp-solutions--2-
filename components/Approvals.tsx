
import React from 'react';
import { ShieldCheck, FileCheck, Globe, Zap, Droplets, RadioTower } from 'lucide-react';

const Approvals: React.FC = () => {
  const categories = [
    { name: 'Electrical & Power', icon: <Zap className="w-5 h-5" />, items: ['National Grid Corp', 'State Electricity Boards', 'Solar Farm Developers'] },
    { name: 'Water & Gas', icon: <Droplets className="w-5 h-5" />, items: ['Municipal Corporations', 'Desalination Plants', 'Natural Gas Networks'] },
    { name: 'Telecom & Tech', icon: <RadioTower className="w-5 h-5" />, items: ['Tower Operations', 'Fiber Networks', 'Smart City Missions'] },
  ];

  return (
    <section id="approvals" className="py-24 bg-emphz-darker border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">08 / Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">AUTHORITY APPROVALS</h2>
              <p className="text-slate-400 text-lg">
                EMPHZ products are pre-qualified and listed as approved vendors for major national utility providers and government infrastructure bodies.
              </p>
           </div>
           
           <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-emphz-teal" />
              <div>
                 <span className="block text-white font-bold text-sm tracking-widest">VENDOR CLASS A</span>
                 <span className="text-[10px] text-slate-500 font-mono uppercase">Certified Priority Supplier</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {categories.map((cat, i) => (
             <div key={i} className="bg-emphz-dark border border-white/10 p-8 rounded-[2rem] hover:border-emphz-teal/40 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emphz-teal border border-white/5 group-hover:bg-emphz-teal group-hover:text-white transition-all">
                      {cat.icon}
                   </div>
                   <h3 className="text-white font-bold tracking-wider">{cat.name}</h3>
                </div>

                <ul className="space-y-4">
                   {cat.items.map((item, j) => (
                     <li key={j} className="flex items-center justify-between text-slate-400 group-hover:text-slate-200 transition-colors">
                        <span className="text-sm font-mono uppercase tracking-tight">{item}</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        {/* Logo Grid Mimic */}
        <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
           <p className="text-center font-mono text-[10px] text-slate-600 uppercase tracking-[0.3em] mb-12">Authorized Supply Chain Partner For</p>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
              {/* Monochromatic representation of industry logos */}
              <div className="text-white font-bold text-lg tracking-tighter">POWERGRID</div>
              <div className="text-white font-bold text-lg tracking-tighter">METRO RAIL</div>
              <div className="text-white font-bold text-lg tracking-tighter">MUNICIPAL</div>
              <div className="text-white font-bold text-lg tracking-tighter">TELECOM</div>
              <div className="text-white font-bold text-lg tracking-tighter">WATER BOARD</div>
              <div className="text-white font-bold text-lg tracking-tighter">SMART CITY</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Approvals;
