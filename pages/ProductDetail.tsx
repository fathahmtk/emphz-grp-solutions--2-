import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Check,
  FileText,
  Plus,
  Minus,
  ChevronRight,
  ShieldCheck,
  Flame,
  Layers,
  Award,
  Download,
  Settings
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import SEO from '../components/SEO';
import GatedDownloadModal from '../components/GatedDownloadModal';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const addItem = useRFQStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'desc' | 'downloads'>('specs');
  const [activeImage, setActiveImage] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [fileToDownload, setFileToDownload] = useState<{ title: string; type: string } | null>(null);

  useEffect(() => {
    if (product) {
      setActiveImage(product.imageUrl);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-industrial-50">
        <SEO title="Product Not Found" description="The requested GRP product could not be found." />
        <div className="text-center">
          <h1 className="text-2xl font-medium text-industrial-900 mb-4">Product Not Found</h1>
          <Link to="/catalog" className="text-accent-blue font-bold uppercase tracking-widest text-xs">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const handleAddToRFQ = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity,
      image: product.imageUrl,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleDownloadClick = (file: { title: string; type: string }) => {
    setFileToDownload(file);
    setIsDownloadModalOpen(true);
  };

  const specIcons: { [key: string]: React.ReactElement } = {
    'ip rating': <ShieldCheck size={16} className="text-accent-blue" />,
    'fire rating': <Flame size={16} className="text-red-500" />,
    'material': <Layers size={16} className="text-industrial-400" />,
    'certification': <Award size={16} className="text-industrial-500" />,
  };

  return (
    <div className="bg-white min-h-screen pt-32">
      <SEO
        title={product.name}
        description={product.shortDescription}
        image={product.imageUrl}
        type="article"
      />
      {/* Product Hero */}
      <section className="bg-industrial-50/50 border-b border-industrial-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Image Section */}
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-white border border-industrial-100 rounded-sm overflow-hidden flex items-center justify-center p-8">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain animate-fade-in"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[product.imageUrl, ...(product.gallery || [])].slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 border rounded-sm overflow-hidden flex-shrink-0 transition-all ${activeImage === img ? 'border-accent-blue ring-1 ring-accent-blue' : 'border-industrial-100 opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Meta */}
            <div className="animate-up">
              <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-400">
                <Link to="/" className="hover:text-industrial-900">Home</Link>
                <ChevronRight size={10} />
                <Link to="/catalog" className="hover:text-industrial-900">Catalog</Link>
                <ChevronRight size={10} />
                <span className="text-industrial-900">{product.name}</span>
              </nav>

              <div className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                {product.category}
              </div>

              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-industrial-900 mb-6 uppercase">
                {product.name}
              </h1>
              <p className="text-lg text-industrial-600 leading-relaxed font-light mb-10">
                {product.shortDescription}
              </p>

              <div className="space-y-8 p-8 bg-white border border-industrial-100 rounded-sm">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-400 mb-4 block">Manifest Quantity</label>
                  <div className="flex items-center border border-industrial-200 w-fit rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-industrial-50 text-industrial-500"
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-12 text-center text-sm font-bold text-industrial-900 bg-transparent border-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-industrial-50 text-industrial-500"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToRFQ}
                    disabled={isAdded}
                    className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all ${isAdded
                      ? 'bg-green-600 text-white'
                      : 'bg-industrial-900 text-white hover:bg-accent-blue'
                      }`}
                  >
                    {isAdded ? 'Added to Manifest' : 'Add to RFQ List'}
                  </button>
                  <button
                    onClick={() => handleDownloadClick({ title: `${product.name} Spec Sheet`, type: 'PDF' })}
                    className="px-8 py-4 border border-industrial-200 text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-600 hover:border-industrial-900 rounded-sm transition-all flex items-center justify-center gap-3"
                  >
                    <Download size={14} /> Spec Sheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="flex gap-10 border-b border-industrial-100 mb-12">
          {['specs', 'desc', 'downloads'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 ${activeTab === tab ? 'border-accent-blue text-industrial-900' : 'border-transparent text-industrial-400 hover:text-industrial-600'
                }`}
            >
              {tab === 'specs' ? 'Technical Specs' : tab === 'desc' ? 'Full Description' : 'Resources'}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-industrial-50 group hover:border-industrial-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="opacity-40 group-hover:opacity-100 transition-opacity">
                      {specIcons[spec.label.toLowerCase()] || <Settings size={14} className="text-industrial-300" />}
                    </div>
                    <span className="text-[11px] font-bold text-industrial-500 uppercase tracking-widest">{spec.label}</span>
                  </div>
                  <span className="text-xs font-mono text-industrial-900 font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'desc' && (
            <div className="max-w-4xl space-y-12 animate-fade-in">
              <p className="text-lg text-industrial-600 leading-relaxed font-light">
                {product.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-industrial-900 mb-6">Key Engineering Advantages</h3>
                  <ul className="space-y-4">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-industrial-600">
                        <Check size={16} className="text-green-500 flex-shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {product.whyItExists && (
                  <div className="bg-industrial-50 p-8 border border-industrial-100 rounded-sm">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-industrial-900 mb-6">Operational Intent</h3>
                    <p className="text-sm text-industrial-600 italic leading-relaxed">"{product.whyItExists}"</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {product.downloads.map((dl, i) => (
                <button
                  key={i}
                  onClick={() => handleDownloadClick({ title: dl.title, type: dl.type })}
                  className="p-6 bg-white border border-industrial-100 rounded-sm text-left group hover:border-accent-blue transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <FileText size={20} className="text-industrial-300 group-hover:text-accent-blue" />
                    <Download size={14} className="text-industrial-200 group-hover:text-industrial-400" />
                  </div>
                  <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-1">{dl.title}</h4>
                  <span className="text-[10px] font-mono text-industrial-400">{dl.type} | 2.4 MB</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <GatedDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        fileToDownload={fileToDownload}
      />
    </div>
  );
};

export default ProductDetail;