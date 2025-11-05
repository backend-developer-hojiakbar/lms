import React, { useState } from 'react';
import Card from './common/Card';
import { NEWS_DATA, SearchIcon } from '../constants';

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = NEWS_DATA.filter(article => 
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-heading font-bold text-dark-gray mb-4">
              <span className="text-primary-green">So'nggi</span> yangiliklar va tadbirlar
            </h2>
            <p className="text-xl text-medium-gray mb-12">
            Kichik biznes sohasidagi eng so'nggi o'zgarishlar, qonunchilikdagi yangiliklar va bo'lajak tadbirlar haqida xabardor bo'ling.
            </p>
        </div>

        <div className="mb-12 relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <SearchIcon className="w-6 h-6 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Yangiliklarni qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-6 py-4 bg-white text-dark-gray border-2 border-gray-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-green text-xl placeholder-gray-500 transition-colors"
            aria-label="Yangiliklarni qidirish"
          />
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article, index) => (
              <Card key={`${article.id}-${index}`} className="p-0 flex flex-col overflow-hidden">
                <img src={article.imageUrl} alt={article.title} className="w-full h-60 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary-green font-semibold mb-2">{article.category}</p>
                  <h3 className="text-xl font-heading font-bold text-dark-gray mb-3 flex-grow">{article.title}</h3>
                  <p className="text-medium-gray text-base mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400 font-medium">{article.publishDate}</span>
                    <a href="#" className="font-semibold text-primary-green hover:underline">Batafsil &rarr;</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-20 text-medium-gray">
            <h3 className="text-2xl font-bold font-heading text-dark-gray mb-2">Hech qanday yangilik topilmadi</h3>
            <p>Sizning qidiruvingizga mos keladigan yangiliklar mavjud emas.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default NewsPage;