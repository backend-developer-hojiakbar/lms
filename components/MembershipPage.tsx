import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import { UserPlusIcon, CheckBadgeIcon, ShieldCheckIcon, UserGroupIcon, AcademicCapIcon } from '../constants';
import { User, Page } from '../types';
import MembershipCertificate from './MembershipCertificate';

interface MembershipPageProps {
    onRegister: (user: User) => void;
    isLoggedIn: boolean;
    currentUser: User | null;
    navigateTo: (page: Page) => void;
}

const MembershipPage: React.FC<MembershipPageProps> = ({ onRegister, isLoggedIn, currentUser, navigateTo }) => {
    const [justRegisteredUser, setJustRegisteredUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const benefits = [
        { icon: CheckBadgeIcon, text: "Barcha 60+ xizmatlardan cheklovlarsiz foydalanish." },
        { icon: ShieldCheckIcon, text: "Uyushma yuristlaridan bepul dastlabki maslahatlar." },
        { icon: UserGroupIcon, text: "Tadbirkorlar hamjamiyatiga qo'shilish va networking imkoniyati." },
        { icon: AcademicCapIcon, text: "Biznesni rivojlantirishga oid eksklyuziv o'quv materiallari." },
    ];
    
    // If the user is already logged in, show their certificate.
    if (isLoggedIn && currentUser) {
        return (
            <div className="bg-light-bg py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center p-8 bg-green-50 rounded-lg max-w-4xl mx-auto mb-8">
                        <h3 className="text-2xl font-bold text-dark-green mb-3">Siz allaqachon a'zosiz!</h3>
                        <p className="text-medium-gray">Bu sizning a'zolik sertifikatingiz. Xizmatlardan foydalanishda davom etishingiz mumkin.</p>
                    </div>
                    <MembershipCertificate user={currentUser} onContinue={() => navigateTo(Page.Home)} isModal={false} />
                </div>
            </div>
        );
    }
    
    // If the user just registered on this page, show their new certificate.
    if (justRegisteredUser) {
        return (
             <div className="bg-light-bg py-16">
                <div className="container mx-auto px-6">
                    <MembershipCertificate user={justRegisteredUser} onContinue={() => navigateTo(Page.Home)} isModal={false} />
                </div>
            </div>
        );
    }

    const handleEimzoRegister = () => {
        setIsLoading(true);
        // Simulate E-IMZO data fetching and registration
        setTimeout(() => {
            const year = new Date().getFullYear().toString().slice(-2);
            // In a real app, this number would be fetched and incremented on a server.
            const sequence = "000101"; // Increment for simulation
            const newId = `KBU-${year}-${sequence}`;

            const newUser: User = {
                id: newId,
                fullName: "RAXMONBERDIYEV ISLOMBЕK",
                stir: "305753959",
                organizationName: `TOJMAHAL XAKAN SAVDO MCHJ`,
                phone: "+998 XX XXX-XX-XX"
            };
            onRegister(newUser);
            setJustRegisteredUser(newUser);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="bg-light-bg py-16">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto">
                    <UserPlusIcon className="w-16 h-16 text-primary-green mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-dark-gray mb-4">
                        Uyushmaga a'zo bo'lish
                    </h1>
                    <p className="text-lg text-medium-gray mb-12">
                        O'zbekiston tadbirkorlari hamjamiyatiga qo'shiling va biznesingiz uchun yangi imkoniyatlar eshigini oching.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Benefits Section */}
                    <div>
                         <h2 className="text-3xl font-heading font-bold text-dark-gray mb-6">A'zolikning afzalliklari</h2>
                         <div className="space-y-4">
                            {benefits.map(benefit => (
                                <Card key={benefit.text} className="p-4 flex items-start gap-4">
                                    <div className="bg-ultra-light-green text-primary-green p-3 rounded-lg flex-shrink-0">
                                        <benefit.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-dark-gray leading-tight">{benefit.text}</h3>
                                    </div>
                                </Card>
                            ))}
                         </div>
                    </div>

                    {/* Form Section */}
                     <Card className="p-8">
                        <h2 className="text-2xl font-bold font-heading text-dark-gray mb-2 text-center">Onlayn Ro'yxatdan o'tish</h2>
                        <p className="text-center text-medium-gray mb-8">
                            A'zo bo'lish uchun E-IMZO elektron raqamli imzo kalitingiz bilan tizimga kiring. Ma'lumotlaringiz avtomatik tarzda to'ldiriladi.
                        </p>
                        <div className="text-center">
                            <Button 
                                onClick={handleEimzoRegister}
                                loading={isLoading}
                                size="lg" 
                                className="w-full max-w-xs"
                            >
                                {isLoading ? "Tasdiqlanmoqda..." : "E-IMZO bilan a'zo bo'lish"}
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;