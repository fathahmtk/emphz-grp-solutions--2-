
import React from 'react';
import { Cpu, FlaskConical, Globe, Zap, ArrowRight, Microchip, Layers } from 'lucide-react';
import { SITE_IMAGES } from '../data';

const InnovationHub: React.FC = () => {
  return (
    <section id="innovation" className="py-24 md:py-32 bg-emphz-darker text-white relative overflow-hidden">
      {/* Background visual layers */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emphz-teal/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2">
            <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">15 / R&D PIPELINE</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              The Innovation <br/><span className="text-emphz-teal">Engine.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 font-light max-w-xl">
              Our Bangalore Innovation Center is dedicated to pushing the boundaries of material science. 
              We are currently piloting AI-assisted laminate layup and 3D-printed GRP structural cores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Bio-Resins', 
                  desc: 'Sustainable composite binders derived from renewable sources.',
                  icon: <FlaskConical className="w-5 h-5 text-emphz-teal" />
                },
                { 
                  title: 'Smart Sensors', 
                  desc: 'Integrated IoT monitoring for structural health & environment.',
                  icon: <Microchip className="w-5 h-5 text-emphz-teal" />
                },
                { 
                  title: 'Nano-Coatings', 
                  desc: 'Self-cleaning, high-reflectance thermal shields.',
                  icon: <Zap className="w-5 h-5 text-emphz-teal" />
                },
                { 
                  title: '3D Printing', 
                  desc: 'Additive manufacturing for complex modular geometries.',
                  icon: <Layers className="w-5 h-5 text-emphz-teal" />
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-emphz-teal/40 transition-all duration-500">
                  <div className="mb-6 inline-flex p-3 bg-emphz-teal/10 rounded-2xl group-hover:bg-emphz-teal group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative aspect-[4/5] max-w-md ml-auto rounded-[3rem] overflow-hidden border-[1px] border-white/20 shadow-2xl group">
                <img 
                  src={SITE_IMAGES.valueProp} 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-105" 
                  alt="Innovation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emphz-darker via-transparent to-transparent"></div>
                
                {/* Floating Tech HUD Overlay */}
                <div className="absolute top-10 right-10 p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl animate-in zoom-in-95 duration-700">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emphz-teal animate-pulse"></div>
                      <span className="text-white text-[9px] font-mono font-bold uppercase tracking-widest">Prototype_088</span>
                   </div>
                   <p className="text-white/60 text-[8px] font-mono uppercase tracking-[0.2em]">Next-Gen_Module_A</p>
                </div>

                <div className="absolute bottom-12 left-12 right-12">
                   <div className="p-10 bg-emphz-teal/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl transform group-hover:-tranneutral-y-2 transition-transform duration-700">
                      <h5 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Vision 2030</h5>
                      <p className="text-white/80 text-sm font-light leading-relaxed mb-6">"Our goal is to reduce on-site assembly time for a 100-unit facility to under 72 hours."</p>
                      <button className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.3em] hover:tranneutral-x-2 transition-transform">
                        EXPLORE THE FUTURE <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Decorative HUD Elements */}
             <div className="absolute -bottom-10 -left-10 w-48 h-48 border border-emphz-teal/20 rounded-full animate-spin-slow"></div>
             <div className="absolute top-1/2 -left-20 w-40 h-px bg-emphz-teal/20"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default InnovationHub;
