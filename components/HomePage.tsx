import React, { useState, useRef, useEffect } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import { Page, Service, ServiceCategory } from '../types';
import { 
  SERVICES_DATA, 
  NEWS_DATA, 
  SearchIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FlagIcon,
  GlobeEuropeAfricaIcon,
  LeafIcon,
  UsersIcon,
} from '../constants';

interface HomePageProps {
  navigateTo: (page: Page) => void;
  onServiceSelect: (service: Service) => void;
  navigateToAssistant: (query: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, onServiceSelect, navigateToAssistant }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [isRoadmapVisible, setIsRoadmapVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsRoadmapVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.4 }
    );

    if (roadmapRef.current) {
        observer.observe(roadmapRef.current);
    }

    return () => {
        if (roadmapRef.current) {
            observer.unobserve(roadmapRef.current);
        }
    };
  }, []);

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

  const strategyGoals = [
    {
      icon: FlagIcon,
      title: "Qonun Ustuvorligi va Barqaror Boshqaruv",
      description: "Tadbirkorlik faoliyatini soddalashtirish, byurokratiyani kamaytirish va ishbilarmonlik muhitini yaxshilash. Bizning onlayn xizmatlarimiz sizga shu yo'lda yordam beradi."
    },
    {
      icon: GlobeEuropeAfricaIcon,
      title: "Barqaror Iqtisodiy O'sish",
      description: "Raqamli iqtisodiyotga o'tishni tezlashtirish. Platformamizdagi raqamli vositalar biznesingizni avtomatlashtirish va samaradorligini oshirish imkonini beradi."
    },
    {
      icon: LeafIcon,
      title: "Suv Resurslarini Tejash va Atrof-muhit Muhofazasi",
      description: "Resurslarni tejovchi va 'yashil' texnologiyalarni joriy etish. Kelajakda bu yo'nalishda ham maxsus xizmatlar va maslahatlar taqdim etamiz."
    },
    {
      icon: UsersIcon,
      title: "Ijtimoiy Himoya va Inson Kapitalini Rivojlantirish",
      description: "Zamonaviy bilim va ko'nikmalarga ega tadbirkorlar sinfini shakllantirish. Bizning 'Ta'lim' bo'limimizdagi kurslar orqali doimiy rivojlanib boring."
    }
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
      { name: 'Soliq.uz', description: 'Davlat Soliq Qo\'mitasi', url: 'https://soliq.uz' },
      { name: 'My.gov.uz', description: 'Yagona interaktiv davlat xizmatlari portali', url: 'https://my.gov.uz' },
      { name: 'Business.gov.uz', description: 'Biznes-ombudsman', url: 'https://business.gov.uz' },
      { name: 'Chamber.uz', description: 'Savdo-sanoat palatasi', url: 'https://chamber.uz' },
      { name: 'IT-Park.uz', description: 'IT Park Uzbekistan', url: 'https://it-park.uz' },
      { name: 'Lex.uz', description: 'Qonunchilik ma\'lumotlari milliy bazasi', url: 'https://lex.uz' },
  ];

  return (
    <div className="pt-4">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden mx-2 md:mx-4" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/70 to-dark-gray/40 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 py-40 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 animate-fade-in-up">
            Biznesingizni <span className="text-accent-gold">Muvaffaqiyat Cho'qqisiga</span> Olib Chiqing
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            KBU HUB – O'zbekistondagi tadbirkorlar uchun muvaffaqiyatga erishish yo'lidagi barcha zarur vositalarni o'zida jamlagan kuchli raqamli platforma.
          </p>
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <form onSubmit={handleSearchSubmit} className="relative">
                <input 
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    placeholder="Qanday yordam bera olaman? Masalan, 'biznes ochish'"
                    className="w-full pl-6 pr-16 py-5 bg-white/30 text-white border-2 border-white/40 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent-gold/50 text-lg placeholder-gray-300 transition-all backdrop-blur-md"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="submit" className="bg-primary-green p-3 rounded-full text-white hover:bg-dark-green transition-colors shadow-lg">
                        <SearchIcon className="w-6 h-6" />
                    </button>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Uch oddiy qadamda muvaffaqiyat sari</h2>
                <p className="text-xl text-medium-gray">
                    Platformamizdan foydalanish oson va intuitiv. Biznesingizni rivojlantirish uchun kerak bo'lgan hamma narsa shu yerda.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative">
                {howItWorksSteps.map((step, index) => (
                    <div key={index} className="relative z-10 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                        <div className="flex justify-center mb-6">
                            <div className="bg-white text-primary-green rounded-2xl p-6 border-2 border-white/80 shadow-2xl">
                                <step.icon className="w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                        <p className="text-medium-gray px-4 text-base">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* Featured Services Section */}
      <section className="py-24 bg-white/70">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Ommabop Xizmatlar</h2>
            <p className="text-xl text-medium-gray">
              Tadbirkorlar tomonidan eng ko'p foydalaniladigan xizmatlar bilan tanishing va biznesingizni bugunoq optimallashtiring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.filter(service => featuredServiceCategories.includes(service.category)).slice(0, 6).map((service, index) => (
              <Card key={service.id} onClick={() => onServiceSelect(service)} className="p-8 flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
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
          <div className="text-center mt-16">
            <Button variant="primary" size="lg" onClick={() => navigateTo(Page.Services)}>
              Barcha Xizmatlarni Ko'rish
            </Button>
          </div>
        </div>
      </section>

      {/* Uzbekistan 2030 Strategy Section */}
      <section ref={roadmapRef} className={`py-24 overflow-hidden ${isRoadmapVisible ? 'is-visible' : ''}`}>
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">"O'zbekiston — 2030" Strategiyasi Yo'l Xaritasi</h2>
                  <p className="text-xl text-medium-gray">
                      Platformamizning har bir xizmati mamlakatimiz taraqqiyot strategiyasining tadbirkorlikni rivojlantirishga qaratilgan maqsadlariga mos keladi.
                  </p>
              </div>

              <div className="relative">
                  {/* Roadmap Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 hidden md:block w-1 bg-gray-200/50 rounded-full"></div>
                  <svg className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full w-1 hidden md:block" width="2" height="100%">
                      <path d="M 1 0 V 1000" stroke="url(#line-gradient)" strokeWidth="4" fill="none" className="roadmap-line-path" />
                      <defs>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#FBBF24" />
                        </linearGradient>
                      </defs>
                  </svg>

                  {/* Roadmap Items */}
                  {strategyGoals.map((goal, index) => (
                      <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          <div className={`w-full md:w-5/12 roadmap-item roadmap-item-${index + 1}`}>
                              <Card className="p-8">
                                  <h3 className="text-2xl font-heading font-bold text-dark-gray mb-3">{goal.title}</h3>
                                  <p className="text-medium-gray text-base">{goal.description}</p>
                              </Card>
                          </div>
                          <div className="hidden md:flex justify-center w-2/12">
                              <div className={`z-10 bg-white/80 backdrop-blur-sm border-4 border-primary-green rounded-full p-4 roadmap-item roadmap-item-${index + 1} shadow-lg`}>
                                  <goal.icon className="w-10 h-10 text-primary-green" />
                              </div>
                          </div>
                          <div className="w-5/12 hidden md:block"></div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white/70">
          <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">Mijozlarimiz biz haqimizda</h2>
                  <p className="text-xl text-medium-gray">
                      O'zbekistonning turli burchaklaridagi tadbirkorlar KBU HUB platformasi orqali o'z bizneslarini qanday rivojlantirayotganini bilib oling.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                      <Card key={index} className="p-8">
                          <p className="text-medium-gray text-lg mb-6 relative">
                              <span className="absolute -top-4 -left-4 text-8xl text-gray-100/80 font-serif z-0">“</span>
                              <span className="relative z-10">{testimonial.text}</span>
                          </p>
                          <div className="flex items-center">
                              <img className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-primary-green/50 p-0.5" src={testimonial.avatar} alt={testimonial.name} />
                              <div>
                                  <p className="font-bold font-heading text-dark-gray text-lg">{testimonial.name}</p>
                                  <p className="text-base text-primary-green font-semibold">{testimonial.role}</p>
                              </div>
                          </div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="py-20 bg-dark-gray text-white mx-2 md:mx-4 rounded-3xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-heading font-bold mb-4">
                Sizning <span className="text-accent-gold">shaxsiy AI yordamchingiz</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Biznesga oid har qanday savolingiz bormi? Soliqlar, hujjatlar, marketing... Bizning sun'iy intellektga asoslangan yordamchimiz sizga 24/7 rejimida o'zbek tilida maslahat berishga tayyor.
              </p>
              <Button variant="secondary" size="lg" onClick={() => navigateToAssistant('')}>
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mr-2" />
                Hozir suhbatlashish
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="w-64 h-64 bg-gradient-to-br from-primary-green to-dark-green/50 rounded-full flex items-center justify-center shadow-2xl animate-subtle-pulse">
                <ChatBubbleOvalLeftEllipsisIcon className="w-32 h-32 text-accent-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-heading font-bold text-dark-gray mb-4">So'nggi Yangiliklar</h2>
              <p className="text-xl text-medium-gray">
                  Biznes olamidagi eng muhim voqealar va tahliliy maqolalar bilan tanishib boring.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_DATA.slice(0, 3).map(article => (
              <Card key={article.id} className="p-0 flex flex-col overflow-hidden">
                <img src={article.imageUrl} alt={article.title} className="w-full h-60 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary-green font-semibold mb-2">{article.category}</p>
                  <h3 className="text-xl font-heading font-bold text-dark-gray mb-3 flex-grow">{article.title}</h3>
                  <p className="text-medium-gray text-base mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400 font-medium">{article.publishDate}</span>
                    <a href="https://t.me/kbu_hub_news" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-green hover:underline">Batafsil &rarr;</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
           <div className="text-center mt-16">
            <a href="https://t.me/kbu_hub_news" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Barcha Yangiliklarni O'qish
              </Button>
            </a>
          </div>
        </div>
      </section>

       {/* Partners Section */}
        <section className="py-20 bg-white/70">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-heading font-bold text-medium-gray mb-16">Bizning Ishonchli Hamkorlarimiz</h2>
                <div 
                  className="w-full overflow-hidden group"
                  style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
                >
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                        {[...partners, ...partners].map((partner, index) => (
                             <div key={index} className="flex-shrink-0 mx-10" style={{ width: '220px' }}>
                                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 block transform hover:scale-105">
                                   <p className="font-bold text-2xl text-dark-gray">{partner.name}</p>
                                   <p className="text-sm text-medium-gray mt-1">{partner.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default HomePage;