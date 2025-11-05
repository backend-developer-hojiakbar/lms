import React from 'react';
import { Page, Service, NewsArticle, ServiceCategory, EducationResource, Integration, FAQ } from './types';

// SVG Icons as React Components (Heroicons v2 Solid)
export const BriefcaseIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M7.5 5.25A2.25 2.25 0 019.75 3h4.5a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0v-.75z" clipRule="evenodd" /><path d="M6 10.5a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" /><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 013 6V4.5a3 3 0 013-3h12a3 3 0 013 3V6a.75.75 0 01-1.5 0V4.5a1.5 1.5 0 00-1.5-1.5h-12A1.5 1.5 0 004.5 4.5V6a.75.75 0 01-.75.75zm15.75 3a.75.75 0 01.75.75v6a3 3 0 01-3 3H7.5a3 3 0 01-3-3v-6a.75.75 0 011.5 0v6a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-6a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
);
export const CheckBadgeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12c0 1.357-.6 2.573-1.549 3.397a4.49 4.49 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
);
export const DocumentTextIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 009 3H5.625zM12.75 12.75a.75.75 0 000-1.5H8.25a.75.75 0 000 1.5h4.5zM10.5 15.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /><path d="M14.25 9.75a.375.375 0 00-.375-.375V6.375c0-1.036.84-1.875 1.875-1.875h1.875v1.875c0 1.036-.84 1.875-1.875 1.875h-1.5z" /></svg>
);
export const ChartBarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 4.5a.75.75 0 00-1.5 0v15a.75.75 0 001.5 0v-15z" /><path d="M4.5 10.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" /><path fillRule="evenodd" d="M2.25 6a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM16.5 13.5a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6z" clipRule="evenodd" /></svg>
);
export const ScaleIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.528 1.928A.75.75 0 016 1.5h12a.75.75 0 01.472.428l3.646 7.292a.75.75 0 010 .658l-3.646 7.292A.75.75 0 0118 17.5H6a.75.75 0 01-.472-.428l-3.646-7.292a.75.75 0 010-.658l3.646-7.292zM12 21a.75.75 0 01-.75-.75v-2.134a.75.75 0 011.5 0v2.134A.75.75 0 0112 21z" clipRule="evenodd" /><path d="M8.25 18a.75.75 0 01-.75-.75v-1.134a.75.75 0 011.5 0v1.134a.75.75 0 01-.75.75zm7.5 0a.75.75 0 01-.75-.75v-1.134a.75.75 0 011.5 0v1.134a.75.75 0 01-.75.75z" /></svg>
);
export const CalculatorIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.25 3A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25zm.75 4.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM9 12a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3A.75.75 0 019 12zm-3 3.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zm6.75-3a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zm3.75-3.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0V8.25z" clipRule="evenodd" /></svg>
);
export const MegaphoneIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 1.75a.75.75 0 00-1.5 0V3h-2.25a.75.75 0 000 1.5H9V6H6.75a.75.75 0 000 1.5H9v1.5H7.5a.75.75 0 000 1.5H9V12H6a.75.75 0 000 1.5H9v1.5H6.75a.75.75 0 000 1.5H9V18H7.5a.75.75 0 000 1.5H9v1.5h1.5v1.25a.75.75 0 001.5 0V21h2.25a.75.75 0 000-1.5H12V18h2.25a.75.75 0 000-1.5H12v-1.5h1.5a.75.75 0 000-1.5H12V12h3a.75.75 0 000-1.5H12V9h2.25a.75.75 0 000-1.5H12V6h1.5a.75.75 0 000-1.5H12V3h-1.5V1.75z" /><path fillRule="evenodd" d="M3.75 6a3 3 0 00-3 3v6a3 3 0 003 3h.75a.75.75 0 000-1.5H3.75a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h.75a.75.75 0 000-1.5H3.75zM20.25 6h-.75a.75.75 0 000 1.5h.75a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-.75a.75.75 0 000 1.5h.75a3 3 0 003-3v-6a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
);
export const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 6.375a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zM4.5 10.125a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zM5.25 13.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" /><path fillRule="evenodd" d="M18.75 2.25c.38 0 .721.233.882.584l1.106 2.441a.75.75 0 01-.282.934l-3 2.001a.75.75 0 01-.935-.281l-1.105-2.442a.75.75 0 01.282-.934l3-2.001zm-3.328 16.425a.75.75 0 01.282.934l-1.105 2.442a.75.75 0 01-.935.281l-3-2.001a.75.75 0 01-.282-.934l1.106-2.441a.75.75 0 01.934-.282l3 2.001zM14.625 9.75a.75.75 0 00-1.5 0v.041a3.004 3.004 0 00-2.032 2.032.75.75 0 001.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H12.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h.041a3.004 3.004 0 002.032-2.032.75.75 0 000-1.5v-.041a1.502 1.502 0 01-1.016-1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H18a.75.75 0 00.75-.75V2.25z" clipRule="evenodd" /></svg>
);
export const UserGroupIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 6.375a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zM4.5 10.125a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zM5.25 13.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" /><path fillRule="evenodd" d="M18.75 2.25c.38 0 .721.233.882.584l1.106 2.441a.75.75 0 01-.282.934l-3 2.001a.75.75 0 01-.935-.281l-1.105-2.442a.75.75 0 01.282-.934l3-2.001zm-3.328 16.425a.75.75 0 01.282.934l-1.105 2.442a.75.75 0 01-.935.281l-3-2.001a.75.75 0 01-.282-.934l1.106-2.441a.75.75 0 01.934-.282l3 2.001zM14.625 9.75a.75.75 0 00-1.5 0v.041a3.004 3.004 0 00-2.032 2.032.75.75 0 001.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H12.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h.041a3.004 3.004 0 002.032-2.032.75.75 0 000-1.5v-.041a1.502 1.502 0 01-1.016-1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H.75a.75.75 0 000 1.5h.041a3.004 3.004 0 002.032 2.032.75.75 0 000 1.5v.041a1.502 1.502 0 01-1.016 1.016.75.75 0 00-1.5 0h-.041a3.004 3.004 0 00-2.032-2.032.75.75 0 00-1.5 0v-.041a1.502 1.502 0 011.016-1.016.75.75 0 000-1.5H18a.75.75 0 00.75-.75V2.25z" clipRule="evenodd" /></svg>
);
export const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.25 4.533A9.708 9.708 0 001.5 6.75v10.5a9.708 9.708 0 009.75-2.217V4.533z" /><path d="M12.75 4.533V15.033a9.708 9.708 0 009.75 2.217V6.75a9.708 9.708 0 00-9.75-2.217z" /></svg>
);
export const RocketLaunchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.412 4.022c.284-.463.88-.622 1.344-.338l1.132.693a3.75 3.75 0 004.093-4.093l-.693-1.132a.75.75 0 01.338-1.344l3.034.922a.75.75 0 01.54.723l.022.212c.03.264.05.53.07.798.054.67.086 1.346.1 2.022.028 1.402-.02 2.808-.146 4.193a.75.75 0 01-.715.715c-1.385.125-2.79.174-4.193.146-.676-.014-1.352-.046-2.022-.1-.267-.02-.534-.04-.798-.07l-.212-.022a.75.75 0 01-.723-.54L9.07 4.982a.75.75 0 011.344-.96zM13.25 10.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z" clipRule="evenodd" /><path fillRule="evenodd" d="M8.225 12.868a3.75 3.75 0 015.138-5.138l1.45-1.062a.75.75 0 011.02.24l2.122 3.675a.75.75 0 01-.433 1.132l-2.01.92a.75.75 0 01-.818-.21l-1.313-1.888a1.5 1.5 0 00-2.31-.077l-2.038 2.037a.75.75 0 01-1.06 0l-2.038-2.037a1.5 1.5 0 00-2.31.077l-1.313 1.888a.75.75 0 01-.818.21l-2.01-.92a.75.75 0 01-.433-1.132L3.62 6.64a.75.75 0 011.02-.24L6.09 7.46a3.75 3.75 0 015.138 5.138l-2.45 1.782a.75.75 0 00.103 1.28l4.425 1.18.02-.005a3.738 3.738 0 003.523-1.467l.385-.667a.75.75 0 011.3.75l-.386.668a5.238 5.238 0 01-4.922 2.05l-5.556-1.482a.75.75 0 01-.103-1.28L8.225 12.868z" clipRule="evenodd" /></svg>
);
export const Bars3Icon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
);
export const XMarkIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
);
export const KLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="kLogoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#10B981'}} />
                <stop offset="100%" style={{stopColor: '#059669'}} />
            </linearGradient>
        </defs>
        <g fill="url(#kLogoGradient)">
            <path d="M 20,0 H 45 C 35,33 35,67 45,100 H 20 Z" />
            <path d="M 95,0 L 55,42 V 58 L 95,100 H 115 L 75,50 L 115,0 Z" />
        </g>
    </svg>
);
export const UserPlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.25 6.75a.75.75 0 00-1.5 0v2.25H7.5a.75.75 0 000 1.5h2.25V12.75a.75.75 0 001.5 0V10.5h2.25a.75.75 0 000-1.5H11.25V6.75z" /><path fillRule="evenodd" d="M11.25 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S16.635 2.25 11.25 2.25zM12.75 14.25a.75.75 0 01-1.5 0V6.75a.75.75 0 011.5 0v7.5zM12 15a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H12z" clipRule="evenodd" /></svg>
);
export const ChatBubbleOvalLeftEllipsisIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.25 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H8.25zm5.25.75a.75.75 0 01-.75-.75.75.75 0 011.5 0 .75.75 0 01-.75.75zM15 12.75a.75.75 0 00.75-.75.75.75 0 00-1.5 0 .75.75 0 00.75.75z" clipRule="evenodd" /></svg>
);
export const ChatBubbleLeftRightIcon: React.FC<{className?: string}> = ChatBubbleOvalLeftEllipsisIcon;
export const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" /></svg>
);
export const WrenchScrewdriverIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 015.25 5.25v.323l1.522 3.806a.75.75 0 01-.58 1.058l-3.26.815a.75.75 0 01-.85-.328l-1.32-2.112a5.25 5.25 0 01-4.624 0l-1.32 2.112a.75.75 0 01-.85.328l-3.26-.815a.75.75 0 01-.58-1.058L6.427 12.323A5.25 5.25 0 0112 6.75zM9.5 12a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" clipRule="evenodd" /><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" /><path d="M6.262 4.932a.75.75 0 011.06 0l1.592 1.591a.75.75 0 11-1.06 1.06L6.262 6a.75.75 0 010-1.06z" /><path d="M3 10.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5z" /><path d="M17.738 4.932a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0z" /><path d="M18 10.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.75a.75.75 0 01-.75-.75z" /></svg>
);
export const LinkIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M11.54 2.11a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.45L8.03 7.67a.75.75 0 01-1.06-1.06l4.5-4.5zM3 19.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
);
export const SparklesIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75V6h.75a.75.75 0 010 1.5H9.75v.75a.75.75 0 01-1.5 0V7.5H7.5a.75.75 0 010-1.5H8.25V5.25A.75.75 0 019 4.5zM12.75 6a.75.75 0 00-1.5 0v.75H10.5a.75.75 0 000 1.5h.75v.75a.75.75 0 001.5 0v-.75h.75a.75.75 0 000-1.5h-.75V6zM15 9.75a.75.75 0 01.75.75v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75v-.75A.75.75 0 0115 9.75zM12 2.25a.75.75 0 01.75.75v.75h.75a.75.75 0 010 1.5h-.75V6a.75.75 0 01-1.5 0V5.25H10.5a.75.75 0 010-1.5h.75V3a.75.75 0 01.75-.75zM7.5 7.5a.75.75 0 00-1.5 0v.75H5.25a.75.75 0 000 1.5H6v.75a.75.75 0 001.5 0v-.75h.75a.75.75 0 000-1.5H7.5V7.5zM12 12.75a.75.75 0 01.75.75v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 01.75-.75zM16.5 13.5a.75.75 0 00-1.5 0v.75h-.75a.75.75 0 000 1.5h.75v.75a.75.75 0 001.5 0v-.75h.75a.75.75 0 000-1.5h-.75v-.75zM18.75 15.75a.75.75 0 01.75.75v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 01.75-.75zM9 15.75a.75.75 0 01.75.75v.75h.75a.75.75 0 010 1.5H9.75v.75a.75.75 0 01-1.5 0v-.75H7.5a.75.75 0 010-1.5H8.25v-.75A.75.75 0 019 15.75z" clipRule="evenodd" /></svg>
);
export const PresentationChartBarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-2.12 3.18a.75.75 0 001.27.84l2.12-3.18H15.5l2.12 3.18a.75.75 0 001.27-.84l-2.12-3.18H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zM6 16.5a1.5 1.5 0 01-1.5-1.5V3.75h15V15a1.5 1.5 0 01-1.5 1.5H6zM7.5 12a.75.75 0 000 1.5h.008a.75.75 0 000-1.5H7.5zm.75-1.5a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm0-3a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3A.75.75 0 018.25 7.5z" clipRule="evenodd" /></svg>
);
export const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M11.122 2.655A.75.75 0 0112 2.25c.341 0 .65.223.74.542l.502 1.758a.75.75 0 00.513.513l1.758.502c.319.09.542.4.542.74v.001c0 .341-.223.65-.542.74l-1.758.502a.75.75 0 00-.513.513l-.502 1.758a.75.75 0 01-1.48 0l-.502-1.758a.75.75 0 00-.513-.513l-1.758-.502a.75.75 0 010-1.48l1.758-.502a.75.75 0 00.513-.513l.502-1.758zM12 21.75c-3.78 0-7.24-1.74-9.5-4.594V12.75A.75.75 0 013.25 12H12v9.75z" clipRule="evenodd" /><path d="M12 2.25a.75.75 0 01.75.75v18.75a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" /><path fillRule="evenodd" d="M12.878 2.655a.75.75 0 00-1.48 0l-.502 1.758a.75.75 0 01-.513.513l-1.758.502a.75.75 0 000 1.48l1.758.502a.75.75 0 01.513.513l.502 1.758a.75.75 0 001.48 0l.502-1.758a.75.75 0 01.513-.513l1.758-.502a.75.75 0 000-1.48l-1.758-.502a.75.75 0 01-.513-.513l-.502-1.758zM12 21.75V12h8.75a.75.75 0 01.75.75v4.406c-2.26 2.854-5.72 4.594-9.5 4.594z" clipRule="evenodd" /></svg>
);
export const DocumentArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.5 3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5h1.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0V7.5h-1.5a.75.75 0 01-.75-.75v-1.5h-1.5a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" /><path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 009 3H5.625zm4.875 8.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /><path d="M11.25 10.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" /></svg>
);
export const EnvelopeOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.75 3A1.5 1.5 0 002.25 4.5v3.828c0 .26.105.51.293.707l2.828 2.829a1.5 1.5 0 002.122 0l2.828-2.829A.997.997 0 0110.5 8.328V4.5A1.5 1.5 0 009 3H3.75z" /><path d="M12.75 3A1.5 1.5 0 0011.25 4.5v3.828c0 .26.105.51.293.707l2.828 2.829a1.5 1.5 0 002.122 0l2.828-2.829A.997.997 0 0119.5 8.328V4.5A1.5 1.5 0 0018 3h-5.25z" /><path fillRule="evenodd" d="M1.5 13.5A1.5 1.5 0 003 15h18a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0021 9H3a1.5 1.5 0 00-1.5 1.5v3zM6 13.5a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H6.75A.75.75 0 016 13.5zm3.75.75a.75.75 0 000-1.5h.75a.75.75 0 000 1.5h-.75z" clipRule="evenodd" /></svg>
);
export const FlagIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M3 3.75A.75.75 0 013.75 3h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 3.75zM3 7.5A.75.75 0 013.75 6.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 7.5zM3 11.25A.75.75 0 013.75 10.5h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 15A.75.75 0 013.75 14.25h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 15zM3 18.75A.75.75 0 013.75 18h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 18.75z" clipRule="evenodd" /></svg>
);
export const GlobeEuropeAfricaIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.75 3.75A4.5 4.5 0 008.25 8.25v.982c-.521.123-1.01.328-1.455.618A3.75 3.75 0 003 13.5v.027a3.75 3.75 0 003.882 3.723 9.75 9.75 0 0013.136-3.88c.08-.263.122-.534.132-.813a.75.75 0 00-.28-.654l-.458-.458a3.733 3.733 0 00-2.09-.778c-.347-.02-.693-.03-1.037-.03-2.071 0-4.016.82-5.46 2.228a.75.75 0 01-1.06-1.06 7.421 7.421 0 014.02-3.033.75.75 0 00.443-1.002 4.5 4.5 0 00-2.023-5.01z" /><path d="M12.75 3.75a4.5 4.5 0 014.5 4.5v.982c.521.123 1.01.328 1.455.618A3.75 3.75 0 0122.5 13.5v.027a3.75 3.75 0 01-3.882 3.723 9.75 9.75 0 01-13.136-3.88c-.08-.263-.122-.534-.132-.813a.75.75 0 01.28-.654l.458-.458a3.733 3.733 0 012.09-.778c.347-.02.693-.03 1.037-.03 2.071 0 4.016.82 5.46 2.228a.75.75 0 001.06-1.06 7.421 7.421 0 00-4.02-3.033.75.75 0 01-.443-1.002 4.5 4.5 0 012.023-5.01z" /></svg>
);
export const LeafIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M11.229 1.944a.75.75 0 01.942 0l8.25 6.375a.75.75 0 01-.942 1.222l-1.63-1.26v5.41a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-5.411l-1.629 1.26a.75.75 0 11-.942-1.222l8.25-6.375z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.75 14.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zM3.75 17.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zM3.75 20.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
);
export const GlobeAltIcon: React.FC<{className?: string}> = GlobeEuropeAfricaIcon;
export const TrophyIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.944 2.56.276 2.56-1.06V4.06z" /><path d="M17.25 7.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75z" /><path d="M19.5 9.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75z" /><path d="M19.5 14.25a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75z" /><path d="M17.25 16.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75z" /></svg>
);
export const LightBulbIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0-5.385 4.365-9.75 9.75-9.75a.75.75 0 000-1.5A11.25 11.25 0 0012.963 2.286z" clipRule="evenodd" /><path fillRule="evenodd" d="M11.037 2.286a.75.75 0 00-1.052-1.071A11.25 11.25 0 00.75 12c0 5.385 4.365 9.75 9.75 9.75a.75.75 0 000-1.5A9.75 9.75 0 013 12c0-1.636.416-3.193 1.157-4.571a.75.75 0 001.052-1.07z" clipRule="evenodd" /></svg>
);
export const IdentificationIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.16 12.84 9 12 9H9.375A1.875 1.875 0 017.5 7.125V3.375z" /><path fillRule="evenodd" d="M2.25 3.75A1.5 1.5 0 00.75 5.25v13.5c0 .828.672 1.5 1.5 1.5h15A1.5 1.5 0 0018.75 18v-3.375a3.75 3.75 0 00-2.25-3.487V9.375a3.75 3.75 0 00-3.75-3.75H9.375A3.75 3.75 0 005.625 9.375v1.875C4.84 11.66 4.16 12 3.375 12A1.875 1.875 0 011.5 10.125V5.25A1.5 1.5 0 002.25 3.75zm1.5 0v6.375c0 .621.504 1.125 1.125 1.125H12a1.125 1.125 0 001.125-1.125V3.75H3.75z" clipRule="evenodd" /><path d="M15 15.375a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM15 18a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" /><path fillRule="evenodd" d="M20.25 3.75A1.5 1.5 0 0018.75 5.25v13.5a1.5 1.5 0 001.5 1.5h2.25a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5h-2.25zM21 9a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V9z" clipRule="evenodd" /></svg>
);
export const BanknotesIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" /></svg>
);
export const AcademicCapIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.723 3.323a.75.75 0 01.554 0l7.5 4.125a.75.75 0 010 1.306l-7.5 4.125a.75.75 0 01-.554 0l-7.5-4.125a.75.75 0 010-1.306l7.5-4.125z" /><path d="M3.375 9.499l7.5 4.125a.75.75 0 00.554 0l7.5-4.125v3.125a.75.75 0 010 1.306l-7.5 4.125a.75.75 0 01-.554 0l-7.5-4.125a.75.75 0 010-1.306V9.5z" /></svg>
);
export const ShareIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" /></svg>
);

