import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  // Background image for contact section
  const contactBg = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';
  
  // Location/map image
  const locationImg = 'https://images.unsplash.com/photo-1589927986089-35812388d00a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';

  return (
    <div>
      <Navbar />
      
      <section 
        className="contact-hero position-relative py-5 mb-4"
        style={{ backgroundImage: `url(${contactBg},${locationImg })` }}
      >
        <div className="contact-overlay">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="display-3 mb-3 fw-bold">Contact Us</h1>
              <p className="lead fs-4">Get in touch with our team for any inquiries</p>
              <div className="contact-highlight-badge mt-3">
                <i className="fas fa-phone me-2"></i>
                <a
            href="tel:+91 9340511235"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <strong>+91 9340511235</strong> – Call us now for immediate assistance!
          </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container my-5">
        <div className="row">
          {/* Contact Information Card */}
          <div className="col-md-6 mb-4">
            <div className="contact-card shadow-lg h-100">
              <div className="contact-card-header text-white p-4">
                <h3 className="card-title mb-0">
                  <i className="fas fa-info-circle me-2"></i>Contact Information
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                  <h5 className="mb-2 text-orange">Address</h5>
                  <p className="mb-0 contact-address">
                    <strong>34 Government Press Colony</strong><br />
                    Dabha, <span className="highlight-location">Nagpur</span>, Maharashtra 441501
                  </p>
                </div>
                
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-phone fa-2x"></i>
                  </div>
                  <h5 className="mb-2 text-orange">Phone</h5>
                  <p className="mb-0">
                    <a href="tel:+9109226203020" className="contact-link">
                      <strong className="highlight-phone">+91 092262 03020</strong>
                    </a>
                  </p>
                  <p className="text-muted small mt-1">
                    <i className="fas fa-clock me-1"></i> Available: Mon-Fri 8AM-8PM
                  </p>
                </div>
                
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                  <h5 className="mb-2 text-orange">Email</h5>
                  <p className="mb-0">
                    <a href="mailto:info@messcatering.com" className="contact-link">
                      <strong className="highlight-email">info@messcatering.com</strong>
                    </a>
                  </p>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon bg-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-3">
                    <i className="fas fa-clock fa-2x"></i>
                  </div>
                  <h5 className="mb-2 text-orange">Business Hours</h5>
                  <div className="business-hours">
                    <p className="mb-1">
                      <i className="fas fa-calendar me-2 text-orange"></i>
                      <strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM
                    </p>
                    <p className="mb-1">
                      <i className="fas fa-calendar me-2 text-orange"></i>
                      <strong>Saturday:</strong> 9:00 AM - 6:00 PM
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-calendar me-2 text-orange"></i>
                      <strong className="closed-text">Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Image Card */}
          </div>
          
          {/* Contact Form Card */}
          <div className="col-md-6 mb-4">
            <div className="contact-card shadow-lg h-100">
              <div className="contact-card-header text-white p-4">
                <h3 className="card-title mb-0">
                  <i className="fas fa-envelope me-2"></i>Send Us a Message
                </h3>
              </div>
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      <i className="fas fa-user me-2 text-orange"></i>Your Name
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="name" 
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      <i className="fas fa-envelope me-2 text-orange"></i>Email Address
                    </label>
                    <input 
                      type="email" 
                      className="form-control form-control-lg" 
                      id="email" 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">
                      <i className="fas fa-tag me-2 text-orange"></i>Subject
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      id="subject" 
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">
                      <i className="fas fa-comment me-2 text-orange"></i>Your Message
                    </label>
                    <textarea 
                      className="form-control form-control-lg" 
                      id="message" 
                      rows="5"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-orange w-100 btn-lg py-3"
                  >
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </button>
                  
                  <div className="response-time mt-3 text-center">
                    <p className="mb-0 text-muted small">
                      <i className="fas fa-bolt text-orange me-1"></i>
                      <strong>We respond within 24 hours</strong>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Quick Contact Badges */}
            
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent footer overlap */}
      <div className="contact-page-bottom-spacer"></div>
      
      <Footer />
    </div>
  );
};

export default Contact;