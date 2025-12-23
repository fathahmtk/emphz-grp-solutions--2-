import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Droplet,
  Zap,
  Box,
  Layers,
  FileBox,
  Sun,
  Factory,
  Shield,
  CheckCircle,
  Award,
  ShieldCheck,
  Globe,
  ChevronRight,
  Lightbulb,
  Check
} from 'lucide-react';
import { INDUSTRIES, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const HERO_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0",
    alt: "Emphz GRP Solutions Hero Image"
  },
  {
    src: "https://cpimg.tistatic.com/00883297/b/6/FRP-Electric-Panel-Box.jpg",
    alt: "GRP Electrical Enclosures"
  },
  {
    src: "https://tiimg.tistatic.com/fp/1/004/995/grp-single-portable-toilet-082.jpg",
    alt: "Portable Toilet Units"
  },
  {
    src: "https://www.aradhanafrp.com/assets/img/frp-security-guard-cabin.jpg",
    alt: "Security Cabins"
  },
  {
    src: "https://tejaswi-group.com/wp-content/uploads/2025/03/Food-Retail-Kiosk-Designer-1080x675.webp",
    alt: "GRP Kiosks"
  }
];

const FEATURED_CATEGORIES = [
  "Electrical Enclosures",
  "Portable Toilets",
  "Security Cabins",
  "Modular Kiosks",
  "Modular Pods",
  "Custom Fabrication"
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="flex flex-col bg-white text-emphz-navy overflow-x-hidden motion-safe:scroll-smooth">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emphz-navy via-emphz-dark to-emphz-navy group">
        {/* Cinematic Background Slider */}
        <div className="absolute inset-0 z-0 select-none">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentImageIndex ? 'scale-110' : 'scale-100'
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/60 to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emphz-navy/80 via-transparent to-emphz-navy/80"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">
          <div className="max-w-4xl space-y-8">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-down" style={{ animationDelay: '200ms' }}>
              {FEATURED_CATEGORIES.slice(0, 4).map((category) => (
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
              <Factory size={14} className="text-emphz-teal" />
              Kerala Managed | Mysuru Manufactured
            </div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[0.9] tracking-tighter drop-shadow-2xl animate-fade-up uppercase"
              style={{ animationDelay: '400ms' }}
            >
              GRP / FRP Products <br />
              for Infrastructure
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light font-sans tracking-wide animate-fade-up border-l-4 border-emphz-teal pl-6"
              style={{ animationDelay: '600ms' }}
            >
              EMPHZ GRP Solutions manufactures GRP / FRP enclosures, cabins, kiosks, and modular structures used in electrical, telecom, infrastructure, and public-sector projects across India. Our products are designed as practical replacements for steel and concrete where corrosion, repainting, and maintenance become recurring problems.
              <span className="block mt-3 text-sm text-emphz-cyan font-mono font-bold uppercase">No Rusting • No Repainting • Built for Site</span>
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-5 pt-4 animate-fade-up"
              style={{ animationDelay: '800ms' }}
            >
              <Link to="/products" className="group relative px-8 py-4 bg-gradient-to-r from-emphz-teal to-emphz-cyan text-white font-black text-sm tracking-[0.15em] uppercase font-display rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emphz-teal/30 hover:shadow-xl hover:shadow-emphz-teal/50 animate-pulse-glow">
                <span className="relative z-10 flex items-center">
                  View Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              <Link to="/about" className="group px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold text-sm tracking-[0.15em] uppercase font-display rounded-xl backdrop-blur-md hover:bg-white/20 hover:border-white/60 transition-all flex items-center justify-center">
                Company Profile <FileBox className="ml-2 w-4 h-4" />
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

      {/* Industries Marquee */}
      <div className="py-8 md:py-10 bg-white border-y border-gray-100 overflow-hidden" aria-hidden="true">
        <div className="flex space-x-16 md:space-x-24 motion-safe:animate-scroll whitespace-nowrap w-max hover:pause will-change-transform">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <div key={i} className="flex items-center space-x-4 text-gray-400 hover:text-emphz-navy transition-colors cursor-default group">
              <Link to="/products" className="flex items-center gap-4 focus:outline-none">
                <Box size={20} className="text-gray-400 group-hover:text-emphz-teal transition-colors" />
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-500 group-hover:text-emphz-navy transition-colors font-display">{ind.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Standards Bar */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-3 font-display">Quality Standards</h2>
              <p className="text-emphz-navy font-black text-2xl md:text-3xl leading-tight font-display">Meeting Standards for <br />Safety & Site Use.</p>
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

      {/* Manufacturing & Plant Section */}
      <section className="py-20 md:py-32 bg-gray-50 overflow-hidden relative border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emphz-teal via-emphz-cyan to-emphz-teal"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Manufacturing Background</h2>
              <h3 className="text-4xl md:text-6xl font-black text-emphz-navy mb-8 leading-tight font-display italic uppercase">Mysuru Plant. <br /><span className="text-emphz-teal">Managed from Kerala.</span></h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
                EMPHZ GRP Solutions is managed from Kerala, with manufacturing operations carried out at our Mysuru facility. Production is planned based on confirmed drawings, approved specifications, and project timelines. All products are manufactured under controlled conditions and checked before dispatch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
                {[
                  "Does not rust or corrode",
                  "No repainting required under normal outdoor use",
                  "Performs well in coastal and high-humidity regions",
                  "Electrically non-conductive",
                  "Lower long-term maintenance compared to steel"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emphz-teal/10 flex items-center justify-center group-hover/item:bg-emphz-teal/20 transition-colors">
                      <Check size={14} className="text-emphz-teal" />
                    </div>
                    <span className="text-slate-600 font-sans text-sm md:text-base font-medium group-hover/item:text-emphz-navy transition-colors">{feat}</span>
                  </div>
                ))}
              </div>
              <Link to="/technology" className="inline-flex items-center gap-2 text-emphz-teal font-black text-sm tracking-widest uppercase hover:gap-4 transition-all">
                Explore Our Facility <ArrowRight size={18} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                  alt="Manufacturing Facility"
                  className="rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=600&q=80"
                  alt="Composite Production"
                  className="rounded-3xl shadow-lg mt-8 transform hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emphz-teal rounded-full flex items-center justify-center text-white font-black text-center text-[10px] uppercase p-4 shadow-xl animate-pulse">
                Made in <br /> India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GRP Section */}
      <section className="py-20 md:py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Why Use GRP</h2>
            <h3 className="text-4xl md:text-6xl font-black text-emphz-navy font-display tracking-tight leading-none">Practical Performance <br />at Site</h3>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Selected where steel enclosures or cabins fail due to rusting, frequent repainting, or water ingress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-emphz-teal to-emphz-cyan text-white rounded-2xl flex items-center justify-center mb-8 relative z-10">
                  <Droplet size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">No Rusting</h4>
                <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  Ideal for coastal and high-humidity regions. GRP construction is rust-free and handles aggressive industrial environments without degradation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-emphz-navy p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-2xl h-full flex flex-col text-white">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md text-emphz-teal rounded-2xl flex items-center justify-center mb-8 relative z-10">
                  <Zap size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 text-white font-display">Non-Conductive</h4>
                <p className="text-gray-400 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  Electrically non-conductive body adds a layer of safety for site workers. Shock-proof protection is a standard requirement for industrial panels.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10">
                  <Sun size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">No Repainting</h4>
                <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                  UV-stabilized surfaces ensure no fading or brittleness. Lower long-term maintenance effort compared to steel, which requires regular painting.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-3 font-display">Product Range</h2>
              <h3 className="text-3xl md:text-4xl font-black text-emphz-navy font-display tracking-tight">Standard & Custom GRP</h3>
            </div>
            <Link to="/products" className="group mt-4 md:mt-0 text-emphz-navy font-bold text-sm border-b-2 border-emphz-teal pb-1 hover:text-emphz-teal-text transition-colors flex items-center font-display tracking-wide uppercase">
              View All Products <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_PRODUCTS.slice(0, 3).map((product, i) => (
              <Link to={`/products/${product.id}`} key={i} className="group relative h-[450px] rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src={product.imageUrl} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-emphz-navy bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider font-display">{product.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{product.name}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">{product.shortDescription}</p>
                  <div className="flex items-center text-emphz-teal text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-emphz-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Industries We Supply</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white font-display">Reliable for All Sectors</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <Link to="/industries" key={idx} className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src={ind.imageUrl} alt={ind.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/40 to-transparent group-hover:via-emphz-navy/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-2xl font-bold text-white font-display mb-2 group-hover:text-emphz-teal transition-colors">{ind.title}</h4>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">{ind.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden text-center border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-emphz-navy mb-8 font-display uppercase italic tracking-tighter">Ready to Upgrade?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the leading architects and engineers who have switched to Emphz GRP for long-term project reliability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/contact" className="bg-emphz-navy text-white px-10 py-5 rounded-full font-bold text-sm md:text-base hover:bg-emphz-teal transition-all uppercase tracking-widest shadow-xl font-display">
              Request a Quote
            </Link>
            <Link to="/technical" className="bg-white border-2 border-gray-200 text-emphz-navy px-10 py-5 rounded-full font-bold text-sm md:text-base hover:border-emphz-navy transition-all uppercase tracking-widest shadow-lg font-display">
              Technical Datasheets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;