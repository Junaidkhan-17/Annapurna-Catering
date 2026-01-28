import React from 'react';

const LogoCarousel = () => {
  const logos = [
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+1',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+2',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+3',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+4',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+5',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+6',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+7',
    'https://via.placeholder.com/150x50/FF9900/FFFFFF?text=Company+8'
  ];

  return (
    <section className="logo-carousel-section py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Trusted By</h2>
        <div className="logo-carousel-wrapper overflow-hidden">
          <div className="logo-carousel d-flex">
            {[...logos, ...logos].map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`Client ${index + 1}`}
                className="logo-item mx-3"
                style={{ 
                  height: '60px',
                  opacity: 0.8,
                  transition: 'opacity 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;