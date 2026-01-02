
import React from 'react';
import { SITE_IMAGES, INDUSTRIES } from '../data';
import { Layers, ShieldCheck, Zap, PenTool } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <section id="why-emphz" className="relative py-32 overflow-hidden">
      {/* Background Image Parallax */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${SITE_IMAGES.valueProp})` }}></div>
      <div className="absolute inset-0 bg-emphz-blue/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-emphz-silver text-xs tracking-widest uppercase mb-4 block">03 / Core Competency</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ENGINEERED FOR EXTREMES
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Every EMPHZ product is built to withstand the harshest environments while maintaining structural integrity and aesthetic finish for decades.
          </p>
        </div>
           
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { 
              icon: <Layers className="w-10 h-10" />, 
              title: "Composite Strength", 
              text: "Advanced GRP layering for superior strength-to-weight ratio." 
            },
            { 
              icon: <ShieldCheck className="w-10 h-10" />, 
              title: "Corrosion Proof", 
              text: "Impervious to salt, humidity, and chemical exposure." 
            },
            { 
              icon: <Zap className="w-10 h-10" />, 
              title: "Rapid Assembly", 
              text: "Modular interlocking systems for speed." 
            },
            { 
              icon: <PenTool className="w-10 h-10" />, 
              title: "Custom Finish", 
              text: "UV-stable gel coats in any RAL color specification." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-emphz-silver/10 hover:border-emphz-silver transition-all duration-300 group">
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-white font-bold font-mono text-sm tracking-wide mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Industry ticker */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70">
            {INDUSTRIES.map((industry, idx) => (
              <span key={idx} className="font-mono text-sm md:text-base text-white uppercase tracking-widest">
                {industry}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueProp;
