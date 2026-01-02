
import React from 'react';

const LOGOS = [
  'POWERGRID', 'METRO RAIL', 'MUNICIPAL', 'TELECOM', 'WATER BOARD', 'SMART CITY',
  'RENEWABLES', 'PETROGAS', 'INFRA_DEV', 'UTILITIES', 'URBAN_CORP', 'DEFENSE_INFRA'
];

const ClientReel: React.FC = () => {
  return (
    <div className="py-20 bg-emphz-darker border-y border-white/5 overflow-hidden relative group">
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emphz-darker via-transparent to-emphz-darker z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap animate-marquee group-hover:pause">
        <div className="flex gap-32 items-center px-16">
          {LOGOS.map((logo, i) => (
            <span key={i} className="text-white/10 font-bold text-3xl tracking-tighter hover:text-emphz-teal hover:scale-110 transition-all cursor-default select-none uppercase">
              {logo}
            </span>
          ))}
        </div>
        <div className="flex gap-32 items-center px-16">
          {LOGOS.map((logo, i) => (
            <span key={`dup-${i}`} className="text-white/10 font-bold text-3xl tracking-tighter hover:text-emphz-teal hover:scale-110 transition-all cursor-default select-none uppercase">
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientReel;
