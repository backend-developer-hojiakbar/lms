import React, { useState } from 'react';
import Button from './common/Button';
import { Page } from '../types';
import { NavLinks, Bars3Icon, XMarkIcon } from '../constants';

interface HeaderProps {
  activePage: Page;
  navigateTo: (page: Page) => void;
  isLoggedIn: boolean;
}

const KichikBiznesUyushmasiLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 560 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#10B981'}} />
                <stop offset="100%" style={{stopColor: '#059669'}} />
            </linearGradient>
        </defs>
        
        <g>
            <path d="M 20,0 H 45 C 35,33 35,67 45,100 H 20 Z" fill="url(#logoGradient)"/>
            <path d="M 95,0 L 55,42 V 58 L 95,100 H 115 L 75,50 L 115,0 Z" fill="url(#logoGradient)"/>
        </g>

        <text style={{fontFamily: "'Times New Roman', Times, serif", fill: '#065F46'}}>
            <tspan x="140" y="48" fontSize="42" fontWeight="600" letterSpacing="-0.5">KICHIK BIZNES</tspan>
            <tspan x="140" y="88" fontSize="34" fontWeight="400">UYUSHMASI</tspan>
        </text>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ activePage, navigateTo, isLoggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (page: Page) => {
        navigateTo(page);
        setIsMobileMenuOpen(false);
    };
    
    const getLinkClasses = (pageName: Page) => {
        const baseClasses = 'font-heading font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap';
        if (activePage === pageName) {
            return `${baseClasses} bg-white text-primary-green shadow-md`;
        }
        return `${baseClasses} text-medium-gray hover:bg-white/60 hover:text-dark-gray`;
    };

    const getMobileLinkClasses = (pageName: Page) => {
        const baseClasses = 'font-heading font-semibold text-lg p-4 rounded-xl block text-center';
        if (activePage === pageName) {
            return `${baseClasses} bg-ultra-light-green text-primary-green shadow-sm`;
        }
        return `${baseClasses} text-medium-gray hover:bg-gray-100`;
    };


    return (
        <>
            <header className="bg-white/60 backdrop-blur-lg sticky top-0 z-50 border-b border-white/30 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => handleNavClick(Page.Home)}>
                        <KichikBiznesUyushmasiLogo className="h-9 w-auto" />
                    </div>
                    
                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-1 bg-gray-500/10 backdrop-blur-sm rounded-full p-1.5 border border-white/30 shadow-inner">
                        {NavLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.name);
                            }}
                            className={getLinkClasses(link.name)}
                        >
                            {link.name}
                        </a>
                        ))}
                         {/* Separator */}
                        <div className="h-5 w-px bg-gray-300/60 mx-2"></div>
                        <a href="#" onClick={(e) => { e.preventDefault(); alert('Kirish funksiyasi hali mavjud emas.'); }} className="font-heading font-semibold text-sm px-4 py-2 rounded-full text-medium-gray hover:bg-white/60 hover:text-dark-gray">Kirish</a>
                        <Button variant="primary" size="sm" onClick={() => handleNavClick(Page.Membership)} className="shadow-md text-sm px-5 py-2">A'zo bo'lish</Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 rounded-md text-medium-gray hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary-green"
                            aria-label="Open menu"
                        >
                            <Bars3Icon className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Panel */}
            <div 
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Overlay */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
                
                {/* Menu Content */}
                <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="font-heading font-bold text-xl text-dark-gray">Menyu</h2>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-md text-medium-gray hover:bg-gray-200"
                                aria-label="Close menu"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-4">
                            {NavLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.name);
                                    }}
                                    className={getMobileLinkClasses(link.name)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="mt-auto pt-6 border-t border-gray-200 space-y-4">
                            <Button variant="outline" size="md" className="w-full" onClick={(e) => { e.preventDefault(); alert('Kirish funksiyasi hali mavjud emas.'); }}>Kirish</Button>
                            <Button variant="primary" size="md" className="w-full" onClick={() => handleNavClick(Page.Membership)}>A'zo bo'lish</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;