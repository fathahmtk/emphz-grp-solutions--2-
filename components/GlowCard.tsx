import React, { useRef, useState } from 'react';

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className = '',
    glowColor = 'rgba(20, 184, 166, 0.15)'
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setGlowPosition({ x, y });
    };

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Radial Glow */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`
                }}
            />

            {/* Border glow */}
            <div
                className="absolute inset-0 border border-white/5 group-hover:border-emphz-teal/30 transition-colors duration-500 rounded-inherit"
            />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default GlowCard;
