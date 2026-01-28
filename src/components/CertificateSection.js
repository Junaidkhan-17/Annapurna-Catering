import React, { useState } from 'react';
import './CertificateSection.css';

// Import your certificate images here
import cateringServiceBusinessCard from '../certificates/cateringServiceBusinessCard.jpeg';
import compilanceLetterForTenderSubmission from '../certificates/compilanceLetterForTenderSubmission.jpeg';
import foodsAndDrugsAdministrationCertificate1 from '../certificates/foodsAndDrugsAdministrationCertificate1.jpeg';
import foodsAndDrugsAdministrationCertificate2 from '../certificates/foodsAndDrugsAdministrationCertificate2.jpeg';
import foodsAndDrugsAdministrationCertificate3 from '../certificates/foodsAndDrugsAdministrationCertificate3.jpeg';
import foodsAndDrugsAdministrationCertificate4 from '../certificates/foodsAndDrugsAdministrationCertificate4.jpeg';
import FORMFCertificate from '../certificates/FORMFCertificate.jpeg';
import gstRegistrationCertificate1 from '../certificates/gstRegistrationCertificate1.jpeg';
import gstRegistrationCertificate2 from '../certificates/gstRegistrationCertificate2.jpeg';
import gstRegistrationCertificate3 from '../certificates/gstRegistrationCertificate3.jpeg';
import udyamCertificate1 from '../certificates/udyamCertificate1.jpeg';
import udyamCertificate2 from '../certificates/udyamCertificate2.jpeg';
import udyamCertificate3 from '../certificates/udyamCertificate3.jpeg';

const CertificateSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const certificateBlocks = [
    {
      id: 1,
      title: "Business Card & Letter for Tender Submission",
      images: [cateringServiceBusinessCard, compilanceLetterForTenderSubmission],
    },
    {
      id: 2,
      title: "Food and Drugs Administration Certificate",
      images: [foodsAndDrugsAdministrationCertificate1, foodsAndDrugsAdministrationCertificate2, foodsAndDrugsAdministrationCertificate3, foodsAndDrugsAdministrationCertificate4],
    },
    {
      id: 3,
      title: "FORMF Certificate & GST Registration Certificate",
      images: [FORMFCertificate, gstRegistrationCertificate1, gstRegistrationCertificate2, gstRegistrationCertificate3],
    },
    {
      id: 4,
      title: "Udyam Certificate",
      images: [udyamCertificate1, udyamCertificate2, udyamCertificate3],
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <section className="certificate-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Our Certifications & Awards</h2>
          <p className="text-muted">Recognized for excellence in food quality and service</p>
        </div>
        
        <div className="certificate-blocks">
          {certificateBlocks.map((block) => (
            <div key={block.id} className="certificate-block mb-5">
              <div className="block-header text-center mb-4">
                <h3 className="block-title">{block.title}</h3>
              </div>
              
              <div className={`certificate-grid grid-${block.images.length}`}>
                {block.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="certificate-item"
                    onMouseEnter={() => setHoveredImage(image)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div 
                      className="certificate-image-wrapper"
                      onDoubleClick={() => openModal(image)} // Changed to double-click
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleKeyDown}
                    >
                      <img 
                        src={image} 
                        alt={`${block.title} - Certificate ${index + 1}`}
                        className="certificate-img"
                      />
                      <div className="certificate-overlay">
                        <div className="certificate-icon">
                          <i className="fas fa-search-plus"></i>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Preview */}
                    {hoveredImage === image && (
                      <div className="hover-preview">
                        <img 
                          src={image} 
                          alt="Preview" 
                          className="preview-img"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;