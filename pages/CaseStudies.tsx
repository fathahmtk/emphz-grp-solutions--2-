import React, { useEffect } from 'react';
import { MOCK_CASE_STUDIES } from '../constants';
import { MapPin, ArrowRight, Building2, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CaseStudies: React.FC = () => {
  // Inject JSON-LD Schema
  useEffect(() => {
    const scriptId = 'json-ld-casestudies';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Emphz GRP Project Case Studies",
      "description": "Real-world examples of how Emphz GRP solutions solve complex infrastructure challenges.",
      "itemListElement": MOCK_CASE_STUDIES.map((cs, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": cs.title,
          "image": cs.imageUrl,
          "description": cs.challenge + ' ' + cs.solution + ' ' + cs.outcome,
          "author": { "@type": "Organization", "name": "Emphz" },
          "publisher": { "@type": "Organization", "name": "Emphz" },
          "locationCreated": { "@type": "Place", "name": cs.location },
          "mainEntityOfPage": window.location.href, // In a real app with unique URLs, this would be more specific
        }
      }))
    };

    script.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    }
  }, []);

  return (
    <div className="bg-emphz-navy min-h-screen text-white selection:bg-emphz-teal selection:text-white">
      <SEO
        title="Case Studies | Real-World GRP Applications | EMPHZ"
        description="Explore real-world examples of how Emphz GRP solutions solve complex infrastructure challenges in utilities, rail, and coastal environments."
      />
      {/* Cinematic Hero */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-carbon-fibre opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emphz-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emphz-teal animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 font-display">Proven Performance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-display tracking-tight leading-none">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal to-cyan-400">SUCCESS STORIES</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            From the saline coasts of Kerala to the industrial hubs of Karnataka, explore how Emphz GRP solutions solve critical infrastructure challenges.
          </p>
        </div>
      </div>

      {/* Case Study Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-20">
          {MOCK_CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className="group relative">
              {/* Connector Line (Desktop) */}
              {idx !== MOCK_CASE_STUDIES.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-[-80px] w-px h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
              )}

              <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Side */}
                <div className="w-full lg:w-3/5 relative perspective-1000">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 group-hover:border-emphz-teal/30 transition-all duration-500 transform group-hover:rotate-y-2">
                    <div className="absolute inset-0 bg-gray-900 animate-pulse z-0"></div>
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover transform transition-transform duration-1000 group-hover:scale-110 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-transparent to-transparent opacity-80 z-20"></div>

                    {/* Floating Stats on Image */}
                    <div className="absolute bottom-6 left-6 z-30 flex flex-wrap gap-3">
                      <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <MapPin size={12} className="text-emphz-teal" />
                        <span className="text-xs font-mono font-bold">{study.location}</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <Building2 size={12} className="text-blue-400" />
                        <span className="text-xs font-mono font-bold">{study.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-cubes opacity-20 z-0 ${idx % 2 === 1 ? 'right-auto -left-6' : ''}`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 relative">
                  <div className="text-[10px] font-mono text-emphz-teal mb-3 flex items-center gap-2">
                    <span className="w-8 h-px bg-emphz-teal"></span>
                    CASE STUDY 0{idx + 1}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-display leading-tight">
                    {study.title}
                  </h2>

                  <div className="space-y-8 relative">
                    {/* Vertical Line for Content */}
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-400">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-display">The Challenge</h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-light">{study.challenge}</p>
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emphz-teal">
                        <span className="w-2 h-2 rounded-full bg-emphz-teal"></span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-display">The Solution</h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-light">{study.solution}</p>
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                        <CheckCircle2 size={12} />
                      </div>
                      <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-r-xl border-l-2 border-green-500">
                        <h4 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1 font-display">Outcome</h4>
                        <p className="text-white font-bold text-sm">{study.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Impact Metric</span>
                      <div className="flex items-center text-emphz-teal font-mono font-bold">
                        <TrendingUp size={16} className="mr-2" />
                        <span>100% ROI &lt; 2 Yrs</span>
                      </div>
                    </div>
                    <Link to="/rfq" className="bg-white text-emphz-navy px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emphz-teal hover:text-white transition-all shadow-lg hover:shadow-emphz-teal/50">
                      Start Your Project
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6 font-light">Have a challenging environment? Let's engineer a solution.</p>
          <Link to="/contact" className="inline-flex items-center text-emphz-teal hover:text-white font-bold tracking-widest uppercase text-sm transition-colors group">
            Contact Engineering Team <ArrowRight className="ml-2 group-hover:tranneutral-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;