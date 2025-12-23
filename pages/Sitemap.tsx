import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, MOCK_PRODUCTS, MOCK_CASE_STUDIES, MOCK_BLOG_POSTS } from '../constants';
import { ProductCategory, Product } from '../types';
import { Box, ChevronRight, Activity, Cpu, Layers, LayoutGrid, Zap, Rss } from 'lucide-react';
import SEO from '../components/SEO';

const Sitemap: React.FC = () => {
   const productsByCategory = Object.values(ProductCategory).reduce((acc, category) => {
      acc[category] = MOCK_PRODUCTS.filter(p => p.category === category);
      return acc;
   }, {} as Record<ProductCategory, Product[]>);

   return (
      <div className="bg-[#050A14] min-h-screen py-16 text-gray-300 relative overflow-hidden font-mono">
         <SEO title="Sitemap | EMPHZ" description="Navigate through the complete structure of the EMPHZ website." />
         {/* Blueprint Background Grid */}
         <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,173,181,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,173,181,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
         }}></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12 border-b border-gray-800 pb-8 flex items-end justify-between">
               <div>
                  <div className="text-emphz-teal font-bold text-xs uppercase tracking-[0.3em] mb-2">{'// SYSTEM_ARCHITECTURE'}</div>
                  <h1 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight">SITE BLUEPRINT</h1>
               </div>
               <div className="hidden md:block text-right text-[10px] text-gray-500 font-mono">
                  <div>LAST_UPDATE: {new Date().toLocaleDateString()}</div>
                  <div>NODES: {MOCK_PRODUCTS.length + MOCK_CASE_STUDIES.length + MOCK_BLOG_POSTS.length + 5}</div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

               {/* Column 1: Core Navigation */}
               <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-emphz-teal pl-3">
                     <LayoutGrid size={16} className="text-emphz-teal" /> Core Modules
                  </div>
                  <div className="space-y-4 relative">
                     {/* Vertical Connector Line */}
                     <div className="absolute left-[7px] top-2 bottom-4 w-px bg-gray-800"></div>

                     {NAV_LINKS.map((link) => (
                        <div key={link.path} className="relative pl-6">
                           {/* Horizontal Connector */}
                           <div className="absolute left-[7px] top-1/2 w-4 h-px bg-gray-800"></div>
                           <div className="absolute left-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full border border-gray-900"></div>

                           <Link to={link.path} className="block bg-gray-900/50 border border-gray-800 hover:border-emphz-teal p-3 rounded text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-all group">
                              <span className="font-bold group-hover:text-emphz-teal transition-colors">{link.label}</span>
                              <span className="block text-[9px] text-gray-600 font-mono mt-1 group-hover:text-gray-500">/{link.path.replace('/', '')}</span>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Column 2 & 3: Product Matrix */}
               <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-emphz-teal pl-3">
                     <Box size={16} className="text-emphz-teal" /> Product Matrix
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {Object.entries(productsByCategory).map(([category, products]) => (
                        <div key={category} className="mb-4">
                           <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 flex items-center">
                              <Layers size={12} className="mr-2" /> {category}
                           </h3>
                           <ul className="space-y-2 border-l border-gray-800 pl-4 ml-1">
                              {products.map(product => (
                                 <li key={product.id}>
                                    <Link to={`/products/${product.id}`} className="flex items-center justify-between group hover:pl-2 transition-all duration-300">
                                       <span className="text-sm text-gray-500 group-hover:text-emphz-teal transition-colors">{product.name}</span>
                                       <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 text-emphz-teal transition-opacity" />
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Column 4: Resources */}
               <div className="lg:col-span-1">
                  <div className="flex items-center gap-2 text-white font-bold mb-6 uppercase tracking-wider text-sm border-l-2 border-emphz-teal pl-3">
                     <Cpu size={16} className="text-emphz-teal" /> Data Nodes
                  </div>

                  <div className="space-y-8">
                     <div>
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-widest flex items-center gap-2"><Rss size={12} /> Blog Articles</h3>
                        <ul className="space-y-2">
                           {MOCK_BLOG_POSTS.map(post => (
                              <li key={post.slug}>
                                 <Link to={`/blog/${post.slug}`} className="block p-2 rounded hover:bg-white/5 border border-transparent hover:border-gray-800 transition-colors">
                                    <div className="text-xs font-bold text-gray-300 line-clamp-1">{post.title}</div>
                                    <div className="text-[9px] text-gray-600 font-mono mt-0.5">{post.date}</div>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div>
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-widest">Case Studies</h3>
                        <ul className="space-y-2">
                           {MOCK_CASE_STUDIES.map(study => (
                              <li key={study.id}>
                                 <Link to="/case-studies" className="block p-2 rounded hover:bg-white/5 border border-transparent hover:border-gray-800 transition-colors">
                                    <div className="text-xs font-bold text-gray-300 line-clamp-1">{study.title}</div>
                                    <div className="text-[9px] text-gray-600 font-mono mt-0.5">{study.location}</div>
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div>
                        <h3 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-widest">Utilities</h3>
                        <div className="grid grid-cols-2 gap-2">
                           <Link to="/technical" className="bg-gray-900 border border-gray-800 p-3 rounded text-center hover:border-emphz-teal group transition-colors">
                              <Zap size={16} className="mx-auto mb-2 text-gray-600 group-hover:text-emphz-teal" />
                              <span className="text-[10px] font-bold text-gray-400 group-hover:text-white">TECH_BOT</span>
                           </Link>
                           <Link to="/rfq" className="bg-gray-900 border border-gray-800 p-3 rounded text-center hover:border-emphz-teal group transition-colors">
                              <Activity size={16} className="mx-auto mb-2 text-gray-600 group-hover:text-emphz-teal" />
                              <span className="text-[10px] font-bold text-gray-400 group-hover:text-white">RFQ_CART</span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Sitemap;
