import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  useScrollReveal();

  return (
    <main>
      {/* EXPERIENCE HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Career</p>
          <h1>Professional Experience</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Detailing my industry experience through web development internships, highlighting core responsibilities, key achievements, and toolsets utilized.
        </p>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="experience-timeline">
          {/* Experience Item 1 */}
          <div className="experience-card-wrapper reveal">
            <div className="experience-timeline-dot">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="experience-card glass-card gradient-border-card">
              <span className="experience-time">Jan 2025 - Feb 2025</span>
              <h3>Web Development Intern</h3>
              <h4>SkillCraft Technology</h4>
              <ul className="experience-list">
                <li>Architected and built responsive landing pages and web applications using HTML5, CSS3, and JavaScript.</li>
                <li>Enhanced mobile responsiveness by 40% using CSS media queries and modular layout patterns.</li>
                <li>Implemented dynamic form actions, smooth animations, and clean interactive elements to improve page UX.</li>
                <li>Collaborated with team leads on design audits and performance testing to reduce load times.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>
                  Technologies Used
                </h5>
                <div className="tech-badge-container">
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Responsive Design</span>
                  <span className="tech-badge">UI/UX Audit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="experience-card-wrapper reveal">
            <div className="experience-timeline-dot">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="experience-card glass-card gradient-border-card">
              <span className="experience-time">Feb 2025 - Mar 2025</span>
              <h3>Web Development Intern</h3>
              <h4>ShadowFox</h4>
              <ul className="experience-list">
                <li>Programmed high-fidelity interactive user interfaces and frontend navigation elements.</li>
                <li>Created reusable component-driven UI templates with clean state tags and transitions.</li>
                <li>Analyzed usability testing outcomes to iterate and optimize site architectures and page layouts.</li>
                <li>Integrated lightweight animations to enhance user engagement.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>
                  Technologies Used
                </h5>
                <div className="tech-badge-container">
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Component Architecture</span>
                  <span className="tech-badge">UI Usability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
