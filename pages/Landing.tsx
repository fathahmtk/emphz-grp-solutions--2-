
import React, { Suspense, lazy } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import { LayoutContextType } from '../components/MainLayout';

// Lazy load non-critical sections
const ClientReel = lazy(() => import('../components/ClientReel'));
const About = lazy(() => import('../components/About'));
const Products = lazy(() => import('../components/Products'));
const ProjectPulse = lazy(() => import('../components/ProjectPulse'));
const MaterialAgingSim = lazy(() => import('../components/MaterialAgingSim'));
const TechnicalVetter = lazy(() => import('../components/TechnicalVetter'));
const FeatureAnatomy = lazy(() => import('../components/FeatureAnatomy'));
const SolutionArchitect = lazy(() => import('../components/SolutionArchitect'));
const FeatureSpotlight = lazy(() => import('../components/FeatureSpotlight'));
const LaminateStack = lazy(() => import('../components/LaminateStack'));
const DigitalTwin = lazy(() => import('../components/DigitalTwin'));
const TechnicalBlueprint = lazy(() => import('../components/TechnicalBlueprint'));
const SiteReadinessDiagnostic = lazy(() => import('../components/SiteReadinessDiagnostic'));
const Quality = lazy(() => import('../components/Quality'));
const Comparison = lazy(() => import('../components/Comparison'));
const ROICalculator = lazy(() => import('../components/ROICalculator'));
const SustainabilityLedger = lazy(() => import('../components/SustainabilityLedger'));
const ResilienceLab = lazy(() => import('../components/ResilienceLab'));
const ModularVelocity = lazy(() => import('../components/ModularVelocity'));
const Configurator = lazy(() => import('../components/Configurator'));
const TechnicalLedger = lazy(() => import('../components/TechnicalLedger'));
const EngineeringProtocol = lazy(() => import('../components/EngineeringProtocol'));
const Capabilities = lazy(() => import('../components/Capabilities'));
const Process = lazy(() => import('../components/Process'));
const OperationsMap = lazy(() => import('../components/OperationsMap'));
const Industries = lazy(() => import('../components/Industries'));
const InnovationHub = lazy(() => import('../components/InnovationHub'));
const FutureVision = lazy(() => import('../components/FutureVision'));
const Manifesto = lazy(() => import('../components/Manifesto'));
const Projects = lazy(() => import('../components/Projects'));
const Clients = lazy(() => import('../components/Clients'));
const VettedSystems = lazy(() => import('../components/VettedSystems'));
const News = lazy(() => import('../components/News'));
const Careers = lazy(() => import('../components/Careers'));
const ComplianceMatrix = lazy(() => import('../components/ComplianceMatrix'));
const FAQ = lazy(() => import('../components/FAQ'));
const TechnicalLibrary = lazy(() => import('../components/TechnicalLibrary'));
const EngineeringDesk = lazy(() => import('../components/EngineeringDesk'));
const Resources = lazy(() => import('../components/Resources'));
const ProjectLaunchpad = lazy(() => import('../components/ProjectLaunchpad'));

const SectionLoader = () => (
    <div className="h-[200px] w-full flex items-center justify-center bg-emphz-blue/10 animate-pulse">
        <div className="w-8 h-8 border-2 border-emphz-teal/20 border-t-emphz-teal rounded-full animate-spin"></div>
    </div>
);

const Landing: React.FC = () => {
    const { quoteItems, addToQuote } = useOutletContext<LayoutContextType>();

    return (
        <div className="flex flex-col">
            <Hero />

            <Suspense fallback={<SectionLoader />}>
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
            </Suspense>
        </div>
    );
};

export default Landing;
