import React from 'react';

const CallToActionSection = () => (
  <section className="py-5 bg-dark text-white">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="mb-4">Ready To Eat Healthier - Let's Get Started Today.</h2>
          <p className="lead mb-4"> </p>
          <button className="btn btn-orange px-5 py-3">Contact Us</button>
        </div>
        <div className="col-md-6 text-center">
          <div className="position-relative">
            <div className="d-inline-block p-3 bg-orange rounded-3">
              <div className="d-flex align-items-center">
                <div className="rounded-circle bg-white text-dark d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                  <span className="fs-1">⭐</span>
                </div>
                <div className="ms-3">
                  <h3 className="mb-0">Multiple Unique Menus</h3>
                  <p className="mb-0 text-muted">Customer Choice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToActionSection;