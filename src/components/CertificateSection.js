import React, { useState } from "react";
import "./CertificateSection.css";

import cateringServiceBusinessCard from "../certificates/cateringServiceBusinessCard.jpeg";
import compilanceLetterForTenderSubmission from "../certificates/compilanceLetterForTenderSubmission.jpeg";
import foodsAndDrugsAdministrationCertificate1 from "../certificates/foodsAndDrugsAdministrationCertificate1.jpeg";
import foodsAndDrugsAdministrationCertificate2 from "../certificates/foodsAndDrugsAdministrationCertificate2.jpeg";
import foodsAndDrugsAdministrationCertificate3 from "../certificates/foodsAndDrugsAdministrationCertificate3.jpeg";
import foodsAndDrugsAdministrationCertificate4 from "../certificates/foodsAndDrugsAdministrationCertificate4.jpeg";
import FORMFCertificate from "../certificates/FORMFCertificate.jpeg";
import gstRegistrationCertificate1 from "../certificates/gstRegistrationCertificate1.jpeg";
import gstRegistrationCertificate2 from "../certificates/gstRegistrationCertificate2.jpeg";
import gstRegistrationCertificate3 from "../certificates/gstRegistrationCertificate3.jpeg";
import udyamCertificate1 from "../certificates/udyamCertificate1.jpeg";
import udyamCertificate2 from "../certificates/udyamCertificate2.jpeg";
import udyamCertificate3 from "../certificates/udyamCertificate3.jpeg";

const CertificateSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  const certificateBlocks = [
    {
      title: "Business & Tender Documents",
      images: [cateringServiceBusinessCard, compilanceLetterForTenderSubmission],
    },
    {
      title: "Food & Drugs Administration Certificates",
      images: [
        foodsAndDrugsAdministrationCertificate1,
        foodsAndDrugsAdministrationCertificate2,
        foodsAndDrugsAdministrationCertificate3,
        foodsAndDrugsAdministrationCertificate4,
      ],
    },
    {
      title: "FORM-F & GST Certificates",
      images: [
        FORMFCertificate,
        gstRegistrationCertificate1,
        gstRegistrationCertificate2,
        gstRegistrationCertificate3,
      ],
    },
    {
      title: "Udyam Registration Certificates",
      images: [udyamCertificate1, udyamCertificate2, udyamCertificate3],
    },
  ];

  return (
    <section className="certificate-section">
      <div className="container">
        <div className="certificate-header">
          <h2>Our Certifications</h2>
          <p>Trusted & verified legal documents</p>
        </div>

        {certificateBlocks.map((block, i) => (
          <div className="certificate-block" key={i}>
            <h3 className="block-title">{block.title}</h3>

            <div className="certificate-grid">
              {block.images.map((img, index) => (
                <div
                  key={index}
                  className="certificate-thumb"
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="Certificate" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Click Modal */}
      {activeImage && (
        <div className="certificate-modal" onClick={() => setActiveImage(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveImage(null)}>
              ✕
            </button>
            <img src={activeImage} alt="Certificate Full View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateSection;
