import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useRFQStore } from '../stores/rfqStore';

interface HeaderProps {
    isActive: (path: string) => boolean;
    onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isActive, onSearchClick }) => {
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
        <header className="fixed inset-0 pointer-events-none z-[100]">
            {/* Floating Menu Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`fixed top-6 right-6 pointer-events-auto p-4 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-industrial-100 text-industrial-900 transition-all duration-500 hover:scale-110 active:scale-95 group ${isMenuOpen ? 'rotate-90' : ''}`}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                {!isMenuOpen && items.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent-blue text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md animate-bounce">
                        {items.length}
                    </span>
                )}
            </button>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 pointer-events-auto bg-white/98 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
            >
                <div className="h-full flex flex-col p-8 md:p-20 overflow-y-auto">
                    <div className="flex justify-between items-center mb-16">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="group">
                            <img src="/logo.png" alt="EMPHZ Logo" className="h-12 md:h-20 w-auto transition-transform duration-500 group-hover:scale-105" />
                        </Link>
                    </div>

                    <div className="max-w-5xl mx-auto w-full flex flex-col items-center md:items-start">
                        <nav className="flex flex-col gap-4 md:gap-6 w-full">
                            {NAV_LINKS.map((link, index) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-4xl md:text-7xl font-bold tracking-tighter transition-all duration-500 hover:pl-8 ${isActive(link.path) ? 'text-accent-blue' : 'text-industrial-900/40 hover:text-industrial-900'}`}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 50 + 200}ms` : '0ms',
                                        transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                        opacity: isMenuOpen ? 1 : 0
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-12 md:mt-20 w-full flex flex-col md:flex-row gap-8 items-center pt-12 border-t border-industrial-100/50">
                            <button
                                onClick={() => { setIsMenuOpen(false); onSearchClick(); }}
                                className="flex items-center gap-4 text-xl md:text-2xl font-semibold text-industrial-600 hover:text-accent-blue transition-colors group"
                            >
                                <Search size={24} className="group-hover:scale-110 transition-transform" />
                                <span>Search Products</span>
                            </button>

                            <Link
                                to="/rfq"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full md:w-auto btn-industrial py-5 px-12 text-lg rounded-full flex items-center justify-center gap-3 transition-all hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]"
                            >
                                <ShoppingCart size={24} />
                                Request Quote ({items.length})
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Background Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                    <img src="/logo.png" alt="" className="w-[80vw] grayscale" />
                </div>
            </div>
        </header>
    );
};

export default Header;
