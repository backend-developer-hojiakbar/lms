import React, { useState, useMemo } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';

const documentTemplates = {
    employment: {
        name: "Mehnat shartnomasi",
        fields: ['Xodim F.I.Sh.', 'Lavozimi', 'Ish haqi miqdori (so\'mda)', 'Ish boshlash sanasi'],
        template: (data: Record<string, string>) => `
**MEHNAT SHARTNOMASI №____**

Toshkent sh.                                                                        "${new Date().toLocaleDateString('uz-UZ')}"

Bundan buyon “Ish beruvchi” deb ataladigan **[Ish beruvchi korxona nomi]** nomidan Ustav asosida faoliyat yurituvchi direktor **[Direktor F.I.Sh]** bir tomondan, va bundan buyon “Xodim” deb ataladigan **${data['Xodim F.I.Sh.']}** ikkinchi tomondan, ushbu mehnat shartnomasini quyidagilar to‘g‘risida tuzdilar:

**1. SHARTNOMA PREDMETI**
1.1. Xodim **${data['Lavozimi']}** lavozimiga ishga qabul qilinadi.
1.2. Ish joyi: **[Korxona manzili]**.
1.3. Ishga kirish sanasi: **${data['Ish boshlash sanasi']}**.
1.4. Ushbu shartnoma nomuayyan muddatga tuzilgan.

**2. XODIMNING HUQUQ VA MAJBURIYATLARI**
2.1. Xodim o'z lavozim yo'riqnomasida belgilangan vazifalarni vijdonan bajarish majburiyatini oladi.
2.2. Xodim ichki mehnat tartibi qoidalariga rioya qilishi shart.

**3. ISH BERUVCHINING HUQUQ VA MAJBURIYATLARI**
3.1. Ish beruvchi Xodimga xavfsiz mehnat sharoitlarini yaratib beradi.
3.2. Ish beruvchi Xodimga oylik maoshni o'z vaqtida to'lash majburiyatini oladi.

**4. ISH HAQI**
4.1. Xodimga **${data['Ish haqi miqdori (so\'mda)']}** so'm miqdorida oylik maosh belgilanadi (soliqlar ushlanmagan holda).

**5. TOMONLARNING REKVIZITLARI**

**Ish beruvchi:**                                           **Xodim:**
_________________________                               _________________________
(imzo)                                                    (imzo)
`
    },
    service: {
        name: "Xizmat ko'rsatish shartnomasi",
        fields: ['Mijoz nomi', 'Xizmat tavsifi', 'Xizmat narxi (so\'mda)', 'Bajarilish muddati'],
        template: (data: Record<string, string>) => `
**XIZMAT KO'RSATISH SHARTNOMASI №____**

Toshkent sh.                                                                        "${new Date().toLocaleDateString('uz-UZ')}"

Bundan buyon “Ijrochi” deb yuritiluvchi **[Sizning Kompaniyangiz]** nomidan direktor **[Direktor F.I.Sh]** bir tomondan, va bundan buyon “Buyurtmachi” deb yuritiluvchi **${data['Mijoz nomi']}** ikkinchi tomondan, ushbu shartnomani quyidagilar haqida tuzdilar:

**1. SHARTNOMA PREDMETI**
1.1. Ijrochi Buyurtmachining topshirig‘iga binoan quyidagi xizmatlarni ko‘rsatish majburiyatini oladi: **${data['Xizmat tavsifi']}**.
1.2. Buyurtmachi esa ko'rsatilgan xizmatlarni qabul qilib olish va haqini to‘lash majburiyatini oladi.

**2. XIZMAT NARXI VA HISOB-KITOB TARTIBI**
2.1. Ushbu shartnoma bo‘yicha ko‘rsatiladigan xizmatlarning umumiy narxi **${data['Xizmat narxi (so\'mda)']}** so‘mni tashkil etadi.
2.2. To'lov [To'lov shartlari, masalan: 50% oldindan to'lov] asosida amalga oshiriladi.

**3. BAJARILISH MUDDATI**
3.1. Xizmatlar **${data['Bajarilish muddati']}** muddatigacha to'liq bajarilishi lozim.

**4. TOMONLARNING REKVIZITLARI**
`
    },
    offer: {
        name: "Ommaviy Oferta",
        fields: ['Xizmat/Mahsulot nomi', 'Narxi (so\'mda)', 'To\'lov shartlari', 'Bajarish/Yetkazib berish shartlari'],
        template: (data: Record<string, string>) => `
**OMMAVIY OFERTA**
(Xizmatlar ko'rsatish to'g'risidagi shartnomani tuzish bo'yicha taklif)

Toshkent sh.                                                                        "${new Date().toLocaleDateString('uz-UZ')}"

Ushbu hujjat **[Kompaniya nomi]**ning (bundan keyin "Ijrochi" deb yuritiladi) rasmiy taklifi (ommaviy oferta) bo'lib, har qanday jismoniy yoki yuridik shaxsga (bundan keyin "Buyurtmachi" deb yuritiladi) quyidagi shartlar asosida xizmat ko'rsatish shartnomasini tuzishni taklif qiladi.

**1. OFERTA PREDMETI**
1.1. Ijrochi quyidagi xizmat(lar)ni/mahsulot(lar)ni taqdim etish majburiyatini oladi: **${data['Xizmat/Mahsulot nomi']}**.
1.2. Buyurtmachi ushbu ofertani akseptlash (qabul qilish) orqali xizmatlarni olishga va ularning haqini to'lashga rozi bo'ladi.

**2. XIZMATLAR NARXI VA TO'LOV TARTIBI**
2.1. Xizmat(lar)/mahsulot(lar)ning narxi: **${data['Narxi (so\'mda)']}** so'mni tashkil qiladi.
2.2. To'lov shartlari: **${data['To\'lov shartlari']}**.
2.3. Ofertani akseptlash - bu Buyurtmachi tomonidan Ijrochining hisob raqamiga pul mablag'larini o'tkazishdir.

**3. XIZMATLARNI KO'RSATISH TARTIBI**
3.1. Xizmatlarni bajarish/mahsulotni yetkazib berish shartlari: **${data['Bajarish/Yetkazib berish shartlari']}**.

**4. IJROCHINING REKVIZITLARI**
Kompaniya nomi: **[Kompaniya nomi]**
Manzil: **[Kompaniya manzili]**
STIR: **[Kompaniya STIR raqami]**
Bank rekvizitlari: **[Bank rekvizitlari]**
`
    },
    letterOfCredit: {
        name: "Akkreditiv ochishga ariza",
        fields: ['Arizachi (Sotib oluvchi) nomi va STIR', 'Benefitsiar (Sotuvchi) nomi va STIR', 'Akkredativ summasi va valyutasi', 'Tovarlar/Xizmatlar tavsifi', 'Taqdim etiladigan hujjatlar ro\'yxati', 'Akkredativning amal qilish muddati'],
        template: (data: Record<string, string>) => `
**[BANK NOMI]GA**
**[BANK FILIALI]**

**AKKREDITIV OCHISH UCHUN ARIZA №____**

Sana: "${new Date().toLocaleDateString('uz-UZ')}"

**Arizachi (Applikant / Sotib oluvchi):**
Nomi: **${data['Arizachi (Sotib oluvchi) nomi va STIR']}**
Manzili: **[Arizachi manzili]**
Hisob raqami: **[Arizachi hisob raqami]**

Iltimos, bizning hisobimizdan qaytarib olinmaydigan hujjatli akkreditivni quyidagi shartlar asosida ochsangiz:

**Benefitsiar (Sotuvchi):**
Nomi: **${data['Benefitsiar (Sotuvchi) nomi va STIR']}**
Manzili: **[Benefitsiar manzili]**

**Akkredativ shartlari:**
1. Akkredativ summasi va valyutasi: **${data['Akkredativ summasi va valyutasi']}**.
2. Amal qilish muddati va joyi: **${data['Akkredativning amal qilish muddati']}**, [Amal qilish joyi, masalan, Toshkent sh.].
3. Tovarlar/Xizmatlarning qisqacha tavsifi: **${data['Tovarlar/Xizmatlar tavsifi']}**.
4. To'lovni amalga oshirish uchun taqdim etilishi lozim bo'lgan hujjatlar:
   - **${data['Taqdim etiladigan hujjatlar ro\'yxati']}** 
   (Masalan: Tijorat invoysi (3 nusxada), Yuk xati (konosament) va hokazo).
5. Barcha bank komissiyalari va xarajatlari **Arizachi** hisobidan to'lanadi.

Arizachi imzosi: _________________________
`
    }
};

