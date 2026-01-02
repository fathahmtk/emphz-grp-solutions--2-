import React from 'react';
import { APPROVALS } from '../data';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-emphz-dark relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
             <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">07 / Ecosystem</span>
             <h2 className="text-4xl font-bold text-white">TRUSTED BY</h2>
             <p className="text-neutral-400 mt-4 max-w-xl">
               Pre-qualified and approved by leading government bodies, utility corporations, and infrastructure developers across the nation.
             </p>
           </div>
           
           <div className="mt-8 md:mt-0">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                 <ShieldCheck className="w-5 h-5 text-emphz-teal" />
                 <span className="text-xs font-mono text-white uppercase tracking-widest">Verified Vendor Status</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {APPROVALS.map((client, idx) => (
             <div key={idx} className="group relative p-8 bg-emphz-darker border border-white/10 hover:border-emphz-teal/50 hover:bg-white/[0.02] transition-all duration-300">
                {/* Decorative Stamps */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <ShieldCheck className="w-16 h-16 text-white" />
                </div>

                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="px-2 py-1 bg-emphz-teal/20 text-emphz-teal text-[10px] font-mono uppercase tracking-widest rounded">
                        {client.type}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">ID: {client.id}</span>
                   </div>

                   <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                   
                   <div className="flex items-center gap-2 mt-4 text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-mono text-xs uppercase tracking-wide">{client.status}</span>
                   </div>
                </div>

                {/* Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-emphz-teal group-hover:w-full transition-all duration-500"></div>
             </div>
           ))}
        </div>
        
        {/* Marquee effect for smaller partners could go here, staying static for industrial feel */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
           <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
             + 150 more registered EPC contractors & private developers
           </p>
        </div>

      </div>
    </section>
  );
};

export default Clients;