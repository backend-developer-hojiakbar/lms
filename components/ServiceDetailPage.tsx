import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Service, FAQ, Integration, ChatMessage } from '../types';
import Button from './common/Button';
import { SparklesIcon, ChatBubbleLeftRightIcon, PresentationChartBarIcon, GlobeAltIcon, WrenchScrewdriverIcon, LinkIcon } from '../constants';
import Card from './common/Card';
import { GoogleGenAI, Chat } from '@google/genai';
import SimpleMarkdown from './common/SimpleMarkdown';
import SwotAnalysisTool from './tools/SwotAnalysisTool';
import TaxCalculatorTool from './tools/TaxCalculatorTool';
import LoanCalculatorTool from './tools/LoanCalculatorTool';
import SalaryCalculatorTool from './tools/SalaryCalculatorTool';
import InvoiceGeneratorTool from './tools/InvoiceGeneratorTool';
import AiBusinessPlanAssistantTool from './tools/AiBusinessPlanAssistantTool';
import AiMarketingIdeasTool from './tools/AiMarketingIdeasTool';
import OnlineRegistrationGuide from './tools/OnlineRegistrationGuide';
import CounterpartyCheckTool from './tools/CounterpartyCheckTool';
import DocumentConstructorTool from './tools/DocumentConstructorTool';
import FinancialSupportFinder from './tools/FinancialSupportFinder';
import LegalAdvicePlatform from './tools/LegalAdvicePlatform';


type TabId = 'use-service' | 'info' | 'consultation' | 'integrations' | 'faq';

interface ServiceTab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const InformationCircleIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg> );

const TypingIndicator: React.FC = () => (
    <div className="flex justify-start mb-3">
        <div className="rounded-lg px-4 py-2 max-w-xs bg-white text-dark-gray shadow-sm">
            <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
        </div>
    </div>
);

const AIConsultant: React.FC<{ service: Service }> = ({ service }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 1, text: `Assalomu alaykum! Men "${service.title}" xizmati bo'yicha sizning shaxsiy AI yordamchingizman. Shu mavzuga oid savollaringiz bo'lsa, marhamat.`, sender: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<Chat | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `You are a specialized AI assistant for the KBU HUB platform in Uzbekistan. You must answer ONLY in Uzbek. Your current area of expertise is strictly limited to "${service.title}". Your main information source is the following text: "${service.detailedInfoContent}". Do not answer questions outside of this topic. If asked about something else, politely state that you can only help with "${service.title}" and guide the user back to the topic.`,
                },
            });
        } catch (error) {
            console.error("Gemini AI initialization failed:", error);
            setMessages(prev => [...prev, {id: Date.now(), text: "Kechirasiz, sun'iy intellekt bilan bog'lanishda xatolik yuz berdi.", sender: 'bot'}]);
        }
    }, [service]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userInput.trim() === '' || isLoading) return;

        const newUserMessage: ChatMessage = { id: Date.now(), text: userInput, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            if (!chatRef.current) { throw new Error("Chat session not initialized."); }
            const response = await chatRef.current.sendMessage({ message: userInput });
            const botResponse: ChatMessage = { id: Date.now() + 1, text: response.text, sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            setMessages(prev => [...prev, {id: Date.now() + 1, text: "Kechirasiz, javob olishda xatolik yuz berdi.", sender: 'bot'}]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Card className="p-0 flex flex-col h-[42rem] bg-light-gray overflow-hidden">
            <header className="bg-white p-5 rounded-t-2xl border-b border-gray-200 flex-shrink-0">
                <h3 className="font-heading font-bold text-xl text-dark-gray">AI Maslahatchi</h3>
                <p className="text-base text-medium-gray">"{service.title}" mavzusida savol bering</p>
            </header>
            <div className="flex-grow p-4 overflow-y-auto">
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
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-xl flex-shrink-0">
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
        </Card>
    );
};

const EmptyContent: React.FC<{ message: string }> = ({ message }) => (
    <Card className="p-8 text-center text-medium-gray h-full flex items-center justify-center min-h-[300px]">
        <p className="max-w-md">{message}</p>
    </Card>
);


// --- MAIN PAGE COMPONENT ---

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
}


