import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Html } from '@react-three/drei';
import { Box as BoxIcon, ImageIcon } from 'lucide-react';
import { Product3DAnnotation } from '../types';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

// Fix for missing R3F types in JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      coneGeometry: any;
      ambientLight: any;
      spotLight: any;
      primitive: any;
    }
  }
}

interface ThreeProductViewerProps {
  productType: 'ENCLOSURE' | 'KIOSK' | 'CABIN' | 'SMART_CABIN' | 'AUTOMOBILE' | 'DEFAULT';
  annotations?: Product3DAnnotation[];
  modelUrl?: string;
}

// --- PROCEDURAL ASSETS (Fallback) ---

const EnclosureMesh = (props: any) => {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#dddddd" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh castShadow position={[0, 1.5, 0.52]}>
        <boxGeometry args={[1.9, 2.9, 0.1]} />
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
};

const KioskMesh = (props: any) => {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow position={[0, 1.25, 0]}>
        <boxGeometry args={[3, 2.5, 2]} />
        <meshStandardMaterial color="#cccccc" roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0, 2.9, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.5, 0.8, 4]} />
        <meshStandardMaterial color="#00ADB5" roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
    </group>
  );
};

const CabinMesh = (props: any) => {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow position={[0, 1.4, 0]}>
        <boxGeometry args={[3, 2.8, 3]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0, 2.9, 0]}>
        <boxGeometry args={[3.4, 0.2, 3.4]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      <mesh position={[0, 1.6, 1.51]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshPhysicalMaterial 
          color="#88ccff" 
          metalness={0.9} 
          roughness={0.05} 
          transmission={0.6} 
          thickness={0.5} 
          transparent 
          opacity={0.4} 
        />
      </mesh>
    </group>
  );
};

const SmartCabinMesh = (props: any) => {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow position={[0, 1.1, 0]}>
        <boxGeometry args={[4, 2.2, 2]} />
        <meshStandardMaterial color="#eeeeee" roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.1, 1.01]}>
        <boxGeometry args={[3.8, 2, 0.1]} />
        <meshPhysicalMaterial 
          color="#88ccff" 
          metalness={0.9} 
          roughness={0.05} 
          transmission={0.6} 
          thickness={0.5} 
          transparent 
          opacity={0.4} 
        />
      </mesh>
      <mesh receiveShadow position={[0, -0.1, 0.4]}>
        <boxGeometry args={[4.4, 0.2, 3]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
    </group>
  );
};

const AutoPartMesh = (props: any) => {
  return (
    <group {...props}>
      <mesh castShadow position={[0, 0.1, 0]}>
        <boxGeometry args={[3.5, 0.15, 2.2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, 0.2, -0.8 + i * 0.4]}>
          <boxGeometry args={[3.5, 0.05, 0.1]} />
          <meshStandardMaterial color="#00ADB5" />
        </mesh>
      ))}
    </group>
  );
};

// --- ANNOTATION MARKER ---

