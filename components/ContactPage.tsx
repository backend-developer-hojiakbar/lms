import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';

const PhoneIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EnvelopeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const MapPinIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const ClipboardDocumentCheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6H8.25A2.25 2.25 0 006 8.25v12A2.25 2.25 0 008.25 22.5h7.5A2.25 2.25 0 0018 20.25V8.25A2.25 2.25 0 0015.75 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 006 3.75v.75h9v-.75zM9 12.75L11.25 15 15 9.75" />
    </svg>
);


const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({...prev, [id]: value}));
        if (id === 'message' && value.trim()) {
            setError('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.message.trim()) {
            setError("Iltimos, xabaringizni kiriting.");
            return;
        }
        setError('');
        setFormSubmitted(true);
    };

  return (
    <div className="bg-light-bg">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">
            Biz bilan <span className="text-primary-green">bog'laning</span>
          </h2>
          <p className="text-lg text-medium-gray mb-12">
            Savollaringiz, takliflaringiz yoki hamkorlik bo'yicha murojaatlaringiz bormi? Biz bilan bog'laning, biz sizga yordam berishdan mamnunmiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-6" shadow={false}>
                <div className="bg-ultra-light-green text-primary-green rounded-lg p-3">
                    <MapPinIcon className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-lg font-heading font-semibold text-dark-gray">Manzilimiz</h3>
                    <p className="text-medium-gray">Toshkent shahri Yakkasaroy tumani Sh.Rustaveli ko'chasi 8 uy</p>
                </div>
            </Card>
            <Card className="p-6 flex items-start gap-6" shadow={false}>
                <div className="bg-ultra-light-green text-primary-green rounded-lg p-3">
                    <PhoneIcon className="w-8 h-8" />
                </div>
                 <div>
                    <h3 className="text-lg font-heading font-semibold text-dark-gray">Telefon raqam</h3>
                    <p className="text-medium-gray">+998 55 510 31 31</p>
                </div>
            </Card>
             <Card className="p-6 flex items-start gap-6" shadow={false}>
                <div className="bg-ultra-light-green text-primary-green rounded-lg p-3">
                    <EnvelopeIcon className="w-8 h-8" />
                </div>
                 <div>
                    <h3 className="text-lg font-heading font-semibold text-dark-gray">Elektron Aloqa</h3>
                     <div className="mt-2 space-y-1 text-medium-gray">
                        <p><strong>Umail:</strong> kbu-2025@umail.uz</p>
                        <p><strong>E-XAT:</strong> KBU25@exat.uz</p>
                    </div>
                </div>
            </Card>
            <Card className="p-6 flex items-start gap-6" shadow={false}>
                <div className="bg-ultra-light-green text-primary-green rounded-lg p-3">
                    <ClipboardDocumentCheckIcon className="w-8 h-8" />
                </div>
                 <div>
                    <h3 className="text-lg font-heading font-semibold text-dark-gray">Tashkilot Rekvizitlari</h3>
                    <div className="mt-2 space-y-1 text-medium-gray">
                        <p><strong>STIR (INN):</strong> 555103131</p>
                        <p><strong>EDO:</strong> Kichik biznes uyushmasi</p>
                    </div>
                </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            {formSubmitted ? (
                 <div className="bg-accent-green/10 border-l-4 border-accent-green text-accent-green p-6 rounded-md text-center">
                    <h4 className="font-bold text-xl mb-2">Rahmat!</h4>
                    <p>Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4">Murojaat yuborish</h3>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-1">To'liq ismingiz</label>
                        <input type="text" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-2 bg-white text-dark-gray border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-green focus:border-primary-green placeholder-gray-400" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-medium-gray mb-1">Elektron pochta</label>
                        <input type="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 bg-white text-dark-gray border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-green focus:border-primary-green placeholder-gray-400" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-medium-gray mb-1">Xabaringiz</label>
                        <textarea 
                            id="message" 
                            rows={5} 
                            value={formData.message}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 bg-white text-dark-gray border rounded-md shadow-sm focus:outline-none focus:ring-primary-green placeholder-gray-400 transition-colors ${error ? 'border-error-red focus:border-error-red focus:ring-error-red' : 'border-gray-300 focus:border-primary-green'}`} 
                        />
                        {error && <p className="text-sm text-error-red mt-1">{error}</p>}
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">Yuborish</Button>
                </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;