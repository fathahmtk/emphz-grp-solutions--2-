
import React, { useState } from 'react';
import { CAPABILITIES } from '../data';
import { ArrowRight, Cpu, Settings, Layers } from 'lucide-react';

const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CAPABILITIES[0]);

  return (
    <section id="capabilities" className="bg-slate-50 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">MANUFACTURING</span>
            <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker tracking-tighter uppercase leading-[0.9]">
              Tech <span className="text-emphz-teal">Matrix.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-light text-lg max-w-sm mb-2">
            One of India's most advanced composite facilities, delivering micron-level precision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tab Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(cap)}
                className={`group flex items-center justify-between p-8 rounded-[2rem] text-left transition-all duration-500 border ${
                  activeTab.id === cap.id
                    ? 'bg-emphz-teal border-emphz-teal text-white shadow-2xl shadow-emphz-teal/20 scale-105'
                    : 'bg-white border-slate-100 text-slate-400 hover:border-emphz-teal/30 hover:text-emphz-darker'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`p-3 rounded-full ${activeTab.id === cap.id ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400'}`}>
                    {cap.icon}
                  </div>
                  <div>
                    <span className="font-bold text-lg block tracking-tight">{cap.name}</span>
                    <span className="font-mono text-[9px] uppercase opacity-70 tracking-widest">{cap.id}</span>
                  </div>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform ${activeTab.id === cap.id ? 'translate-x-0' : '-translate-x-4 opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Visual Display */}
          <div className="lg:w-2/3 relative">
             <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-black group">
                <img 
                  src={activeTab.image} 
                  alt={activeTab.name}
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emphz-darker via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-12 w-full">
                   <div className="animate-in slide-in-from-bottom-8 duration-700">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-12 h-1 bg-emphz-teal"></span>
                        <h3 className="text-3xl font-bold text-white uppercase tracking-tight">{activeTab.name}</h3>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl font-light">
                        {activeTab.desc}
                      </p>

                      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                        {activeTab.stats.map((stat, idx) => (
                          <div key={idx}>
                             <span className="block text-[10px] text-emphz-teal font-mono uppercase tracking-widest mb-2">
                               {stat.label}
                             </span>
                             <span className="text-2xl font-bold text-white tracking-tighter">
                               {stat.value}
                             </span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
