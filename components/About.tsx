
import React from 'react';
import { Phone, Mail, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { SITE_IMAGES } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-50 text-emphz-blue relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Visual Grid (Reference Inspiration: Overlapping Layout) */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6 items-end">
               <div className="space-y-6">
                  <div className="aspect-[4/5] bg-neutral-200 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group relative">
                    <img src={SITE_IMAGES.about} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Process" />
                    <div className="absolute inset-0 bg-emphz-silver/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <span className="bg-white/90 backdrop-blur-md text-emphz-blue px-4 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-lg block text-center">PRECISION MOLDING</span>
                    </div>
                  </div>
               </div>
               
               <div className="space-y-6">
                  <div className="aspect-square bg-neutral-200 rounded-full overflow-hidden shadow-2xl border-8 border-white group relative cursor-pointer">
                    <img src={SITE_IMAGES.valueProp} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Technology" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-emphz-silver/20 transition-all">
                       <div className="w-16 h-16 rounded-full bg-emphz-silver flex items-center justify-center shadow-2xl text-emphz-blue transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-emphz-blue" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="aspect-[4/5] bg-neutral-200 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img src={SITE_IMAGES.manifesto} className="w-full h-full object-cover" alt="Scale" />
                  </div>
               </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emphz-silver/10 rounded-full -z-10"></div>
          </div>

          {/* Text Content Side */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-emphz-blue text-xs font-bold tracking-[0.4em] uppercase">ABOUT US</span>
              <div className="h-px w-12 bg-emphz-silver/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-emphz-blue leading-[1.1] mb-8">
              We Can Help You Build <br/>
              <span className="text-emphz-silver">Scalable Ecosystems</span>
            </h2>
            
            <p className="text-neutral-600 text-lg mb-12 leading-relaxed font-light">
              EMPHZ bridges the gap between traditional heavy construction and modern composite science. 
              We specialize in GRP solutions that eliminate corrosion maintenance and accelerate site readiness for the global commercial market.
            </p>

            {/* Premium Support Card (Reference Inspiration: The HOTELOR Contact Box) */}
            <div className="bg-white p-10 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] border border-neutral-100 flex flex-col md:flex-row gap-10 items-center">
               <div className="w-20 h-20 rounded-full bg-emphz-silver/10 flex items-center justify-center text-emphz-blue shrink-0">
                 <Phone className="w-8 h-8" />
               </div>
               
               <div className="flex-grow text-center md:text-left">
                 <p className="text-neutral-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">FOR MORE INFORMATION, PLEASE</p>
                 <h4 className="text-2xl font-bold text-emphz-blue tracking-tight mb-4">Contact Us By Telephone Or Email</h4>
                 
                 <div className="flex flex-col md:flex-row gap-6 md:items-center">
                    <span className="text-2xl font-bold text-emphz-blue tracking-tighter hover:text-neutral-500 transition-colors cursor-pointer">+91 9037 874 080</span>
                    <a href="mailto:info@emphz.in" className="bg-emphz-silver text-emphz-blue px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-emphz-blue hover:text-white transition-all uppercase flex items-center gap-2 shadow-lg shadow-neutral-300">
                       MAIL US <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
               </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:gap-16">
               <div className="flex items-start gap-4">
                 <CheckCircle2 className="w-6 h-6 text-emphz-blue shrink-0" />
                 <div>
                   <span className="block text-3xl font-bold text-emphz-blue">50+</span>
                   <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Year Design Life</span>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <CheckCircle2 className="w-6 h-6 text-emphz-blue shrink-0" />
                 <div>
                   <span className="block text-3xl font-bold text-emphz-blue">IP67</span>
                   <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Protection Grade</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
