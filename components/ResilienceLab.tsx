
import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, Droplets, Sun, Hammer, Beaker, CheckCircle2, AlertCircle, Activity } from 'lucide-react';

type Material = 'GRP' | 'Steel' | 'Concrete';
type Stress = 'Corrosion' | 'UV' | 'Impact';

const ResilienceLab: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<Material>('GRP');
  const [activeStress, setActiveStress] = useState<Stress>('Corrosion');
  const [integrity, setIntegrity] = useState(100);
  const [isSimulating, setIsSimulating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const materials: Record<Material, { desc: string; specs: string[] }> = {
    GRP: {
      desc: "Isophthalic / Vinyl Ester Composite. Chemically inert and non-conductive.",
      specs: ["50+ Year Lifecycle", "Self-Extinguishing", "Zero Maintenance"]
    },
    Steel: {
      desc: "Galvanized Grade Carbon Steel. Prone to oxidation and electrolytic corrosion.",
      specs: ["15-20 Year Lifecycle", "Conductive", "High Maintenance"]
    },
    Concrete: {
      desc: "Reinforced Portland Cement. Susceptible to spalling, carbonation, and cracking.",
      specs: ["30-40 Year Lifecycle", "Heavy Logistics", "Medium Maintenance"]
    }
  };

  const getIntegrityLoss = (m: Material, s: Stress) => {
    const table: Record<Material, Record<Stress, number>> = {
      GRP: { Corrosion: 0, UV: 2, Impact: 5 },
      Steel: { Corrosion: 45, UV: 5, Impact: 15 },
      Concrete: { Corrosion: 20, UV: 5, Impact: 40 }
    };
    return table[m][s];
  };

  useEffect(() => {
    if (!isSimulating) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#189A9E';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for(let x = 0; x < canvas.width; x++) {
        const y = (canvas.height/2) + Math.sin((x + frame) * 0.05) * 20 * (integrity / 100);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame += 2;
      if (isSimulating) requestAnimationFrame(draw);
    };
    draw();
  }, [isSimulating, integrity]);

  const runSimulation = () => {
    setIsSimulating(true);
    setIntegrity(100);
    let current = 100;
    const target = 100 - getIntegrityLoss(activeMaterial, activeStress);
    
    const interval = setInterval(() => {
      current -= 1;
      setIntegrity(current);
      if (current <= target) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 40);
  };

  useEffect(() => {
    setIntegrity(100);
  }, [activeMaterial, activeStress]);

  return (
    <section className="py-24 bg-emphz-darker border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-emphz-teal text-xs tracking-widest uppercase mb-4 block">05 / Material Testing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">RESILIENCE LAB</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Verify structural durability under simulated environmental stressors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 bg-emphz-dark border border-white/10 p-8">
          <div className="space-y-8">
            <div>
              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">Material Target</h4>
              <div className="grid gap-2">
                {(['GRP', 'Steel', 'Concrete'] as Material[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveMaterial(m)}
                    className={`p-4 border font-mono text-xs tracking-widest text-left flex justify-between items-center transition-all ${
                      activeMaterial === m ? 'bg-emphz-teal text-white border-emphz-teal' : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {m} UNIT_TEST
                    {activeMaterial === m && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></div>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4">Stress Environment</h4>
              <div className="flex gap-2">
                {(['Corrosion', 'UV', 'Impact'] as Stress[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveStress(s)}
                    className={`flex-1 p-4 border transition-all flex flex-col items-center gap-2 ${
                      activeStress === s ? 'bg-emphz-teal/20 text-emphz-teal border-emphz-teal' : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="text-[9px] font-mono uppercase">{s}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="w-full py-5 bg-emphz-teal text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all hover:brightness-110 disabled:opacity-50"
            >
              <Beaker className="w-4 h-4" />
              {isSimulating ? 'SIM_ACTIVE...' : 'START ASSESSMENT'}
            </button>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex-grow bg-black/40 border border-white/5 p-8 relative overflow-hidden flex flex-col">
               <div className="absolute inset-0 bg-grid-small opacity-10"></div>
               
               <div className="relative z-10 flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1 uppercase tracking-wider">{activeMaterial} System State</h3>
                    <p className="text-slate-500 text-xs max-w-xs">{materials[activeMaterial].desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-mono font-bold text-white">{integrity}%</span>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Structural_Health</span>
                  </div>
               </div>

               <div className="flex-grow flex items-center justify-center relative">
                  <canvas ref={canvasRef} width={400} height={100} className="w-full h-24 opacity-50" />
                  {isSimulating && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Activity className="w-8 h-8 text-emphz-teal animate-pulse" />
                    </div>
                  )}
               </div>

               <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {materials[activeMaterial].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-[9px] font-mono text-slate-400 uppercase">
                       <CheckCircle2 className="w-3 h-3 text-emphz-teal" /> {spec}
                    </div>
                  ))}
               </div>

               {!isSimulating && integrity < 100 && (
                 <div className="absolute inset-0 bg-emphz-darker/95 backdrop-blur-md flex items-center justify-center p-8 animate-in fade-in duration-500 z-30">
                    <div className="text-center max-w-sm">
                       <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 border ${integrity > 80 ? 'border-emphz-teal bg-emphz-teal/20' : 'border-amber-500 bg-amber-500/20'}`}>
                          {integrity > 80 ? <CheckCircle2 className="w-6 h-6 text-emphz-teal" /> : <AlertCircle className="w-6 h-6 text-amber-500" />}
                       </div>
                       <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-widest">Test Complete</h4>
                       <p className="text-slate-400 text-xs mb-6 font-mono leading-relaxed">
                          {activeMaterial} integrity calibrated to {integrity}%. 
                          {activeMaterial === 'GRP' ? ' Zero structural fatigue detected.' : ' Degradation indicates potential field failure.'}
                       </p>
                       <button onClick={() => setIntegrity(100)} className="text-emphz-teal font-mono text-[10px] uppercase border border-emphz-teal/30 px-6 py-2">Reset Sensor</button>
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResilienceLab;
