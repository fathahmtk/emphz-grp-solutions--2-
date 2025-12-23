import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle, HelpCircle, Globe, ChevronDown, User, Book, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setEmailTouched(true);
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'email' && emailTouched) {
            if (!validateEmail(value)) {
                setEmailError('Please enter a valid email address.');
            } else {
                setEmailError('');
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setEmailTouched(true);
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    const faqs = [
        { question: "Do you offer custom dimensions?", answer: "Yes, our SMC hot press process allows for modular customization, and we also offer hand-layup services for bespoke requirements." },
        { question: "What is your typical lead time?", answer: "Standard enclosures are shipped within 48 hours. Custom orders typically require 2-4 weeks depending on mold availability." },
        { question: "Do you ship internationally?", answer: "Yes, we export to the Middle East, Southeast Asia, and Africa. All shipments are palletized and ISPM-15 compliant." },
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-24">

            {/* Hero Section */}
            <div className="relative bg-slate-950 text-white pt-32 pb-64 overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-5"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Technical Support Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
                        Contact <br /><span className="text-blue-500">Engineering.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        For technical datasheets, custom fabrication quotes, or site-specific requirements, our primary engineering hub is ready to assist.
                    </p>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px] border border-slate-200/50">

                    {/* Sidebar */}
                    <div className="lg:w-5/12 bg-slate-950 text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent"></div>

                        <div className="relative z-10">
                            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-blue-600"></span> Logistical Data
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Built for Reliability.</h3>
                            <p className="text-slate-400 text-sm mb-12 font-light leading-relaxed">
                                Reach out directly to our manufacturing hub. We typically respond to technical and project queries within 4 business hours.
                            </p>

                            <div className="space-y-6">
                                {/* Info Cards */}
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <MapPin size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-wide">Manufacturing HQ</h4>
                                        <p className="text-slate-400 text-xs font-mono leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            KIADB Industrial Area, Phase 2<br />
                                            Mysore, Karnataka - 570018<br />
                                            India
                                        </p>
                                    </div>
                                </a>

                                <a href="mailto:info@emphz.in" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <Mail size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-wide">General Inquiry</h4>
                                        <p className="text-slate-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">info@emphz.in</p>
                                        <p className="text-slate-500 text-[10px] font-mono mt-1">For RFQs & Technical Support</p>
                                    </div>
                                </a>

                                <a href="tel:+919037874080" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <Phone size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-wide">Operations Line</h4>
                                        <p className="text-slate-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">+91 9037 874 080</p>
                                        <p className="text-gray-500 text-[10px] font-mono mt-1">Mon-Sat, 09:00 - 18:00 IST</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Social/Links */}
                        <div className="relative z-10 pt-8 mt-auto border-t border-white/10 flex justify-between items-center">
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">EST: 2020 // Mysore</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400 border border-white/5">
                                    <Globe size={16} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400 border border-white/5">
                                    <MessageSquare size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-7/12 p-10 md:p-16 bg-white relative">
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                                <p className="mt-4 font-bold text-slate-900 tracking-widest font-mono">TRANSMITTING...</p>
                            </div>
                        )}
                        {isSuccess ? (
                            // Success State
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100 shadow-xl shadow-blue-500/10">
                                    <CheckCircle className="w-12 h-12 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Transmission Received.</h3>
                                <p className="text-slate-500 max-w-sm mx-auto mb-10 text-base leading-relaxed font-light">
                                    A project engineer has been assigned to your inquiry. We will contact you shortly via the provided credentials.
                                </p>
                                <button
                                    onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                    className="text-white bg-slate-950 px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg"
                                >
                                    New Transmission
                                </button>
                            </div>
                        ) : (
                            // Form
                            <form onSubmit={handleSubmit} className={`h-full flex flex-col justify-center transition-all ${isSubmitting ? 'blur-sm' : ''}`}>
                                <div className="mb-10">
                                    <h3 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">Direct Channel</h3>
                                    <p className="text-slate-500 text-sm font-light">Enter project parameters for technical evaluation.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder-slate-400 text-sm"
                                                placeholder="e.g. Robert Smith"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Corporate Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} required
                                                className={`w-full bg-slate-50 border ${emailError ? 'border-red-400' : 'border-slate-200'} rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder-slate-400 text-sm`}
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                        {emailError && <p className="text-red-500 text-[10px] mt-2 font-mono uppercase">{emailError}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Contact Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder-slate-400 text-sm"
                                                placeholder="+91 000 000 0000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Inquiry Type</label>
                                        <div className="relative group">
                                            <Book className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <select
                                                name="subject" id="subject" value={formData.subject} onChange={handleChange}
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 cursor-pointer appearance-none text-sm font-medium"
                                            >
                                                <option value="">Select Category...</option>
                                                <option value="Sales">Core Project Inquiry</option>
                                                <option value="Technical">Material Data Request</option>
                                                <option value="Technical">SMC Molding Support</option>
                                                <option value="Other">Other Logistical Query</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Project Description</label>
                                    <textarea
                                        name="message" id="message" value={formData.message} onChange={handleChange} required
                                        rows={4}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder-slate-400 resize-none text-sm"
                                        placeholder="Describe technical requirements, quantities, and environmental factors..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group w-full md:w-auto"
                                >
                                    Execute Transmission <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* FAQ Cards */}
                <div className="mt-32 mb-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-8 h-[1px] bg-blue-600"></span>
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-[0.2em]">Compliance & Logistics</span>
                            <span className="w-8 h-[1px] bg-blue-600"></span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Technical FAQ</h3>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`glass rounded-2xl border transition-all duration-300 ${openFaq === i ? 'border-blue-200 bg-white shadow-xl' : 'border-slate-100 hover:border-slate-200 bg-white/40'}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openFaq === i}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors ${openFaq === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            <HelpCircle size={20} />
                                        </div>
                                        <h4 className={`font-semibold text-base transition-colors ${openFaq === i ? 'text-blue-700' : 'text-slate-900'}`}>{faq.question}</h4>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-600' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <p className="text-sm text-slate-500 leading-relaxed font-light border-l-2 border-blue-100 pl-4">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;