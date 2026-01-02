import React from 'react';
import { NEWS_ITEMS } from '../data';
import { ArrowRight, Calendar } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section className="py-24 bg-emphz-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-16">
           <div>
             <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">08 / Media</span>
             <h2 className="text-4xl font-bold text-white">LATEST UPDATES</h2>
           </div>
           <a href="#" className="hidden md:flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors">
             VIEW ARCHIVE <ArrowRight className="w-4 h-4" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="group bg-emphz-dark border border-white/5 hover:border-emphz-teal/30 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emphz-teal text-white text-[10px] font-mono uppercase px-2 py-1 tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span className="font-mono text-xs uppercase">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emphz-teal transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border-b border-transparent group-hover:border-emphz-teal pb-1 transition-all">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
           <a href="#" className="inline-block text-sm font-mono text-slate-400">VIEW ARCHIVE</a>
        </div>

      </div>
    </section>
  );
};

export default News;