export const SERVICES_DATA: Service[] = [
  // Biznesni boshlash
  {
    id: 'reg-yatt',
    title: "YATTni onlayn ro'yxatdan o'tkazish",
    description: "Yakka tartibdagi tadbirkor sifatida onlayn ro'yxatdan o'tish bo'yicha bosqichma-bosqich qo'llanma.",
    icon: RocketLaunchIcon,
    category: ServiceCategory.START,
    detailedInfoContent: `### YATTni onlayn ro'yxatdan o'tkazish bo'yicha qo'llanma\n\n**1-qadam: ERI kalitini olish**\nElektron raqamli imzo - bu sizning onlayn shaxsingiz. Uni Davlat xizmatlari markazidan olishingiz mumkin.\n\n**2-qadam: my.gov.uz portalida ro'yxatdan o'tish**\nBarcha onlayn davlat xizmatlari shu portal orqali amalga oshiriladi.\n\n**3-qadam: Onlayn ariza to'ldirish**\nPortalda "Yakka tartibdagi tadbirkorni ro'yxatdan o'tkazish" xizmatini toping va kerakli ma'lumotlarni to'ldiring.\n\n**4-qadam: Davlat bojini to'lash**\nRo'yxatdan o'tish uchun BHMning 1 baravari miqdorida davlat boji to'lanadi.\n\n**5-qadam: Guvohnomani olish**\nTo'lovdan so'ng 15-30 daqiqada elektron guvohnoma shaxsiy kabinetingizga yuboriladi.`,
    consultationAvailable: true,
    faqs: [
      { question: "ERI kalitini qanday olsam bo'ladi?", answer: "Eng yaqin Davlat xizmatlari markaziga pasportingiz bilan murojaat qiling yoki onlayn ariza bering." },
      { question: "YATT uchun qanday soliq rejimi mavjud?", answer: "Yillik aylanmasi 1 mlrd so'mgacha bo'lgan YATTlar aylanmadan olinadigan soliq (4%) yoki qat'iy belgilangan soliqni tanlashlari mumkin." },
    ],
    toolComponent: 'OnlineRegistrationGuide',
    integrations: [ { name: 'My.gov.uz', url: 'https://my.gov.uz', description: 'Yagona interaktiv davlat xizmatlari portali', icon: LinkIcon } ]
  },
  {
    id: 'swot-analysis',
    title: "SWOT-tahlil konstruktori",
    description: "Biznesingizning kuchli, zaif tomonlari, imkoniyatlari va tahdidlarini tahlil qilish uchun interaktiv vosita.",
    icon: ChartBarIcon,
    category: ServiceCategory.START,
    detailedInfoContent: "Biznes-strategiyani rejalashtirishda SWOT tahlili muhim o'rin tutadi. U sizga biznesingizning ichki va tashqi omillarini baholashga yordam beradi. Bizning interaktiv vositamiz orqali o'z tahlilingizni osonlik bilan yarating.",
    consultationAvailable: true,
    toolComponent: 'SwotAnalysisTool',
  },
  {
    id: 'business-plan-ai',
    title: "AI Biznes-reja yordamchisi",
    description: "Sun'iy intellekt yordamida biznes g'oyangiz uchun professional biznes-reja tuzilmasini yarating.",
    icon: SparklesIcon,
    category: ServiceCategory.START,
    detailedInfoContent: "Biznes g'oyangizni kiriting va AI yordamchi siz uchun rezyume, bozor tahlili, marketing strategiyasi va moliyaviy prognozlarni o'z ichiga olgan biznes-reja loyihasini tayyorlab beradi.",
    consultationAvailable: true,
    toolComponent: 'AiBusinessPlanAssistantTool',
  },
  // Moliyaviy xizmatlar
  {
    id: 'tax-calculator',
    title: "Soliq kalkulyatori",
    description: "Aylanmadan olinadigan soliq va ish haqi soliqlarini hisoblash uchun qulay onlayn vosita.",
    icon: CalculatorIcon,
    category: ServiceCategory.FINANCE,
    detailedInfoContent: "O'zbekistondagi kichik biznes uchun eng keng tarqalgan soliq turlarini hisoblang. Aylanmadan olinadigan soliq (4%) va xodimlar uchun ish haqidan ushlanadigan soliqlarni osonlik bilan aniqlang.",
    consultationAvailable: true,
    faqs: [
        { question: "Aylanmadan olinadigan soliq stavkasi necha foiz?", answer: "Standart stavka 4% ni tashkil etadi. Ayrim faoliyat turlari uchun pasaytirilgan stavkalar mavjud." }
    ],
    toolComponent: 'TaxCalculatorTool',
  },
  {
    id: 'loan-calculator',
    title: "Kredit kalkulyatori",
    description: "Biznes kreditlari uchun oylik to'lovlar, umumiy to'lov miqdori va foizlarni hisoblang.",
    icon: BanknotesIcon,
    category: ServiceCategory.FINANCE,
    detailedInfoContent: "Kredit miqdori, foiz stavkasi va muddatini kiritib, oylik to'lov rejasini tuzing. Bu sizga moliyaviy qarorlar qabul qilishda yordam beradi.",
    consultationAvailable: false,
    toolComponent: 'LoanCalculatorTool',
  },
   {
    id: 'salary-calculator',
    title: "Ish haqi kalkulyatori",
    description: "Xodimning oylik maoshidan ushlanadigan soliqlar va ish beruvchi xarajatlarini hisoblang.",
    icon: UsersIcon,
    category: ServiceCategory.FINANCE,
    detailedInfoContent: "Xodimning oylik maoshi, JSHODS, ijtimoiy soliq va ish beruvchining umumiy xarajatlarini hisoblash uchun mo'ljallangan vosita.",
    consultationAvailable: true,
    toolComponent: 'SalaryCalculatorTool',
  },
  // Huquqiy yordam
  {
    id: 'doc-constructor',
    title: "Hujjatlar konstruktori",
    description: "Mehnat shartnomasi, xizmat ko'rsatish shartnomasi kabi hujjatlarning tayyor shablonlarini yarating.",
    icon: DocumentTextIcon,
    category: ServiceCategory.LEGAL,
    detailedInfoContent: "Kerakli ma'lumotlarni kiritib, bir necha daqiqada tayyor yuridik hujjatga ega bo'ling. Bu sizning vaqtingizni tejaydi va xatoliklarning oldini oladi.",
    consultationAvailable: true,
    toolComponent: 'DocumentConstructorTool',
  },
  {
    id: 'counterparty-check',
    title: "Kontragentni tekshirish",
    description: "Hamkorlik qilishdan oldin kompaniyaning STIR (INN) raqami orqali ishonchliligini tekshiring (simulyatsiya).",
    icon: ShieldCheckIcon,
    category: ServiceCategory.LEGAL,
    detailedInfoContent: "Potentsial hamkorning soliq qarzdorligi, sud ishlari va umumiy holati haqida ma'lumot oling. Eslatma: Bu vosita simulyatsiya rejimida ishlaydi, real ma'lumot uchun davlat portallariga murojaat qiling.",
    consultationAvailable: false,
    toolComponent: 'CounterpartyCheckTool',
  },
  // Marketing va sotuv
   {
    id: 'marketing-ideas-ai',
    title: "AI Marketing g'oyalari",
    description: "Biznesingiz uchun sun'iy intellekt yordamida kreativ marketing g'oyalarini yarating.",
    icon: MegaphoneIcon,
    category: ServiceCategory.MARKETING,
    detailedInfoContent: "Biznesingiz turi, auditoriyasi va byudjetini kiriting, AI siz uchun O'zbekiston bozoriga moslashtirilgan onlayn va oflayn marketing strategiyalarini taklif qiladi.",
    consultationAvailable: true,
    toolComponent: 'AiMarketingIdeasTool',
  },
   // Operatsion faoliyat
  {
    id: 'invoice-generator',
    title: "Invoys (hisob-faktura) generatori",
    description: "Mijozlar uchun professional invoyslarni onlayn tarzda tez va oson yarating va chop eting.",
    icon: DocumentArrowUpIcon,
    category: ServiceCategory.OPERATIONS,
    detailedInfoContent: "Kompaniyangiz rekvizitlari, mijoz ma'lumotlari va xizmatlar ro'yxatini kiritib, tayyor PDF-invoysni bir necha daqiqada yarating.",
    consultationAvailable: false,
    toolComponent: 'InvoiceGeneratorTool',
  },
    // Davlat xizmatlari
  {
    id: 'financial-support',
    title: "Moliyaviy yordam topish",
    description: "Biznesingiz uchun davlat dasturlari, grantlar, subsidiyalar va imtiyozli kreditlarni toping.",
    icon: GlobeAltIcon,
    category: ServiceCategory.GOVERNMENT,
    detailedInfoContent: "Faoliyat sohangiz va yordam turiga qarab mavjud davlat dasturlarini filtrlang va o'zingizga mos keladiganini toping.",
    consultationAvailable: true,
    toolComponent: 'FinancialSupportFinder',
  },
  // Ta'lim va Rivojlanish
  {
    id: 'legal-advice',
    title: "Yuridik maslahat platformasi",
    description: "Biznesga oid huquqiy savollarga javob toping va tez-tez so'raladigan savollar bazasidan foydalaning.",
    icon: ScaleIcon,
    category: ServiceCategory.EDUCATION,
    detailedInfoContent: "Soliqlar, mehnat huquqi, shartnomalar va boshqa yuridik masalalar bo'yicha tayyor javoblarni toping yoki o'z savolingizni yuristga yo'naltiring.",
    consultationAvailable: true,
    toolComponent: 'LegalAdvicePlatform',
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-1',
    title: "O'zbekistonda kichik biznes uchun yangi soliq imtiyozlari joriy etildi",
    category: "Qonunchilik",
    publishDate: "2024-07-20",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Prezident qaroriga ko'ra, 2024 yil 1 avgustdan boshlab elektron tijorat bilan shug'ullanuvchi tadbirkorlar uchun aylanma solig'i stavkasi 2% gacha pasaytirildi."
  },
  {
    id: 'news-2',
    title: "KBU HUB platformasi 'Yilning eng yaxshi raqamli loyihasi' deb topildi",
    category: "Texnologiya",
    publishDate: "2024-07-18",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Toshkentda o'tkazilgan 'Digital Uzbekistan 2024' forumida KBU HUB platformasi tadbirkorlikni raqamlashtirishga qo'shgan hissasi uchun taqdirlandi."
  },
  {
    id: 'news-3',
    title: "Eksport qiluvchi tadbirkorlar uchun transport xarajatlarini qoplash tartibi soddalashtirildi",
    category: "Iqtisodiyot",
    publishDate: "2024-07-15",
    imageUrl: "https://images.unsplash.com/photo-1611403554341-39951c6a241e?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Yangi tartibga ko'ra, eksportyorlar transport xarajatlarining 50% gacha bo'lgan qismini subsidiya sifatida qaytarib olish uchun onlayn ariza berishlari mumkin."
  },
  {
    id: 'news-4',
    title: "Toshkentda yosh tadbirkorlar uchun bepul biznes-inkubator o'z ishini boshladi",
    category: "Startaplar",
    publishDate: "2024-07-12",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    excerpt: "IT Park va Yoshlar ishlari agentligi hamkorligida ochilgan yangi inkubator istiqbolli loyihalarga ofis, mentorlik va dastlabki investitsiyalarni taqdim etadi."
  }
];

