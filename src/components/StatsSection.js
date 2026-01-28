import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  // Service images
  const serviceImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  ];

  // ✅ Use useRef for stable reference
  const cardRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);

  const [cardsInView, setCardsInView] = useState([false, false, false]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index, 10);
        if (entry.isIntersecting && !cardsInView[index]) {
          setCardsInView(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  // ✅ Store current ref values in a local variable
  const currentRefs = cardRefs.current;

  currentRefs.forEach((ref, index) => {
    if (ref.current) {
      ref.current.dataset.index = index;
      observer.observe(ref.current);
    }
  });

  return () => {
    // ✅ Use the local variable in cleanup
    currentRefs.forEach(ref => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    });
  };
}, [cardsInView]);

  return (
    <section className="py-5 stats-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted">We offer a wide range of catering services for all occasions</p>
        </div>
        
        <div className="row">
          {/* Corporate Catering */}
          <div className="col-md-4 mb-4" ref={cardRefs.current[0]}>
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[0] ? 'animate-slide-in-left' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[0]})` }}
            >
              <div className="service-overlay">
                <h3 className="mb-3">Corporate Catering</h3>
                <p className="mb-3">Professional catering services for your business events, meetings, and conferences. We handle everything from planning to execution.</p>
                <button className="btn btn-outline-light mt-auto">Learn More</button>
              </div>
            </div>
          </div>
          
          {/* Private Events */}
          <div className="col-md-4 mb-4" ref={cardRefs.current[1]}>
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[1] ? 'animate-slide-in-right' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[1]})` }}
            >
              <div className="service-overlay">
                <h3 className="mb-3">Private Events</h3>
                <p className="mb-3">Make your special occasions memorable with our exquisite catering services for weddings, birthdays, and family gatherings.</p>
                <button className="btn btn-outline-light mt-auto">Learn More</button>
              </div>
            </div>
          </div>
          
          {/* Special Diet Menus */}
          <div className="col-md-4 mb-4" ref={cardRefs.current[2]}>
            <div 
              className={`service-card p-4 rounded-3 h-100 ${cardsInView[2] ? 'animate-slide-in-left' : ''}`}
              style={{ backgroundImage: `url(${serviceImages[2]})` }}
            >
              <div className="service-overlay">
                <h3 className="mb-3">Special Menus</h3>
                <p className="mb-3">Customized meal plans for specific dietary needs including vegan, keto, and more. We cater to all your requirements.</p>
                <button className="btn btn-outline-light mt-auto">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;