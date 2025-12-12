import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Zap, Box, Layers, Maximize, FileText, Sun, Train, Wifi, Flame, CloudRain, Factory, Shield, CheckCircle, Award, Play, ShieldCheck, Cpu, Globe, ChevronRight, Anchor, Lightbulb, Users, Rss } from 'lucide-react';
import { INDUSTRIES, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const HERO_IMAGES = [
  {
      src: "https://images.unsplash.com/photo-1588525287394-135b3d7c95e4?auto=format&fit=crop&w=1200&q=80",
      alt: "High-performance Emphz GRP Security Guard Villa cabin at an industrial facility, showcasing its sleek design."
  },
  {
      src: "https://images.unsplash.com/photo-1560942484-91e34a02d8a4?auto=format&fit=crop&w=1200&q=80",
      alt: "Durable protective GRP Instrument Sunshade canopy protecting sensitive field transmitters from solar radiation."
  },
  {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      alt: "The futuristic Emphz Xpod X7, a monocoque GRP smart living pod, perfect for modern resorts."
  },
  {
      src: "https://images.unsplash.com/photo-1581092921462-6870002878b6?auto=format&fit=crop&w=1200&q=80",
      alt: "Inside an advanced GRP composite manufacturing facility with hot press molding machinery for Emphz products."
  },
  {
      src: "https://images.unsplash.com/photo-1632516421426-529075e7a934?auto=format&fit=crop&w=1200&q=80",
      alt: "Large modular GRP panel water tank installation for hygienic potable water storage, a key Emphz solution."
  },
  {
      src: "https://images.unsplash.com/photo-1621947081720-86970823b77a?auto=format&fit=crop&w=1200&q=80",
      alt: "The robust E-Series IP66 Coastal GRP Electrical Enclosure installed in an industrial plant, showcasing its durability."
  },
  {
      src: "https://images.unsplash.com/photo-1617999192569-c6e7d0573934?auto=format&fit=crop&w=1200&q=80",
      alt: "A modular GRP utility kiosk by Emphz, designed for modern urban electrical substations."
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

const INDUSTRY_IMAGES = [
  { title: "Solar & Renewables", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80", desc: "UV-stable combiner boxes for harsh solar parks." },
  { title: "Rail & Metro", image: "https://images.unsplash.com/photo-1474487548417-781cb714c2f3?auto=format&fit=crop&w=600&q=80", desc: "Fire-retardant trackside signaling cabinets." },
  { title: "Telecom / 5G", image: "https://images.unsplash.com/photo-1587575494201-11fe74d90d38?auto=format&fit=crop&w=600&q=80", desc: "Radio-transparent shrouds for rooftop antennae." },
  { title: "Water Treatment", image: "https://images.unsplash.com/photo-1523365063870-827e85c138f2?auto=format&fit=crop&w=600&q=80", desc: "Corrosion-proof walkways for pump stations." },
  { title: "Smart City", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80", desc: "Vandal-resistant modular utility kiosks." },
  { title: "Oil & Gas", image: "https://images.unsplash.com/photo-1516937941348-c09e554b96d8?auto=format&fit=crop&w=600&q=80", desc: "Anti-static explosion-proof junction boxes." },
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
      
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-[#050A14] group">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
           {HERO_IMAGES.map((image, index) => (
               <img 
                 key={index}
                 src={image.src}
                 alt={image.alt}
                 loading={index === 0 ? 'eager' : 'lazy'}
                 decoding="async"
                 className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImageIndex ? 'opacity-100 animate-ken-burns' : 'opacity-0'}`}
               />
           ))}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-l from-[#0B1120] via-transparent to-transparent opacity-50"></div>
           <div className="absolute inset-0 bg-carbon-fibre opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-left p-6 md:p-8 lg:p-12">
            
            <div className="space-y-6 max-w-3xl">
              
              <div className="flex flex-wrap gap-2">
                {FEATURED_CATEGORIES.map((category, index) => (
                  <div
                    key={category}
                    className="animate-fade-up"
                    style={{ animationDelay: `${300 + index * 80}ms` }}
                  >
                    <span className="block bg-black/30 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-lg">
                      {category}
                    </span>
                  </div>
                ))}
              </div>

              <h1 
                className="text-4xl md:text-5xl font-black font-display leading-tight tracking-tighter text-white drop-shadow-2xl animate-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                Leading GRP/FRP Manufacturer Delivering Industrial & Portable Solutions
              </h1>
              
              <p 
                className="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed font-sans font-light tracking-wide animate-fade-up"
                style={{ animationDelay: '700ms' }}
              >
                Next-generation GRP enclosures and modular structures. Engineered to outperform steel in the world's harshest environments.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 justify-start pt-2 animate-fade-up"
                style={{ animationDelay: '800ms' }}
              >
                <Link to="/products" className="group bg-emphz-teal text-emphz-navy px-8 py-3 rounded-full font-bold text-xs tracking-[0.1em] uppercase font-display hover:bg-[#00D4DE] transition-all duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(0,173,181,0.4)] hover:shadow-[0_0_50px_rgba(0,173,181,0.6)] hover:-translate-y-1">
                  VIEW CATALOG <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
                
                <Link to="/rfq" className="group px-8 py-3 rounded-full border border-white/20 text-white font-bold text-xs tracking-[0.1em] uppercase font-display hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center backdrop-blur-md bg-black/20 hover:-translate-y-1">
                  REQUEST QUOTE
                </Link>
              </div>
            </div>
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

      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 text-center md:text-left">
                 <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-3 font-display">Certified Excellence</h2>
                 <p className="text-emphz-navy font-bold text-2xl md:text-3xl leading-tight">Meeting Global Standards <br/>for Safety & Quality.</p>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12 justify-center md:justify-end">
                  {[
                    { icon: Award, label: "ISO 9001", sub: "Quality Mgmt" },
                    { icon: Shield, label: "UL 94 V-0", sub: "Fire Safety" },
                    { icon: Droplet, label: "IP 66/67", sub: "Waterproof" },
                    { icon: Sun, label: "ASTM UV", sub: "Weatherability" }
                  ].map((cert, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-default">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-3 group-hover:border-emphz-teal group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emphz-teal/20">
                          <cert.icon size={28} className="text-slate-500 group-hover:text-emphz-teal transition-colors" />
                       </div>
                       <span className="text-xs font-black text-emphz-navy uppercase tracking-wider group-hover:text-emphz-teal-text transition-colors">{cert.label}</span>
                       <span className="text-[10px] text-slate-500 font-mono mt-1">{cert.sub}</span>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 text-center">
             <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-[0.2em] uppercase mb-4 font-display">The Emphz Advantage</h2>
             <h3 className="text-4xl md:text-6xl font-black text-emphz-navy font-display tracking-tight leading-none">Why Engineers <br/>Choose GRP.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <ScrollReveal>
               <div className="bg-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:-translate-y-3 transition-transform duration-500 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-emphz-teal h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emphz-teal/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-emphz-teal/10"></div>
                  
                  <div className="w-16 h-16 bg-emphz-teal text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emphz-teal/30 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <Droplet size={32} />
                  </div>
                  
                  <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">Corrosion Immunity</h4>
                  <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                     Engineered specifically for high-salinity coastal environments. Our GRP composites are chemically inert, offering a 25+ year lifespan where traditional steel enclosures fail within months.
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <span className="text-xs font-bold text-emphz-teal-text uppercase tracking-wider flex items-center">
                      Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform"/>
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
                  
                  <h4 className="text-2xl font-black mb-4 text-white font-display">Electrical Safety</h4>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                     Naturally non-conductive and electrically insulating material. It completely eliminates shock hazards for personnel and often removes the need for expensive additional earthing systems.
                  </p>
                  
                   <div className="border-t border-white/10 pt-6 mt-auto">
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center">
                      View Certifications <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform"/>
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
                  
                  <h4 className="text-2xl font-black mb-4 text-emphz-navy font-display">Modular Design</h4>
                  <p className="text-slate-700 leading-relaxed text-sm font-medium font-sans mb-6 flex-grow">
                     Smart flat-pack capability allows for rapid deployment in difficult terrain. Our precision modular connections ensure IP66/67 ratings are rigorously maintained after assembly.
                  </p>
                  
                  <div className="border-t border-gray-100 pt-6 mt-auto">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center">
                      See Specs <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform"/>
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
                 <h2 className="text-xs md:text-sm font-bold text-emphz-teal tracking-[0.2em] uppercase mb-4 font-display">Applications</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-white font-display">Industries Powering India</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {INDUSTRY_IMAGES.map((item, idx) => (
                  <div key={idx} className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                     <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                     <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h4 className="text-2xl font-bold text-white font-display mb-2 group-hover:text-emphz-teal transition-colors">{item.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{item.desc}</p>
                     </div>
                  </div>
               ))}
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
                  <img src={post.imageUrl} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
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