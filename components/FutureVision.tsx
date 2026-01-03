
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Box, Cpu, Globe, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const FutureVision: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 40;
            const yPos = (clientY / innerHeight - 0.5) * 40;

            const elements = containerRef.current.querySelectorAll('.parallax-element');
            elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                const speed = parseFloat(htmlEl.getAttribute('data-speed') || '1');
                htmlEl.style.transform = `translate3d(${xPos * speed}px, ${yPos * speed}px, 0)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-emphz-blue flex items-center justify-center overflow-hidden py-32">
            {/* Background Conceptual Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow-reverse opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full opacity-20"></div>

                {/* Floating Elements */}
                <div className="parallax-element absolute top-1/4 left-1/4 opacity-10" data-speed="2.5">
                    <Box size={120} strokeWidth={0.5} className="text-emphz-teal" />
                </div>
                <div className="parallax-element absolute bottom-1/4 right-1/4 opacity-10" data-speed="1.8">
                    <Cpu size={160} strokeWidth={0.5} className="text-emphz-silver" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <SectionHeader
                    number="16"
                    category="CONCEPTUAL PROTOCOL"
                    title="The Evolution of Resilience"
                    subtitle="Engineering at the polymer level to reorganize structural bonds for century-scale thresholds. Moving from static infrastructure to responsive ecosystems."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left">
                    {[
                        {
                            title: "Molecular Integrity",
                            desc: "Engineering at the polymer level to reorganize structural bonds for 100-year thresholds.",
                            icon: <Zap className="text-emphz-teal mb-6" size={32} />
                        },
                        {
                            title: "Digital Consciousness",
                            desc: "Assets that feel, respond, and report via embedded fiber-optic nervous systems.",
                            icon: <Globe className="text-emphz-teal mb-6" size={32} />
                        },
                        {
                            title: "Universal Proxy",
                            desc: "Interchangeable modular ecosystems replacing legacy concrete and metallic waste.",
                            icon: <Box className="text-emphz-teal mb-6" size={32} />
                        }
                    ].map((item, i) => (
                        <GlowCard key={i} className="parallax-element p-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all duration-700 group cursor-none h-full" data-speed={1 + i * 0.2}>
                            {item.icon}
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-light opacity-80 mb-8">{item.desc}</p>
                            <div className="flex items-center gap-2 text-emphz-teal font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                EXPLORE CONCEPT <ArrowRight size={12} />
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 45s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default FutureVision;