const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack }) => {
    
    const [activeTab, setActiveTab] = useState<TabId>('use-service');

    useEffect(() => {
        setActiveTab('use-service');
    }, [service]);

    const TABS: ServiceTab[] = [
        { id: 'use-service', label: 'Xizmatdan foydalanish', icon: WrenchScrewdriverIcon },
        { id: 'info', label: 'Batafsil ma\'lumot', icon: InformationCircleIcon },
        { id: 'consultation', label: 'AI Maslahatchi', icon: ChatBubbleLeftRightIcon },
        { id: 'integrations', label: 'Integratsiyalar', icon: LinkIcon },
        { id: 'faq', label: 'Ko\'p beriladigan savollar', icon: PresentationChartBarIcon },
    ];
    
    const renderTool = () => {
        switch (service.toolComponent) {
            case 'OnlineRegistrationGuide': return <OnlineRegistrationGuide />;
            case 'CounterpartyCheckTool': return <CounterpartyCheckTool />;
            case 'DocumentConstructorTool': return <DocumentConstructorTool />;
            case 'FinancialSupportFinder': return <FinancialSupportFinder />;
            case 'LegalAdvicePlatform': return <LegalAdvicePlatform />;
            case 'SwotAnalysisTool': return <SwotAnalysisTool />;
            case 'TaxCalculatorTool': return <TaxCalculatorTool />;
            case 'LoanCalculatorTool': return <LoanCalculatorTool />;
            case 'SalaryCalculatorTool': return <SalaryCalculatorTool />;
            case 'InvoiceGeneratorTool': return <InvoiceGeneratorTool />;
            case 'AiBusinessPlanAssistantTool': return <AiBusinessPlanAssistantTool />;
            case 'AiMarketingIdeasTool': return <AiMarketingIdeasTool />;
            default: return (
                 <EmptyContent message="Ushbu xizmat bo'yicha interaktiv vosita mavjud emas. Qo'shimcha ma'lumot uchun 'Batafsil ma'lumot' bo'limiga qarang yoki AI maslahatchidan yordam so'rang." />
            );
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'use-service':
                return renderTool();
            case 'info':
                return service.detailedInfoContent ? <Card className="p-8 md:p-10"><SimpleMarkdown text={service.detailedInfoContent} /></Card> : <EmptyContent message="Ushbu xizmat uchun batafsil ma'lumot hozircha mavjud emas." />;
            case 'consultation':
                return service.consultationAvailable ? <AIConsultant service={service} /> : <EmptyContent message="Ushbu xizmat uchun AI Maslahatchi mavjud emas." />;
            case 'integrations':
                return (service.integrations && service.integrations.length > 0) ? (
                    <Card className="p-8 md:p-10">
                        <h3 className="text-2xl font-heading font-bold text-dark-gray mb-6">Integratsiyalar va Havolalar</h3>
                        <div className="space-y-4">
                            {service.integrations?.map((integration: Integration, index: number) => (
                                <a key={index} href={integration.url} target="_blank" rel="noopener noreferrer" className="block p-5 border rounded-xl hover:bg-light-gray hover:border-primary-green/50 transition-colors group">
                                    <div className="flex items-center gap-5">
                                        <div className="bg-ultra-light-green p-3 rounded-lg">
                                            <integration.icon className="w-9 h-9 text-primary-green" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg text-dark-gray group-hover:text-primary-green">{integration.name}</p>
                                            <p className="text-base text-medium-gray">{integration.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Card>
                ) : <EmptyContent message="Ushbu xizmat uchun integratsiyalar mavjud emas." />;
            case 'faq':
                 return (service.faqs && service.faqs.length > 0) ? (
                    <Card className="p-8 md:p-10">
                        <h3 className="text-2xl font-heading font-bold text-dark-gray mb-6">Ko'p Beriladigan Savollar (FAQ)</h3>
                        <div className="space-y-4">
                            {service.faqs?.map((faq: FAQ, index: number) => (
                                <details key={index} className="p-5 border rounded-xl bg-white group transition-all duration-300 open:bg-primary-green/5 open:shadow-lg" name="faq-accordion">
                                    <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-dark-gray group-open:text-primary-green">
                                        {faq.question}
                                        <svg className="w-6 h-6 transition-transform transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </summary>
                                    <p className="mt-3 pt-4 border-t text-medium-gray leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </Card>
                ) : <EmptyContent message="Ushbu xizmat uchun ko'p beriladigan savollar mavjud emas." />;
            default:
                return null;
        }
    };
    
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <button onClick={onBack} className="flex items-center gap-2 text-medium-gray font-semibold hover:text-dark-gray mb-10 transition-colors text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Barcha xizmatlarga qaytish
                </button>

                <header className="mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 bg-gradient-to-tr from-light-gray to-white rounded-3xl shadow-lg">
                        <div className="bg-white text-primary-green rounded-2xl p-5 shadow-md">
                            <service.icon className="w-16 h-16" />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark-gray">{service.title}</h2>
                            <p className="text-xl text-medium-gray mt-2">{service.description}</p>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <aside className="lg:w-72 flex-shrink-0">
                        <div className="lg:sticky lg:top-28">
                             <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-x-visible gap-3">
                                {TABS.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-shrink-0 flex items-center gap-4 px-5 py-4 font-heading font-semibold rounded-xl text-left w-auto lg:w-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green text-lg ${
                                            activeTab === tab.id
                                            ? 'bg-primary-green text-white shadow-lg'
                                            : 'bg-white text-dark-gray hover:bg-gray-100 hover:text-primary-green'
                                        }`}
                                    >
                                        <tab.icon className="w-6 h-6" />
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 min-w-0">
                       {renderTabContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;