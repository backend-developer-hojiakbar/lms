import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Button from '../common/Button';
import Card from '../common/Card';
import SimpleMarkdown from '../common/SimpleMarkdown';

const LoadingSpinner: React.FC<{ text?: string }> = ({ text = "Biznes-reja yaratilmoqda..." }) => (
    <div className="text-center p-8 flex flex-col items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-primary-green mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-medium-gray font-semibold">{text}</p>
    </div>
);

const Alert: React.FC<{ message: string; type: 'error' | 'info' }> = ({ message, type }) => {
    const baseClasses = 'p-4 rounded-md text-sm';
    const typeClasses = {
        error: 'bg-error-red/10 text-error-red',
        info: 'bg-blue-500/10 text-blue-700',
    };
    return <div className={`${baseClasses} ${typeClasses[type]}`}>{message}</div>;
};

const AiBusinessPlanAssistantTool: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        idea: '',
        products: '',
        audience: '',
    });
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const isFormValid = formData.idea.trim() !== '' && formData.products.trim() !== '' && formData.audience.trim() !== '';

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            setError("Iltimos, biznes g'oyasi, mahsulotlar va auditoriya maydonlarini to'ldiring.");
            return;
        }
        
        setIsLoading(true);
        setError('');
        setResult('');

        const prompt = `
            O'zbekistondagi yangi biznes uchun professional va batafsil biznes-reja tuzib ber. Biznes-reja quyidagi ma'lumotlarga asoslansin:
            - Firma nomi: "${formData.name || 'Nomsiz'}"
            - Biznes g'oyasi: "${formData.idea}"
            - Asosiy mahsulotlar yoki xizmatlar: "${formData.products}"
            - Maqsadli auditoriya: "${formData.audience}"

            Biznes-reja quyidagi bo'limlarni o'z ichiga olsin va har bir bo'limni o'zbek tilida, professional va tushunarli qilib yozib ber:
            
            ## 1. Rezyume (Xulosa)
            Biznesning qisqacha tavsifi, maqsadlari va muvaffaqiyat omillari.

            ## 2. Kompaniya Tavsifi
            Biznesning missiyasi, vizioni va tashkiliy-huquqiy shakli haqida.

            ## 3. Bozor Tahlili
            O'zbekiston bozoridagi umumiy holat, sohadagi trendlar, maqsadli auditoriyaning hajmi va ehtiyojlari.

            ## 4. Marketing va Sotuv Strategiyasi
            - Mahsulotni bozorda qanday tanitish (Brending).
            - Narx siyosati.
            - Reklama va targ'ibot kanallari (onlayn va oflayn).
            - Sotuv jarayoni.

            ## 5. Moliyaviy Prognozlar (Taxminiy)
            - Boshlang'ich investitsiyalar (taxminiy).
            - Oylik operatsion xarajatlar (taxminiy).
            - Kutilayotgan daromad va rentabellikka chiqish muddati (taxminiy).

            Har bir bo'limda amaliy va O'zbekiston sharoitiga mos maslahatlar ber.
        `;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            setResult(response.text);
        } catch (e) {
            console.error(e);
            setError("Sun'iy intellekt bilan bog'lanishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">AI Biznes-reja yordamchisi</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">G'oyangiz haqidagi asosiy ma'lumotlarni kiriting va sun'iy intellekt siz uchun professional biznes-reja tuzilmasini yaratib beradi.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <form onSubmit={handleGenerate} className="space-y-4">
                    <Card className="p-6 bg-white">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-1">Firma nomi (ixtiyoriy)</label>
                            <input id="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-white text-dark-gray" />
                        </div>
                        <div>
                            <label htmlFor="idea" className="block text-sm font-medium text-medium-gray mb-1">Biznes g'oyasi</label>
                            <textarea id="idea" value={formData.idea} onChange={handleInputChange} rows={3} className="w-full p-2 border rounded-md bg-white text-dark-gray" placeholder="Masalan, Toshkent shahrida ekologik toza qadoqlash materiallari ishlab chiqarish..."></textarea>
                        </div>
                        <div>
                            <label htmlFor="products" className="block text-sm font-medium text-medium-gray mb-1">Mahsulotlar/Xizmatlar</label>
                            <textarea id="products" value={formData.products} onChange={handleInputChange} rows={3} className="w-full p-2 border rounded-md bg-white text-dark-gray" placeholder="Masalan, qog'oz paketlar, karton qutilar, brendli stakanlar..."></textarea>
                        </div>
                        <div>
                            <label htmlFor="audience" className="block text-sm font-medium text-medium-gray mb-1">Maqsadli auditoriya</label>
                            <textarea id="audience" value={formData.audience} onChange={handleInputChange} rows={3} className="w-full p-2 border rounded-md bg-white text-dark-gray" placeholder="Masalan, kafelar, restoranlar, yetkazib berish xizmatlari..."></textarea>
                        </div>
                         {error && <Alert message={error} type="error" />}
                        <Button type="submit" size="lg" className="w-full" loading={isLoading} disabled={!isFormValid}>
                            Biznes-reja Yaratish
                        </Button>
                    </Card>
                </form>
                
                <Card className="p-6 bg-white min-h-[300px]">
                    <h4 className="font-heading font-bold text-lg mb-4 text-dark-gray">Natija:</h4>
                    {isLoading && <LoadingSpinner />}
                    {result && <SimpleMarkdown text={result} />}
                    {!isLoading && !result && <div className="text-center text-medium-gray p-8">Biznes-rejangiz shu yerda paydo bo'ladi.</div>}
                </Card>
            </div>
        </Card>
    );
};

export default AiBusinessPlanAssistantTool;