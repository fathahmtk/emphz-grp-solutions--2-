
import React from 'react';

interface SectionHeaderProps {
    number: string;
    category: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    number,
    category,
    title,
    subtitle,
    align = 'left',
    light = false
}) => {
    return (
        <div className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-4xl`}>
            <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
                <span className="font-mono text-[10px] text-emphz-teal font-bold tracking-[0.5em] uppercase px-3 py-1 bg-emphz-teal/10 border border-emphz-teal/20 rounded-full">
                    {number} / {category}
                </span>
            </div>

            <h2 className={`text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 ${light ? 'text-emphz-blue' : 'text-white'}`}>
                {title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                        {i === 1 ? <span className="text-emphz-teal">{word} </span> : word + ' '}
                    </React.Fragment>
                ))}
            </h2>

            {subtitle && (
                <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
