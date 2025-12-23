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

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-industrial-900 group-hover:text-accent-blue transition-colors">EMPHZ</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-500 font-medium">Composite Engineering</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 relative group py-2 
                  ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600 hover:text-industrial-900'}`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-blue animate-in fade-in" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link to="/rfq" className="relative p-2 text-industrial-500 hover:text-accent-blue transition-colors">
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-accent-blue text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>
            <Link to="/rfq" className="hidden sm:block btn-industrial px-6 py-2 text-sm">
              Request Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-industrial-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-industrial-100 transition-all duration-300 origin-top shadow-xl ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <nav className="flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/rfq" onClick={() => setIsMenuOpen(false)} className="btn-industrial py-4 text-center text-lg mt-2">
              Request Quote
            </Link>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className={`flex-grow relative ${isHome ? '' : 'pt-24'} transition-all duration-500 ${isMenuOpen ? 'blur-sm opacity-50' : ''}`}
        role="main"
        tabIndex={-1}
      >
        {!isHome && breadcrumbs.length > 0 && (
          <div className="w-full bg-industrial-50/80 backdrop-blur-sm border-b border-industrial-100 sticky top-16 z-30">
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-8 py-3">
              <ol className="flex items-center space-x-2 text-[11px] text-industrial-400 font-medium uppercase tracking-widest">
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.path}-${crumb.name}`} className="flex items-center">
                    {index > 0 && <ChevronRight size={10} className="mx-2 opacity-50" />}
                    {crumb.isCurrent ? (
                      <span className="text-industrial-900" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link to={crumb.path} className="hover:text-accent-blue transition-colors">
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

      <div className={`fixed bottom-8 right-8 z-30 flex flex-col gap-4 transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <a
          href="https://wa.me/919037874080"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-industrial-900 p-4 rounded-full shadow-subtle hover:text-accent-blue transition-all group relative border border-industrial-100"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          <span className="absolute right-full mr-4 bg-industrial-900 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none hidden md:block">
            Consult Engineer
          </span>
        </a>
      </div>

      {/* CommandPalette removed from direct layout to keep clean - can be triggered via keybind */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <footer className="footer bg-industrial-900 text-industrial-300 py-16 md:py-24 border-t border-industrial-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                <Link to="/" className="flex flex-col">
                  <span className="font-bold text-2xl text-white tracking-tight">EMPHZ</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-industrial-500">Corporate HQ</span>
                </Link>
              </div>
              <p className="text-industrial-400 text-sm leading-relaxed max-w-sm mb-8">
                Specialized manufacturers of GRP/FRP solutions for industrial infrastructure.
                Engineering-led designs built for extreme durability and environmental resilience.
              </p>
              <div className="flex flex-col gap-2 p-4 border border-industrial-800 rounded-sm bg-industrial-800/20 max-w-fit">
                <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-500 font-bold">Trusted Production</span>
                <span className="text-xs font-medium text-industrial-200">Kerala Managed | Mysuru Manufactured</span>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8">Solutions</h4>
              <nav className="flex flex-col gap-4 text-sm">
                <Link to="/products" className="hover:text-white transition-colors">Industrial Enclosures</Link>
                <Link to="/products" className="hover:text-white transition-colors">Portable Security Cabins</Link>
                <Link to="/products" className="hover:text-white transition-colors">Modular Food Kiosks</Link>
                <Link to="/products" className="hover:text-white transition-colors">Sanitary GRP Units</Link>
                <Link to="/products" className="hover:text-white transition-colors">Bespoke GRP Pods</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8">Global Outreach</h4>
              <div className="flex flex-col gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-industrial-500 mt-1 flex-shrink-0" />
                  <p>
                    <span className="text-industrial-200 block font-medium">Production Hub</span>
                    KIADB Industrial Area, Mysuru, Karnataka
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-industrial-500 flex-shrink-0" />
                  <span>+91 9037 874 080</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-industrial-500 flex-shrink-0" />
                  <span>info@emphz.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-industrial-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium uppercase tracking-[0.1em] text-industrial-500">
            <p>&copy; 2025 Emphz Engineering Private Limited. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="/sitemap" className="hover:text-industrial-300 transition-colors">Sitemap</Link>
              <Link to="#" className="hover:text-industrial-300 transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-industrial-300 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
    </div >
  );
}