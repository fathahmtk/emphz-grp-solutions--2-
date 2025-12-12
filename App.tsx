import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// RFQProvider removed - State is now handled by global Zustand store
import { Loader2 } from 'lucide-react';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const TechnicalCenter = lazy(() => import('./pages/TechnicalCenter'));
const MaterialScience = lazy(() => import('./pages/MaterialScience'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Industries = lazy(() => import('./pages/Industries'));
const About = lazy(() => import('./pages/About'));
const RFQ = lazy(() => import('./pages/RFQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Calculators = lazy(() => import('./pages/Calculators'));

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center text-emphz-navy w-full">
    <div className="flex flex-col items-center">
      <Loader2 className="w-8 h-8 animate-spin text-emphz-teal mb-2" />
      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Loading Assets...</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/technology" element={<MaterialScience />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/technical" element={<TechnicalCenter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/rfq" element={<RFQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;