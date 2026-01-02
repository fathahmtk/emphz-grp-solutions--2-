
import React from 'react';
import { Target, Compass, ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data';

const Manifesto: React.FC = () => {
  return (
    <section className="relative py-32 bg-white text-emphz-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           
           <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.4em] uppercase">OUR VISION</span>
                <div className="h-px w-12 bg-emphz-teal/30"></div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker leading-[1.05] mb-10 tracking-tighter">
                Engineering a <br/>
                <span className="text-emphz-teal">Modular Future</span>
              </h2>

              <div className="space-y-8">
                 <div className="group border-l-4 border-slate-100 hover:border-emphz-teal pl-8 py-4 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                       <Compass className="w-5 h-5 text-emphz-teal" />
                       <h4 className="text-lg font-bold uppercase tracking-tight">The Horizon</h4>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                      To become the global benchmark for high-resilience modular infrastructure—powering sustainable development through composite science.
                    </p>
                 </div>

                 <div className="group border-l-4 border-slate-100 hover:border-emphz-teal pl-8 py-4 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                       <Target className="w-5 h-5 text-emphz-teal" />
                       <h4 className="text-lg font-bold uppercase tracking-tight">The Mission</h4>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                      Replacing inefficient, high-maintenance construction with precision-engineered GRP systems that deliver speed and safety.
                    </p>
                 </div>
              </div>

              <div className="mt-12">
                 <button className="flex items-center gap-3 font-mono text-[10px] font-bold text-emphz-teal uppercase tracking-[0.3em] hover:text-emphz-darker transition-colors group">
                    VIEW ESG REPORT <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>

           <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 group">
                 <img 
                   src={SITE_IMAGES.manifesto} 
                   className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                   alt="EMPHZ Future"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emphz-darker/60 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl">
                    <p className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-2">Since 2024</p>
                    <p className="text-white text-2xl font-bold italic">"Precision at Scale."</p>
                 </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emphz-teal/5 rounded-full -z-10 animate-pulse"></div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;
