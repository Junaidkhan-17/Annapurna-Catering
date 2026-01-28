import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LogoCarousel from '../components/LogoCarousel';
import CallToActionSection from '../components/CallToActionSection';

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-3 mb-3">Our Menu</h1>
          <p className="lead">Explore our delicious and healthy meal options</p>
        </div>
        
        <MenuSection />
        <TestimonialsSection />
        <LogoCarousel />
        <CallToActionSection />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;