import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Download, Scale, X, Check, ChevronRight, ChevronDown, SlidersHorizontal, Grid, List, ArrowRight, ArrowUpDown, LayoutGrid, ShieldCheck, Ruler, Layers, AlertCircle, Trash2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCategory, Product } from '../types';

// New Component: Comparison Modal
const CompareModal: React.FC<{
  productIds: string[];
  onClose: () => void;
  onRemove: (id: string) => void;
}> = ({ productIds, onClose, onRemove }) => {
  const productsToCompare = MOCK_PRODUCTS.filter(p => productIds.includes(p.id));
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Auto-close if items drop below 2
  useEffect(() => {
    if (productIds.length < 2) {
      onClose();
    }
  }, [productIds, onClose]);

  const allSpecLabels = [...new Set(productsToCompare.flatMap(p => p.specs.map(s => s.label)))];

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col border border-gray-200 overflow-hidden">
        <header className="flex justify-between items-center p-6 border-b border-gray-100 flex-shrink-0 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-emphz-navy p-3 rounded-xl text-white">
              <Scale size={20} />
            </div>
            <div>
              <h2 id="compare-title" className="text-xl font-bold text-emphz-navy font-display uppercase tracking-wide">Compare Products</h2>
              <p className="text-xs text-gray-500 font-mono mt-0.5">Technical Specification Matrix</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-gray-400 hover:text-emphz-navy transition-colors p-2 rounded-full hover:bg-gray-200"
            aria-label="Close comparison"
          >
            <X size={24} />
          </button>
        </header>

        <div className="overflow-auto p-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className={`grid gap-6`} style={{ gridTemplateColumns: `minmax(180px, 200px) repeat(${productsToCompare.length}, minmax(220px, 1fr))` }}>

            {/* Header Row */}
            <div className="font-bold text-gray-400 sticky top-0 bg-white py-4 z-10 border-b-2 border-emphz-teal/20 flex items-end pb-4 font-display text-xs uppercase tracking-widest">
              Product
            </div>
            {productsToCompare.map(product => (
              <div key={product.id} className="text-center sticky top-0 bg-white py-4 z-10 border-b-2 border-emphz-teal/20 shadow-sm relative group">
                <button
                  onClick={() => onRemove(product.id)}
                  className="absolute top-2 right-2 bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 p-1.5 rounded-full transition-colors z-20 opacity-0 group-hover:opacity-100"
                  title="Remove from comparison"
                >
                  <X size={14} />
                </button>
                <div className="relative inline-block">
                  <img src={product.imageUrl} alt={product.name} loading="lazy" decoding="async" className="w-28 h-28 object-cover mx-auto rounded-xl mb-3 border border-gray-200 shadow-md transition-transform" />
                  <div className="absolute top-2 right-2 bg-emphz-navy text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm font-mono tracking-tighter pointer-events-none">{product.id.split('-')[2] || 'V1'}</div>
                </div>
                <h3 className="font-bold text-emphz-navy text-sm px-2 leading-tight min-h-[2.5em] flex items-center justify-center font-display mt-2">{product.name}</h3>
              </div>
            ))}

            {/* Category Row */}
            <div className="font-bold text-gray-500 py-3 text-xs uppercase tracking-wider flex items-center border-b border-gray-100 font-display">Category</div>
            {productsToCompare.map(p => (
              <div key={`cat-${p.id}`} className="text-center py-3 text-emphz-teal-text font-bold text-[10px] uppercase tracking-wider border-b border-gray-100 bg-gray-50/50 rounded-lg my-1 flex items-center justify-center font-display">
                {p.category}
              </div>
            ))}

            <div className="col-span-full h-4"></div>

            {/* Spec Rows */}
            {allSpecLabels.map((label, idx) => (
              <React.Fragment key={label}>
                <div className={`font-bold text-gray-400 py-3 text-xs uppercase tracking-wider flex items-center font-display ${idx % 2 === 0 ? '' : 'bg-gray-50/50 -mx-2 px-2 rounded-l-lg'}`}>{label}</div>
                {productsToCompare.map(product => {
                  const spec = product.specs.find(s => s.label === label);
                  return (
                    <div key={`${product.id}-${label}`} className={`text-center py-3 text-slate-700 text-xs flex items-center justify-center border-b border-dashed border-gray-100 font-mono hover:bg-emphz-teal/5 transition-colors ${idx % 2 === 0 ? '' : 'bg-gray-50/50 rounded-r-lg'}`}>
                      {spec?.value || <span className="text-gray-300">-</span>}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}

            <div className="col-span-full h-6 border-b border-gray-100 mb-6"></div>

            {/* Features Row */}
            <div className="font-bold text-gray-500 py-3 text-xs uppercase tracking-wider font-display">Key Highlights</div>
            {productsToCompare.map(p => (
              <div key={`feat-${p.id}`} className="py-4 text-left text-xs text-gray-600 bg-gray-50 rounded-xl px-5 border border-gray-100">
                <ul className="space-y-3">
                  {p.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={14} className="text-emphz-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Collapsible Filter Section
const FilterSection: React.FC<{
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-5 text-left group focus:outline-none"
    >
      <span className="text-xs font-bold text-emphz-navy uppercase tracking-widest group-hover:text-emphz-teal-text transition-colors font-display">
        {title}
      </span>
      <ChevronDown
        size={14}
        className={`text-gray-400 group-hover:text-emphz-teal transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
    >
      {children}
    </div>
  </div>
);


const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    features: true
  });

  const categories = ['All', ...Object.values(ProductCategory)];
  const availableFeatures = ['IP66 / IP67', 'UL94 Fire Rated', 'ATEX / Ex-Proof'];

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      let matchesFeatures = true;
      if (selectedFeatures.length > 0) {
        const productSearchString = (
          p.features.join(' ') +
          p.specs.map(s => s.value).join(' ') +
          p.name +
          p.shortDescription
        ).toLowerCase();

        matchesFeatures = selectedFeatures.every(feature => {
          const f = feature.toLowerCase();
          if (f.includes('ip66')) return productSearchString.includes('ip66') || productSearchString.includes('ip67');
          if (f.includes('fire')) return productSearchString.includes('ul94') || productSearchString.includes('fire') || productSearchString.includes('v-0');
          if (f.includes('atex')) return productSearchString.includes('atex') || productSearchString.includes('proof') || productSearchString.includes('explosion') || productSearchString.includes('zone');
          return false;
        });
      }
      return matchesCategory && matchesFeatures;
    });
  }, [selectedCategory, selectedFeatures]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'category') {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  // Key to re-trigger animation on filter/sort change
  const gridKey = useMemo(() => {
    return `${selectedCategory}-${selectedFeatures.join('_')}-${sortBy}-${viewMode}`;
  }, [selectedCategory, selectedFeatures, sortBy, viewMode]);

  // Inject JSON-LD Schema
  useEffect(() => {
    const scriptId = 'json-ld-catalog';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Emphz GRP Product Catalog",
      "description": `Browse ${sortedProducts.length} high-performance GRP solutions.`,
      "itemListElement": sortedProducts.map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": p.name,
          "image": p.imageUrl,
          "description": p.shortDescription,
          "url": window.location.origin + '/#/products/' + p.id,
          "brand": {
            "@type": "Brand",
            "name": "Emphz"
          },
          "sku": p.id
        }
      }))
    };

    script.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [sortedProducts]);

  // Lock body scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileFiltersOpen]);

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(prev => prev.filter(itemId => itemId !== id));
    } else {
      if (compareList.length < 3) {
        setCompareList(prev => [...prev, id]);
      } else {
        alert("You can compare up to 3 products at a time.");
      }
    }
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return MOCK_PRODUCTS.length;
    return MOCK_PRODUCTS.filter(p => p.category === cat).length;
  };

  const handleRemoveFeature = (feature: string) => {
    setSelectedFeatures(prev => prev.filter(f => f !== feature));
  };

  const handleClearAll = () => {
    setSelectedCategory('All');
    setSelectedFeatures([]);
  };

  const activeFiltersList = useMemo(() => [
    ...(selectedCategory !== 'All' ? [{ type: 'category', label: selectedCategory }] : []),
    ...selectedFeatures.map(f => ({ type: 'feature', label: f }))
  ], [selectedCategory, selectedFeatures]);

  // Reusable Filter Render Function
  const renderFilters = (isMobile = false) => (
    <div className={`${isMobile ? 'h-full overflow-y-auto p-6 pb-24 bg-white' : 'bg-white p-6 rounded-2xl sticky top-32 shadow-xl shadow-gray-200/50 border border-gray-100'}`}>
      <div className="flex items-center justify-between mb-2 pb-4 border-b border-gray-100">
        <div className="text-emphz-navy font-bold uppercase tracking-[0.15em] text-xs font-display flex items-center">
          <Filter size={14} className="mr-2" aria-hidden="true" /> Refine Selection
        </div>
        {isMobile && (
          <button
            onClick={() => setIsMobileFiltersOpen(false)}
            className="text-gray-400 hover:text-emphz-teal p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Category Accordion */}
      <FilterSection
        title="Category"
        isOpen={openSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-1">
          {categories.map((cat) => (
            <label key={cat} className={`flex items-center justify-between cursor-pointer group py-2.5 pl-3 pr-2 rounded-lg transition-all relative ${selectedCategory === cat ? 'bg-emphz-teal/10 text-emphz-teal-text' : 'hover:bg-gray-50'}`}>
              <div className="flex items-center relative z-10">
                <input
                  type="radio"
                  name="category"
                  className="sr-only peer"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />

                <span className={`text-xs transition-all duration-300 font-medium ${selectedCategory === cat ? 'text-emphz-teal-text font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                  {cat}
                </span>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors font-bold ${selectedCategory === cat ? 'bg-emphz-teal/20 text-emphz-teal-text' : 'bg-gray-100 text-gray-500'}`}>
                {getCategoryCount(cat)}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Features Accordion */}
      <FilterSection
        title="Key Specs"
        isOpen={openSections.features}
        onToggle={() => toggleSection('features')}
      >
        <div className="space-y-2 mt-1">
          {availableFeatures.map((feature) => {
            const isSelected = selectedFeatures.includes(feature);
            return (
              <label key={feature} className="flex items-center justify-between hover:bg-gray-50 p-2.5 rounded-lg cursor-pointer relative group select-none transition-colors">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isSelected}
                    onChange={() => toggleFeature(feature)}
                  />
                  <span className={`w-5 h-5 rounded border mr-3 flex items-center justify-center transition-all duration-200 ${isSelected
                    ? 'bg-emphz-teal border-emphz-teal text-white shadow-sm'
                    : 'border-gray-300 bg-white group-hover:border-emphz-teal'
                    }`}>
                    <Check size={12} className={`transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                  </span>
                  <span className={`text-xs transition-colors font-mono ${isSelected ? 'text-emphz-navy font-bold' : 'text-slate-500'}`}>
                    {feature}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </FilterSection>

      {/* Reset Filters */}
      {(selectedCategory !== 'All' || selectedFeatures.length > 0) && (
        <button
          onClick={handleClearAll}
          className="w-full mt-6 py-3 text-[10px] font-bold text-gray-400 hover:text-white hover:bg-gray-400 rounded-lg transition-colors uppercase tracking-widest font-display border border-gray-200"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className="bg-slate-50 min-h-screen py-16 md:py-24 relative text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-10">
            <div>
              <div className="text-blue-700 font-bold tracking-[0.2em] text-xs uppercase mb-3">The Collection</div>
              <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-4 tracking-tight">PRODUCT CATALOG</h1>
              <p className="text-slate-600 max-w-2xl text-lg font-light leading-relaxed">
                Engineered GRP solutions for demanding environments. Browse our range of enclosures, kiosks, and modular cabins.
              </p>
            </div>
            <button className="hidden md:flex items-center glass hover:bg-slate-900 hover:text-white border border-slate-300 px-8 py-3 rounded-xl text-xs font-bold transition-all mt-6 md:mt-0 shadow-sm hover:shadow-lg uppercase tracking-widest">
              <Download className="mr-3" size={16} aria-hidden="true" /> Price List (PDF)
            </button>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-8 sticky top-24 z-30">
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="w-full flex items-center justify-between px-6 py-4 rounded-xl font-bold shadow-xl border bg-emphz-navy text-white border-emphz-navy transition-all transform hover:scale-[1.02]"
            >
              <span className="flex items-center uppercase text-sm tracking-widest font-display">
                <SlidersHorizontal size={18} className="mr-3" />
                Filter & Sort
              </span>
              <span className="bg-emphz-teal text-emphz-navy text-[10px] px-2 py-1 rounded font-mono font-bold shadow-sm">{filteredProducts.length} Results</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              {renderFilters(false)}
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Sorting & Results Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <span className="text-sm text-gray-500 font-mono">
                  Showing <span className="font-bold text-emphz-navy">{sortedProducts.length}</span> results
                </span>

                <div className="flex items-center self-end sm:self-auto gap-4">
                  {/* View Toggles */}
                  <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-emphz-navy text-white' : 'text-gray-400 hover:text-emphz-navy'}`}
                      aria-label="Grid View"
                    >
                      <LayoutGrid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-emphz-navy text-white' : 'text-gray-400 hover:text-emphz-navy'}`}
                      aria-label="List View"
                    >
                      <List size={16} />
                    </button>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase mr-3 hidden sm:block font-display tracking-wider">Sort by:</span>
                    <div className="relative group">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 text-emphz-navy text-xs font-bold py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:border-emphz-teal cursor-pointer uppercase tracking-wider font-display hover:shadow-sm transition-all min-w-[140px]"
                        aria-label="Sort products"
                      >
                        <option value="default">Featured</option>
                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="category">Category</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Filters Bar */}
              {activeFiltersList.length > 0 && (
                <div className="mb-6 p-4 bg-gray-100 rounded-xl border border-gray-200 flex items-center flex-wrap gap-3">
                  <span className="text-xs font-bold text-gray-500 mr-2 font-mono">Active Filters:</span>
                  {activeFiltersList.map(filter => (
                    <div key={filter.label} className="flex items-center bg-white border border-gray-300 rounded-full text-xs font-bold text-emphz-navy pl-3 pr-2 py-1 gap-2 animate-fade-in shadow-sm">
                      <span>{filter.label}</span>
                      <button
                        onClick={() => {
                          if (filter.type === 'category') setSelectedCategory('All');
                          else handleRemoveFeature(filter.label);
                        }}
                        className="text-gray-400 hover:text-white hover:bg-red-500 rounded-full transition-colors p-0.5"
                        aria-label={`Remove filter: ${filter.label}`}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-gray-500 hover:text-red-500 font-bold uppercase tracking-wider ml-auto pl-4 hover:underline"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Product Grid / List */}
              <div
                key={gridKey}
                className={`animate-fade-in ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' : 'space-y-4'}`}
                style={{ animationDuration: '400ms' }}
              >
                {sortedProducts.map((product) => {
                  const isComparing = compareList.includes(product.id);

                  if (viewMode === 'grid') {
                    // --- GRID CARD ---
                    return (
                      <article key={product.id} className="glass rounded-2xl overflow-hidden flex flex-col h-full group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white/40 border-white/50">
                        <div className="relative h-64 overflow-hidden bg-slate-100 flex-shrink-0">
                          <img src={product.imageUrl} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>

                          <div className="absolute top-4 right-4 glass text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm tracking-wider uppercase">
                            {product.category}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow relative">
                          <button
                            onClick={(e) => { e.preventDefault(); toggleCompare(product.id); }}
                            className={`absolute top-6 right-6 p-2 rounded-xl backdrop-blur-md transition-all border shadow-lg z-20 hover:scale-110 ${isComparing ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/80 text-slate-400 hover:text-slate-900 border-white'}`}
                            title="Compare"
                          >
                            <Scale size={16} />
                          </button>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.specs.slice(0, 2).map((s, i) => (
                              <span key={i} className="bg-slate-200/50 border border-slate-300/50 text-[9px] px-2 py-1 rounded text-slate-600 font-bold font-mono uppercase tracking-tight">
                                {s.value}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-700 transition-colors tracking-tight">{product.name}</h3>
                          <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{product.shortDescription}</p>

                          <div className="mt-auto pt-6 border-t border-slate-200 transition-all duration-300">
                            <Link
                              to={`/products/${product.id}`}
                              className="w-full flex items-center justify-center glass hover:bg-slate-900 text-slate-900 hover:text-white font-bold py-3 px-4 rounded-xl transition-all text-xs tracking-widest uppercase group/btn"
                            >
                              <span>View Specs</span>
                              <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  } else {
                    // --- LIST ROW (Engineering View) ---
                    return (
                      <article key={product.id} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow group relative">
                        {/* Thumbnail */}
                        <div className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        {/* Core Info */}
                        <div className="flex-1 text-center md:text-left">
                          <div className="text-[10px] text-gray-400 font-mono mb-1">{product.id.toUpperCase()}</div>
                          <h3 className="text-lg font-bold text-emphz-navy mb-1 font-display group-hover:text-emphz-teal-text transition-colors">{product.name}</h3>
                          <div className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">{product.category}</div>
                          <p className="text-xs text-gray-500 line-clamp-1">{product.shortDescription}</p>
                        </div>

                        {/* Tech Specs Columns */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-left min-w-[200px] border-l border-gray-100 pl-6 border-r pr-6 md:block hidden">
                          {product.specs.slice(0, 4).map((s, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">{s.label}</span>
                              <span className="text-xs font-mono font-bold text-slate-700">{s.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-row md:flex-col gap-3 min-w-[120px]">
                          <Link
                            to={`/products/${product.id}`}
                            className="bg-emphz-navy hover:bg-emphz-teal text-white font-bold py-2 px-4 rounded-lg text-[10px] uppercase tracking-widest text-center transition-colors shadow-md"
                          >
                            Details
                          </Link>
                          <button
                            onClick={() => toggleCompare(product.id)}
                            className={`border font-bold py-2 px-4 rounded-lg text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isComparing
                              ? 'border-emphz-teal text-emphz-teal bg-emphz-teal/5'
                              : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700'
                              }`}
                          >
                            <Scale size={12} /> {isComparing ? 'Added' : 'Compare'}
                          </button>
                        </div>
                      </article>
                    );
                  }
                })}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="text-gray-400" />
                  </div>
                  <h3 className="text-lg text-emphz-navy font-bold font-display">No products found.</h3>
                  <p className="text-gray-500 text-sm mb-6">Try adjusting your filters to see more results.</p>
                  <button onClick={handleClearAll} className="text-emphz-navy bg-emphz-teal px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comparison Floating Bar - Premium Dark */}
        {compareList.length > 0 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4 animate-fade-up" role="region" aria-label="Product Comparison">
            <div className="bg-emphz-navy text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex justify-between items-center ring-1 ring-white/20">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-4">
                  {compareList.map(id => (
                    <div key={id} className="w-12 h-12 rounded-full border-2 border-emphz-navy bg-gray-800 overflow-hidden relative group/thumb cursor-pointer shadow-lg" onClick={() => toggleCompare(id)} title="Click to remove">
                      <img src={MOCK_PRODUCTS.find(p => p.id === id)?.imageUrl} className="w-full h-full object-cover opacity-80 group-hover/thumb:opacity-100 transition-opacity" alt="" />
                      <div className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <X size={16} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-sans flex flex-col">
                  <span className="font-bold text-white uppercase tracking-widest text-[10px]">Comparison</span>
                  <span className="text-gray-400 text-xs">{compareList.length} products selected</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={() => setCompareList([])} className="text-gray-400 hover:text-white text-[10px] uppercase font-bold tracking-widest px-3 py-2 rounded hover:bg-white/10 transition-colors">Clear</button>

                <div className="relative group/btn">
                  <button
                    onClick={() => setIsCompareModalOpen(true)}
                    disabled={compareList.length < 2}
                    className={`px-6 py-3 rounded-xl font-bold text-xs shadow-lg font-display tracking-widest uppercase transition-all flex items-center gap-2 ${compareList.length >= 2
                      ? 'bg-emphz-teal text-emphz-navy hover:bg-[#00C4CC] shadow-emphz-teal/20'
                      : 'bg-white/10 text-gray-500 cursor-not-allowed border border-white/5'
                      }`}
                  >
                    COMPARE SELECTED ({compareList.length})
                  </button>
                  {compareList.length < 2 && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max bg-black text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none flex items-center shadow-xl border border-white/10">
                      <AlertCircle size={10} className="mr-1.5 text-emphz-teal" /> Select at least 2 items
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 border-r border-b border-white/10"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Filter Slide-over Panel */}
      <div className={`fixed inset-0 z-[100] lg:hidden ${isMobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileFiltersOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileFiltersOpen(false)}
        />

        {/* Slide-over Panel */}
        <div className={`absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isMobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {renderFilters(true)}

          {/* Sticky Mobile Footer */}
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-100 bg-white shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="w-full bg-emphz-navy text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs shadow-lg flex items-center justify-center"
            >
              View {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>

      {isCompareModalOpen && (
        <CompareModal
          productIds={compareList}
          onClose={() => setIsCompareModalOpen(false)}
          onRemove={toggleCompare}
        />
      )}
    </>
  );
};

export default Catalog;