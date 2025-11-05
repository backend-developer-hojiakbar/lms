import React, { useState } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

const LoadingSpinner: React.FC = () => (
    <div className="flex items-center justify-center space-x-2">
        <svg className="animate-spin h-5 w-5 text-primary-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-medium-gray">Tekshirilmoqda...</span>
    </div>
);

const ResultRow: React.FC<{ label: string; value: string; status: 'ok' | 'warning' | 'error' }> = ({ label, value, status }) => {
    const statusClasses = {
        ok: 'bg-green-100 text-green-800',
        warning: 'bg-amber-100 text-amber-800',
        error: 'bg-red-100 text-red-800',
    };
    const statusIcons = {
        ok: '✔',
        warning: '!',
        error: '✖',
    };
    return (
        <div className="flex justify-between items-center p-3 border-b">
            <span className="text-medium-gray">{label}</span>
            <div className="flex items-center gap-2">
                <span className={`font-semibold ${status === 'ok' ? 'text-dark-gray' : 'text-red-600'}`}>{value}</span>
                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${statusClasses[status]}`}>
                    {statusIcons[status]}
                </span>
            </div>
        </div>
    );
};


const CounterpartyCheckTool: React.FC = () => {
    const [stir, setStir] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!/^\d{9}$/.test(stir)) {
            setError("STIR (INN) 9 ta raqamdan iborat bo'lishi kerak.");
            setResult(null);
            return;
        }
        setError('');
        setIsLoading(true);
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            const lastDigit = parseInt(stir.slice(-1));
            let mockResult;

            if (lastDigit >= 0 && lastDigit <= 6) { // "Good" company
                mockResult = {
                    name: '"FAYZ-BARAKA" MChJ',
                    status: 'Faoliyatda',
                    registrationDate: '15.03.2018',
                    taxDebt: 'Mavjud emas',
                    hasDebt: false,
                    courtCases: 'Topilmadi',
                    hasCases: false
                };
            } else if (lastDigit >= 7 && lastDigit <= 8) { // "Warning" company
                 mockResult = {
                    name: '"OMAD-PLUS" XK',
                    status: 'Faoliyatda',
                    registrationDate: '22.11.2020',
                    taxDebt: '1,250,000 so\'m',
                    hasDebt: true,
                    courtCases: 'Topilmadi',
                    hasCases: false
                };
            } else { // "Error" company
                 mockResult = {
                    name: '"KELAJAK-NUR" MChJ',
                    status: 'Tugatilish jarayonida',
                    registrationDate: '01.08.2019',
                    taxDebt: '15,800,000 so\'m',
                    hasDebt: true,
                    courtCases: '2 ta faol ish',
                    hasCases: true
                };
            }
            setResult(mockResult);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <Card className="p-6 bg-light-gray">
             <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Kontragentni Tekshirish Vosiyasi</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Hamkorlik qilishdan oldin kompaniyaning ishonchliligini tekshiring. Bu shunchaki simulyatsiya, real ma'lumotlar uchun davlat portallariga murojaat qiling.</p>
            
            <Card className="p-6 max-w-lg mx-auto bg-white">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-grow">
                        <label htmlFor="stir-input" className="sr-only">STIR (INN)</label>
                        <input 
                            id="stir-input"
                            type="text" 
                            value={stir}
                            onChange={e => setStir(e.target.value)}
                            placeholder="Hamkorning 9 xonali STIR (INN) raqamini kiriting"
                            maxLength={9}
                            className={`w-full px-4 py-3 bg-white text-dark-gray border-2 rounded-md focus:outline-none transition-colors ${error ? 'border-error-red focus:ring-error-red/50' : 'border-gray-200 focus:ring-primary-green/50 focus:border-primary-green'}`}
                        />
                        {error && <p className="text-sm text-error-red mt-1">{error}</p>}
                    </div>
                    <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
                        Tekshirish
                    </Button>
                </form>
            </Card>

            <div className="mt-8 max-w-2xl mx-auto">
                {isLoading && <LoadingSpinner />}
                {result && (
                    <Card className="p-4 bg-white animate-fade-in">
                        <h4 className="font-heading font-bold text-xl mb-4 text-center">{result.name}</h4>
                        <div className="space-y-1">
                            <ResultRow label="Holati" value={result.status} status={result.status === 'Faoliyatda' ? 'ok' : 'error'} />
                            <ResultRow label="Ro'yxatdan o'tgan sana" value={result.registrationDate} status="ok" />
                            <ResultRow label="Soliq qarzdorligi" value={result.taxDebt} status={result.hasDebt ? 'error' : 'ok'} />
                            <ResultRow label="Sud ishlari" value={result.courtCases} status={result.hasCases ? 'warning' : 'ok'} />
                        </div>
                    </Card>
                )}
            </div>
        </Card>
    );
};

export default CounterpartyCheckTool;