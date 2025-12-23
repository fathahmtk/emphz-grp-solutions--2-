import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'grayscale';
  withText?: boolean;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  withText = true,
  withTagline = false,
  size = 'md'
}) => {
  const isDark = variant === 'dark';
  const isGrayscale = variant === 'grayscale';

  const colors = {
    primary: isGrayscale ? '#64748B' : (isDark ? '#0F172A' : '#FFFFFF'),
    accent: isGrayscale ? '#94A3B8' : '#1A5F7A',
    text: isGrayscale ? '#334155' : (isDark ? '#0F172A' : '#FFFFFF'),
    tagline: isGrayscale ? '#64748B' : (isDark ? '#64748B' : '#CBD5E1')
  };

  const sizeClasses = {
    sm: { h: 'h-6', text: 'text-lg' },
    md: { h: 'h-10', text: 'text-2xl' },
    lg: { h: 'h-16', text: 'text-4xl' },
    xl: { h: 'h-24', text: 'text-6xl' }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark: Stylized E/Hexagon Industrial Shape */}
      <svg
        viewBox="0 0 100 100"
        className={`${sizeClasses[size].h} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Geometric Body */}
        <path
          d="M20 25C20 22.2386 22.2386 20 25 20H75C77.7614 20 80 22.2386 80 25V35H40V45H70V55H40V65H80V75C80 77.7614 77.7614 80 75 80H25C22.2386 80 20 77.7614 20 75V25Z"
          fill={colors.primary}
        />
        {/* Accent Bolt/Angle representing Precision/Engineering */}
        <path
          d="M80 35L65 50L80 65V35Z"
          fill={colors.accent}
        />
        {/* Top Highlight/Refine */}
        <rect x="20" y="20" width="5" height="60" fill={colors.accent} opacity="0.3" />
      </svg>

      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${sizeClasses[size].text} font-display font-medium tracking-tighter`}
            style={{ color: colors.text }}
          >
            EMPHZ
          </span>
          {withTagline && (
            <span
              className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.3em] mt-1"
              style={{ color: colors.tagline }}
            >
              Industrial GRP Solutions
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
