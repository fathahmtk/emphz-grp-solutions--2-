
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, Bot, Terminal, User, ShieldCheck, Activity } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const AIConsultant: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "System initialized. Lead Engineering Consultant active. I have access to EMPHZ structural databases, fire-rating certifications, and site deployment protocols. State your technical query.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // handleSendMessage implements the Google GenAI SDK call
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userInput = input.trim();
    const userMessage: Message = { role: 'user', text: userInput, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Initialize ai client right before the call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Convert internal messages to Gemini history format, skipping initial model greeting
      const chatHistory = messages.slice(1).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      // Create a chat session with gemini-3-pro-preview for complex technical reasoning
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        history: chatHistory,
        config: {
          systemInstruction: `You are the Lead Technical Consultant for EMPHZ Modular Commercial Ecosystems. 
          Context: EMPHZ manufactures high-integrity GRP (Glass Reinforced Plastic) composite structures.
          Your Tone: Strictly professional, efficient, industrial, and factual.
          Key Data points to highlight:
          - GRP Lifecycle: 50+ Years.
          - Maintenance: Zero (vs Steel/Concrete).
          - Fire Rating: BS 476 Part 7 Class 1 (Surface spread of flame).
          - IP Ratings: Certified to IP65, IP66, and IP67.
          - Dielectric: 18kV/mm (Non-conductive).
          If the user asks for quotes, direct them to use the REQUISITION system on the site. 
          Formatting: Use terminal-style bullet points and technical shorthand where appropriate.`,
          temperature: 0.2,
        },
      });

      // Send message and extract response text
      const response = await chat.sendMessage({ message: userInput });
      const text = response.text;

      if (text) {
        const modelMessage: Message = {
          role: 'model',
          text: text,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, modelMessage]);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Signal interference detected. System restricted. Please re-transmit your technical query via the main contact terminal.", 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[500px] z-[200] bg-emphz-blue border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
      {/* Header */}
      <div className="p-6 bg-emphz-blue-mid border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-emphz-silver/10 flex items-center justify-center border border-emphz-silver/30">
            <Bot className="w-7 h-7 text-emphz-silver" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Engineering_Desk</h3>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emphz-silver animate-pulse"></div>
              <span className="text-[10px] font-mono text-emphz-silver/80 uppercase">Consultant_Node_Active</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 text-neutral-500 hover:text-white transition-all hover:rotate-90">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Terminal View */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-8 bg-black/20 custom-scrollbar relative">
        <div className="absolute inset-0 bg-grid-small opacity-5 pointer-events-none"></div>
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[90%] flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center border ${m.role === 'user' ? 'bg-white/5 border-white/10' : 'bg-emphz-silver/10 border-emphz-silver/30'}`}>
                {m.role === 'user' ? <User className="w-4 h-4 text-neutral-400" /> : <Terminal className="w-4 h-4 text-emphz-silver" />}
              </div>
              <div className={`p-5 text-xs leading-relaxed font-mono ${m.role === 'user' ? 'bg-white/[0.03] text-neutral-300 border border-white/5' : 'bg-emphz-blue-mid text-neutral-100 border border-emphz-silver/10 shadow-lg'}`}>
                {m.text.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : ''}>
                    {line.startsWith('-') ? <span className="text-emphz-silver mr-2">■</span> : ''}
                    {line}
                  </p>
                ))}
                <span className="block mt-4 text-[8px] text-neutral-600 opacity-50 uppercase tracking-widest">{m.timestamp.toLocaleTimeString()} // LOG_ID_{idx.toString().padStart(3, '0')}</span>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-emphz-blue-mid border border-emphz-silver/20 p-4 flex gap-4 items-center animate-pulse">
               <div className="flex gap-1.5">
                 <div className="w-1.5 h-1.5 bg-emphz-silver animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-emphz-silver animate-bounce [animation-delay:0.2s]"></div>
                 <div className="w-1.5 h-1.5 bg-emphz-silver animate-bounce [animation-delay:0.4s]"></div>
               </div>
               <span className="text-[10px] font-mono text-emphz-silver uppercase tracking-widest">Accessing_Data_Vault...</span>
             </div>
          </div>
        )}
      </div>

      {/* Control Panel */}
      <div className="p-6 bg-emphz-blue-mid border-t border-white/10">
        <div className="relative group">
          <div className="absolute -left-4 top-1/2 -tranneutral-y-1/2 w-1 h-8 bg-emphz-silver scale-0 group-focus-within:scale-100 transition-transform"></div>
          <input 
            type="text" 
            placeholder="Transmit technical inquiry..." 
            className="w-full bg-emphz-blue border border-white/10 p-5 pr-14 text-sm text-white font-mono placeholder:text-neutral-700 focus:outline-none focus:border-emphz-silver/50 transition-all shadow-inner"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="absolute right-4 top-1/2 -tranneutral-y-1/2 p-2 text-emphz-silver hover:text-white disabled:opacity-20 transition-all hover:scale-110 active:scale-95"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-5 flex gap-6 text-[9px] font-mono uppercase text-neutral-600 justify-center tracking-[0.2em]">
          <button onClick={() => setInput("Explain BS 476 Class 1 rating.")} className="hover:text-emphz-silver transition-colors">FIRE_STRESS</button>
          <div className="w-px h-2 bg-white/5 self-center"></div>
          <button onClick={() => setInput("How does GRP weight compare to steel?")} className="hover:text-emphz-silver transition-colors">WEIGHT_DATA</button>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
