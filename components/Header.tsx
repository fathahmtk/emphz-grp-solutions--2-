import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';

interface HeaderProps {
    scrolled: boolean;
    isActive: (path: string) => boolean;
    onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, isActive, onSearchClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const items = useRFQStore((state: any) => state.items);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className={`fixed top-4 left-0 w-full z-50 transition-all duration-300 pointer-events-none flex justify-center px-4 md:px-4`}>
            <div className={`nav-island pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${scrolled ? 'w-full max-w-5xl py-2 px-4 md:px-6 bg-white/95 shadow-2xl' : 'w-full max-w-7xl py-3 md:py-4 px-4 md:px-8 bg-white/80'}`}>
                <Link to="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                    <img src="/logo.png" alt="EMPHZ Logo" className={`h-12 md:h-16 w-auto transition-all duration-500 ease-out group-hover:scale-105`} />
                </Link>
                <nav className="hidden md:flex items-center gap-2">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.path} to={link.path} className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 ${isActive(link.path) ? 'text-industrial-900 border-b-2 border-accent-blue' : 'text-industrial-600 hover:text-industrial-900'}`}>{link.label}</Link>
                    ))}
                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={onSearchClick}
                        className="p-2 text-industrial-500 hover:text-accent-blue transition-colors rounded-full hover:bg-industrial-50"
                        title="Search (Cmd+K)"
                    >
                        <Search size={18} />
                    </button>
                    <Link to="/rfq" className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-industrial-500 hover:text-accent-blue transition-colors relative tap-target">
                        <ShoppingCart size={18} />
                        {items.length > 0 && <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 bg-accent-blue text-white text-[8px] font-bold flex items-center justify-center rounded-full">{items.length}</span>}
                    </Link>
                    <Link to="/rfq" className="hidden sm:flex btn-industrial px-6 py-3 text-sm rounded transition-all">Get Quote</Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2.5 text-industrial-900 bg-industrial-100 rounded-full">{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
                </div>
            </div>
            <div className={`mobile-backdrop md:hidden ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-industrial-100 transition-all duration-300 origin-top shadow-xl ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
                <nav className="flex flex-col p-6 gap-5">
                    <button
                        onClick={() => { setIsMenuOpen(false); onSearchClick(); }}
                        className="flex items-center gap-4 text-lg font-medium py-2 text-industrial-600"
                    >
                        <Search size={24} /> Search
                    </button>
                    {NAV_LINKS.map((link) => (
                        <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-2 ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-600'}`}>{link.label}</Link>
                    ))}
                    <Link to="/rfq" onClick={() => setIsMenuOpen(false)} className="btn-industrial py-4 text-center">Request Quote</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
