import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LogoCarousel from '../components/LogoCarousel';
import CallToActionSection from '../components/CallToActionSection';

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-3 mb-3">Pricing Plans</h1>
          <p className="lead">Choose the perfect plan for your dietary needs</p>
        </div>
        
        <PricingSection />
        <TestimonialsSection />
        <LogoCarousel />
        <CallToActionSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing ;