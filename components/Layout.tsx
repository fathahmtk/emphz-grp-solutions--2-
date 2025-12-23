import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import CommandPalette from './CommandPalette';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { pathname } = location;

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
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) setScrollProgress(totalScroll / windowHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-emphz-navy font-sans selection:bg-emphz-teal selection:text-white relative">
      <style>{`
        html { scroll-behavior: smooth; }
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

      <Header isActive={isActive} onSearchClick={() => setIsSearchOpen(true)} />

      <main id="main-content" className={`flex-grow relative transition-all duration-500`}>
        {!isHome && <Breadcrumbs items={breadcrumbs} />}
        {children}
      </main>

      <WhatsAppButton />
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Footer />
    </div>
  );
}
