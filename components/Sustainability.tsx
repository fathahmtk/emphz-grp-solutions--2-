
import React from 'react';
import { SITE_IMAGES, SUSTAINABILITY_STATS } from '../data';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section className="relative bg-neutral-50 py-32 overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-emerald-500 text-xs font-bold tracking-[0.4em] uppercase">RESPONSIBILITY</span>
              <div className="h-px w-12 bg-emerald-500/30"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker leading-[1.1] mb-10 tracking-tighter">
              Sustainable <br />
              <span className="text-emerald-500">By Design.</span>
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mb-12 font-light">
              Composite infrastructure eliminates the heavy environmental toll of corrosion maintenance and premature replacement.
              Our GRP ecosystems are built for a 50+ year circular lifecycle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {SUSTAINABILITY_STATS.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center">
                  <div className="text-emerald-500 mb-4 flex justify-center">{stat.icon}</div>
                  <span className="block text-3xl font-bold text-emphz-darker mb-1 tracking-tighter">{stat.value}</span>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-[0.3em] hover:text-emphz-darker transition-colors">
              DOWNLOAD ESG REPORT <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[1/1] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img
                src={SITE_IMAGES.sustainability}
                alt="Green Tech"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-emphz-darker font-bold text-lg leading-tight uppercase tracking-tight">Zero-Waste Protocol</p>
                    <p className="text-neutral-500 text-xs font-light">100% material recovery in fabrication.</p>
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

export default Sustainability;
