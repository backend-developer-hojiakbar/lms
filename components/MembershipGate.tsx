import React, { useState } from 'react';
import { User } from '../types';
import Button from './common/Button';
import { CheckBadgeIcon, ShieldCheckIcon, UserGroupIcon, AcademicCapIcon, XMarkIcon } from '../constants';

interface MembershipGateProps {
    onSuccess: (user: User) => void;
    onClose: () => void;
}

const MembershipGate: React.FC<MembershipGateProps> = ({ onSuccess, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    
    const benefits = [
        { icon: CheckBadgeIcon, text: "Barcha 60+ xizmatlardan cheklovlarsiz foydalanish." },
        { icon: ShieldCheckIcon, text: "Uyushma yuristlaridan bepul dastlabki maslahatlar." },
        { icon: UserGroupIcon, text: "Tadbirkorlar hamjamiyatiga qo'shilish va networking imkoniyati." },
        { icon: AcademicCapIcon, text: "Biznesni rivojlantirishga oid eksklyuziv o'quv materiallari." },
    ];

    const handleEimzoRegister = () => {
        setIsLoading(true);
        // Simulate E-IMZO data fetching and registration
        setTimeout(() => {
            const year = new Date().getFullYear().toString().slice(-2);
            // In a real app, this number would be fetched and incremented on a server.
            const sequence = "000100"; 
            const newId = `KBU-${year}-${sequence}`;

            const newUser: User = {
                id: newId,
                fullName: "TURAKULOV IBRATJAN MIRIRGASHEVICH",
                stir: "303450854",
                organizationName: `BEVERAGES BUSINESS MAS'ULIYATI CHEKLANGAN JAMIYAT`,
                phone: "+998 XX XXX-XX-XX"
            };
            onSuccess(newUser);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden">
                {/* Left side - Benefits */}
                <div className="w-full md:w-1/2 bg-ultra-light-green p-8 flex flex-col">
                     <h2 className="text-3xl font-heading font-bold text-dark-green mb-4">Uyushmaga a'zo bo'ling!</h2>
                     <p className="text-medium-gray mb-8">Platformaning barcha imkoniyatlaridan to'liq foydalanish va biznesingizni yangi bosqichga olib chiqish uchun hamjamiyatimizga qo'shiling.</p>
                     <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <benefit.icon className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" />
                                <span className="text-dark-gray">{benefit.text}</span>
                            </div>
                        ))}
                     </div>
                     <div className="mt-auto pt-6">
                        <p className="text-xs text-medium-gray">A'zo bo'lish orqali siz platforma <a href="#" className="underline">foydalanish shartlariga</a> rozilik bildirasiz.</p>
                     </div>
                </div>

                {/* Right side - Form */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto relative flex flex-col justify-center items-center text-center">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="w-6 h-6"/>
                    </button>
                    <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4">E-IMZO orqali tasdiqlash</h3>
                    <p className="text-medium-gray mb-8">
                        Davom etish uchun E-IMZO elektron raqamli imzo kalitingiz bilan tizimga kiring. Korxona ma'lumotlaringiz avtomatik tarzda to'ldiriladi va a'zolik rasmiylashtiriladi.
                    </p>
                    <Button 
                        onClick={handleEimzoRegister} 
                        loading={isLoading} 
                        size="lg" 
                        className="w-full max-w-xs"
                    >
                        {isLoading ? "Tasdiqlanmoqda..." : "E-IMZO bilan a'zo bo'lish"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MembershipGate;