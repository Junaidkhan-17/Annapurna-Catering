

import React from 'react';
import './HowItWorksSection.css'; // We'll create this CSS file

const HowItWorksSection = () => {
  // Curated Unsplash images with proper licensing (free to use)
  const stepImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', // Meal planning
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', // Menu customization
    'https://images.unsplash.com/photo-1550317138-100013be89b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', // Ordering process
    'https://images.unsplash.com/photo-1563240669-6c7a3c0c4c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'  // Fresh delivery
  ];

  return (
    <section className="py-5 how-it-works-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Simple Steps To Enjoy Our <span className="highlight-text">Healthy Clean</span> Meals</h2>
          <p className="text-muted">Follow these easy steps to get started with our catering service</p>
        </div>
        
        <div className="row">
          {/* Step 1 */}
          <div className="col-md-3 mb-4">
            <div 
              className="step-card text-center p-4"
              style={{ backgroundImage: `url(${stepImages[0]})` }}
            >
              <div className="step-overlay">
                <div className="step-number bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                  <span className="fs-4 fw-bold">01.</span>
                </div>
                <h3 className="mb-3 text-white">First Choose Your Meals Plan</h3>
                <p className="text-light">Select from our various meal plans that suit your dietary needs and preferences</p>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="col-md-3 mb-4">
            <div 
              className="step-card text-center p-4"
              style={{ backgroundImage: `url(${stepImages[1]})` }}
            >
              <div className="step-overlay">
                <div className="step-number bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                  <span className="fs-4 fw-bold">02.</span>
                </div>
                <h3 className="mb-3 text-white">Customize Or Choose Your Menu</h3>
                <p className="text-light">Personalize your menu or choose from our pre-designed options</p>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="col-md-3 mb-4">
            <div 
              className="step-card text-center p-4"
              style={{ backgroundImage: `url(${stepImages[2]})` }}
            >
              <div className="step-overlay">
                <div className="step-number bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                  <span className="fs-4 fw-bold">03.</span>
                </div>
                <h3 className="mb-3 text-white">Place Your Order</h3>
                <p className="text-light">Confirm your order through our easy-to-use platform</p>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="col-md-3 mb-4">
            <div 
              className="step-card text-center p-4"
              style={{ backgroundImage: `url(${stepImages[3]})` }}
            >
              <div className="step-overlay">
                <div className="step-number bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                  <span className="fs-4 fw-bold">04.</span>
                </div>
                <h3 className="mb-3 text-white">Enjoy Fresh Delivery</h3>
                <p className="text-light">Receive your freshly prepared meals delivered to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;