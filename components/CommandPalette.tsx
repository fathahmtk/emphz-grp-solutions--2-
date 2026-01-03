import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Box, CornerDownLeft, Briefcase, Hash, Globe, Calculator } from 'lucide-react';
import { MOCK_PRODUCTS, NAV_LINKS, MOCK_CASE_STUDIES } from '../constants';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

type SearchResult = {
  id: string;
  type: 'PAGE' | 'PRODUCT' | 'CASE_STUDY' | 'ACTION';
  title: string;
  subtitle?: string;
  path: string;
  icon: React.ReactNode;
};

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Aggregate and filter data
  const results: SearchResult[] = useMemo(() => {
    const q = query.toLowerCase();

    const pages: SearchResult[] = NAV_LINKS.map(link => ({
      id: `page-${link.path}`,
      type: 'PAGE' as const,
      title: link.label,
      path: link.path,
      icon: <Globe size={16} />
    })).filter(item => item.title.toLowerCase().includes(q));

    const products: SearchResult[] = MOCK_PRODUCTS.map(prod => ({
      id: `prod-${prod.id}`,
      type: 'PRODUCT' as const,
      title: prod.name,
      subtitle: `${prod.category} • SKU: ${prod.id}`,
      path: `/products/${prod.id}`,
      icon: <Box size={16} />
    })).filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q))
    );

    const studies: SearchResult[] = MOCK_CASE_STUDIES.map(study => ({
      id: `cs-${study.id}`,
      type: 'CASE_STUDY' as const,
      title: study.title,
      subtitle: `Case Study • ${study.location}`,
      path: '/case-studies', // In a real app, this would be /case-studies/:id
      icon: <Briefcase size={16} />
    })).filter(item => item.title.toLowerCase().includes(q));

    const actions: SearchResult[] = [
      { id: 'act-rfq', type: 'ACTION' as const, title: 'Start a Quote', subtitle: 'Go to RFQ Cart', path: '/rfq', icon: <Calculator size={16} /> },
      { id: 'act-tech', type: 'ACTION' as const, title: 'Technical Center', subtitle: 'Engineering Specs', path: '/technical', icon: <Hash size={16} /> },
    ].filter(item => item.title.toLowerCase().includes(q));

    return [...actions, ...pages, ...products, ...studies];
  }, [query]);

  const handleSelect = React.useCallback((item: SearchResult) => {
    navigate(item.path);
    onClose();
    setQuery('');
  }, [navigate, onClose]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, handleSelect, onClose]);

  // Effect to scroll selected item into view
  useEffect(() => {
    if (isOpen && listRef.current && results.length > 0) {
      const selectedItem = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (selectedItem) {
        selectedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, isOpen, results.length]);




  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050A14]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Palette */}
      <div className="relative w-full max-w-2xl bg-[#0B1120] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col max-h-[60vh] animate-fade-up">

        {/* Header / Input */}
        <div className="flex items-center px-4 py-4 border-b border-white/10 relative">
          <Search className="w-5 h-5 text-gray-400 mr-4" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, pages, or commands..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 font-sans text-lg"
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-white transition-colors"
          >
            <div className="text-[10px] font-mono border border-gray-600 rounded px-1.5 py-0.5">ESC</div>
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-700" ref={listRef}>
          {results.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              <p className="text-sm font-mono">No matching results found.</p>
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((item, index) => (
                <li key={item.id} data-index={index}>
                  <button
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg group transition-all duration-200 ${index === selectedIndex
                      ? 'bg-emphz-teal/10'
                      : 'hover:bg-white/5'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-md ${index === selectedIndex ? 'bg-emphz-teal text-white' : 'bg-white/5 text-gray-400'
                        } transition-colors`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <div className={`text-sm font-bold ${index === selectedIndex ? 'text-white' : 'text-gray-300'}`}>
                          {item.title}
                        </div>
                        {item.subtitle && (
                          <div className="text-xs text-gray-500 font-mono mt-0.5">
                            {item.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    {index === selectedIndex && (
                      <CornerDownLeft className="text-emphz-teal w-4 h-4 animate-pulse" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white/5 border-t border-white/10 text-[10px] text-gray-500 flex justify-between items-center font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="bg-white/10 px-1 rounded">↑↓</span> to navigate</span>
            <span className="flex items-center gap-1"><span className="bg-white/10 px-1 rounded">↵</span> to select</span>
          </div>
          <div>
            Emphz Engineering Index
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;