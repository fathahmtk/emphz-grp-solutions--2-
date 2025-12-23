import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';
import { NAV_LINKS, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import CommandPalette from './CommandPalette';
import { ProductCategory } from '../types';

interface LayoutProps {
  children?: React.ReactNode;
}

const SEO_DATA = {
  '/': {
    title: 'EMPHZ – GRP/FRP Enclosures, Portable Toilets, Kiosks & Shelters | Composite Engineering',
    description: 'EMPHZ specializes in high-durability GRP/FRP enclosures, portable toilets, security cabins, food kiosks, and bus shelters for industrial and public-sector applications.',
  },
  '/about': {
    title: 'About EMPHZ | Leading GRP/FRP Manufacturer',
    description: 'Discover EMPHZ — a composite engineering company delivering premium GRP/FRP enclosures, kiosks, shelters, and prefab structures built for long-term durability.',
  },
  '/products': {
    title: 'GRP/FRP Product Catalog | Enclosures, Cabins, Shelters & More | EMPHZ',
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
    [ProductCategory.SHELTER]: {
      title: 'Infrastructure Shelters | GRP Bus Shelters & Urban Mobility Units',
      description: 'Maintenance-free GRP shelters for public transport, urban mobility, and remote site protection.',
    },
    [ProductCategory.URBANCELL]: {
      title: 'UrbanCell™ Infrastructure | Modular Smart City Solutions | EMPHZ',
      description: 'Modular GRP infrastructure for smart cities: Retail hubs, automated banking services, solar energy stations, and cold chain storage units.',
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
  const location = useLocation();
  // Zustand Store
  const items = useRFQStore((state: any) => state.items);
  const { pathname } = location;

  // Robust Mobile Check to prevent double rendering
  useEffect(() => {
    // Note: Initial check already done in useState, but we keep listener for resizes
    const checkMobile = () => {
      // Logic for mobile check if needed
    };
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
      let name = part.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

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
        setIsSearchOpen((prev: boolean) => !prev);
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

      {/* Mesh Gradient Background */}
      <div className="mesh-bg fixed inset-0 pointer-events-none">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
      </div>

      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
        <div
          className="h-full bg-emphz-teal shadow-[0_0_10px_#3B82F6]"
          style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
        />
      </div>

      <header className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 pointer-events-none flex justify-center px-4 md:px-4`}>
        <div className={`nav-island pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between
          ${scrolled ? 'w-full max-w-5xl py-2 px-4 md:px-6 bg-white/95 shadow-2xl' : 'w-full max-w-7xl py-3 md:py-4 px-4 md:px-8 bg-white/80'}
          `}>

          <Link to="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="EMPHZ Logo"
              className={`h-12 md:h-16 w-auto transition-all duration-500 ease-out group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation - Minimalist */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200
                  ${isActive(link.path)
                    ? 'text-industrial-900'
                    : 'text-industrial-600 hover:text-industrial-900'}`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/rfq" className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-industrial-500 hover:text-accent-blue transition-colors tap-target">
              <span className="hidden lg:inline">Cart</span>
              <div className="relative">
                <ShoppingCart size={18} />
                {items.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 bg-accent-blue text-white text-[8px] font-bold flex items-center justify-center rounded-full shadow-glow">
                    {items.length}
                  </span>
                )}
              </div>
            </Link>

            <Link to="/rfq" className="hidden sm:flex btn-industrial px-6 py-3 text-sm rounded shadow-lg hover:shadow-xl transition-all">
              Get Quote
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 text-industrial-900 bg-industrial-100 rounded-full tap-target touch-ripple active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`mobile-backdrop md:hidden ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-industrial-100 transition-all duration-300 origin-top shadow-xl safe-area-inset-bottom ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <nav className="flex flex-col p-6 md:p-8 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-display font-medium py-2 tap-target transition-colors ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600 active:text-accent-blue'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/rfq" onClick={() => setIsMenuOpen(false)} className="btn-industrial py-4 text-center text-base mt-2 touch-ripple">
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
                {breadcrumbs.map((crumb: any, index: number) => (
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

      <footer className="bg-white border-t border-industrial-100 py-16 md:py-24" role="contentinfo">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-8">
                <img
                  src="/logo.png"
                  alt="EMPHZ"
                  className="h-12 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </Link>
              <p className="text-industrial-500 text-base leading-relaxed max-w-md mb-8">
                Specialized GRP manufacturer delivering high-durability enclosures and modular structures. Engineering-led designs built for extreme environmental resilience.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-industrial-50 rounded text-xs font-semibold text-industrial-600 uppercase tracking-wider">
                Kerala Managed | Mysuru Manufactured
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Solutions</h4>
              <nav className="flex flex-col gap-4">
                {['Industrial Enclosures', 'Security Cabins', 'Modular Kiosks', 'Sanitary Units', 'Infrastructure'].map((item) => (
                  <Link key={item} to="/products" className="text-industrial-500 hover:text-industrial-900 transition-colors text-sm">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Get in Touch</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={18} className="text-industrial-300 flex-shrink-0" />
                  <p className="text-sm text-industrial-500">
                    <span className="text-industrial-900 font-medium block mb-1">Production Hub</span>
                    KIADB Industrial Area, Mysuru, Karnataka
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-industrial-300 flex-shrink-0" />
                  <span className="text-sm text-industrial-500">+91 9037 874 080</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-industrial-300 flex-shrink-0" />
                  <span className="text-sm text-industrial-500">info@emphz.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-industrial-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-industrial-400">
              &copy; {new Date().getFullYear()} Emphz Engineering Private Limited.
            </p>
            <div className="flex gap-8">
              <Link to="/sitemap" className="text-xs text-industrial-400 hover:text-industrial-900 transition-colors">Sitemap</Link>
              <Link to="#" className="text-xs text-industrial-400 hover:text-industrial-900 transition-colors">Privacy</Link>
              <Link to="#" className="text-xs text-industrial-400 hover:text-industrial-900 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}