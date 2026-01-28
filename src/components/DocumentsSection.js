import React from 'react';
import './DocumentsSection.css';

const documents = [
  { type: 'pdf', title: 'Compliance-letter-for-tender-submission', file: '/docs/Compilance-letter-for-submission.pdf' },
  { type: 'pdf', title: 'food', file: '/docs/food.pdf' },
  { type: 'pdf', title: 'FORMF', file: '/docs/FORMF.pdf' },
  { type: 'pdf', title: 'GSTCertificate', file: '/docs/GSTCertification.pdf' },
  { type: 'pdf', title: 'Udyam-Registration-Certificate', file: '/docs/Udyam-Registration-Certificate.pdf' },
];

const DocumentsSection = () => {
  return (
    <section className="documents-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Certifications & Documents</h2>
          <p className="text-muted">
            Verified documents that reflect our quality, safety, and compliance
          </p>
        </div>

        <div className="row g-4">
          {documents.map((doc, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="document-card">
                <div className="document-preview">
                  {doc.type === 'pdf' ? (
                    <iframe
                      src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={doc.title}
                    />
                  ) : (
                    <img src={doc.file} alt={doc.title} />
                  )}
                </div>

                <div className="document-overlay">
                  <h5>{doc.title}</h5>
                  <a
                    href={doc.file}
                    download
                    className="btn btn-orange btn-sm mt-2"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
