import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, HelpCircle, ChevronDown, Loader2 } from 'lucide-react';
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
        <div className="bg-white min-h-screen pb-24">
            <SEO
                title="Contact Engineering"
                description="Connect with EMPHZ engineering team for technical support, project inquiries, and custom GRP manufacturing solutions."
            />

            {/* Hero Section - Minimalist */}
            <div className="pb-64 overflow-hidden bg-white border-b border-industrial-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-industrial-50 border border-industrial-100 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-industrial-600">Technical Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight text-industrial-900 leading-[1.1]">
                        Contact <br /><span className="text-industrial-400">Engineering.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-industrial-500 max-w-2xl mx-auto font-light leading-relaxed">
                        For technical specifications, custom fabrication quotes, or site-specific requirements, our primary engineering hub is ready to assist.
                    </p>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mt-32">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px] border border-industrial-100">

                    {/* Sidebar - Industrial Navy */}
                    <div className="lg:w-5/12 bg-industrial-900 text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-xs font-bold text-accent-blue uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-accent-blue"></span> Logistical Data
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-medium mb-6 text-white leading-tight">Built for Reliability.</h3>
                            <p className="text-industrial-400 text-sm mb-12 font-light leading-relaxed max-w-sm">
                                Reach out directly to our manufacturing hub. We typically respond to technical and project queries within 4 business hours.
                            </p>

                            <div className="space-y-6">
                                {/* Info Cards */}
                                <a href="#" className="flex items-start group p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-blue transition-all duration-300">
                                    <div className="w-12 h-12 rounded bg-industrial-800 border border-white/10 flex items-center justify-center mr-5 transition-transform flex-shrink-0">
                                        <MapPin size={22} className="text-accent-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 transition-colors uppercase tracking-widest text-xs">Production Hub</h4>
                                        <p className="text-industrial-400 text-xs font-mono leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            KIADB Industrial Area, Phase 2<br />
                                            Mysuru, Karnataka - India
                                        </p>
                                    </div>
                                </a>

                                <a href="mailto:info@emphz.in" className="flex items-start group p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-blue transition-all duration-300">
                                    <div className="w-12 h-12 rounded bg-industrial-800 border border-white/10 flex items-center justify-center mr-5 transition-transform flex-shrink-0">
                                        <Mail size={22} className="text-accent-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 transition-colors uppercase tracking-widest text-xs">Engineering Support</h4>
                                        <p className="text-industrial-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">info@emphz.in</p>
                                    </div>
                                </a>

                                <a href="tel:+919037874080" className="flex items-start group p-6 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-blue transition-all duration-300">
                                    <div className="w-12 h-12 rounded bg-industrial-800 border border-white/10 flex items-center justify-center mr-5 transition-transform flex-shrink-0">
                                        <Phone size={22} className="text-accent-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 transition-colors uppercase tracking-widest text-xs">Operations Line</h4>
                                        <p className="text-industrial-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">+91 9037 874 080</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="relative z-10 pt-10 mt-auto border-t border-white/10 flex justify-between items-center text-[10px] text-industrial-500 uppercase tracking-widest font-mono">
                            <span>EST: 2020 // INDIA</span>
                        </div>
                    </div>

                    {/* Form Side - Minimalist */}
                    <div className="lg:w-7/12 p-12 md:p-16 bg-white relative">
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                                <Loader2 className="w-12 h-12 text-accent-blue animate-spin" />
                                <p className="mt-4 font-bold text-industrial-900 tracking-widest uppercase text-xs">Transmitting...</p>
                            </div>
                        )}
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-up">
                                <div className="w-24 h-24 bg-industrial-50 rounded-full flex items-center justify-center mb-8 border border-industrial-100 shadow-xl">
                                    <CheckCircle className="w-12 h-12 text-accent-blue" />
                                </div>
                                <h3 className="text-3xl font-medium text-industrial-900 mb-6 tracking-tight leading-tight">Transmission Received.</h3>
                                <p className="text-industrial-500 max-w-sm mx-auto mb-10 text-base leading-relaxed font-light">
                                    Your inquiry has been securely routed. A project engineer will contact you shortly via the provided credentials.
                                </p>
                                <button
                                    onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                    className="btn-industrial px-12 py-4"
                                >
                                    New Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center animate-in">
                                <div className="mb-12">
                                    <h3 className="text-3xl font-medium text-industrial-900 mb-3 tracking-tight leading-tight">Direct Channel</h3>
                                    <p className="text-industrial-500 text-sm font-light">Specify project parameters for technical evaluation.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="name" className="block text-xs font-bold text-industrial-500 uppercase tracking-widest">Full Name</label>
                                            <input
                                                type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                                                className="w-full bg-industrial-50/50 border border-industrial-100 rounded p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-industrial-900 placeholder-industrial-300"
                                                placeholder="e.g. Robert Smith"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="email" className="block text-xs font-bold text-industrial-500 uppercase tracking-widest">Corporate Email</label>
                                            <input
                                                type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} required
                                                className={`w-full bg-industrial-50/50 border ${emailError ? 'border-red-400' : 'border-industrial-100'} rounded p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-industrial-900 placeholder-industrial-300`}
                                                placeholder="name@company.com"
                                            />
                                            {emailError && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide mt-2">{emailError}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label htmlFor="phone" className="block text-xs font-bold text-industrial-500 uppercase tracking-widest">Contact Number</label>
                                            <input
                                                type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                                                className="w-full bg-industrial-50/50 border border-industrial-100 rounded p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-industrial-900 placeholder-industrial-300"
                                                placeholder="+91..."
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="subject" className="block text-xs font-bold text-industrial-500 uppercase tracking-widest">Inquiry Type</label>
                                            <div className="relative">
                                                <select
                                                    name="subject" id="subject" value={formData.subject} onChange={handleChange}
                                                    className="w-full bg-industrial-50/50 border border-industrial-100 rounded p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-industrial-900 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Category...</option>
                                                    <option value="Sales">Core Project Inquiry</option>
                                                    <option value="Technical">Material Data Request</option>
                                                    <option value="Other">Other Query</option>
                                                </select>
                                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-industrial-300 pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="message" className="block text-xs font-bold text-industrial-500 uppercase tracking-widest">Project Description</label>
                                        <textarea
                                            name="message" id="message" value={formData.message} onChange={handleChange} required
                                            rows={5}
                                            className="w-full bg-industrial-50/50 border border-industrial-100 rounded p-4 text-sm focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all text-industrial-900 placeholder-industrial-300 resize-none"
                                            placeholder="Describe requirements, quantities, and site conditions..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-industrial w-full md:w-auto px-12 py-5 shadow-xl shadow-industrial-900/10"
                                    >
                                        Transmit Requisition <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
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
                        <h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">Technical FAQ</h3>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`glass rounded-2xl border transition-all duration-300 ${openFaq === i ? 'border-blue-200 bg-white shadow-xl' : 'border-neutral-100 hover:border-neutral-200 bg-white/40'}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openFaq === i}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors ${openFaq === i ? 'bg-blue-600 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                            <HelpCircle size={20} />
                                        </div>
                                        <h4 className={`font-semibold text-base transition-colors ${openFaq === i ? 'text-blue-700' : 'text-neutral-900'}`}>{faq.question}</h4>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-neutral-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-600' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <p className="text-sm text-neutral-500 leading-relaxed font-light border-l-2 border-blue-100 pl-4">{faq.answer}</p>
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