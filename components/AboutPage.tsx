import React from 'react';
import Card from './common/Card';
import { 
    TrophyIcon, 
    RocketLaunchIcon, 
    UserGroupIcon, 
    ShieldCheckIcon, 
    LightBulbIcon,
    IdentificationIcon,
    SparklesIcon,
    BanknotesIcon,
    GlobeAltIcon,
    AcademicCapIcon
} from '../constants';

const AboutPage: React.FC = () => {

    const values = [
        {
            icon: RocketLaunchIcon,
            title: "Tadbirkorlikni qo'llab-quvvatlash",
            description: "Biz har bir tadbirkorning g'oyasini qo'llab-quvvatlaymiz va uning rivojlanishi uchun qulay sharoitlar yaratamiz."
        },
        {
            icon: LightBulbIcon,
            title: "Innovatsiya va Texnologiya",
            description: "Biznesni yuritishni osonlashtirish uchun eng zamonaviy raqamli yechimlarni joriy etamiz."
        },
        {
            icon: ShieldCheckIcon,
            title: "Shaffoflik va Ishonch",
            description: "Bizning barcha faoliyatimiz ochiqlik va ishonch tamoyillariga asoslanadi."
        },
        {
            icon: UserGroupIcon,
            title: "Hamjamiyat va Hamkorlik",
            description: "Biz tadbirkorlar o'rtasida mustahkam aloqalar o'rnatish va hamkorlikni rivojlantirishga intilamiz."
        }
    ];

    const team = [
        { name: "Akmal Rahmatov", role: "Boshqaruv Raisi", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop" },
        { name: "Dilnoza Karimova", role: "Loyiha Menejeri", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop" },
        { name: "Sardor Usmonov", role: "Yuridik Maslahatchi", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" },
        { name: "Nargiza Alimova", role: "Marketing bo'yicha mutaxassis", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop" },
    ];
    
    const faqData = [
        {
            q: '"KBU HUB" platformasi nima va u menga qanday yordam beradi?',
            a: '"KBU HUB" (Kichik Biznes Uyushmasi HUB) - bu O\'zbekistondagi kichik biznes vakillari uchun yagona raqamli platforma. Bu yerda siz biznesni ro\'yxatdan o\'tkazish, soliqlarni hisoblash, hujjatlar tayyorlash kabi 60 dan ortiq xizmatlardan foydalanishingiz, AI-yordamchidan maslahat olishingiz va biznesga oid so\'nggi yangiliklardan xabardor bo\'lishingiz mumkin.'
        },
        {
            q: 'YaTT (Yakka tartibdagi tadbirkor) va MChJ (Mas\'uliyati cheklangan jamiyat) o\'rtasida qanday farq bor?',
            a: 'Asosiy farqlar: **YaTT** - bir kishi tomonidan ochiladi, ro\'yxatdan o\'tish osonroq va arzonroq, lekin barcha majburiyatlar bo\'yicha o\'z mol-mulki bilan javobgar bo\'ladi. **MChJ** - bir yoki bir nechta ta\'sischi tomonidan ochiladi, majburiyatlar faqat jamiyatning ustav fondi doirasida bo\'ladi (cheklangan javobgarlik), buxgalteriyasi murakkabroq. Kichik biznesni boshlash uchun odatda YaTT qulayroq hisoblanadi.'
        },
        {
            q: 'Yangi biznes uchun qaysi soliq rejimini tanlagan ma\'qul?',
            a: 'Agar yillik aylanmangiz (tushumingiz) 1 mlrd so\'mdan oshmasa, siz uchun eng qulay rejim - **Aylanmadan olinadigan soliq**. Standart stavka 4% ni tashkil etadi va ayrim faoliyat turlari uchun pasaytirilgan stavkalar mavjud. Bu rejimda buxgalteriya hisobi ancha sodda bo\'ladi. Agar aylanma 1 mlrd so\'mdan oshsa, siz avtomatik ravishda QQS (Qo\'shilgan qiymat solig\'i) va Foyda solig\'i to\'lovchisiga aylanasiz.'
        },
        {
            q: 'Onlayn-kassadan (onlayn-NKM) foydalanish kimlar uchun majburiy?',
            a: 'Chakana savdo, umumiy ovqatlanish va aholiga pullik xizmat ko\'rsatuvchi deyarli barcha tadbirkorlik subyektlari uchun onlayn-kassa mashinalari yoki virtual kassalardan foydalanish majburiy hisoblanadi. Bu sizga naqd va naqdsiz to\'lovlarni qabul qilish, avtomatik tarzda soliq idoralariga hisobot yuborish imkonini beradi. O\'z faoliyatingiz turiga qarab, istisnolar mavjudligini soliq maslahatchisidan aniqlashtirgan ma\'qul.'
        },
        {
            q: 'Biznesim uchun davlatdan qanday yordam (grant, subsidiya) olishim mumkin?',
            a: 'O\'zbekistonda tadbirkorlarni qo\'llab-quvvatlash uchun bir nechta dasturlar mavjud. Masalan, "Har bir oila - tadbirkor" dasturi bo\'yicha imtiyozli kreditlar, Yoshlar ishlari agentligi tomonidan "Yoshlar daftari" orqali subsidiyalar, IT Park tomonidan startap-grantlar ajratiladi. Bizning platformamizdagi **"Moliyaviy yordam topish"** xizmati orqali o\'zingizga mos dasturlarni topishingiz mumkin.'
        }
    ];

    const developmentPlans = [
        {
            icon: IdentificationIcon,
            title: "Tadbirkor shaxsiy kabineti",
            points: [
                "Soliq, hisobot, grant va tadbirlar to‘g‘risida avtomatik eslatmalar.",
                "Biznes ko‘rsatkichlarini kuzatish paneli (aylanma, mijozlar, majburiyatlar)."
            ]
        },
        {
            icon: SparklesIcon,
            title: "Raqamli yordamchi xizmatlar",
            points: [
                "Tayyor shartnoma, biznes-reja, HR hujjatlar shablonlari.",
                "Avtomatik soliq va oylik hisob-kitob qilish imkoniyati."
            ]
        },
        {
            icon: UserGroupIcon,
            title: "Networking va hamkorlik",
            points: [
                "Tadbirkorlar uchun onlayn forum yoki yopiq guruh.",
                "B2B hamkor topish xizmati."
            ]
        },
        {
            icon: BanknotesIcon,
            title: "Moliyaviy xizmatlar",
            points: [
                "Grantlar va subsidiyalar onlayn bazasi.",
                "Banklar va kredit dasturlari reytingi.",
                "Kredit yuki kalkulyatori."
            ]
        },
        {
            icon: AcademicCapIcon,
            title: "Ta'lim va mentorlik",
            points: [
                "Onlayn kurslar: «Biznesni qanday boshlash», «Marketing», «Moliya».",
                "«Muvaffaqiyat hikoyalari» bo'limi va mentorlar ro'yxati."
            ]
        },
        {
            icon: GlobeAltIcon,
            title: "Xalqaro imkoniyatlar",
            points: [
                "Eksport bo'yicha yo'riqnoma: sertifikat, bojxona, sheriklar.",
                "Xorijiy bozorlar xaritasi va gid."
            ]
        }
    ];

    return (
        <div className="pt-4 bg-white">
            {/* Hero Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <TrophyIcon className="w-20 h-20 text-accent-gold mx-auto mb-6" />
                    <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-dark-gray mb-4">
                        Biz haqimizda
                    </h1>
                    <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
                        O'zbekiston kichik biznesini qo'llab-quvvatlash va rivojlantirish orqali mamlakat iqtisodiyotiga hissa qo'shish.
                    </p>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-24 bg-light-bg">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-6">Bizning Missiyamiz</h2>
                        <div className="space-y-4 text-lg text-medium-gray leading-relaxed">
                            <p>
                               Kichik Biznes Uyushmasining asosiy missiyasi – O‘zbekistondagi kichik va o‘rta biznes vakillari uchun qulay, shaffof va samarali biznes muhitini yaratishga ko‘maklashish.
                            </p>
                            <p>
                                Biz tadbirkorlarga o‘z faoliyatini boshlash, yuritish va kengaytirishning barcha bosqichlarida zarur bo‘lgan innovatsion raqamli vositalar, ishonchli ma’lumotlar va amaliy resurslar bilan ta’minlash orqali ularning raqobatbardoshligini oshirishni maqsad qilganmiz.
                            </p>
                        </div>
                    </div>
                    <Card className="p-10 shadow-xl">
                         <h2 className="text-4xl font-heading font-bold text-primary-green mb-6">Kelajakka Nazarimiz</h2>
                         <p className="text-lg text-medium-gray leading-relaxed">
                            Biz O‘zbekistonni Markaziy Osiyoda eng qulay va jozibador biznes muhitiga ega mamlakatga aylanishini tasavvur qilamiz. Bu yerda har bir tadbirkor o‘z g‘oyasini ortiqcha to‘siqlarsiz amalga oshira oladi va kichik biznes iqtisodiyotning asosiy harakatlantiruvchi kuchiga aylanadi.
                         </p>
                    </Card>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Bizning Qadriyatlarimiz</h2>
                        <p className="text-xl text-medium-gray">
                            Bizning barcha faoliyatimiz va qarorlarimiz quyidagi asosiy tamoyillarga asoslanadi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <Card key={value.title} className="p-8 text-center">
                                <div className="flex justify-center mb-5">
                                    <div className="bg-ultra-light-green text-primary-green rounded-xl p-5">
                                        <value.icon className="w-10 h-10"/>
                                    </div>
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                                <p className="text-medium-gray text-base">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
             {/* History and Achievements Section */}
            <section className="py-24 bg-light-bg">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Tariximiz va Yutuqlarimiz</h2>
                        <p className="text-xl text-medium-gray">
                            Uyushmamiz qisqa vaqt ichida tadbirkorlar uchun ishonchli hamkorga aylandi. Bizning yutuqlarimiz - bu sizning muvaffaqiyatingizdir.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <Card className="p-10">
                            <p className="text-6xl font-bold text-primary-green mb-2">10,000+</p>
                            <p className="font-semibold text-xl text-dark-gray">Faol A'zolar</p>
                            <p className="text-base text-medium-gray mt-2">O'zbekiston bo'ylab bizga ishongan tadbirkorlar soni.</p>
                        </Card>
                        <Card className="p-10">
                            <p className="text-6xl font-bold text-primary-green mb-2">50,000+</p>
                            <p className="font-semibold text-xl text-dark-gray">Ko'rsatilgan Xizmatlar</p>
                            <p className="text-base text-medium-gray mt-2">Platformamiz orqali muvaffaqiyatli yakunlangan operatsiyalar.</p>
                        </Card>
                        <Card className="p-10">
                            <p className="text-6xl font-bold text-primary-green mb-2">24/7</p>
                            <p className="font-semibold text-xl text-dark-gray">AI Yordamchi Maslahati</p>
                            <p className="text-base text-medium-gray mt-2">Sun'iy intellekt yordamchimiz tomonidan berilgan minglab javoblar.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
             <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Bizning Jamoamiz</h2>
                        <p className="text-xl text-medium-gray">
                            Biznesingiz muvaffaqiyati uchun o'z sohasining professionallari bo'lgan jamoamiz xizmatda.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map(member => (
                            <div key={member.name} className="text-center">
                                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-2xl ring-4 ring-white" />
                                <h3 className="text-2xl font-heading font-bold text-dark-gray">{member.name}</h3>
                                <p className="text-primary-green font-semibold text-lg">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-light-bg">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Ko'p Beriladigan Savollar (FAQ)</h2>
                        <p className="text-xl text-medium-gray">
                            Tadbirkorlik faoliyatiga oid eng dolzarb savollarga javoblar.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqData.map((faq, index) => (
                            <details key={index} className="p-6 rounded-2xl bg-white group cursor-pointer shadow-lg transition-all duration-300 open:bg-primary-green/5 open:shadow-xl" name="faq-accordion">
                                <summary className="font-semibold text-xl flex justify-between items-center text-dark-gray group-open:text-primary-green">
                                    {faq.q}
                                    <svg className="w-6 h-6 transition-transform transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-200 text-medium-gray text-base" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Development Plans Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Platformani Rivojlantirish Rejalari</h2>
                        <p className="text-xl text-medium-gray">
                            Biz doimiy ravishda rivojlanishdamiz va tadbirkorlar uchun yanada ko'proq qulayliklar yaratish ustida ishlamoqdamiz.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {developmentPlans.map(plan => (
                            <Card key={plan.title} className="p-8 h-full flex flex-col">
                                <div className="flex items-center gap-5 mb-5">
                                    <div className="bg-ultra-light-green text-primary-green p-4 rounded-xl flex-shrink-0">
                                        <plan.icon className="w-9 h-9"/>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-dark-gray">{plan.title}</h3>
                                </div>
                                <ul className="list-none space-y-3 text-medium-gray text-base flex-grow">
                                    {plan.points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;