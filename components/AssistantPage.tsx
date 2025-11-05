import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { GoogleGenAI, Chat } from '@google/genai';
import { SERVICES_DATA } from '../constants';
import { SparklesIcon } from '../constants';

const TypingIndicator: React.FC = () => (
    <div className="flex justify-start mb-4">
        <div className="rounded-2xl px-4 py-3 bg-white text-dark-gray shadow-md">
            <div className="flex items-center justify-center space-x-1.5">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
        </div>
    </div>
);

const PageSpinner: React.FC<{text: string}> = ({ text }) => (
    <div className="flex items-center justify-center text-center p-12" style={{minHeight: 'calc(100vh - 200px)'}}>
        <div>
            <svg className="animate-spin h-10 w-10 text-primary-green mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-4 text-lg font-semibold text-medium-gray">{text}</p>
        </div>
    </div>
);

interface AssistantPageProps {
    initialQuery: string;
}

const AssistantPage: React.FC<AssistantPageProps> = ({ initialQuery }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<Chat | null>(null);

    const initializeChat = async () => {
        const allServicesInfo = SERVICES_DATA.map(s => `Xizmat: ${s.title}\nTavsif: ${s.description}\n`).join('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `You are a helpful assistant for small business owners in Uzbekistan named 'KBU Assistant'. Your goal is to provide comprehensive, clear, and actionable advice. Answer ONLY in Uzbek. Your knowledge base includes general business practices in Uzbekistan (registration, taxes, legal) and specific information about services offered on the KBU HUB platform. Here is a summary of available services: ${allServicesInfo}. When a user asks a question, first check if it relates to one of these services. If it does, mention the relevant service and provide a helpful answer. For general questions, provide accurate information. Be polite, professional, and encouraging.`,
                },
            });
            setMessages([{ id: 1, text: "Assalomu alaykum! Men 'KBU HUB' virtual yordamchisiman. Biznesingizga oid qanday savolingiz bor?", sender: 'bot' }]);
            setIsInitialized(true);
        } catch (error) {
            console.error("Gemini AI initialization failed:", error);
            setMessages([{id: Date.now(), text: "Kechirasiz, sun'iy intellekt bilan bog'lanishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.", sender: 'bot'}]);
            setIsInitialized(true);
        }
    };
    
    useEffect(() => {
        initializeChat();
    }, []);

    const sendMessage = async (messageText: string) => {
        if (messageText.trim() === '' || isLoading) return;

        const newUserMessage: ChatMessage = { id: Date.now(), text: messageText, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        try {
            if (!chatRef.current) {
                throw new Error("Chat session not initialized.");
            }
            const response = await chatRef.current.sendMessage({ message: messageText });
            const botResponse: ChatMessage = { id: Date.now() + 1, text: response.text, sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            setMessages(prev => [...prev, {id: Date.now() + 1, text: "Kechirasiz, javob olishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.", sender: 'bot'}]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isInitialized && initialQuery) {
            sendMessage(initialQuery);
        }
    }, [isInitialized, initialQuery]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendMessage(userInput);
        setUserInput('');
    };
    
    if (!isInitialized) {
        return <PageSpinner text="AI Yordamchi yuklanmoqda..." />;
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16 flex flex-col" style={{minHeight: 'calc(100vh - 200px)'}}>
                <div className="text-center max-w-3xl mx-auto mb-10">
                     <SparklesIcon className="w-16 h-16 text-accent-gold mx-auto mb-4" />
                    <h2 className="text-5xl font-heading font-bold text-dark-gray">
                        AI Yordamchi
                    </h2>
                    <p className="text-xl text-medium-gray mt-4">
                        Biznesingizga oid savollaringiz bormi? Ro'yxatdan o'tish, soliqlar, marketing va boshqa mavzularda yordam beramiz.
                    </p>
                </div>

                <div className="flex-grow w-full max-w-4xl mx-auto bg-light-gray rounded-2xl shadow-xl flex flex-col border border-gray-200/50">
                    <div className="flex-grow overflow-y-auto p-6 space-y-4">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.sender === 'bot' && <div className="w-9 h-9 rounded-full bg-primary-green text-white flex items-center justify-center flex-shrink-0 text-sm font-bold shadow-sm">AI</div>}
                                <div className={`rounded-2xl px-5 py-3 max-w-lg shadow-md ${msg.sender === 'user' ? 'bg-primary-green text-white rounded-br-none' : 'bg-white text-dark-gray rounded-bl-none'}`}>
                                    <p className="text-base leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && <TypingIndicator />}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="mt-auto p-4 border-t border-gray-200 bg-white/50 backdrop-blur-sm rounded-b-2xl">
                        <form onSubmit={handleFormSubmit}>
                            <div className="flex items-center gap-3">
                                <input 
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Savolingizni shu yerga yozing..."
                                    disabled={isLoading}
                                    className="w-full px-6 py-4 bg-white text-dark-gray border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-green transition-all text-base"
                                />
                                <button 
                                    type="submit" 
                                    disabled={isLoading || !userInput.trim()}
                                    className="bg-primary-green text-white rounded-full p-4 shadow-lg hover:bg-dark-green disabled:bg-green-300 disabled:cursor-not-allowed transition-all transform hover:scale-110"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssistantPage;