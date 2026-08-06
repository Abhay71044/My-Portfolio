import React from 'react';

const CertCard = ({ cert, onClick }) => {
  const { title, image, category = 'featured' } = cert;

  return (
    <div
      className={`cert-card-v2 glass-card gradient-border-card mix ${category}`}
      data-cat={category}
      onClick={() => onClick(cert)}
      style={{ cursor: 'pointer' }}
    >
      <div className="cert-card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default CertCard;
