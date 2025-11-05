import React, { useState } from 'react';
import Card from './common/Card';
import { SERVICES_DATA, SearchIcon } from '../constants';
import { Service, ServiceCategory } from '../types';

interface ServicesPageProps {
  onServiceSelect: (service: Service) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onServiceSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Barchasi', ...Object.values(ServiceCategory)];

  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = selectedCategory === 'Barchasi' || service.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
                          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const CategoriesList = () => (
    <div className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-2">
        {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 font-heading font-semibold rounded-xl text-base text-left w-auto md:w-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green ${
                selectedCategory === category
                  ? 'bg-primary-green text-white shadow-lg'
                  : 'bg-white text-dark-gray hover:bg-gray-100 hover:text-primary-green'
              }`}
            >
              {category}
            </button>
          ))}
    </div>
  );

  return (
    <div className="pt-4">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-heading font-bold text-dark-gray mb-4">
            Biznes uchun <span className="text-primary-green">Onlayn Xizmatlar</span>
          </h2>
          <p className="text-xl text-medium-gray mb-16">
            KBU HUB biznes yuritishni osonlashtirish uchun keng ko'lamli raqamli xizmatlarni taklif etadi. Barcha jarayonlarni bir joyda, tez va qulay amalga oshiring.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sticky Sidebar for Categories on Desktop */}
          <aside className="md:w-72 flex-shrink-0">
            <div className="md:sticky md:top-28">
              <h3 className="text-2xl font-heading font-bold text-dark-gray mb-4 hidden md:block">Kategoriyalar</h3>
              <div className="p-2 bg-white/40 rounded-2xl">
                <CategoriesList />
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="mb-12 relative w-full">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <SearchIcon className="w-6 h-6 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Xizmatlarni qidirish (masalan, 'soliq', 'kredit'...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-white/80 backdrop-blur-sm text-dark-gray border-2 border-white/40 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-green text-xl placeholder-gray-500 transition-colors"
                aria-label="Xizmatlarni qidirish"
              />
            </div>
            
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                   <Card key={service.id} onClick={() => onServiceSelect(service)} className="p-8 flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 50}ms`}}>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="bg-ultra-light-green text-primary-green rounded-xl p-4">
                        <service.icon className="w-9 h-9" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-dark-gray leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-medium-gray text-base flex-grow">{service.description}</p>
                     <div className="mt-6 pt-6 border-t border-gray-500/10">
                        <span className="text-sm font-bold text-amber-800 bg-accent-gold/20 px-3 py-1.5 rounded-full">{service.category}</span>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-20 text-medium-gray">
                <h3 className="text-2xl font-bold font-heading text-dark-gray mb-2">Hech narsa topilmadi</h3>
                <p>Qidiruv mezonlaringizga mos xizmatlar topilmadi. Kalit so'zni o'zgartirib ko'ring yoki kategoriya filtrini tozalang.</p>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;