
import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Thermometer, Zap, Terminal, RefreshCw, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const DigitalTwin: React.FC = () => {
  const [metrics, setMetrics] = useState({
    dielectric: 17.8,
    thermal: 32,
    stress: 0.02,
    integrity: 99.98
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        thermal: 31 + Math.random() * 2,
        stress: 0.01 + Math.random() * 0.03,
        dielectric: 17.8 + (Math.random() - 0.5) * 0.2
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-emphz-dark border-t border-white/5 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="scanline opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2">
            <SectionHeader
              number="09"
              category="ASSET TRACKING"
              title="GRP Digital Twin Simulation"
              subtitle="EMPHZ modules are designed for direct IoT-integration, providing embedded multi-layer sensing for 24/7 structural performance monitoring."
            />

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Dielectric Stability', value: `${metrics.dielectric.toFixed(1)} kV/mm`, icon: <Zap className="w-5 h-5 text-emphz-teal" /> },
                { label: 'Thermal Delta', value: `${metrics.thermal.toFixed(1)}°C`, icon: <Thermometer className="w-5 h-5 text-emphz-teal" /> },
                { label: 'Structural Load', value: `${metrics.stress.toFixed(3)}%`, icon: <Activity className="w-5 h-5 text-emphz-teal" /> },
                { label: 'System Health', value: `${metrics.integrity}%`, icon: <ShieldCheck className="w-5 h-5 text-emphz-teal" /> }
              ].map((item, i) => (
                <GlowCard key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500">
                  <div className="mb-6">{item.icon}</div>
                  <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-2">{item.label}</span>
                  <span className="text-2xl font-bold text-white tracking-tighter">{item.value}</span>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square max-w-lg ml-auto bg-black border border-white/10 rounded-[3rem] overflow-hidden group shadow-2xl">
              {/* 3D Wireframe Mockup using CSS/SVG */}
              <div className="absolute inset-0 flex items-center justify-center p-20">
                <div className="relative w-full h-full border border-emphz-teal/20 perspective-[1000px]">
                  <div className="absolute inset-0 bg-emphz-teal/5 flex items-center justify-center overflow-hidden">
                    <Layers className="w-64 h-64 text-emphz-teal opacity-5 animate-spin-slow" />
                  </div>

                  {/* Animated HUD Elements */}
                  <div className="absolute top-10 left-10 p-6 border-l-2 border-t-2 border-emphz-teal/40">
                    <span className="block text-white font-mono text-[8px] uppercase tracking-widest">LAYER_01: GEL_COAT</span>
                    <span className="block text-emphz-teal font-mono text-[8px] uppercase tracking-widest">STATUS: NOMINAL</span>
                  </div>
                  <div className="absolute bottom-10 right-10 p-6 border-r-2 border-b-2 border-emphz-teal/40 text-right">
                    <span className="block text-white font-mono text-[8px] uppercase tracking-widest">LAYER_03: STRUCT_MAT</span>
                    <span className="block text-emphz-teal font-mono text-[8px] uppercase tracking-widest">STRESS: 0.002%</span>
                  </div>

                  {/* Moving Scan Bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-emphz-teal/20 animate-scan"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 p-6 bg-emphz-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Terminal className="w-4 h-4 text-emphz-teal" />
                  <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">LAMINATE_AUTO_SCAN_v4.2</span>
                </div>
              </div>

              <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emphz-teal hover:text-white transition-all">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 10%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 90%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DigitalTwin;
