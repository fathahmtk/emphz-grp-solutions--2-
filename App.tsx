
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import Catalog from './pages/Catalog';
import TechnicalCenter from './pages/TechnicalCenter';
import RFQ from './pages/RFQ';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import MaterialScience from './pages/MaterialScience';
import NotFound from './pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="products" element={<Catalog />} />
            <Route path="technical" element={<TechnicalCenter />} />
            <Route path="rfq" element={<RFQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="industries" element={<Industries />} />
            <Route path="cases" element={<CaseStudies />} />
            <Route path="material-science" element={<MaterialScience />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
