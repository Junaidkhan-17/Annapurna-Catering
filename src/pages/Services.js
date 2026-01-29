import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CallToActionSection from '../components/CallToActionSection';
//import DocumentsSection from '../components/DocumentsSection';

const Services = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-3 mb-3">Our Catering Services</h1>
          <p className="lead">We offer a wide range of professional catering services for all occasions</p>
        </div>       
        <ServicesSection />
        <HowItWorksSection />
        <CallToActionSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;