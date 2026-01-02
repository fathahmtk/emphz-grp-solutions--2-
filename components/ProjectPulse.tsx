
import React, { useEffect, useState } from 'react';
import { Activity, Radio, Box, Terminal, MapPin, CheckCircle2 } from 'lucide-react';

const ProjectPulse: React.FC = () => {
  const [data, setData] = useState({
    throughput: 42,
    activeSites: 18,
    qcPassRate: 99.8,
    materialsProcessed: 1240
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        throughput: Math.max(38, Math.min(48, prev.throughput + (Math.random() > 0.5 ? 1 : -1))),
        materialsProcessed: prev.materialsProcessed + Math.floor(Math.random() * 3)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="group bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:shadow-2xl transition-all duration-500">
             <div className="flex items-center gap-3 text-emphz-teal font-mono text-[9px] font-bold uppercase tracking-widest mb-10">
                <div className="w-2 h-2 rounded-full bg-emphz-teal animate-pulse"></div> LIVE_OUTPUT
             </div>
             <div className="mb-10">
                <span className="text-7xl font-bold text-emphz-darker tracking-tighter leading-none">{data.throughput}</span>
                <span className="block text-[10px] font-mono text-neutral-400 mt-4 uppercase tracking-widest">Units / Shift</span>
             </div>
             <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-emphz-teal transition-all duration-1000" style={{ width: '75%' }}></div>
             </div>
          </div>

          <div className="group bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:shadow-2xl transition-all duration-500">
             <div className="flex items-center gap-3 text-neutral-400 font-mono text-[9px] font-bold uppercase tracking-widest mb-10">
                <MapPin className="w-3 h-3" /> ACTIVE_SITES
             </div>
             <div className="mb-10">
                <span className="text-7xl font-bold text-emphz-darker tracking-tighter leading-none">{data.activeSites}</span>
                <span className="block text-[10px] font-mono text-neutral-400 mt-4 uppercase tracking-widest">Global Deployments</span>
             </div>
             <div className="flex gap-1.5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-emphz-teal' : 'bg-neutral-200'}`}></div>
                ))}
             </div>
          </div>

          <div className="group bg-emphz-teal p-10 rounded-[2.5rem] shadow-xl shadow-emphz-teal/20 transition-all duration-500">
             <div className="flex items-center gap-3 text-white/60 font-mono text-[9px] font-bold uppercase tracking-widest mb-10">
                <CheckCircle2 className="w-3 h-3" /> QC_YIELD
             </div>
             <div className="mb-10 text-white">
                <span className="text-7xl font-bold tracking-tighter leading-none">{data.qcPassRate}<span className="text-3xl opacity-50">%</span></span>
                <span className="block text-[10px] font-mono opacity-60 mt-4 uppercase tracking-widest">Precision Audit</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
                <span className="text-[9px] font-mono text-white/80 uppercase tracking-widest">Nominal_Stability</span>
             </div>
          </div>

          <div className="group bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:shadow-2xl transition-all duration-500">
             <div className="flex items-center gap-3 text-neutral-400 font-mono text-[9px] font-bold uppercase tracking-widest mb-10">
                <Box className="w-3 h-3" /> LAMINATES
             </div>
             <div className="mb-10">
                <span className="text-6xl font-bold text-emphz-darker tracking-tighter leading-none">{data.materialsProcessed.toLocaleString()}</span>
                <span className="block text-[10px] font-mono text-neutral-400 mt-4 uppercase tracking-widest">Tons Processed / YTD</span>
             </div>
             <div className="flex items-center gap-2 font-mono text-[8px] text-neutral-300 uppercase">
                <Terminal className="w-3 h-3" /> LOG_0x44F_UPDATED
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectPulse;
