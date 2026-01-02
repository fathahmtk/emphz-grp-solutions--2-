import React, { useEffect, useState, useRef } from 'react';
import { FastForward, Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const ModularVelocity: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.5, 100));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView, progress]);

  const milestones = [
    { label: 'Site Prep', day: 1, traditionalDay: 5 },
    { label: 'Foundations', day: 2, traditionalDay: 15 },
    { label: 'Assembly', day: 4, traditionalDay: 35 },
    { label: 'Commissioning', day: 6, traditionalDay: 45 },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-emphz-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">04 / Deployment Velocity</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">TIME-TO-VALUE GAP</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Traditional construction is a liability in fast-moving industries. Our modular ecosystems deliver operational readiness up to 8x faster.
          </p>
        </div>

        <div className="space-y-16">
          {/* GRP Modular Timeline */}
          <div className="relative">
            <div className="flex justify-between items-end mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emphz-teal/20 border border-emphz-teal/50 flex items-center justify-center">
                  <FastForward className="w-6 h-6 text-emphz-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">EMPHZ MODULAR</h3>
                  <p className="text-emphz-teal font-mono text-xs uppercase">Precision Factory Built</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-white font-mono">{Math.floor((progress / 100) * 6)}</span>
                <span className="text-neutral-500 font-mono ml-2 uppercase text-xs">Days Elapsed</span>
              </div>
            </div>

            <div className="h-4 bg-white/5 border border-white/10 relative overflow-hidden">
              <div 
                className="h-full bg-emphz-teal transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-sm"></div>
              </div>
              
              {milestones.map((m, i) => (
                <div 
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-white/20"
                  style={{ left: `${(m.day / 6) * 100}%` }}
                >
                  <div className={`absolute -bottom-10 left-1/2 -tranneutral-x-1/2 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest transition-opacity duration-500 ${progress >= (m.day / 6) * 100 ? 'text-emphz-teal opacity-100' : 'text-neutral-600 opacity-40'}`}>
                    {m.label} <br/> <span className="text-white">Day {m.day}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Timeline */}
          <div className="relative opacity-60 grayscale">
            <div className="flex justify-between items-end mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-neutral-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-300 uppercase tracking-wider">TRADITIONAL CIVIL</h3>
                  <p className="text-neutral-500 font-mono text-xs uppercase">On-Site Fabrication</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-neutral-500 font-mono">{Math.floor((progress / 100) * 45)}</span>
                <span className="text-neutral-500 font-mono ml-2 uppercase text-xs">Days Elapsed</span>
              </div>
            </div>

            <div className="h-4 bg-white/5 border border-white/10 relative">
              <div 
                className="h-full bg-neutral-600 transition-all duration-300 ease-out"
                style={{ width: `${(progress / 7.5)}%` }} // 45 days vs 6 days (7.5x slower)
              ></div>
              
              {milestones.map((m, i) => (
                <div 
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-white/10"
                  style={{ left: `${(m.traditionalDay / 45) * 100}%` }}
                >
                  <div className="absolute -bottom-10 left-1/2 -tranneutral-x-1/2 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                    {m.label} <br/> Day {m.traditionalDay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-emphz-darker p-8 border border-white/10 hover:border-emphz-teal/30 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-emphz-teal mb-4" />
              <h4 className="text-white font-bold mb-2">FACTORY QC</h4>
              <p className="text-sm text-neutral-400">All components manufactured under controlled environments, eliminating weather delays and site wastage.</p>
           </div>
           <div className="bg-emphz-darker p-8 border border-white/10 hover:border-emphz-teal/30 transition-colors">
              <FastForward className="w-8 h-8 text-emphz-teal mb-4" />
              <h4 className="text-white font-bold mb-2">PLUG & PLAY</h4>
              <p className="text-sm text-neutral-400">Integrated electrical and plumbing channels allow for "Last-Mile" commissioning within hours of delivery.</p>
           </div>
           <div className="bg-emphz-darker p-8 border border-white/10 hover:border-emphz-teal/30 transition-colors">
              <Calendar className="w-8 h-8 text-emphz-teal mb-4" />
              <h4 className="text-white font-bold mb-2">FIXED COST</h4>
              <p className="text-sm text-neutral-400">No time-overruns or material price fluctuations. Project costs are locked at the design stage.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ModularVelocity;