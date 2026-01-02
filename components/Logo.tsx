
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", size, withTagline }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 156 34"
      className={`${className} overflow-visible transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:-rotate-1`}
      fill="none"
      aria-label="EMPHZ Logo"
    >
      {/* E */}
      <path
        d="M0 0H23V6H7V14H21V20H7V28H23V34H0V0Z"
        fill="white"
        className="transition-colors duration-300 group-hover:fill-slate-200"
      />

      {/* M */}
      <path
        d="M29 0H37L44.5 18L52 0H60V34H53V12L44.5 30L36 12V34H29V0Z"
        fill="white"
        className="transition-colors duration-300 group-hover:fill-slate-200"
      />

      {/* P - Brand Accent Letter */}
      <path
        d="M66 0H80C88 0 92 5 92 12C92 19 88 24 80 24H73V34H66V0ZM73 6V18H80C84 18 85 16 85 12C85 8 84 6 80 6H73Z"
        fill="#C5C6C7"
        className="logo-accent-path transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_0_8px_rgba(197,198,199,0.3)]"
      />

      {/* H */}
      <path
        d="M98 0H105V14H118V0H125V34H118V20H105V34H98V0Z"
        fill="white"
        className="transition-colors duration-300 group-hover:fill-slate-200"
      />

      {/* Z */}
      <path
        d="M131 0H154V6L139 28H154V34H131V28L146 6H131V0Z"
        fill="white"
        className="transition-colors duration-300 group-hover:fill-slate-200"
      />
    </svg>
  );
};

export default Logo;
