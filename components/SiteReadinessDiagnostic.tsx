
import React, { useState } from 'react';
import { Navigation, Wind, Thermometer, Droplets, CheckCircle2, ChevronRight, ArrowRight, ShieldAlert } from 'lucide-react';

const SiteReadinessDiagnostic: React.FC = () => {
  const [params, setParams] = useState({
    distanceToCoast: 5, // km
    peakWind: 120, // km/h
    avgHumidity: 70, // %
    chemicalExposure: 'low'
  });

  const calculateScore = () => {
    let score = 100;
    if (params.distanceToCoast < 2) score -= 40;
    if (params.peakWind > 150) score -= 20;
    if (params.avgHumidity > 80) score -= 15;
    if (params.chemicalExposure === 'high') score -= 30;
    return Math.max(10, score);
  };

  const score = calculateScore();

  return (
    <section id="site-diagnostic" className="py-24 md:py-32 bg-white text-emphz-blue relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          
          <div className="lg:w-1/2">
             <span className="font-mono text-emphz-blue text-xs font-bold tracking-[0.5em] uppercase mb-4 block">21 / FIELD ANALYSIS</span>
             <h2 className="text-4xl md:text-7xl font-bold text-emphz-blue mb-8 tracking-tighter uppercase leading-[0.9]">
               Site <br/><span className="text-emphz-silver">Integrity.</span>
             </h2>
             <p className="text-neutral-500 text-lg leading-relaxed mb-12 font-light">
               Is your project site categorized as an "aggressive environment"? Input site parameters to receive an immediate GRP suitability audit and laminate grade recommendation.
             </p>

             <div className="space-y-10">
                <div className="group">
                  <div className="flex justify-between mb-4 items-end">
                    <div className="flex items-center gap-3">
                       <Navigation className="w-5 h-5 text-emphz-blue" />
                       <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Proximity to Coast</label>
                    </div>
                    <span className="text-xl font-bold">{params.distanceToCoast} km</span>
                  </div>
                  <input 
                    type="range" min="0" max="50" value={params.distanceToCoast} 
                    onChange={(e) => setParams({...params, distanceToCoast: parseInt(e.target.value)})}
                    className="w-full h-1.5 bg-neutral-100 appearance-none cursor-pointer accent-emphz-silver rounded-full"
                  />
                </div>

                <div className="group">
                  <div className="flex justify-between mb-4 items-end">
                    <div className="flex items-center gap-3">
                       <Wind className="w-5 h-5 text-emphz-blue" />
                       <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Peak Wind Velocity</label>
                    </div>
                    <span className="text-xl font-bold">{params.peakWind} km/h</span>
                  </div>
                  <input 
                    type="range" min="60" max="250" value={params.peakWind} 
                    onChange={(e) => setParams({...params, peakWind: parseInt(e.target.value)})}
                    className="w-full h-1.5 bg-neutral-100 appearance-none cursor-pointer accent-emphz-silver rounded-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold block">Chemical Exposure</label>
                      <select 
                        value={params.chemicalExposure}
                        onChange={(e) => setParams({...params, chemicalExposure: e.target.value})}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest outline-none focus:border-emphz-blue transition-all"
                      >
                         <option value="low">Low (Standard)</option>
                         <option value="med">Medium (Industrial)</option>
                         <option value="high">High (Process Plant)</option>
                      </select>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold block">Peak Temperature</label>
                      <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4">
                         <Thermometer className="w-5 h-5 text-emphz-blue" />
                         <span className="text-xs font-bold uppercase tracking-widest">45°C Nominal</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2">
             <div className="bg-emphz-blue rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
                
                <div className="relative z-10 text-center mb-16">
                   <span className="text-emphz-silver font-mono text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Steel Survival Probability</span>
                   <div className="inline-flex items-baseline gap-4">
                      <h3 className={`text-8xl md:text-9xl font-bold tracking-tighter leading-none transition-colors duration-700 ${score < 50 ? 'text-red-500' : 'text-white'}`}>
                        {score}
                      </h3>
                      <span className="text-emphz-silver text-4xl font-bold">%</span>
                   </div>
                   <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest mt-6">Relative Integrity over 15-Year Cycle</p>
                </div>

                <div className="relative z-10 space-y-6">
                   <div className={`p-8 rounded-3xl border transition-all duration-700 ${score < 50 ? 'bg-red-500/5 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
                      <div className="flex items-center gap-4 mb-4">
                         {score < 50 ? <ShieldAlert className="w-6 h-6 text-red-500" /> : <CheckCircle2 className="w-6 h-6 text-emphz-silver" />}
                         <h5 className="text-white font-bold text-lg uppercase tracking-tight">Recommendation</h5>
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                         {score < 50 
                           ? "Steel infrastructure will fail prematurely in these conditions. High-Grade Vinyl Ester GRP is mandatory for structural longevity." 
                           : "Moderate environment. Standard Isophthalic GRP systems will provide zero-maintenance service for 50+ years."}
                      </p>
                      <button className="flex items-center gap-3 text-[9px] font-bold text-emphz-silver uppercase tracking-[0.3em] hover:text-white transition-colors group">
                        GET FULL SPECIFICATION <ArrowRight className="w-4 h-4 group-hover:tranneutral-x-2 transition-transform" />
                      </button>
                   </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-white/5">
                   <div className="text-center">
                      <span className="block text-white font-bold text-lg tracking-tight">CLASS_01</span>
                      <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Resin Category</span>
                   </div>
                   <div className="text-center">
                      <span className="block text-white font-bold text-lg tracking-tight">VETTED</span>
                      <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Procurement Status</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SiteReadinessDiagnostic;