export const EDUCATION_DATA: EducationResource[] = [
  {
    id: 'edu-1',
    title: "Biznesni noldan boshlash",
    description: "Biznes g'oyani topishdan tortib, birinchi mijozni topishgacha bo'lgan barcha bosqichlarni o'z ichiga olgan to'liq kurs.",
    icon: RocketLaunchIcon
  },
  {
    id: 'edu-2',
    title: "Raqamli marketing asoslari",
    description: "Ijtimoiy tarmoqlar (SMM), qidiruv tizimlari (SEO) va kontent-marketing orqali biznesingizni onlayn targ'ib qilishni o'rganing.",
    icon: MegaphoneIcon
  },
  {
    id: 'edu-3',
    title: "Sotuvlarni oshirish texnikalari",
    description: "Mijozlar bilan ishlash, e'tirozlarni yengish va samarali sotuv voronkasini qurish bo'yicha amaliy qo'llanma.",
    icon: ChartBarIcon
  },
  {
    id: 'edu-4',
    title: "Tadbirkor uchun moliya",
    description: "Pul oqimlarini boshqarish, xarajatlarni optimallashtirish va biznesning moliyaviy holatini tahlil qilishni o'rganing.",
    icon: BanknotesIcon
  },
  {
    id: 'edu-5',
    title: "Yuridik savodxonlik",
    description: "Shartnomalar tuzish, mehnat qonunchiligi va soliq majburiyatlari haqida har bir tadbirkor bilishi kerak bo'lgan asosiy ma'lumotlar.",
    icon: ScaleIcon
  },
  {
    id: 'edu-6',
    title: "Jamoani boshqarish",
    description: "To'g'ri jamoani yig'ish, xodimlarni motivatsiya qilish va kompaniyada samarali ish muhitini yaratish sirlari.",
    icon: UsersIcon
  }
];

