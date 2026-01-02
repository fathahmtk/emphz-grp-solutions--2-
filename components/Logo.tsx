
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", size, withTagline }) => {
  return (
    <div className={`flex items-center gap-4 ${className} group cursor-none`}>
      {/* Precision Engineered Mark */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible transition-all duration-1000 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="logo-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="50%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
          </defs>

          {/* Outer technical ring */}
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/10"
          />

          {/* Hexagonal structural core */}
          <path
            d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z"
            stroke="url(#logo-shimmer)"
            strokeWidth="3"
            strokeLinejoin="round"
            fill="none"
            className="drop-shadow-[0_0_15px_rgba(20,184,166,0.6)]"
          />

          {/* Inner core particle */}
          <path
            d="M50 35 L63 42.5 L63 57.5 L50 65 L37 57.5 L37 42.5 Z"
            fill="url(#logo-shimmer)"
            className="animate-pulse"
          />

          {/* Status orbit */}
          <circle cx="80" cy="32.5" r="4" fill="#F97316" className="animate-pulse shadow-[0_0_10px_#F97316]" />
        </svg>
      </div>

      {/* Corporate Identity */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-white tracking-[-0.08em] leading-none font-sans uppercase">
            EMP<span className="text-emphz-teal italic">H</span>Z
          </span>
        </div>
        {withTagline && (
          <div className="flex items-center gap-2 mt-1.5 overflow-hidden">
            <span className="h-px w-3 bg-emphz-teal/40"></span>
            <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-[0.6em] whitespace-nowrap">
              HIGH_PRECISION_GRP
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
