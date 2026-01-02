
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
            <div className="w-full max-w-md">
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
        </div>
    );
};

export default Preloader;
