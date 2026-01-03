
import React, { useState } from 'react';
import { Wind, Factory, Landmark, Anchor, ShieldCheck, ArrowRight, Cpu, Database, Network } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const ENVIRONMENTS = [
  {
    id: 'coastal',
    title: 'OFFSHORE / COASTAL',
    icon: <Anchor className="w-6 h-6" />,
    stress: 'High Salinity / Humidity',
    solutions: ['IP67 GRP Enclosures', 'SS316 Hardened Hardware', 'Non-Porous GRP Coats'],
    vetted: 'Approved GRP Port Infra',
    code: 'OS-H2O-01'
  },
  {
    id: 'desert',
    title: 'DESERT / RENEWABLES',
    icon: <Wind className="w-6 h-6" />,
    stress: 'High Heat / UV / Sand',
    solutions: ['UV Stabilized GRP Canopies', 'Sand-Trap Ventilation', 'Reflective GRP Finish'],
    vetted: 'Vetted GRP for Solar Parks',
    code: 'DS-UV-99'
  },
  {
    id: 'chemical',
    title: 'HEAVY INDUSTRIAL',
    icon: <Factory className="w-6 h-6" />,
    stress: 'Chemical / Acidic Exposure',
    solutions: ['Vinyl Ester GRP Resin Base', 'Acoustic GRP Insulation', 'Custom Chemical GRP Seal'],
    vetted: 'Qualified GRP for Refineries',
    code: 'IND-CHM-X'
  },
  {
    id: 'urban',
    title: 'SMART CITY',
    icon: <Landmark className="w-6 h-6" />,
    stress: 'Vandalism / Public Use',
    solutions: ['Anti-Vandal GRP Shell', 'Integrated IoT GRP Channels', 'Executive GRP Sanitation'],
    vetted: 'Municipal GRP Pre-Qualification',
    code: 'SC-URB-MOD'
  }
];

const SolutionArchitect: React.FC = () => {
  const [activeEnv, setActiveEnv] = useState(ENVIRONMENTS[0]);

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white text-emphz-darker overflow-hidden border-t border-neutral-100">
      <div className="absolute inset-0 bg-grid-dark opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          number="14"
          category="COMPOSITE VETTING"
          title="GRP Architecture Engine"
          subtitle="Our autonomous configuration engine matches site-specific environmental stressors with the precise GRP composite matrix required for 50-year lifecycle performance."
          align="center"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4">
          {ENVIRONMENTS.map((env) => (
            <GlowCard
              key={env.id}
              className={`rounded-[2.5rem] transition-all duration-500 relative cursor-pointer group flex flex-col items-center justify-center p-12 text-center border-2 ${activeEnv.id === env.id
                ? 'bg-emphz-darker text-white border-emphz-darker shadow-2xl scale-[1.05]'
                : 'bg-white text-neutral-400 border-neutral-100 hover:border-emphz-teal/30 hover:shadow-xl'
                }`}
              onClick={() => setActiveEnv(env)}
            >
              <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeEnv.id === env.id ? 'bg-emphz-teal text-white scale-110 rotate-12' : 'bg-neutral-50 text-neutral-300 group-hover:bg-emphz-teal group-hover:text-white'}`}>
                {env.icon}
              </div>
              <h4 className="font-bold text-xs tracking-[0.25em] mb-4 uppercase">{env.title}</h4>
              <div className="flex flex-col items-center gap-2">
                <span className={`text-[8px] font-mono uppercase tracking-[0.3em] font-bold ${activeEnv.id === env.id ? 'text-emphz-teal' : 'text-neutral-300'}`}>
                  {env.stress}
                </span>
                <span className="text-[7px] font-mono text-neutral-400 opacity-50 uppercase tracking-widest">{env.code}</span>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-[4rem] p-12 md:p-20 border border-neutral-100 shadow-inner group/panel relative overflow-hidden" key={activeEnv.id}>
          <div className="absolute top-0 right-0 p-16 text-neutral-200/40 font-mono text-9xl font-bold select-none pointer-events-none group-hover/panel:text-emphz-teal/10 transition-colors">
            {activeEnv.code.split('-')[0]}
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-stretch relative z-10">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <div className="bg-emphz-teal/10 p-5 rounded-3xl inline-flex items-center gap-4 text-emphz-teal mb-10 border border-emphz-teal/20 w-fit">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">GRP_SYSTEM_VETTED</span>
              </div>
              <h5 className="text-4xl md:text-5xl font-bold text-emphz-darker mb-8 uppercase tracking-tighter leading-[0.9]">{activeEnv.vetted}</h5>
              <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest leading-relaxed mb-10 max-w-sm">
                Material matrix configuration successfully validated for {activeEnv.title} conditions. All components meet ASTM/BS durability standards.
              </p>
              <div className="w-20 h-1.5 bg-emphz-teal rounded-full shadow-[0_0_15px_rgba(20,184,166,0.3)]"></div>
            </div>

            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-neutral-200"></div>
                <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Vetted GRP Bill of Materials (BOM)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeEnv.solutions.map((sol, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 group/item hover:border-emphz-teal/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center text-emphz-teal font-mono text-xs font-bold transition-all group-hover/item:bg-emphz-teal group-hover/item:text-white">
                        0{i + 1}
                      </div>
                      <div>
                        <span className="block text-emphz-darker font-bold text-xs uppercase tracking-[0.15em] mb-1">{sol}</span>
                        <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest">Spec: BS_EN_13121</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-200 group-hover/item:text-emphz-teal group-hover/item:translate-x-2 transition-all" />
                  </div>
                ))}

                <div className="bg-emphz-darker text-white p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center items-center text-center cursor-pointer hover:bg-emphz-teal transition-all group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                  <Cpu className="w-10 h-10 mb-6 text-emphz-teal group-hover:text-white" />
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase mb-2 text-emphz-teal group-hover:text-white/80">REQUEST SYSTEM</span>
                  <span className="font-bold text-xs tracking-[0.2em] uppercase relative z-10 font-mono">GENERATE_SPEC_v2 →</span>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="flex items-center gap-3 text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                  <Database className="w-3 h-3" /> 256 GRP MATRICES
                </div>
                <div className="flex items-center gap-3 text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                  <Network className="w-3 h-3" /> EDGE_SYNC_ACTIVE
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
