import { PROJECTS } from '../data';
import { MapPin, Calendar, ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Projects: React.FC = () => {
   return (
      <section id="projects" className="py-24 bg-emphz-dark relative border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <SectionHeader
                  number="07"
                  category="Strategic Assets"
                  title="Global Deployment Ledger"
                  subtitle="Tracking the successful integration of high-precision GRP modules across critical infrastructure sectors."
               />
               <div className="flex gap-12 pb-16">
                  <div className="text-right">
                     <span className="block text-4xl font-bold text-white tracking-tighter">2,500+</span>
                     <span className="text-[10px] font-mono text-emphz-teal uppercase tracking-widest font-bold">Units Deployed</span>
                  </div>
                  <div className="text-right">
                     <span className="block text-4xl font-bold text-white tracking-tighter">12+</span>
                     <span className="text-[10px] font-mono text-emphz-teal uppercase tracking-widest font-bold">States Covered</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {PROJECTS.map((project, idx) => (
                  <div key={idx} className="group relative h-[450px] bg-emphz-darker border border-white/10 overflow-hidden cursor-pointer hover:border-emphz-teal/50 transition-all duration-300">
                     {/* Image Background */}
                     <div className="absolute inset-0">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emphz-darker/50 to-emphz-darker"></div>
                     </div>

                     {/* Content */}
                     <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Top Tags */}
                        <div className="flex justify-between items-start opacity-60 group-hover:opacity-100 transition-opacity">
                           <span className="text-[10px] font-mono border border-white/20 px-2 py-1 text-white uppercase bg-black/30 backdrop-blur-sm">
                              {project.id}
                           </span>
                           <span className="text-[10px] font-mono text-emphz-teal uppercase tracking-widest">
                              {project.type}
                           </span>
                        </div>

                        {/* Bottom Info */}
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emphz-teal transition-colors">
                              {project.title}
                           </h3>
                           <div className="flex items-center gap-2 text-neutral-400 text-xs mb-6">
                              <MapPin className="w-3 h-3" /> {project.location}
                           </div>

                           {/* Expanded Stats on Hover */}
                           <div className="h-0 group-hover:h-24 overflow-hidden transition-all duration-500 ease-out border-t border-white/0 group-hover:border-white/10">
                              <div className="pt-4 grid grid-cols-2 gap-4">
                                 <div>
                                    <span className="block text-[10px] text-neutral-500 uppercase">Volume</span>
                                    <span className="text-white font-mono text-sm">{project.stats.units}</span>
                                 </div>
                                 <div>
                                    <span className="block text-[10px] text-neutral-500 uppercase">System</span>
                                    <span className="text-white font-mono text-sm">{project.stats.product}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Corner Accent */}
                     <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-emphz-teal" />
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <a href="#contact" className="inline-flex items-center gap-2 text-emphz-teal hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                  View Global Supply Map <ArrowRight className="w-4 h-4" />
               </a>
            </div>

         </div>
      </section>
   );
};

export default Projects;