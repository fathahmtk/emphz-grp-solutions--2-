import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import QuoteDrawer from './QuoteDrawer';

export interface LayoutContextType {
    quoteItems: string[];
    addToQuote: (item: string) => void;
    removeItem: (item: string) => void;
}

const MainLayout: React.FC = () => {
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
        </div>
    );
};

export default MainLayout;
