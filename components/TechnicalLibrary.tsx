
import React, { useState } from 'react';
import { Search, FileText, Download, ShieldCheck, Filter, FileCode, CheckCircle2 } from 'lucide-react';

const DOCUMENTS = [
  { id: 'TDS-001', title: 'Single Door Enclosure Technical Data Sheet', type: 'PDS', size: '2.4 MB', category: 'Electrical' },
  { id: 'SDS-GRP', title: 'GRP Composite Material Safety Data Sheet', type: 'SDS', size: '1.1 MB', category: 'Material' },
  { id: 'CAD-SDE', title: '2D Layout - Standard Double Door Cabinet', type: 'CAD', size: '5.8 MB', category: 'Design' },
  { id: 'CERT-IP67', title: 'Ingress Protection Certificate (IP67)', type: 'Cert', size: '0.8 MB', category: 'Compliance' },
  { id: 'TDS-005', title: 'GRP Kiosk Thermal Conductivity Report', type: 'PDS', size: '3.2 MB', category: 'Infra' },
  { id: 'SPEC-HW', title: 'Stainless Steel Hardware Specifications (SS316)', type: 'Spec', size: '1.5 MB', category: 'Hardware' },
];

const TechnicalLibrary: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Electrical', 'Material', 'Design', 'Compliance', 'Hardware'];
  const filtered = DOCUMENTS.filter(doc => {
    const matchesQuery = doc.title.toLowerCase().includes(query.toLowerCase()) || doc.id.toLowerCase().includes(query.toLowerCase());
    const matchesTab = activeTab === 'All' || doc.category === activeTab;
    return matchesQuery && matchesTab;
  });

  return (
    <section id="library" className="py-24 md:py-32 bg-slate-50 text-emphz-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
           <div className="max-w-2xl">
              <span className="font-mono text-emphz-teal text-xs font-bold tracking-[0.5em] uppercase mb-4 block">10 / ENGINEERING VAULT</span>
              <h2 className="text-4xl md:text-6xl font-bold text-emphz-darker mb-8 tracking-tighter uppercase leading-[0.9]">
                Technical <br/><span className="text-emphz-teal">Resources.</span>
              </h2>
              <p className="text-slate-500 font-light text-lg">
                Access the global repository of engineering documents, testing certificates, and standard design drawings.
              </p>
           </div>
           
           <div className="relative w-full lg:w-[450px]">
              <div className="bg-white p-2 rounded-full shadow-2xl border border-slate-100 flex items-center">
                 <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                    <Search className="w-5 h-5" />
                 </div>
                 <input 
                   type="text" 
                   placeholder="SEARCH BY REF_ID OR TITLE..."
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   className="flex-grow bg-transparent px-6 py-4 text-[10px] font-mono font-bold text-emphz-darker placeholder:text-slate-300 focus:outline-none uppercase tracking-widest"
                 />
              </div>
           </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
           {categories.map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-10 py-4 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-500 border ${
                 activeTab === tab 
                 ? 'bg-emphz-teal text-white border-emphz-teal shadow-xl shadow-emphz-teal/20 scale-105' 
                 : 'bg-white text-slate-400 border-slate-200 hover:border-emphz-teal hover:text-emphz-teal'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filtered.map((doc) => (
             <div key={doc.id} className="group bg-white p-10 rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.05)] hover:-translate-y-3 transition-all duration-700 border border-slate-50 flex flex-col h-[380px]">
                <div className="flex justify-between items-start mb-10">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-emphz-teal border border-slate-100 group-hover:bg-emphz-teal group-hover:text-white transition-all duration-500">
                      {doc.type === 'CAD' ? <FileCode className="w-7 h-7" /> : <FileText className="w-7 h-7" />}
                   </div>
                   <div className="text-right">
                      <span className="block text-[9px] font-mono text-slate-300 uppercase tracking-widest font-bold">TYPE_REF</span>
                      <span className="text-[10px] font-mono text-emphz-teal uppercase font-bold tracking-widest">{doc.type} // {doc.size}</span>
                   </div>
                </div>
                
                <div className="flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Ref: {doc.id}</span>
                   </div>
                   <h4 className="text-2xl font-bold text-emphz-darker leading-tight group-hover:text-emphz-teal transition-colors uppercase tracking-tight mb-4">
                     {doc.title}
                   </h4>
                   <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] font-bold">System Category: {doc.category}</p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Vetted Spec</span>
                   </div>
                   <button className="flex items-center gap-3 text-[10px] font-bold text-emphz-darker hover:text-emphz-teal transition-colors tracking-[0.3em] uppercase group/btn">
                      DOWNLOAD <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                   </button>
                </div>
             </div>
           ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
             <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">No matching engineering assets found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnicalLibrary;
