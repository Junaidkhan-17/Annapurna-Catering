import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';
import LogoCarousel from '../components/LogoCarousel';
import CallToActionSection from '../components/CallToActionSection';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-3 mb-3">About Us</h1>
          <p className="lead">Learn more about our mission and values</p>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <div className="about-image rounded-3 overflow-hidden shadow-sm" style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1514320491890-4e09f859b09f?auto=format&fit=crop&w=600")',
              height: '400px',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Our Story</h2>
            <p className="lead mb-3">Since 2010, we've been providing high-quality catering services to clients across the region.</p>
            <p className="mb-3">We started as a small family business with a simple mission: to provide healthy, delicious, and fresh food to our community. Today, we've grown into one of the most trusted catering services in the area, serving over 250+ unique menus to satisfied customers.</p>
            <p className="mb-3">Our commitment to quality ingredients, excellent service, and innovative menu options has made us the preferred choice for corporate events, private gatherings, and daily meal delivery.</p>
            
            <h3 className="mt-4 mb-3">Our Values</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-orange me-3 mt-1"></i>
                <span>Quality ingredients sourced from local farmers</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-orange me-3 mt-1"></i>
                <span>Commitment to health and nutrition</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="fas fa-check-circle text-orange me-3 mt-1"></i>
                <span>Exceptional customer service</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="fas fa-check-circle text-orange me-3 mt-1"></i>
                <span>Sustainable business practices</span>
              </li>
            </ul>
          </div>
        </div>
        
        <TestimonialsSection />
        <LogoCarousel />
        <CallToActionSection />
      </div>
      <Footer/>
    </div>
  );
};

export default About;