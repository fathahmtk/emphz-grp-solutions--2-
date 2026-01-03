import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

const GA_ID = 'G-XXXXXXXXXX'; // Placeholder - User to replace
const CLARITY_ID = 'xxxxxxxxx'; // Placeholder - User to replace

const Analytics: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        script.async = true;
        document.head.appendChild(script);

        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
        `;
        document.head.appendChild(inlineScript);

        // Initialize Clarity
        const clarityScript = document.createElement('script');
        clarityScript.innerHTML = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
        `;
        document.head.appendChild(clarityScript);

        return () => {
            // Cleanup if necessary (usually not needed for analytics scripts as they persist)
        };
    }, []);

    // Track Page Views on Route Change
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null; // Component renders nothing visibly
};

export default Analytics;
