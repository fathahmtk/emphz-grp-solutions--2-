import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-industrial-900 text-white pt-24 pb-12 relative overflow-hidden">
            {/* Watermark Logo */}
            <div className="absolute -top-[10%] -right-[5%] opacity-[0.03] pointer-events-none select-none">
                <Logo size="xl" variant="light" withText={false} className="scale-[8] transform rotate-[-15deg] origin-top-right" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
                    <div className="lg:col-span-5">
                        <Link to="/" className="inline-block mb-8">
                            <Logo variant="light" withTagline={true} size="md" />
                        </Link>
                        <p className="text-industrial-400 text-sm leading-relaxed max-w-md mb-8">{SITE_CONFIG.seo.defaultDescription}</p>

                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-accent-blue mb-2">Operations</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-xs font-medium text-industrial-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                {SITE_CONFIG.contact.locations}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 inline-block">Key Solutions</h4>
                        <nav className="flex flex-col gap-4">
                            {[
                                { name: 'Industrial Enclosures', path: '/products' },
                                { name: 'Security Cabins', path: '/products' },
                                { name: 'UrbanCell™ Pods', path: '/products/emp-uc-grid' },
                                { name: 'Sanitation Units', path: '/products' },
                                { name: 'Infrastructure', path: '/products' }
                            ].map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.path}
                                    className="text-industrial-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm flex items-center gap-2 group"
                                >
                                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-accent-blue inline-block mb-[2px]"></span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 inline-block">Contact Headquarters</h4>
                        <div className="space-y-6 text-sm text-industrial-400">
                            <a href={`https://maps.google.com/?q=${SITE_CONFIG.contact.address}`} target="_blank" rel="noopener noreferrer" className="flex gap-4 group hover:text-white transition-colors">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                                    <MapPin size={16} className="text-accent-blue" />
                                </div>
                                <span className="leading-relaxed">{SITE_CONFIG.contact.address}</span>
                            </a>
                            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex gap-4 group hover:text-white transition-colors">
                                <div className="flex-shrink-0 w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                                    <Phone size={16} className="text-accent-blue" />
                                </div>
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </a>
                            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex gap-4 group hover:text-white transition-colors">
                                <div className="flex-shrink-0 w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                                    <Mail size={16} className="text-accent-blue" />
                                </div>
                                <span>{SITE_CONFIG.contact.email}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-industrial-500 gap-6">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
