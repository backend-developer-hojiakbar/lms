import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import { DocumentArrowUpIcon, EnvelopeOpenIcon } from '../constants';

const AppealsPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        stir: '',
        phone: '',
        email: '',
        appealType: 'Taklif',
        subject: '',
        message: '',
        file: null as File | null,
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if(errors[id]){
            setErrors(prev => ({...prev, [id]: ''}));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData(prev => ({ ...prev, file: e.target.files![0] }));
        }
    };
    
    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "F.I.Sh. kiritilishi shart.";
        if (!formData.phone.trim()) newErrors.phone = "Telefon raqam kiritilishi shart.";
        if (!formData.subject.trim()) newErrors.subject = "Mavzu kiritilishi shart.";
        if (!formData.message.trim()) newErrors.message = "Murojaat matni kiritilishi shart.";
        if (formData.stir && !/^\d{9}$/.test(formData.stir)) newErrors.stir = "STIR 9 ta raqamdan iborat bo'lishi kerak.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
            setFormSubmitted(true);
        }
    };

    const inputClasses = (hasError: boolean) => 
        `w-full p-3 border-2 rounded-lg bg-white text-dark-gray transition-colors focus:outline-none focus:ring-2 ${
        hasError ? 'border-error-red focus:ring-error-red/50' : 'border-gray-200 focus:border-primary-green focus:ring-primary-green/50'
        }`;


    return (
        <div className="bg-light-bg py-20">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto">
                    <EnvelopeOpenIcon className="w-20 h-20 text-primary-green mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-dark-gray mb-4">
                        Murojaatlar Portali
                    </h1>
                    <p className="text-xl text-medium-gray mb-16">
                        Taklif, shikoyat yoki arizalaringizni elektron tarzda yuboring. Murojaatingiz qonuniy tartibda ko'rib chiqiladi.
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-2xl">
                    {formSubmitted ? (
                         <div className="text-center p-8 bg-green-50 rounded-xl">
                            <h3 className="text-3xl font-bold text-dark-green mb-3">Murojaatingiz qabul qilindi!</h3>
                            <p className="text-lg text-medium-gray mb-6">Sizning murojaatingiz #MU-12345 raqami bilan ro'yxatga olindi. Ko'rib chiqish natijalari bo'yicha siz bilan ko'rsatilgan aloqa vositalari orqali bog'lanamiz.</p>
                            <Button size="lg" onClick={() => { setFormSubmitted(false); setFormData({ fullName: '', organization: '', stir: '', phone: '', email: '', appealType: 'Taklif', subject: '', message: '', file: null }); }}>Yangi murojaat yuborish</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="fullName" className="block text-base font-semibold text-medium-gray mb-2">Murojaatchi F.I.Sh. *</label>
                                    <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} className={inputClasses(!!errors.fullName)} />
                                    {errors.fullName && <p className="text-sm text-error-red mt-1">{errors.fullName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="organization" className="block text-base font-semibold text-medium-gray mb-2">Tashkilot nomi</label>
                                    <input type="text" id="organization" value={formData.organization} onChange={handleChange} className={inputClasses(!!errors.organization)} />
                                    {errors.organization && <p className="text-sm text-error-red mt-1">{errors.organization}</p>}
                                </div>
                                <div>
                                    <label htmlFor="stir" className="block text-base font-semibold text-medium-gray mb-2">Tashkilot STIR (INN) raqami</label>
                                    <input type="text" id="stir" value={formData.stir} onChange={handleChange} className={inputClasses(!!errors.stir)} maxLength={9} />
                                    {errors.stir && <p className="text-sm text-error-red mt-1">{errors.stir}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-base font-semibold text-medium-gray mb-2">Telefon raqam *</label>
                                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={inputClasses(!!errors.phone)} />
                                    {errors.phone && <p className="text-sm text-error-red mt-1">{errors.phone}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="email" className="block text-base font-semibold text-medium-gray mb-2">Elektron pochta</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} className={inputClasses(!!errors.email)} />
                                    {errors.email && <p className="text-sm text-error-red mt-1">{errors.email}</p>}
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="appealType" className="block text-base font-semibold text-medium-gray mb-2">Murojaat turi *</label>
                                        <select id="appealType" value={formData.appealType} onChange={handleChange} className={inputClasses(!!errors.appealType)}>
                                            <option>Taklif</option>
                                            <option>Ariza</option>
                                            <option>Shikoyat</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-base font-semibold text-medium-gray mb-2">Mavzu *</label>
                                        <input type="text" id="subject" value={formData.subject} onChange={handleChange} className={inputClasses(!!errors.subject)} />
                                        {errors.subject && <p className="text-sm text-error-red mt-1">{errors.subject}</p>}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-base font-semibold text-medium-gray mb-2">Murojaat matni *</label>
                                <textarea id="message" value={formData.message} onChange={handleChange} rows={6} className={inputClasses(!!errors.message)}></textarea>
                                {errors.message && <p className="text-sm text-error-red mt-1">{errors.message}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="file-upload" className="block text-base font-semibold text-medium-gray mb-2">Fayl biriktirish (ixtiyoriy)</label>
                                <div className="mt-2 flex items-center justify-center w-full">
                                    <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <DocumentArrowUpIcon className="w-10 h-10 mb-3 text-gray-400" />
                                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Faylni tanlang</span> yoki bu yerga sudrab olib keling</p>
                                            <p className="text-xs text-gray-500">PDF, DOCX, JPG, PNG (MAX. 5MB)</p>
                                        </div>
                                        <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                                    </label>
                                </div>
                                {formData.file && <p className="text-sm text-medium-gray mt-2">Tanlangan fayl: {formData.file.name}</p>}
                            </div>

                            <div className="text-center pt-4">
                                <Button type="submit" size="lg" className="w-full max-w-xs">Murojaatni yuborish</Button>
                            </div>
                        </form>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default AppealsPage;
