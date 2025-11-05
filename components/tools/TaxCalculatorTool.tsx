import React, { useState, useMemo } from 'react';
import Card from '../common/Card';

const TaxCalculatorTool: React.FC = () => {
    const [turnover, setTurnover] = useState('10000000');
    const [rate, setRate] = useState(4);
    
    const taxRates = [
        { value: 4, label: "4% - Standart stavka" },
        { value: 3, label: "3% - Qoraqalpog'iston Respublikasi uchun" },
        { value: 2, label: "2% - Elektron tijorat, chakana savdo uchun" },
        { value: 1, label: "1% - Navoiy, Buxoro, Xorazm viloyatlarida turizm uchun" },
    ];

    const taxAmount = useMemo(() => {
        const turnoverNum = parseFloat(turnover);
        if (isNaN(turnoverNum) || turnoverNum < 0) return 0;
        return (turnoverNum * rate) / 100;
    }, [turnover, rate]);

    const formatCurrency = (num: number) => new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS' }).format(num);

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Aylanmadan Olinadigan Soliq Kalkulyatori</h3>
            <p className="text-medium-gray mb-6 text-center">Yillik aylanmasi 1 mlrd so'mgacha bo'lgan kichik biznes uchun soliqni tezda hisoblang.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                     <div>
                        <label htmlFor="turnover" className="block text-sm font-medium text-medium-gray mb-1">Soliq davri uchun aylanma (tushum), so'm</label>
                        <input
                            id="turnover"
                            type="number"
                            value={turnover}
                            onChange={e => setTurnover(e.target.value)}
                            className="w-full px-4 py-3 bg-white text-dark-gray border border-gray-300 rounded-md text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-green"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-medium-gray mb-2">Soliq stavkasini tanlang</label>
                        <div className="space-y-2">
                           {taxRates.map(r => (
                                <label key={r.value} className="flex items-center p-3 bg-white rounded-md border has-[:checked]:bg-green-50 has-[:checked]:border-primary-green cursor-pointer">
                                    <input
                                        type="radio"
                                        name="tax-rate"
                                        value={r.value}
                                        checked={rate === r.value}
                                        onChange={() => setRate(r.value)}
                                        className="h-4 w-4 text-primary-green focus:ring-primary-green border-gray-300"
                                    />
                                    <span className="ml-3 text-sm font-medium text-dark-gray">{r.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <Card className="p-8 text-center bg-white">
                    <p className="text-lg text-medium-gray">To'lanishi kerak bo'lgan soliq summasi:</p>
                    <p className="text-4xl lg:text-5xl font-bold text-primary-green my-4">
                        {formatCurrency(taxAmount)}
                    </p>
                    <p className="text-xs text-gray-400">*Ushbu hisob-kitob dastlabki ma'lumot uchun mo'ljallangan va rasmiy hujjat hisoblanmaydi.</p>
                </Card>
            </div>
        </Card>
    );
};

export default TaxCalculatorTool;
