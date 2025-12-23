import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-industrial-900 flex items-center justify-center p-4 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="relative z-10 max-w-lg">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500/10 rounded-full mb-8 border border-red-500/30 animate-pulse">
          <AlertTriangle className="text-red-500 w-10 h-10" />
        </div>

        <h1 className="text-6xl font-black text-white mb-2 font-display tracking-tighter">404</h1>
        <h2 className="text-xl font-bold text-accent-blue uppercase tracking-[0.2em] mb-6 font-mono">Signal Lost</h2>

        <p className="text-industrial-400 mb-10 font-light text-lg">
          The requested asset could not be located in our schematics. It may have been decommissioned or moved to a restricted sector.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="inline-flex items-center justify-center bg-white text-industrial-900 font-bold px-8 py-3 rounded-full hover:bg-accent-blue hover:text-white transition-all uppercase tracking-widest text-xs font-display">
            <Home size={14} className="mr-2" /> Return Home
          </Link>
          <button onClick={() => window.history.back()} className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-display">
            <ArrowLeft size={14} className="mr-2" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;