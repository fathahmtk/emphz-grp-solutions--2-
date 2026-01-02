
import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Thermometer, Zap, Terminal, RefreshCw, Layers, Cpu, Radio, Hash } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const DigitalTwin: React.FC = () => {
  const [metrics, setMetrics] = useState({
    dielectric: 17.85,
    thermal: 32.4,
    stress: 0.021,
    integrity: 99.982,
    sync: 'Online'
  });

  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        thermal: 31.8 + Math.random() * 1.5,
        stress: 0.015 + Math.random() * 0.02,
        dielectric: 17.82 + (Math.random() - 0.5) * 0.15,
        integrity: 99.98 + (Math.random() * 0.01)
      }));
      setFrame(f => (f + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="digital-twin" className="py-24 md:py-32 bg-emphz-dark border-t border-white/5 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emphz-teal/30 to-transparent"></div>
      <div className="scanline opacity-[0.15]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

          <div className="lg:w-1/2 flex flex-col">
            <SectionHeader
              number="09"
              category="ASSET TRACKING"
              title="GRP Digital Twin Simulation"
              subtitle="EMPHZ modules feature embeddable multi-layer sensing matrix. Each structural component projects a high-fidelity digital twin for real-time stress, thermal, and dielectric telemetry."
            />

            <div className="grid grid-cols-2 gap-6 flex-grow">
              {[
                { label: 'Dielectric Stability', value: `${metrics.dielectric.toFixed(2)} kV/mm`, icon: <Zap className="w-5 h-5 text-emphz-teal" />, detail: 'V-0 Class Retention' },
                { label: 'Thermal Profile', value: `${metrics.thermal.toFixed(1)}°C`, icon: <Thermometer className="w-5 h-5 text-emphz-teal" />, detail: 'Operating Range: -40/120' },
                { label: 'Dynamic Stress', value: `${metrics.stress.toFixed(3)}%`, icon: <Activity className="w-5 h-5 text-emphz-teal" />, detail: 'Flexural Load Cycle' },
                { label: 'System Integrity', value: `${metrics.integrity.toFixed(3)}%`, icon: <ShieldCheck className="w-5 h-5 text-emphz-teal" />, detail: 'Monocoque Health' }
              ].map((item, i) => (
                <GlowCard key={i} className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all duration-500 group relative">
                  <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Hash className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emphz-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold mb-2 group-hover:text-emphz-teal transition-colors">{item.label}</span>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-white tracking-tighter shimmer-text">{item.value}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
                    <span className="w-1 h-1 rounded-full bg-emphz-teal"></span>
                    {item.detail}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[500px]">
            <div className="h-full w-full bg-emphz-darker border border-white/5 rounded-[4rem] overflow-hidden group shadow-2xl relative flex flex-col">
              <div className="absolute inset-0 bg-grid-small opacity-10 pointer-events-none"></div>

              {/* Terminal Header */}
              <div className="px-10 py-6 border-b border-white/10 bg-black/40 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.3em]">Live_Telemetry: Grid_v4_Node</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                </div>
              </div>

              {/* Visualization Core */}
              <div className="flex-grow relative flex items-center justify-center p-12 overflow-hidden">
                <div className="relative w-full aspect-square max-w-sm">
                  {/* Rotating Composite Layers Visual */}
                  <div className="absolute inset-0 border border-emphz-teal/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border border-emphz-teal/10 rounded-full animate-spin-reverse-slow"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 group-hover:scale-110 transition-transform duration-700">
                      <Layers className="absolute inset-0 w-full h-full text-emphz-teal opacity-5 animate-pulse" />
                      <div className="absolute inset-0 bg-emphz-teal/20 blur-3xl rounded-full opacity-20"></div>

                      {/* Crosshairs */}
                      <div className="absolute -top-10 -left-10 w-20 h-20 border-l border-t border-emphz-teal/40"></div>
                      <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r border-b border-emphz-teal/40"></div>

                      <Cpu className="absolute inset-0 m-auto w-16 h-16 text-emphz-teal" />
                    </div>
                  </div>

                  {/* Orbital Data Points */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-full h-[1px] bg-transparent"
                      style={{ transform: `translate(-50%, -50%) rotate(${deg + frame * 0.5}deg)` }}
                    >
                      <div className="absolute right-0 w-2 h-2 rounded-full bg-emphz-teal/40 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                    </div>
                  ))}
                </div>

                {/* Vertical Scanning Ray */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-emphz-teal/10 to-transparent animate-shuttle pointer-events-none"></div>
              </div>

              {/* Status Footer */}
              <div className="p-10 bg-black/40 border-t border-white/10 mt-auto">
                <div className="flex justify-between items-end">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Radio className="w-3 h-3 text-emphz-teal animate-pulse" />
                      <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">Network_Sync: 1024ms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Terminal className="w-3 h-3 text-neutral-600" />
                      <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">Buffer: 0x82_COMPOSITE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-mono text-neutral-700 uppercase mb-1">Health_Index</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">NOMINAL</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-emphz-teal text-white shadow-2xl shadow-emphz-teal/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-20 group">
              <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes shuttle {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-shuttle {
          animation: shuttle 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin 45s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default DigitalTwin;
