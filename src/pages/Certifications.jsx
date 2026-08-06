import React, { useState } from 'react';
import CertCard from '../components/CertCard';
import useScrollReveal from '../hooks/useScrollReveal';

const Certifications = ({ onOpenLightbox }) => {
  useScrollReveal();
  const [filter, setFilter] = useState('all');

  const certificates = [
    {
      title: 'SkillCraft Web Dev Internship',
      image: '/assets/certificates/skillcraft-web-development-internship.png',
      category: 'featured',
    },
    {
      title: 'Letter of Recommendation',
      image: '/assets/certificates/letter-of-recommendation.png',
      category: 'featured',
    },
    {
      title: 'Oracle Cloud Foundations',
      image: '/assets/certificates/oracle-cloud-infrastructure-foundations-associate.png',
      category: 'featured',
    },
    {
      title: 'ShadowFox Internship',
      image: '/assets/certificates/shadowfox-internship.jpeg',
      category: 'featured',
    },
    {
      title: 'Cloud Security Automation',
      image: '/assets/certificates/cloud-security-automation.png',
      category: 'cyber',
    },
    {
      title: 'Cloud Security Fundamentals',
      image: '/assets/certificates/cloud-security-fundamentals.jpeg',
      category: 'cyber',
    },
    {
      title: 'Cybersecurity Foundation',
      image: '/assets/certificates/cybersecurity-foundation.png',
      category: 'cyber',
    },
    {
      title: 'Network Security Fundamentals',
      image: '/assets/certificates/network-security-fundamentals.png',
      category: 'cyber',
    },
    {
      title: 'Security Operations Fundamentals',
      image: '/assets/certificates/security-operations-fundamentals.png',
      category: 'cyber',
    },
    {
      title: 'EC-Council Cybersecurity for Business',
      image: '/assets/certificates/WhatsApp Image 2026-06-06 at 6.42.51 PM (1).jpeg',
      category: 'cyber',
    },
    {
      title: 'HackShastra Hackathon',
      image: '/assets/certificates/hackshastra-participation.png',
      category: 'events',
    },
    {
      title: 'Hackground India',
      image: '/assets/certificates/hackground-india.png',
      category: 'events',
    },
    {
      title: 'Unicorn Chase Participation',
      image: '/assets/certificates/unicorn-chase.jpeg',
      category: 'events',
    },
  ];

  const filteredCerts =
    filter === 'all'
      ? certificates
      : certificates.filter((c) => c.category === filter);

  return (
    <main>
      {/* CERTIFICATIONS HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Credentials</p>
          <h1>Certifications &amp; Badges</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Click any certificate to expand it in an interactive high-resolution lightbox. Grouped by specialization including cloud automation, cybersecurity foundations, and hackathon activities.
        </p>
      </section>

      {/* FILTERS */}
      <section className="reveal active" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="certifications-tabs">
          <button
            className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Certificates
          </button>
          <button
            className={`btn-filter ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
          <button
            className={`btn-filter ${filter === 'cyber' ? 'active' : ''}`}
            onClick={() => setFilter('cyber')}
          >
            Cybersecurity
          </button>
          <button
            className={`btn-filter ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            Hackathons / Events
          </button>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="certifications-grid" id="certifications-grid">
          {filteredCerts.map((cert, idx) => (
            <CertCard
              key={idx}
              cert={cert}
              onClick={() => {
                if (onOpenLightbox) {
                  onOpenLightbox(filteredCerts, idx);
                }
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Certifications;
