import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Gem, Users, Anchor, Lightbulb, Zap, CheckCircle, MapPin, PenTool, Calendar, Award, Rocket, Shield, FileCheck, XCircle, AlertTriangle, Scale, BatteryCharging, Clock, Truck, Droplet, Hammer, Feather, Factory, Recycle, Leaf, Microscope, Sun, Quote, Check } from 'lucide-react';

// Self-contained animated statistic component
const AnimatedStatistic: React.FC<{
  endValue: number;
  duration?: number;
  suffix?: string;
  label: string;
}> = ({ endValue, duration = 2000, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.current) {
          isVisible.current = true; // Prevent re-triggering
          const start = 0;
          const end = endValue;
          const startTime = Date.now();

          const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              // Ease-out function for a smoother stop
              const easedProgress = progress * (2 - progress);
              setCount(easedProgress * (end - start) + start);
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  const displayValue = endValue % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <div ref={ref}>
      <div className="text-4xl md:text-5xl font-black text-emphz-navy mb-2 font-display">
        {displayValue}
        {suffix}
      </div>
      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-bold font-display">
        {label}
      </div>
    </div>
  );
};

const About: React.FC = () => {

  const values = [
    {
      icon: <Anchor className="w-8 h-8 text-emphz-teal" />,
      title: "Long Service Life",
      description: "Our products are designed for 25+ years of use without rusting or the need for repainting, even in coastal environments.",
      statistic: { value: 25, suffix: '+ Year', label: 'Service Life' }
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-emphz-teal" />,
      title: "Material Weight",
      description: "GRP components are much lighter than steel, making them easier to handle and mount at typical project sites.",
      statistic: { value: 40, suffix: '%', label: 'Lighter Than Steel' }
    },
    {
      icon: <Users className="w-8 h-8 text-emphz-teal" />,
      title: "Project Support",
      description: "We work directly with site engineers to ensure the enclosures and cabins meet the exact drawings and specs required.",
      statistic: { value: 500, suffix: '+', label: 'Sites Supplied' }
    },
  ];

  const timelineEvents = [
    { year: "2018", title: "The Spark", description: "Observing the rapid corrosion of steel in Kerala's coastal infrastructure, our founders identified a critical need for a durable material alternative.", icon: <Zap /> },
    { year: "2020", title: "The Foundation", description: "Emphz was born. We established our manufacturing hub in Mysore, investing in advanced Hot Press Molding technology.", icon: <PenTool /> },
    { year: "2023", title: "Major Project Milestone", description: "Successfully deployed over 200 custom IP66 enclosures for a major coastal resort, confirming our GRP's performance in high-salinity environments.", icon: <Award /> },
    { year: "2025", title: "The Future", description: "Expanding our product line into renewable energy sectors, designing specialized enclosures for solar and wind farm infrastructure.", icon: <Rocket /> },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092921462-6870002878b6?q=80&w=2670&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-7xl font-semibold mb-4 md:mb-6 max-w-4xl leading-tight text-white tracking-tight">
            Kerala Roots.<br /> <span className="text-blue-500">Mysore Manufactured.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light border-l-2 border-blue-600 pl-4 md:pl-6">
            EMPHZ GRP Solutions is an engineering-driven enterprise manufacturing critical infrastructure components. We solve the corrosion crisis using advanced GRP material science.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xs md:text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3 md:mb-4">Corporate Overview</h2>
              <h3 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">Serving Critical Infrastructure.</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">
                EMPHZ GRP Solutions manufactures composite systems for electrical, telecom, and industrial sectors. With operations based in Mysore, Karnataka, we provide end-to-end fabrication from design to delivery.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Our focus is on industrial reliability, using consistent molding processes to deliver products that survive in the most aggressive environments.
              </p>
            </div>
            <div className="lg:w-1/2 glass p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 bg-white/60 backdrop-blur-md">
              <h4 className="text-xl font-semibold text-slate-900 mb-8 border-b border-slate-100 pb-4 uppercase tracking-wider">Manufacturing Focus</h4>
              <ul className="space-y-6">
                {[
                  { title: "Material Science", desc: "Manufacture high-spec GRP enclosures and modular units" },
                  { title: "Custom Fabrication", desc: "Bespoke engineering based on approved technical drawings" },
                  { title: "Project Delivery", desc: "Integrated supply chain for large-scale infrastructure projects" }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Check size={14} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-slate-600 text-sm md:text-base leading-snug">
                      <span className="font-bold text-slate-900">{item.title}:</span> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs md:text-sm font-semibold text-blue-700 tracking-widest uppercase mb-3 md:mb-4">Operating Principles</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 md:mb-12">Built for the Long Term.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Anchor className="w-8 h-8 text-blue-600" />,
                title: "Asset Longevity",
                description: "Systems designed for 25+ years of operational life without corrosive degradation or structural fatigue.",
                statistic: { value: 25, suffix: '+ Year', label: 'Service Life' }
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
                title: "Logistics Efficiency",
                description: "GRP composites provide a 75% weight reduction compared to steel, simplifying site handling and installation.",
                statistic: { value: 40, suffix: '%', label: 'Lighter Than Steel' }
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Site Partnership",
                description: "Direct collaboration with engineering teams to ensure precise alignment with project-specific schematics.",
                statistic: { value: 500, suffix: '+', label: 'Projects Completed' }
              },
            ].map((value, i) => (
              <div key={i} className="glass p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center bg-slate-50/50">
                <div className="mb-4 bg-white p-4 rounded-2xl shadow-sm">{value.icon}</div>
                <h4 className="text-lg md:text-xl font-semibold text-slate-900 my-3 md:my-4">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{value.description}</p>
                <div className="mt-auto pt-6 border-t border-slate-200 w-full">
                  <AnimatedStatistic
                    endValue={value.statistic.value}
                    suffix={value.statistic.suffix}
                    label={value.statistic.label}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xs md:text-sm font-semibold text-blue-700 tracking-widest uppercase mb-3 md:mb-4">Manufacturing Hub</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 md:mb-6">Precision Composite Casting.</h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 font-light">
                Our Mysore facility utilizes industrial-grade molding techniques to maintain tight dimensional tolerances and uniform material density.
              </p>

              <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold font-mono text-sm md:text-base">01</div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 mb-1 md:mb-2 text-blue-600">SMC Press & Hand Layup</h4>
                    <p className="text-xs md:text-sm text-slate-600">
                      High-tonnage hot press molding for standard enclosures and multi-axial layup for structural modular units.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold font-mono text-sm md:text-base">02</div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 mb-1 md:mb-2 text-blue-600">Automated Pultrusion</h4>
                    <p className="text-xs md:text-sm text-slate-600">
                      Continuous profile manufacturing for high-strength beams, cable management systems, and structural framing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold font-mono text-sm md:text-base">03</div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl text-slate-900 mb-1 md:mb-2 text-blue-600">Final Assembly</h4>
                    <p className="text-xs md:text-sm text-slate-600">
                      Integrated fitting of electrical components, sealing systems, and structural hardware before rigorous QA dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="glass p-4 md:p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center bg-white/40">
                  <Factory className="w-8 h-8 md:w-12 md:h-12 text-slate-400 mb-3 md:mb-4" />
                  <div className="font-bold text-xl md:text-2xl text-slate-900">50,000+</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Sq. Ft. Facility</div>
                </div>
                <div className="glass p-4 md:p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center bg-white/40">
                  <Users className="w-8 h-8 md:w-12 md:h-12 text-slate-400 mb-3 md:mb-4" />
                  <div className="font-bold text-xl md:text-2xl text-slate-900">120+</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Technicians</div>
                </div>
                <div className="col-span-2 bg-slate-900 text-white p-6 md:p-8 rounded-2xl flex items-center justify-between shadow-xl">
                  <div>
                    <div className="font-bold text-xl md:text-2xl">ISO Cert.</div>
                    <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Quality Management System</div>
                  </div>
                  <Award className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-xs md:text-sm font-semibold text-blue-700 tracking-widest uppercase mb-3 md:mb-4">Internal Controls</h2>
              <h3 className="text-3xl font-semibold text-slate-900 mb-3 md:mb-4">Matrix Testing.</h3>
              <p className="text-slate-600 text-sm md:text-base font-light">
                Our facility maintains a dedicated compliance lab where every production batch is validated against international standards for structural integrity.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full">
              <div className="glass p-4 md:p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <Microscope className="w-6 h-6 md:w-8 md:h-8 text-slate-900 mb-2 md:mb-3" />
                <h4 className="font-semibold text-slate-900 text-sm mb-1 md:mb-2">Hydraulic Loading</h4>
                <p className="text-[10px] md:text-xs text-slate-500">Validation of load-bearing structures and IP-rated enclosures under extreme pressure.</p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <Sun className="w-6 h-6 md:w-8 md:h-8 text-slate-900 mb-2 md:mb-3" />
                <h4 className="font-semibold text-slate-900 text-sm mb-1 md:mb-2">Accelerated Weathering</h4>
                <p className="text-[10px] md:text-xs text-slate-500">UV simulation to verify color fastness and resin stability for outdoor installations.</p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl border border-slate-100 bg-slate-50/50">
                <Hammer className="w-6 h-6 md:w-8 md:h-8 text-slate-900 mb-2 md:mb-3" />
                <h4 className="font-semibold text-slate-900 text-sm mb-1 md:mb-2">IK10 Impact Tests</h4>
                <p className="text-[10px] md:text-xs text-slate-500">Standardized drop tests to ensure high protection ratings against mechanical impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-slate-100 border-t border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Leaf className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
          <h2 className="text-3xl font-semibold text-slate-900 mb-3 md:mb-4">Sustainable Lifecycle</h2>
          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 font-light italic">
            "Sustainability through durability. GRP systems drastically reduce the replacement frequency compared to mild steel, lowering the total carbon footprint of national infrastructure."
          </p>
          <div className="inline-flex items-center glass px-5 py-2 md:px-6 md:py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-xs md:text-sm bg-white/60">
            <Recycle className="mr-2 w-4 h-4 text-blue-600" /> Circular Processing: Recyclable via Cement Kiln Co-processing
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Muhammed Rashik P - Managing Director"
                  className="w-full h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 glass bg-slate-900/40 border-t border-white/10">
                  <p className="font-semibold text-white text-xl">Muhammed Rashik P</p>
                  <p className="text-blue-400 text-xs uppercase tracking-widest font-mono">Managing Director</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <Quote className="text-blue-600 w-12 h-12 mb-6 opacity-20" />
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-8 leading-tight">
                Architectural Resilience.
              </h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-light">
                <p>
                  "Our core objective is to build GRP systems that perform reliably in aggressive site conditions. Engineering simplicity is the ultimate sophistication."
                </p>
                <div className="pt-4 text-sm non-italic text-slate-500 border-l-2 border-blue-600 pl-6">
                  <p>
                    As a Kerala-managed entity with production in Mysore, we merge strategic engineering vision with manufacturing capacity. We are committed to securing India's industrial assets against the elements.
                  </p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xl text-slate-900 font-semibold font-mono">EMPHZ_MD_001</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-blue-700 uppercase tracking-widest">Emphz Engineering</div>
                  <div className="text-[10px] text-slate-400 font-mono">CODE: CORE_DYN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-6 tracking-tight">Scale Your Engineering Standards.</h2>
          <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto">
            Collaborate with our technical team to implement composite solutions tailored to your operational environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/rfq" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all uppercase tracking-widest shadow-xl shadow-blue-600/20">
              Initiate Technical Review
            </Link>
            <Link to="/catalog" className="glass bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-all uppercase tracking-widest">
              View Product Matrix
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;