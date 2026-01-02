
import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../data';
import { ArrowRight, ChevronDown, CheckCircle2, List, Settings, Activity, ShieldCheck } from 'lucide-react';

interface ProductsProps {
  addToQuote: (productTitle: string) => void;
  quoteItems: string[];
}

const ProductAccordion: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void; 
  children: React.ReactNode 
}> = ({ title, icon, isOpen, onToggle, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const timer = setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="border-b border-slate-100 last:border-0 scroll-mt-24">
      <button 
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <div className={`transition-colors duration-300 ${isOpen ? 'text-emphz-blue' : 'text-slate-400 group-hover:text-emphz-blue'}`}>
            {icon}
          </div>
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isOpen ? 'text-emphz-blue' : 'text-slate-500 group-hover:text-emphz-blue'}`}>
            {title}
          </span>
        </div>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-emphz-blue' : 'text-slate-300'}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const Products: React.FC<ProductsProps> = ({ addToQuote, quoteItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openAccordion, setOpenAccordion] = useState<Record<number, string | null>>({});

  const toggleAccordion = (productId: number, section: string) => {
    setOpenAccordion(prev => ({
      ...prev,
      [productId]: prev[productId] === section ? null : section
    }));
  };
  
  const categories = ['All', 'Power', 'Infra', 'Commercial', 'Custom'];
  const filtered = selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 md:py-32 bg-white text-emphz-blue relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
        <span className="font-mono text-emphz-blue text-xs font-bold tracking-[0.5em] uppercase mb-4 block">CERTIFIED GRP CATALOGUE</span>
        <h2 className="text-4xl md:text-6xl font-bold text-emphz-blue mb-10 tracking-tighter uppercase">Vetted GRP <span className="text-emphz-silver">Systems.</span></h2>
        <div className="w-24 h-1 bg-emphz-silver mx-auto mb-10 rounded-full"></div>
        <p className="text-slate-500 max-w-3xl mx-auto font-light text-lg leading-relaxed">
          The EMPHZ ecosystem provides vetted GRP composite modules pre-qualified for the most demanding global utilities. 
          Built for zero corrosion and designed for immediate site integration.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-12 py-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-500 border ${
                selectedCategory === cat 
                ? 'bg-emphz-silver text-emphz-blue border-emphz-silver shadow-2xl shadow-slate-300/50 scale-105' 
                : 'bg-white text-slate-400 border-slate-200 hover:border-emphz-blue hover:text-emphz-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {filtered.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border border-slate-50 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-700 flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 shadow-xl shrink-0">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%]" />
                <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-emphz-blue border border-slate-50">
                  {product.icon}
                </div>
              </div>

              <div className="px-2 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                   <span className="text-emphz-blue font-mono text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-emphz-silver/20 rounded-full">VETTED GRP {product.category}</span>
                   <div className="h-px flex-grow bg-slate-100"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-emphz-blue mb-4 uppercase tracking-tight group-hover:text-slate-500 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                  {product.description}
                </p>

                <div className="mb-10 bg-slate-50/50 rounded-2xl px-6 py-2 border border-slate-100">
                  <ProductAccordion 
                    title="Key Features" 
                    icon={<List className="w-3.5 h-3.5" />}
                    isOpen={openAccordion[product.id] === 'features'}
                    onToggle={() => toggleAccordion(product.id, 'features')}
                  >
                    <ul className="space-y-3">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3 text-emphz-blue" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </ProductAccordion>

                  <ProductAccordion 
                    title="Specifications" 
                    icon={<Settings className="w-3.5 h-3.5" />}
                    isOpen={openAccordion[product.id] === 'specs'}
                    onToggle={() => toggleAccordion(product.id, 'specs')}
                  >
                    <div className="space-y-3">
                      {Object.entries(product.specs).map(([key, val], i) => (
                        <div key={i} className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest border-b border-slate-100/50 pb-2 last:border-0">
                          <span className="text-slate-400 font-bold">{key.replace('_', ' ')}</span>
                          <span className="text-emphz-blue font-bold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </ProductAccordion>

                  <ProductAccordion 
                    title="Engineering Data" 
                    icon={<Activity className="w-3.5 h-3.5" />}
                    isOpen={openAccordion[product.id] === 'performance'}
                    onToggle={() => toggleAccordion(product.id, 'performance')}
                  >
                    <div className="space-y-4">
                      <div className="bg-white/50 p-3 rounded-lg border border-slate-100">
                         <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck className="w-3 h-3 text-emphz-blue" />
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">Laminate Matrix</span>
                         </div>
                         <p className="text-[10px] text-slate-600 font-medium leading-relaxed">{product.materialProperties}</p>
                      </div>
                      <div className="space-y-2">
                        {product.performanceData.map((data, i) => (
                          <div key={i} className="flex items-center gap-3 text-[9px] text-slate-500 font-mono uppercase tracking-widest bg-white p-2 border border-slate-100 rounded">
                             <span className="w-1.5 h-1.5 bg-emphz-silver rounded-full"></span>
                             {data}
                          </div>
                        ))}
                      </div>
                    </div>
                  </ProductAccordion>
                </div>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => addToQuote(product.title)}
                    className={`w-full py-5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-md flex items-center justify-center gap-3 ${
                      quoteItems.includes(product.title)
                      ? 'bg-emphz-blue text-white'
                      : 'bg-slate-100 text-slate-500 hover:bg-emphz-silver hover:text-emphz-blue'
                    }`}
                  >
                    {quoteItems.includes(product.title) ? 'SPECIFICATION SYNCED' : 'REQUEST VETTED SPEC'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
