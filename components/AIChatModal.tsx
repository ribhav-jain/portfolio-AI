import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Bot, MessageSquare } from "lucide-react";
import {
  streamMessageToClaude,
  MODEL_LABEL,
  isAssistantConfigured,
} from "../services/anthropicService";
import { answerLocally } from "../services/localAssistant";
import { ChatMessage } from "../types";
import { motion, AnimatePresence } from "framer-motion";

// Resolved at build time: true when an ANTHROPIC_API_KEY is present.
const LIVE = isAssistantConfigured();

/** Reveal text word-by-word for a "typing" feel (used by the offline responder). */
const typeOut = (text: string, onUpdate: (partial: string) => void) =>
  new Promise<void>((resolve) => {
    const words = text.split(" ");
    let i = 0;
    const tick = () => {
      i += 1;
      onUpdate(words.slice(0, i).join(" "));
      if (i >= words.length) return resolve();
      window.setTimeout(tick, 24);
    };
    tick();
  });

const SUGGESTIONS = [
  "What's your experience with Agentic AI?",
  "Tell me about your security work.",
  "What's your data science background?",
  "How do you approach scaling systems?",
];

const GREETING: ChatMessage = {
  role: "model",
  content:
    "Hi! I'm Ribhav's portfolio assistant. Ask me about his experience, AI & security work, projects, or how to get in touch.",
  timestamp: Date.now(),
};

const AIChatModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    const userMsg: ChatMessage = { role: "user", content: text, timestamp: Date.now() };
    const placeholder: ChatMessage = { role: "model", content: "", timestamp: Date.now() };

    setMessages((prev) => [...prev, userMsg, placeholder]);
    setInput("");
    setIsLoading(true);

    const updateLast = (content: string) =>
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { ...next[next.length - 1], content };
        return next;
      });

    if (LIVE) {
      let acc = "";
      const finalText = await streamMessageToClaude(history, text, (chunk) => {
        acc += chunk;
        updateLast(acc);
      });
      updateLast(finalText);
    } else {
      // Offline mode: answer from the local knowledge base, revealed word-by-word.
      const answer = answerLocally(text);
      await new Promise((r) => window.setTimeout(r, 300));
      await typeOut(answer, updateLast);
    }
    setIsLoading(false);
  };

  const lastIsEmpty =
    messages.length > 0 &&
    messages[messages.length - 1].role === "model" &&
    messages[messages.length - 1].content === "";

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            className="glass-nav fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full py-3.5 pl-4 pr-5 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            <span className="relative">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </span>
            <span className="font-semibold text-ink">Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:justify-end sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto absolute inset-0 bg-black/60 backdrop-blur-sm sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="glass pointer-events-auto flex h-[85vh] w-full flex-col overflow-hidden rounded-t-3xl border-white/10 shadow-2xl sm:h-[640px] sm:w-[400px] sm:rounded-3xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-base/70 px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                    <Bot className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Portfolio Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        {LIVE ? MODEL_LABEL : "Quick answers"}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-ink"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="relative flex-1 space-y-5 overflow-y-auto bg-base/40 p-5">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

                {messages.map((msg, idx) => {
                  const isUser = msg.role === "user";
                  const showDots = idx === messages.length - 1 && lastIsEmpty && isLoading;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`relative z-10 flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl p-3.5 text-sm leading-relaxed ${
                          isUser
                            ? "rounded-br-sm bg-accent text-white shadow-[0_4px_20px_rgb(var(--accent)/0.3)]"
                            : "rounded-bl-sm border border-white/5 bg-surface text-ink"
                        }`}
                      >
                        {showDots ? <TypingDots /> : msg.content}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Suggestions */}
                {messages.length < 2 && !isLoading && (
                  <div className="relative z-10 mt-4 grid gap-2">
                    <p className="kicker mb-1 ml-1 text-faint">Suggested prompts</p>
                    {SUGGESTIONS.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(s)}
                        className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 text-left text-xs text-muted transition-colors hover:bg-white/10 hover:text-ink"
                      >
                        <MessageSquare className="h-3.5 w-3.5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={endRef} />
              </div>

              {/* Input */}
              <div className="relative z-20 border-t border-white/5 bg-base/70 p-4">
                <div className="relative flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about my work…"
                    className="w-full rounded-xl border border-white/10 bg-surface px-4 py-3.5 pr-12 text-sm text-ink transition-all placeholder:text-faint focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-2 rounded-lg bg-accent p-2 text-white transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
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

const TypingDots: React.FC = () => (
  <span className="flex items-center gap-1 py-0.5">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-muted"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </span>
);

export default AIChatModal;
