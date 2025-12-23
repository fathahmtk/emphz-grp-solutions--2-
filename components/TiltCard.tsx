import React, { useRef, useState } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    rotationFactor?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', rotationFactor = 15 }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -rotationFactor;
        const rotateY = ((x - centerX) / centerX) * rotationFactor;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{
                transform: isHovered
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transformStyle: 'preserve-3d',
            }}
        >
            {children}
        </div>
    );
};

export default TiltCard;
