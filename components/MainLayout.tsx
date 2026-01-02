
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AIConsultant from './AIConsultant';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import { MessageSquare } from 'lucide-react';
import QuoteDrawer from './QuoteDrawer';

export interface LayoutContextType {
    quoteItems: string[];
    addToQuote: (item: string) => void;
    removeItem: (item: string) => void;
}

const MainLayout: React.FC = () => {
    const [isConsultantOpen, setIsConsultantOpen] = useState(false);
    const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
    const [quoteItems, setQuoteItems] = useState<string[]>([]);

    const addToQuote = (item: string) => {
        if (!quoteItems.includes(item)) {
            setQuoteItems([...quoteItems, item]);
            setIsQuoteDrawerOpen(true);
        }
    };

    const removeItem = (item: string) => {
        setQuoteItems(quoteItems.filter(i => i !== item));
    };

    return (
        <div className="min-h-screen text-neutral-900 font-sans selection:bg-emphz-amber selection:text-emphz-blue bg-white">
            <Preloader />
            <CustomCursor />

            <Navbar
                quoteCount={quoteItems.length}
                openConsultant={() => setIsConsultantOpen(true)}
                openQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
            />

            <main>
                <Outlet context={{ quoteItems, addToQuote, removeItem } as LayoutContextType} />
            </main>

            <Footer />

            <QuoteDrawer
                isOpen={isQuoteDrawerOpen}
                onClose={() => setIsQuoteDrawerOpen(false)}
                items={quoteItems}
                removeItem={removeItem}
            />

            <button
                onClick={() => setIsConsultantOpen(true)}
                className="fixed bottom-8 right-8 z-[150] bg-emphz-silver text-emphz-blue p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all duration-500 group flex items-center gap-2 border border-emphz-silver/20"
                aria-label="AI Technical Consultant"
            >
                <MessageSquare className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">
                    AI Consultant
                </span>
            </button>

            <AIConsultant
                isOpen={isConsultantOpen}
                onClose={() => setIsConsultantOpen(false)}
            />
        </div>
    );
};

export default MainLayout;