// App metadata and data
export const NavLinks = [
  { name: Page.Home, href: '#' },
  { name: Page.Services, href: '#' },
  { name: Page.Education, href: '#' },
  { name: Page.Appeals, href: '#' },
  { name: Page.About, href: '#' },
];

export const QRCodeImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAABlBMVEX///8AAABVwtN+AAABaklEQVRIx+3WzW3DMAwF0KaGgUN36BA5Qkd0hI7QETpCB+kYHUEYDGxCTZIXkkRzLZIPlf/7/AtpbrV17+pY+2T41QrczAT8R9wVwBneA3YKKBxAMx3gDGAzgDPA7UDs+xatZgWXy2C/TgFk/M4A5gJMbaK2XddxFrDZwFzBstxcAxgnQOQe4Z+A/YAQgJnAVwF/ApcD8P0XwJkPAG8xV82Ulw8A5Xl3AEfSVsEvgGdg0xFgXwR2A04+AMq/AccBPAmYfwbcCUD8H2BfAfYCTF2i9l3X2gVY8Bdgv8D8DbjACBC5xy/gM4CrAv4E/B+AL/+/B/A3YD/ADGAeYA8A/gXwz5fARsAvgLMBZwGfAyC/BdgB+LegfwD+A+AOoH4A3AVcDXAPcPw/4A5gD+Au4AKgfgAcT/AfYCzAVoAnwL4/gK8A2wG2Gvj7BZz5ADj/Bbi1AOx2gE1Apv8F/A2YBDgKsD/AVwA/AV8BdoA1gBPAI4ADgBmA7UCs/w/4C/gU8CTgSoAnwHOA/QGzATsVoHEAzXSAI4DNABwBvANsBdgJ8A/4wM5W3ZzzCd2l08crjfeCAAAAAElFTSuQmCC`;
export const TelegramIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.02-6.64c.38-.34.03-.94-.46-.64L8.74 13.56l-3.57-1.12c-.88-.28-1.01-1.33.05-1.63L18.66 3.6c.8-.25 1.6.49 1.3 1.35L14.2 20.3c-.26.83-1.24.96-1.7.27l-2.72-4.92z" /></svg> );
export const FacebookIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg> );
export const InstagramIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 3.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg> );
export const YouTubeIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 7.64s-.18-1.272-.734-1.834c-.722-.74-1.52-.748-1.892-.804C17.2 4.81 12 4.81 12 4.81s-5.2 0-6.956.192c-.372.056-1.17.064-1.892.804-.554.562-.734 1.834-.734 1.834S2.236 9.14 2.236 10.64v2.72c0 1.5.182 3 .182 3s.18 1.272.734 1.834c.722.74 1.622.72 2.02.814 1.488.19 6.814.19 6.814.19s5.2 0 6.956-.192c.372-.056 1.17-.064 1.892-.804.554-.562.734-1.834.734-1.834s.182-1.5.182-3v-2.72c0-1.5-.182-3-.182-3zM9.952 14.71V9.29l4.52 2.71-4.52 2.71z" /></svg> );
export const XIcon: React.FC<{className?: string}> = ({ className }) => ( <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> );