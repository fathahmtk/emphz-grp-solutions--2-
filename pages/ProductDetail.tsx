import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, FileText, Plus, Minus, ArrowLeft, Package, Settings, Download, Box, Image as ImageIcon, Loader2, Share2, CheckCircle, ChevronLeft, ChevronRight, Maximize, X, ZoomIn, ZoomOut, RotateCcw, Linkedin, Twitter, Mail, Link as LinkIcon, Copy, MessageCircle, Flame, Layers, ShieldCheck, Award, Info, AlertTriangle, Lightbulb } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import { ProductCategory, ProductConfiguration } from '../types';
import GatedDownloadModal from '../components/GatedDownloadModal';

// Lazy load the heavy 3D viewer component
const ThreeProductViewer = React.lazy(() => import('../components/ThreeProductViewer'));

// Share Modal Component
const ShareModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  productUrl: string;
  productName: string;
}> = ({ isOpen, onClose, productUrl, productName }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(productUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(productUrl);
  const encodedText = encodeURIComponent(`Check out ${productName} by Emphz`);

  const shareLinks = [
    { name: 'WhatsApp', icon: <MessageCircle size={24} />, url: `https://wa.me/?text=${encodedText}%20${encodedUrl}`, color: 'bg-[#25D366]' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, color: 'bg-[#0077b5]' },
    { name: 'Twitter', icon: <Twitter size={24} />, url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, color: 'bg-[#1DA1F2]' },
    { name: 'Email', icon: <Mail size={24} />, url: `mailto:?subject=${encodedText}&body=I found this interesting product: ${encodedUrl}`, color: 'bg-gray-600' },
  ];

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-sm p-8 relative shadow-2xl border border-gray-100 transform transition-all scale-100"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-emphz-navy transition-colors p-2 rounded-full hover:bg-gray-100">
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-emphz-navy mb-2 font-display">Share Product</h3>
          <p className="text-xs text-gray-500 font-sans">Share {productName} with your network.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group"
            >
              <div className={`${link.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                {link.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide group-hover:text-emphz-navy transition-colors">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-2 pl-4 flex items-center gap-3">
          <LinkIcon size={16} className="text-gray-400 flex-shrink-0" />
          <div className="flex-1 overflow-hidden relative h-5">
            <div className="absolute inset-0 flex items-center text-xs text-gray-600 font-mono truncate select-all">
              {productUrl}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${copied ? 'bg-green-500 text-white border border-green-500' : 'bg-white border border-gray-200 text-emphz-navy hover:border-emphz-teal'}`}
          >
            {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const H1_MAP: Record<ProductCategory, string> = {
  [ProductCategory.PORTABLE_TOILET]: 'GRP Portable Toilets (Factory Built)',
  [ProductCategory.ENCLOSURE]: 'GRP Electrical Enclosures (IP66 Rated)',
  [ProductCategory.CABIN]: 'Security Cabins & Guard Rooms',
  [ProductCategory.KIOSK]: 'Modular Kiosks & Retail Units',
  [ProductCategory.POD_SHELTER]: 'Modular GRP Pods & Bus Shelters',
  [ProductCategory.CUSTOM]: 'Custom GRP / FRP Fabrication',
};


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  // Using Zustand Store
  const addItem = useRFQStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'downloads'>('desc');
  const [viewMode, setViewMode] = useState<'3D' | 'IMAGE'>('IMAGE');
  const [activeImage, setActiveImage] = useState<string>('');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [fileToDownload, setFileToDownload] = useState<{ title: string; type: string } | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [productConfig, setProductConfig] = useState<ProductConfiguration>({ color: '#dddddd', finish: 'Glossy' });

  // Zoom & Pan State
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom when image changes or lightbox toggles
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [activeImage, isLightboxOpen]);

  // Inject JSON-LD Schema for SEO
  useEffect(() => {
    if (product) {
      const scriptId = 'json-ld-product';
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.imageUrl,
        "description": product.fullDescription,
        "sku": product.id,
        "mpn": product.id, // Manufacturer Part Number
        "brand": {
          "@type": "Brand",
          "name": "Emphz"
        },
        "category": product.category,
        "offers": {
          "@type": "Offer",
          "url": window.location.href,
          "priceCurrency": "INR", // Specify currency even without a price
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        },
      };

      script.textContent = JSON.stringify(schema);

      return () => {
        const el = document.getElementById(scriptId);
        if (el) el.remove();
      };
    }
  }, [product]);

  const is3DAvailable = useMemo(() => {
    if (!product) return false;
    return [
      ProductCategory.POD_SHELTER,
      ProductCategory.ENCLOSURE,
      ProductCategory.KIOSK,
      ProductCategory.CABIN
    ].includes(product.category);
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    const others = MOCK_PRODUCTS.filter(p => p.category !== product.category && p.id !== product.id);
    return [...sameCategory, ...others].slice(0, 3);
  }, [product]);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    return (product.gallery && product.gallery.length > 0)
      ? product.gallery
      : [
        product.imageUrl,
        `https://picsum.photos/seed/${product.id}-detail1/800/600`,
        `https://picsum.photos/seed/${product.id}-detail2/800/600`,
        `https://picsum.photos/seed/${product.id}-detail3/800/600`,
        `https://picsum.photos/seed/${product.id}-detail4/800/600`,
      ];
  }, [product]);

  useEffect(() => {
    if (product) {
      setActiveImage(product.imageUrl);
      setViewMode(is3DAvailable ? '3D' : 'IMAGE');
      window.scrollTo(0, 0);
    }
  }, [product, is3DAvailable]);

  const activeIndex = galleryImages.indexOf(activeImage) !== -1 ? galleryImages.indexOf(activeImage) : 0;

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIndex = (activeIndex + 1) % galleryImages.length;
    setActiveImage(galleryImages[nextIndex]);
    setViewMode('IMAGE');
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    setActiveImage(galleryImages[prevIndex]);
    setViewMode('IMAGE');
  };

  // Zoom Handlers
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setZoomLevel(prev => {
    const newZoom = Math.max(prev - 0.5, 1);
    if (newZoom === 1) setPanPosition({ x: 0, y: 0 });
    return newZoom;
  });
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleDragEnd = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    // Enable simple scroll zooming
    if (Math.abs(e.deltaY) > 0) {
      const delta = -e.deltaY * 0.001;
      const newZoom = Math.min(Math.max(1, zoomLevel + delta), 5);
      setZoomLevel(newZoom);
      if (newZoom === 1) setPanPosition({ x: 0, y: 0 });
    }
  };

  if (!product) {
    return <div className="p-20 text-center text-slate-800">Product not found. <Link to="/products" className="text-emphz-teal font-bold">Go back</Link></div>;
  }

  const handleAddToRFQ = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity,
      image: product.imageUrl,
      modelUrl: product.modelUrl,
      configuration: productConfig
    });
    // Trigger visual feedback instead of blocking alert
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleDownloadClick = (file: { title: string; type: string }) => {
    setFileToDownload(file);
    setIsDownloadModalOpen(true);
  };

  const get3DType = () => {
    if (product.category === ProductCategory.ENCLOSURE) return 'ENCLOSURE';
    if (product.category === ProductCategory.KIOSK) return 'KIOSK';
    if (product.category === ProductCategory.CABIN) return 'CABIN';
    if (product.category === ProductCategory.POD_SHELTER) return 'SMART_CABIN';
    return 'DEFAULT';
  };

  const specIcons: { [key: string]: React.ReactElement } = {
    'ip rating': <ShieldCheck size={16} className="text-emphz-teal" />,
    'ik rating': <ShieldCheck size={16} className="text-emphz-teal" />,
    'fire rating': <Flame size={16} className="text-red-500" />,
    'dimensions': <Maximize size={16} className="text-blue-500" />,
    'material': <Layers size={16} className="text-gray-500" />,
    'structure': <Layers size={16} className="text-gray-500" />,
    'certification': <Award size={16} className="text-yellow-500" />,
    'process': <Settings size={16} className="text-gray-500" />,
  };

  return (
    <>
      <div className="bg-white min-h-screen text-slate-900 pb-24">
        {/* Hero for Product - Keep Dark for Impact */}
        <div className="relative h-[500px] lg:h-[700px] bg-[#050A14] overflow-hidden group">

          <div className="absolute top-24 right-4 md:right-8 z-30 flex flex-col gap-3">
            {is3DAvailable && (
              <button
                onClick={() => setViewMode(prev => prev === '3D' ? 'IMAGE' : '3D')}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-emphz-teal hover:border-emphz-teal transition-all shadow-xl flex items-center justify-center gap-2 group/toggle uppercase tracking-wide"
                title="Toggle 3D/Photo"
              >
                {viewMode === '3D' ? (
                  <>
                    <ImageIcon size={16} className="group-hover/toggle:scale-110 transition-transform" />
                    <span>Photos</span>
                  </>
                ) : (
                  <>
                    <Box size={16} className="group-hover/toggle:scale-110 transition-transform" />
                    <span>3D Model</span>
                  </>
                )}
              </button>
            )}
            <button onClick={() => setIsLightboxOpen(true)} className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-2.5 rounded-full hover:bg-white/20 transition-all shadow-lg" title="Fullscreen">
              <Maximize size={18} />
            </button>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-2.5 rounded-full hover:bg-white/20 transition-all shadow-lg"
              title="Share"
            >
              <Share2 size={18} />
            </button>
          </div>

          {viewMode === 'IMAGE' ? (
            <>
              <div
                className="absolute inset-0 transition-opacity duration-500 bg-[#0B1120] cursor-zoom-in animate-fade-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img src={activeImage} alt={product.name} className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" key={activeImage} loading="eager" decoding="async" />
              </div>

              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 z-30 group/nav"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={32} className="group-hover/nav:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 z-30 group/nav"
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} className="group-hover/nav:translate-x-1 transition-transform" />
                  </button>
                </>
              )}

              {/* Improved Gradients for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-[#050A14]/30 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050A14]/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Thumbnail Navigator Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-30 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x snap-mandatory">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setActiveImage(img); setViewMode('IMAGE'); }}
                        className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 group bg-gray-900 snap-center ${activeImage === img
                          ? 'border-emphz-teal ring-2 ring-emphz-teal/30 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/50'
                          }`}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-full absolute inset-0 z-10 animate-fade-in bg-[#0B1120]">
              <Suspense fallback={
                <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(0,173,181,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,173,181,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-emphz-teal/10 blur-3xl rounded-full"></div>
                      <Loader2 className="w-12 h-12 text-emphz-teal animate-spin relative z-10" />
                    </div>
                    <span className="text-white font-bold text-xs tracking-[0.3em] font-display animate-pulse">CONNECTING 3D ENGINE...</span>
                    <span className="text-gray-500 font-mono text-[10px] mt-2">Loading Geometry & Textures</span>
                  </div>
                </div>
              }>
                <ThreeProductViewer
                  productType={get3DType()}
                  annotations={product.annotations}
                  modelUrl={product.modelUrl}
                  config={productConfig}
                />
              </Suspense>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent pointer-events-none"></div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-16 z-20 pointer-events-none">
            <div className="max-w-7xl mx-auto pointer-events-auto">
              <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors text-xs font-bold uppercase tracking-[0.2em]">
                <ArrowLeft size={14} className="mr-2" aria-hidden="true" /> Catalog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-block px-3 py-1 bg-emphz-teal text-emphz-navy text-[10px] font-bold rounded uppercase tracking-wider shadow-lg shadow-emphz-teal/30 font-display">
                  {product.name}
                </div>
                {product.features.includes('UL94 Fire Rated') && (
                  <div className="inline-block px-3 py-1 bg-red-600/80 backdrop-blur text-white text-[10px] font-bold rounded uppercase tracking-wider font-display">
                    UL 94 V-0
                  </div>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-none drop-shadow-2xl font-display">{H1_MAP[product.category] || product.name}</h1>
              <p className="text-gray-400 font-mono text-xs opacity-80 border-l border-emphz-teal pl-3">SKU: {product.id.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {product.specs.slice(0, 4).map((s, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-5 rounded-2xl text-center hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-[9px] text-slate-500 uppercase font-bold mb-2 font-display tracking-widest">{s.label}</div>
                    <div className="text-sm font-bold text-emphz-navy font-mono break-words">{s.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 my-10 p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 shadow-sm justify-between items-center">
                <div>
                  <h4 className="font-bold text-emphz-navy font-display mb-1">Technical Documentation</h4>
                  <p className="text-xs text-gray-500">Official datasheets and CAD drawings.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                  <button onClick={() => handleDownloadClick({ title: product.downloads[0].title, type: 'PDF' })} className="flex-1 sm:flex-none flex items-center bg-emphz-navy text-white px-5 py-3 rounded-xl font-bold text-xs hover:bg-emphz-teal transition-all duration-300 shadow-lg shadow-emphz-navy/20 font-display tracking-wide uppercase">
                    <Download size={14} className="mr-2" /> PDF
                  </button>
                  <button onClick={() => handleDownloadClick({ title: "Engineer's Pack", type: 'ZIP' })} className="flex-1 sm:flex-none flex items-center bg-white border border-gray-200 text-emphz-navy px-5 py-3 rounded-xl font-bold text-xs hover:border-emphz-navy transition-all duration-300 font-display tracking-wide uppercase">
                    <Package size={14} className="mr-2" /> ZIP
                  </button>
                </div>
              </div>

              <div className="mb-8 border-b border-gray-200">
                <div className="flex space-x-2" role="tablist" aria-label="Product Information">
                  {['desc', 'specs', 'downloads'].map((tab) => (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={activeTab === tab}
                      aria-controls={`panel-${tab}`}
                      id={`tab-${tab}`}
                      onClick={() => setActiveTab(tab as 'desc' | 'specs' | 'downloads')}
                      className={`relative py-4 px-6 text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emphz-teal font-display ${activeTab === tab
                        ? 'border-b-2 border-emphz-navy text-emphz-navy'
                        : 'text-gray-400 hover:text-emphz-navy border-b-2 border-transparent'
                        }`}
                    >
                      {tab === 'desc' ? 'Overview' : tab === 'specs' ? 'Specifications' : 'Downloads'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-[300px]">
                {activeTab === 'desc' && (
                  <div key="desc" role="tabpanel" id="panel-desc" aria-labelledby="tab-desc" className="space-y-8 animate-fade-in">
                    <div className="prose prose-slate max-w-none">
                      <p className="text-lg text-slate-600 leading-relaxed font-sans font-light">{product.fullDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-emphz-navy mb-5 font-display">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feat, i) => (
                          <div key={i} className="flex items-start p-4 rounded-xl bg-gray-50 border border-gray-100/50 hover:border-gray-200 transition-colors">
                            <CheckCircle className="w-5 h-5 text-emphz-teal mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {product.whyItExists && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Lightbulb className="text-blue-600" size={20} />
                          <h4 className="font-bold text-blue-900 font-display uppercase tracking-wider text-xs">Operational Context</h4>
                        </div>
                        <p className="text-blue-800 text-sm italic font-medium">"{product.whyItExists}"</p>
                      </div>
                    )}

                    {product.typicalUsage && (
                      <div className="my-8">
                        <h3 className="text-lg font-bold text-emphz-navy mb-4 font-display">Typical Site Usage</h3>
                        <p className="text-slate-600 border-l-2 border-gray-200 pl-4 py-1 italic">{product.typicalUsage}</p>
                      </div>
                    )}

                    {(product.recommendedWhen || product.notRecommendedWhen) && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                        {product.recommendedWhen && (
                          <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl">
                            <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider font-display">
                              <CheckCircle size={18} className="text-green-600" /> Recommended When
                            </h4>
                            <ul className="space-y-3">
                              {product.recommendedWhen.map((item, idx) => (
                                <li key={idx} className="flex gap-2 text-xs text-green-800 font-medium">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {product.notRecommendedWhen && (
                          <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                            <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider font-display">
                              <AlertTriangle size={18} className="text-red-600" /> Not Recommended When
                            </h4>
                            <ul className="space-y-3">
                              {product.notRecommendedWhen.map((item, idx) => (
                                <li key={idx} className="flex gap-2 text-xs text-red-800 font-medium">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {product.accessories && (
                      <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emphz-teal/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center mb-5">
                            <Settings className="text-emphz-teal mr-3" size={20} aria-hidden="true" />
                            <h3 className="font-bold font-display uppercase tracking-widest text-sm">Compatible Accessories</h3>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {product.accessories.map((acc, i) => (
                              <span key={i} className="inline-flex items-center text-xs font-bold text-white bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/20 transition-colors font-mono">
                                <Plus size={12} className="text-emphz-teal mr-2" aria-hidden="true" /> {acc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div key="specs" role="tabpanel" id="panel-specs" aria-labelledby="tab-specs" className="rounded-2xl overflow-hidden border border-gray-200 animate-fade-in shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-left text-[10px] font-black text-gray-500 uppercase tracking-widest font-display">Property</th>
                          <th className="px-6 py-4 text-left text-[10px] font-black text-gray-500 uppercase tracking-widest font-display">Value / Standard</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {product.specs.map((spec, i) => (
                          <tr key={i} className={`hover:bg-blue-50/20 transition-colors ${i % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'}`}>
                            <td className="px-6 py-5 whitespace-nowrap text-xs font-bold text-slate-500 w-1/3 font-display uppercase tracking-wider border-r border-gray-100 flex items-center gap-3">
                              {specIcons[spec.label.toLowerCase()] || <div className="w-4 h-4" /> /* Placeholder for alignment */}
                              {spec.label}
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-sm text-emphz-navy font-mono font-medium">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
                      <p className="text-[10px] text-gray-400 font-mono">* All specifications subject to manufacturing tolerances.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'downloads' && (
                  <div key="downloads" role="tabpanel" id="panel-downloads" aria-labelledby="tab-downloads" className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.downloads.map((dl, i) => (
                        <button key={i} onClick={() => handleDownloadClick(dl)} className="text-left border border-gray-200 bg-white rounded-2xl p-6 flex items-start hover:border-emphz-teal hover:shadow-xl hover:shadow-gray-200/50 transition-all cursor-pointer group">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emphz-teal/10 transition-colors">
                            <FileText className="text-gray-400 group-hover:text-emphz-teal w-6 h-6 transition-colors" aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="font-bold text-emphz-navy text-sm font-display mb-1">{dl.title}</h4>
                            <p className="text-xs text-gray-400 font-mono flex items-center">{dl.type} <span className="mx-2">•</span> 2.4 MB</p>
                          </div>
                          <Download size={18} className="ml-auto text-gray-300 group-hover:text-emphz-teal transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Sticky Panel */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="bg-white p-8 rounded-3xl sticky top-28 border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-xs font-bold text-gray-400 uppercase mb-6 tracking-[0.2em] font-display">Configure & Quote</h3>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="text-3xl font-black text-emphz-navy font-display tracking-tight">RFQ</div>
                  <div className="text-green-600 text-[10px] font-bold flex items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-100 font-mono uppercase tracking-wide">
                    <Check size={10} className="mr-1" /> Available
                  </div>
                </div>

                {is3DAvailable && (
                  <div className="mb-8 border-b border-gray-100 pb-8">
                    <h4 className="text-[10px] text-gray-400 font-bold uppercase mb-4 block font-display tracking-wider">Configuration</h4>

                    {/* Color Picker */}
                    <div className="mb-4">
                      <label className="text-[9px] text-slate-500 font-bold uppercase block mb-2 font-mono">Panel Color</label>
                      <div className="flex flex-wrap gap-2">
                        {['#dddddd', '#1a1a1a', '#00ADB5', '#FF5733', '#33FF57'].map((col) => (
                          <button
                            key={col}
                            onClick={() => setProductConfig({ ...productConfig, color: col })}
                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${productConfig.color === col ? 'border-emphz-navy scale-110 ring-2 ring-offset-2 ring-emphz-navy/20' : 'border-gray-200'}`}
                            style={{ backgroundColor: col }}
                            title={col}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Finish Selector */}
                    <div>
                      <label className="text-[9px] text-slate-500 font-bold uppercase block mb-2 font-mono">Surface Finish</label>
                      <div className="flex gap-2">
                        {(['Glossy', 'Matte', 'Textured'] as const).map((finish) => (
                          <button
                            key={finish}
                            onClick={() => setProductConfig({ ...productConfig, finish })}
                            className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded border transition-colors ${productConfig.finish === finish ? 'bg-emphz-navy text-white border-emphz-navy' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}
                          >
                            {finish}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase mb-3 block font-display tracking-wider">Select Quantity</label>
                    <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 p-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-4 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} aria-hidden="true" />
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={quantity}
                        className="flex-1 bg-transparent text-center text-emphz-navy font-bold focus:outline-none font-mono text-lg"
                        aria-label="Quantity"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-4 hover:bg-white hover:shadow-sm rounded-lg text-slate-600 transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-center">
                    <p className="text-[10px] text-slate-500 font-mono mb-2">{'Bulk pricing applies for orders > 50 units.'}</p>
                  </div>

                  <button
                    onClick={handleAddToRFQ}
                    disabled={isAdded}
                    className={`w-full font-black py-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-widest font-display transform flex items-center justify-center gap-2 ${isAdded
                      ? 'bg-green-500 text-white shadow-green-500/20 scale-100'
                      : 'bg-emphz-navy text-white hover:bg-emphz-teal hover:shadow-emphz-teal/40 hover:-translate-y-1'
                      }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle size={18} /> ADDED TO MANIFEST
                      </>
                    ) : (
                      'ADD TO QUOTE LIST'
                    )}
                  </button>

                  <button
                    onClick={() => handleDownloadClick({ title: product.downloads[0].title, type: product.downloads[0].type })}
                    className="w-full border-2 border-gray-100 text-gray-500 font-bold py-3.5 rounded-xl hover:border-emphz-teal hover:text-emphz-teal transition-all text-xs uppercase tracking-widest flex items-center justify-center group font-display bg-transparent hover:bg-white"
                  >
                    <Download size={14} className="mr-2 group-hover:scale-110 transition-transform" /> Datasheet
                  </button>

                  <p className="text-[10px] text-gray-400 text-center font-mono leading-relaxed">
                    Need custom specs? Use the <Link to="/technical" className="text-emphz-teal hover:underline">Technical Assistant</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Solutions Section - Cards */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 md:mt-32 border-t border-gray-200 pt-16 animate-fade-in">
              <h3 className="text-2xl font-bold text-emphz-navy mb-10 font-display">Alternative Configurations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map(rp => (
                  <Link key={rp.id} to={`/products/${rp.id}`} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-emphz-teal/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <img src={rp.imageUrl} alt={rp.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-[9px] font-bold text-emphz-navy bg-white/90 backdrop-blur px-2 py-1 rounded-full uppercase tracking-wider shadow-sm font-display">{rp.category}</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bold text-emphz-navy text-lg group-hover:text-emphz-teal transition-colors mb-3 font-display">{rp.name}</h4>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed font-sans flex-grow">{rp.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Mobile Sticky Action Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] lg:hidden z-40 flex items-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="flex-1">
            <div className="text-emphz-navy font-bold text-sm line-clamp-1 font-display">{product.name}</div>
            <div className="text-emphz-teal text-[10px] font-bold font-mono">SKU: {product.id.toUpperCase()}</div>
          </div>
          <button
            onClick={handleAddToRFQ}
            disabled={isAdded}
            className={`font-bold px-8 py-3.5 rounded-xl text-xs transition-colors font-display uppercase tracking-widest shadow-lg ${isAdded
              ? 'bg-green-500 text-white'
              : 'bg-emphz-navy text-white hover:bg-emphz-teal'
              }`}
          >
            {isAdded ? 'ADDED' : 'ADD TO QUOTE'}
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Zoom/Pan */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center overflow-hidden animate-fade-in backdrop-blur-sm">
          {/* Top Right Controls */}
          <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/10">
              <button onClick={handleZoomOut} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Zoom Out"><ZoomOut size={20} /></button>
              <span className="w-12 text-center text-white font-mono text-xs select-none">{Math.round(zoomLevel * 100)}%</span>
              <button onClick={handleZoomIn} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Zoom In"><ZoomIn size={20} /></button>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
              <button onClick={handleResetZoom} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors" title="Reset View"><RotateCcw size={20} /></button>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onWheel={handleWheel}
            style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 rounded-full hover:bg-white/10 transition-colors z-40"
              >
                <ChevronLeft size={48} />
              </button>
            )}

            <img
              src={activeImage}
              className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-100 ease-out origin-center select-none"
              alt="Fullscreen Product"
              draggable={false}
              style={{
                transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`
              }}
            />

            {galleryImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 rounded-full hover:bg-white/10 transition-colors z-40"
              >
                <ChevronRight size={48} />
              </button>
            )}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 z-40 pointer-events-none select-none">
              {activeIndex + 1} / {galleryImages.length}
            </div>

            {zoomLevel === 1 && (
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur pointer-events-none select-none">
                Scroll/Pinch to Zoom • Drag to Pan
              </div>
            )}
          </div>
        </div>
      )}

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        productUrl={window.location.href}
        productName={product.name}
      />

      <GatedDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        fileToDownload={fileToDownload}
      />
    </>
  );
};

export default ProductDetail;