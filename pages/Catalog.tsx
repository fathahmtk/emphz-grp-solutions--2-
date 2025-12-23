import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Filter,
  Download,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  List,
  ArrowRight,
  FileText
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import SEO from '../components/SEO';

// Simplified Filter Section
const FilterItem: React.FC<{
  label: string;
  count?: number;
  isSelected: boolean;
  onClick: () => void;
  type?: 'radio' | 'checkbox';
}> = ({ label, count, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between w-full py-2 group transition-all ${isSelected ? 'text-accent-blue font-bold' : 'text-industrial-500 hover:text-industrial-900'
      }`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 border transition-all flex items-center justify-center ${isSelected ? 'bg-accent-blue border-accent-blue' : 'border-industrial-300'
        }`}>
        {isSelected && <div className="w-1 h-1 bg-white" />}
      </div>
      <span className="text-[11px] uppercase tracking-wider">{label}</span>
    </div>
    {count !== undefined && (
      <span className="text-[10px] tabular-nums text-industrial-300 group-hover:text-industrial-400">
        {count}
      </span>
    )}
  </button>
);

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('default');

  const categories = ['All', ...Object.values(ProductCategory)];

  // ... existing hooks for filteredProducts and sortedProducts ...
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Products"
        description="Explore the EMPHZ product catalog: GRP Enclosures, Modular Cabins, Security Kiosks, and Industrial Toilets. Engineered for durability."
      />
      {/* Header Section */}
      <section className="bg-white border-b border-industrial-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="animate-up">
              <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-industrial-400">
                <Link to="/" className="hover:text-industrial-900 transition-colors">Home</Link>
                <ChevronRight size={12} className="text-industrial-300" />
                <span className="text-industrial-900">Catalog</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-industrial-900 mb-8 leading-[1.1]">
                Product Matrix
              </h1>
              <p className="max-w-2xl text-lg text-industrial-500 leading-relaxed font-light">
                High-performance GRP solutions specialized for industrial infrastructure. Standardized designs engineered for durability and longevity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="btn-secondary px-8 py-4 flex items-center justify-center gap-3">
                <Download size={16} /> Technical Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filters - Minimalist */}
          <aside className="w-full lg:w-72 flex-shrink-0 animate-in">
            <div className="sticky top-32">
              <div className="flex items-center gap-2 mb-10 pb-4 border-b border-industrial-100">
                <Filter size={16} className="text-industrial-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-900">Filters</span>
                <span className="ml-auto text-xs font-semibold text-industrial-300 tabular-nums">
                  {filteredProducts.length} Results
                </span>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-400 mb-6">By Category</h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <FilterItem
                        key={cat}
                        label={cat}
                        isSelected={selectedCategory === cat}
                        onClick={() => setSelectedCategory(cat)}
                        count={cat === 'All' ? MOCK_PRODUCTS.length : MOCK_PRODUCTS.filter(p => p.category === cat).length}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-400 mb-6">Resources</h3>
                  <Link to="/technical" className="flex items-center gap-3 text-industrial-500 hover:text-industrial-900 text-xs font-medium uppercase tracking-wider group transition-colors">
                    <FileText size={16} className="text-industrial-300 group-hover:text-accent-blue" />
                    Technical Center
                  </Link>
                </div>
              </div>

              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="w-full mt-12 py-4 border border-industrial-100 rounded text-xs font-bold uppercase tracking-widest text-industrial-400 hover:text-red-500 hover:border-red-100 transition-all"
                >
                  Clear Selection
                </button>
              )}
            </div>
          </aside>

          {/* Product Center */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-industrial-100 flex-wrap gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white p-1 rounded-lg border border-industrial-200 gap-1 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-industrial-100 text-industrial-900 shadow-inner' : 'text-industrial-400 hover:text-industrial-600'}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-industrial-100 text-industrial-900 shadow-inner' : 'text-industrial-400 hover:text-industrial-600'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
                <span className="hidden sm:inline text-[10px] text-industrial-400 uppercase tracking-widest font-bold">
                  View Mode
                </span>
              </div>

              <div className="flex items-center gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-industrial-400">Sort By:</label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-industrial-200 text-[10px] font-bold uppercase tracking-widest py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-accent-blue cursor-pointer shadow-sm hover:border-industrial-300 transition-colors"
                  >
                    <option value="default">Featured</option>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-industrial-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content Display */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 gap-8' : 'grid-cols-1 gap-6'}`}>
              {sortedProducts.map((product, i) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className={`industrial-card group animate-up flex ${viewMode === 'list' ? 'flex-row items-center gap-8 p-4' : 'flex-col h-full'}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className={`${viewMode === 'list' ? 'w-40 h-28' : 'aspect-video'} overflow-hidden bg-white/50 flex-shrink-0 relative`}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className={`flex flex-col flex-grow ${viewMode === 'list' ? '' : 'p-8'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-bold text-accent-blue uppercase tracking-widest">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-industrial-900 mb-3 group-hover:text-accent-blue transition-colors">
                      {product.name}
                    </h4>
                    {viewMode === 'grid' && (
                      <p className="text-sm text-industrial-500 leading-relaxed mb-8 flex-grow line-clamp-2">
                        {product.shortDescription}
                      </p>
                    )}
                    <div className={`flex items-center justify-between pt-6 border-industrial-100 ${viewMode === 'list' ? 'hidden' : 'border-t'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-400">Technical Details</span>
                      <ChevronRight size={16} className="text-industrial-300 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                    </div>
                    {viewMode === 'list' && (
                      <ArrowRight size={18} className="text-industrial-300 group-hover:text-accent-blue group-hover:translate-x-2 transition-all ml-auto" />
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="py-32 text-center bg-white border border-dashed border-industrial-200 rounded-sm">
                <Filter size={32} className="mx-auto text-industrial-200 mb-6" />
                <h3 className="text-xl font-medium text-industrial-900 mb-2">No results found</h3>
                <p className="text-industrial-500 text-sm mb-8">Try adjusting your filters to find what you're looking for.</p>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="btn-industrial px-8 py-3 text-xs uppercase tracking-widest"
                >
                  Reset Selection
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;