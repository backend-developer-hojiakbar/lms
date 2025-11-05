import React from 'react';
import { Page } from '../types';
import { FacebookIcon, InstagramIcon, TelegramIcon, XIcon, YouTubeIcon, QRCodeImage } from '../constants';

const Footer: React.FC = () => {
    const QuickLinks: { name: Page | string; href: string }[] = [
        { name: Page.Services, href: '#' },
        { name: Page.Education, href: '#' },
        { name: "FAQ", href: '#' },
        { name: Page.Appeals, href: '#' },
    ];
    
    const socialLinks = [
      { name: 'Telegram', href: 'https://t.me/minecofinuz', icon: TelegramIcon },
      { name: 'Facebook', href: 'http://facebook.com/mineconomfin', icon: FacebookIcon },
      { name: 'Instagram', href: 'https://instagram.com/minfinuzb?igshid=YmMyMTA2M2Y=', icon: InstagramIcon },
      { name: 'YouTube', href: 'https://www.youtube.com/channel/UCx1cbw2mBIfpYuTHoKHxBOw', icon: YouTubeIcon },
      { name: 'X', href: 'https://x.com/minecofinuz?s=21', icon: XIcon },
    ];

  return (
    <footer className="bg-gradient-to-b from-ultra-light-green to-white text-dark-gray border-t border-gray-200/50">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-heading font-bold mb-3 text-primary-green">Kichik Biznes Uyushmasi</h2>
            <p className="text-medium-gray text-sm leading-relaxed max-w-sm">Kichik biznes vakillari uchun yagona, universal raqamli platforma.</p>
             <div className="flex space-x-4 mt-6">
              {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" title={social.name} className="text-medium-gray hover:text-primary-green transition-colors transform hover:scale-110">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-heading font-semibold mb-3 text-dark-gray">Navigatsiya</h3>
            <ul className="space-y-2">
              {QuickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-medium-gray text-sm hover:text-primary-green transition-colors font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-heading font-semibold mb-3 text-dark-gray">Aloqa</h3>
            <address className="not-italic space-y-2 text-medium-gray font-medium text-sm">
                <p>Toshkent sh., Yakkasaroy tumani, Sh.Rustaveli ko'chasi, 8-uy</p>
                <p>kbu-2025@umail.uz</p>
                <p>+998 55 510 31 31</p>
            </address>
          </div>
          <div className="flex flex-col items-center lg:items-end">
             <div className="bg-white p-1 rounded-lg shadow-md border border-gray-100">
               <img src={QRCodeImage} alt="QR Code for social media" className="w-24 h-24 rounded-md" />
            </div>
             <p className="text-xs text-medium-gray text-center lg:text-right mt-2">Ijtimoiy tarmoqlarga <br/> tezkor o'tish.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200/80 pt-6 text-sm text-medium-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
              <p>&copy; {new Date().getFullYear()} Kichik Biznes Uyushmasi. Barcha huquqlar himoyalangan.</p>
              <div className="flex items-center gap-x-4">
                  <span className="font-semibold">Yaratuvchi: <a href="https://cdcgroup.uz" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">CDCGroup</a></span>
                  <span className="text-gray-300">|</span>
                  <span className="font-semibold">Qo'llab-quvvatlovchi: <a href="https://cdcgroup.uz" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">CraDev Company</a></span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;