import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import ProjectCard from '../components/ProjectCard';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  useScrollReveal();

  const [typewriterText, setTypewriterText] = useState('');
  const phrases = [
    'AI Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Software Engineer',
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const fullPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setTypewriterText(fullPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypewriterText(fullPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      let speed = isDeleting ? 30 : 70;

      if (!isDeleting && currentCharIndex === fullPhrase.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        speed = 500;
      }

      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      title: 'Inclusive Pay (UPI)',
      description:
        'A voice-enabled bilingual (English/Hindi) Android UPI application built with Jetpack Compose, Picovoice Porcupine wake-word detection, and biometric security.',
      image: '/assets/projects/inclusive-pay.png',
      techBadges: ['Kotlin', 'Jetpack Compose', 'Voice AI', 'Biometrics'],
      category: 'ai',
      liveUrl: 'https://inclusive-pay.onrender.com/',
      githubUrl: 'https://github.com/Abhay71044/Inclusive-Pay-',
      caseStudyUrl: '/projects/inclusive-pay',
      isFeatured: true,
    },
    {
      title: 'Food Delivery Website',
      description:
        'A modern food ordering platform featuring sleek UI animations, responsive multi-page layouts, and performance-tuned asset loading states.',
      image: '/assets/projects/food-delivery.png',
      techBadges: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      liveUrl: 'https://food-delivery-vzk7.onrender.com/',
      githubUrl: 'https://github.com/Abhay71044/Food-delivery-site',
      caseStudyUrl: '/projects/food-delivery',
      isFeatured: true,
    },
    {
      title: 'COSMA - 3D Space & Earth Exploration',
      description:
        'An immersive 3D space exploration web platform featuring 3D Solar Systems, Exoplanets, NASA telemetry APIs, TARS AI Chatbot, ISS live tracking, and Mars Rover imagery.',
      image: '/assets/projects/cosma-space-explorer.png',
      techBadges: ['React 18', 'Tailwind CSS', '3D Canvas', 'NASA APIs'],
      category: 'ai',
      liveUrl: 'https://space-explorer-1i4q.onrender.com/',
      githubUrl: 'https://github.com/Abhay71044/Space_Explorer',
      caseStudyUrl: '/projects/cosma-space-explorer',
      isFeatured: true,
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="reveal active" style={{ paddingTop: '180px', paddingBottom: '80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                borderRadius: '30px',
                background: 'var(--btn-secondary-bg)',
                border: '1px solid var(--border-color)',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-color)',
                  boxShadow: '0 0 10px var(--primary-color)',
                }}
              ></span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Available for Full Stack &amp; AI Opportunities
              </span>
            </div>

            <h1
              style={{
                fontSize: 'var(--font-size-hero-title)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              Building Intelligent Software &amp;{' '}
              <span
                style={{
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scalable Solutions
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                marginBottom: '10px',
                minHeight: '40px',
                fontWeight: 500,
              }}
            >
              I am a <span className="hero-typewriter" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>{typewriterText}</span>
              <span style={{ animation: 'blink 1s infinite' }}>|</span>
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '35px', maxWidth: '600px' }}>
              Computer Science (Artificial Intelligence) undergraduate at GL Bajaj Institute of Technology. Experienced in developing full-stack web applications, machine learning integration, and high-performance algorithms.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn-primary">
                Explore Projects <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch <i className="fas fa-paper-plane"></i>
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card gradient-border-card"
              style={{
                padding: '20px',
                maxWidth: '420px',
                width: '100%',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxHeight: '420px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid var(--border-color)',
                }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Abhay Singh Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem' }}>
                Abhay Singh
              </h3>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', marginBottom: '15px', fontWeight: 600 }}>
                CSE (Artificial Intelligence) Student
              </p>

              <div className="tech-badge-container" style={{ justifyContent: 'center' }}>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="reveal" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          <StatCard target="10" label="Projects Built" />
          <StatCard target="7" label="Certifications Earned" />
          <StatCard target="2" label="Internships Completed" />
          <StatCard target="350" label="DSA Problems Solved" />
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="reveal" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p>Portfolio</p>
            <h1>Featured Work</h1>
          </div>
          <Link to="/projects" className="btn-secondary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            View All Projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="projects-grid-layout">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
