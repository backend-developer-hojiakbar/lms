import React, { useState, useMemo } from 'react';
import Card from '../common/Card';

const SalaryCalculatorTool: React.FC = () => {
    const [grossSalary, setGrossSalary] = useState('3000000');
    
    const { incomeTax, netSalary, employerSocialTax, totalCost } = useMemo(() => {
        const gross = parseFloat(grossSalary);
        if (isNaN(gross) || gross < 0) {
            return { incomeTax: 0, netSalary: 0, employerSocialTax: 0, totalCost: 0 };
        }
        
        const JSHODS_RATE = 0.12; // Jismoniy shaxslardan olinadigan daromad solig'i
        const SOCIAL_TAX_RATE = 0.12; // Ijtimoiy soliq (ish beruvchi tomonidan)

        const tax = gross * JSHODS_RATE;
        const net = gross - tax;
        const socialTax = gross * SOCIAL_TAX_RATE;
        const cost = gross + socialTax;

        return { incomeTax: tax, netSalary: net, employerSocialTax: socialTax, totalCost: cost };
    }, [grossSalary]);

    const formatCurrency = (num: number) => new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS' }).format(num);

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Ish Haqi Kalkulyatori</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Xodimning oylik maoshidan ushlanadigan soliqlar, qo'lga tegadigan "toza" miqdor va ish beruvchi uchun umumiy xarajatlarni hisoblang.</p>

            <div className="max-w-md mx-auto mb-8">
                <label htmlFor="gross-salary" className="block text-sm font-medium text-medium-gray mb-1">Oylik maosh (soliqlar ushlanmasdan oldin), so'm</label>
                <input 
                    id="gross-salary"
                    type="number" 
                    value={grossSalary} 
                    onChange={e => setGrossSalary(e.target.value)} 
                    className="w-full px-4 py-3 bg-white text-dark-gray border border-gray-300 rounded-md text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-green" 
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white">
                    <h4 className="font-heading font-bold text-lg mb-4 text-dark-gray">Xodim uchun hisob-kitob</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-medium-gray">Hisoblangan ish haqi (Gross):</span>
                            <span className="font-semibold text-dark-gray">{formatCurrency(parseFloat(grossSalary) || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center text-red-600">
                            <span className="text-medium-gray">Ushlab qolinadigan JSHODS (12%):</span>
                            <span className="font-semibold">-{formatCurrency(incomeTax)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-md mt-2">
                            <span className="font-bold text-lg text-primary-green">Qo'lga tegadigan maosh (Net):</span>
                            <span className="font-bold text-lg text-primary-green">{formatCurrency(netSalary)}</span>
                        </div>
                    </div>
                </Card>
                <Card className="p-6 bg-white">
                    <h4 className="font-heading font-bold text-lg mb-4 text-dark-gray">Ish beruvchi uchun xarajatlar</h4>
                     <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-medium-gray">Hisoblangan ish haqi:</span>
                            <span className="font-semibold text-dark-gray">{formatCurrency(parseFloat(grossSalary) || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-medium-gray">To'lanadigan Ijtimoiy soliq (12%):</span>
                            <span className="font-semibold text-dark-gray">+{formatCurrency(employerSocialTax)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded-md mt-2">
                            <span className="font-bold text-lg text-amber-800">Umumiy xarajat:</span>
                            <span className="font-bold text-lg text-amber-800">{formatCurrency(totalCost)}</span>
                        </div>
                    </div>
                </Card>
            </div>
        </Card>
    );
};

export default SalaryCalculatorTool;