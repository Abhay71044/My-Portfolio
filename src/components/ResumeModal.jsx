import React, { useEffect } from 'react';

const ResumeModal = ({ isOpen, resumeUrl, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const url = resumeUrl || '/assets/resume/Abhay_Singh_Resume.jpeg';

  return (
    <div
      className="lightbox-modal active"
      id="resume-modal"
      onClick={(e) => {
        if (e.target.classList.contains('lightbox-modal')) onClose();
      }}
    >
      <div
        className="lightbox-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90%',
          maxHeight: '95%',
        }}
      >
        <button
          className="lightbox-close"
          id="resume-close-btn"
          aria-label="Close Resume"
          style={{ top: '-60px' }}
          onClick={onClose}
        >
          &times;
        </button>
        <img
          className="lightbox-image"
          id="resume-modal-img"
          src={url}
          alt="Abhay Singh Resume"
          style={{ maxHeight: '70vh', objectFit: 'contain', borderRadius: '8px' }}
        />
        <div className="resume-actions" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a
            href={url}
            id="resume-download-btn"
            download="Abhay_Singh_Resume.jpeg"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: '12px',
              fontWeight: 600,
            }}
          >
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
