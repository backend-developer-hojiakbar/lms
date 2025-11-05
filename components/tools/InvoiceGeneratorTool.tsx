import React, { useState, useMemo } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';
import InvoiceTemplate from './InvoiceTemplate';

const InputField = ({ label, value, onChange, placeholder, type = 'text' }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, placeholder?: string, type?: string }) => (
    <div>
        <label className="block text-sm font-medium text-medium-gray mb-1">{label}</label>
        <input 
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-white text-dark-gray border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green placeholder-gray-400"
        />
    </div>
);

interface Item {
    id: number;
    description: string;
    quantity: number;
    price: number;
}

const InvoiceGeneratorTool: React.FC = () => {
    const [yourCompany, setYourCompany] = useState({ name: 'Sizning Kompaniyangiz', address: 'Toshkent, O\'zbekiston', phone: '+998 XX XXX XX XX', email: 'email@example.uz' });
    const [client, setClient] = useState({ name: 'Mijoz Ismi', address: 'Mijoz Manzili', phone: '', email: '' });
    const [invoiceDetails, setInvoiceDetails] = useState({ number: '001', date: new Date().toISOString().split('T')[0], dueDate: '' });
    const [items, setItems] = useState<Item[]>([{ id: 1, description: 'Xizmat yoki mahsulot nomi', quantity: 1, price: 100000 }]);
    const [notes, setNotes] = useState('To\'lov uchun rahmat!');
    const [taxRate, setTaxRate] = useState(0);

    const handleYourCompanyChange = (field: keyof typeof yourCompany) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setYourCompany(prev => ({ ...prev, [field]: e.target.value }));
    };
    const handleClientChange = (field: keyof typeof client) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setClient(prev => ({ ...prev, [field]: e.target.value }));
    };
    const handleInvoiceDetailsChange = (field: keyof typeof invoiceDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvoiceDetails(prev => ({ ...prev, [field]: e.target.value }));
    };
    const handleItemChange = (id: number, field: keyof Omit<Item, 'id'>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setItems(prevItems => prevItems.map(item => 
            item.id === id ? { ...item, [field]: e.target.type === 'number' ? parseFloat(e.target.value) || 0 : e.target.value } : item
        ));
    };

    const addItem = () => {
        setItems(prev => [...prev, { id: Date.now(), description: '', quantity: 1, price: 0 }]);
    };
    const removeItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = useMemo(() => items.reduce((acc, item) => acc + item.quantity * item.price, 0), [items]);
    const taxAmount = useMemo(() => (subtotal * taxRate) / 100, [subtotal, taxRate]);
    const total = useMemo(() => subtotal + taxAmount, [subtotal, taxAmount]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('uz-UZ', { style: 'currency', currency: 'UZS', minimumFractionDigits: 0 }).format(amount);
    };

    const handlePrint = () => {
        const data = { yourCompany, client, invoiceDetails, items, notes, taxRate, subtotal, taxAmount, total };
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write('<html><head><title>Hisob-faktura</title>');
            printWindow.document.write('<script src="https://cdn.tailwindcss.com"></script>');
            printWindow.document.write('<style>@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .no-print { display: none; } }</style>');
            printWindow.document.write('</head><body>');
            printWindow.document.write(InvoiceTemplate(data));
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            
            setTimeout(() => {
                printWindow.focus();
                printWindow.print();
                // printWindow.close(); // User might want to save as PDF
            }, 500);
        }
    };

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-6 text-center">Onlayn Invoys Generatori</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="p-4 space-y-4">
                    <h4 className="font-heading font-bold text-lg border-b pb-2">Sizning kompaniyangiz</h4>
                    <InputField label="Kompaniya nomi" value={yourCompany.name} onChange={handleYourCompanyChange('name')} />
                    <InputField label="Manzil" value={yourCompany.address} onChange={handleYourCompanyChange('address')} />
                    <InputField label="Telefon" value={yourCompany.phone} onChange={handleYourCompanyChange('phone')} />
                    <InputField label="Email" value={yourCompany.email} onChange={handleYourCompanyChange('email')} type="email" />
                </Card>
                <Card className="p-4 space-y-4">
                    <h4 className="font-heading font-bold text-lg border-b pb-2">Mijoz ma'lumotlari</h4>
                    <InputField label="Mijoz nomi" value={client.name} onChange={handleClientChange('name')} />
                    <InputField label="Manzil" value={client.address} onChange={handleClientChange('address')} />
                    <InputField label="Telefon" value={client.phone} onChange={handleClientChange('phone')} />
                    <InputField label="Email" value={client.email} onChange={handleClientChange('email')} type="email" />
                </Card>
            </div>

            <Card className="p-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField label="Invoys raqami #" value={invoiceDetails.number} onChange={handleInvoiceDetailsChange('number')} />
                    <InputField label="Invoys sanasi" value={invoiceDetails.date} onChange={handleInvoiceDetailsChange('date')} type="date" />
                    <InputField label="To'lov sanasi" value={invoiceDetails.dueDate} onChange={handleInvoiceDetailsChange('dueDate')} type="date" />
                </div>
            </Card>

            <Card className="p-4 mb-8">
                <h4 className="font-heading font-bold text-lg mb-4">Xizmatlar / Mahsulotlar</h4>
                <div className="space-y-2">
                    {items.map((item, index) => (
                        <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                            <input type="text" value={item.description} onChange={handleItemChange(item.id, 'description')} placeholder="Tavsif" className="col-span-6 w-full px-2 py-1 bg-white border rounded-md" />
                            <input type="number" value={item.quantity} onChange={handleItemChange(item.id, 'quantity')} placeholder="Soni" className="col-span-2 w-full px-2 py-1 bg-white border rounded-md" />
                            <input type="number" value={item.price} onChange={handleItemChange(item.id, 'price')} placeholder="Narxi" className="col-span-3 w-full px-2 py-1 bg-white border rounded-md" />
                            <button onClick={() => removeItem(item.id)} className="col-span-1 text-red-500 hover:text-red-700">&times;</button>
                        </div>
                    ))}
                </div>
                <Button onClick={addItem} variant="outline" size="sm" className="mt-4">Qator qo'shish</Button>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-sm font-medium text-medium-gray mb-1">Qo'shimcha izohlar</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full px-3 py-2 bg-white text-dark-gray border border-gray-300 rounded-md"></textarea>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-medium-gray">Jami (soliqsiz):</span>
                        <span className="font-semibold text-dark-gray">{formatCurrency(subtotal)}</span>
                    </div>
                     <div className="flex justify-between items-center py-2 border-b">
                        <label className="text-medium-gray">Soliq (%):</label>
                        <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)} className="w-20 px-2 py-1 bg-white border rounded-md text-right" />
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-medium-gray">Soliq summasi:</span>
                        <span className="font-semibold text-dark-gray">{formatCurrency(taxAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gray-100 px-2 rounded-md mt-2">
                        <span className="font-bold text-lg text-dark-gray">Umumiy summa:</span>
                        <span className="font-bold text-lg text-primary-green">{formatCurrency(total)}</span>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Button onClick={handlePrint} size="lg" variant="primary">PDF yaratish va Chop etish</Button>
            </div>
        </Card>
    );
};

export default InvoiceGeneratorTool;
