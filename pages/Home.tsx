import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Droplet,
  Zap,
  Box,
  Layers,
  FileBox,
  Sun,
  Factory,
  Shield,
  CheckCircle,
  Award,
  ShieldCheck,
  Globe,
  ChevronRight,
  Lightbulb,
  Check
} from 'lucide-react';
import { INDUSTRIES, MOCK_PRODUCTS, MOCK_BLOG_POSTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const HERO_IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0",
    alt: "Emphz GRP Solutions Hero Image"
  },
  {
    src: "https://cpimg.tistatic.com/00883297/b/6/FRP-Electric-Panel-Box.jpg",
    alt: "GRP Electrical Enclosures"
  },
  {
    src: "https://tiimg.tistatic.com/fp/1/004/995/grp-single-portable-toilet-082.jpg",
    alt: "Portable Toilet Units"
  },
  {
    src: "https://www.aradhanafrp.com/assets/img/frp-security-guard-cabin.jpg",
    alt: "Security Cabins"
  },
  {
    src: "https://tejaswi-group.com/wp-content/uploads/2025/03/Food-Retail-Kiosk-Designer-1080x675.webp",
    alt: "GRP Kiosks"
  }
];

const FEATURED_CATEGORIES = [
  "Electrical Enclosures",
  "Portable Toilets",
  "Security Cabins",
  "Modular Kiosks",
  "Modular Pods",
  "Custom Fabrication"
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* 4. Hero Section – Depth Without Noise */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 md:pt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300 mb-6 font-medium text-xs text-slate-600 uppercase tracking-widest">
              <Factory size={14} className="text-blue-600" />
              Kerala Managed | Mysuru Manufactured
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-slate-900">
              GRP Products for <br />
              <span className="text-blue-700">Infrastructure Use</span>
            </h1>
            <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
              EMPHZ manufactures GRP / FRP enclosures, cabins, and modular structures designed as practical replacements for steel where corrosion and maintenance are recurring problems.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="rounded-xl bg-slate-900 px-8 py-4 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10">
                View Products
              </Link>
              <Link to="/about" className="rounded-xl glass px-8 py-4 text-slate-900 font-medium hover:bg-white/80 transition-all hover:scale-105 active:scale-95">
                Download Profile
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in delay-300">
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full" />
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczO1hJQxalyxfSiUQD0Co6FyBl4at4jQbtoB5T0iOeOeUi112a4SbR1tk_s2zWjJvOeAIVTf-yU1vM_e-rFFCArb6KZpbArxSR3skWuBDM9tznEyxLQ59jc-h5zaCkL-UVeoUwYtDr7Oo6R8654X6D4Htw=w1563-h879-s-no-gm?authuser=0"
              alt="GRP Infrastructure"
              className="relative rounded-3xl shadow-2xl border border-white/50"
            />
          </div>
        </div>
      </section>

      {/* 6. Section Separation – Use Light Panels, Not Lines */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto animate-fade-up">
            <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">Why GRP?</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Engineered for the aggressive site conditions of India.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-all hover:shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Shield className="text-blue-700 group-hover:text-white" />
              </div>
              <h4 className="font-semibold text-xl text-slate-900">Corrosion Free</h4>
              <p className="text-sm mt-3 text-slate-600 leading-relaxed">
                Ideal for coastal regions and high-humidity areas. No rusting or repainting required under normal outdoor use.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-all hover:shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="text-blue-700 group-hover:text-white" />
              </div>
              <h4 className="font-semibold text-xl text-slate-900">Shock-Proof Safety</h4>
              <p className="text-sm mt-3 text-slate-600 leading-relaxed">
                Electrically non-conductive body adds a standard layer of safety for site workers and maintenance teams.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:-translate-y-1 transition-all hover:shadow-xl group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Award size={20} className="text-blue-700 group-hover:text-white" />
              </div>
              <h4 className="font-semibold text-xl text-slate-900">Industrial Standards</h4>
              <p className="text-sm mt-3 text-slate-600 leading-relaxed">
                Tested for Fire Safety (UL 94 V-0), Weatherability (ASTM UV), and Protection (IP 66/67).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Cards – Glass + Hover Lift */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-up">
            <div>
              <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3 text-center md:text-left">Product Matrix</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Standard & Custom GRP Solutions.</h3>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-700 transition-colors">
              Full Catalog <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.slice(0, 3).map((product, i) => (
              <Link to={`/products/${product.id}`} key={i} className="glass rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-2xl group flex flex-col h-full bg-white/40">
                <div className="relative h-48 mb-8 overflow-hidden rounded-xl">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-bold text-blue-700 tracking-widest uppercase mb-2 block">{product.category}</span>
                  <h3 className="font-semibold text-xl text-slate-900 group-hover:text-blue-700 transition-colors mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center text-slate-900 font-semibold text-sm">
                  Technical Specs <ChevronRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Mysuru Plant"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-up">
              <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-4">Operations</h2>
              <h3 className="text-4xl font-semibold text-slate-900 leading-tight">Mysuru Plant. <br />Managed from Kerala.</h3>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                EMPHZ GRP Solutions brings together engineering vision and manufacturing scale. Production is planned based on confirmed drawings and approved specifications at our Mysuru facility.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Maintenance Free</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">ISO</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">9001 Certified</div>
                </div>
              </div>
              <Link to="/contact" className="mt-12 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-white font-medium hover:bg-slate-800 transition-all">
                Contact Engineering Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">Ready to Switch to GRP?</h2>
          <p className="mt-6 text-slate-600 text-lg">
            Build more resilient infrastructure with maintenance-free composite solutions.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-slate-900 px-10 py-4 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
              Get a Quote
            </Link>
            <Link to="/technical" className="rounded-xl glass px-10 py-4 text-slate-900 font-medium hover:border-slate-300 transition-all">
              Technical Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;