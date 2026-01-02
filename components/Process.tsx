
import React from 'react';
import { PROCESS_STEPS } from '../data';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white text-emphz-blue relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="04"
          category="Execution Pipeline"
          title="Rapid Deployment Protocol"
          subtitle="Engineered for velocity. Our composite modules are designed for immediate site readiness, reducing traditional civil work from months to days."
          align="center"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="group relative">
              {/* Vertical Connector Line for mobile */}
              {index !== PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-full h-px border-t border-dashed border-neutral-200 z-0"></div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-emphz-blue mb-8 group-hover:bg-emphz-silver group-hover:text-emphz-blue group-hover:shadow-2xl group-hover:shadow-neutral-300/50 transition-all duration-700">
                  <div className="scale-125">{step.icon}</div>
                </div>

                <span className="font-mono text-emphz-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-3">STEP 0{step.id}</span>
                <h3 className="text-xl font-bold text-emphz-blue mb-4 uppercase tracking-tight group-hover:text-neutral-500 transition-colors">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-24 bg-emphz-blue rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <h4 className="text-white text-3xl font-bold mb-2 tracking-tight">Ready to initiate deployment?</h4>
            <p className="text-neutral-400 font-light">Average cycle time from order to site readiness is under 14 days.</p>
          </div>
          <a href="#contact" className="bg-emphz-silver text-emphz-blue px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] hover:bg-white transition-all uppercase flex items-center gap-3">
            START CONSULTATION <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
