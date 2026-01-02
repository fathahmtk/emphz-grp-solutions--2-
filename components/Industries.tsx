
import React from 'react';
import { SECTORS } from '../data';
import { ArrowRight, Landmark, Zap, Factory, Cpu, RadioTower, Building2 } from 'lucide-react';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 md:py-32 bg-neutral-50 text-emphz-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-2xl">
              <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">06 / GLOBAL SECTORS</span>
              <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker tracking-tighter uppercase leading-[0.9]">
                Engineered for <br/><span className="text-emphz-teal">Diverse Resilience.</span>
              </h2>
           </div>
           <p className="text-neutral-500 font-light text-lg max-w-sm mb-2">
             EMPHZ modular engineering adapts to the critical compliance and durability needs of the world's most demanding sectors.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector) => (
            <div 
              key={sector.id}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl hover:-tranneutral-y-3 transition-all duration-700 cursor-pointer border border-white"
            >
              {/* Background gradient from the sector data (e.g. from-blue-900 to-neutral-900) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-90 transition-opacity duration-700 group-hover:opacity-100`}></div>
              <div className="absolute inset-0 bg-grid opacity-10"></div>
              
              <div className="relative h-full p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-emphz-teal group-hover:border-emphz-teal transition-all duration-500">
                      {sector.icon}
                   </div>
                   <span className="font-mono text-white/30 text-[10px] uppercase tracking-widest font-bold">#{sector.id}</span>
                </div>

                <div>
                   <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight leading-none group-hover:text-emphz-teal transition-colors">
                     {sector.title}
                   </h3>
                   <p className="text-white/60 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                     {sector.desc}
                   </p>
                   
                   <ul className="space-y-3 mb-8 opacity-0 group-hover:opacity-100 tranneutral-y-4 group-hover:tranneutral-y-0 transition-all duration-500">
                      {sector.items.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                           <div className="w-1.5 h-1.5 bg-emphz-teal rounded-full"></div>
                           {item}
                        </li>
                      ))}
                   </ul>

                   <div className="flex items-center gap-2 text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] hover:text-emphz-teal transition-colors">
                      EXPLORE SECTOR <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-12 p-10 bg-white rounded-[2.5rem] shadow-2xl border border-neutral-100">
              <div className="text-left">
                <span className="block text-4xl font-bold text-emphz-darker tracking-tighter">150+</span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Industry Partners</span>
              </div>
              <div className="w-px h-12 bg-neutral-100"></div>
              <div className="text-left">
                <span className="block text-4xl font-bold text-emphz-darker tracking-tighter">12+</span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Govt Pre-Quals</span>
              </div>
              <div className="w-px h-12 bg-neutral-100"></div>
              <div className="flex -space-x-4">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-neutral-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Partner" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-white bg-emphz-teal flex items-center justify-center text-white text-[10px] font-bold">
                    +
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
