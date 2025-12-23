import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  ChevronRight,
  Factory,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-industrial-50 text-industrial-900">
      <SEO
        title="Home"
        description="EMPHZ is a leading manufacturer of GRP/FRP enclosures, portable toilets, security cabins, and composite infrastructure solutions in India and the UAE."
      />
      {/* Hero Section – Engineering Precision */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-industrial-100 border border-industrial-200 mb-8 font-bold text-[10px] text-industrial-500 uppercase tracking-widest">
              <Factory size={12} className="text-accent-blue" />
              Kerala Managed | Mysuru Manufactured
            </div>
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-industrial-900 mb-8">
              Composite <br />
              <span className="text-industrial-400">Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-industrial-600 max-w-lg leading-relaxed mb-10">
              Specialized GRP manufacturer delivering high-durability enclosures, cabins, and modular structures designed for aggressive industrial environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-industrial px-10 py-4 text-sm uppercase tracking-wider font-bold">
                View Solutions
              </Link>
              <Link to="/technical" className="btn-secondary px-10 py-4 text-sm uppercase tracking-wider font-bold">
                Technical Center
              </Link>
            </div>
          </div>
          <div className="relative animate-in">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-industrial-200 shadow-subtle bg-industrial-100">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0"
                alt="EMPHZ GRP Composite Manufacturing"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 max-w-[240px] hidden md:block">
              <p className="text-[11px] font-bold text-industrial-400 uppercase tracking-widest mb-1">Material Science</p>
              <p className="text-sm font-medium text-industrial-900">Advanced FRP composites engineered for 50+ year service life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Advantages */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="animate-up">
              <div className="w-12 h-12 rounded-sm bg-industrial-50 flex items-center justify-center mb-8 border border-industrial-100">
                <Shield size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4">Chemical Resilience</h3>
              <p className="text-industrial-600 text-sm leading-relaxed">
                Inherently resistant to acid rain, coastal salinity, and industrial effluents. Zero risk of oxidation or structural leaching.
              </p>
            </div>
            <div className="animate-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-sm bg-industrial-50 flex items-center justify-center mb-8 border border-industrial-100">
                <Zap size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4">Dielectric Safety</h3>
              <p className="text-industrial-600 text-sm leading-relaxed">
                Non-conductive properties eliminate the need for grounding in electrical installations, ensuring total operator safety.
              </p>
            </div>
            <div className="animate-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-sm bg-industrial-50 flex items-center justify-center mb-8 border border-industrial-100">
                <Award size={24} className="text-accent-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4">Zero Maintenance</h3>
              <p className="text-industrial-600 text-sm leading-relaxed">
                UV-stabilized gel coats provide permanent color and finish. No painting, scraping, or rust treatment required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products – Content First */}
      <section className="py-24 md:py-32 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="animate-up">
              <h2 className="text-[10px] font-bold text-industrial-400 uppercase tracking-[0.3em] mb-4">Product Matrix</h2>
              <h3 className="text-3xl md:text-4xl font-medium text-industrial-900">Standardized Industrial Solutions</h3>
            </div>
            <Link to="/products" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-industrial-900 hover:text-accent-blue transition-colors group">
              Full Catalog <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.slice(0, 3).map((product, i) => (
              <Link to={`/products/${product.id}`} key={product.id} className="industrial-card group flex flex-col h-full animate-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-video overflow-hidden bg-industrial-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold text-accent-blue uppercase tracking-widest border-b border-accent-blue/30 pb-0.5">
                      {product.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium text-industrial-900 mb-3">{product.name}</h4>
                  <p className="text-sm text-industrial-500 leading-relaxed mb-8 flex-grow">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-industrial-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-400">Technical Brief</span>
                    <ChevronRight size={16} className="text-industrial-300 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Operations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-up">
              <h2 className="text-[10px] font-bold text-industrial-400 uppercase tracking-[0.3em] mb-6">Operations</h2>
              <h3 className="text-4xl font-medium mb-8 leading-tight">Advanced GRP Manufacturing in Mysuru</h3>
              <p className="text-lg text-industrial-600 mb-10 leading-relaxed">
                Production at our Mysuru facility adheres to strict engineering tolerances and material consistency. Managed by our core engineering team in Kerala, we ensure every unit meets industrial protection standards.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  'ISO 9001:2015 Quality Management Systems',
                  'IP 66/67 Ingress Protection Testing',
                  'UL 94 V-0 Self-Extinguishing Material Options',
                  'ASTM Standard UV Resistance Testing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0" />
                    <span className="text-sm font-medium text-industrial-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-industrial px-10 py-4 text-sm uppercase tracking-wider font-bold">
                Inquire for Project
              </Link>
            </div>
            <div className="relative animate-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Mysuru Plant"
                className="rounded-sm shadow-subtle grayscale-[10%]"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-industrial-200 hidden lg:block" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-industrial-200 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-industrial-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">Upgrade Your Infrastructure Durability</h2>
          <p className="text-industrial-400 text-lg mb-12 max-w-2xl mx-auto">
            Contact our engineering team to discuss GRP replacements for your existing steel or concrete assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/rfq" className="bg-white text-industrial-900 px-10 py-4 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-industrial-100 transition-colors">
              Request Technical Quote
            </Link>
            <Link to="/technical" className="border border-industrial-700 text-white px-10 py-4 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-industrial-800 transition-colors flex items-center justify-center gap-2">
              <FileText size={16} /> Datasheets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;