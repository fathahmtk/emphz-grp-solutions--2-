import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import { ArrowRight, CheckCircle2, Factory, Zap, Shield, Droplet, Radio, Train, Flame, Truck, ChevronRight } from 'lucide-react';

const Industries: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getIconForIndustry = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('solar')) return <Zap className="w-6 h-6" />;
        if (t.includes('rail')) return <Train className="w-6 h-6" />;
        if (t.includes('telecom')) return <Radio className="w-6 h-6" />;
        if (t.includes('water')) return <Droplet className="w-6 h-6" />;
        if (t.includes('fire')) return <Flame className="w-6 h-6" />;
        if (t.includes('auto')) return <Truck className="w-6 h-6" />;
        if (t.includes('oil')) return <Factory className="w-6 h-6" />;
        return <Shield className="w-6 h-6" />;
    };

    return (
        <div className="bg-white text-industrial-900 min-h-screen">
            {/* Hero Section */}
            <section className="bg-industrial-900 py-24 md:py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                    <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-industrial-400">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <ChevronRight size={10} />
                        <span className="text-white">Industries</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight max-w-4xl uppercase">
                        Critical Infrastructure <br />
                        <span className="text-accent-blue">Solutions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-industrial-300 max-w-2xl font-light leading-relaxed border-l border-accent-blue pl-6">
                        Engineered GRP systems designed for aggressive environments. From coastal salt spray to high-voltage substations, we deliver inert, durable protection.
                    </p>
                </div>
                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            {/* Main Industry Grid */}
            <section className="py-20 md:py-28 bg-industrial-50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.3em] mb-4">Market Verticals</h2>
                        <h3 className="text-3xl md:text-4xl font-medium text-industrial-900 tracking-tight uppercase">Performance Comparison.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {INDUSTRIES.map((industry, index) => (
                            <div key={index} className="flex flex-col md:flex-row bg-white border border-industrial-100 rounded-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-industrial-200">
                                    <img
                                        src={industry.imageUrl}
                                        alt={industry.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-industrial-900/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4 text-accent-blue">
                                            {getIconForIndustry(industry.title)}
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-industrial-400">Vertical 0{index + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-medium text-industrial-900 mb-4 group-hover:text-accent-blue transition-colors">
                                            {industry.title}
                                        </h3>
                                        <p className="text-sm text-industrial-600 font-light leading-relaxed mb-6">
                                            {industry.description}
                                        </p>
                                    </div>
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center text-[10px] font-bold text-industrial-900 uppercase tracking-widest hover:text-accent-blue transition-colors"
                                    >
                                        View Solutions <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Solutions Section */}
            <section className="py-20 bg-white border-t border-industrial-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="bg-industrial-900 rounded-sm p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">Custom Fabrication.</h2>
                                <p className="text-industrial-300 text-lg font-light leading-relaxed mb-8">
                                    Specialized GRP fabrication for unique site constraints. From industrial housing to offshore cabins, we manufacture to your exact engineering drawings.
                                </p>
                                <Link to="/rfq" className="bg-white text-industrial-900 px-8 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all inline-block">
                                    Initiate Custom Request
                                </Link>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                                    <div className="text-accent-blue mb-4"><CheckCircle2 size={20} /></div>
                                    <div className="font-bold text-sm uppercase tracking-wider mb-2">Rapid Prototyping</div>
                                    <p className="text-[10px] text-industrial-400 leading-relaxed">In-house mold making for fast turnaround on specialized parts.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                                    <div className="text-accent-blue mb-4"><Shield size={20} /></div>
                                    <div className="font-bold text-sm uppercase tracking-wider mb-2">ISO Consistency</div>
                                    <p className="text-[10px] text-industrial-400 leading-relaxed">Certified processes ensuring structural integrity in every batch.</p>
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
