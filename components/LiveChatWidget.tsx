import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { createSupportChat } from '../services/geminiService';

interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
}

const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'agent', text: "Namaste! I'm Priya, your Emphz support specialist. Looking for a specific GRP solution today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Ref to hold the chat session instance
  const chatSession = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      // Initialize chat session if not already done
      if (!chatSession.current) {
        chatSession.current = createSupportChat();
      }
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const userMessage: ChatMessage = { sender: 'user', text: userText };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      if (chatSession.current) {
        const result = await chatSession.current.sendMessage({ message: userText });
        const responseText = result.text || "I'm sorry, I didn't catch that.";
        
        setMessages(prev => [...prev, { sender: 'agent', text: responseText }]);
      } else {
        // Fallback
        await new Promise(resolve => setTimeout(resolve, 1500));
        setMessages(prev => [...prev, { 
          sender: 'agent', 
          text: "I'm currently in offline mode. Please visit our Technical Center for detailed specs or use the RFQ form for quotes." 
        }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        sender: 'agent', 
        text: "I'm having trouble connecting to the server. Please try again in a moment." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-emphz-teal text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group animate-fade-up ring-4 ring-white/10"
          aria-label="Open live chat"
        >
          <MessageSquare size={28} className="md:w-8 md:h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-xs md:max-w-sm h-[60vh] md:h-[70vh] max-h-[600px] flex flex-col bg-[#0B1120] rounded-2xl shadow-2xl border border-white/10 animate-slide-up-fade overflow-hidden font-sans"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-heading"
        >
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 bg-white/5 backdrop-blur-md">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emphz-teal to-blue-600 flex items-center justify-center shadow-lg">
                   <User className="text-white" size={20}/>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B1120]"></span>
              </div>
              <div className="ml-3">
                <h2 id="chat-heading" className="font-bold text-white font-display">Priya S.</h2>
                <p className="text-[10px] text-emphz-teal uppercase tracking-wider font-bold">GRP Specialist</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0B1120] to-[#050A14]" role="log" aria-live="polite">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'agent' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emphz-teal to-blue-600 flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">
                    P
                  </div>
                )}
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-emphz-teal text-white rounded-br-none'
                    : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-end gap-2 justify-start animate-fade-in">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emphz-teal to-blue-600 flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold">
                    P
                 </div>
                 <div className="p-3 bg-white/10 rounded-2xl rounded-bl-none border border-white/5">
                    <div className="flex items-center gap-1.5 h-4">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 md:p-4 border-t border-white/10 flex-shrink-0 bg-white/5 backdrop-blur-md">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about specs, prices, or delivery..."
                className="w-full bg-black/40 border border-white/10 rounded-full pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-emphz-teal focus:border-emphz-teal outline-none text-sm font-sans transition-all"
                aria-label="Your message"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -tranneutral-y-1/2 w-9 h-9 bg-emphz-teal text-white rounded-full flex items-center justify-center hover:bg-[#00D4DE] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={16} className={inputValue.trim() ? "tranneutral-x-0.5" : ""} />
              </button>
            </div>
            <div className="text-[9px] text-gray-600 text-center mt-2 font-mono">
              Secure Support Channel
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;