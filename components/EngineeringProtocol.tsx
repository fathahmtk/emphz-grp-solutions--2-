
import React, { useState } from 'react';
import { DraftingCompass, Hammer, Settings2, ShieldCheck, Truck, ClipboardCheck } from 'lucide-react';

const EngineeringProtocol: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "01_CONCEPT_CAD",
      icon: <DraftingCompass className="w-6 h-6" />,
      desc: "Advanced 3D modeling and Finite Element Analysis (FEA) to simulate wind load, seismic stress, and structural integrity.",
      details: ["SolidWorks 2024 Integration", "Wind Load Simulations", "Custom Geometry Tooling"]
    },
    {
      title: "02_TOOLING",
      icon: <Settings2 className="w-6 h-6" />,
      desc: "Precision in-house mold manufacturing using high-grade aluminum or steel, ensuring micron-level accuracy for every batch.",
      details: ["CNC Precision Milling", "Surface Finish Grading", "Multi-part Mold Architecture"]
    },
    {
      title: "03_COMPOSITE_MOLDING",
      icon: <Hammer className="w-6 h-6" />,
      desc: "Automated SMC/RTM molding processes utilizing proprietary resin systems for maximum strength-to-weight ratios.",
      details: ["Isophthalic Resin Systems", "High-Pressure Compression", "Uniform Thickness Control"]
    },
    {
      title: "04_SYSTEM_ASSEMBLY",
      icon: <ClipboardCheck className="w-6 h-6" />,
      desc: "Integration of secondary components including specialized hardware, gaskets, and electrical pre-wiring in a controlled environment.",
      details: ["Robotic PU Gasketing", "SS316 Hardware Integration", "Electrical Pre-fitting"]
    },
    {
      title: "05_FAT_PROTOCOLS",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Factory Acceptance Testing: Every unit undergoes rigorous IP-rating verification, impact tests, and load audits before clearance.",
      details: ["IP67 Ingress Testing", "IK10 Impact Verification", "Dielectric Audit"]
    },
    {
      title: "06_DEPLOYMENT",
      icon: <Truck className="w-6 h-6" />,
      desc: "Synchronized logistics and site deployment, ensuring modular units are operational within 72 hours of arrival.",
      details: ["Flat-pack Logistics", "Rapid Site Jointing", "Operational Handover"]
    }
  ];

  return (
    <section className="py-24 bg-emphz-darker border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">09 / Operational Lifecycle</span>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">THE EMPHZ PROTOCOL</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Our end-to-end industrial workflow ensures that every modular unit meets the world-class standards of global utility and infrastructure projects.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Timeline Selector */}
          <div className="lg:w-1/3 flex flex-col">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-6 p-6 text-left border-l-2 transition-all duration-300 ${
                  activeStep === idx 
                  ? 'bg-emphz-teal/10 border-emphz-teal text-white' 
                  : 'bg-transparent border-white/5 text-neutral-500 hover:bg-white/5 hover:text-neutral-300'
                }`}
              >
                <div className={`transition-transform duration-300 ${activeStep === idx ? 'scale-110 text-emphz-teal' : 'opacity-40'}`}>
                  {step.icon}
                </div>
                <span className="font-mono text-xs font-bold tracking-[0.2em]">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <div className="lg:w-2/3">
             <div className="bg-emphz-dark border border-white/10 p-10 md:p-16 h-full relative group rounded-[2rem]">
                <div className="absolute top-0 right-0 p-12 text-white opacity-[0.02] font-mono text-[12rem] font-bold pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                   0{activeStep + 1}
                </div>

                <div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500" key={activeStep}>
                   <div className="w-16 h-1 bg-emphz-teal mb-10"></div>
                   <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">{steps[activeStep].title.replace('_', ' ')}</h3>
                   <p className="text-neutral-300 text-xl leading-relaxed mb-10 max-w-xl">
                      {steps[activeStep].desc}
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/5">
                      {steps[activeStep].details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 text-neutral-400 font-mono text-xs uppercase tracking-widest">
                           <div className="w-1.5 h-1.5 bg-emphz-teal rounded-full"></div>
                           {detail}
                        </div>
                      ))}
                   </div>

                   <div className="mt-16 flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-emphz-teal" />
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">Verified Protocol Compliance // ISO 9001:2024</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProtocol;