type TemplateKey = keyof typeof documentTemplates;

const DocumentConstructorTool: React.FC = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateKey>('employment');
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [generatedDoc, setGeneratedDoc] = useState('');

    const currentTemplate = useMemo(() => documentTemplates[selectedTemplate], [selectedTemplate]);

    const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTemplate(e.target.value as TemplateKey);
        setFormData({});
        setGeneratedDoc('');
    };

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    const handleGenerate = () => {
        const docText = currentTemplate.template(formData);
        setGeneratedDoc(docText);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedDoc);
        alert("Hujjat matni nusxalandi!");
    };

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Interaktiv Hujjatlar Konstruktori</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Kerakli hujjat turini tanlang, maydonlarni to'ldiring va tayyor shablonni oling.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Step 1 & 2: Select and Fill */}
                <div className="space-y-6">
                    <Card className="p-6 bg-white">
                        <label htmlFor="template-select" className="block text-lg font-semibold text-dark-gray mb-2">1. Hujjat turini tanlang</label>
                        <select 
                            id="template-select"
                            value={selectedTemplate}
                            onChange={handleTemplateChange}
                            className="w-full p-3 bg-white border border-gray-200 rounded-md text-dark-gray"
                        >
                            {Object.keys(documentTemplates).map(key => (
                                <option key={key} value={key}>{documentTemplates[key as TemplateKey].name}</option>
                            ))}
                        </select>
                    </Card>
                    <Card className="p-6 bg-white">
                        <h4 className="text-lg font-semibold text-dark-gray mb-4">2. Ma'lumotlarni kiriting</h4>
                        <div className="space-y-4">
                            {currentTemplate.fields.map(field => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-medium-gray mb-1">{field}</label>
                                    <input 
                                        type="text"
                                        value={formData[field] || ''}
                                        onChange={handleInputChange(field)}
                                        className="w-full p-2 border rounded-md bg-white text-dark-gray"
                                    />
                                </div>
                            ))}
                        </div>
                         <Button onClick={handleGenerate} size="lg" className="w-full mt-6">Hujjatni Yaratish</Button>
                    </Card>
                </div>
                
                {/* Step 3: Result */}
                <Card className="p-6 bg-white">
                     <h4 className="text-lg font-semibold text-dark-gray mb-4">3. Tayyor Hujjat</h4>
                     <div className="bg-gray-50 p-4 rounded-md border h-[400px] overflow-y-auto whitespace-pre-wrap font-mono text-sm">
                        {generatedDoc || "Hujjat matni shu yerda paydo bo'ladi..."}
                     </div>
                     {generatedDoc && (
                         <Button onClick={handleCopy} variant="outline" className="w-full mt-4">
                             Matnni nusxalash
                         </Button>
                     )}
                </Card>
            </div>
        </Card>
    );
};

export default DocumentConstructorTool;