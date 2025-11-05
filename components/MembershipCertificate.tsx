import React, { useRef } from 'react';
import { User } from '../types';
import Button from './common/Button';
import { KLogoIcon, QRCodeImage, ShareIcon } from '../constants';

declare const jspdf: any;
declare const html2canvas: any;

interface MembershipCertificateProps {
    user: User;
    onContinue: () => void;
    isModal?: boolean;
}

// Helper function to parse organization name
const parseOrganizationName = (name: string) => {
    const legalForms = [
        "MAS'ULIYATI CHEKLANGAN JAMIYAT",
        "MCHJ",
        "XUSUSIY KORXONA",
        "XK",
        "OILAVIY KORXONA",
        "OK",
    ];

    let mainName = name;
    let legalForm = '';
    
    const upperName = name.toUpperCase();
    for (const form of legalForms) {
        if (upperName.endsWith(` ${form}`)) {
            const formIndex = upperName.lastIndexOf(` ${form}`);
            mainName = name.substring(0, formIndex).trim();
            legalForm = name.substring(formIndex).trim();
            break;
        }
    }

    return { mainName, legalForm };
};


const MembershipCertificate: React.FC<MembershipCertificateProps> = ({ user, onContinue, isModal = true }) => {
    const certificateRef = useRef<HTMLDivElement>(null);
    const { mainName, legalForm } = parseOrganizationName(user.organizationName);

    const handleDownload = () => {
        if (certificateRef.current) {
            html2canvas(certificateRef.current, { scale: 2 }).then((canvas: any) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jspdf.jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [canvas.width, canvas.height]
                });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save(`KBU-Sertifikat-${user.id}.pdf`);
            });
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: 'Kichik Biznes Uyushmasi A\'zolik Sertifikati',
            text: `Men endi "Kichik Biznes Uyushmasi"ning rasmiy a'zosiman! Sertifikat raqami: ${user.id}`,
            url: window.location.href, // Or a direct link to a verification page
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert("Ulashish funksiyasi ushbu brauzerda qo'llab-quvvatlanmaydi. Nusxa olish uchun havolani o'zingiz ko'chirib olishingiz mumkin.");
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };
    
    const registrationDate = new Date();
    const expirationDate = new Date(registrationDate);
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    const formattedExpirationDate = expirationDate.toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' });


    const certificateContent = (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto flex flex-col">
            <div className='p-4 text-center border-b'>
                <h2 className="text-2xl font-heading font-bold text-dark-green mb-1">Tabriklaymiz!</h2>
                <p className="text-medium-gray">Siz "Kichik Biznes Uyushmasi"ning rasmiy a'zosiga aylandingiz!</p>
            </div>
            
            <div className="flex-grow p-4 bg-gray-100">
                <div ref={certificateRef} className="w-full bg-white p-2 mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
                    <div className="border-8 border-primary-green p-1 relative">
                        <div className="border-2 border-primary-green p-6 h-full flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <KLogoIcon className="w-12 h-12"/>
                                    <div>
                                        <p className="font-bold text-base text-dark-gray leading-tight">KICHIK BIZNES</p>
                                        <p className="text-sm text-dark-gray">UYUSHMASI</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center my-auto flex-grow flex flex-col justify-center py-4">
                                <h1 className="text-3xl font-bold text-dark-gray tracking-widest uppercase">A'zolik Sertifikati</h1>
                                <p className="text-medium-gray mt-2 text-base">№ {user.id}</p>
                                
                                <div className="my-6">
                                    <p className="text-3xl font-bold text-dark-gray">{mainName}</p>
                                    {legalForm && <p className="text-xl text-medium-gray mt-1">{legalForm}</p>}
                                </div>

                                <p className="text-base text-medium-gray">ИНН {user.stir}</p>
                                
                                <p className="text-lg font-bold text-primary-green mt-6">
                                    KICHIK BIZNES UYUSHMASI A'ZOSI HISOBLANADI
                                </p>
                            </div>

                            <div className="mt-4 flex justify-between items-end text-xs">
                                <div className="text-left">
                                    <p className="font-semibold text-dark-gray">Guvohnoma amal qilish muddati</p>
                                    <p className="text-base font-bold text-dark-gray">{formattedExpirationDate}</p>
                                    <p className="text-medium-gray">(Sana)</p>
                                </div>
                                <div className="text-center">
                                    <img src={QRCodeImage} alt="QR Code" className="w-20 h-20 border p-0.5"/>
                                    <p className="text-xs text-medium-gray mt-1">Guvohnomani tekshirish</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-b-2xl">
                <Button onClick={handleDownload} variant="outline" size="md">Yuklab olish (PDF)</Button>
                <Button onClick={handleShare} variant="outline" size="md" className="border-accent-gold text-accent-gold hover:bg-amber-400 hover:border-amber-400 hover:text-white focus:ring-accent-gold">
                    <ShareIcon className="w-5 h-5 mr-2" />
                    Ulashish
                </Button>
                <Button onClick={onContinue} variant="primary" size="lg">Davom etish</Button>
            </div>
        </div>
    );

    if (isModal) {
        return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                {certificateContent}
            </div>
        );
    }

    return certificateContent;
};

export default MembershipCertificate;