import React from 'react';

const TestimonialsSection = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="mb-3">Discover What Our Clients Say About Our <span className="highlight-text">Catering</span></h2>
        <p className="text-muted">Hear from our satisfied customers</p>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="testimonial-card bg-white p-4 rounded-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle bg-orange text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <span className="fs-4">J</span>
              </div>
              <div className="ms-3">
                <h5 className="mb-0">Mr. John Doe</h5>
                <p className="text-muted mb-0">Client</p>
              </div>
            </div>
            <p className="text-muted">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="testimonial-card bg-white p-4 rounded-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle bg-orange text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <span className="fs-4">S</span>
              </div>
              <div className="ms-3">
                <h5 className="mb-0">Sarah Johnson</h5>
                <p className="text-muted mb-0">Client</p>
              </div>
            </div>
            <p className="text-muted">"The food quality and delivery service has been exceptional. Highly recommend for corporate events!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;