import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2, Bot, MessageSquare } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const SUGGESTIONS = [
  "What is your experience with Agentic AI?",
  "Tell me about your Security projects.",
  "What skills do you have in Data Science?",
  "How do you handle scaling?"
];

const AIChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I am an AI trained on Ribhav's professional background. Ask me about his skills in AI, Backend systems, or his recent projects.", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: text, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const responseText = await sendMessageToGemini(history, userMsg.content);

    const botMsg: ChatMessage = { role: 'model', content: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-white text-primary p-4 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3 group"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
            </div>
            <span className="font-bold pr-1">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-8 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              className="pointer-events-auto w-full sm:w-[400px] h-[85vh] sm:h-[650px] bg-[#020617] border border-white/10 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/5 bg-[#020617] flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Bot className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Portfolio Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Gemini Flash Active</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#020617] relative">
                <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />

                {messages.map((msg, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                        ? 'bg-accent text-white rounded-br-none shadow-[0_4px_20px_rgba(99,102,241,0.3)]'
                        : 'bg-secondary text-slate-200 rounded-bl-none border border-white/5'
                      }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {/* Suggestions - Only show if history is short */}
                {messages.length < 3 && !isLoading && (
                  <div className="grid grid-cols-1 gap-2 mt-4 relative z-10">
                    <p className="text-xs text-slate-500 font-mono mb-1 ml-1 uppercase tracking-wider">Suggested Prompts</p>
                    {SUGGESTIONS.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(s)}
                        className="text-left p-3 text-xs bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-slate-300 transition-colors flex items-center gap-2 group"
                      >
                        <MessageSquare className="w-3 h-3 text-accent group-hover:scale-110 transition-transform" />
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start relative z-10">
                    <div className="bg-secondary p-4 rounded-2xl rounded-bl-none border border-white/5 flex items-center gap-3">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" />
                      <span className="text-xs text-slate-400 font-medium">Processing...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-[#020617] border-t border-white/5 relative z-20">
                <div className="flex gap-2 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about my projects..."
                    className="w-full bg-secondary border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-slate-600"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-2 p-2 bg-accent hover:bg-accentHover rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatModal;