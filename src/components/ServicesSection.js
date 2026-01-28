import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  // State to track when cards are in view
  const [cardsInView, setCardsInView] = useState([false, false, false, false]);
  
  // Refs for each card
  const cardRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);

  // Background images for each service card - More relevant and high-quality
  const serviceImages = [
    'https://images.unsplash.com/photo-1569257820342-b64a933e7770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565288832840-5ec3e406fe5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  ];

  // Container background image
  const containerBg = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

  // Memoized callback for handling intersection
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.dataset.index);
      if (entry.isIntersecting && !cardsInView[index]) {
        setTimeout(() => {
          setCardsInView(prev => {
            if (prev[index]) return prev;
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 100);
      }
    });
  }, [cardsInView]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    cardRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [handleIntersection]);

  return (
    <section 
      className="py-5 services-section position-relative"
      style={{ backgroundImage: `url(${containerBg})` }}
      id="services"
    >
      <div className="container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted">Comprehensive catering solutions for all your needs</p>
        </div>
        
        <div className="row">
          {/* Corporate Catering */}
          <div 
            className="col-md-6 mb-4" 
            ref={cardRefs.current[0]}
          >
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[0] ? 'animate-slide-in-left' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[0]})` }}
            >
              <div className="service-overlay">
                <div className="service-icon mb-3">
                  <i className="fas fa-briefcase fa-3x"></i>
                </div>
                <h3 className="mb-3">Corporate Catering</h3>
                <p className="mb-3">Professional catering services for your business events, meetings, and conferences. We handle everything from planning to execution.</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Customized menus for corporate events</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Professional event coordination</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>On-time delivery and setup</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Corporate account management</span>
                  </li>
                </ul>
                <button className="btn btn-orange mt-3">Learn More</button>
              </div>
            </div>
          </div>
          
          {/* Private Events */}
          <div 
            className="col-md-6 mb-4" 
            ref={cardRefs.current[1]}
          >
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[1] ? 'animate-slide-in-right' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[1]})` }}
            >
              <div className="service-overlay">
                <div className="service-icon mb-3">
                  <i className="fas fa-glass-martini-alt fa-3x"></i>
                </div>
                <h3 className="mb-3">Private Events</h3>
                <p className="mb-3">Make your special occasions memorable with our exquisite catering services for weddings, birthdays, and family gatherings.</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Personalized menu planning</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Event planning consultation</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Full service staffing</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Customized presentation and plating</span>
                  </li>
                </ul>
                <button className="btn btn-orange mt-3">Learn More</button>
              </div>
            </div>
          </div>
          
          {/* Special Diet Menus */}
          <div 
            className="col-md-6 mb-4" 
            ref={cardRefs.current[2]}
          >
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[2] ? 'animate-slide-in-left' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[2]})` }}
            >
              <div className="service-overlay">
                <div className="service-icon mb-3">
                  <i className="fas fa-leaf fa-3x"></i>
                </div>
                <h3 className="mb-3">Catering Menus</h3>
                <p className="mb-3">Customized meal plans for specific needs including vegan, Services on Table and more. We cater to all your dietary requirements.</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Vegan and vegetarian options</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Table Service meal plans</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Personalized consultations</span>
                  </li>
                </ul>
                <button className="btn btn-orange mt-3">Learn More</button>
              </div>
            </div>
          </div>
          
          {/* Meal Prep Plans */}
          <div 
            className="col-md-6 mb-4" 
            ref={cardRefs.current[3]}
          >
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[3] ? 'animate-slide-in-right' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[3]})` }}
            >
              <div className="service-overlay">
                <div className="service-icon mb-3">
                  <i className="fas fa-utensils fa-3x"></i>
                </div>
                <h3 className="mb-3">Meal Prep Plans</h3>
                <p className="mb-3">Convenient meal prep services that make healthy eating easy. We deliver fresh, ready-to-eat meals to your doorstep.</p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Weekly meal delivery service</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Nutritionally Catering meals</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Flexible subscription options</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-check-circle text-orange me-2 mt-1"></i>
                    <span>Easy online ordering and customization</span>
                  </li>
                </ul>
                <button className="btn btn-orange mt-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;