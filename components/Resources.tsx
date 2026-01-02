import React from 'react';
import { DOWNLOADS } from '../data';
import { Download, FileText, Award, ShieldCheck } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-emphz-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Downloads Section */}
          <div>
            <div className="mb-10">
              <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">09 / Library</span>
              <h2 className="text-3xl font-bold text-white mb-2">DOWNLOAD CENTER</h2>
              <p className="text-neutral-400 text-sm">Access technical specifications, installation guides, and product catalogues.</p>
            </div>

            <div className="space-y-4">
              {DOWNLOADS.map((file, idx) => (
                <div key={idx} className="group flex items-center justify-between p-6 bg-emphz-darker border border-white/5 hover:border-emphz-teal/30 hover:bg-white/[0.02] transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded text-neutral-400 group-hover:text-emphz-teal transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-emphz-teal transition-colors">{file.title}</h4>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase bg-white/5 px-1 rounded">{file.id}</span>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase">{file.type} • {file.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-600 group-hover:text-white transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="text-emphz-teal text-xs font-mono uppercase tracking-widest hover:text-white transition-colors">
                View All Documents →
              </button>
            </div>
          </div>

          {/* Certifications / Accreditation */}
          <div className="bg-gradient-to-br from-emphz-darker to-transparent border border-white/5 p-10 relative overflow-hidden">
             {/* Decorative BG Icon */}
             <div className="absolute -bottom-10 -right-10 text-white/[0.02]">
                <Award className="w-64 h-64" />
             </div>

             <div className="relative z-10">
                <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">Compliance</span>
                <h3 className="text-2xl font-bold text-white mb-8">GLOBAL STANDARDS</h3>
                
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-4 border border-white/10 bg-black/20 text-center">
                      <span className="block text-3xl font-bold text-white mb-1">ISO</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">9001:2015 Certified</span>
                   </div>
                   <div className="p-4 border border-white/10 bg-black/20 text-center">
                      <span className="block text-3xl font-bold text-white mb-1">IP</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">65/67 Rated</span>
                   </div>
                   <div className="p-4 border border-white/10 bg-black/20 text-center">
                      <span className="block text-3xl font-bold text-white mb-1">UL</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">Compliant Materials</span>
                   </div>
                   <div className="p-4 border border-white/10 bg-black/20 text-center">
                      <span className="block text-3xl font-bold text-white mb-1">CE</span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase">Marked Components</span>
                   </div>
                </div>

                <div className="mt-10 p-4 bg-emphz-teal/10 border border-emphz-teal/20 flex items-start gap-4">
                   <ShieldCheck className="w-6 h-6 text-emphz-teal flex-shrink-0" />
                   <p className="text-xs text-neutral-300 leading-relaxed">
                     Our manufacturing facility is audited annually to ensure strict adherence to international quality management and safety protocols.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resources;