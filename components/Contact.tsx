
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, MapPin, ShoppingBag, Send, User, Building } from 'lucide-react';
import { OFFICES } from '../data';

interface ContactProps {
  quoteItems?: string[];
}

const Contact: React.FC<ContactProps> = ({ quoteItems = [] }) => {
  const [activeOffice, setActiveOffice] = useState(OFFICES[0]);

  return (
    <section id="contact" className="bg-white py-32 text-emphz-blue">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">

          {/* Left: Locations & Info Card */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="flex-grow bg-neutral-50 rounded-[3rem] overflow-hidden shadow-xl border border-neutral-100 flex flex-col">
              <div className="h-64 relative">
                <img
                  src={activeOffice.image}
                  alt={activeOffice.name}
                  className="w-full h-full object-cover brightness-75 transition-all duration-700"
                  key={activeOffice.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <span className="bg-emphz-silver text-emphz-blue px-4 py-2 rounded-full font-mono text-[9px] uppercase tracking-[0.2em] shadow-lg">
                    {activeOffice.type} HUB
                  </span>
                </div>
              </div>

              <div className="p-10 flex-grow">
                <h3 className="text-3xl font-bold text-emphz-blue mb-4 tracking-tight uppercase">{activeOffice.name}</h3>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 text-neutral-500">
                    <MapPin className="w-5 h-5 text-emphz-blue shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed">{activeOffice.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-500 font-bold">
                    <Phone className="w-5 h-5 text-emphz-blue" />
                    <span className="text-lg">{activeOffice.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-500">
                    <Mail className="w-5 h-5 text-emphz-blue" />
                    <span className="text-sm font-mono">{activeOffice.email}</span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-6">Select Facility</p>
                  <div className="flex flex-wrap gap-3">
                    {OFFICES.map((office) => (
                      <button
                        key={office.id}
                        onClick={() => setActiveOffice(office)}
                        className={`px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all border ${activeOffice.id === office.id
                          ? 'bg-emphz-silver text-emphz-blue border-emphz-silver shadow-lg'
                          : 'bg-white text-neutral-400 border-neutral-200 hover:border-emphz-blue'
                          }`}
                      >
                        {office.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="lg:w-3/5">
            <div className="bg-emphz-blue rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-12 text-white/5 font-mono text-8xl font-bold pointer-events-none">SYNC</div>

              <div className="relative z-10">
                <div className="mb-12">
                  <span className="font-mono text-emphz-silver text-xs font-bold tracking-[0.5em] uppercase mb-4 block">GET IN TOUCH</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Initiate Enquiry.</h2>
                  <p className="text-neutral-400 font-light text-lg">
                    Technical response within 24 business hours.
                  </p>
                </div>

                {/* Selected Items */}
                {quoteItems.length > 0 && (
                  <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4 text-emphz-silver">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Systems Ready for Specification ({quoteItems.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quoteItems.map((item, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                        <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl text-white px-12 py-4 focus:outline-none focus:border-emphz-silver transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1">Organization</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                        <input type="text" placeholder="Corp ID" className="w-full bg-white/5 border border-white/10 rounded-2xl text-white px-12 py-4 focus:outline-none focus:border-emphz-silver transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1">Email Address</label>
                    <input type="email" placeholder="email@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl text-white px-6 py-4 focus:outline-none focus:border-emphz-silver transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-1">Project Details</label>
                    <textarea rows={4} placeholder="Describe site conditions & structural requirements..." className="w-full bg-white/5 border border-white/10 rounded-2xl text-white px-6 py-4 focus:outline-none focus:border-emphz-silver transition-all resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-emphz-silver text-emphz-blue rounded-full font-bold py-6 mt-4 tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-4 group hover:bg-white shadow-2xl shadow-neutral-700/20">
                    TRANSMIT REQUEST <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
