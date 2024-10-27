import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import SuccessStories from './components/SuccessStories';
import AboutUsSection from './components/AboutUsSection';
import BenefitsSection from './components/BenefitsSection';
import CentralizeSection from './components/CentralizeSection';
import TourSection from './components/TourSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  const pricingRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onPricingClick={() => scrollToSection(pricingRef)}
        onAboutUsClick={() => scrollToSection(aboutUsRef)}
      />
      <Hero />
      <TrustSection />
      <SuccessStories />
      <AboutUsSection ref={aboutUsRef} />
      <BenefitsSection />
      <CentralizeSection />
      <TourSection />
      <PricingSection ref={pricingRef} />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
