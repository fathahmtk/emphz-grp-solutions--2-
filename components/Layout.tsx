import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Mail, MapPin, ChevronRight, MessageCircle, FileText, Search } from 'lucide-react';
import { NAV_LINKS, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import LiveChatWidget from './LiveChatWidget';
import Logo from './Logo';
import CommandPalette from './CommandPalette';
import { ProductCategory } from '../types';

interface LayoutProps {
  children?: React.ReactNode;
}

const SEO_DATA = {
  '/': {
    title: 'EMPHZ – GRP/FRP Enclosures, Portable Toilets, Kiosks & Pods | Composite Engineering',
    description: 'EMPHZ specializes in high-durability GRP/FRP enclosures, portable toilets, security cabins, food kiosks, sleeping pods, villa pods, and bus shelters for industrial and public-sector applications.',
  },
  '/about': {
    title: 'About EMPHZ | Leading GRP/FRP Manufacturer',
    description: 'Discover EMPHZ — a composite engineering company delivering premium GRP/FRP enclosures, kiosks, pods, and prefab structures built for long-term durability.',
  },
  '/products': {
    title: 'GRP/FRP Product Catalog | Enclosures, Cabins, Pods & More | EMPHZ',
    description: "Browse our extensive catalog of GRP electrical enclosures, modular kiosks, security cabins, portable toilets, and custom composite structures.",
  },
  '/case-studies': {
    title: 'Case Studies | Real-World GRP Applications | EMPHZ',
    description: "Explore real-world applications of Emphz GRP solutions in demanding industries like utilities, rail, and coastal infrastructure.",
  },
  '/technical': {
    title: 'Technical Center | Datasheets & Support | EMPHZ',
    description: "Access our Technical Center for datasheets, installation guides, and direct consultation with our engineering team.",
  },
  '/blog': {
    title: 'Technical Insights | Emphz Blog',
    description: 'Explore the latest in GRP technology, project highlights, and engineering best practices from the Emphz team.',
  },
  '/contact': {
    title: 'Contact EMPHZ | GRP/FRP Manufacturer',
    description: 'Reach EMPHZ for product inquiries, quotations, and partnership opportunities.',
  },
  productsByCategory: {
    [ProductCategory.PORTABLE_TOILET]: {
      title: 'GRP Portable Toilets | FRP Toilet Cabins | Executive & Mobile Units',
      description: 'Premium GRP/FRP portable toilets engineered for construction sites, events, public use, and commercial facilities. Waterless, mobile, and executive options available.',
    },
    [ProductCategory.ENCLOSURE]: {
      title: 'GRP Electrical Enclosures | HT/LT, Solar, Telecom & Metering Boxes',
      description: 'Industrial-grade GRP/FRP enclosures designed for weatherproof performance in power, utility, solar, telecom, and infrastructure projects.',
    },
    [ProductCategory.CABIN]: {
      title: 'GRP Security Cabins | FRP Guard Rooms & Portable Booths',
      description: 'Anti-vandal GRP security cabins for malls, construction sites, factories, and gated communities.',
    },
    [ProductCategory.KIOSK]: {
      title: 'GRP Food Kiosks | Portable Food Cabins & Retail Units',
      description: 'Durable, hygienic GRP kiosks ideal for F&B outlets, retail pop-ups, and outdoor commercial use.',
    },
    [ProductCategory.POD_SHELTER]: {
      title: 'Modular Pods & Shelters | GRP Sleeping Pods & Bus Shelters',
      description: 'Maintenance-free GRP pods and shelters for tourism, urban mobility, and remote site offices.',
    },
    [ProductCategory.CUSTOM]: {
      title: 'Custom GRP Fabrication | Bespoke FRP Engineering',
      description: 'Custom-designed GRP solutions for specialized industrial needs including radomes, tanks, and structural profiles.',
    }
  }
};

// Helper to update or create a meta tag
const updateMetaTag = (identifier: string, value: string, isProperty: boolean) => {
  const attr = isProperty ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${identifier}"]`) as HTMLMetaElement;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, identifier);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Initialize based on window width to avoid FOUC/Layout shifts
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const location = useLocation();

  // Zustand Store
  const items = useRFQStore((state) => state.items);

  const { pathname } = location;

  // Robust Mobile Check to prevent double rendering
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Note: Initial check already done in useState, but we keep listener for resizes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SEO Management Hook for Titles, Descriptions, Canonicals, and Social Tags
  useEffect(() => {
    const handleMetadata = () => {
      let title = "EMPHZ – GRP/FRP Manufacturer";
      let description = "High-performance GRP solutions, engineered to outperform steel in corrosive and harsh industrial environments.";
      let ogImage = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80";
      let ogType = "website";

      const pathParts = pathname.split('/').filter(Boolean);

      if (pathname.startsWith('/products/')) {
        const productId = pathParts[1];
        const product = MOCK_PRODUCTS.find(p => p.id === productId);
        if (product) {
          const categorySeo = SEO_DATA.productsByCategory[product.category as keyof typeof SEO_DATA.productsByCategory];
          if (categorySeo) {
            title = categorySeo.title;
            description = categorySeo.description;
          } else {
            title = `${product.name} | ${product.category} | EMPHZ`;
            description = product.shortDescription;
          }
          ogImage = product.imageUrl;
          ogType = "product";
        }
      } else if (pathname.startsWith('/blog/')) {
        const slug = pathParts[1];
        const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
        if (post) {
          title = `${post.title} | Emphz Blog`;
          description = post.summary;
          ogImage = post.imageUrl;
          ogType = "article";
        }
      }
      else {
        const pageSeo = SEO_DATA[pathname as keyof typeof SEO_DATA];
        if (pageSeo && 'title' in pageSeo) {
          title = pageSeo.title;
          description = pageSeo.description;
          ogType = pathname === '/' ? 'website' : 'article';
        }
      }

      document.title = title;

      // Standard Meta
      updateMetaTag('description', description, false);

      // OpenGraph Meta
      updateMetaTag('og:title', title, true);
      updateMetaTag('og:description', description, true);
      updateMetaTag('og:image', ogImage, true);
      updateMetaTag('og:url', window.location.href, true);
      updateMetaTag('og:type', ogType, true);

      // Twitter Card Meta
      updateMetaTag('twitter:title', title, false);
      updateMetaTag('twitter:description', description, false);
      updateMetaTag('twitter:image', ogImage, false);

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', window.location.href);
    };

    handleMetadata();
  }, [pathname]);

  const breadcrumbs = useMemo(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) return [];

    const crumbs = [];
    let currentPath = '';

    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];
      currentPath += `/${part}`;
      let name = part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      // Specific override for product detail page to inject category
      if (pathParts[0] === 'products' && i === 1) {
        const product = MOCK_PRODUCTS.find(p => p.id === part);
        if (product) {
          crumbs.push({
            name: product.category,
            path: '/products', // Link back to the main catalog page
            isCurrent: false,
          });
          name = product.name; // Update the name for the final product crumb
        }
      }

      crumbs.push({
        name,
        path: currentPath,
        isCurrent: i === pathParts.length - 1,
      });
    }

    return [{ name: 'Home', path: '/', isCurrent: false }, ...crumbs];
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      }

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#0B1120');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, scrolled]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const isHeaderTransparent = isHome && !scrolled && !isMenuOpen;

  const headerBaseClass = "fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";
  const headerBgClass = isMenuOpen
    ? 'bg-transparent border-transparent py-4'
    : (isHeaderTransparent
      ? 'bg-transparent border-transparent py-6 md:py-8'
      : 'bg-emphz-navy/95 backdrop-blur-xl border-b border-white/10 py-3 md:py-4 shadow-[0_4px_30px_rgba(30,41,59,0.4)]');

  const navLinkClass = isHeaderTransparent
    ? 'text-white/90 hover:text-white font-medium drop-shadow-sm'
    : 'text-gray-400 font-medium hover:text-white';

  const activeLinkClass = 'text-emphz-teal font-bold drop-shadow-md';

  const iconColorClass = isHeaderTransparent
    ? 'text-white hover:text-emphz-teal drop-shadow-sm'
    : 'text-gray-400 hover:text-emphz-teal';

  const navPillClass = isHeaderTransparent
    ? 'bg-black/10 border border-white/10 backdrop-blur-[2px]'
    : 'bg-transparent border-transparent';

  return (
    <div className="min-h-screen flex flex-col bg-white text-emphz-navy font-sans selection:bg-emphz-teal selection:text-white relative">
      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; 
        }
        .global-noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .skip-link {
          position: absolute;
          top: -100px;
          left: 20px;
          background: #00ADB5;
          color: #0B1120;
          padding: 12px 24px;
          z-index: 100;
          transition: top 0.3s ease;
          font-weight: 700;
          border-radius: 0 0 8px 8px;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .skip-link:focus {
          top: 0;
        }
      `}</style>

      <div className="global-noise"></div>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-emphz-teal shadow-[0_0_10px_#3B82F6]"
          style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>

      <header className="fixed top-4 left-1/2 z-50 w-[94%] -translate-x-1/2 rounded-2xl glass transition-all duration-300">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <div className="font-semibold text-lg text-slate-900 tracking-tight">EMPHZ</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 ${isActive(link.path) ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/rfq" className="relative p-2 text-slate-600 hover:text-slate-900">
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md">
                  {items.length}
                </span>
              )}
            </Link>
            <Link to="/rfq" className="hidden sm:block rounded-xl bg-slate-900 px-6 py-2.5 text-white text-sm font-medium transition-transform hover:scale-105 active:scale-95">
              Get Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full mt-2 rounded-2xl glass transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <nav className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${isActive(link.path) ? 'text-blue-700' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/rfq" onClick={() => setIsMenuOpen(false)} className="mt-4 rounded-xl bg-slate-900 px-6 py-3 text-white text-center font-medium">
              Get Quote
            </Link>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className={`flex-grow relative min-h-[calc(100vh-400px)] ${isHome ? '' : 'pt-24'} transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'blur-sm scale-[0.98] opacity-40 grayscale-[50%]' : ''}`}
        role="main"
        tabIndex={-1}
      >
        {!isHome && breadcrumbs.length > 0 && (
          <div className="w-full bg-gray-50/90 backdrop-blur-md border-b border-gray-200 sticky top-[72px] md:top-[88px] z-30 shadow-sm transition-all duration-300">
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-8 py-4 animate-fade-in">
              <ol className="flex items-center space-x-2 text-xs font-mono tracking-wide">
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.path}-${crumb.name}`} className="flex items-center">
                    {index > 0 && <ChevronRight size={12} className="text-gray-400 mx-2" />}
                    {crumb.isCurrent ? (
                      <span className="text-emphz-navy font-bold truncate px-2 py-0.5 rounded bg-white border border-gray-200 shadow-sm" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="text-gray-500 hover:text-emphz-teal hover:underline transition-colors truncate"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        {children}
      </main>

      <div className={`fixed bottom-6 left-6 z-30 flex flex-col gap-3 transition-all duration-500 ${isMenuOpen ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <a
          href="https://wa.me/919037874080"
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all flex items-center justify-center group relative border-2 border-white/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} fill="white" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none font-sans hidden md:block transform translate-x-2 group-hover:translate-x-0">
            Chat with Engineer
          </span>
        </a>
        <Link
          to="/technical"
          className="bg-white border-2 border-gray-100 text-emphz-navy p-3 md:p-4 rounded-full shadow-lg hover:border-emphz-teal hover:text-emphz-teal hover:scale-110 transition-all flex items-center justify-center group relative"
          aria-label="Technical Specs"
        >
          <FileText size={24} className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none font-sans hidden md:block transform translate-x-2 group-hover:translate-x-0">
            Datasheets
          </span>
        </Link>
      </div>

      <LiveChatWidget />

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <footer className={`bg-emphz-navy text-white pt-20 pb-10 md:pt-28 md:pb-12 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'blur-sm opacity-40' : ''}`} role="contentinfo">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -right-20 top-0 w-[400px] h-[400px] bg-emphz-teal rounded-full blur-[150px] animate-float" style={{ animationDuration: '8s' }}></div>
          <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[120px] animate-float" style={{ animationDuration: '10s' }}></div>
          <div className="absolute inset-0 bg-carbon-fibre opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">
            <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
              <div className="mb-8">
                <Link to="/" aria-label="Emphz Home">
                  <Logo className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" variant="light" />
                </Link>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-2 leading-tight max-w-lg text-white uppercase tracking-wider">
                GRP / FRP Product Manufacturer
              </h3>
              <div className="flex flex-col gap-1 mb-8">
                <p className="text-emphz-teal text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-display">Kerala Managed | Mysuru Manufactured</p>
                <p className="text-gray-400 text-sm font-sans border-l-2 border-white/10 pl-4 mt-2">Serving Infrastructure Projects Across India</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-emphz-teal uppercase tracking-[0.2em] mb-6 font-display">Products</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center group py-1"><ChevronRight size={14} className="mr-2 text-emphz-teal" /> Enclosures</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center group py-1"><ChevronRight size={14} className="mr-2 text-emphz-teal" /> Cabins & Guard Rooms</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center group py-1"><ChevronRight size={14} className="mr-2 text-emphz-teal" /> Modular Kiosks</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center group py-1"><ChevronRight size={14} className="mr-2 text-emphz-teal" /> Portable Toilets</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center group py-1"><ChevronRight size={14} className="mr-2 text-emphz-teal" /> Pods & Shelters</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-emphz-teal uppercase tracking-[0.2em] mb-6 font-display">Connect</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li className="flex items-start group py-1">
                  <MapPin size={18} className="mr-3 mt-0.5 text-emphz-navy bg-gray-200 rounded-full p-0.5 group-hover:bg-white transition-colors flex-shrink-0" />
                  <span>Mysore Factory <br /><span className="text-xs text-gray-500">KIADB Industrial Area</span></span>
                </li>
                <li className="flex items-start group py-1">
                  <MapPin size={18} className="mr-3 mt-0.5 text-emphz-teal bg-white/10 rounded-full p-0.5 group-hover:bg-white transition-colors flex-shrink-0" />
                  <span>Kerala Ops <br /><span className="text-xs text-gray-500">Vadakara HQ</span></span>
                </li>
                <li className="flex items-center group hover:text-white transition-colors py-1"><Phone size={16} className="mr-3 text-gray-500 group-hover:text-emphz-teal" /> +91 9037 874 080</li>
                <li className="flex items-center group hover:text-white transition-colors py-1"><Mail size={16} className="mr-3 text-gray-500 group-hover:text-emphz-teal" /> info@emphz.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-6">
            <p>&copy; 2025 Emphz Engineering Pvt Ltd. Factory Hub: Mysuru, Karnataka.</p>
            <div className="flex space-x-8 font-bold uppercase tracking-widest text-[10px]">
              <Link to="#" className="hover:text-emphz-teal transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-emphz-teal transition-colors">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-emphz-teal transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}