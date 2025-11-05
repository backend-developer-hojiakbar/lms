import React, { useState } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

// Helper Icon Components
const PlusIcon: React.FC<{className?: string}> = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>);
const XMarkIcon: React.FC<{className?: string}> = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

interface SwotSectionProps {
    title: string;
    description: string;
    questions: string[];
    items: string[];
    onAddItem: (item: string) => void;
    onRemoveItem: (index: number) => void;
    color: string;
}

const SwotSection: React.FC<SwotSectionProps> = ({ title, description, questions, items, onAddItem, onRemoveItem, color }) => {
    const [newItem, setNewItem] = useState('');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (newItem.trim()) {
            onAddItem(newItem.trim());
            setNewItem('');
        }
    };

    return (
        <Card className={`p-6 border-t-4 ${color}`}>
            <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
            <p className="text-sm text-medium-gray mb-4">{description}</p>
            
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm text-medium-gray">
                <p className="font-semibold mb-2">O'zingizga savol bering:</p>
                <ul className="list-disc list-inside space-y-1">
                    {questions.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
            </div>

            <form onSubmit={handleAdd} className="flex gap-2 mb-4">
                <input 
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="flex-grow w-full px-3 py-2 bg-white text-dark-gray border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Yangi band qo'shish..."
                />
                <Button type="submit" variant="primary" size="md" className="px-3" aria-label="Add item">
                    <PlusIcon className="w-5 h-5" />
                </Button>
            </form>

            <div className="space-y-2 min-h-[100px]">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white p-2 rounded-md shadow-sm animate-fade-in-up">
                        <span className="text-dark-gray flex-grow">{item}</span>
                        <button onClick={() => onRemoveItem(index)} className="text-gray-400 hover:text-error-red p-1 rounded-full">
                            <XMarkIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </Card>
    );
};


const SwotAnalysisTool: React.FC = () => {
    const [strengths, setStrengths] = useState<string[]>([]);
    const [weaknesses, setWeaknesses] = useState<string[]>([]);
    const [opportunities, setOpportunities] = useState<string[]>([]);
    const [threats, setThreats] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    
    const sectionsData = {
        strengths: { title: "Kuchli tomonlar (S)", description: "Biznesingizning ichki, ijobiy jihatlari. Ular sizning nazoratingiz ostida.", questions: ["Raqobatchilardan nimada ustunsiz?", "Qanday noyob resurslaringiz bor (jamoa, texnologiya)?", "Mijozlar sizning qaysi jihatlaringizni yuqori baholaydi?"], color: "border-green-500", items: strengths, onAddItem: (item: string) => setStrengths(p => [...p, item]), onRemoveItem: (index: number) => setStrengths(p => p.filter((_, i) => i !== index)) },
        weaknesses: { title: "Zaif tomonlar (W)", description: "Biznesingizning ichki, salbiy jihatlari. Ular sizning nazoratingiz ostida.", questions: ["Nimani yaxshilashingiz kerak?", "Qaysi sohalarda resurslaringiz yetishmaydi?", "Raqobatchilar nimalarni sizdan yaxshiroq bajaradi?"], color: "border-amber-500", items: weaknesses, onAddItem: (item: string) => setWeaknesses(p => [...p, item]), onRemoveItem: (index: number) => setWeaknesses(p => p.filter((_, i) => i !== index)) },
        opportunities: { title: "Imkoniyatlar (O)", description: "Biznesingiz uchun tashqi, ijobiy omillar. Ulardan foydalanish mumkin.", questions: ["Bozorda qanday foydali imkoniyatlar mavjud?", "Qanday ijtimoiy yoki iqtisodiy trendlardan foydalana olasiz?", "Qaysi bozorlarga hali kirib bormagansiz?"], color: "border-blue-500", items: opportunities, onAddItem: (item: string) => setOpportunities(p => [...p, item]), onRemoveItem: (index: number) => setOpportunities(p => p.filter((_, i) => i !== index)) },
        threats: { title: "Tahdidlar (T)", description: "Biznesingiz uchun tashqi, salbiy omillar. Ularni nazorat qilish qiyin.", questions: ["Biznesingizga nima xavf solishi mumkin?", "Texnologiyadagi o'zgarishlar salbiy ta'sir ko'rsatishi mumkinmi?", "Zaif tomonlaringiz qanday tahdidlarga olib kelishi mumkin?"], color: "border-red-500", items: threats, onAddItem: (item: string) => setThreats(p => [...p, item]), onRemoveItem: (index: number) => setThreats(p => p.filter((_, i) => i !== index)) },
    };

    const canShowResult = strengths.length > 0 && weaknesses.length > 0 && opportunities.length > 0 && threats.length > 0;

    if (showResult) {
        return (
            <div className="p-6 bg-light-gray rounded-xl animate-fade-in">
                <h3 className="text-3xl font-heading font-bold text-dark-gray mb-6 text-center">SWOT Tahlili Natijalari</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.values(sectionsData).map(section => (
                        <Card key={section.title} className={`p-4 border-t-4 ${section.color}`}>
                            <h4 className="font-heading font-bold text-xl mb-2">{section.title}</h4>
                             <ul className="list-disc list-inside space-y-1 text-medium-gray">
                                {section.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="secondary" onClick={() => setShowResult(false)}>Tahrirlashga qaytish</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-light-gray rounded-xl">
            <div className="text-center mb-8">
                 <h3 className="text-3xl font-heading font-bold text-dark-gray">Interaktiv SWOT-tahlil Konstruktori</h3>
                 <p className="text-medium-gray mt-2 max-w-2xl mx-auto">Biznesingizni strategik rejalashtirish uchun uning kuchli, zaif tomonlari, imkoniyatlari va tahdidlarini aniqlang.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SwotSection {...sectionsData.strengths} />
                <SwotSection {...sectionsData.weaknesses} />
                <SwotSection {...sectionsData.opportunities} />
                <SwotSection {...sectionsData.threats} />
            </div>
            {canShowResult && (
                 <div className="text-center mt-8">
                    <Button variant="primary" size="lg" onClick={() => setShowResult(true)}>Natijalarni ko'rish</Button>
                </div>
            )}
        </div>
    );
};

export default SwotAnalysisTool;