interface AnnotationProps {
  data: Product3DAnnotation;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const Annotation: React.FC<AnnotationProps> = ({ data, isOpen, onToggle }) => {
  return (
    <Html position={data.position} center zIndexRange={[100, 0]} occlude>
      <div className="relative group">
        <button 
          onClick={() => onToggle(data.id)}
          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,173,181,0.5)] ${isOpen ? 'bg-emphz-teal border-white scale-110' : 'bg-black/60 border-emphz-teal text-white hover:bg-emphz-teal hover:scale-110'}`}
        >
          {isOpen ? <div className="w-2 h-2 bg-white rounded-full" /> : <div className="w-1.5 h-1.5 bg-emphz-teal rounded-full animate-pulse" />}
        </button>
        
        {isOpen && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-48 bg-black/80 backdrop-blur-md border border-emphz-teal/30 p-3 rounded-lg text-left shadow-2xl animate-fade-in origin-left">
             <h4 className="text-white font-bold text-xs font-display uppercase tracking-wider mb-1">{data.title}</h4>
             <p className="text-gray-300 text-[10px] leading-relaxed">{data.description}</p>
             
             {/* Connector Line */}
             <div className="absolute right-full top-1/2 -translate-y-1/2 w-4 h-px bg-emphz-teal/50"></div>
          </div>
        )}
      </div>
    </Html>
  );
};

// --- ROBUST LOADER COMPONENT (IMPERATIVE) ---

const RobustModelLoader = ({ url, fallback }: { url: string, fallback: React.ReactNode }) => {
  const [gltf, setGltf] = useState<GLTF | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // DIAGNOSIS FIX: Use Google CDN for Draco to ensure reliability and avoid local 404s
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);

    // DIAGNOSIS FIX: Explicit logging of progress and errors
    console.log(`[Viewer] Attempting to load: ${url}`);
    
    loader.load(
      url,
      (data) => {
        console.log('[Viewer] Model loaded successfully');
        setGltf(data);
      },
      (progress) => {
        const percent = (progress.loaded / progress.total * 100).toFixed(0);
        if (Number(percent) % 20 === 0) console.log(`[Viewer] Loading: ${percent}%`);
      },
      (err) => {
        console.error("[Viewer] Critical Load Error:", err);
        setError(err instanceof Error ? err : new Error('Unknown loader error'));
      }
    );
    
    return () => { draco.dispose(); }
  }, [url]);

  if (error) {
    // DIAGNOSIS FIX: Fallback to procedural geometry on error
    return <>{fallback}</>;
  }
  
  if (!gltf) return null; // Let the parent Suspense or a spinner handle the 'loading' state visibly if needed

  return <primitive object={gltf.scene} />;
}

// --- SCENE COMPONENT ---

const ModelStage: React.FC<{ type: string; annotations?: Product3DAnnotation[]; modelUrl?: string }> = ({ type, annotations, modelUrl }) => {
  const [openAnnotation, setOpenAnnotation] = useState<string | null>(null);

  const toggleAnnotation = (id: string) => {
    setOpenAnnotation(prev => prev === id ? null : id);
  };

  // Determine Procedural Fallback Mesh
  let FallbackModel = EnclosureMesh;
  if (type === 'KIOSK') FallbackModel = KioskMesh;
  if (type === 'CABIN') FallbackModel = CabinMesh;
  if (type === 'SMART_CABIN') FallbackModel = SmartCabinMesh;
  if (type === 'AUTOMOBILE') FallbackModel = AutoPartMesh;

  return (
    <>
      <Stage intensity={0.5} environment="city" adjustCamera={1.2} shadows="contact">
        {modelUrl ? (
          <RobustModelLoader 
            url={modelUrl} 
            fallback={<FallbackModel />} 
          />
        ) : (
          <FallbackModel />
        )}
      </Stage>
      {annotations?.map(ann => (
        <Annotation 
          key={ann.id} 
          data={ann} 
          isOpen={openAnnotation === ann.id} 
          onToggle={toggleAnnotation} 
        />
      ))}
    </>
  );
};

const ThreeProductViewer: React.FC<ThreeProductViewerProps> = ({ productType, annotations, modelUrl }) => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-full relative group touch-none bg-gradient-to-b from-[#0B1120] to-[#1a2333]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[4, 2, 5]} fov={50} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        {/* Environment */}
        <ModelStage type={productType} annotations={annotations} modelUrl={modelUrl} />
        
        {/* Controls */}
        <OrbitControls 
          autoRotate={autoRotate}
          autoRotateSpeed={1.0}
          enablePan={true}
          enableZoom={true}
          minDistance={2}
          maxDistance={20}
          onStart={() => setAutoRotate(false)} // Pause rotation on interact
        />
      </Canvas>

      {/* Control Overlay */}
      <div className="absolute bottom-4 left-4 flex gap-2">
         <button 
           onClick={() => setAutoRotate(!autoRotate)}
           className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-colors ${autoRotate ? 'bg-emphz-teal text-emphz-navy border-emphz-teal' : 'bg-black/50 text-gray-400 border-white/10 hover:text-white'}`}
         >
           {autoRotate ? 'Auto-Rotate: ON' : 'Auto-Rotate: OFF'}
         </button>
      </div>

      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-3 py-1.5 rounded-full backdrop-blur-md pointer-events-none flex items-center gap-2 animate-fade-in border border-white/10 select-none">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
        <span className="font-mono tracking-wide font-bold">R3F ENGINE ONLINE</span>
      </div>
    </div>
  );
};

export default ThreeProductViewer;