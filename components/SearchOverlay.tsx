import React, { useState, useEffect } from 'react';
import { X, Search, ArrowUpRight, FileText, Newspaper } from 'lucide-react';
import { PRODUCTS, DOWNLOADS, NEWS_ITEMS } from '../data';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{
    products: typeof PRODUCTS,
    downloads: typeof DOWNLOADS,
    news: typeof NEWS_ITEMS
  }>({ products: [], downloads: [], news: [] });

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Filter logic
  useEffect(() => {
    if (!query) {
      setResults({ products: [], downloads: [], news: [] });
      return;
    }
    const q = query.toLowerCase();
    setResults({
      products: PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      ),
      downloads: DOWNLOADS.filter(d => d.title.toLowerCase().includes(q)),
      news: NEWS_ITEMS.filter(n => n.title.toLowerCase().includes(q))
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-emphz-darker/95 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto px-4 pt-32 h-full flex flex-col">
        
        {/* Header / Input */}
        <div className="relative mb-12">
          <button 
            onClick={onClose}
            className="absolute -top-16 right-0 md:-right-16 text-slate-400 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative border-b-2 border-white/20 focus-within:border-emphz-teal transition-colors">
             <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500" />
             <input 
               autoFocus
               type="text" 
               placeholder="SEARCH CATALOGUE, SPECS, NEWS..." 
               className="w-full bg-transparent py-4 pl-12 pr-4 text-2xl md:text-3xl font-bold text-white placeholder:text-slate-600 focus:outline-none font-mono uppercase"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
             />
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-grow overflow-y-auto pb-20 custom-scrollbar">
           
           {!query && (
             <div className="text-center text-slate-600 mt-20">
                <p className="font-mono text-sm uppercase tracking-widest">Type to search the global database</p>
             </div>
           )}

           {/* Products Section */}
           {results.products.length > 0 && (
             <div className="mb-12">
               <h4 className="font-mono text-xs text-emphz-teal uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Systems & Products ({results.products.length})</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.products.map(p => (
                    <a key={p.id} href="#products" onClick={onClose} className="flex gap-4 p-4 bg-white/5 border border-white/5 hover:border-emphz-teal hover:bg-white/10 transition-all group">
                       <img src={p.image} alt={p.title} className="w-16 h-16 object-cover opacity-60 group-hover:opacity-100" />
                       <div>
                          <h5 className="text-white font-bold group-hover:text-emphz-teal transition-colors">{p.title}</h5>
                          <p className="text-xs text-slate-400 font-mono">{p.category} // {p.subtitle}</p>
                       </div>
                       <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-white" />
                    </a>
                  ))}
               </div>
             </div>
           )}

           {/* Downloads Section */}
           {results.downloads.length > 0 && (
             <div className="mb-12">
               <h4 className="font-mono text-xs text-emphz-teal uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Technical Documents ({results.downloads.length})</h4>
               <div className="space-y-2">
                 {results.downloads.map((d, i) => (
                   <a key={i} href="#resources" onClick={onClose} className="flex items-center gap-4 p-3 hover:bg-white/5 transition-colors group">
                      <FileText className="w-5 h-5 text-slate-500 group-hover:text-emphz-teal" />
                      <span className="text-slate-300 text-sm font-mono group-hover:text-white">{d.title}</span>
                      <span className="text-[10px] text-slate-600 bg-white/5 px-2 py-0.5 rounded ml-auto">{d.type}</span>
                   </a>
                 ))}
               </div>
             </div>
           )}

           {/* News Section */}
           {results.news.length > 0 && (
             <div className="mb-12">
               <h4 className="font-mono text-xs text-emphz-teal uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Corporate News ({results.news.length})</h4>
               <div className="space-y-4">
                 {results.news.map((n, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-1 h-full bg-emphz-teal/20"></div>
                      <div>
                        <h5 className="text-white font-bold text-sm mb-1">{n.title}</h5>
                        <p className="text-xs text-slate-500 font-mono">{n.date} • {n.category}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {query && results.products.length === 0 && results.downloads.length === 0 && results.news.length === 0 && (
              <div className="text-slate-500 font-mono text-sm">No results found for "{query}".</div>
           )}

        </div>

      </div>
    </div>
  );
};

export default SearchOverlay;