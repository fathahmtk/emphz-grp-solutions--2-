import React from 'react';
import { Flame, Shield, ThermometerSun, FileCheck, Layers, Scale } from 'lucide-react';

const Quality: React.FC = () => {
  const standards = [
    {
      id: "01",
      title: "Material Science",
      icon: <Layers className="w-6 h-6 text-emphz-teal" />,
      spec: "Isophthalic / Vinyl Ester",
      description: "High-grade resin systems engineered for chemical resistance and structural longevity."
    },
    {
      id: "02",
      title: "Fire Safety",
      icon: <Flame className="w-6 h-6 text-emphz-teal" />,
      spec: "BS 476 Part 7 Class 1",
      description: "Self-extinguishing, fire-retardant composites designed for high-risk industrial zones."
    },
    {
      id: "03",
      title: "Climate Engineering",
      icon: <ThermometerSun className="w-6 h-6 text-emphz-teal" />,
      spec: "UV Stabilized / IP65",
      description: "Impervious to extreme heat, humidity, and monsoon conditions without degradation."
    },
    {
      id: "04",
      title: "Quality Assurance",
      icon: <FileCheck className="w-6 h-6 text-emphz-teal" />,
      spec: "ISO 9001:2015",
      description: "Rigorous quality control protocols at every stage of the molding and assembly process."
    }
  ];

  return (
    <section className="py-24 bg-emphz-dark relative overflow-hidden border-t border-white/5">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">05 / Standards</span>
            <h2 className="text-4xl font-bold text-white">COMPLIANCE & SAFETY</h2>
          </div>
          <div className="md:text-right">
             <div className="inline-flex items-center gap-2 px-4 py-2 border border-emphz-teal/30 bg-emphz-teal/5 rounded-full">
                <Shield className="w-4 h-4 text-emphz-teal" />
                <span className="text-xs font-mono text-emphz-teal tracking-wider">INDUSTRIAL GRADE CERTIFIED</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standards.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-emphz-darker border border-white/10 p-8 hover:border-emphz-teal/50 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-4xl font-bold text-white group-hover:opacity-10 transition-opacity">
                {item.id}
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="inline-block border-l-2 border-emphz-teal pl-3 mb-3">
                    <span className="font-mono text-xs text-emphz-teal uppercase tracking-wider">{item.spec}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emphz-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <Scale className="w-8 h-8 text-slate-500" />
              <p className="text-slate-300 text-sm max-w-lg">
                <strong className="text-white block mb-1">Built for Scale. Designed to Last.</strong>
                All structures undergo stress testing for wind load, impact resistance, and water tightness before dispatch.
              </p>
           </div>
           <button className="whitespace-nowrap px-6 py-3 border border-white/20 text-white font-mono text-xs hover:bg-white hover:text-emphz-darker transition-colors uppercase tracking-widest">
             Download Tech Sheets
           </button>
        </div>
      </div>
    </section>
  );
};

export default Quality;