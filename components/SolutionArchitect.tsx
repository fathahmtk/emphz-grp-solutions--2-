
import React, { useState } from 'react';
import { Droplets, Wind, Zap, Factory, Landmark, Anchor, ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const ENVIRONMENTS = [
  {
    id: 'coastal',
    title: 'OFFSHORE / COASTAL',
    icon: <Anchor className="w-6 h-6" />,
    stress: 'High Salinity / Humidity',
    solutions: ['IP67 GRP Enclosures', 'SS316 Hardened Hardware', 'Non-Porous GRP Coats'],
    vetted: 'Approved GRP Port Infra'
  },
  {
    id: 'desert',
    title: 'DESERT / RENEWABLES',
    icon: <Wind className="w-6 h-6" />,
    stress: 'High Heat / UV / Sand',
    solutions: ['UV Stabilized GRP Canopies', 'Sand-Trap Ventilation', 'Reflective GRP Finish'],
    vetted: 'Vetted GRP for Solar Parks'
  },
  {
    id: 'chemical',
    title: 'HEAVY INDUSTRIAL',
    icon: <Factory className="w-6 h-6" />,
    stress: 'Chemical / Acidic Exposure',
    solutions: ['Vinyl Ester GRP Resin Base', 'Acoustic GRP Insulation', 'Custom Chemical GRP Seal'],
    vetted: 'Qualified GRP for Refineries'
  },
  {
    id: 'urban',
    title: 'SMART CITY',
    icon: <Landmark className="w-6 h-6" />,
    stress: 'Vandalism / Public Use',
    solutions: ['Anti-Vandal GRP Shell', 'Integrated IoT GRP Channels', 'Executive GRP Sanitation'],
    vetted: 'Municipal GRP Pre-Qualification'
  }
];

const SolutionArchitect: React.FC = () => {
  const [activeEnv, setActiveEnv] = useState(ENVIRONMENTS[0]);

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white text-emphz-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="14"
          category="COMPOSITE VETTING"
          title="GRP Architecture Engine"
          subtitle="Our protocol matches site environmental stressors with the precise GRP composite configuration required for sustained lifecycle performance."
          align="center"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {ENVIRONMENTS.map((env) => (
            <button
              key={env.id}
              onClick={() => setActiveEnv(env)}
              className={`p-10 text-center rounded-[2.5rem] transition-all duration-500 relative group border ${activeEnv.id === env.id
                  ? 'bg-emphz-darker text-white border-emphz-darker shadow-2xl scale-[1.02]'
                  : 'bg-neutral-50 text-neutral-400 border-neutral-100 hover:border-emphz-teal/30 hover:bg-white'
                }`}
            >
              <div className={`mb-8 flex justify-center transition-transform duration-500 ${activeEnv.id === env.id ? 'text-emphz-teal scale-110' : 'group-hover:text-emphz-teal group-hover:scale-110'}`}>
                {env.icon}
              </div>
              <h4 className="font-bold text-sm tracking-[0.2em] mb-3 uppercase">{env.title}</h4>
              <p className={`text-[9px] font-mono uppercase tracking-widest ${activeEnv.id === env.id ? 'text-emphz-teal' : 'text-neutral-500'}`}>
                {env.stress}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100 animate-in fade-in slide-in-from-bottom-8 duration-700" key={activeEnv.id}>
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3">
              <div className="bg-emphz-teal/10 p-4 rounded-2xl inline-flex items-center gap-3 text-emphz-teal mb-8">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">GRP_SYSTEM_VETTED</span>
              </div>
              <h5 className="text-4xl font-bold text-emphz-darker mb-6 uppercase tracking-tight leading-tight">{activeEnv.vetted}</h5>
              <div className="w-16 h-1 bg-emphz-teal rounded-full"></div>
            </div>

            <div className="lg:w-2/3">
              <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-10 font-bold">Vetted GRP Bill of Materials (BOM)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeEnv.solutions.map((sol, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 group hover:shadow-xl transition-all duration-500 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-emphz-teal font-mono text-xl font-bold opacity-30">0{i + 1}</span>
                      <span className="text-emphz-darker font-bold text-xs uppercase tracking-widest">{sol}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-200 group-hover:text-emphz-teal transition-colors" />
                  </div>
                ))}
                <div className="bg-emphz-teal text-white p-8 rounded-2xl shadow-xl shadow-emphz-teal/10 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-emphz-darker transition-all group">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1">REQUEST</span>
                  <span className="font-bold text-xs tracking-widest uppercase group-hover:translate-x-1 transition-transform">CUSTOM GRP ARCHITECTURE →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionArchitect;
