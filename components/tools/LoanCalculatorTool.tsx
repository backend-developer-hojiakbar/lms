import React, { useState, useMemo } from 'react';
import Card from '../common/Card';

const InputGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div>
        <label className="block text-sm font-medium text-medium-gray mb-1">{label}</label>
        {children}
    </div>
);

const LoanCalculatorTool: React.FC = () => {
    const [amount, setAmount] = useState('10000000');
    const [rate, setRate] = useState('24');
    const [term, setTerm] = useState('3');

    const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
        const principal = parseFloat(amount);
        const annualInterestRate = parseFloat(rate) / 100;
        const years = parseFloat(term);

        if (isNaN(principal) || principal <= 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(years) || years <= 0) {
            return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
        }

        const monthlyInterestRate = annualInterestRate / 12;
        const numberOfPayments = years * 12;

        if (monthlyInterestRate === 0) {
            const mp = principal / numberOfPayments;
            return { monthlyPayment: mp, totalPayment: principal, totalInterest: 0};
        }

        const mp = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const tp = mp * numberOfPayments;
        const ti = tp - principal;

        return { monthlyPayment: mp, totalPayment: tp, totalInterest: ti };
    }, [amount, rate, term]);
    
    const formatCurrency = (num: number) => new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', minimumFractionDigits: 2 }).format(num);

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Kredit Kalkulyatori</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Biznes kreditlari uchun oylik to'lovlarni hisoblang va moliyaviy yechimlarni osonroq rejalashtiring.</p>

            <Card className="p-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
                <InputGroup label="Kredit miqdori (so'm)">
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
                </InputGroup>
                <InputGroup label="Yillik foiz stavkasi (%)">
                     <input type="number" value={rate} onChange={e => setRate(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
                </InputGroup>
                <InputGroup label="Kredit muddati (yil)">
                    <input type="number" value={term} onChange={e => setTerm(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
                </InputGroup>
            </Card>

            <div className="mt-8">
                <h4 className="text-xl font-heading font-bold text-dark-gray mb-4 text-center">Natijalar</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <Card className="p-4 bg-white">
                        <p className="text-sm text-medium-gray">Oylik to'lov</p>
                        <p className="text-2xl font-bold text-primary-green">{formatCurrency(monthlyPayment)}</p>
                    </Card>
                    <Card className="p-4 bg-white">
                        <p className="text-sm text-medium-gray">Umumiy to'lov</p>
                        <p className="text-2xl font-bold text-dark-gray">{formatCurrency(totalPayment)}</p>
                    </Card>
                    <Card className="p-4 bg-white">
                        <p className="text-sm text-medium-gray">Jami foizlar</p>
                        <p className="text-2xl font-bold text-dark-gray">{formatCurrency(totalInterest)}</p>
                    </Card>
                </div>
            </div>
        </Card>
    );
};

export default LoanCalculatorTool;