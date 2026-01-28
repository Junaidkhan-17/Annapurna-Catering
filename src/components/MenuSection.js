
import React, { useState, useEffect } from 'react';
import dalChawal1 from '../images/dalChawal1.jpg';
import dalChawal2 from '../images/dalChawal2.jpg';
import rotiSabzi1 from '../images/rotiSabzi1.jpg';
import rotiSabzi2 from '../images/rotiSabzi2.jpg';
import paneerButterMasala1 from '../images/paneerButterMasala1.jpg';
import paneerButterMasala2 from '../images/paneerButterMasala2.jpg';
import rajmaChawal1 from '../images/rajmaChawal1.jpg';
import rajmaChawal2 from '../images/rajmaChawal2.jpg';
import sambarRice1 from '../images/sambarRice1.jpg';
import sambarRice2 from '../images/sambarRice2.jpg';
import kadhiPakora1 from '../images/kadhiPakora1.jpg';
import kadhiPakora2 from '../images/kadhiPakora2.jpg';
import choleBhature1 from '../images/choleBhature1.jpg';
import choleBhature2 from '../images/choleBhature2.jpg';
import alooParatha1 from '../images/alooParatha1.jpg';
import alooParatha2 from '../images/alooParatha2.jpg';
import vegetablePulao1 from '../images/vegetablePulao1.jpg';
import vegetablePulao2 from '../images/vegetablePulao2.jpg';
import './MenuSection.css';

const MenuSection = () => {
  // State to track current image index for each dish
  const [imageIndices, setImageIndices] = useState({
    dalChawal: 0,
    rotiSabzi: 0,
    paneerButterMasala: 0,
    rajmaChawal: 0,
    sambarRice: 0,
    kadhiPakora: 0,
    choleBhature: 0,
    alooParatha: 0,
    vegetablePulao: 0
  });

  // Image arrays for each dish (2 images each)
  const dishImages = {
    dalChawal: [dalChawal1, dalChawal2],
    rotiSabzi: [rotiSabzi1, rotiSabzi2],
    paneerButterMasala: [paneerButterMasala1, paneerButterMasala2],
    rajmaChawal: [rajmaChawal1, rajmaChawal2],
    sambarRice: [sambarRice1, sambarRice2],
    kadhiPakora: [kadhiPakora1, kadhiPakora2],
    choleBhature: [choleBhature1, choleBhature2],
    alooParatha: [alooParatha1, alooParatha2],
    vegetablePulao: [vegetablePulao1, vegetablePulao2]
  };

  // Auto-rotate images every 2.5 seconds
  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndices(prev => ({
      dalChawal: (prev.dalChawal + 1) % 2,
      rotiSabzi: (prev.rotiSabzi + 1) % 2,
      paneerButterMasala: (prev.paneerButterMasala + 1) % 2,
      rajmaChawal: (prev.rajmaChawal + 1) % 2,
      sambarRice: (prev.sambarRice + 1) % 2,
      kadhiPakora: (prev.kadhiPakora + 1) % 2,
      choleBhature: (prev.choleBhature + 1) % 2,
      alooParatha: (prev.alooParatha + 1) % 2,
      vegetablePulao: (prev.vegetablePulao + 1) % 2
    }));
  }, 5000);

  return () => clearInterval(interval);
}, []); // 👈 Empty dependency array is safe now!

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Mess Menu</h2>
          <p className="text-muted">Authentic Indian home-style meals</p>
        </div>
        
        <div className="row">
          {/* Dal Chawal */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.dalChawal[imageIndices.dalChawal]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.dalChawal === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.dalChawal === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Dal Chawal</h3>
                <p className="text-muted mb-3">Yellow lentils with steamed rice and ghee</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Vegetarian</span>
                    <span className="badge bg-success">Comfort Food</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Roti Sabzi */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.rotiSabzi[imageIndices.rotiSabzi]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.rotiSabzi === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.rotiSabzi === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Roti Sabzi</h3>
                <p className="text-muted mb-3">Fresh chapati with seasonal vegetable curry</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Freshly Made</span>
                    <span className="badge bg-success">Daily Special</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Paneer Butter Masala */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.paneerButterMasala[imageIndices.paneerButterMasala]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.paneerButterMasala === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.paneerButterMasala === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Paneer Butter Masala</h3>
                <p className="text-muted mb-3">Cottage cheese in rich tomato gravy</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Chef Special</span>
                    <span className="badge bg-success">Creamy</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Rajma Chawal */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.rajmaChawal[imageIndices.rajmaChawal]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.rajmaChawal === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.rajmaChawal === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Rajma Chawal</h3>
                <p className="text-muted mb-3">Red kidney beans curry with steamed rice</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Protein Rich</span>
                    <span className="badge bg-success">North Indian</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sambar Rice */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.sambarRice[imageIndices.sambarRice]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.sambarRice === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.sambarRice === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Sambar Rice</h3>
                <p className="text-muted mb-3">South Indian lentil stew with rice</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">South Indian</span>
                    <span className="badge bg-success">Spicy</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Kadhi Pakora */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.kadhiPakora[imageIndices.kadhiPakora]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.kadhiPakora === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.kadhiPakora === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Kadhi Pakora</h3>
                <p className="text-muted mb-3">Yogurt curry with crispy fritters</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Traditional</span>
                    <span className="badge bg-success">Comfort Food</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Chole Bhature */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.choleBhature[imageIndices.choleBhature]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.choleBhature === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.choleBhature === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Chole Bhature</h3>
                <p className="text-muted mb-3">Spicy chickpeas with fried bread</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Punjabi Special</span>
                    <span className="badge bg-success">Weekend Special</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Aloo Paratha */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.alooParatha[imageIndices.alooParatha]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.alooParatha === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.alooParatha === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Aloo Paratha</h3>
                <p className="text-muted mb-3">Stuffed flatbread with potato filling</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Breakfast</span>
                    <span className="badge bg-success">Homemade</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>

          {/* Vegetable Pulao */}
          <div className="col-md-4 mb-4">
            <div className="menu-card rounded-3 overflow-hidden shadow-sm">
              <div className="menu-image-container">
                <div 
                  className="menu-image" 
                  style={{ 
                    backgroundImage: `url(${dishImages.vegetablePulao[imageIndices.vegetablePulao]})`,
                    height: '250px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="image-indicator">
                  <span className={`dot ${imageIndices.vegetablePulao === 0 ? 'active' : ''}`}></span>
                  <span className={`dot ${imageIndices.vegetablePulao === 1 ? 'active' : ''}`}></span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-2">Vegetable Pulao</h3>
                <p className="text-muted mb-3">Fragrant rice with mixed vegetables</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge bg-success me-2">Aromatic</span>
                    <span className="badge bg-success">Festive</span>
                  </div>
                  <button className="btn btn-sm btn-outline-dark">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;