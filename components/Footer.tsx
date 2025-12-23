import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-industrial-100 py-16">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <Link to="/" className="inline-block mb-8">
                            <Logo variant="grayscale" withTagline={true} size="md" />
                        </Link>
                        <p className="text-industrial-500 text-sm max-w-md mb-8">{SITE_CONFIG.seo.defaultDescription}</p>
                        <div className="inline-flex px-4 py-2 bg-industrial-50 rounded text-xs font-semibold text-industrial-600 uppercase">{SITE_CONFIG.contact.locations}</div>
                    </div>
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Solutions</h4>
                        <nav className="flex flex-col gap-4">
                            {['Industrial Enclosures', 'Security Cabins', 'Modular Kiosks', 'Sanitary Units', 'Infrastructure'].map(item => <Link key={item} to="/products" className="text-industrial-500 hover:text-industrial-900 text-sm">{item}</Link>)}
                        </nav>
                    </div>
                    <div className="lg:col-span-4">
                        <h4 className="text-xs font-bold text-industrial-900 uppercase tracking-widest mb-8">Get in Touch</h4>
                        <div className="space-y-6 text-sm text-industrial-500">
                            <div className="flex gap-4"><MapPin size={18} /><p>{SITE_CONFIG.contact.address}</p></div>
                            <div className="flex gap-4"><Phone size={18} /><span>{SITE_CONFIG.contact.phone}</span></div>
                            <div className="flex gap-4"><Mail size={18} /><span>{SITE_CONFIG.contact.email}</span></div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-industrial-50 flex flex-col md:flex-row justify-between items-center text-xs text-industrial-400 gap-6">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}.</p>
                    <div className="flex gap-8"><Link to="/sitemap">Sitemap</Link><Link to="#">Privacy</Link><Link to="#">Terms</Link></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
