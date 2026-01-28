import React, { useState, useEffect } from 'react';
import './IntroductionSection.css';

const IntroductionSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        setTextVisible(true);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="introduction-section position-relative overflow-hidden">
      <div className="image-carousel">
        {backgroundImages.map((img, index) => (
          <div 
            key={index} 
            className={`carousel-image ${index === currentImage ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${img})`,
              transition: 'opacity 1.5s ease-in-out'
            }}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      
      {/* Main content container with hover effect */}
      <div className="introduction-content py-5" id="intro-hover-target">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold mb-4 intro-title text-center">
                Welcome to <span className="highlight-annapurna">Annapurna</span>
              </h1>
              
              <div className={`introduction-text ${textVisible ? 'fade-in' : ''}`}>
                <p className="lead fs-5 mb-4">
                  At <span className="highlight-brand">Annapurna Mess & Catering</span>, we believe that exceptional food is the foundation of every memorable experience. With over a decade of dedication to culinary excellence, we have established ourselves as Nagpur's most trusted name in <span className="highlight-keyword">professional catering services</span> and <span className="highlight-keyword">quality mess facilities</span>.
                </p>
                
                <p className="fs-5 mb-4">
                  Our commitment to <span className="highlight-keyword">fresh ingredients</span>, authentic flavors, and impeccable service has made us the preferred choice for corporate events, private celebrations, and daily meal solutions. We source our produce locally, ensuring that every dish we serve is not only delicious but also <span className="highlight-keyword">nutritionally balanced</span> and prepared with the highest standards of hygiene.
                </p>
                
                <p className="fs-5 mb-4">
                  What sets us apart is our personalized approach – we understand that every client has unique requirements, and we take pride in crafting customized menus that exceed expectations. Whether you're planning an intimate gathering or a large-scale corporate event, our team of experienced chefs and dedicated staff ensure that every detail is executed with <span className="highlight-keyword">precision and care</span>.
                </p>
                
                <p className="fs-5 mb-4">
                  Join thousands of satisfied customers who have experienced the <span className="highlight-annapurna">Annapurna difference</span> – where tradition meets innovation, and every meal tells a story of passion, quality, and unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;