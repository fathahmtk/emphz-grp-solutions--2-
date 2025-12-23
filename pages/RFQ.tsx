import React, { useState, useEffect } from 'react';
import { Trash2, Send, CheckCircle, MapPin, Briefcase, Clock, ShieldCheck, Zap, Globe, Cpu, FileText, Loader2, Info } from 'lucide-react';
import { useRFQStore } from '../stores/rfqStore';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

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
   const [isSubmitting, setIsSubmitting] = useState(false);
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

   // Validation States
   const [emailError, setEmailError] = useState('');
   const [emailTouched, setEmailTouched] = useState(false);

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
               phone: parsed.phone || ''
            }));
         } catch (e) {
            console.error('Failed to parse user cookie', e);
         }
      }
   }, []);

   const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   };

   const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setEmailTouched(true);
      if (!validateEmail(e.target.value)) {
         setEmailError('Please enter a valid corporate email address.');
      } else {
         setEmailError('');
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));

      if (name === 'email' && emailTouched) {
         if (!validateEmail(value)) {
            setEmailError('Please enter a valid corporate email address.');
         } else {
            setEmailError('');
         }
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      setEmailTouched(true);
      if (!validateEmail(formData.email)) {
         setEmailError('Please enter a valid corporate email address.');
         return;
      }

      setIsSubmitting(true);

      // In a production environment, you would use a service like Formspree or a custom backend
      // const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_id"; 

      try {
         // Simulate API Network Request with a bit of realistic delay
         await new Promise(resolve => setTimeout(resolve, 2000));

         // Save user details to cookie for future sessions
         setCookie('emphz_user_info', encodeURIComponent(JSON.stringify({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone
         })), 365);

         setSubmitted(true);
         clearCart();
         // Scroll to top to show the success message
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
         console.error("Submission failed:", error);
         alert("There was an error logging your requirement. Please try again or contact us directly.");
      } finally {
         setIsSubmitting(false);
      }
   };

   if (submitted) {
      return (
         <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32">
            <SEO title="Quote Requested | EMPHZ" description="Your request for quotation has been received. Our engineering team will contact you shortly with a technical proposal." />
            <div className="bg-white p-12 md:p-20 rounded-xl max-w-xl w-full text-center shadow-2xl border border-industrial-100 animate-up">
               <div className="w-24 h-24 bg-industrial-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-industrial-100">
                  <CheckCircle className="w-12 h-12 text-accent-blue" />
               </div>
               <h2 className="text-4xl font-medium text-industrial-900 mb-2 tracking-tight">Requirement Logged</h2>
               <div className="text-xs font-bold text-industrial-400 uppercase tracking-widest mb-12">
                  Ref ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
               </div>

               <div className="bg-industrial-50/50 rounded-lg p-8 mb-10 border border-industrial-100 text-left">
                  <div className="flex justify-between text-xs mb-4">
                     <span className="text-industrial-400 font-bold uppercase tracking-wider">Routing Destination</span>
                     <span className="text-industrial-900 font-bold">
                        {formData.region === 'International' ? 'Export Division' : 'Domestic Operations'}
                     </span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-industrial-400 font-bold uppercase tracking-wider">Process Status</span>
                     <span className="text-accent-blue font-bold tracking-wide">QUEUED FOR REVIEW</span>
                  </div>
               </div>

               <p className="text-industrial-500 text-lg mb-12 leading-relaxed font-light">
                  Transmission received. A formal technical evaluation for <span className="font-medium text-industrial-900">{formData.email}</span> will be issued within 24 business hours.
               </p>

               <Link to="/" className="btn-industrial w-full py-5">
                  Return to Dashboard
               </Link>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-white flex flex-col lg:flex-row pt-32">
         <SEO title="Request for Quotation | Corporate GRP Solutions" description="Build your project manifest and request a technical quotation for GRP enclosures, cabins, and modular infrastructure." />

         {/* Loading Overlay */}
         {isSubmitting && (
            <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center">
               <Loader2 className="w-12 h-12 text-accent-blue animate-spin mb-6" />
               <p className="text-xs font-bold uppercase tracking-[0.4em] text-industrial-900 animate-pulse">Transmitting Manifest...</p>
            </div>
         )}

         {/* Left Panel: The Manifest (Industrial Dark) */}
         <div className="w-full lg:w-5/12 bg-industrial-900 text-white relative flex flex-col order-2 lg:order-1 border-r border-industrial-800 lg:min-h-[calc(100vh-80px)]">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="p-8 lg:p-12 relative z-10 flex-grow flex flex-col h-full">
               <div className="flex items-center justify-between mb-12">
                  <Link to="/products" className="inline-flex items-center text-industrial-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors gap-2">
                     <div className="w-6 h-6 rounded-full border border-industrial-700 flex items-center justify-center hover:bg-industrial-800">←</div> Modify Config
                  </Link>
                  <span className="text-[10px] font-mono text-industrial-600">SID-{new Date().getFullYear()}</span>
               </div>

               <div className="mb-10 animate-fade-up">
                  <h1 className="text-3xl lg:text-5xl font-medium mb-4 tracking-tight text-white leading-tight">
                     Project <br /> <span className="text-industrial-400">Requisition.</span>
                  </h1>
                  <p className="text-industrial-400 text-sm font-light leading-relaxed max-w-sm">
                     Confirm your system configuration below. Engineering will review all items for compatibility before issuance.
                  </p>
               </div>

               <div className="flex-grow space-y-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-industrial-700 mb-8 max-h-[40vh] lg:max-h-none">
                  {items.length === 0 ? (
                     <div className="py-16 border border-dashed border-industrial-700/50 bg-industrial-800/20 rounded-sm text-center animate-fade-in">
                        <div className="w-12 h-12 bg-industrial-800 rounded-full flex items-center justify-center mx-auto mb-4 text-industrial-500">
                           <FileText size={20} />
                        </div>
                        <p className="text-industrial-400 text-sm mb-4 font-light">Manifest is currently empty.</p>
                        <Link to="/products" className="text-accent-blue font-bold text-[10px] hover:text-white uppercase tracking-widest transition-colors border-b border-accent-blue/30 hover:border-accent-blue pb-1">
                           Browse Systems
                        </Link>
                     </div>
                  ) : (
                     items.map((item, i) => (
                        <div key={i} className="bg-industrial-800/50 border border-industrial-700 p-4 rounded-sm flex items-center justify-between group hover:border-industrial-600 transition-colors animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                           <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-industrial-900 rounded-sm border border-industrial-700 flex-shrink-0 overflow-hidden">
                                 <img src={item.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div>
                                 <div className="text-white font-medium text-sm group-hover:text-accent-blue transition-colors line-clamp-1">{item.name}</div>
                                 {item.configuration && (
                                    <div className="flex gap-2 mt-1.5">
                                       <span className="text-[9px] bg-industrial-900 px-1.5 py-0.5 rounded text-industrial-400 font-mono flex items-center gap-1.5 uppercase tracking-wide border border-industrial-700">
                                          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: item.configuration.color }}></span>
                                          {item.configuration.finish}
                                       </span>
                                    </div>
                                 )}
                                 <div className="text-[9px] text-industrial-500 font-mono mt-1 uppercase tracking-widest">SKU: {item.id.substring(0, 8).toUpperCase()}</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-4">
                              <div className="bg-black/40 px-3 py-1 rounded-sm text-xs font-mono text-accent-blue border border-industrial-700/50 font-bold">
                                 x{item.quantity}
                              </div>
                              <button
                                 onClick={() => removeItem(item.cartId || item.id)}
                                 className="text-industrial-500 hover:text-red-400 transition-colors p-2 hover:bg-industrial-700/50 rounded-full"
                                 title="Remove Item"
                              >
                                 <Trash2 size={14} />
                              </button>
                           </div>
                        </div>
                     ))
                  )}
               </div>

               <div className="pt-8 border-t border-industrial-800 mt-auto">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-[9px] uppercase tracking-[0.15em] font-bold text-industrial-400">
                     <div className="flex items-center gap-3">
                        <ShieldCheck size={14} className="text-accent-blue" />
                        <span>ISO 9001:2015 <br /><span className="text-industrial-600 font-normal normal-case tracking-normal">Certified Process</span></span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Zap size={14} className="text-accent-blue" />
                        <span>24hr Turnaround <br /><span className="text-industrial-600 font-normal normal-case tracking-normal">For Standard Quotes</span></span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Globe size={14} className="text-accent-blue" />
                        <span>Global Logistics <br /><span className="text-industrial-600 font-normal normal-case tracking-normal">Export Ready</span></span>
                     </div>
                     <div className="flex items-center gap-3">
                        <Cpu size={14} className="text-accent-blue" />
                        <span>Eng. Review <br /><span className="text-industrial-600 font-normal normal-case tracking-normal">Technical Validation</span></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Panel: Form (Clean Industrial Light) */}
         <div className="w-full lg:w-7/12 bg-white p-8 lg:p-16 overflow-y-auto order-1 lg:order-2">
            <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
               <div className="flex items-center justify-between mb-10 pb-6 border-b border-industrial-100">
                  <div>
                     <h2 className="text-2xl font-medium text-industrial-900">Project Parameters</h2>
                     <p className="text-sm text-industrial-500 mt-1 font-light">Coordinate supply chain and site requirements.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-industrial-400 bg-industrial-50 px-3 py-1.5 rounded-sm border border-industrial-100">
                     <FileText size={14} className="text-accent-blue" /> Q-25-001
                  </div>
               </div>

               <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Section 1: Context */}
                  <div className="space-y-8">
                     <h3 className="text-[10px] font-bold text-industrial-900 uppercase tracking-[0.2em] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-accent-blue"></span> Operational Context
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Industry Sector</label>
                           <div className="relative">
                              <select
                                 name="industry"
                                 value={formData.industry}
                                 onChange={handleChange}
                                 className="w-full bg-industrial-50/50 border border-industrial-200 rounded-sm p-3 text-sm text-industrial-900 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all appearance-none cursor-pointer hover:bg-industrial-50"
                              >
                                 <option value="Construction">Construction / Civil</option>
                                 <option value="Utilities">Power & Utilities</option>
                                 <option value="OilGas">Oil & Gas / Petrochem</option>
                                 <option value="Telecom">Telecom / Data</option>
                                 <option value="Hospitality">Hospitality / Resorts</option>
                              </select>
                              <Briefcase size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-industrial-400 pointer-events-none" />
                           </div>
                        </div>
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Project Timeline</label>
                           <div className="relative">
                              <select
                                 name="urgency"
                                 value={formData.urgency}
                                 onChange={handleChange}
                                 className="w-full bg-industrial-50/50 border border-industrial-200 rounded-sm p-3 text-sm text-industrial-900 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all appearance-none cursor-pointer hover:bg-industrial-50"
                              >
                                 <option value="Standard">Standard (4-6 Weeks)</option>
                                 <option value="Immediate">Immediate (Stock Check)</option>
                                 <option value="OneMonth">Planning (1-3 Mo)</option>
                                 <option value="Budget">Budgetary Quote Only</option>
                              </select>
                              <Clock size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-industrial-400 pointer-events-none" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Section 2: Contact */}
                  <div className="space-y-8">
                     <h3 className="text-[10px] font-bold text-industrial-900 uppercase tracking-[0.2em] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-accent-blue"></span> Contact Intelligence
                     </h3>

                     <div className="group">
                        <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Distribution Hub</label>
                        <div className="relative">
                           <select
                              name="region"
                              value={formData.region}
                              onChange={handleChange}
                              className="w-full bg-industrial-50/50 border border-industrial-200 rounded-sm p-3 text-sm text-industrial-900 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all appearance-none cursor-pointer hover:bg-industrial-50"
                           >
                              <option value="Kerala">Kerala (Vadakara Hub)</option>
                              <option value="Karnataka">Karnataka (Mysore Central)</option>
                              <option value="TamilNadu">Tamil Nadu Region</option>
                              <option value="RestOfIndia">Domestic India</option>
                              <option value="International">Export Division</option>
                           </select>
                           <MapPin size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-industrial-400 pointer-events-none" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Full Name</label>
                           <input
                              type="text"
                              name="name"
                              placeholder="e.g. Robert Smith"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-white border border-industrial-200 rounded-sm p-3 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all placeholder:text-industrial-300"
                           />
                        </div>
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Organization</label>
                           <input
                              type="text"
                              name="company"
                              placeholder="Company Name"
                              required
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full bg-white border border-industrial-200 rounded-sm p-3 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all placeholder:text-industrial-300"
                           />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Official Email</label>
                           <input
                              type="email"
                              name="email"
                              placeholder="name@company.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleEmailBlur}
                              className={`w-full bg-white border ${emailError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-industrial-200 focus:border-accent-blue focus:ring-accent-blue'} rounded-sm p-3 text-sm focus:ring-1 outline-none transition-all placeholder:text-industrial-300`}
                           />
                           {emailError && (
                              <p className="mt-2 text-[10px] text-red-500 font-bold uppercase tracking-wide flex items-center gap-1">
                                 <Info size={10} /> {emailError}
                              </p>
                           )}
                        </div>
                        <div className="group">
                           <label className="block text-[10px] font-bold text-industrial-500 uppercase mb-2 tracking-wider group-focus-within:text-accent-blue transition-colors">Direct Phone</label>
                           <input
                              type="tel"
                              name="phone"
                              placeholder="+91..."
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white border border-industrial-200 rounded-sm p-3 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all placeholder:text-industrial-300"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Section 3: Notes */}
                  <div className="space-y-8">
                     <h3 className="text-[10px] font-bold text-industrial-900 uppercase tracking-[0.2em] flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-accent-blue"></span> Technical Specifics
                     </h3>
                     <div className="relative group">
                        <textarea
                           name="message"
                           rows={3}
                           value={formData.message}
                           onChange={handleChange}
                           placeholder="Specify dimensional constraints, IP ratings, mounting preferences, or custom fabrication requirements..."
                           className="w-full bg-white border border-industrial-200 rounded-sm p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all resize-y min-h-[120px] placeholder:text-industrial-300 placeholder:font-light"
                        ></textarea>
                     </div>
                  </div>

                  <div className="pt-4">
                     <button
                        type="submit"
                        disabled={items.length === 0 || isSubmitting}
                        className="w-full bg-industrial-900 text-white font-bold py-5 rounded-sm hover:bg-accent-blue transition-all duration-300 text-xs uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-industrial-900/10 hover:shadow-accent-blue/20"
                     >
                        {isSubmitting ? (
                           <>Processing Transmission...</>
                        ) : (
                           <><Send size={16} /> Transmit Requisition</>
                        )}
                     </button>
                     <p className="text-center text-[9px] text-industrial-400 font-mono mt-4">
                        SECURE TRANSMISSION ENCRYPTED via SSL. INTERNAL ENGINEERING USE ONLY.
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default RFQ;