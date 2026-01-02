import React, { useEffect, useRef } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'left' | 'right' | 'none';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getAnimationClass = () => {
        switch (direction) {
            case 'up':
                return 'slide-in-up';
            case 'left':
                return 'slide-in-left';
            case 'right':
                return 'slide-in-right';
            default:
                return 'fade-in';
        }
    };

    return (
        <div
            ref={sectionRef}
            className={`fade-in-section ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={`opacity-0 ${getAnimationClass()}`}>
                {children}
            </div>
        </div>
    );
};

export default FadeInSection;
