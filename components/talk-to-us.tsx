'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.6898 22.7595C30.5954 22.7595 29.7046 21.8687 29.7046 20.7743C29.7046 19.6799 30.5954 18.7871 31.6898 18.7871C32.7842 18.7871 33.677 19.6799 33.677 20.7743C33.677 21.8687 32.7842 22.7595 31.6898 22.7595ZM23.9983 22.7595C22.9039 22.7595 22.013 21.8687 22.013 20.7743C22.013 19.6799 22.9039 18.7871 23.9983 18.7871C25.0946 18.7871 25.9855 19.6799 25.9855 20.7743C25.9855 21.8687 25.0946 22.7595 23.9983 22.7595ZM16.3068 22.7595C15.2124 22.7595 14.3215 21.8687 14.3215 20.7743C14.3215 19.6799 15.2124 18.7871 16.3068 18.7871C17.4031 18.7871 18.294 19.6799 18.294 20.7743C18.294 21.8687 17.4031 22.7595 16.3068 22.7595ZM33.7193 6.04785H14.285C9.84983 6.04785 6.24023 9.65553 6.24023 14.0907V27.3695C6.24023 31.8027 9.84983 35.4123 14.285 35.4123H16.3356C17.3014 35.4123 18.246 35.8021 18.9238 36.4837L21.654 39.2139C22.2818 39.8399 23.1151 40.1874 24.0022 40.1874C24.8873 40.1855 25.7225 39.8399 26.3465 39.2139L29.0767 36.4856C29.7679 35.7944 30.6895 35.4123 31.6668 35.4123H33.7193C38.1526 35.4123 41.7602 31.8027 41.7602 27.3695V14.0907C41.7602 9.65553 38.1526 6.04785 33.7193 6.04785Z"
      fill="currentColor"
    />
  </svg>
);

interface Message {
  id: string;
  sender: 'shivam' | 'user';
  text: string;
}

export function TalkToUs() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'shivam',
      text: "Hey — Shivam here 👋 Just checking in. Anything missing in Rithm UI that you'd like to see?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hideOnRoutes = ['/sign-in', '/sign-up', '/create-user', '/profile'];
  const hidden =
    pathname === '/charts' ||
    hideOnRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const replyMsg: Message = {
        id: `shivam-${Date.now()}`,
        sender: 'shivam',
        text: `Thanks for checking out Rithm UI! I've noted that down. Feel free to copy any component or install via our MCP server.`,
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 900);
  };

  if (hidden) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-16 right-4 z-50 w-[360px] sm:w-[380px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-card overflow-hidden flex flex-col font-inter"
            style={{ height: '520px' }}
          >
            {/* Header with blue background and pattern */}
            <div className="relative bg-[#1877F2] p-6 text-center text-white shrink-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '16px 16px',
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Messages pill tab */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-xs mb-3">
                  <MessageSquare className="size-3" />
                  <span>Messages</span>
                </div>

                {/* Avatar with verified badge */}
                <div className="relative flex items-center justify-center">
                  <div className="size-14 rounded-full bg-white text-neutral-900 font-bold text-lg flex items-center justify-center shadow-md border-2 border-white ring-2 ring-white/30 overflow-hidden">
                    <svg viewBox="0 0 36 36" fill="none" className="size-full">
                      <rect width="36" height="36" fill="#0D1117" />
                      <circle cx="18" cy="14" r="6" fill="#F0F6FC" />
                      <path d="M8 30C8 24 12 21 18 21C24 21 28 24 28 30" fill="#F0F6FC" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 bg-black text-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="size-4 fill-white text-black" />
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mt-3">Questions? Chat with us.</h3>
                <div className="flex items-center gap-1.5 text-xs text-white/85 mt-1">
                  <Clock className="size-3" />
                  <span>Last active 1 hour ago.</span>
                </div>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-background">
              <div className="text-center my-1">
                <span className="text-[11px] font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full">
                  Today
                </span>
              </div>

              {messages.map((m) => {
                const isShivam = m.sender === 'shivam';
                return (
                  <div
                    key={m.id}
                    className={`flex items-start gap-2.5 ${isShivam ? 'justify-start' : 'justify-end'}`}
                  >
                    {isShivam && (
                      <div className="size-7 rounded-full bg-neutral-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs overflow-hidden">
                        <svg viewBox="0 0 36 36" fill="none" className="size-full">
                          <rect width="36" height="36" fill="#0D1117" />
                          <circle cx="18" cy="14" r="6" fill="#F0F6FC" />
                          <path d="M8 30C8 24 12 21 18 21C24 21 28 24 28 30" fill="#F0F6FC" />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] text-[13.5px] leading-relaxed p-3 rounded-2xl ${
                        isShivam
                          ? 'bg-neutral-100 dark:bg-neutral-900 text-foreground rounded-tl-xs border border-border/40'
                          : 'bg-[#1877F2] text-white rounded-tr-xs shadow-xs'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input Footer */}
            <div className="p-3 border-t border-border bg-card">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Compose your message..."
                  className="w-full h-10 pl-4 pr-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#1877F2] transition"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="absolute right-1.5 size-7 rounded-full bg-[#1877F2] disabled:opacity-30 text-white flex items-center justify-center transition hover:bg-[#166fe5]"
                >
                  <Send className="size-3.5" />
                </button>
              </form>

              <div className="text-center text-[11px] text-muted-foreground mt-2 font-medium">
                Powered by <span className="font-semibold text-foreground">Rithm UI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher button (matches original) */}
      <Button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-4 right-4 z-50 gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3.5 py-2.5 h-[40px] font-inter text-sm font-medium tracking-wide shadow-md [&_svg]:size-5 cursor-pointer"
      >
        <ChatIcon aria-hidden className="size-5 shrink-0" />
        {open ? 'Close chat' : 'Talk to us'}
      </Button>
    </>
  );
}
