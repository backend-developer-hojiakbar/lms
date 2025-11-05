import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Button from '../common/Button';
import Card from '../common/Card';
import SimpleMarkdown from '../common/SimpleMarkdown';

const LoadingSpinner: React.FC<{ text?: string }> = ({ text = "G'oyalar yaratilmoqda..." }) => (
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

const AiMarketingIdeasTool: React.FC = () => {
    const [formData, setFormData] = useState({
        businessType: '',
        audience: '',
        budget: 'low',
    });
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const isFormValid = formData.businessType.trim() !== '' && formData.audience.trim() !== '';

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            setError("Iltimos, biznes turi va auditoriya maydonlarini to'ldiring.");
            return;
        }
        
        setIsLoading(true);
        setError('');
        setResult('');

        const prompt = `
            O'zbekiston bozori uchun kreativ va amaliy marketing g'oyalari yaratib ber. G'oyalar quyidagi ma'lumotlarga asoslansin:
            - Biznes turi: "${formData.businessType}"
            - Maqsadli auditoriya: "${formData.audience}"
            - Marketing byudjeti: "${formData.budget === 'low' ? 'Kam byudjetli' : formData.budget === 'medium' ? 'O\'rta byudjetli' : 'Katta byudjetli'}"

            Javobni o'zbek tilida, quyidagi bo'limlarga ajratib, batafsil yozib ber:
            
            ## 1. Raqamli Marketing G'oyalari (Onlayn)
            - Ijtimoiy tarmoqlar (Instagram, Telegram, Facebook) uchun 3 ta aniq g'oya.
            - Kontent-marketing uchun 2 ta g'oya (maqolalar, videolar).
            - Hamkorlik (influenserlar, boshqa brendlar bilan).

            ## 2. An'anaviy Marketing G'oyalari (Oflayn)
            - Mahalliy tadbirlar yoki aksiyalar uchun 2 ta g'oya.
            - Mahalliy OAV yoki reklama vositalaridan foydalanish.

            ## 3. Kam Byudjetli "Partizan" Marketing G'oyalari
            - Odamlar orasida gap-so'z bo'ladigan (word-of-mouth) 2 ta kreativ g'oya.

            Har bir g'oyani O'zbekiston sharoitiga moslashtirib, aniq misollar bilan tushuntirib ber.
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
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">AI Marketing G'oyalari Generatori</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Biznesingiz haqida qisqacha ma'lumot bering va sun'iy intellekt siz uchun O'zbekiston bo'zoriga mos marketing g'oyalarini yaratadi.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <form onSubmit={handleGenerate} className="space-y-4">
                    <Card className="p-6 bg-white">
                        <div>
                            <label htmlFor="businessType" className="block text-sm font-medium text-medium-gray mb-1">Biznes turi yoki mahsulot</label>
                            <textarea id="businessType" value={formData.businessType} onChange={handleInputChange} rows={3} className="w-full p-2 border rounded-md bg-white text-dark-gray" placeholder="Masalan, Toshkentda hunarmandchilik sov'galari do'koni..."></textarea>
                        </div>
                        <div>
                            <label htmlFor="audience" className="block text-sm font-medium text-medium-gray mb-1">Maqsadli auditoriya</label>
                            <textarea id="audience" value={formData.audience} onChange={handleInputChange} rows={3} className="w-full p-2 border rounded-md bg-white text-dark-gray" placeholder="Masalan, 25-40 yoshdagi ayollar, sayyohlar..."></textarea>
                        </div>
                         <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-medium-gray mb-1">Marketing byudjeti</label>
                            <select id="budget" value={formData.budget} onChange={handleInputChange} className="w-full p-2 border rounded-md bg-white text-dark-gray">
                                <option value="low">Kam byudjetli</option>
                                <option value="medium">O'rta byudjetli</option>
                                <option value="high">Katta byudjetli</option>
                            </select>
                        </div>
                         {error && <Alert message={error} type="error" />}
                        <Button type="submit" size="lg" className="w-full" loading={isLoading} disabled={!isFormValid}>
                            G'oyalarni Yaratish
                        </Button>
                    </Card>
                </form>
                
                <Card className="p-6 bg-white min-h-[300px]">
                    <h4 className="font-heading font-bold text-lg mb-4 text-dark-gray">Natija:</h4>
                    {isLoading && <LoadingSpinner />}
                    {result && <SimpleMarkdown text={result} />}
                    {!isLoading && !result && <div className="text-center text-medium-gray p-8">Marketing g'oyalaringiz shu yerda paydo bo'ladi.</div>}
                </Card>
            </div>
        </Card>
    );
};

export default AiMarketingIdeasTool;