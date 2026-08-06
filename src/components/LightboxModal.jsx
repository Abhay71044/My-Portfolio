import React, { useEffect, useState } from 'react';

const LightboxModal = ({ isOpen, imageSrc, title, onClose, onPrev, onNext }) => {
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0 && onNext) {
          onNext();
        } else if (diffX > 0 && onPrev) {
          onPrev();
        }
      }
    }
  };

  return (
    <div
      className="lightbox-modal active"
      onClick={(e) => {
        if (e.target.classList.contains('lightbox-modal')) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lightbox-wrapper">
        <button className="lightbox-close" aria-label="Close Lightbox" onClick={onClose}>
          &times;
        </button>
        {onPrev && (
          <button className="lightbox-arrow lightbox-arrow-left" aria-label="Previous image" onClick={onPrev}>
            &#10094;
          </button>
        )}
        <img className="lightbox-image" src={imageSrc} alt={title || 'Certificate Preview'} />
        {onNext && (
          <button className="lightbox-arrow lightbox-arrow-right" aria-label="Next image" onClick={onNext}>
            &#10095;
          </button>
        )}
        <div className="lightbox-title">{title}</div>
      </div>
    </div>
  );
};

export default LightboxModal;
