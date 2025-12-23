import React from 'react';

const Logo: React.FC<{ className?: string; variant?: 'light' | 'dark' }> = ({ className, variant = 'dark' }) => {
  return (
    <img
      src="/logo.png"
      alt="Emphz Logo"
      className={`${className} object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
    />
  );
};

export default Logo;