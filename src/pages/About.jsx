import React, { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const AnimatedPercentCard = ({ title, year, targetVal }) => {
  const [val, setVal] = useState(0);
  const [animated, setAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            const duration = 1200;
            const steps = 60;
            const stepValue = targetVal / steps;
            const stepTime = duration / steps;
            let counter = 0;
            let current = 0;

            const timer = setInterval(() => {
              counter++;
              current += stepValue;
              if (counter >= steps) {
                setVal(targetVal);
                clearInterval(timer);
              } else {
                setVal(parseFloat(current.toFixed(1)));
              }
            }, stepTime);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetVal, animated]);

  return (
    <div className="academic-card glass-card hover-glow-card" style={{ padding: '20px', textAlign: 'center' }} ref={cardRef}>
      <span style={{ fontSize: '1.05rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>🎓 {title}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>{year} Pass Out</span>
      <span
        className="animate-percent"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {val}%
      </span>
    </div>
  );
};

const About = () => {
  useScrollReveal();

  return (
    <main>
      {/* ABOUT HERO SECTION */}
      <section id="about" className="about-hero-section reveal active" style={{ paddingTop: '180px', paddingBottom: '60px' }}>
        <div className="about-hero-grid">
          {/* Left Side: Journey & Story */}
          <div className="about-hero-left">
            <div className="section-header" style={{ marginBottom: '25px' }}>
              <p>BIOGRAPHY</p>
              <h1>My Journey &amp; Story</h1>
            </div>
            <p className="about-subtitle" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
              From Army Public School to Software Engineer
            </p>

            <div className="story-container">
              {/* Schooling Section */}
              <div className="story-block glass-card gradient-border-card" style={{ marginBottom: '30px', padding: '25px' }}>
                <h3 className="story-section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '15px' }}>
                  <i className="fas fa-school" style={{ color: 'var(--secondary-color)', marginRight: '10px' }}></i> 🏫 Army Public School
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                  I completed my schooling at Army Public School, where I developed discipline, leadership, teamwork, confidence, and a strong academic foundation.
                </p>

                {/* Class X & XII Cards */}
                <div className="academic-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <AnimatedPercentCard title="Class X" year="2021" targetVal={91.8} />
                  <AnimatedPercentCard title="Class XII" year="2023" targetVal={81.8} />
                </div>

                {/* APS Badge Card */}
                <div className="aps-badge-card glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px 25px', borderColor: 'var(--border-color)' }}>
                  <div
                    className="aps-logo-wrapper"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img src="/assets/army_public_school_logo.png" alt="Army Public School Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '2px' }}>
                      Proud to be an Army Public School Student
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Discipline &amp; Character Building Foundations</p>
                  </div>
                </div>
              </div>

              {/* Higher Education Section */}
              <div className="story-block glass-card gradient-border-card" style={{ marginBottom: '30px', padding: '25px' }}>
                <h3 className="story-section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '15px' }}>
                  <i className="fas fa-university" style={{ color: 'var(--primary-color)', marginRight: '10px' }}></i> 🎓 Bachelor of Technology
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '15px', marginBottom: '20px' }}>
                  <div className="edu-detail-row">
                    <span className="edu-detail-label">Current Education</span>
                    <span className="edu-detail-value">GL Bajaj Institute of Technology &amp; Management</span>
                  </div>
                  <div className="edu-detail-row">
                    <span className="edu-detail-label">Location</span>
                    <span className="edu-detail-value">Greater Noida</span>
                  </div>
                  <div className="edu-detail-row">
                    <span className="edu-detail-label">Branch</span>
                    <span className="edu-detail-value" style={{ color: 'var(--secondary-color)' }}>
                      Computer Science &amp; Engineering (Artificial Intelligence)
                    </span>
                  </div>
                  <div className="edu-detail-row">
                    <span className="edu-detail-label">Duration</span>
                    <span className="edu-detail-value">2024 – 2028</span>
                  </div>
                  <div className="edu-detail-row" style={{ alignItems: 'center', borderBottom: 'none', paddingBottom: 0, marginTop: '10px' }}>
                    <span className="edu-detail-label" style={{ fontWeight: 600 }}>Current Overall CGPA</span>
                    <div
                      className="cgpa-highlight-card glass-card"
                      style={{
                        padding: '8px 20px',
                        borderColor: 'var(--primary-color)',
                        background: 'rgba(139, 92, 246, 0.1)',
                        borderRadius: '12px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--primary-color)',
                      }}
                    >
                      8.46 CGPA
                    </div>
                  </div>
                </div>

                {/* GL Bajaj Badge Card */}
                <div className="aps-badge-card glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px 25px', borderColor: 'var(--border-color)' }}>
                  <div
                    className="aps-logo-wrapper"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img src="/assets/gl_bajaj_logo.png" alt="GL Bajaj Logo" style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '2px' }}>
                      GL Bajaj Institute of Technology &amp; Management
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Affiliated to AKTU, Lucknow</p>
                  </div>
                </div>
              </div>

              {/* Current Learning */}
              <div className="story-block glass-card gradient-border-card" style={{ padding: '25px', marginBottom: '30px' }}>
                <h3 className="story-section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '15px' }}>
                  <i className="fas fa-laptop-code" style={{ color: 'var(--secondary-color)', marginRight: '10px' }}></i> Current Learning
                </h3>
                <div className="skills-chips-wrapper">
                  <span className="skill-chip"><i className="fas fa-brain"></i> Artificial Intelligence</span>
                  <span className="skill-chip"><i className="fas fa-network-wired"></i> Machine Learning</span>
                  <span className="skill-chip"><i className="fas fa-code"></i> Data Structures</span>
                  <span className="skill-chip"><i className="fas fa-gears"></i> Algorithms</span>
                  <span className="skill-chip"><i className="fas fa-layer-group"></i> Full Stack Development</span>
                  <span className="skill-chip"><i className="fab fa-react"></i> React</span>
                  <span className="skill-chip"><i className="fab fa-js"></i> JavaScript</span>
                  <span className="skill-chip"><i className="fab fa-node-js"></i> Node.js</span>
                  <span className="skill-chip"><i className="fab fa-java"></i> Java</span>
                  <span className="skill-chip"><i className="fab fa-git-alt"></i> Git</span>
                  <span className="skill-chip"><i className="fab fa-github"></i> GitHub</span>
                  <span className="skill-chip"><i className="fas fa-shield-halved"></i> Cybersecurity</span>
                  <span className="skill-chip"><i className="fas fa-cloud"></i> Cloud Computing</span>
                </div>
              </div>

              {/* Goal Card */}
              <div className="story-block glass-card gradient-border-card" style={{ borderColor: 'var(--secondary-color)', background: 'rgba(6, 182, 212, 0.03)', padding: '25px' }}>
                <h3 className="story-section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '10px' }}>
                  <i className="fas fa-crosshairs" style={{ marginRight: '10px' }}></i> My Goal
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', marginBottom: 0 }}>
                  I aspire to become a Software Engineer specializing in Artificial Intelligence and Full Stack Development while building scalable software products that solve real-world problems and positively impact millions of users.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Stats */}
          <div className="about-hero-right">
            <div className="section-header" style={{ marginBottom: '25px' }}>
              <p>HIGHLIGHTS</p>
              <h1>Quick Stats &amp; Info</h1>
            </div>

            <div className="quick-achievements-grid">
              <div className="q-ach-card glass-card">
                <i className="fas fa-map-marker-alt" style={{ color: '#ef4444' }}></i>
                <span>Greater Noida</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-university" style={{ color: '#3b82f6' }}></i>
                <span>GL Bajaj</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-laptop" style={{ color: '#10b981' }}></i>
                <span>CSE (AI)</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-star" style={{ color: '#f59e0b' }}></i>
                <span>CGPA 8.46</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-rocket" style={{ color: '#8b5cf6' }}></i>
                <span>10+ Projects</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-award" style={{ color: '#ec4899' }}></i>
                <span>7+ Certifications</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-briefcase" style={{ color: '#06b6d4' }}></i>
                <span>2 Internships</span>
              </div>
              <div className="q-ach-card glass-card">
                <i className="fas fa-code-branch" style={{ color: '#f43f5e' }}></i>
                <span>350+ DSA Problems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL ACADEMIC ROADMAP */}
      <section className="about-roadmap-section reveal">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p>Roadmap</p>
          <h2>My Academic &amp; Professional Journey</h2>
        </div>

        <div className="horizontal-journey-wrapper">
          <div className="horizontal-journey-container">
            <div className="journey-node-card glass-card gradient-border-card">
              <div className="journey-badge">🏫 2021</div>
              <h4>Class X Completed</h4>
              <p>Finished Matriculation under CBSE at Army Public School.</p>
              <div className="journey-stat">91.8% Score</div>
            </div>
            <div className="journey-connector"><i className="fas fa-arrow-right"></i></div>

            <div className="journey-node-card glass-card gradient-border-card">
              <div className="journey-badge">🏫 2023</div>
              <h4>Class XII Completed</h4>
              <p>Finished Higher Secondary under CBSE at Army Public School in Science stream.</p>
              <div className="journey-stat">81.8% Score</div>
            </div>
            <div className="journey-connector"><i className="fas fa-arrow-right"></i></div>

            <div className="journey-node-card glass-card gradient-border-card">
              <div className="journey-badge">🎓 2024</div>
              <h4>Started B.Tech CSE (AI)</h4>
              <p>Began undergraduate studies at GL Bajaj Institute of Technology &amp; Management, Greater Noida.</p>
              <div className="journey-stat">Branch: CSE (AI)</div>
            </div>
            <div className="journey-connector"><i className="fas fa-arrow-right"></i></div>

            <div className="journey-node-card glass-card gradient-border-card">
              <div className="journey-badge">🚀 2025</div>
              <h4>Web Dev Internships</h4>
              <p>Completed internships at ShadowFox and SkillCraft Technology, building interactive web apps.</p>
              <div className="journey-stat">2 Internships</div>
            </div>
            <div className="journey-connector"><i className="fas fa-arrow-right"></i></div>

            <div className="journey-node-card glass-card gradient-border-card highlight-node">
              <div className="journey-badge">💻 2026 (Present)</div>
              <h4>Building Full Stack</h4>
              <p>Currently engineering full stack software, practicing algorithms, and researching machine learning.</p>
              <div className="journey-stat">350+ DSA Solved</div>
            </div>
            <div className="journey-connector"><i className="fas fa-arrow-right"></i></div>

            <div className="journey-node-card glass-card gradient-border-card">
              <div className="journey-badge">🎯 2028</div>
              <h4>Target Graduation</h4>
              <p>Graduate as a qualified Software Engineer and start engineering scalable AI platforms.</p>
              <div className="journey-stat">Graduate AI Engineer</div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="reveal">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <p>Aptitudes</p>
          <h2>Core Strengths</h2>
        </div>

        <div className="about-intro-grid">
          <div className="intro-card glass-card gradient-border-card">
            <h4><i className="fas fa-brain"></i> Algorithmic Thinking</h4>
            <p>Solving complex data structures and algorithmic puzzles with efficient time and space complexities.</p>
          </div>
          <div className="intro-card glass-card gradient-border-card">
            <h4><i className="fas fa-cubes"></i> Architecture Design</h4>
            <p>Structuring responsive, multi-page frontend frameworks using scalable HTML5, CSS3, and modern JavaScript modules.</p>
          </div>
          <div className="intro-card glass-card gradient-border-card">
            <h4><i className="fas fa-user-shield"></i> Security Awareness</h4>
            <p>Understanding security basics, secure coding guidelines, and network vulnerability protections.</p>
          </div>
          <div className="intro-card glass-card gradient-border-card">
            <h4><i className="fas fa-sync-alt"></i> Adaptive Learning</h4>
            <p>Quickly picking up new libraries, APIs, database architectures, and development environments.</p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="reveal about-vision-grid" style={{ marginBottom: '80px' }}>
        <div className="glass-card gradient-border-card">
          <h3 className="about-vision-title" style={{ color: 'var(--secondary-color)' }}>
            <i className="fas fa-eye"></i> My Vision
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
            To architect software applications that bring intelligence closer to the user experience. I envision a tech-driven future where smart AI-infused digital products streamline complex backend workflows and solve environmental or logistical concerns.
          </p>
        </div>

        <div className="glass-card gradient-border-card">
          <h3 className="about-vision-title" style={{ color: 'var(--primary-color)' }}>
            <i className="fas fa-bullseye"></i> My Mission
          </h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
            To refine my developer capabilities every day by writing clean code, researching system optimizations, testing new AI models, and contributing meaningfully to active team workspaces in high-intensity developer communities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
