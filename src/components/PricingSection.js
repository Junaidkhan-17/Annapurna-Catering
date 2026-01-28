import React from 'react';

const PricingSection = () => (
  <section className="py-5">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="mb-3">Flexible Pricing Options For <span className="highlight-text">Healthy Food</span> Package</h2>
        <p className="text-muted">Choose the plan that suits your needs</p>
      </div>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="pricing-card bg-dark text-white p-4 rounded-3">
            <div className="text-center mb-3">
              <h3>Basic Plan</h3>
              <p className="text-muted">A small river named Duden flows by their place and supplies</p>
            </div>
            <div className="price-box d-flex align-items-center justify-content-center mb-3">
              <span className="fs-1 fw-bold">$</span>
              <span className="fs-1 fw-bold ms-2">59.29</span>
              <span className="ms-2 text-muted">/ MONTH</span>
            </div>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> 3 meals/week
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Customized Meals
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Essential Food
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Moneyback Guarantee
              </li>
              <li className="d-flex align-items-center">
                <span className="me-2">✓</span> Customer Support
              </li>
            </ul>
            <button className="btn btn-orange w-100">Get A Quote</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="pricing-card bg-orange text-white p-4 rounded-3">
            <div className="text-center mb-3">
              <h3>Standard Plan</h3>
              <p className="text-muted">A small river named Duden flows by their place and supplies</p>
            </div>
            <div className="price-box d-flex align-items-center justify-content-center mb-3">
              <span className="fs-1 fw-bold">$</span>
              <span className="fs-1 fw-bold ms-2">89.49</span>
              <span className="ms-2 text-muted">/ MONTH</span>
            </div>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> 5 meals/week
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Advanced Meals
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Priority Delivery
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Customized Meals
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Healthy Guarantee
              </li>
            </ul>
            <button className="btn btn-dark w-100">Get A Quote</button>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="pricing-card bg-dark text-white p-4 rounded-3">
            <div className="text-center mb-3">
              <h3>Premium Plan</h3>
              <p className="text-muted">A small river named Duden flows by their place and supplies</p>
            </div>
            <div className="price-box d-flex align-items-center justify-content-center mb-3">
              <span className="fs-1 fw-bold">$</span>
              <span className="fs-1 fw-bold ms-2">149</span>
              <span className="ms-2 text-muted">/ MONTH</span>
            </div>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> 10 meals/week
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Personalized Meals
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Diet Food Optimization
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">✓</span> Food Savings Guarantee
              </li>
              <li className="d-flex align-items-center">
                <span className="me-2">✓</span> Smart Delivery
              </li>
            </ul>
            <button className="btn btn-orange w-100">Get A Quote</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;