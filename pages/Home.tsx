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
import StatsSection from '../components/StatsSection';
import FadeInSection from '../components/FadeInSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-industrial-50 text-industrial-900">
      <SEO
        title="Home"
        description="EMPHZ is a leading manufacturer of GRP/FRP enclosures, portable toilets, security cabins, and composite infrastructure solutions in India and the UAE."
      />
      {/* Hero Section – Engineering Precision with Animated Carousel */}
      <section className="relative h-screen flex items-center overflow-hidden bg-industrial-900">
        {/* Animated Background Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Image 1 */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-[fadeInOut_10s_ease-in-out_infinite]"
              style={{
                backgroundImage: "url('/hero-1.jpg')",
              }}
            />
            {/* Image 2 */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-[fadeInOut_10s_ease-in-out_infinite_5s]"
              style={{
                backgroundImage: "url('/hero-2.jpg')",
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/80 via-industrial-900/60 to-transparent" />
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-full bg-industrial-100/20 -skew-x-12 translate-x-1/4 pointer-events-none z-10" />

        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-20">
          <div className="animate-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-industrial-200 mb-6 md:mb-8 font-bold text-[10px] text-accent-blue uppercase tracking-widest shadow-sm">
              <Factory size={12} className="text-accent-blue" />
              <span className="hidden xs:inline">Kerala Managed | Mysuru Manufactured</span>
              <span className="xs:hidden">Made in India</span>
            </div>
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-display font-medium leading-[1.05] tracking-tight text-white mb-6 md:mb-8 drop-shadow-lg">
              Composite <br />
              <span className="text-industrial-200">Infrastructure.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed mb-8 md:mb-10 font-light drop-shadow-md">
              Specialized GRP manufacturer delivering high-durability enclosures, cabins, and modular structures designed for aggressive industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-industrial shadow-lg shadow-accent-blue/20 touch-ripple">
                View Solutions
              </Link>
              <Link to="/technical" className="bg-white/90 backdrop-blur-sm text-industrial-900 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors touch-ripple flex items-center justify-center gap-2">
                Technical Center <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative animate-in hidden lg:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm relative group">
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
            <div className="absolute -bottom-8 -left-8 glass-panel p-6 md:p-8 max-w-[240px] md:max-w-[280px] rounded-xl animate-float">
              <p className="text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-2 flex items-center gap-2">
                <Shield size={12} /> Material Science
              </p>
              <p className="text-sm font-medium text-industrial-900 leading-snug">Advanced FRP composites engineered for 50+ year service life.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Engineering Advantages */}
      <FadeInSection direction="up">
        <section className="py-24 md:py-32 bg-industrial-50/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-20 animate-up">
              <h2 className="text-xs font-bold text-accent-blue uppercase tracking-[0.3em] mb-4">Engineering Precision</h2>
              <h3 className="text-4xl md:text-5xl font-medium text-industrial-900 leading-[1.1]">
                Engineered for the <br />
                <span className="text-industrial-400">Extreme Environment.</span>
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="animate-up">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 border border-industrial-100 shadow-sm">
                  <Shield size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-medium mb-4">Chemical Resilience</h3>
                <p className="text-industrial-500 text-sm leading-relaxed">
                  Inherently resistant to acid rain, coastal salinity, and industrial effluents. Zero risk of oxidation or structural leaching.
                </p>
              </div>
              <div className="animate-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 border border-industrial-100 shadow-sm">
                  <Zap size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-medium mb-4">Dielectric Safety</h3>
                <p className="text-industrial-500 text-sm leading-relaxed">
                  Non-conductive properties eliminate the need for grounding in electrical installations, ensuring total operator safety.
                </p>
              </div>
              <div className="animate-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 border border-industrial-100 shadow-sm">
                  <Award size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-medium mb-4">Zero Maintenance</h3>
                <p className="text-industrial-500 text-sm leading-relaxed">
                  UV-stabilized gel coats provide permanent color and finish. No painting, scraping, or rust treatment required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Ecosystem – Flagship Concept */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-50/50 skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-in">
              <h2 className="text-xs font-bold text-accent-blue uppercase tracking-[0.3em] mb-4">Networked Infrastructure</h2>
              <h3 className="text-4xl md:text-5xl font-medium text-industrial-900 mb-8 leading-[1.1]">
                SmartPod Grid™ <br />
                <span className="text-industrial-400">The Connected Ecosystem.</span>
              </h3>
              <p className="text-lg text-industrial-500 mb-10 leading-relaxed font-light">
                Beyond individual units, SmartPod Grid™ creates a centrally managed, IoT-enabled network of UrbanCell™ pods. Real-time data, remote security, and automated inventory management for large-scale deployments.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { title: 'IoT-Managed', desc: 'Real-time telemetry and inventory tracking.' },
                  { title: 'Centralized Control', desc: 'Manage 100+ units from a single ERP dashboard.' },
                  { title: 'Rapid Scalability', desc: 'Deploy clusters from campuses to entire workforce cities.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-industrial-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-industrial-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/products/emp-uc-grid" className="btn-industrial px-10">
                Explore The Grid
              </Link>
            </div>
            <div className="relative animate-up">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="SmartPod Grid Ecosystem"
                className="rounded-sm shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-industrial-900 text-white p-8 rounded-sm shadow-xl hidden md:block border-l-4 border-accent-blue">
                <div className="text-3xl font-medium mb-1">IoT</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Ready Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Strategic Roadmap */}
      <section className="py-24 bg-industrial-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.3em] mb-4">Implementation Strategy</h2>
            <h3 className="text-3xl md:text-5xl font-medium mb-6">Execution Roadmap</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                phase: 'SHORT-TERM',
                title: 'High-Demand Pilots',
                concepts: ['CampMart™', 'FlexServe™'],
                desc: 'Prioritizing workforce housing and municipal essential services for immediate deployment and ROI.'
              },
              {
                phase: 'MID-TERM',
                title: 'Market Expansion',
                concepts: ['StreetSmart™', 'TradePod™', 'StoreBox™'],
                desc: 'Scaling standardized retail units across heritage zones, exhibitions, and dense urban neighborhoods.'
              },
              {
                phase: 'LONG-TERM',
                title: 'Ecosystem Flagship',
                concepts: ['UrbanCell™', 'SmartPod Grid™'],
                desc: 'Transitioning to a fully integrated, IoT-managed nationwide infrastructure network.'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-accent-blue/50 transition-colors">
                <div className="text-accent-blue text-[9px] font-bold uppercase tracking-widest mb-6 block ring-1 ring-accent-blue/20 w-fit px-2 py-1">
                  {step.phase}
                </div>
                <h4 className="text-xl font-medium mb-4">{step.title}</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.concepts.map(c => (
                    <span key={c} className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-industrial-300">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-industrial-400 leading-relaxed font-light group-hover:text-white transition-colors">
                  {step.desc}
                </p>
              </div>
            ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MOCK_PRODUCTS.slice(0, 4).map((product, i) => (
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
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[9px] font-bold text-accent-blue uppercase tracking-widest border-b border-accent-blue/30 pb-0.5">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-industrial-900 mb-3 group-hover:text-accent-blue transition-colors">{product.name}</h4>
                    <p className="text-sm text-industrial-500 leading-relaxed mb-8 flex-grow">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-industrial-100">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-400">Technical Brief</span>
                      <ChevronRight size={16} className="text-industrial-300 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Operations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-up">
              <h2 className="text-xs font-bold text-accent-blue uppercase tracking-[0.3em] mb-6">Operations</h2>
              <h3 className="text-4xl md:text-5xl font-medium text-industrial-900 mb-8 leading-[1.1]">Advanced GRP Manufacturing in Mysuru</h3>
              <p className="text-lg text-industrial-500 mb-10 leading-relaxed font-light">
                Production at our Mysuru facility adheres to strict engineering tolerances and material consistency. Managed by our core engineering team in Kerala, we ensure every unit meets industrial protection standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  'ISO 9001:2015 QMS',
                  'IP 66/67 Ingress Testing',
                  'UL 94 V-0 Options',
                  'ASTM Standard UV Testing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0" />
                    <span className="text-sm font-medium text-industrial-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex btn-industrial px-10 py-4 text-sm font-bold uppercase tracking-wider rounded transition-all">
                Inquire for Project
              </Link>
            </div>
            <div className="relative animate-in">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-industrial-100 shadow-subtle group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Mysuru Plant"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 bg-industrial-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight">Upgrade Your Infrastructure Durability</h2>
          <p className="text-industrial-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Contact our engineering team to discuss GRP replacements for your existing steel or concrete assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/rfq" className="bg-white text-industrial-900 px-10 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-industrial-50 transition-all touch-ripple">
              Request Technical Quote
            </Link>
            <Link to="/technical" className="border border-industrial-700 text-white px-10 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-industrial-800 transition-all flex items-center justify-center gap-2 touch-ripple">
              <FileText size={16} /> Datasheets
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;