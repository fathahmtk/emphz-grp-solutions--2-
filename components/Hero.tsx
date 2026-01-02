
import React from 'react';
import { ArrowRight, Star, ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-emphz-blue overflow-hidden">
      {/* Background Visual Layer */}
      <div className="absolute inset-0">
        <img 
          src={SITE_IMAGES.hero} 
          alt="EMPHZ Infrastructure" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emphz-blue/90 via-emphz-blue/40 to-transparent"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-48 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Hero Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="w-8 h-px bg-emphz-silver"></span>
              <span className="font-mono text-emphz-silver text-xs tracking-[0.5em] uppercase font-bold">
                GRP MODULAR ENGINEERING
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tighter">
              The Best GRP <br/>
              <span className="text-emphz-silver">Industrial</span> Solutions.
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light opacity-90 mx-auto lg:mx-0">
              Transforming critical infrastructure with next-gen GRP composites. 
              Built for Scale. Designed to Last. Engineered for modern utilities.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <a href="#products" className="bg-emphz-silver text-emphz-blue px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-white transition-all duration-500 uppercase flex items-center gap-3 shadow-2xl shadow-emphz-silver/20">
                BOOK CONSULTATION <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-white/20 transition-all duration-500 uppercase flex items-center gap-3">
                EXPLORE NOW <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Floating Information Bar */}
            <div className="mt-16 inline-flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 bg-white backdrop-blur-2xl rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 group">
               <div className="text-left px-4">
                  <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1">Design Life From</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-emphz-blue">50</span>
                    <span className="text-neutral-400 text-sm font-bold ml-1 tracking-widest">+ YEARS</span>
                  </div>
               </div>
               
               <div className="hidden md:block w-px h-12 bg-neutral-200"></div>
               
               <div className="text-left px-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-emphz-blue fill-emphz-blue" />)}
                  </div>
                  <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Industry Ranking</span>
                  <span className="text-xs font-bold text-emphz-blue tracking-wide">#1 COMPOSITE VENDOR</span>
               </div>
            </div>
          </div>

          {/* Featured Visual Component */}
          <div className="lg:w-2/5 relative flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] max-w-sm rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-2xl group cursor-pointer hover:-translate-y-2 transition-all duration-700 ease-out">
               <img 
                 src={SITE_IMAGES.about} 
                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                 alt="EMPHZ Manufacturing"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-emphz-blue/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
               <div className="absolute bottom-10 left-10 right-10">
                 <div className="bg-emphz-silver/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl transform group-hover:translate-y-[-4px] transition-transform duration-500">
                   <p className="text-emphz-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-2">READY FOR DEPLOYMENT</p>
                   <p className="text-emphz-blue text-lg font-bold leading-tight uppercase">Vetted GRP Composite Systems</p>
                 </div>
               </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emphz-silver/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>

      {/* Elegant Curved Background Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg className="relative block w-[200%] h-32 md:h-64 translate-x-[-25%]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
