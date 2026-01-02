
import React from 'react';
import { ShieldCheck, FileCheck, Globe, Zap, Droplets, RadioTower, CheckCircle } from 'lucide-react';

const VettedSystems: React.FC = () => {
  const registries = [
    { 
      name: 'Power & Utility GRP', 
      icon: <Zap className="w-5 h-5" />, 
      items: [
        { name: 'National PowerGrid', status: 'Vetted Vendor A' },
        { name: 'State Electricity Boards', status: 'Approved GRP Spec' },
        { name: 'NTPC Solar Division', status: 'Pre-Qualified' }
      ] 
    },
    { 
      name: 'Marine & Industrial GRP', 
      icon: <Droplets className="w-5 h-5" />, 
      items: [
        { name: 'Coast Guard Facilities', status: 'Vetted for Salinity' },
        { name: 'Desalination Hubs', status: 'Acid-Resistant Vetted' },
        { name: 'Refinery Infrastructure', status: 'ASTM-D Vetted' }
      ] 
    },
    { 
      name: 'Smart Infra GRP', 
      icon: <RadioTower className="w-5 h-5" />, 
      items: [
        { name: 'Smart City Mission', status: 'Empanelled GRP' },
        { name: 'Metro Rail Corp', status: 'Fire-Safe Vetted' },
        { name: 'Digital India Hubs', status: 'Composite Standard' }
      ] 
    },
  ];

  return (
    <section id="vetted-registry" className="py-24 md:py-32 bg-emphz-blue border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
           <div className="max-w-2xl">
              <span className="font-mono text-emphz-silver text-xs tracking-widest uppercase mb-4 block">08 / VETTED GRP REGISTRY</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                Qualified <br/><span className="text-emphz-silver">GRP Modules.</span>
              </h2>
              <p className="text-neutral-500 font-light text-lg">
                Our "Vetted Systems" refer to GRP configurations that have undergone third-party validation and are listed as approved standards for major utility and government bodies.
              </p>
           </div>
           
           <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl">
              <ShieldCheck className="w-10 h-10 text-emphz-silver" />
              <div>
                 <span className="block text-white font-bold text-sm tracking-widest uppercase mb-1">GRP Compliance Rank</span>
                 <span className="text-xs font-mono text-emphz-silver uppercase font-bold">#1 VETTED VENDOR</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {registries.map((cat, i) => (
             <div key={i} className="bg-emphz-blue-mid border border-white/10 p-10 rounded-[3rem] hover:border-emphz-silver/40 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-8xl font-bold pointer-events-none">0{i+1}</div>
                
                <div className="flex items-center gap-4 mb-10 relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emphz-silver border border-white/10 group-hover:bg-emphz-silver group-hover:text-emphz-blue transition-all duration-500">
                      {cat.icon}
                   </div>
                   <h3 className="text-white font-bold tracking-wider text-lg uppercase">{cat.name}</h3>
                </div>

                <ul className="space-y-6 relative z-10">
                   {cat.items.map((item, j) => (
                     <li key={j} className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-neutral-200 uppercase tracking-tight">{item.name}</span>
                        <div className="flex items-center gap-2">
                           <CheckCircle className="w-3 h-3 text-green-400" />
                           <span className="text-[9px] font-mono text-green-400 uppercase font-bold tracking-widest">{item.status}</span>
                        </div>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        <div className="mt-20 p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center">
           <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.4em] mb-4">Direct Procurement Ready</p>
           <h4 className="text-white text-xl font-bold uppercase tracking-tight">Verified GRP Solution for 150+ EPC Partners</h4>
        </div>
      </div>
    </section>
  );
};

export default VettedSystems;
