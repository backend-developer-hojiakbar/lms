import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const faqData = {
    "Soliq masalalari": [
        { q: "YaTT qanday soliqlar to'laydi?", a: "Yakka tartibdagi tadbirkorlar asosan aylanmadan olinadigan soliq (stavkasi 4%) yoki qat'iy belgilangan miqdordagi jismoniy shaxslardan olinadigan daromad solig'ini to'laydilar." },
        { q: "QQS nima va kimlar to'laydi?", a: "Qo'shilgan qiymat solig'i (QQS) - bu tovar va xizmatlar narxiga qo'shiladigan bilvosita soliq. Yillik aylanmasi 1 mlrd so'mdan oshgan korxonalar QQS to'lovchisi hisoblanadi. Standart stavka - 12%." },
    ],
    "Mehnat huquqi": [
        { q: "Xodimni ishga olishda qanday hujjatlar kerak?", a: "Xodimni ishga olish uchun pasport, mehnat daftarchasi (agar mavjud bo'lsa), diplom (agar talab etilsa) va ishga qabul qilish haqida ariza kerak bo'ladi. Ish beruvchi buyruq chiqaradi va mehnat shartnomasi tuziladi." },
    ],
    "Shartnomalar": [
        { q: "Shartnomada nimalarga e'tibor berish kerak?", a: "Shartnomada tomonlarning to'liq rekvizitlari, shartnoma predmeti (nima haqida ekanligi), tomonlarning huquq va majburiyatlari, narxi va hisob-kitob tartibi, javobgarlik choralari va nizoning hal etish tartibi aniq ko'rsatilishi kerak." },
    ]
};

type Category = keyof typeof faqData;

const LegalAdvicePlatform: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("Soliq masalalari");
    const [question, setQuestion] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(question.trim()){
            setIsSubmitted(true);
        }
    };

    return (
         <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Yuridik Maslahat Platformasi</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Biznesingizga oid huquqiy savollaringizga javob toping. Tez-tez so'raladigan savollarni o'rganing yoki o'z savolingizni yuristga yuboring.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* FAQ Section */}
                <div className="lg:col-span-2">
                    <Card className="p-6 bg-white">
                        <h4 className="text-lg font-semibold text-dark-gray mb-4">Mavzuni tanlang:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {Object.keys(faqData).map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat as Category)}
                                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory === cat ? 'bg-primary-green text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-dark-gray mb-4">{activeCategory} bo'yicha savollar</h4>
                        <div className="space-y-4">
                            {faqData[activeCategory].map((item, index) => (
                                <details key={index} className="p-4 border rounded-lg bg-light-gray group" name="faq-accordion">
                                    <summary className="font-semibold cursor-pointer text-dark-gray">{item.q}</summary>
                                    <p className="mt-2 pt-2 border-t text-medium-gray text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Ask a Lawyer Form */}
                <div>
                    <Card className="p-6 bg-white sticky top-28">
                        <h4 className="text-lg font-semibold text-dark-gray mb-4 text-center">Yuristga savol bering</h4>
                        {isSubmitted ? (
                            <div className="text-center p-4 bg-green-50 rounded-md">
                                <h5 className="font-bold text-green-800">So'rovingiz qabul qilindi!</h5>
                                <p className="text-sm text-green-700 mt-2">Yuristlarimiz tez orada siz ko'rsatgan aloqa ma'lumotlari orqali javob berishadi.</p>
                                <Button size="sm" variant="outline" className="mt-4" onClick={() => {setIsSubmitted(false); setQuestion('')}}>Yangi savol berish</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="legal-question" className="sr-only">Savolingiz</label>
                                    <textarea 
                                        id="legal-question" 
                                        rows={6}
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder="Savolingizni iloji boricha batafsil yozing..."
                                        className="w-full p-3 border rounded-md bg-white text-dark-gray"
                                        required
                                    />
                                </div>
                                 <div>
                                    <label htmlFor="user-email" className="text-sm text-medium-gray">Email yoki telefon raqamingiz</label>
                                    <input type="text" id="user-email" required placeholder="Javobni yuborish uchun" className="w-full p-2 mt-1 border rounded-md bg-white text-dark-gray" />
                                </div>
                                <Button type="submit" className="w-full">Yuborish</Button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
         </Card>
    );
};

export default LegalAdvicePlatform;