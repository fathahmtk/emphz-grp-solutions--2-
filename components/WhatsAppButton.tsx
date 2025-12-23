import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const WhatsAppButton: React.FC = () => {
    return (
        <div className="fixed bottom-8 right-8 z-30 flex flex-col gap-4 transition-all duration-500">
            <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noreferrer" className="bg-white text-industrial-900 p-4 rounded-full shadow-subtle border border-industrial-100 group">
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </a>
        </div>
    );
};

export default WhatsAppButton;
