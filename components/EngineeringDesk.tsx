import React, { useState } from 'react';
import { HelpCircle, FileCode, Calculator, Ruler, Send, CheckCircle2 } from 'lucide-react';

const EngineeringDesk: React.FC = () => {
  const [formType, setFormType] = useState<'CAD' | 'CALC' | 'CUSTOM'>('CAD');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="engineering-desk" className="py-24 bg-emphz-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">12 / Technical Support</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ENGINEERING DESK</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              Direct access to our design department for project-specific engineering assets. We provide verified technical documentation for consultant approvals.
            </p>

            <div className="space-y-6">
              {[
                { type: 'CAD', icon: <FileCode />, title: 'CAD Block Library', desc: 'Request .DWG or .STEP files for standard or custom enclosure models.' },
                { type: 'CALC', icon: <Calculator />, title: 'Structural Calculations', desc: 'Verified load-bearing and wind-stress reports for specific site conditions.' },
                { type: 'CUSTOM', icon: <Ruler />, title: 'Bespoke Design Study', desc: 'Feasibility analysis for complex modular geometries and OEM requirements.' }
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setFormType(item.type as any)}
                  className={`w-full flex items-start gap-6 p-6 border transition-all text-left ${
                    formType === item.type 
                    ? 'bg-emphz-teal/10 border-emphz-teal' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`p-3 rounded ${formType === item.type ? 'bg-emphz-teal text-white' : 'bg-white/5 text-neutral-500'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-emphz-darker border border-white/10 p-10 relative h-full">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emphz-teal/20 rounded-full flex items-center justify-center mb-6 border border-emphz-teal/50">
                    <CheckCircle2 className="w-10 h-10 text-emphz-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Request Transmitted</h3>
                  <p className="text-neutral-400 max-w-sm">
                    Technical Requisition #ENG-{Math.floor(Math.random() * 10000)} has been queued. An engineer will respond within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4 mb-8">
                    <span className="text-[10px] font-mono text-emphz-teal uppercase tracking-[0.2em]">Service_Ticket: New_{formType}_Request</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-neutral-600 uppercase mb-2">Project Reference</label>
                      <input type="text" required placeholder="PRJ-XXXX" className="w-full bg-emphz-dark border border-white/10 p-3 text-sm text-white focus:border-emphz-teal outline-none transition-colors font-mono" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-neutral-600 uppercase mb-2">Consultant Name</label>
                      <input type="text" required placeholder="Organization ID" className="w-full bg-emphz-dark border border-white/10 p-3 text-sm text-white focus:border-emphz-teal outline-none transition-colors font-mono" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-neutral-600 uppercase mb-2">Technical Specification</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder={formType === 'CAD' ? "Specify part numbers or required file format..." : "Detail site constraints or required compliance standards..."}
                      className="w-full bg-emphz-dark border border-white/10 p-3 text-sm text-white focus:border-emphz-teal outline-none transition-colors font-mono resize-none"
                    ></textarea>
                  </div>

                  <div className="p-4 bg-white/5 border border-dashed border-white/10 rounded-sm">
                    <p className="text-[10px] text-neutral-500 italic leading-relaxed">
                      All assets provided are EMPHZ Intellectual Property. Distribution is permitted only for project-specific planning and procurement cycles.
                    </p>
                  </div>

                  <button className="w-full bg-emphz-teal text-white py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-emphz-darker transition-all">
                    INITIATE DATA TRANSFER <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EngineeringDesk;