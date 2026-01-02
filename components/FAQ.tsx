
import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, HelpCircle, MessageCircle, FileText } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white text-emphz-darker border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
           <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">11 / TECHNICAL ADVISORY</span>
           <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker mb-8 tracking-tighter uppercase">Standard <span className="text-emphz-teal">Queries.</span></h2>
           <p className="text-neutral-500 font-light text-lg">Common inquiries regarding material specifications, site installation, and procurement cycles.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-[2rem] transition-all duration-700 border ${
                openIndex === idx 
                ? 'bg-neutral-50 border-emphz-teal/20 shadow-xl' 
                : 'bg-white border-neutral-100 hover:border-emphz-teal/30'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-8 md:p-10 flex justify-between items-center group"
              >
                <div className="flex gap-6 items-center">
                   <span className={`text-[10px] font-mono font-bold transition-colors ${openIndex === idx ? 'text-emphz-teal' : 'text-neutral-300'}`}>0{idx + 1}</span>
                   <span className={`font-bold text-lg md:text-xl pr-8 transition-colors tracking-tight uppercase ${
                     openIndex === idx ? 'text-emphz-darker' : 'text-neutral-500 group-hover:text-emphz-darker'
                   }`}>
                     {faq.q}
                   </span>
                </div>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-emphz-teal border-emphz-teal text-white rotate-180' : 'bg-transparent border-neutral-200 text-neutral-400'}`}>
                   {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-8 md:p-10 pt-0 text-neutral-500 text-lg leading-relaxed font-light border-t border-neutral-100 mt-2">
                   {faq.a}
                   <div className="mt-8 flex gap-4">
                      <button className="flex items-center gap-2 text-[9px] font-bold text-emphz-teal uppercase tracking-widest border border-emphz-teal/20 px-6 py-2 rounded-full hover:bg-emphz-teal hover:text-white transition-all">
                         <FileText className="w-3.5 h-3.5" /> READ CASE STUDY
                      </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3rem] bg-emphz-darker text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="absolute top-0 right-0 p-12 text-white/5 font-mono text-9xl font-bold pointer-events-none uppercase">SUPPORT</div>
           
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-3xl font-bold mb-4 tracking-tight uppercase leading-none">Still Have Questions?</h4>
              <p className="text-neutral-400 font-light max-w-sm">Connect with our Lead Structural Engineer for project-specific technical advice.</p>
           </div>
           
           <div className="relative z-10 flex gap-4">
              <a href="#contact" className="bg-emphz-teal text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-emphz-darker transition-all flex items-center gap-3">
                 CONTACT DESK <MessageCircle className="w-4 h-4" />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
