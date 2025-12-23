import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    url = 'https://emphz.noordigital.business/',
    type = 'website'
}) => {
    const siteTitle = 'EMPHZ | Industrial GRP Solutions';
    const fullTitle = title === 'Home' ? siteTitle : `${title} | EMPHZ`;

    return (
        <Helmet>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="EMPHZ GRP Solutions" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
