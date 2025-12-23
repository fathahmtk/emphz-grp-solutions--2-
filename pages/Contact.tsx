import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle, HelpCircle, Globe, ChevronDown, User, Book, Loader2 } from 'lucide-react';

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
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-emphz-teal selection:text-white pb-24">

            {/* Hero Section - Refined */}
            <div className="relative bg-[#0B1120] text-white pt-32 pb-64 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emphz-orange/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emphz-teal animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 font-display">Kerala Managed | Mysuru Manufactured</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 font-display tracking-tight leading-tight drop-shadow-2xl">
                        Contact <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal to-cyan-400">Engineering.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                        For technical datasheets, custom fabrication quotes, or site-specific requirements, our engineering hub is ready to assist.
                    </p>
                </div>
            </div>

            {/* Main Content Container - Overlapping Hero with Glass effect border */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32">
                <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col lg:flex-row min-h-[800px] border border-white/20">

                    {/* Sidebar (Dark Navy with texture) */}
                    <div className="lg:w-5/12 bg-[#050A14] text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emphz-orange/5 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-xs font-bold text-emphz-teal uppercase tracking-[0.2em] mb-8 font-display flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-emphz-teal"></span> Contact Info
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">Built for Reliability.</h3>
                            <p className="text-gray-400 text-sm mb-12 font-light leading-relaxed">
                                Reach out directly to our manufacturing hub. We typically respond to technical and project queries within 4 hours.
                            </p>

                            <div className="space-y-6">
                                {/* Info Cards */}
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emphz-orange/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#0B1120] border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <MapPin size={20} className="text-emphz-orange" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 font-display group-hover:text-emphz-orange transition-colors">Factory HQ</h4>
                                        <p className="text-gray-400 text-xs font-mono leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            KIADB Industrial Area, Phase 2<br />
                                            Mysore, Karnataka - 570018<br />
                                            India
                                        </p>
                                    </div>
                                </a>

                                <a href="mailto:info@emphz.in" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emphz-orange/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#0B1120] border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <Mail size={20} className="text-emphz-orange" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 font-display group-hover:text-emphz-orange transition-colors">Email Engineering</h4>
                                        <p className="text-gray-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">info@emphz.in</p>
                                        <p className="text-gray-500 text-[10px] font-mono mt-1">For RFQs & Datasheets</p>
                                    </div>
                                </a>

                                <a href="tel:+919037874080" className="flex items-start group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emphz-orange/30 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-[#0B1120] border border-white/10 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg">
                                        <Phone size={20} className="text-emphz-orange" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 font-display group-hover:text-emphz-orange transition-colors">Direct Line</h4>
                                        <p className="text-gray-400 text-xs font-mono opacity-80 group-hover:opacity-100 transition-opacity">+91 9037 874 080</p>
                                        <p className="text-gray-500 text-[10px] font-mono mt-1">Mon-Sat, 9am - 6pm IST</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Social/Links */}
                        <div className="relative z-10 pt-8 mt-auto border-t border-white/10 flex justify-between items-center">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-display">Connect with us</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emphz-orange hover:text-white transition-all text-gray-400 border border-white/5">
                                    <Globe size={16} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emphz-orange hover:text-white transition-all text-gray-400 border border-white/5">
                                    <MessageSquare size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side (White) */}
                    <div className="lg:w-7/12 p-10 md:p-16 bg-white relative">
                        {isSubmitting && (
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                                <Loader2 className="w-12 h-12 text-emphz-orange animate-spin" />
                                <p className="mt-4 font-bold text-emphz-navy font-display tracking-widest">TRANSMITTING...</p>
                            </div>
                        )}
                        {isSuccess ? (
                            // Success State
                            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-20">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-black text-emphz-navy mb-4 font-display">Message Received</h3>
                                <p className="text-gray-500 max-w-sm mx-auto mb-10 text-base leading-relaxed">
                                    Thanks for reaching out! Our engineering support team has received your inquiry and will review it shortly.
                                </p>
                                <button
                                    onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                    className="text-white bg-emphz-navy px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emphz-orange transition-all shadow-lg"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            // Form
                            <form onSubmit={handleSubmit} className={`h-full flex flex-col justify-center transition-all ${isSubmitting ? 'blur-sm' : ''}`}>
                                <div className="mb-10">
                                    <h3 className="text-3xl font-bold text-emphz-navy mb-2 font-display">Send a Message</h3>
                                    <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-slate-600 mb-2 font-sans">Your Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                                                className="w-full bg-slate-50 border-0 ring-1 ring-inset ring-slate-200 rounded-xl pl-10 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-inset focus:ring-emphz-orange transition-all font-medium text-emphz-navy placeholder-slate-400 text-sm group-hover:ring-slate-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-slate-600 mb-2 font-sans">Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="email" name="email" id="email" value={formData.email} onChange={handleChange} onBlur={handleEmailBlur} required
                                                className={`w-full bg-slate-50 border-0 ring-1 ring-inset ${emailError ? 'ring-red-400' : 'ring-slate-200 group-hover:ring-slate-300 focus:ring-emphz-orange'} rounded-xl pl-10 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-inset transition-all font-medium text-emphz-navy placeholder-slate-400 text-sm`}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        {emailError && <p className="text-red-500 text-xs mt-2 font-mono">{emailError}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-slate-600 mb-2 font-sans">Phone (Optional)</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <input
                                                type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                                                className="w-full bg-slate-50 border-0 ring-1 ring-inset ring-slate-200 rounded-xl pl-10 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-inset focus:ring-emphz-orange transition-all font-medium text-emphz-navy placeholder-slate-400 text-sm group-hover:ring-slate-300"
                                                placeholder="+91 ..."
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-medium text-slate-600 mb-2 font-sans">Subject</label>
                                        <div className="relative group">
                                            <Book className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                            <select
                                                name="subject" id="subject" value={formData.subject} onChange={handleChange}
                                                className="w-full bg-slate-50 border-0 ring-1 ring-inset ring-slate-200 rounded-xl pl-10 pr-8 py-3.5 outline-none focus:ring-2 focus:ring-inset focus:ring-emphz-orange transition-all font-medium text-emphz-navy cursor-pointer appearance-none text-sm group-hover:ring-slate-300"
                                            >
                                                <option value="">Select Topic...</option>
                                                <option value="Sales">Project Inquiry</option>
                                                <option value="Technical">Technical Support</option>
                                                <option value="Careers">Careers</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-xs font-medium text-slate-600 mb-2 font-sans">Message</label>
                                    <textarea
                                        name="message" id="message" value={formData.message} onChange={handleChange} required
                                        rows={4}
                                        className="w-full bg-slate-50 border-0 ring-1 ring-inset ring-slate-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-inset focus:ring-emphz-orange transition-all font-medium text-emphz-navy placeholder-slate-400 resize-none text-sm group-hover:ring-slate-300"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-emphz-navy text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:bg-emphz-orange transition-all shadow-lg shadow-emphz-navy/20 hover:shadow-xl hover:shadow-emphz-orange/30 transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    Send Message <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* FAQ Cards - Improved */}
                <div className="mt-32 mb-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-8 h-[1px] bg-emphz-orange"></span>
                            <span className="text-xs font-bold text-emphz-orange uppercase tracking-[0.2em] font-display">Support Center</span>
                            <span className="w-8 h-[1px] bg-emphz-orange"></span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-emphz-navy font-display">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 ease-in-out group ${openFaq === i ? 'border-emphz-orange/30 shadow-md ring-1 ring-emphz-orange/10' : 'border-gray-100'}`}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                                    aria-expanded={openFaq === i}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors shadow-sm ${openFaq === i ? 'bg-emphz-orange text-white' : 'bg-gray-50 text-emphz-navy group-hover:bg-emphz-orange/10'}`}>
                                            <HelpCircle size={20} className={openFaq === i ? 'text-white' : 'group-hover:text-emphz-orange transition-colors'} />
                                        </div>
                                        <h4 className={`font-bold text-base font-display transition-colors ${openFaq === i ? 'text-emphz-orange' : 'text-emphz-navy'}`}>{faq.question}</h4>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-emphz-orange' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pl-20">
                                        <p className="text-sm text-gray-500 font-sans leading-relaxed font-light border-l-2 border-emphz-orange/20 pl-4">{faq.answer}</p>
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