import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface PublicOfferModalProps {
    onAccept: () => void;
}

const PublicOfferModal: React.FC<PublicOfferModalProps> = ({ onAccept }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in">
            <Card className="w-full max-w-4xl h-[90vh] flex flex-col p-0 shadow-2xl border-2 border-white/20">
                <header className="p-4 border-b bg-gradient-to-b from-white to-light-bg/50 rounded-t-2xl flex-shrink-0">
                    <h2 className="text-xl font-heading font-bold text-dark-gray text-center">OMMAVIY OFERTA</h2>
                    <p className="text-center text-medium-gray text-xs">(Xizmatlar ko‘rsatish to‘g‘risida)</p>
                </header>

                <div className="flex-grow px-6 py-2 overflow-y-auto text-xs text-medium-gray space-y-2 leading-relaxed">
                    <p>Ushbu hujjat, “Kichik biznes uyushmasi” MCHJ (keyingi o‘rinlarda – “Ijrochi”)ning rasmiy taklifi (ommaviy oferta) hisoblanib, unda Ijrochining veb-sayti (keyingi o‘rinlarda – “Sayt”) orqali har qanday jismoniy yoki yuridik shaxsga (keyingi o‘rinlarda – “Foydalanuvchi”) axborot va maslahat xizmatlarini ko‘rsatishning barcha muhim shartlari bayon etilgan.</p>
                    <p className="font-bold text-dark-gray">Diqqat! Saytda ro‘yxatdan o‘tish yoki uning xizmatlaridan foydalanishdan oldin ushbu Oferta shartlarini diqqat bilan o‘qib chiqing.</p>
                    
                    <h3 className="font-bold text-dark-gray pt-1 text-sm">1. Atamalar va ta’riflar</h3>
                    <p>1.1. Oferta – Ijrochining ushbu hujjatda bayon etilgan shartlar asosida har qanday shaxs bilan xizmat ko‘rsatish shartnomasini tuzish haqidagi rasmiy taklifi.</p>
                    <p>1.2. Aksept – Foydalanuvchi tomonidan Oferta shartlarining to‘liq va so‘zsiz qabul qilinishi. Aksept Saytdan foydalanishni boshlash yoki ro‘yxatdan o‘tish orqali amalga oshiriladi.</p>
                    
                    <h3 className="font-bold text-dark-gray pt-1 text-sm">2. Umumiy qoidalar</h3>
                    <p>2.1. Foydalanuvchi Saytdan foydalanishni boshlashi bilan ushbu Oferta shartlariga to‘liq va so‘zsiz qo‘shilgan hisoblanadi.</p>
                    <p>2.2. Ijrochi istalgan vaqtda Oferta shartlariga bir tomonlama o‘zgartirish kiritish huquqiga ega. O‘zgartirishlar Saytda e’lon qilingan paytdan e’tiboran kuchga kiradi.</p>
                    
                    <h3 className="font-bold text-dark-gray pt-1 text-sm">3. Xizmatlar ko‘rsatish tartibi</h3>
                    <p>3.1. Saytdagi xizmatlar “qanday bo‘lsa, shunday” (“as is”) tamoyili asosida taqdim etiladi. Ijrochi xizmatlarning Foydalanuvchi maqsadlariga to‘liq mos kelishiga kafolat bermaydi.</p>

                    <h3 className="font-bold text-dark-gray pt-1 text-sm">4. Tomonlarning huquq va majburiyatlari</h3>
                    <p>4.1. Foydalanuvchi Oferta shartlariga qat’iy rioya qilish majburiyatini oladi va Saytdan O‘zbekiston Respublikasi qonunchiligiga zid maqsadlarda foydalanmasligi kerak.</p>

                    <h3 className="font-bold text-dark-gray pt-1 text-sm">5. Shaxsiy ma’lumotlarni qayta ishlash</h3>
                    <p>5.1. Foydalanuvchi ushbu Ofertani akseptlash orqali o‘zining shaxsiy ma’lumotlarini (shu jumladan, korxona rekvizitlari, STIR, F.I.Sh., telefon raqami, e-mail) yig‘ish, saqlash, qayta ishlash va ulardan foydalanishga o‘zining so‘zsiz roziligini beradi.</p>
                    <p>5.2. Shaxsiy ma’lumotlarni qayta ishlashdan maqsad – Foydalanuvchiga xizmatlar ko‘rsatish, Sayt faoliyatini yaxshilash va Foydalanuvchiga yangi xizmatlar haqida xabar berishdir.</p>
                    
                    <h3 className="font-bold text-dark-gray pt-1 text-sm">6. Javobgarlik</h3>
                    <p>6.1. Saytdagi barcha ma’lumotlar tavsiyaviy xarakterga ega bo‘lib, Foydalanuvchi ularni qo‘llash bo‘yicha yakuniy qarorni mustaqil qabul qiladi va yuzaga kelishi mumkin bo‘lgan har qanday xavf va oqibatlar uchun to‘liq javobgarlikni o‘z zimmasiga oladi.</p>

                </div>

                <footer className="p-4 border-t bg-light-bg/50 rounded-b-2xl flex-shrink-0">
                    <div className="flex items-center mb-4">
                        <input
                            id="offer-accept-checkbox"
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="h-4 w-4 rounded border-gray-300 text-primary-green focus:ring-primary-green"
                        />
                        <label htmlFor="offer-accept-checkbox" className="ml-2 block text-xs text-dark-gray">
                            Men <span className="font-bold">Ommaviy oferta</span> shartlarini o'qib chiqdim va ularga to'liq roziman, shu jumladan shaxsiy ma'lumotlarimni qayta ishlashga rozilik bildiraman.
                        </label>
                    </div>
                    <Button
                        onClick={onAccept}
                        disabled={!isChecked}
                        size="md"
                        className="w-full"
                    >
                        Qabul qilish va Davom etish
                    </Button>
                </footer>
            </Card>
        </div>
    );
};

export default PublicOfferModal;
