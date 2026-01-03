
import React, { useState } from 'react';
import { Settings, Ruler, Shield, Box, CheckCircle2, PlusCircle } from 'lucide-react';

interface ConfiguratorProps {
  addToQuote: (item: string) => void;
  quoteItems: string[];
}

const Configurator: React.FC<ConfiguratorProps> = ({ addToQuote, quoteItems }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    type: 'Single Door Enclosure',
    size: '600x400x200mm',
    rating: 'IP66',
    color: 'RAL 7035 (Light Grey)',
    accessories: [] as string[]
  });

  const steps = [
    { id: 1, name: 'System Type', icon: <Box className="w-4 h-4" /> },
    { id: 2, name: 'Dimensions', icon: <Ruler className="w-4 h-4" /> },
    { id: 3, name: 'Protection', icon: <Shield className="w-4 h-4" /> },
    { id: 4, name: 'Finish', icon: <Settings className="w-4 h-4" /> }
  ];

  const configId = `CUSTOM_${config.type}_${config.size}_${config.rating}`.toUpperCase().replace(/\s+/g, '_');
  const isAdded = quoteItems.includes(configId);

  const handleAdd = () => {
    addToQuote(configId);
  };

  return (
    <section id="configurator" className="py-24 bg-emphz-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">06 / Engineering</span>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">SPECIFICATION BUILDER</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Generate a technical requisition for custom GRP enclosures. Our engineering team will review your parameters for structural compliance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Configurator Controls */}
          <div className="lg:w-2/3 bg-emphz-darker border border-white/10 p-8 md:p-12 rounded-[2rem]">
            <div className="flex justify-between mb-12 border-b border-white/5 pb-6">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={`flex items-center gap-2 transition-all ${step === s.id ? 'text-emphz-teal' : 'text-neutral-600 hover:text-neutral-400'}`}
                >
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-mono ${step === s.id ? 'border-emphz-teal bg-emphz-teal/10' : 'border-neutral-800'}`}>
                    {s.id}
                  </span>
                  <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest">{s.name}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-2 duration-500">
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Single Door Enclosure', 'Double Door Enclosure', 'Meter Box', 'Instrumentation Cabin'].map((t) => (
                    <button
                      key={t}
                      onClick={() => { setConfig({ ...config, type: t }); setStep(2); }}
                      className={`p-6 border text-left transition-all rounded-xl ${config.type === t ? 'border-emphz-teal bg-emphz-teal/5' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <h4 className="text-white font-bold mb-1">{t}</h4>
                      <p className="text-neutral-500 text-[10px] font-mono uppercase">Standard Industrial Series</p>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['400x300x200mm', '600x400x250mm', '800x600x300mm', '1000x800x400mm', 'Custom Dimensions'].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setConfig({ ...config, size: s }); setStep(3); }}
                      className={`p-6 border text-center transition-all rounded-xl ${config.size === s ? 'border-emphz-teal bg-emphz-teal/5' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <span className="text-white font-mono text-xs">{s}</span>
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['IP65 (Dust/Jet Protection)', 'IP66 (Powerful Jet Protection)', 'IP67 (Immersion Protection)'].map((r) => (
                    <button
                      key={r}
                      onClick={() => { setConfig({ ...config, rating: r.split(' ')[0] }); setStep(4); }}
                      className={`p-6 border text-left transition-all rounded-xl ${config.rating === r.split(' ')[0] ? 'border-emphz-teal bg-emphz-teal/5' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <h4 className="text-white font-bold mb-1">{r.split(' ')[0]}</h4>
                      <p className="text-neutral-500 text-[10px] font-mono uppercase">{r.split(' (')[1].replace(')', '')}</p>
                    </button>
                  ))}
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['RAL 7035', 'RAL 7032', 'RAL 9010', 'Custom RAL'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setConfig({ ...config, color: c })}
                        className={`p-4 border text-center transition-all rounded-xl ${config.color.includes(c) ? 'border-emphz-teal bg-emphz-teal/5' : 'border-white/5 hover:border-white/20'}`}
                      >
                        <div className={`w-full h-8 mb-2 rounded-sm ${c === 'RAL 7035' ? 'bg-neutral-300' : c === 'RAL 7032' ? 'bg-neutral-400' : 'bg-white'}`}></div>
                        <span className="text-white font-mono text-[10px]">{c}</span>
                      </button>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-white/5">
                    <button
                      onClick={handleAdd}
                      className={`w-full py-5 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 shadow-lg rounded-full ${isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emphz-teal text-white hover:brightness-110'
                        }`}
                    >
                      {isAdded ? (
                        <><CheckCircle2 className="w-5 h-5" /> REQUISITION_SYNCED</>
                      ) : (
                        <><PlusCircle className="w-5 h-5" /> ADD_CUSTOM_SPEC_TO_ENQUIRY</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Configuration Summary - "The Blueprint" */}
          <div className="lg:w-1/3">
            <div className="bg-black border border-white/10 p-8 h-full relative overflow-hidden flex flex-col rounded-[2rem]">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(#189A9E 1px, transparent 1px), linear-gradient(90deg, #189A9E 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>

              <div className="relative z-10">
                <h4 className="font-mono text-emphz-teal text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emphz-teal rounded-full animate-pulse"></div>
                  Live Spec Sheet
                </h4>

                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">System Architecture</span>
                    <span className="text-white font-bold tracking-wide">{config.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Dimensions</span>
                      <span className="text-white font-bold tracking-wide">{config.size}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Protection</span>
                      <span className="text-white font-bold tracking-wide">{config.rating}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Surface Finish</span>
                    <span className="text-white font-bold tracking-wide">{config.color}</span>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 text-emerald-500 mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Structural Integrity Validated</span>
                  </div>
                  <p className="text-[10px] text-neutral-500 font-mono leading-relaxed uppercase">
                    This configuration complies with IEC 62208 standards for empty enclosures in electrical installations.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8 flex justify-center opacity-20">
                <Box className="w-32 h-32 text-emphz-teal" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
