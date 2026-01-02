
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, FileText, Zap } from 'lucide-react';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
  removeItem: (item: string) => void;
}

const QuoteDrawer: React.FC<QuoteDrawerProps> = ({ isOpen, onClose, items, removeItem }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[200] bg-emphz-darker/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[450px] z-[210] bg-emphz-darker border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 bg-emphz-dark border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emphz-teal/10 flex items-center justify-center text-emphz-teal border border-emphz-teal/20">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Project_Cart</h3>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{items.length} Specifications Selected</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-500 hover:text-white transition-all hover:rotate-90">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-grow overflow-y-auto p-8 space-y-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <FileText className="w-16 h-16 mb-6 text-slate-600" strokeWidth={1} />
              <p className="text-xs font-mono uppercase tracking-[0.3em]">REQUISITION_EMPTY</p>
              <p className="text-[10px] text-slate-500 mt-2 max-w-[200px]">Browse our ecosystems to add technical specs to your enquiry.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="group p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-emphz-teal/30 transition-all flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-emphz-teal/5 flex items-center justify-center text-emphz-teal group-hover:bg-emphz-teal group-hover:text-white transition-all">
                      <Zap className="w-4 h-4" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-tight">{item}</h4>
                      <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">VERIFIED_SPEC_2024</p>
                   </div>
                </div>
                <button 
                  onClick={() => removeItem(item)}
                  className="p-2 text-slate-600 hover:text-red-400 transition-colors"
                  aria-label="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-8 bg-emphz-dark border-t border-white/10">
            <div className="flex items-center gap-3 mb-8 p-4 bg-white/5 border border-white/5 rounded-xl">
               <ShieldCheck className="w-5 h-5 text-emerald-500" />
               <p className="text-[9px] font-mono text-slate-400 uppercase leading-relaxed">System-calculated shipping density optimized for flat-pack deployment.</p>
            </div>
            
            <a 
              href="#contact" 
              onClick={onClose}
              className="w-full bg-emphz-teal text-white py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl shadow-emphz-teal/20 hover:bg-white hover:text-emphz-darker transition-all flex items-center justify-center gap-3"
            >
              FINALIZE ENQUIRY <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default QuoteDrawer;
