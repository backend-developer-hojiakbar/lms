import React, { useState } from 'react';

const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  // The text needs to be duplicated to create the seamless loop effect
  const bannerText = "DIQQAT! Kichik Biznes Uyushmasining yangi platformasi sinov (demo) rejimida ishlamoqda. Taklif va kamchiliklar yuzasidan murojaat uchun telefon: +998 (94) 743-09-12";

  return (
    <div className="bg-error-red text-white text-sm font-semibold relative overflow-hidden animate-pulse-bg z-50">
      <div className="w-full flex items-center">
        <div className="flex-grow p-2 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-12">{bannerText}</span>
            <span className="mx-12">{bannerText}</span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 bg-red-700/50 hover:bg-red-700 rounded-full p-1 mx-2"
          aria-label="Yopish"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
