
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emphz-blue text-neutral-400 py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 lg:col-span-1">
             <div className="mb-10 group cursor-pointer inline-block">
                <Logo className="h-7 w-auto" />
             </div>
             <p className="max-w-xs mb-8 text-xs leading-relaxed font-light opacity-60">
               Engineering Modular Infrastructure for the Next-Century. High-Integrity GRP Composite Solutions. Built for scale. Designed to last.
             </p>
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emphz-silver hover:text-emphz-blue transition-all cursor-pointer">
                   <span className="text-[10px] font-bold">IN</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emphz-silver hover:text-emphz-blue transition-all cursor-pointer">
                   <span className="text-[10px] font-bold">YT</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emphz-silver hover:text-emphz-blue transition-all cursor-pointer">
                   <span className="text-[10px] font-bold">LI</span>
                </div>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.4em]">Index</h4>
            <ul className="space-y-4 text-[11px] font-bold tracking-widest uppercase">
              <li><a href="#products" className="hover:text-emphz-silver transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-emphz-silver rounded-full"></span> Power Systems</a></li>
              <li><a href="#products" className="hover:text-emphz-silver transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-emphz-silver rounded-full"></span> Civil Enclosures</a></li>
              <li><a href="#products" className="hover:text-emphz-silver transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-emphz-silver rounded-full"></span> Custom Modules</a></li>
              <li><a href="#products" className="hover:text-emphz-silver transition-colors flex items-center gap-3"><span className="w-1 h-1 bg-emphz-silver rounded-full"></span> Hybrid Units</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.4em]">Connect</h4>
             <ul className="space-y-4 text-[11px] font-bold tracking-widest uppercase">
               <li><a href="#about" className="hover:text-emphz-silver transition-colors">Corporate Identity</a></li>
               <li><a href="#careers" className="hover:text-emphz-silver transition-colors">Talent Pipeline</a></li>
               <li><a href="#resources" className="hover:text-emphz-silver transition-colors">Legal_Ledger</a></li>
               <li><a href="#contact" className="hover:text-emphz-silver transition-colors">Global Headquarters</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-8 text-[11px] uppercase tracking-[0.4em]">Support</h4>
             <ul className="space-y-4 text-[11px] font-bold tracking-widest uppercase">
               <li><a href="mailto:info@emphz.in" className="hover:text-emphz-silver transition-colors">Technical Desk</a></li>
               <li><a href="tel:+919037874080" className="hover:text-emphz-silver transition-colors">+91 9037 874 080</a></li>
               <li><a href="#faq" className="hover:text-emphz-silver transition-colors">Advisory FAQ</a></li>
               <li><a href="#vetter" className="hover:text-emphz-silver transition-colors">Diagnostic Tools</a></li>
             </ul>
           </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
           <div className="flex gap-8 opacity-40 mb-6 md:mb-0">
             <span>© {new Date().getFullYear()} EMPHZ PVT LTD.</span>
             <span className="hidden md:block">ISO 9001:2024 Vetted</span>
             <span className="hidden md:block">Bespoke_Industrial_Ops</span>
           </div>
           <div className="flex items-center gap-4 text-emphz-silver">
             <div className="w-1.5 h-1.5 rounded-full bg-emphz-silver animate-pulse"></div>
             <span>System Status: Optimal</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
