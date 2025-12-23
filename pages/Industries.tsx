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
        if (t.includes('solar')) return <Zap className="w-8 h-8 text-blue-700" />;
        if (t.includes('rail')) return <Train className="w-8 h-8 text-blue-700" />;
        if (t.includes('telecom')) return <Radio className="w-8 h-8 text-blue-700" />;
        if (t.includes('water')) return <Droplet className="w-8 h-8 text-blue-700" />;
        if (t.includes('fire')) return <Flame className="w-8 h-8 text-blue-700" />;
        if (t.includes('auto')) return <Truck className="w-8 h-8 text-blue-700" />;
        if (t.includes('oil')) return <Factory className="w-8 h-8 text-blue-700" />;
        return <Shield className="w-8 h-8 text-blue-700" />;
    };

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl animate-fade-up">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            <Factory size={16} /> Industry Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6 tracking-tight">
                            Built for Critical <br />
                            Infrastructure.
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 border-l-2 border-blue-600 pl-6">
                            Every industry faces unique environmental challenges. From the corrosive salt spray of coastal regions to the aggressive climates of high-humidity zones, Emphz manufactures GRP solutions designed to survive.
                        </p>
                        <Link to="/contact" className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all group">
                            Partner With Us <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Industry Grid */}
            <section className="py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-sm font-semibold text-blue-700 tracking-widest uppercase mb-3">Applications</h2>
                        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Where GRP Outperforms Steel.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {INDUSTRIES.map((industry, index) => (
                            <div key={index} className="flex flex-col md:flex-row glass rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-white/40 border-white/50">
                                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={industry.imageUrl}
                                        alt={industry.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <div className="mb-4 bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 transition-colors">
                                        {React.cloneElement(getIconForIndustry(industry.title) as React.ReactElement, { className: 'w-6 h-6 text-blue-700 group-hover:text-white transition-colors' })}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        {industry.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                                        {industry.description}
                                    </p>
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center text-xs font-bold text-slate-900 uppercase tracking-widest hover:text-blue-700 transition-colors"
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
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Custom Engineering <br />for Site Constraints.</h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                                    Don't see your application listed? We specialize in Bespoke GRP Fabrication. From industrial housing to specialized cabins, we manufacture based on approved drawings.
                                </p>
                                <Link to="/rfq" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all inline-block">
                                    Request Custom Quote
                                </Link>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white/10 glass p-6 rounded-xl border border-white/10">
                                    <CheckCircle2 className="text-blue-500 mb-3" />
                                    <div className="font-semibold text-lg mb-1">Rapid Prototyping</div>
                                    <p className="text-xs text-slate-400">In-house mold making for fast turnaround on specialized parts.</p>
                                </div>
                                <div className="bg-white/10 glass p-6 rounded-xl border border-white/10">
                                    <Shield className="text-blue-500 mb-3" />
                                    <div className="font-semibold text-lg mb-1">Standard Quality</div>
                                    <p className="text-xs text-slate-400">ISO certified processes ensuring consistency in every batch.</p>
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
