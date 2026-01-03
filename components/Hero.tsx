
import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Cpu, Activity, Shield } from 'lucide-react';
import { SITE_IMAGES } from '../data';

const Hero: React.FC = () => {
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#0B0F1A] overflow-hidden">
      {/* Background Visual Layer */}
      <div className="absolute inset-0">
        <img
          src={SITE_IMAGES.hero}
          alt="EMPHZ Infrastructure"
          className="w-full h-full object-cover opacity-10 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0B0F1A] to-transparent"></div>
        <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

        {/* Animated Mesh Overlay */}
        <div className="absolute inset-0 mesh-bg opacity-20 pointer-events-none"></div>

        {/* Global HUD Elements */}
        <div className="absolute top-40 left-12 hidden xl:block">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emphz-teal animate-pulse"></div>
                <span className="text-white font-mono text-[8px] tracking-[0.4em] uppercase opacity-40">NODE_SYNC_ACTIVE:</span>
              </div>
              <span className="text-emphz-teal font-mono text-[9px] tracking-[0.2em] uppercase font-bold ml-4">120.44.29.11</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white font-mono text-[8px] tracking-[0.4em] uppercase opacity-40">COMPOSITE_STATUS:</span>
              <div className="flex items-center gap-2 ml-4">
                <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emphz-teal transition-all duration-1000" style={{ width: `${bootProgress}%` }}></div>
                </div>
                <span className="text-white font-mono text-[8px] uppercase">{bootProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-48 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Hero Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-4 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-emphz-teal"></div>
                <div className="w-1 h-1 rounded-full bg-emphz-teal opacity-40"></div>
                <div className="w-1 h-1 rounded-full bg-emphz-teal opacity-20"></div>
              </div>
              <span className="font-mono text-emphz-teal text-[9px] tracking-[0.5em] uppercase font-bold">
                NEXT-GEN GRP ARCHITECTURE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.95] mb-10 tracking-tighter">
              Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">Composite</span> <br />
              Systems.
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light opacity-80 mx-auto lg:mx-0">
              EMPHZ manufactures mission-critical GRP infrastructure for global utilities.
              Engineering durability through advanced polymer science and structural precision.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a href="#products" className="group relative px-10 py-5 bg-emphz-teal text-white rounded-full text-xs font-bold tracking-[0.3em] overflow-hidden transition-all shadow-2xl shadow-emphz-teal/20">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-emphz-dark transition-colors flex items-center gap-3">
                  INITIATE CONFIGURATION <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a href="#about" className="px-10 py-5 bg-white/5 backdrop-blur-xl text-white border border-white/10 rounded-full text-xs font-bold tracking-[0.3em] hover:bg-white/10 transition-all uppercase flex items-center gap-3">
                SYSTEM_OVERVIEW <ArrowUpRight className="w-4 h-4 opacity-40" />
              </a>
            </div>

            {/* Floating Information Bar */}
            <div className="mt-20 inline-flex flex-col md:flex-row items-center gap-12 p-10 bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] border border-white/5">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emphz-teal/10 flex items-center justify-center text-emphz-teal">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">DESIGN LIFE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">50</span>
                    <span className="text-neutral-600 text-[10px] font-bold tracking-widest font-mono">YEARS</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-white/10"></div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emphz-teal/10 flex items-center justify-center text-emphz-teal">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest mb-1">FIRE SAFETY</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">BS476</span>
                    <span className="text-neutral-600 text-[10px] font-bold tracking-widest font-mono">CLASS_1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Visual Component */}
          <div className="lg:w-2/5 relative">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group">
              <img
                src={SITE_IMAGES.about}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="EMPHZ Manufacturing"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent"></div>

              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-black/80 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/5 group-hover:border-emphz-teal/30 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <Cpu className="w-6 h-6 text-emphz-teal" />
                    <div className="text-right">
                      <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">TYPE: ALPHA_MOD</span>
                      <span className="block text-white font-mono text-[10px] uppercase font-bold">VETTED_GRP_v4</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight uppercase tracking-tight mb-4">Precision Engineered <br />Composite Shell</h3>
                  <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emphz-teal w-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative glow */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-emphz-teal/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
