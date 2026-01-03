import React, { useState } from 'react';
import { Thermometer, Droplets, Hammer, Settings, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

interface TechnicalVetterProps {
  addToQuote: (item: string) => void;
  quoteItems: string[];
}

const TechnicalVetter: React.FC<TechnicalVetterProps> = ({ addToQuote, quoteItems }) => {
  const [step, setStep] = useState(1);
  const [env, setEnv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const ENVS = [
    { id: 'marine', title: 'OFFSHORE / MARINE', icon: <Droplets className="w-6 h-6" />, stress: 'High Salinity' },
    { id: 'arid', title: 'DESERT / THERMAL', icon: <Thermometer className="w-6 h-6" />, stress: 'UV Exposure' },
    { id: 'infra', title: 'UTILITY / INFRA', icon: <Settings className="w-6 h-6" />, stress: 'Vandalism Risk' },
    { id: 'chem', title: 'PROCESS / CHEM', icon: <Hammer className="w-6 h-6" />, stress: 'Acidic PH' },
  ];

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStep(prev => prev + 1);
      setIsProcessing(false);
    }, 1500);
  };

  const configId = `VETTED_GRP_SPEC_${env.toUpperCase()}_2024`;

  return (
    <section id="vetter" className="py-24 md:py-32 bg-emphz-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

          <div className="lg:w-1/3 flex flex-col justify-center">
            <SectionHeader
              number="05"
              category="VETTING NODE"
              title="Composite Pre-Qual"
              subtitle="Standardize your GRP procurement. Run the technical diagnostic to receive a vetted composite bill for your specific site stressors."
            />

            <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/5 p-6 space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-neutral-500">GRP_Vetting_Progress</span>
                <span className="text-white">Step 0{step} / 03</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emphz-teal transition-all duration-700"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                <span className="text-neutral-500">Validation_Node</span>
                <span className="text-emerald-500">Active_Sync</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-emphz-darker rounded-[3rem] border border-white/10 h-full relative overflow-hidden flex flex-col shadow-2xl">
              <div className="absolute top-0 right-0 p-12 text-white/5 font-mono text-[18rem] font-bold pointer-events-none">0{step}</div>

              <div className="p-12 md:p-20 flex-grow flex flex-col justify-center relative z-10">
                {isProcessing ? (
                  <div className="flex flex-col items-center justify-center text-center py-20 animate-pulse">
                    <Activity className="w-16 h-16 text-emphz-teal mb-8" />
                    <h3 className="text-white font-bold text-2xl uppercase tracking-tighter">Analyzing GRP Stressors...</h3>
                    <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mt-4">Calibrating Resin Matrix Components</p>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {step === 1 && (
                      <>
                        <h3 className="text-white text-2xl font-bold mb-12 flex items-center gap-6 uppercase tracking-tight">
                          <span className="w-12 h-1 bg-emphz-teal rounded-full"></span>
                          Select Site Environment for GRP Deployment
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {ENVS.map(e => (
                            <GlowCard key={e.id} className="rounded-3xl h-full">
                              <button
                                onClick={() => setEnv(e.id)}
                                className={`w-full h-full flex items-center gap-8 p-10 rounded-3xl border text-left transition-all duration-500 ${env === e.id ? 'bg-emphz-teal border-emphz-teal shadow-2xl shadow-emphz-teal/20' : 'bg-white/5 border-white/5 hover:border-white/20'}`}
                              >
                                <div className={`${env === e.id ? 'text-white' : 'text-emphz-teal'} transition-colors`}>{e.icon}</div>
                                <div>
                                  <span className="block font-bold text-sm text-white tracking-widest uppercase mb-1">{e.title}</span>
                                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{e.stress} GRP Stressor</span>
                                </div>
                              </button>
                            </GlowCard>
                          ))}
                        </div>
                        <div className="mt-12">
                          <button
                            disabled={!env}
                            onClick={handleNext}
                            className="bg-white text-emphz-darker px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-emphz-teal hover:text-white transition-all disabled:opacity-20 flex items-center gap-4"
                          >
                            PROCEED TO ANALYSIS <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <h3 className="text-white text-2xl font-bold mb-12 flex items-center gap-6 uppercase tracking-tight">
                          <span className="w-12 h-1 bg-emphz-teal rounded-full"></span>
                          Composite Diagnostics
                        </h3>
                        <div className="space-y-8 max-w-xl">
                          <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                            <div className="flex items-center gap-4 mb-6">
                              <Activity className="w-5 h-5 text-emphz-teal" />
                              <span className="font-mono text-[10px] text-white uppercase tracking-widest">GRP_Laminate_Stability_Check</span>
                            </div>
                            <div className="space-y-4">
                              {['Dielectric Resistance Check', 'Thermal Expansion Quotient', 'Acid/Saline Defense Matrix'].map((l, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                  <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest">{l}</span>
                                  <span className="text-emerald-500 font-bold text-[11px]">GRP_VALIDATED</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-12 flex gap-4">
                          <button onClick={() => setStep(1)} className="px-10 py-5 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">Back</button>
                          <button
                            onClick={handleNext}
                            className="bg-emphz-teal text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-emphz-darker transition-all flex items-center gap-4 shadow-xl shadow-emphz-teal/20"
                          >
                            VIEW GRP SPECIFICATION <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <div className="h-full">
                        <div className="flex justify-between items-start mb-12">
                          <h3 className="text-white text-2xl font-bold flex items-center gap-6 uppercase tracking-tight">
                            <span className="w-12 h-1 bg-emphz-teal rounded-full"></span>
                            Vetted GRP Bill (BOM)
                          </h3>
                          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-2 flex items-center gap-3">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            <span className="text-emerald-500 font-mono text-[10px] uppercase font-bold tracking-widest">VETTED_FOR_{env.toUpperCase()}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                          <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
                            <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-3">Laminate Matrix</span>
                            <span className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-emphz-teal transition-colors">Vinyl Ester GRP Base</span>
                          </div>
                          <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
                            <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-3">Seal Integrity</span>
                            <span className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-emphz-teal transition-colors">IP67 GRP Gasketing</span>
                          </div>
                          <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group md:col-span-2">
                            <span className="block text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-3">Hardware Spec</span>
                            <span className="text-white font-bold text-lg uppercase tracking-tight group-hover:text-emphz-teal transition-colors">SS316 Electropolished (GRP Vetted)</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                          <button onClick={() => setStep(1)} className="px-12 py-5 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">Restart Diagnostic</button>
                          <button
                            onClick={() => { addToQuote(configId); setStep(1); }}
                            className={`flex-grow py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl ${quoteItems.includes(configId)
                              ? 'bg-emerald-600 text-white'
                              : 'bg-emphz-teal text-white hover:bg-white hover:text-emphz-darker shadow-emphz-teal/20'
                              }`}
                          >
                            {quoteItems.includes(configId) ? 'REQUISITION SYNCED' : 'ADD VETTED GRP SPEC TO ENQUIRY'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalVetter;
