import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { GoogleGenAI, Chat } from '@google/genai';

const TypingIndicator = () => (
  <div className="flex justify-start mb-3">
    <div className="rounded-xl px-4 py-3 max-w-xs bg-white text-dark-gray shadow-md">
        <div className="flex items-center justify-center space-x-1.5">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
    </div>
  </div>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Assalomu alaykum! Men 'KBU HUB' virtual yordamchisiman. O'zbekistondagi kichik biznesga oid savollaringizga javob beraman.", sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: "You are a helpful assistant for small business owners in Uzbekistan. Your name is KBU Assistant. Answer concisely and clearly in Uzbek. Focus on topics like business registration, taxes, legal requirements, and government support for businesses in Uzbekistan.",
                },
            });
        } catch (error) {
            console.error("Gemini AI initialization failed:", error);
            setMessages(prev => [...prev, {id: Date.now(), text: "Kechirasiz, sun'iy intellekt bilan bog'lanishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.", sender: 'bot'}]);
        }
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim() === '' || isLoading) return;

    const newUserMessage: ChatMessage = { id: Date.now(), text: userInput, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
        if (!chatRef.current) {
            throw new Error("Chat session not initialized.");
        }
        const response = await chatRef.current.sendMessage({ message: userInput });
        const botResponseText = response.text;
        
        const botResponse: ChatMessage = { 
            id: Date.now() + 1, 
            text: botResponseText, 
            sender: 'bot' 
        };
        setMessages(prev => [...prev, botResponse]);
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        const errorResponse: ChatMessage = {
            id: Date.now() + 1,
            text: "Kechirasiz, javob olishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
            sender: 'bot'
        };
        setMessages(prev => [...prev, errorResponse]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-primary-green text-white rounded-full p-4 shadow-2xl hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary-green/50 transition-transform transform hover:scale-110"
        aria-label="Open chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[34rem] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out animate-fade-in-up border border-gray-200/50">
          <header className="bg-gradient-to-r from-primary-green to-dark-green text-white p-4 rounded-t-2xl flex justify-between items-center shadow-lg">
            <h3 className="font-heading font-bold text-lg">KBU Yordamchi</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 text-2xl leading-none">&times;</button>
          </header>
          
          <div className="flex-grow p-4 overflow-y-auto bg-light-gray">
            {messages.map(msg => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                 {msg.sender === 'bot' && <div className="w-7 h-7 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold flex-shrink-0">AI</div>}
                <div className={`rounded-xl px-4 py-3 max-w-xs shadow-md ${msg.sender === 'user' ? 'bg-primary-green text-white rounded-br-none' : 'bg-white text-dark-gray rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Savolingizni yozing..."
                disabled={isLoading}
                className="w-full px-4 py-3 bg-light-gray text-dark-gray border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-green placeholder-gray-500 disabled:bg-gray-100"
              />
              <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-primary-green text-white p-3 rounded-full hover:bg-dark-green disabled:bg-green-300 transition-colors shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;