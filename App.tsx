import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import EducationPage from './components/EducationPage';
import Chatbot from './components/Chatbot';
import ServiceDetailPage from './components/ServiceDetailPage';
import AssistantPage from './components/AssistantPage';
import AboutPage from './components/AboutPage';
import AppealsPage from './components/AppealsPage';
import MembershipPage from './components/MembershipPage';
import MembershipGate from './components/MembershipGate';
import MembershipCertificate from './components/MembershipCertificate';
import { Page, Service, User } from './types';
import AnnouncementBanner from './components/common/AnnouncementBanner';
import PublicOfferModal from './components/PublicOfferModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [assistantQuery, setAssistantQuery] = useState<string>('');
  
  // New state for membership and authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showMembershipGate, setShowMembershipGate] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [serviceToAccess, setServiceToAccess] = useState<Service | null>(null);
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('offerAccepted');
    if (hasAccepted !== 'true') {
        setShowOfferModal(true);
    }
  }, []);


  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setSelectedService(null);
    if (page !== Page.Assistant) {
      setAssistantQuery('');
    }
    window.scrollTo(0, 0);
  };
  
  const navigateToAssistant = (query: string) => {
    setAssistantQuery(query);
    navigateTo(Page.Assistant);
  };

  const selectService = (service: Service) => {
    if (isLoggedIn) {
      setCurrentPage(Page.Services);
      setSelectedService(service);
      window.scrollTo(0, 0);
    } else {
      setServiceToAccess(service);
      setShowMembershipGate(true);
    }
  };

  const handleRegistrationSuccess = (user: User) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    setShowMembershipGate(false);
    setShowCertificate(true);
  };

  const handleMembershipRegistration = (user: User) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };
  
  const handleCertificateContinue = () => {
    setShowCertificate(false);
    if (serviceToAccess) {
        // Automatically navigate to the service the user wanted to access
        setCurrentPage(Page.Services);
        setSelectedService(serviceToAccess);
        setServiceToAccess(null);
        window.scrollTo(0, 0);
    }
  };

  const handleAcceptOffer = () => {
    localStorage.setItem('offerAccepted', 'true');
    setShowOfferModal(false);
  };


  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} onServiceSelect={selectService} navigateToAssistant={navigateToAssistant} />;
      case Page.Services:
        return selectedService ? (
          <ServiceDetailPage service={selectedService} onBack={() => setSelectedService(null)} />
        ) : (
          <ServicesPage onServiceSelect={selectService} />
        );
      case Page.Education:
        return <EducationPage />;
      case Page.Appeals:
        return <AppealsPage />;
      case Page.Membership:
        return <MembershipPage 
                  onRegister={handleMembershipRegistration}
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                  navigateTo={navigateTo}
               />;
      case Page.About:
        return <AboutPage />;
      case Page.Assistant:
        return <AssistantPage initialQuery={assistantQuery} />;
      default:
        return <HomePage navigateTo={navigateTo} onServiceSelect={selectService} navigateToAssistant={navigateToAssistant} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark-gray">
      <AnnouncementBanner />
      <Header activePage={currentPage} navigateTo={navigateTo} isLoggedIn={isLoggedIn} />
      <main className="flex-grow animate-fade-in bg-light-bg" key={currentPage}>
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
      {showMembershipGate && (
        <MembershipGate 
          onSuccess={handleRegistrationSuccess} 
          onClose={() => setShowMembershipGate(false)} 
        />
      )}
       {showCertificate && currentUser && (
        <MembershipCertificate 
          user={currentUser} 
          onContinue={handleCertificateContinue} 
        />
      )}
      {showOfferModal && <PublicOfferModal onAccept={handleAcceptOffer} />}
    </div>
  );
};

export default App;
