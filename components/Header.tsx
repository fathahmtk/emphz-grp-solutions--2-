import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';
import Logo from './Logo';

interface HeaderProps {
    isActive: (path: string) => boolean;
    onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isActive, onSearchClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const items = useRFQStore((state) => state.items);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show background when scrolled
            setIsScrolled(currentScrollY > 50);

            // Hide/Show logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [isMenuOpen]);

    return (
        <React.Fragment>
            {/* Dynamic Island Navbar */}
            <header
                className={`fixed top-4 left-0 right-0 z-[100] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHidden && !isMenuOpen ? '-tranneutral-y-32' : 'tranneutral-y-0'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="nav-island px-6 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                            <Logo size="sm" withTagline={false} />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {NAV_LINKS.slice(0, 4).map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600 hover:text-industrial-900'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={onSearchClick}
                                className="p-2 text-industrial-500 hover:text-accent-blue transition-colors rounded-full hover:bg-industrial-50"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            <Link
                                to="/rfq"
                                className="hidden sm:flex items-center gap-2 bg-industrial-900 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-industrial-800 transition-colors"
                            >
                                <ShoppingCart size={14} />
                                <span>Quote {items.length > 0 && `(${items.length})`}</span>
                            </Link>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-industrial-900 hover:text-accent-blue transition-colors relative"
                                aria-label="Menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                {!isMenuOpen && items.length > 0 && (
                                    <span className="absolute top-1 right-1 h-3 w-3 bg-accent-blue rounded-full border border-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Visual Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                <div className="h-full flex flex-col pt-32 pb-12 px-6 md:px-20 overflow-y-auto">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-6">
                            {NAV_LINKS.map((link, index) => (
                                <div key={link.path} className="overflow-hidden">
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block text-4xl md:text-6xl font-display font-medium tracking-tight hover:text-accent-blue transition-all duration-500 transform ${isMenuOpen ? 'tranneutral-y-0 opacity-100' : 'tranneutral-y-full opacity-0'}`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* Recent Products / Featured */}
                        <div className={`hidden md:flex flex-col justify-center transition-all duration-700 delay-300 ${isMenuOpen ? 'tranneutral-y-0 opacity-100' : 'tranneutral-y-20 opacity-0'}`}>
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-industrial-400 mb-8">Featured Solutions</h3>
                            <div className="grid gap-6">
                                <Link to="/products/emp-uc-grid" onClick={() => setIsMenuOpen(false)} className="group flex gap-6 items-center p-4 rounded-xl hover:bg-industrial-50 transition-colors border border-transparent hover:border-industrial-100">
                                    <div className="w-24 h-24 rounded-lg bg-industrial-200 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80" alt="SmartGrid" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-industrial-900 mb-1 group-hover:text-accent-blue transition-colors">SmartPod Grid™</h4>
                                        <p className="text-sm text-industrial-500 leading-snug">IoT-managed scalable infrastructure networks.</p>
                                    </div>
                                </Link>
                                <Link to="/technical" onClick={() => setIsMenuOpen(false)} className="group flex gap-6 items-center p-4 rounded-xl hover:bg-industrial-50 transition-colors border border-transparent hover:border-industrial-100">
                                    <div className="w-24 h-24 rounded-lg bg-industrial-200 overflow-hidden flex items-center justify-center text-industrial-400 group-hover:text-accent-blue transition-colors">
                                        <ArrowRight size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-industrial-900 mb-1 group-hover:text-accent-blue transition-colors">Technical Center</h4>
                                        <p className="text-sm text-industrial-500 leading-snug">Access datasheets, CAD drawings, and specifications.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
