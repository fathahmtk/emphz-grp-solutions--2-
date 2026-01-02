
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Small dot follower */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-emphz-teal rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
            {/* Larger outline follower */}
            <div
                className={`fixed top-0 left-0 w-10 h-10 border border-emphz-teal/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out flex items-center justify-center
          ${isHovering ? 'scale-[1.8] border-emphz-teal bg-emphz-teal/5' : 'scale-100'}
        `}
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) ${isHovering ? 'scale(1.8)' : 'scale(1)'}` }}
            >
                <div className={`w-1 h-1 bg-emphz-teal rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
            </div>
        </>
    );
};

export default CustomCursor;
