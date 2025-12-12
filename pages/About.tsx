import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Gem, Users, Anchor, Lightbulb, Zap, CheckCircle, MapPin, PenTool, Calendar, Award, Rocket, Shield, FileCheck, XCircle, AlertTriangle, Scale, BatteryCharging, Clock, Truck, Droplet, Hammer, Feather, Factory, Recycle, Leaf, Microscope, Sun, Quote } from 'lucide-react';

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
          let start = 0;
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
      title: "Uncompromising Durability", 
      description: "Our solutions are engineered to last a generation. We build for long-term performance in the harshest conditions.",
      statistic: { value: 25, suffix: '+ Year', label: 'Design Life' }
    },
    { 
      icon: <Lightbulb className="w-8 h-8 text-emphz-teal" />, 
      title: "Material Innovation", 
      description: "We relentlessly pursue advanced GRP composites, pushing the boundaries of strength, resilience, and design.",
      statistic: { value: 40, suffix: '%', label: 'Lighter Than Steel' }
    },
    { 
      icon: <Users className="w-8 h-8 text-emphz-teal" />, 
      title: "Collaborative Partnership", 
      description: "Your project is our project. We function as an extension of your engineering team, from start to finish.",
      statistic: { value: 500, suffix: '+', label: 'Projects Delivered' }
    },
  ];

  const timelineEvents = [
    { year: "2018", title: "The Spark", description: "Observing the rapid corrosion of steel in Kerala's coastal infrastructure, our founders identified a critical need for a superior material solution.", icon: <Zap /> },
    { year: "2020", title: "The Foundation", description: "Emphz was born. We established our state-of-the-art manufacturing hub in Mysore, investing in advanced Hot Press Molding technology.", icon: <PenTool /> },
    { year: "2023", title: "Major Project Milestone", description: "Successfully deployed over 200 custom IP66 enclosures for a major coastal resort, proving our GRP's performance in high-salinity environments.", icon: <Award /> },
    { year: "2025", title: "The Future", description: "Expanding our product line into renewable energy sectors, designing specialized enclosures for solar and wind farm infrastructure.", icon: <Rocket /> },
  ];

  return (
    <div className="bg-white text-emphz-navy">
      {/* Hero Section */}
      <section className="bg-emphz-navy text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092921462-6870002878b6?q=80&w=2670&auto=format&fit=crop')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emphz-navy via-emphz-navy/70 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 max-w-3xl leading-tight font-display">Engineering a Corrosion-Free Future.</h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light border-l-4 border-emphz-teal pl-4 md:pl-6 font-sans">
            We are a team of material scientists and engineers dedicated to solving India's toughest infrastructure challenges with advanced GRP composites.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="pr-0 md:pr-8">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-widest uppercase mb-3 md:mb-4 font-display">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-emphz-navy mb-4 md:mb-6 font-display">To Replace Obsolete Materials.</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-sans">
              Our mission is to systematically replace traditional materials like steel, concrete, and wood with superior, high-performance GRP solutions in critical infrastructure. We aim to eradicate the costs and dangers associated with corrosion and degradation, ensuring longevity and safety for a modern India.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
            <div className="flex items-start">
              <div className="bg-emphz-teal/10 p-3 rounded-full mr-4"><Target className="w-5 h-5 md:w-6 md:h-6 text-emphz-teal" /></div>
              <div>
                <h4 className="font-bold text-base md:text-lg font-display">Engineer for Environment</h4>
                <p className="text-gray-500 text-xs md:text-sm font-sans">Create products perfectly suited for their intended environment, from saline coasts to harsh industrial zones.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emphz-teal/10 p-3 rounded-full mr-4"><Gem className="w-5 h-5 md:w-6 md:h-6 text-emphz-teal" /></div>
              <div>
                <h4 className="font-bold text-base md:text-lg font-display">Deliver Unmatched Quality</h4>
                <p className="text-gray-500 text-xs md:text-sm font-sans">Utilize precision manufacturing and the highest-grade materials to deliver products that exceed international standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
       <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-widest uppercase mb-3 md:mb-4 font-display">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-emphz-navy mb-8 md:mb-12 font-display">The Principles That Guide Us.</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {values.map((value, i) => (
                    <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                        {value.icon}
                        <h4 className="text-lg md:text-xl font-bold my-3 md:my-4 font-display">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed font-sans mb-6 flex-grow">{value.description}</p>
                        <div className="mt-auto pt-6 border-t border-gray-200 w-full">
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
      
      {/* NEW: Manufacturing Excellence Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
               <div className="lg:w-1/2">
                   <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-widest uppercase mb-3 md:mb-4 font-display">How We Build</h2>
                   <h3 className="text-3xl md:text-4xl font-bold text-emphz-navy mb-4 md:mb-6 font-display">Manufacturing Excellence.</h3>
                   <p className="text-base md:text-lg text-gray-600 mb-6 font-light font-sans">
                      At our Mysore facility, we employ multiple advanced composite manufacturing techniques to ensure every product meets specific structural and aesthetic requirements.
                   </p>
                   
                   <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emphz-navy text-white rounded-lg flex items-center justify-center font-bold font-mono text-sm md:text-base">01</div>
                         <div>
                            <h4 className="font-bold text-lg md:text-xl text-emphz-navy mb-1 md:mb-2 font-display">SMC Hot Press Molding</h4>
                            <p className="text-xs md:text-sm text-gray-600 font-sans">
                               Used for our high-volume enclosures and junction boxes. Sheet Molding Compound (SMC) is placed in heated steel molds and pressed under 1000+ tons of pressure. Result: Consistent wall thickness, smooth finish on both sides, and extreme strength.
                            </p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emphz-navy text-white rounded-lg flex items-center justify-center font-bold font-mono text-sm md:text-base">02</div>
                         <div>
                            <h4 className="font-bold text-lg md:text-xl text-emphz-navy mb-1 md:mb-2 font-display">Pultrusion</h4>
                            <p className="text-xs md:text-sm text-gray-600 font-sans">
                               A continuous process used for creating our structural profiles, cable trays, and handrails. Fibers are pulled through a resin bath and heated die, creating infinite lengths of constant cross-section with immense longitudinal strength.
                            </p>
                         </div>
                      </div>
                       <div className="flex gap-4">
                         <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emphz-navy text-white rounded-lg flex items-center justify-center font-bold font-mono text-sm md:text-base">03</div>
                         <div>
                            <h4 className="font-bold text-lg md:text-xl text-emphz-navy mb-1 md:mb-2 font-display">Vacuum Infusion (RTM)</h4>
                            <p className="text-xs md:text-sm text-gray-600 font-sans">
                               Used for large, complex structures like our Smart Cabins and Kiosks. This closed-mold process ensures zero void content and superior fiber-to-resin ratios compared to traditional hand lay-up.
                            </p>
                         </div>
                      </div>
                   </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                     <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <Factory className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mb-3 md:mb-4" />
                        <div className="font-bold text-xl md:text-2xl text-emphz-navy font-display">50,000+</div>
                        <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 font-display">Sq. Ft. Factory</div>
                     </div>
                     <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <Users className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mb-3 md:mb-4" />
                        <div className="font-bold text-xl md:text-2xl text-emphz-navy font-display">120+</div>
                        <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 font-display">Skilled Technicians</div>
                     </div>
                     <div className="col-span-2 bg-emphz-navy text-white p-6 md:p-8 rounded-xl flex items-center justify-between">
                        <div>
                           <div className="font-bold text-xl md:text-2xl font-display">ISO 9001:2015</div>
                           <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 font-display">Certified Facility</div>
                        </div>
                        <Award className="w-10 h-10 md:w-12 md:h-12 text-emphz-teal" />
                     </div>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* NEW: Quality Assurance Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-1/3 text-center md:text-left">
                    <h2 className="text-xs md:text-sm font-bold text-emphz-teal-dark tracking-widest uppercase mb-3 md:mb-4 font-display">Strict Standards</h2>
                    <h3 className="text-3xl font-bold text-emphz-navy mb-3 md:mb-4 font-display">In-House QA Lab</h3>
                    <p className="text-gray-600 text-sm md:text-base font-sans">
                        We don't just manufacture; we test. Our Mysore facility includes a dedicated Quality Assurance lab where batches are rigorously tested against international standards.
                    </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full">
                     <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100">
                        <Microscope className="w-6 h-6 md:w-8 md:h-8 text-emphz-navy mb-2 md:mb-3" />
                        <h4 className="font-bold text-emphz-navy text-sm mb-1 md:mb-2 font-display">Hydrostatic Pressure</h4>
                        <p className="text-[10px] md:text-xs text-gray-500 font-sans">Testing water tanks and enclosures for leaks under high pressure loads.</p>
                     </div>
                     <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100">
                        <Sun className="w-6 h-6 md:w-8 md:h-8 text-emphz-navy mb-2 md:mb-3" />
                        <h4 className="font-bold text-emphz-navy text-sm mb-1 md:mb-2 font-display">UV Aging Chamber</h4>
                        <p className="text-[10px] md:text-xs text-gray-500 font-sans">Simulating years of solar exposure to ensure color stability and structural integrity.</p>
                     </div>
                     <div className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100">
                        <Hammer className="w-6 h-6 md:w-8 md:h-8 text-emphz-navy mb-2 md:mb-3" />
                        <h4 className="font-bold text-emphz-navy text-sm mb-1 md:mb-2 font-display">Impact Testing</h4>
                        <p className="text-[10px] md:text-xs text-gray-500 font-sans">Drop tests to verify IK10 impact resistance ratings for heavy-duty enclosures.</p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW: Sustainability Section */}
       <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <Leaf className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
            <h2 className="text-3xl font-bold text-emphz-navy mb-3 md:mb-4 font-display">Sustainable Infrastructure</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 font-light font-sans">
               Sustainability isn't just about recycling—it's about longevity. By installing an Emphz GRP product that lasts 40 years instead of a steel one that needs replacement every 5 years, you reduce manufacturing carbon footprint by up to 600% over the asset lifecycle.
            </p>
            <div className="inline-flex items-center bg-white px-5 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-green-200 text-green-700 font-bold text-xs md:text-sm font-display">
               <Recycle className="mr-2 w-4 h-4" /> 100% Recyclable via Cement Kiln Processing
            </div>
        </div>
       </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50/50 skew-y-3 transform origin-top-left -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-emphz-teal/20 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                   alt="Muhammed Rashik P - Managing Director" 
                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy/80 via-transparent to-transparent opacity-60"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-display font-bold text-xl">Muhammed Rashik P</p>
                    <p className="font-sans text-xs uppercase tracking-widest opacity-80">Managing Director</p>
                 </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <Quote className="text-emphz-teal w-12 h-12 md:w-16 md:h-16 mb-6 opacity-20" />
              <h2 className="text-3xl md:text-5xl font-black text-emphz-navy mb-8 font-display leading-tight">
                Building Resilience for a Changing World.
              </h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-light font-sans">
                <p>
                  "At Emphz, we realized early on that the infrastructure of tomorrow cannot be built with the materials of yesterday. In a country with such diverse and harsh climates—from the humid coasts of Kerala to the industrial belts of the interior—traditional steel and concrete often fail sooner than expected."
                </p>
                <p>
                  "Our mission was to create a solution that essentially pauses time for your assets. By leveraging advanced GRP composites, we aren't just selling enclosures; we are selling peace of mind. We are selling the guarantee that ten years from now, your critical electrical infrastructure will look and perform exactly as it does today."
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-200 flex items-center justify-between">
                 <div>
                    <div className="font-display text-xl text-emphz-navy italic font-bold">Muhammed Rashik P</div>
                 </div>
                 <div className="text-right">
                    <div className="text-xs font-bold text-emphz-teal-text uppercase tracking-widest">Emphz Engineering</div>
                    <div className="text-[10px] text-gray-400 font-mono">EST. 2020</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="bg-emphz-navy">
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 font-display">Ready to Build with Confidence?</h2>
                <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto font-sans">
                    Partner with us to leverage the power of GRP for your next project. Let's create infrastructure that lasts.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/rfq" className="bg-emphz-teal text-emphz-navy px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:scale-105 transition-transform font-display uppercase tracking-wider">
                        Request a Consultation
                    </Link>
                    <Link to="/case-studies" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-all font-display uppercase tracking-wider">
                        See Our Work
                    </Link>
                </div>
            </div>
       </section>
    </div>
  );
};

export default About;