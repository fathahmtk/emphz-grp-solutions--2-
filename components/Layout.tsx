import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';
import { NAV_LINKS, MOCK_PRODUCTS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import CommandPalette from './CommandPalette';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const items = useRFQStore((state: any) => state.items);
  const { pathname } = location;

  useEffect(() => {
    const checkMobile = () => {};
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const breadcrumbs = useMemo(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) return [];
    const crumbs = [];
    let currentPath = '';
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];
      currentPath += `/${part}`;
      let name = part.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
      if (pathParts[0] === 'products' && i === 1) {
        const product = MOCK_PRODUCTS.find(p => p.id === part);
        if (product) {
          crumbs.push({ name: product.category, path: '/products', isCurrent: false });
          name = product.name;
        }
      }
      crumbs.push({ name, path: currentPath, isCurrent: i === pathParts.length - 1 });
    }
    return [{ name: 'Home', path: '/', isCurrent: false }, ...crumbs];
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) setScrollProgress(totalScroll / windowHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, scrolled]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-emphz-navy font-sans selection:bg-emphz-teal selection:text-white relative">
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        .global-noise {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 9999; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .skip-link {
          position: absolute; top: -100px; left: 20px; background: #00ADB5; color: #0B1120;
          padding: 12px 24px; z-index: 100; transition: top 0.3s ease; font-weight: 700;
          border-radius: 0 0 8px 8px; font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .skip-link:focus { top: 0; }
      `}</style>
      <div className="global-noise"></div>
      <div className="mesh-bg fixed inset-0 pointer-events-none">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div className="h-full bg-emphz-teal shadow-[0_0_10px_#3B82F6]" style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }} />
      </div>
      <header className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 pointer-events-none flex justify-center px-4 md:px-4`}>
        <div className={`nav-island pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${scrolled ? 'w-full max-w-5xl py-2 px-4 md:px-6 bg-white/95 shadow-2xl' : 'w-full max-w-7xl py-3 md:py-4 px-4 md:px-8 bg-white/80'}`}>
          <Link to="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <img src="/logo.png" alt="EMPHZ Logo" className={`h-12 md:h-16 w-auto transition-all duration-500 ease-out group-hover:scale-105`} />
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 ${isActive(link.path) ? 'text-industrial-900 border-b-2 border-accent-blue' : 'text-industrial-600 hover:text-industrial-900'}`}>{link.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/rfq" className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-industrial-500 hover:text-accent-blue transition-colors relative tap-target">
              <ShoppingCart size={18} />
              {items.length > 0 && <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 bg-accent-blue text-white text-[8px] font-bold flex items-center justify-center rounded-full">{items.length}</span>}
            </Link>
            <Link to="/rfq" className="hidden sm:flex btn-industrial px-6 py-3 text-sm rounded transition-all">Get Quote</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2.5 text-industrial-900 bg-industrial-100 rounded-full">{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        <div className={`mobile-backdrop md:hidden ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-industrial-100 transition-all duration-300 origin-top shadow-xl ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <nav className="flex flex-col p-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-2 ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600'}`}>{link.label}</Link>
            ))}
            <Link to="/rfq" onClick={() => setIsMenuOpen(false)} className="btn-industrial py-4 text-center">Request Quote</Link>
          </nav>
        </div>
      </header>
      <main id="main-content" className={`flex-grow relative ${isHome ? '' : 'pt-24'} transition-all duration-500 ${isMenuOpen ? 'blur-sm opacity-50' : ''}`}>
        {!isHome && breadcrumbs.length > 0 && (
          <div className="w-full bg-industrial-50/80 backdrop-blur-sm border-b border-industrial-100 sticky top-16 z-30">
            <nav className="max-w-7xl mx-auto px-6 py-3">
              <ol className="flex items-center space-x-2 text-[11px] text-industrial-400 font-medium uppercase tracking-widest">
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.path}-${crumb.name}`} className="flex items-center">
                    {index > 0 && <ChevronRight size={10} className="mx-2 opacity-50" />}
                    {crumb.isCurrent ? <span className="text-industrial-900">{crumb.name}</span> : <Link to={crumb.path} className="hover:text-accent-blue">{crumb.name}</Link>}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        {children}
      </main>
      <div className={`fixed bottom-8 right-8 z-30 flex flex-col gap-4 transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <a href="https://wa.me/919037874080" target="_blank" rel="noreferrer" className="bg-white text-industrial-900 p-4 rounded-full shadow-subtle border border-industrial-100 group">
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <footer className="bg-white border-t border-industrial-100 py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-8"><img src="/logo.png" alt="EMPHZ" className="h-12 w-auto grayscale opacity-80" /></Link>
              <p className="text-industrial-500 text-sm max-w-md mb-8">Specialized GRP manufacturer delivering high-durability enclosures and modular structures.</p>
              <div className="inline-flex px-4 py-2 bg-industrial-50 rounded text-xs font-semibold text-industrial-600 uppercase">Kerala Managed | Mysuru Manufactured</div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Solutions</h4>
              <nav className="flex flex-col gap-4">
                {['Industrial Enclosures', 'Security Cabins', 'Modular Kiosks', 'Sanitary Units', 'Infrastructure'].map(item => <Link key={item} to="/products" className="text-industrial-500 hover:text-industrial-900 text-sm">{item}</Link>)}
              </nav>
            </div>
            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Get in Touch</h4>
              <div className="space-y-6 text-sm text-industrial-500">
                <div className="flex gap-4"><MapPin size={18} /><p>KIADB Industrial Area, Mysuru, Karnataka</p></div>
                <div className="flex gap-4"><Phone size={18} /><span>+91 9037 874 080</span></div>
                <div className="flex gap-4"><Mail size={18} /><span>info@emphz.in</span></div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-industrial-50 flex flex-col md:flex-row justify-between items-center text-xs text-industrial-400 gap-6">
            <p>&copy; {new Date().getFullYear()} Emphz Engineering Private Limited.</p>
            <div className="flex gap-8"><Link to="/sitemap">Sitemap</Link><Link to="#">Privacy</Link><Link to="#">Terms</Link></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
