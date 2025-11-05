import React, { useState, useMemo } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

type SupportType = 'Kredit' | 'Subsidiya' | 'Grant';
type BusinessArea = 'Qishloq xo\'jaligi' | 'Ishlab chiqarish' | 'Xizmat ko\'rsatish' | 'IT' | 'Ayollar tadbirkorligi' | 'Yoshlar tadbirkorligi';

interface Program {
    id: number;
    title: string;
    type: SupportType;
    area: BusinessArea[];
    description: string;
    organization: string;
    maxAmount: string;
}

const allPrograms: Program[] = [
    { id: 1, title: "'Har bir oila - tadbirkor' imtiyozli krediti", type: 'Kredit', area: ['Qishloq xo\'jaligi', 'Ishlab chiqarish', 'Xizmat ko\'rsatish'], description: "Aholi bandligini ta'minlash va oilaviy tadbirkorlikni rivojlantirish uchun yillik 14% stavkada ajratiladigan kredit.", organization: "Tijorat banklari", maxAmount: "33 mln so'mgacha" },
    { id: 2, title: "Yoshlar daftari subsidiyalari", type: 'Subsidiya', area: ['Yoshlar tadbirkorligi', 'Xizmat ko\'rsatish', 'Ishlab chiqarish'], description: "Yosh tadbirkorlarga asbob-uskuna, xomashyo xarid qilish uchun BHMning 40 baravarigacha qaytarilmaydigan subsidiya.", organization: "Yoshlar ishlari agentligi", maxAmount: "~13 mln so'm" },
    { id: 3, title: "IT Park startap-grantlari", type: 'Grant', area: ['IT'], description: "Innovatsion IT-loyihalarni amalga oshirish uchun tanlov asosida ajratiladigan bepul mablag'lar.", organization: "IT Park Uzbekistan", maxAmount: "100 mln so'mgacha" },
    { id: 4, title: "Xotin-qizlar tadbirkorligini qo'llab-quvvatlash", type: 'Kredit', area: ['Ayollar tadbirkorligi', 'Xizmat ko\'rsatish', 'Ishlab chiqarish'], description: "Ayollar tomonidan amalga oshirilayotgan biznes loyihalarni moliyalashtirish uchun imtiyozli kreditlar.", organization: "Xalq banki, Mikrokreditbank", maxAmount: "33 mln so'mgacha" },
    { id: 5, title: "Eksportni rag'batlantirish agentligi subsidiyalari", type: 'Subsidiya', area: ['Ishlab chiqarish'], description: "Xalqaro standartlarni joriy etish va sertifikatlash xarajatlarining bir qismini qoplash uchun subsidiya.", organization: "Eksportni rag'batlantirish agentligi", maxAmount: "Xarajatlarga bog'liq" },
];


const FinancialSupportFinder: React.FC = () => {
    const [filters, setFilters] = useState({
        type: 'Barchasi',
        area: 'Barchasi'
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    };

    const filteredPrograms = useMemo(() => {
        return allPrograms.filter(program => {
            const typeMatch = filters.type === 'Barchasi' || program.type === filters.type;
            const areaMatch = filters.area === 'Barchasi' || program.area.includes(filters.area as BusinessArea);
            return typeMatch && areaMatch;
        });
    }, [filters]);

    return (
        <Card className="p-6 bg-light-gray">
            <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 text-center">Moliyaviy Yordam Topish Vosiyasi</h3>
            <p className="text-medium-gray mb-6 text-center max-w-xl mx-auto">Biznesingiz uchun eng mos keluvchi davlat dasturlari, grantlar, subsidiyalar va imtiyozli kreditlarni toping.</p>

            <Card className="p-4 bg-white mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="type-filter" className="block text-sm font-medium text-medium-gray mb-1">Yordam turi</label>
                        <select id="type-filter" name="type" value={filters.type} onChange={handleFilterChange} className="w-full p-2 border rounded-md bg-white">
                            <option>Barchasi</option>
                            <option>Kredit</option>
                            <option>Subsidiya</option>
                            <option>Grant</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="area-filter" className="block text-sm font-medium text-medium-gray mb-1">Faoliyat sohasi</label>
                        <select id="area-filter" name="area" value={filters.area} onChange={handleFilterChange} className="w-full p-2 border rounded-md bg-white">
                            <option>Barchasi</option>
                            <option>Qishloq xo'jaligi</option>
                            <option>Ishlab chiqarish</option>
                            <option>Xizmat ko'rsatish</option>
                            <option>IT</option>
                            <option>Ayollar tadbirkorligi</option>
                            <option>Yoshlar tadbirkorligi</option>
                        </select>
                    </div>
                </div>
            </Card>

            <div>
                <h4 className="font-bold mb-4">{filteredPrograms.length} ta dastur topildi</h4>
                <div className="space-y-4">
                    {filteredPrograms.length > 0 ? filteredPrograms.map(program => (
                        <Card key={program.id} className="p-5 bg-white transition-all hover:shadow-xl hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${program.type === 'Kredit' ? 'bg-blue-100 text-blue-800' : program.type === 'Subsidiya' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{program.type}</span>
                                        <h4 className="text-lg font-heading font-bold text-dark-gray">{program.title}</h4>
                                    </div>
                                    <p className="text-sm text-medium-gray max-w-2xl">{program.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {program.area.map(a => <span key={a} className="text-xs bg-gray-200 px-2 py-0.5 rounded">{a}</span>)}
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:text-right flex-shrink-0 sm:pl-4">
                                    <p className="text-sm text-gray-500">Maks. miqdor:</p>
                                    <p className="font-bold text-primary-green">{program.maxAmount}</p>
                                    <p className="text-xs text-gray-500 mt-2">Tashkilot: {program.organization}</p>
                                </div>
                            </div>
                        </Card>
                    )) : (
                        <Card className="p-8 text-center text-medium-gray bg-white">
                            <p>Afsuski, sizning filtringizga mos dasturlar topilmadi. Boshqa variantlarni sinab ko'ring.</p>
                        </Card>
                    )}
                </div>
            </div>

        </Card>
    );
};

export default FinancialSupportFinder;