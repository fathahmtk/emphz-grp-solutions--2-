
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Manifesto from '../components/Manifesto';
import Products from '../components/Products';
import ValueProp from '../components/ValueProp';
import Capabilities from '../components/Capabilities';
import Process from '../components/Process';
import OperationsMap from '../components/OperationsMap';
import Comparison from '../components/Comparison';
import ResilienceLab from '../components/ResilienceLab';
import Quality from '../components/Quality';
import Configurator from '../components/Configurator';
import TechnicalLedger from '../components/TechnicalLedger';
import EngineeringProtocol from '../components/EngineeringProtocol';
import VettedSystems from '../components/VettedSystems';
import TechnicalLibrary from '../components/TechnicalLibrary';
import ComplianceMatrix from '../components/ComplianceMatrix';
import FeatureSpotlight from '../components/FeatureSpotlight';
import SolutionArchitect from '../components/SolutionArchitect';
import EngineeringDesk from '../components/EngineeringDesk';
import ProjectPulse from '../components/ProjectPulse';
import ClientReel from '../components/ClientReel';
import Industries from '../components/Industries';
import Clients from '../components/Clients';
import Projects from '../components/Projects';
import News from '../components/News';
import SustainabilityLedger from '../components/SustainabilityLedger';
import DigitalTwin from '../components/DigitalTwin';
import MaterialAgingSim from '../components/MaterialAgingSim';
import SiteReadinessDiagnostic from '../components/SiteReadinessDiagnostic';
import Careers from '../components/Careers';
import Resources from '../components/Resources';
import FAQ from '../components/FAQ';
import ROICalculator from '../components/ROICalculator';
import ModularVelocity from '../components/ModularVelocity';
import InnovationHub from '../components/InnovationHub';
import ProjectLaunchpad from '../components/ProjectLaunchpad';
import TechnicalVetter from '../components/TechnicalVetter';
import FeatureAnatomy from '../components/FeatureAnatomy';
import LaminateStack from '../components/LaminateStack';
import TechnicalBlueprint from '../components/TechnicalBlueprint';
import FutureVision from '../components/FutureVision';
import { LayoutContextType } from '../components/MainLayout';

const Landing: React.FC = () => {
    const { quoteItems, addToQuote } = useOutletContext<LayoutContextType>();

    return (
        <div className="flex flex-col">
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
            <FutureVision />
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
        </div>
    );
};

export default Landing;
