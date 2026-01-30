import React from "react";
import "./HowItWorksSection.css";

const HowItWorksSection = () => {
  const stepImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Meal Plan",
      desc: "Select flexible meal plans crafted for your lifestyle.",
    },
    {
      number: "02",
      title: "Customize Your Menu",
      desc: "Personalize dishes or select from our curated menus.",
    },
    {
      number: "03",
      title: "Place Your Order",
      desc: "Confirm your order with a smooth and easy process.",
    },
    {
      number: "04",
      title: "Enjoy Fresh Delivery",
      desc: "Fresh, hygienic meals delivered right on time.",
    },
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-header">
          <h2>
            Simple Steps To Enjoy Our{" "}
            <span className="highlight-text">Healthy Meals</span>
          </h2>
          <p>Fast, simple & reliable catering process</p>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div
                className="step-card"
                style={{ backgroundImage: `url(${stepImages[index]})` }}
              >
                <div className="step-overlay">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

