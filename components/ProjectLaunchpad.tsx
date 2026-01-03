
import React from 'react';
import { Send, Globe, ShieldCheck, Activity } from 'lucide-react';

const ProjectLaunchpad: React.FC = () => {
   return (
      <section className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="bg-emphz-darker rounded-[4rem] p-12 md:p-24 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group">
               {/* Cinematic background elements */}
               <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-emphz-teal/10 rounded-full blur-[100px] animate-pulse"></div>

               <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center justify-between">
                  <div className="lg:w-3/5">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-emphz-teal/20 flex items-center justify-center text-emphz-teal border border-emphz-teal/40">
                           <Globe className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="font-mono text-emphz-teal text-[10px] font-bold uppercase tracking-[0.4em]">DEPLOYMENT CONSOLE</span>
                     </div>

                     <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                        Initiate Your <br /><span className="text-emphz-teal">Infrastructure.</span>
                     </h2>

                     <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                        Ready to sync with India's most advanced composite ecosystem?
                        Our engineering desk is active. Deployment timelines are optimized.
                     </p>

                     <div className="flex flex-wrap gap-8 pt-10 border-t border-white/10">
                        <div className="flex items-center gap-3">
                           <ShieldCheck className="w-5 h-5 text-emphz-teal" />
                           <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Class-A Vendor Certified</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Activity className="w-5 h-5 text-emphz-teal" />
                           <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">24h Technical Response</span>
                        </div>
                     </div>
                  </div>

                  <div className="lg:w-2/5 w-full">
                     <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl transform group-hover:-translate-y-2 transition-all duration-700">
                        <h3 className="text-3xl font-bold text-emphz-darker mb-4 uppercase tracking-tight">Launch Ticket</h3>
                        <p className="text-neutral-500 mb-10 font-light">Enter your corporate email to receive our 2024 Technical Compendium.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                           <div className="relative">
                              <input
                                 type="email"
                                 placeholder="CORPORATE EMAIL..."
                                 className="w-full bg-neutral-50 border border-neutral-200 rounded-full px-8 py-5 text-sm font-bold text-emphz-darker focus:outline-none focus:border-emphz-teal transition-all uppercase tracking-widest placeholder:text-neutral-300"
                              />
                           </div>
                           <button className="w-full bg-emphz-teal text-white rounded-full py-5 font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl shadow-emphz-teal/30 hover:bg-emphz-darker transition-all flex items-center justify-center gap-3">
                              TRANSMIT REQUEST <Send className="w-4 h-4" />
                           </button>
                        </form>

                        <div className="mt-8 flex items-center justify-center gap-4">
                           <div className="flex -space-x-3">
                              {[...Array(4)].map((_, i) => (
                                 <img key={i} src={`https://i.pravatar.cc/100?u=${i + 10}`} className="w-10 h-10 rounded-full border-4 border-white" alt="Team" />
                              ))}
                           </div>
                           <p className="text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-widest">Project Desk Active</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProjectLaunchpad;
