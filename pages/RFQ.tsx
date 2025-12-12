import React, { useState, useEffect } from 'react';
import { Trash2, Send, CheckCircle, MapPin, AlertCircle, Briefcase, Clock, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import { useRFQStore } from '../stores/rfqStore';
import { Link } from 'react-router-dom';

// Cookie Helpers
const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

const RFQ: React.FC = () => {
  // Using Zustand Store
  const items = useRFQStore((state) => state.items);
  const removeItem = useRFQStore((state) => state.removeItem);
  const clearCart = useRFQStore((state) => state.clear);

  const [submitted, setSubmitted] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: 'Kerala',
    industry: 'Construction',
    urgency: 'Standard',
    message: ''
  });

  // Load user details from cookie on mount
  useEffect(() => {
    const savedUser = getCookie('emphz_user_info');
    if (savedUser) {
      try {
        const parsed = JSON.parse(decodeURIComponent(savedUser));
        setFormData(prev => ({
          ...prev,
          name: parsed.name || '',
          company: parsed.company || '',
          email: parsed.email || '',
          phone: parsed.phone || '' // Also try to load phone if saved
        }));
      } catch (e) {
        console.error('Failed to parse user cookie', e);
      }
    }
  }, []);

  // Calculate Lead Score dynamically
  useEffect(() => {
    let score = 10;
    if (formData.urgency === 'Immediate') score += 40;
    if (formData.urgency === 'OneMonth') score += 20;
    if (formData.industry === 'Utilities' || formData.industry === 'OilGas') score += 30;
    if (formData.email.includes('.com') && !formData.email.includes('gmail') && !formData.email.includes('yahoo')) score += 15;
    if (items.length > 2) score += 20;
    setLeadScore(Math.min(score, 100));
  }, [formData, items]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save user details to cookie for future use (Lead Gen Optimization)
    setCookie('emphz_user_info', encodeURIComponent(JSON.stringify({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone
    })), 365); // Remember for 1 year

    setTimeout(() => {
      setSubmitted(true);
      clearCart();
      window.scrollTo(0, 0);
    }, 1200);
  };

  const getPriorityColor = () => {
    if (leadScore < 40) return 'text-gray-400 bg-gray-100';
    if (leadScore < 70) return 'text-blue-500 bg-blue-500/10';
    return 'text-emphz-teal bg-emphz-teal/10';
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-emphz-navy flex items-center justify-center p-4 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl max-w-lg w-full text-center relative z-10 shadow-2xl">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_#22c55e]">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black text-white mb-2 font-display tracking-tight">TRANSMISSION RECEIVED</h2>
          <div className="text-green-400 font-mono text-xs uppercase tracking-[0.2em] mb-8">Ref ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
          
          <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/5">
             <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400 font-mono">Routing Target:</span>
                <span className="text-emphz-teal font-bold font-mono">
                  {formData.region === 'Kerala' ? 'Vadakara Ops Center' : 'Mysore Factory HQ'}
                </span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-mono">Priority Level:</span>
                <span className={`font-bold font-mono ${leadScore > 60 ? 'text-red-400' : 'text-blue-400'}`}>
                  {leadScore > 60 ? 'HIGH VELOCITY' : 'STANDARD QUEUE'}
                </span>
             </div>
          </div>

          <p className="text-gray-300 text-sm mb-8 leading-relaxed font-sans">
            Our engineering team has received your manifest. A formal quotation and technical datasheet package will be dispatched to <span className="text-white font-bold">{formData.email}</span> within 24 hours.
          </p>

          <Link to="/" className="inline-flex items-center justify-center w-full bg-emphz-teal text-emphz-navy font-bold py-4 rounded-xl hover:bg-white transition-all uppercase tracking-widest text-xs font-display">
            Return to Command Center
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans">
      
      {/* Left Panel: The Manifest (Dark Mode) */}
      <div className="w-full lg:w-5/12 bg-emphz-navy text-white relative overflow-hidden flex flex-col order-2 lg:order-1">
         <div className="absolute inset-0 bg-carbon-fibre opacity-20"></div>
         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-emphz-navy to-transparent"></div>
         
         <div className="p-8 lg:p-12 relative z-10 flex-grow flex flex-col">
            <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-white mb-8 text-xs font-bold uppercase tracking-widest font-display transition-colors">
               ← Modify Configuration
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-black font-display mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
               PROJECT <br/> MANIFEST
            </h1>
            <p className="text-emphz-teal font-mono text-xs uppercase tracking-wider mb-10">
               // QUANTITY_CHECK // SPEC_VALIDATION
            </p>

            <div className="flex-grow space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700">
               {items.length === 0 ? (
                  <div className="p-8 border-2 border-dashed border-white/10 rounded-2xl text-center">
                     <p className="text-gray-500 text-sm mb-4">No assets configured.</p>
                     <Link to="/products" className="text-emphz-teal font-bold text-xs hover:underline uppercase tracking-wide">Browse Solutions</Link>
                  </div>
               ) : (
                  items.map((item, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors">
                        <div>
                           <div className="text-white font-bold font-display text-sm">{item.name}</div>
                           <div className="text-[10px] text-gray-500 font-mono mt-1">ID: {item.id}</div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="bg-black/40 px-3 py-1 rounded text-xs font-mono text-emphz-teal border border-white/5">
                              x{item.quantity}
                           </div>
                           <button 
                             onClick={() => removeItem(item.id)}
                             className="text-gray-600 hover:text-red-400 transition-colors"
                             aria-label="Remove item"
                           >
                              <Trash2 size={16} />
                           </button>
                        </div>
                     </div>
                  ))
               )}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
               <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-6 font-display">
                  <div className="flex items-center gap-2">
                     <ShieldCheck size={14} className="text-emphz-teal" /> Verified Specs
                  </div>
                  <div className="flex items-center gap-2">
                     <Zap size={14} className="text-emphz-teal" /> Fast Track RFQ
                  </div>
                  <div className="flex items-center gap-2">
                     <Globe size={14} className="text-emphz-teal" /> Global Export
                  </div>
                  <div className="flex items-center gap-2">
                     <Cpu size={14} className="text-emphz-teal" /> Precision Engineered
                  </div>
               </div>
               
               <div className="bg-gradient-to-r from-emphz-teal to-cyan-500 h-1 w-full rounded-full opacity-20"></div>
            </div>
         </div>
      </div>

      {/* Right Panel: Logistics Data (Light Mode) */}
      <div className="w-full lg:w-7/12 bg-gray-50 p-8 lg:p-12 overflow-y-auto order-1 lg:order-2">
         <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-emphz-navy font-display">Procurement Details</h2>
               
               {/* Lead Score Indicator */}
               <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold font-mono transition-all duration-500 ${getPriorityColor()}`}>
                  <div className="relative w-2 h-2">
                     <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${leadScore > 60 ? 'bg-red-400' : 'bg-blue-400'}`}></span>
                     <span className={`relative inline-flex rounded-full h-2 w-2 ${leadScore > 60 ? 'bg-red-500' : 'bg-blue-500'}`}></span>
                  </div>
                  <span>PRIORITY: {leadScore}%</span>
               </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
               {/* Section 1: Context */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display flex items-center">
                     <Briefcase size={14} className="mr-2" /> Project Context
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-[10px] font-bold text-emphz-navy uppercase mb-1 font-mono">Industry Sector</label>
                        <select 
                           name="industry"
                           value={formData.industry}
                           onChange={handleChange}
                           className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-emphz-navy font-medium focus:ring-2 focus:ring-emphz-teal focus:border-transparent outline-none transition-all"
                        >
                           <option value="Construction">Construction / Civil</option>
                           <option value="Utilities">Power & Utilities</option>
                           <option value="OilGas">Oil & Gas / Petrochem</option>
                           <option value="Telecom">Telecom / Data</option>
                           <option value="Hospitality">Hospitality / Resorts</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold text-emphz-navy uppercase mb-1 font-mono">Urgency / Timeline</label>
                        <select 
                           name="urgency"
                           value={formData.urgency}
                           onChange={handleChange}
                           className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-emphz-navy font-medium focus:ring-2 focus:ring-emphz-teal focus:border-transparent outline-none transition-all"
                        >
                           <option value="Standard">Standard (4-6 Weeks)</option>
                           <option value="Immediate">Immediate (Stock Check)</option>
                           <option value="OneMonth">Project Planning (1-3 Mo)</option>
                           <option value="Budget">Budgetary Only</option>
                        </select>
                     </div>
                  </div>
               </div>

               {/* Section 2: Contact */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display flex items-center">
                     <MapPin size={14} className="mr-2" /> Destination & Contact
                  </h3>
                  
                  <div className="mb-6">
                     <label className="block text-[10px] font-bold text-emphz-navy uppercase mb-1 font-mono">Region / Routing</label>
                     <div className="relative">
                        <select 
                           name="region"
                           value={formData.region}
                           onChange={handleChange}
                           className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-emphz-navy font-medium focus:ring-2 focus:ring-emphz-teal focus:border-transparent outline-none transition-all appearance-none"
                        >
                           <option value="Kerala">Kerala (Vadakara Hub)</option>
                           <option value="Karnataka">Karnataka (Mysore HQ)</option>
                           <option value="TamilNadu">Tamil Nadu</option>
                           <option value="RestOfIndia">Rest of India</option>
                           <option value="International">International Export</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                           <MapPin size={16} />
                        </div>
                     </div>
                     <p className="text-[10px] text-emphz-teal mt-2 font-mono">
                        * Routing: {formData.region === 'Kerala' ? 'Direct to Kerala Ops Team' : 'Direct to Central Manufacturing'}
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name *" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emphz-teal outline-none"
                     />
                     <input 
                        type="text" 
                        name="company" 
                        placeholder="Company Name *" 
                        required 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emphz-teal outline-none"
                     />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input 
                        type="email" 
                        name="email" 
                        placeholder="Work Email *" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emphz-teal outline-none"
                     />
                     <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number *" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emphz-teal outline-none"
                     />
                  </div>
               </div>

               {/* Section 3: Notes */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">Custom Requirements</h3>
                   <textarea 
                      name="message" 
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter specific dimensional constraints, IP rating requirements, or custom color codes..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-emphz-teal outline-none"
                   ></textarea>
               </div>

               <button 
                  type="submit" 
                  disabled={items.length === 0}
                  className="w-full bg-emphz-navy text-white font-black py-5 rounded-xl hover:bg-emphz-teal transition-all shadow-xl shadow-emphz-navy/20 hover:shadow-emphz-teal/40 text-sm uppercase tracking-[0.2em] font-display transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
               >
                  <Send size={18} /> Initialize Request
               </button>
               
               <p className="text-center text-[10px] text-gray-400 font-mono">
                  <Clock size={10} className="inline mr-1" />
                  Average response time: &lt; 4 Hours during business hours.
               </p>
            </form>
         </div>
      </div>
    </div>
  );
};

export default RFQ;