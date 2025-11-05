import React from 'react';

export enum Page {
  Home = 'Bosh sahifa',
  Services = 'Xizmatlar',
  News = 'Yangiliklar',
  Education = 'Ta\'lim',
  Appeals = "Murojaatlar",
  Membership = "A'zo bo'lish",
  About = 'Biz haqimizda',
  Assistant = 'AI Yordamchi'
}

export enum ServiceCategory {
  START = "Biznesni boshlash",
  FINANCE = "Moliyaviy xizmatlar",
  LEGAL = "Huquqiy yordam",
  MARKETING = "Marketing va sotuv",
  OPERATIONS = "Operatsion faoliyat",
  EDUCATION = "Ta'lim va Rivojlanish",
  GOVERNMENT = "Davlat xizmatlari",
}

export interface Integration {
  name: string;
  url: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description:string;
  icon: React.ComponentType<{ className?: string }>;
  category: ServiceCategory;
  detailedInfoContent?: string; 
  consultationAvailable?: boolean;
  integrations?: Integration[];
  faqs?: FAQ[];
  toolComponent?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  publishDate: string;
  imageUrl: string;
  excerpt: string;
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export interface EducationResource {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface User {
  id: string;
  fullName: string;
  stir: string;
  phone: string;
  organizationName: string;
}