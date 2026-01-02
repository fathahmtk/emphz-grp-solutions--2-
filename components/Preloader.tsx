
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [bootLog, setBootLog] = useState<string[]>([]);

    const logs = [
        "INITIALIZING CORE SYSTEMS...",
        "LOADING MATERIAL DATABASE: GRP_PROFILES_V2",
        "ESTABLISHING SECURE PROTOCOLS...",
        "VETTING STRUCTURAL INTEGRITY...",
        "SYSTEMS NOMINAL. ACCESS GRANTED."
    ];

    useEffect(() => {
        let currentLog = 0;
        const logInterval = setInterval(() => {
            if (currentLog < logs.length) {
                setBootLog(prev => [...prev, logs[currentLog]]);
                currentLog++;
            }
        }, 400);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => {
            clearInterval(logInterval);
            clearInterval(progressInterval);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[1000] bg-emphz-darker flex flex-col items-center justify-center p-6 transition-opacity duration-1000">
            {/* Conceptual Pattern Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="hexagons" width="10" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(30)">
                        <path d="M5 0 L10 2.88 L10 8.66 L5 11.54 L0 8.66 L0 2.88 Z" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-emphz-teal" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#hexagons)" className="animate-pulse" />
                </svg>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="flex justify-center mb-16">
                    {/* Conceptual Material Molecule */}
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-2 border-emphz-teal/20 rounded-full animate-ping"></div>
                        <div className="absolute inset-2 border border-emphz-teal/40 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-emphz-teal rotate-45 animate-pulse shadow-[0_0_30px_rgba(13,148,136,0.5)]"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end mb-4">
                    <div>
                        <span className="text-emphz-teal font-mono text-[10px] uppercase tracking-[0.4em] block mb-1">EMPHZ SYSTEM_BOOT</span>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Composite_OS v4.1.2</span>
                    </div>
                    <span className="text-emphz-teal font-mono text-xl">{progress}%</span>
                </div>

                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8 border border-white/5">
                    <div
                        className="h-full bg-emphz-teal transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="space-y-2 h-20">
                    {bootLog.map((log, i) => (
                        <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-500">
                            <span className="text-emphz-teal font-mono text-[8px] opacity-40">[{Date.now().toString().slice(-4)}]</span>
                            <span className="text-neutral-400 font-mono text-[8px] uppercase tracking-widest">{log}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <p className="text-[8px] text-neutral-600 font-mono uppercase tracking-[0.5em] animate-pulse">
                    High Performance Modular Infrastructure
                </p>
            </div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
