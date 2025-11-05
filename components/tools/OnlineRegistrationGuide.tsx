import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

type BusinessType = 'YATT' | 'MCHJ';

interface Step {
    title: string;
    description: string;
    details: string;
    link?: string;
    linkText?: string;
}

const steps: Record<BusinessType, Step[]> = {
    YATT: [
        {
            title: "ERI kalitini olish",
            description: "Elektron raqamli imzo - bu sizning onlayn shaxsingiz. Uni olish shart.",
            details: "Davlat xizmatlari markaziga (DXM) pasportingiz bilan murojaat qiling yoki onlayn ariza bering. ERI flesh-diskga yozib beriladi va bir yil davomida amal qiladi.",
            link: "https://e-imzo.uz/",
            linkText: "E-IMZO saytiga o'tish"
        },
        {
            title: "my.gov.uz portalida ro'yxatdan o'tish",
            description: "Barcha onlayn davlat xizmatlari shu portal orqali amalga oshiriladi.",
            details: "Portalga ERI kaliti yordamida kiring va shaxsiy kabinetingizni yarating. Ma'lumotlaringiz avtomatik tarzda to'ldiriladi.",
            link: "https://my.gov.uz/",
            linkText: "My.gov.uz portaliga kirish"
        },
        {
            title: "Onlayn ariza to'ldirish",
            description: "Portalda \"Yakka tartibdagi tadbirkorni ro'yxatdan o'tkazish\" xizmatini toping.",
            details: "Shaxsiy ma'lumotlar, faoliyat turi (IFUT kodi), soliq rejimini tanlang. Ehtiyotkorlik bilan to'ldiring, chunki bu ma'lumotlar guvohnomangizda aks etadi.",
        },
        {
            title: "Davlat bojini to'lash",
            description: "Ro'yxatdan o'tish uchun davlat boji to'lanadi.",
            details: "Ariza yuborilgandan so'ng sizga invoys taqdim etiladi. To'lovni istalgan to'lov tizimi (Click, PayMe, Uzum Bank) orqali amalga oshirishingiz mumkin. Boj miqdori - BHMning 1 baravari.",
        },
        {
            title: "Guvohnomani olish!",
            description: "Tabriklaymiz, siz endi rasmiy tadbirkorsiz!",
            details: "To'lov tasdiqlangandan so'ng 15-30 daqiqa ichida shaxsiy kabinetingizga QR-kodli elektron guvohnoma kelib tushadi. Uni yuklab oling va saqlab qo'ying.",
        }
    ],
    MCHJ: [
        {
            title: "Ta'sischilarni aniqlash",
            description: "MChJ bir yoki bir nechta jismoniy yoki yuridik shaxslar tomonidan tashkil etilishi mumkin.",
            details: "Barcha ta'sischilarning pasport ma'lumotlari va STIR (INN) raqamlari kerak bo'ladi. Agar ta'sischi yuridik shaxs bo'lsa, uning guvohnomasi va ustav hujjatlari kerak.",
        },
        {
            title: "Firma nomini band qilish",
            description: "Noyob va qonunchilikka zid bo'lmagan nom tanlash kerak.",
            details: "fo.birdarcha.uz sayti orqali taklif qilinayotgan nomning bo'sh ekanligini tekshirib, 30 kunga band qilib qo'yishingiz mumkin. Bu xizmat bepul.",
            link: "https://fo.birdarcha.uz/",
            linkText: "Firma nomini tekshirish"
        },
        {
            title: "Ta'sis hujjatlarini tayyorlash",
            description: "MChJ faoliyatining asosiy hujjati - bu Ustav.",
            details: "Ustav, ta'sis shartnomasi (agar ta'sischilar bir necha kishi bo'lsa) va ta'sischilar yig'ilishi bayonnomasini tayyorlash kerak. Namunaviy ustavdan foydalanish mumkin.",
        },
        {
            title: "Ustav fondini shakllantirish",
            description: "Minimal ustav fondi miqdori qonunchilikda belgilanmagan, ammo amaliyotda kamida 10 mln so'm tavsiya etiladi.",
            details: "Ustav fondi pul mablag'lari, mol-mulk yoki mulkiy huquqlar bilan shakllantirilishi mumkin. Pul mablag'lari bankdagi vaqtinchalik hisob raqamiga o'tkaziladi.",
        },
        {
            title: "Onlayn ro'yxatdan o'tish",
            description: "Barcha hujjatlar tayyor bo'lgach, my.gov.uz orqali ariza yuboriladi.",
            details: "Portalda \"Yuridik shaxsni ro'yxatdan o'tkazish\" xizmatini tanlab, barcha ma'lumotlarni kiriting va ta'sis hujjatlarini elektron shaklda yuklang. Barcha ta'sischilar arizani o'z ERI kaliti bilan tasdiqlashlari kerak.",
        },
        {
            title: "Guvohnoma va muhr",
            description: "MChJ rasman ro'yxatdan o'tdi!",
            details: "Ariza tasdiqlangach, elektron guvohnoma, ustav va STIR raqami taqdim etiladi. Shundan so'ng bank hisob raqamini ochish va muhrga buyurtma berish mumkin.",
        }
    ]
};

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const OnlineRegistrationGuide: React.FC = () => {
    const [selectedType, setSelectedType] = useState<BusinessType>('YATT');
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const handleToggleStep = (stepIndex: number) => {
        setCompletedSteps(prev => 
            prev.includes(stepIndex) 
                ? prev.filter(i => i !== stepIndex) 
                : [...prev, stepIndex]
        );
    };
    
    const currentSteps = steps[selectedType];
    const progress = (completedSteps.length / currentSteps.length) * 100;

    const firstIncompleteStep = currentSteps.findIndex((_, index) => !completedSteps.includes(index));
    const currentStepIndex = firstIncompleteStep === -1 ? currentSteps.length : firstIncompleteStep;


    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Biznesni Ro'yxatdan O'tkazish Yo'riqnomasi</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Tadbirkorlik shaklini tanlang va bosqichma-bosqich qo'llanmaga amal qiling.</p>

            <div className="flex justify-center mb-8">
                <div className="bg-white p-1.5 rounded-lg shadow-sm flex gap-2">
                    <Button onClick={() => { setSelectedType('YATT'); setCompletedSteps([]); }} variant={selectedType === 'YATT' ? 'primary' : 'outline'}>Yakka Tartibdagi Tadbirkor (YaTT)</Button>
                    <Button onClick={() => { setSelectedType('MCHJ'); setCompletedSteps([]); }} variant={selectedType === 'MCHJ' ? 'primary' : 'outline'}>Mas'uliyati Cheklangan Jamiyat (MChJ)</Button>
                </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-primary-green">Jarayon</span>
                        <span className="text-sm font-medium text-primary-green">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary-green h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                {/* Stepper */}
                <div className="relative pl-8 border-l-2 border-dashed border-gray-300">
                    {currentSteps.map((step, index) => {
                         const isCompleted = completedSteps.includes(index);
                         const isActive = index === currentStepIndex;
                         
                         return (
                            <div key={index} className="mb-8 relative" >
                                <div className="absolute -left-[1.65rem] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-light-gray">
                                   <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                                        isCompleted ? 'bg-primary-green' : isActive ? 'bg-primary-green' : 'bg-gray-300'
                                   }`}>
                                        {isCompleted ? (
                                            <CheckIcon className="w-4 h-4 text-white" />
                                        ) : (
                                             <span className={`font-bold text-xs ${isActive ? 'text-white' : 'text-gray-600'}`}>{index + 1}</span>
                                        )}
                                   </div>
                                    {isActive && <div className="absolute w-8 h-8 rounded-full bg-primary-green/30 animate-ping"></div>}
                                </div>
                                <div 
                                    className="ml-6 cursor-pointer"
                                    onClick={() => handleToggleStep(index)}
                                >
                                    <h4 className={`font-heading font-bold text-lg ${isCompleted ? 'line-through text-gray-500' : 'text-dark-gray'}`}>{step.title}</h4>
                                    <p className={`text-sm ${isCompleted ? 'text-gray-500' : 'text-medium-gray'}`}>{step.description}</p>
                                    
                                    <div className={`mt-3 p-4 rounded-lg border transition-all duration-300 ${isCompleted ? 'bg-gray-100' : 'bg-white shadow-sm'}`}>
                                        <p className="text-sm text-medium-gray">{step.details}</p>
                                        {step.link && (
                                            <a href={step.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-blue-600 hover:underline mt-3 inline-block font-semibold">
                                                {step.linkText} &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                         );
                    })}
                </div>
            </div>
        </Card>
    );
};

export default OnlineRegistrationGuide;
