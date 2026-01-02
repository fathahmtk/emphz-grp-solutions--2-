
import React from 'react';
import { ShieldCheck, ClipboardCheck, Award, Globe, Search, ArrowUpRight } from 'lucide-react';

const ComplianceMatrix: React.FC = () => {
  const standards = [
    { title: 'IEC 62208', label: 'Ingress Protection', desc: 'Standard for empty enclosures for low-voltage switchgear and controlgear assemblies.' },
    { title: 'IEC 60068', label: 'Environmental Testing', desc: 'Verified resistance to thermal shock, humidity, and atmospheric corrosion.' },
    { title: 'BS 476 Part 7', label: 'Fire Retardance', desc: 'Class 1 surface spread of flame certification for GRP laminates.' },
    { title: 'ASTM D-635', label: 'Self Extinguishing', desc: 'Flammability of plastics in a horizontal position as per international safety norms.' },
    { title: 'UL 94', label: 'Safety Rating', desc: 'Flammability of plastic materials for parts in devices and appliances.' },
    { title: 'ISO 9001:2015', label: 'Quality MGMT', desc: 'Strict adherence to total quality management and continuous improvement protocols.' },
  ];

  return (
    <section id="compliance" className="py-24 md:py-32 bg-neutral-50 border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.4em] uppercase mb-4 block">11 / STANDARDS & AUDITS</span>
           <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker mb-10 tracking-tighter uppercase">Compliance <span className="text-emphz-teal">Matrix.</span></h2>
           <p className="text-neutral-500 max-w-3xl mx-auto font-light text-lg leading-relaxed">
             EMPHZ modular systems are engineered to exceed international benchmarks. Every unit is audited against global performance standards.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {standards.map((std, i) => (
             <div key={i} className="bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700 border border-neutral-50 group flex flex-col">
                <div className="flex items-center gap-5 mb-10">
                   <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-emphz-teal group-hover:bg-emphz-teal group-hover:text-white transition-all duration-500">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-emphz-darker tracking-tight">{std.title}</h4>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold">{std.label}</span>
                   </div>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-8 flex-grow">
                   {std.desc}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest group-hover:text-emphz-teal transition-colors">
                   VIEW TEST REPORT <ArrowUpRight className="w-4 h-4" />
                </button>
             </div>
           ))}
        </div>

        <div className="mt-24 bg-emphz-darker rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 text-white/5 font-mono text-9xl font-bold pointer-events-none uppercase">GLOBE</div>
           
           <div className="flex items-center gap-10 relative z-10">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                 <Globe className="w-10 h-10" />
              </div>
              <div>
                 <h5 className="text-white text-3xl font-bold mb-2 tracking-tight">GLOBAL REACH</h5>
                 <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest font-bold">Multi-National Compliance Certification Ready</p>
              </div>
           </div>
           
           <div className="relative z-10">
              <button className="px-12 py-5 bg-emphz-teal text-white rounded-full font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-emphz-darker transition-all shadow-xl shadow-emphz-teal/20">
                 REQUEST CERTIFICATES
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceMatrix;
