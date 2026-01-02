
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import Logo from './Logo';
import SearchOverlay from './SearchOverlay';

interface NavbarProps {
  quoteCount: number;
  openConsultant: () => void;
  openQuoteDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ quoteCount, openConsultant, openQuoteDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#products' },
    { name: 'ENGINEERING', href: '#engineering-desk' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-emphz-darker/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home">
              <Logo className="h-6 md:h-7" />
            </a>
          </div>

          {/* Navigation Links - Centered like reference */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-white/80 hover:text-emphz-amber tracking-[0.15em] transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emphz-amber transition-all group-hover/link:w-full"></span>
              </a>
            ))}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openQuoteDrawer}
              className="bg-emphz-amber text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-emphz-darker transition-all duration-500 flex items-center gap-3 uppercase shadow-xl shadow-emphz-amber/20"
            >
              <ShoppingBag className="w-4 h-4" />
              {quoteCount > 0 ? `REQUISITION (${quoteCount})` : 'REQUEST QUOTE'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="text-white p-2" aria-label="Search"><Search className="w-5 h-5" /></button>
            <button onClick={openQuoteDrawer} className="text-white p-2 relative">
               <ShoppingBag className="w-5 h-5" />
               {quoteCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-emphz-amber rounded-full animate-pulse"></span>}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed inset-0 z-[90] bg-emphz-darker/98 backdrop-blur-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white tracking-[0.2em] hover:text-emphz-amber transition-colors">{link.name}</a>
              ))}
              <button 
                onClick={() => { setIsOpen(false); openQuoteDrawer(); }} 
                className="bg-emphz-amber text-white px-12 py-5 rounded-full font-bold tracking-[0.2em] mt-4 uppercase flex items-center gap-3"
              >
                <ShoppingBag className="w-5 h-5" /> REQUISITION
              </button>
           </div>
        </div>
      </nav>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
