import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Settings,
  Users,
  Factory,
  Award,
  ChevronRight,
  Target,
  FlaskConical,
  Truck
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-industrial-900 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={10} />
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight max-w-4xl uppercase">
            Engineering Durable <br />
            <span className="text-accent-blue">Industrial Assets.</span>
          </h1>
          <p className="text-lg md:text-xl text-industrial-300 max-w-2xl font-light leading-relaxed border-l border-accent-blue pl-6">
            EMPHZ GRP Solutions manufactures precision composite systems for critical infrastructure, solving corrosion challenges through advanced material science.
          </p>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Corporate Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.3em] mb-6">Corporate Profile</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-industrial-900 mb-8 tracking-tight uppercase">Operational Excellence.</h3>
            <div className="space-y-6 text-industrial-600 font-light leading-relaxed">
              <p>
                Founded to bridge the gap between material innovation and industrial demand, EMPHZ GRP Solutions specializes in Glass Reinforced Polyester (GRP) systems.
              </p>
              <p>
                From our manufacturing hub in Mysuru, Karnataka, we deliver high-performance enclosures, cabins, and structural modules designed for 25+ years of service life in aggressive environments.
              </p>
            </div>
          </div>
          <div className="bg-industrial-50 p-10 border border-industrial-100 rounded-sm">
            <h4 className="text-[11px] font-bold text-industrial-900 uppercase tracking-[0.2em] mb-10 pb-4 border-b border-industrial-200">Facility Capabilities</h4>
            <div className="space-y-8">
              {[
                { label: 'Forming', val: 'SMC Hot Press & Hand Layup', icon: <Settings size={18} /> },
                { label: 'Scale', val: '50,000+ Sq. Ft. Manufacturing Space', icon: <Factory size={18} /> },
                { label: 'Workforce', val: '120+ Specialized Technicians', icon: <Users size={18} /> },
                { label: 'Compliance', val: 'ISO 9001:2015 QMS Certified', icon: <Award size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-industrial-300">{item.icon}</div>
                  <div>
                    <div className="text-[10px] font-bold text-industrial-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-medium text-industrial-900 uppercase tracking-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-industrial-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
            <h2 className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.3em] mb-4">Core Principles</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-industrial-900 tracking-tight uppercase">Asset Integrity.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield size={24} />,
                title: 'Corrosion Resistance',
                desc: 'Inert to high salinity, acidic soil, and humidity. Ideal for coastal and industrial deployments.'
              },
              {
                icon: <Target size={24} />,
                title: 'Precision Tolerances',
                desc: 'Standardized molding processes ensure consistent wall thickness and tight dimensional accuracy.'
              },
              {
                icon: <FlaskConical size={24} />,
                title: 'Material Science',
                desc: 'Optimized glass-to-resin ratios for superior strength-to-weight performance compared to steel.'
              }
            ].map((pill, i) => (
              <div key={i} className="space-y-6">
                <div className="text-accent-blue">{pill.icon}</div>
                <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest">{pill.title}</h4>
                <p className="text-sm text-industrial-600 font-light leading-relaxed">{pill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Message / Trust Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32 border-b border-industrial-100">
        <div className="max-w-3xl">
          <h2 className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.3em] mb-6">Strategic Vision</h2>
          <p className="text-2xl md:text-3xl font-light text-industrial-900 leading-snug mb-10 italic">
            "We serve the infrastructure that powers national growth. Our commitment is to engineering simplicity and material longevity."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-industrial-200"></div>
            <div>
              <div className="text-[11px] font-bold text-industrial-900 uppercase tracking-widest">Muhammed Rashik P</div>
              <div className="text-[10px] text-industrial-400 font-mono uppercase">Managing Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-32">
        <div className="bg-industrial-900 p-12 md:p-20 rounded-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 uppercase tracking-tight">Deploying at Scale.</h2>
            <p className="text-industrial-300 font-light mb-12">
              From individual units to regional grid rollouts, our logistics and manufacturing systems are built for consistent delivery across India.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="btn-industrial-white px-8 py-4 uppercase tracking-[0.2em] font-bold text-xs">Request Technical Data</Link>
              <div className="flex items-center gap-3 text-industrial-400 font-mono text-[10px] uppercase">
                <Truck size={14} /> Integrated Supply Chain
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 skew-x-[-15deg] translate-x-1/4"></div>
        </div>
      </section>
    </div>
  );
};

export default About;