import React, { useState } from 'react';
// FIX: Corrected import paths for components located in './components/common'
import Button from './components/common/Button';
import Card from './components/common/Card';
import { Page, Service, ServiceCategory } from './types';
import { 
  SERVICES_DATA, 
  NEWS_DATA, 
  SearchIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  ChatBubbleOvalLeftEllipsisIcon,
// FIX: Corrected import path for constants file located in the same directory
} from './constants';

interface HomePageProps {
  navigateTo: (page: Page) => void;
  onServiceSelect: (service: Service) => void;
  navigateToAssistant: (query: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, onServiceSelect, navigateToAssistant }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateToAssistant(searchQuery);
    }
  };

  const featuredServiceCategories = [ServiceCategory.START, ServiceCategory.FINANCE, ServiceCategory.LEGAL];

  const howItWorksSteps = [
    {
      icon: SearchIcon,
      title: 'Izlang',
      description: '60+ xizmatlar orasidan o\'zingizga keraklisini toping yoki savolingizni aqlli yordamchiga bering.',
    },
    {
      icon: BookOpenIcon,
      title: 'O\'rganing',
      description: 'Batafsil qo\'llanmalar, interaktiv vositalar va sun\'iy intellektga asoslangan maslahatchilardan foydalaning.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Rivojlaning',
      description: 'Biznesingizni onlayn ro\'yxatdan o\'tkazing, hisobotlarni oson topshiring va yangi bosqichga chiqing.',
    },
  ];

  const testimonials = [
      {
          name: 'Anora Valiyeva',
          role: '"Anor Cafe" asoschisi',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=crop',
          text: '"KBU HUB orqali biznesim uchun barcha kerakli ma\'lumotlarni bir joydan topdim. Ayniqsa, soliq kalkulyatori va hujjatlar konstruktori vaqtimni ancha tejadi. Yangi tadbirkorlar uchun ajoyib manba!"'
      },
      {
          name: 'Sardor Ibragimov',
          role: 'Frilanser, Dasturchi',
          avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop',
          text: '"Yakka tartibdagi tadbirkor sifatida ro\'yxatdan o\'tish jarayoni bunchalik oson bo\'ladi deb o\'ylamagandim. Platformadagi AI yordamchi esa savollarimga tezda javob berdi. Hammaga tavsiya qilaman!"'
      },
      {
          name: 'Gulchehra Qosimova',
          role: 'Hunarmand, "Guli Crafts"',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop',
          text: '"Marketpleyslarda sotish bo\'yicha qo\'llanma biznesimni onlaynga olib chiqishimga katta turtki bo\'ldi. Davlat dasturlari haqidagi ma\'lumotlar esa moliyaviy yordam olishimga yordam berdi."'
      }
  ];

  const partners = [
      { name: 'Soliq.uz', description: 'Davlat Soliq Qo\'mitasi' },
      { name: 'My.gov.uz', description: 'Yagona interaktiv davlat xizmatlari portali' },
      { name: 'Business.gov.uz', description: 'Biznes-ombudsman' },
      { name: 'Chamber.uz', description: 'Savdo-sanoat palatasi' },
      { name: 'IT-Park.uz', description: 'IT Park Uzbekistan' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-dark-gray/60 backdrop-brightness-75"></div>
        <div className="relative container mx-auto px-6 py-32 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 animate-fade-in-up">
            Biznesingiz uchun <span className="text-accent-gold">Raqamli Darvoza</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            KBU HUB – O'zbekistondagi kichik biznes uchun barcha kerakli xizmatlarni bir joyda jamlagan yagona, universal platforma.
          </p>
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <form onSubmit={handleSearchSubmit} className="relative">
                <input 
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder="Qanday yordam bera olaman? (masalan, 'biznes ochish', 'soliq hisoblash')"
                    className="w-full pl-6 pr-14 py-4 bg-white/90 text-dark-gray border-2 border-transparent rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-accent-gold/50 text-lg placeholder-gray-500 transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <button type="submit" className="bg-primary-green p-2.5 rounded-full text-white hover:bg-dark-green transition-colors">
                        <SearchIcon className="w-6 h-6" />
                    </button>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-heading font-bold text-dark-gray mb-4">Uch oddiy qadamda muvaffaqiyat sari</h2>
                <p className="text-lg text-medium-gray">
                    Platformamizdan foydalanish oson va intuitiv. Biznesingizni rivojlantirish uchun kerak bo'lgan hamma narsa shu yerda.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                {/* Dashed lines for connecting steps on desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
                    <svg width="100%" height="100%" className="overflow-visible">
                        <line x1="25%" y1="0" x2="75%" y2="0" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                </div>

                {howItWorksSteps.map((step, index) => (
                    <div key={index} className="relative z-10 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <div className="flex justify-center mb-5">
                            <div className="bg-ultra-light-green text-primary-green rounded-full p-5 border-4 border-white shadow-md">
                                <step.icon className="w-10 h-10" />
                            </div>
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                        <p className="text-medium-gray px-4">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* Featured Services Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-gray mb-4">Ommabop Xizmatlar</h2>
            <p className="text-lg text-medium-gray">
              Tadbirkorlar tomonidan eng ko'p foydalaniladigan xizmatlar bilan tanishing va biznesingizni bugunoq optimallashtiring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter(service => featuredServiceCategories.includes(service.category)).slice(0, 6).map((service, index) => (
              <Card key={service.id} onClick={() => onServiceSelect(service)} className="p-6 flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-ultra-light-green text-primary-green rounded-lg p-3">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark-gray leading-tight">{service.title}</h3>
                </div>
                <p className="text-medium-gray text-sm flex-grow">{service.description}</p>
                 <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold bg-accent-gold/20 text-amber-700 px-2 py-1 rounded-md">{service.category}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" onClick={() => navigateTo(Page.Services)}>
              Barcha Xizmatlarni Ko'rish
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-heading font-bold text-dark-gray mb-4">Mijozlarimiz biz haqimizda</h2>
                  <p className="text-lg text-medium-gray">
                      O'zbekistonning turli burchaklaridagi tadbirkorlar KBU HUB platformasi orqali o'z bizneslarini qanday rivojlantirayotganini bilib oling.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="p-8 bg-light-gray border-none">
                          <p className="text-medium-gray mb-6 relative">
                              <span className="absolute -top-4 -left-4 text-6xl text-gray-200 font-serif">“</span>
                              {testimonial.text}
                          </p>
                          <div className="flex items-center">
                              <img className="w-12 h-12 rounded-full mr-4 object-cover" src={testimonial.avatar} alt={testimonial.name} />
                              <div>
                                  <p className="font-bold font-heading text-dark-gray">{testimonial.name}</p>
                                  <p className="text-sm text-primary-green">{testimonial.role}</p>
                              </div>
                          </div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Sizning <span className="text-accent-gold">shaxsiy AI yordamchingiz</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                Biznesga oid har qanday savolingiz bormi? Soliqlar, hujjatlar, marketing... Bizning sun'iy intellektga asoslangan yordamchimiz sizga 24/7 rejimida o'zbek tilida maslahat berishga tayyor.
              </p>
              <Button variant="secondary" size="lg" onClick={() => navigateToAssistant('')}>
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mr-2" />
                Hozir suhbatlashish
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Placeholder for an image or animation */}
              <div className="w-72 h-72 bg-primary-green rounded-full flex items-center justify-center shadow-lg">
                <ChatBubbleOvalLeftEllipsisIcon className="w-32 h-32 text-accent-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-dark-gray mb-4">So'nggi Yangiliklar</h2>
              <p className="text-lg text-medium-gray">
                  Biznes olamidagi eng muhim voqealar va tahliliy maqolalar bilan tanishib boring.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_DATA.map(article => (
              <Card key={article.id}>
                <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-primary-green font-semibold mb-2">{article.category}</p>
                  <h3 className="text-xl font-heading font-bold text-dark-gray mb-3 h-16">{article.title}</h3>
                  <p className="text-medium-gray text-sm mb-4 h-20">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{article.publishDate}</span>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo(Page.News); }} className="font-semibold text-primary-green hover:underline">Batafsil &rarr;</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => navigateTo(Page.News)}>
              Barcha Yangiliklarni O'qish
            </Button>
          </div>
        </div>
      </section>

       {/* Partners Section */}
        <section className="py-16 bg-light-gray">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-2xl font-heading font-bold text-medium-gray mb-8">Bizning Hamkorlarimiz</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                    {partners.map(partner => (
                        <div key={partner.name} className="text-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                           <p className="font-bold text-xl text-dark-gray">{partner.name}</p>
                           <p className="text-xs text-medium-gray">{partner.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
};

export default HomePage;