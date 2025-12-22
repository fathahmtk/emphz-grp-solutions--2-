import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Zap, Box, Layers, Maximize, FileText, Sun, Train, Wifi, Flame, CloudRain, Factory, Shield, CheckCircle, Award, Play, ShieldCheck, Cpu, Globe, ChevronRight, Anchor, Lightbulb, Users, Rss } from 'lucide-react';
import { INDUSTRIES, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const HERO_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0",
    alt: "Emphz GRP Solutions Hero Image"
  }
];

const FEATURED_CATEGORIES = [
  "Electrical Enclosures",
  "Modular Kiosks",
  "Smart Living Pods",
  "Fire Safety",
  "Structural Profiles",
  "Automobile Components"
];



const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white text-emphz-navy overflow-x-hidden motion-safe:scroll-smooth">

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emphz-navy via-emphz-dark to-emphz-navy group">

        {/* Cinematic Background Slider */}
        <div className="absolute inset-0 z-0 select-none">
          {HERO_IMAGES.map((image, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentImageIndex ? 'scale-110' : 'scale-100'}`}
              />
              {/* Modern Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/60 to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emphz-navy/80 via-transparent to-emphz-navy/80"></div>
              <div className="absolute inset-0 bg-dots opacity-10"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">
          <div className="max-w-4xl space-y-8">

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-down" style={{ animationDelay: '200ms' }}>
              {FEATURED_CATEGORIES.slice(0, 4).map((category, index) => (
                <span
                  key={category}
                  className="backdrop-blur-md bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest font-mono hover:bg-white/10 transition-colors cursor-default"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 text-gray-200 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest font-mono mb-6 animate-fade-down" style={{ animationDelay: '200ms' }}>
              <Cpu size={14} className="text-emphz-teal" />
              GRP Intelligence Platform™
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[0.9] tracking-tighter drop-shadow-2xl animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              SMART GRP <br />
              INFRASTRUCTURE SYSTEMS
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light font-sans tracking-wide animate-fade-up border-l-4 border-emphz-teal pl-6"
              style={{ animationDelay: '600ms' }}
            >
              Engineered with <strong className="text-white font-bold">predictive intelligence</strong> — not just corrosion-proof materials. Our GRP systems combine environmental performance analytics, lifecycle design intelligence, and digital configuration to deliver infrastructure that thinks ahead.
              <span className="block mt-3 text-sm text-emphz-cyan font-mono font-bold">PREDICTIVE ENGINEERING • MATERIAL SCIENCE • DIGITAL TWIN READY</span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-5 pt-4 animate-fade-up"
              style={{ animationDelay: '800ms' }}
            >
              <Link to="/rfq" className="group relative px-8 py-4 bg-gradient-to-r from-emphz-teal to-emphz-cyan text-white font-black text-sm tracking-[0.15em] uppercase font-display rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emphz-teal/30 hover:shadow-xl hover:shadow-emphz-teal/50 animate-pulse-glow">
                <span className="relative z-10 flex items-center">
                  Configure Your System <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link to="/technical" className="group px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold text-sm tracking-[0.15em] uppercase font-display rounded-xl backdrop-blur-md hover:bg-white/20 hover:border-white/60 transition-all flex items-center justify-center">
                Material Intelligence Hub <Lightbulb className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <span className="text-[10px] uppercase tracking-widest text-white font-mono">Scroll</span>
        </div>
      </section>

      <div className="py-8 md:py-10 bg-white border-y border-gray-100 overflow-hidden" aria-hidden="true">
        <div className="flex space-x-16 md:space-x-24 motion-safe:animate-scroll whitespace-nowrap w-max hover:pause will-change-transform">
          {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <div key={i} className="flex items-center space-x-4 text-gray-400 hover:text-emphz-navy transition-colors cursor-default group">
              <Link to="/products" className="flex items-center gap-4 focus:outline-none">
                <Box size={20} className="text-gray-400 group-hover:text-emphz-teal transition-colors" />
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-500 group-hover:text-emphz-navy transition-colors font-display">{ind.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-3 font-display">Certified Excellence</h2>
              <p className="text-emphz-navy font-black text-2xl md:text-3xl leading-tight font-display">Meeting Global Standards <br />for Safety & Quality.</p>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-end">
              {[
                { icon: Award, label: "ISO 9001", sub: "Quality Mgmt" },
                { icon: Shield, label: "UL 94 V-0", sub: "Fire Safety" },
                { icon: Droplet, label: "IP 66/67", sub: "Waterproof" },
                { icon: Sun, label: "ASTM UV", sub: "Weatherability" }
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-default">
                  <div className="w-16 h-16 bg-gradient-to-br from-emphz-teal to-emphz-cyan rounded-2xl flex items-center justify-center shadow-lg border border-white/20 mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emphz-teal/40">
                    <cert.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs font-black text-emphz-navy uppercase tracking-wider group-hover:text-emphz-teal transition-colors">{cert.label}</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">{cert.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Trust Metrics Section */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-3 font-display">Proven Track Record</h2>
            <p className="text-emphz-navy font-black text-2xl md:text-3xl leading-tight font-display">Engineering Excellence <br />Backed by Results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emphz-navy to-emphz-dark p-8 rounded-3xl text-white relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emphz-teal/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emphz-teal/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-emphz-teal" size={24} />
                </div>
                <div className="text-5xl font-black mb-2 font-display">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-display">Years in Business</div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Serving India's infrastructure sector since 2009</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-emphz-teal/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:border-emphz-teal/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emphz-teal/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emphz-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-emphz-teal" size={24} />
                </div>
                <div className="text-5xl font-black mb-2 font-display text-emphz-navy">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-display">Installations</div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Across telecom, power, and infrastructure sectors</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl text-white relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-blue-600/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Droplet className="text-white" size={24} />
                </div>
                <div className="text-5xl font-black mb-2 font-display">60%</div>
                <div className="text-sm text-blue-100 uppercase tracking-wider font-display">Cost Reduction</div>
                <p className="text-xs text-blue-200 mt-3 leading-relaxed">Lifecycle cost savings vs. traditional steel</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-emphz-navy" size={24} />
                </div>
                <div className="text-5xl font-black mb-2 font-display text-emphz-navy">25+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-display">Year Lifespan</div>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">Zero maintenance, zero corrosion guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Zero-Compromise Engineering™</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emphz-navy font-display tracking-tight leading-none">Our Corporate <br />Commitment</h3>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Every system we engineer carries these non-negotiable performance guarantees</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-emphz-teal/50 hover:shadow-2xl hover:shadow-emphz-teal/10 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emphz-teal/10 to-emphz-cyan/10 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:from-emphz-teal/20 group-hover:to-emphz-cyan/20"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-emphz-teal to-emphz-cyan text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emphz-teal/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Droplet size={32} />
                </div>

                <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">Zero Water Ingress</h4>
                <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  Our precision-molded sealing systems are validated through IP67 immersion testing. Environmental behavior simulation ensures hermetic protection across temperature cycles, pressure differentials, and mechanical stress.
                </p>

                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <span className="text-xs font-bold text-emphz-teal uppercase tracking-wider flex items-center group/link cursor-pointer">
                    Performance Data <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-emphz-navy p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-2xl shadow-emphz-navy/30 h-full flex flex-col text-white">
                <div className="absolute inset-0 bg-carbon-fibre opacity-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl group-hover:bg-yellow-500/30 transition-colors"></div>

                <div className="w-16 h-16 bg-white/10 backdrop-blur-md text-yellow-400 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Zap size={32} />
                </div>

                <h4 className="text-2xl font-black mb-4 text-white font-display">Zero UV Degradation Drift</h4>
                <p className="text-gray-400 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  Accelerated aging testing validates color stability and mechanical retention over 5000+ UV exposure hours. Our resin formulation maintains structural integrity within rated lifecycle window with <5% property variance.
                </p>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center">
                    Test Reports <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-blue-100"></div>

                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Layers size={32} />
                </div>

                <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">Zero Downtime Installations</h4>
                <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  Predictive assembly protocols and tolerance-controlled manufacturing eliminate field adjustments. Our systems achieve operational status within documented installation windows — no callbacks, no corrections.
                </p>

                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center">
                    Installation Data <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-3 font-display">The Collection</h2>
              <h3 className="text-3xl md:text-4xl font-black text-emphz-navy font-display tracking-tight">Featured Products</h3>
            </div>
            <Link to="/products" className="group mt-4 md:mt-0 text-emphz-navy font-bold text-sm border-b-2 border-emphz-teal pb-1 hover:text-emphz-teal-text transition-colors flex items-center font-display tracking-wide">
              VIEW FULL CATALOG <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.slice(0, 4).map((product, i) => (
              <Link to={`/products/${product.id}`} key={i} className="group relative h-[400px] rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-200">
                  <img src={product.imageUrl} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-emphz-navy bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm font-display">{product.category}</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2 font-display leading-tight">{product.name}</h3>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">{product.shortDescription}</p>
                  <div className="flex items-center text-emphz-teal text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    View Details <ArrowRight size={12} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-emphz-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-cubes"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Industry Solutions</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white font-display">Engineered for Your Sector</h3>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">Specialized GRP solutions tailored to the unique challenges of each industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.slice(0, 6).map((item, idx) => (
              <Link to="/industries" key={idx} className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-bold text-white font-display mb-2 group-hover:text-emphz-teal transition-colors">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{item.desc}</p>
                  <div className="flex items-center text-emphz-teal text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    View Solutions <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries" className="inline-flex items-center bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/20 hover:border-white/60 transition-all font-display backdrop-blur-md">
              View All Industries <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-3 font-display">Latest Insights</h2>
              <h3 className="text-3xl md:text-4xl font-black text-emphz-navy font-display tracking-tight">From the Engineering Blog</h3>
            </div>
            <Link to="/blog" className="group mt-4 md:mt-0 text-emphz-navy font-bold text-sm border-b-2 border-emphz-teal pb-1 hover:text-emphz-teal-text transition-colors flex items-center font-display tracking-wide">
              READ ALL ARTICLES <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_BLOG_POSTS.slice(0, 3).map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200/80 hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative h-60 overflow-hidden flex-shrink-0">
                  <img src={post.imageUrl} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-emphz-navy text-[9px] font-bold px-3 py-1.5 rounded-full shadow-sm font-display tracking-wider uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-400 font-mono mb-2">{post.date}</p>
                  <h4 className="text-lg font-bold text-emphz-navy group-hover:text-emphz-teal transition-colors mb-3 font-display leading-tight">{post.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed font-sans flex-grow">{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[100px] transform -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-4 font-display">Who We Are</h2>
              <h3 className="text-4xl md:text-6xl font-black text-emphz-navy mb-8 leading-none font-display tracking-tight">Built to Last. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal to-cyan-500">Engineered to Protect.</span></h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-sans font-light">
                Our mission is simple: to provide the most durable, corrosion-resistant infrastructure solutions for India's demanding environments. By leveraging advanced Glass Reinforced Plastic technology, we eliminate maintenance costs and extend asset lifecycles by decades.
              </p>
              <Link to="/about" className="inline-flex items-center text-white bg-emphz-navy px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-emphz-teal transition-colors group font-display shadow-xl hover:shadow-2xl hover:-translate-y-1">
                LEARN MORE <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-200/50">
                <div className="text-4xl md:text-5xl font-black text-emphz-navy mb-2 font-display">25+</div>
                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold font-display">Years Lifespan</div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center mt-8 transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-200/50">
                <div className="text-4xl md:text-5xl font-black text-emphz-navy mb-2 font-display">0%</div>
                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold font-display">Corrosion</div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-200/50">
                <div className="text-4xl md:text-5xl font-black text-emphz-navy mb-2 font-display">IP66</div>
                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold font-display">Certified</div>
              </div>
              <div className="bg-emphz-teal p-8 rounded-3xl border border-emphz-teal shadow-2xl shadow-emphz-teal/30 flex flex-col items-center text-center mt-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-black text-emphz-navy mb-2 font-display">100%</div>
                <div className="text-[10px] md:text-xs text-emphz-navy uppercase tracking-[0.2em] font-bold font-display">Maintenance Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-emphz-navy transform -skew-y-3 origin-bottom-left scale-110 translate-y-20 z-0"></div>
        <div className="absolute inset-0 bg-carbon-fibre opacity-10 z-0 mix-blend-overlay pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 font-display tracking-tighter drop-shadow-lg">READY TO UPGRADE?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Join the leading architects and engineers in Kerala who have switched to Emphz GRP for a lifetime of maintenance-free performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/rfq" className="bg-emphz-teal text-emphz-navy px-10 py-5 rounded-full font-bold text-sm md:text-base shadow-[0_0_30px_rgba(0,173,181,0.4)] hover:shadow-[0_0_50px_rgba(0,173,181,0.6)] hover:-translate-y-1 transition-all focus:ring-2 focus:ring-white font-display uppercase tracking-widest">
              GET A QUOTE NOW
            </Link>
            <Link to="/technical" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all focus:ring-2 focus:ring-white font-display uppercase tracking-widest backdrop-blur-sm">
              ENGINEER RESOURCES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;