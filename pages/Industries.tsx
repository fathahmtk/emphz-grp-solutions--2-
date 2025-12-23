import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import { ArrowRight, CheckCircle2, Factory, Zap, Shield, Droplet, Radio, Train, Flame, Truck } from 'lucide-react';

const Industries: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIconForIndustry = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('solar')) return <Zap className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('rail')) return <Train className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('telecom')) return <Radio className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('water')) return <Droplet className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('fire')) return <Flame className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('auto')) return <Truck className="w-8 h-8 text-emphz-teal" />;
        if (t.includes('oil')) return <Factory className="w-8 h-8 text-emphz-teal" />;
        return <Shield className="w-8 h-8 text-emphz-teal" />;
    };

    return (
        <div className="bg-white text-emphz-navy min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-emphz-navy via-emphz-dark to-emphz-navy overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emphz-navy via-emphz-navy/80 to-transparent"></div>
                <div className="absolute inset-0 bg-dots opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl animate-fade-up">
                        <div className="inline-flex items-center gap-2 text-emphz-teal font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            <Factory size={16} /> Key Sectors
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white font-display leading-tight mb-6">
                            Solutions for Critical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal via-emphz-cyan to-white animate-gradient">Infrastructure.</span>
                        </h1>
                        <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl font-sans mb-8 border-l-4 border-emphz-teal pl-6">
                            Every industry faces unique environmental challenges. From the corrosive salt spray of coastal regions to the explosive hazards of petrochemical plants, Emphz engineers GRP solutions tailored to survive.
                        </p>
                        <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-emphz-teal to-emphz-cyan text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:shadow-xl hover:shadow-emphz-teal/50 transition-all group font-display animate-pulse-glow">
                            Partner With Us <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Industry Grid */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-emphz-teal tracking-widest uppercase mb-3 font-display">Applications</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-emphz-navy font-display">Where GRP Outperforms Steel.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {INDUSTRIES.map((industry, index) => (
                            <div key={index} className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={industry.imageUrl}
                                        alt={industry.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-emphz-navy/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <div className="mb-4 bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-emphz-teal/10 transition-colors">
                                        {getIconForIndustry(industry.title)}
                                    </div>
                                    <h3 className="text-2xl font-bold text-emphz-navy mb-3 font-display group-hover:text-emphz-teal transition-colors">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-sans text-sm mb-6">
                                        {industry.description}
                                    </p>
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center text-xs font-bold text-emphz-teal-text uppercase tracking-widest hover:text-emphz-navy transition-colors"
                                    >
                                        View Products <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Emphz Section */}
            <section className="py-20 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-emphz-navy rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-black font-display mb-6">Custom Engineering for <br />Unique Constraints.</h2>
                                <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                                    Don't see your industry listed? We specialize in Bespoke GRP Fabrication. From radar domes to chemical scrubbers, if you can design it, we can mold it.
                                </p>
                                <Link to="/rfq" className="bg-white text-emphz-navy px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emphz-teal transition-colors inline-block">
                                    Request Custom Quote
                                </Link>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10">
                                    <CheckCircle2 className="text-emphz-teal mb-3" />
                                    <div className="font-bold text-lg mb-1">Rapid Prototyping</div>
                                    <p className="text-xs text-gray-400">In-house mold making for fast turnaround on custom parts.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10">
                                    <Shield className="text-emphz-teal mb-3" />
                                    <div className="font-bold text-lg mb-1">Certified Quality</div>
                                    <p className="text-xs text-gray-400">ISO 9001 certified processes for consistent output.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
