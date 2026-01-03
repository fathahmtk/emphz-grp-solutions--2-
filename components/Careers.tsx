
import React from 'react';
import { CAREERS_DATA, SITE_IMAGES } from '../data';
import { ArrowRight, Users, MapPin, ChevronRight } from 'lucide-react';

const Careers: React.FC = () => {
   return (
      <section id="careers" className="py-24 md:py-32 bg-white text-emphz-darker relative overflow-hidden border-t border-neutral-100">
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-stretch">

               {/* Left: Text & Brand Content */}
               <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-12">
                     <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">12 / HUMAN CAPITAL</span>
                     <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker tracking-tighter uppercase mb-8 leading-[0.9]">
                        Recruiting the <br /><span className="text-emphz-teal">Solutioners.</span>
                     </h2>
                     <p className="text-neutral-500 text-lg leading-relaxed mb-12 font-light">
                        We are a team of 150+ engineers, designers, and manufacturing specialists building the backbone of global infrastructure.
                        Join a culture of precision and sustainable innovation.
                     </p>

                     <div className="inline-flex items-center gap-4 px-8 py-4 bg-neutral-50 rounded-full border border-neutral-100 mb-12">
                        <div className="w-10 h-10 rounded-full bg-emphz-teal flex items-center justify-center text-white shadow-lg shadow-emphz-teal/20">
                           <Users className="w-5 h-5" />
                        </div>
                        <div>
                           <span className="text-xl font-bold text-emphz-darker block tracking-tight">12</span>
                           <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest font-bold">Active Technical Openings</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     {CAREERS_DATA.map((job, idx) => (
                        <div key={idx} className="group p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 hover:bg-white hover:border-emphz-teal hover:shadow-2xl transition-all duration-700 cursor-pointer flex items-center justify-between">
                           <div className="flex items-center gap-8">
                              <div className="text-[10px] font-mono text-neutral-300 uppercase font-bold group-hover:text-emphz-teal transition-colors">{job.id}</div>
                              <div>
                                 <h4 className="text-xl font-bold text-emphz-darker mb-1 tracking-tight group-hover:text-emphz-teal transition-colors uppercase">{job.role}</h4>
                                 <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-400 uppercase font-bold tracking-widest"><MapPin className="w-3 h-3" /> {job.location}</span>
                                    <span className="text-neutral-200 px-1">•</span>
                                    <span className="text-[9px] font-mono text-emphz-teal uppercase font-bold tracking-widest bg-emphz-teal/5 px-3 py-1 rounded-full">{job.type}</span>
                                 </div>
                              </div>
                           </div>
                           <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-300 group-hover:bg-emphz-teal group-hover:border-emphz-teal group-hover:text-white transition-all duration-500">
                              <ChevronRight className="w-5 h-5" />
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-12 flex items-center gap-10">
                     <a href="mailto:careers@emphz.in" className="bg-emphz-darker text-white px-10 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-emphz-teal transition-all flex items-center gap-3">
                        SEND CV TO HR <ArrowRight className="w-4 h-4" />
                     </a>
                     <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold max-w-[150px]">Priority response for CAD/Composite Exp.</p>
                  </div>
               </div>

               {/* Right: Visual Storytelling */}
               <div className="lg:w-1/2 relative min-h-[600px] flex items-center justify-end">
                  <div className="relative w-full aspect-[4/5] max-w-md rounded-[3.5rem] overflow-hidden border-[12px] border-neutral-50 shadow-2xl group">
                     <img
                        src={SITE_IMAGES.about}
                        alt="EMPHZ Talent"
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-emphz-darker/80 to-transparent"></div>

                     <div className="absolute bottom-12 left-12 right-12">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
                           <div className="flex items-center gap-4 mb-6">
                              <div className="w-2 h-2 rounded-full bg-emphz-teal"></div>
                              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase font-mono">Leadership Quote</span>
                           </div>
                           <p className="text-white text-2xl font-bold italic tracking-tight leading-tight mb-4">"We don't hire employees. We recruit problem solvers for national-scale challenges."</p>
                           <span className="text-white/60 text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">— Managing Director, EMPHZ</span>
                        </div>
                     </div>
                  </div>

                  {/* Decorative Circle Background */}
                  <div className="absolute -top-12 -right-12 w-64 h-64 bg-neutral-50 rounded-full -z-10"></div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Careers;
