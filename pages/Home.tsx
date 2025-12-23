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
import TiltCard from '../components/TiltCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-industrial-50 text-industrial-900">
      <SEO
        title="Home"
        description="EMPHZ is a leading manufacturer of GRP/FRP enclosures, portable toilets, security cabins, and composite infrastructure solutions in India and the UAE."
      />
      {/* Hero Section – Engineering Precision */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-gradient-to-b from-industrial-50 to-white">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-industrial-100/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-industrial-200 mb-8 font-bold text-[10px] text-accent-blue uppercase tracking-widest shadow-sm">
              <Factory size={12} className="text-accent-blue" />
              <span>Kerala Managed | Mysuru Manufactured</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.05] tracking-tight text-industrial-900 mb-8">
              Composite <br />
              <span className="text-industrial-500">Infrastructure.</span>
            </h1>
            <p className="text-lg md:text-xl text-industrial-600 max-w-lg leading-relaxed mb-10 font-light">
              Specialized GRP manufacturer delivering high-durability enclosures, cabins, and modular structures designed for aggressive industrial environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-industrial shadow-lg shadow-accent-blue/20">
                View Solutions
              </Link>
              <Link to="/technical" className="btn-secondary bg-white/50 backdrop-blur-sm">
                Technical Center <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative animate-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-industrial-200 shadow-2xl bg-white relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent pointer-events-none z-10" />
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0"
                alt="EMPHZ GRP Composite Manufacturing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
                width="800"
                height="600"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-panel p-8 max-w-[280px] hidden md:block rounded-xl animate-float">
// ...
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_PRODUCTS.slice(0, 3).map((product, i) => (
                  <TiltCard key={product.id} className="h-full">
                    <Link to={`/products/${product.id}`} className="industrial-card group flex flex-col h-full animate-up" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="aspect-video overflow-hidden bg-industrial-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          width="400"
                          height="300"
                        />
                      </div>
// ...
                      <div className="relative animate-in">
                        <img
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                          alt="Mysuru Plant"
                          className="rounded-sm shadow-subtle grayscale-[10%]"
                          loading="lazy"
                          width="600"
                          height="400"
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