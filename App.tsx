
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import Products from './components/Products';
import ValueProp from './components/ValueProp';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import OperationsMap from './components/OperationsMap';
import Comparison from './components/Comparison';
import ResilienceLab from './components/ResilienceLab';
import Quality from './components/Quality';
import Configurator from './components/Configurator';
import TechnicalLedger from './components/TechnicalLedger';
import EngineeringProtocol from './components/EngineeringProtocol';
import VettedSystems from './components/VettedSystems';
import TechnicalLibrary from './components/TechnicalLibrary';
import ComplianceMatrix from './components/ComplianceMatrix';
import FeatureSpotlight from './components/FeatureSpotlight';
import SolutionArchitect from './components/SolutionArchitect';
import EngineeringDesk from './components/EngineeringDesk';
import ProjectPulse from './components/ProjectPulse';
import ClientReel from './components/ClientReel';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Projects from './components/Projects';
import News from './components/News';
import SustainabilityLedger from './components/SustainabilityLedger';
import DigitalTwin from './components/DigitalTwin';
import MaterialAgingSim from './components/MaterialAgingSim';
import SiteReadinessDiagnostic from './components/SiteReadinessDiagnostic';
import Careers from './components/Careers';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import ROICalculator from './components/ROICalculator';
import AIConsultant from './components/AIConsultant';
import ModularVelocity from './components/ModularVelocity';
import InnovationHub from './components/InnovationHub';
import ProjectLaunchpad from './components/ProjectLaunchpad';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechnicalVetter from './components/TechnicalVetter';
import FeatureAnatomy from './components/FeatureAnatomy';
import QuoteDrawer from './components/QuoteDrawer';
import LaminateStack from './components/LaminateStack';
import TechnicalBlueprint from './components/TechnicalBlueprint';
import { MessageSquare } from 'lucide-react';

function App() {
  const [quoteItems, setQuoteItems] = useState<string[]>([]);
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);

  const addToQuote = (item: string) => {
    if (!quoteItems.includes(item)) {
      setQuoteItems([...quoteItems, item]);
      setIsQuoteDrawerOpen(true);
    }
  };

  const removeItem = (item: string) => {
    setQuoteItems(quoteItems.filter(i => i !== item));
  };

  return (
    <div className="min-h-screen text-neutral-900 font-sans selection:bg-emphz-silver selection:text-emphz-blue">
      <Navbar 
        quoteCount={quoteItems.length} 
        openConsultant={() => setIsConsultantOpen(true)} 
        openQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
      />
      
      <main>
        <Hero />
        <ClientReel />
        <About />
        <Products addToQuote={addToQuote} quoteItems={quoteItems} />
        
        {/* Performance & Visualization Tier */}
        <ProjectPulse />
        <MaterialAgingSim />
        <TechnicalVetter addToQuote={addToQuote} quoteItems={quoteItems} />
        <FeatureAnatomy />
        
        {/* Material Intelligence Hubs */}
        <SolutionArchitect />
        <FeatureSpotlight />
        <LaminateStack />
        <DigitalTwin />
        
        {/* Deep Engineering Analysis */}
        <TechnicalBlueprint />
        <SiteReadinessDiagnostic />
        <Quality />
        
        {/* Fiscal & ESG Analysis Tools */}
        <Comparison />
        <ROICalculator />
        <SustainabilityLedger />
        <ResilienceLab />
        <ModularVelocity />
        
        {/* Infrastructure Engineering Configs */}
        <Configurator addToQuote={addToQuote} quoteItems={quoteItems} />
        <TechnicalLedger />
        <EngineeringProtocol />
        
        {/* Supply Chain & Execution */}
        <Capabilities />
        <Process />
        <OperationsMap />
        
        {/* Corporate Trust Matrix */}
        <Industries />
        <InnovationHub />
        <Manifesto />
        <Projects />
        <Clients />
        <VettedSystems />
        <News />
        <Careers />
        <ComplianceMatrix />
        <FAQ />
        
        {/* Global Resource Center */}
        <TechnicalLibrary />
        <EngineeringDesk />
        <Resources />
        
        <ProjectLaunchpad />
        <Contact quoteItems={quoteItems} />
      </main>

      <Footer />

      <QuoteDrawer 
        isOpen={isQuoteDrawerOpen} 
        onClose={() => setIsQuoteDrawerOpen(false)} 
        items={quoteItems}
        removeItem={removeItem}
      />

      <button 
        onClick={() => setIsConsultantOpen(true)}
        className="fixed bottom-8 right-8 z-[150] bg-emphz-silver text-emphz-blue p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-white transition-all duration-500 group flex items-center gap-2 border border-emphz-silver/20"
        aria-label="AI Technical Consultant"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">
          AI Consultant
        </span>
      </button>

      <AIConsultant 
        isOpen={isConsultantOpen} 
        onClose={() => setIsConsultantOpen(false)} 
      />
    </div>
  );
}

export default App;
