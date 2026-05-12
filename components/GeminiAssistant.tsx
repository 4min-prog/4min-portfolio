
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { Language } from '../translations';

interface GeminiAssistantProps {
  lang: Language;
  t: any;
  isDarkMode: boolean;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ lang, t, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: t.welcome }]);
    }
  }, [lang, t.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-1.5-flash',
        config: {
          systemInstruction: `You are an AI assistant for "4min", the portfolio of Muhammed Emin Elomer, a Computer Programming student based in Gaziantep, Turkey.
          Respond in the language the user is currently using: ${lang === 'tr' ? 'Turkish' : lang === 'ar' ? 'Arabic' : 'English'}.
          
          Owner Details:
          - Email: aminomr224@gmail.com
          - Location: Gaziantep, Turkey
          - Focus: Web development, UI/UX, and game building.
          - GitHub Profile: https://github.com/4min-19
          
          Projects to mention:
          1. Calculations Engine (Hesaplamaa): A precision engineering and financial tool.
          2. Fusion Tiles: Power Merge: A 2048-style puzzle game on itch.io.
          3. Sky Dash Runner: A fast-paced arcade runner game on itch.io.
          
          Always emphasize his dedication to Computer Programming studies and his eagerness for professional growth. Keep responses friendly, supportive, and professional.`,
        },
        history: messages.slice(1).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const aiResponse = result.text || t.error;
      
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      let errorMessage = t.error;
      const errorString = JSON.stringify(error);
      if (errorString.includes('429') || errorString.includes('RESOURCE_EXHAUSTED')) {
        errorMessage = t.quotaError;
      }
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl transition-all hover:bg-indigo-700 active:scale-95 group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageSquare className="w-7 h-7" />
      </button>

      <div className={`fixed bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-10rem)] ${isDarkMode ? 'dark-glass-effect' : 'glass-effect'} rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform border border-gray-200 dark:border-white/10 ${
        isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'
      } flex flex-col`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        
        <div className="p-5 bg-indigo-600 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">4min AI Assistant</p>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 rtl:mr-0 rtl:ml-2 animate-pulse"></span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none rtl:rounded-tr-2xl rtl:rounded-tl-none shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-white/5 rounded-tl-none rtl:rounded-tl-2xl rtl:rounded-tr-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-white/5">
                <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 shrink-0 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/10">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="w-full bg-white dark:bg-white/10 text-gray-800 dark:text-white px-5 py-3 pr-12 rtl:pr-5 rtl:pl-12 rounded-xl border border-gray-200 dark:border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`absolute ${lang === 'ar' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiAssistant;
