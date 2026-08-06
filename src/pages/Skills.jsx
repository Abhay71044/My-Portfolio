import React, { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const SkillItem = ({ label, percent }) => {
  const [width, setWidth] = useState('0%');
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(percent);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div className="skill-item">
      <div className="skill-label">
        <span>{label}</span> <span>{percent}</span>
      </div>
      <div className="skill-bar" ref={barRef}>
        <div className="skill-fill" style={{ width: width, transition: 'width 1s ease-in-out' }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  useScrollReveal();

  return (
    <main>
      {/* SKILLS HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Tech Arsenal</p>
          <h1>My Coding Stack</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          An interactive map of my technical skillset, ranging from programming languages to frontend systems, database management, cloud automation, and artificial intelligence frameworks.
        </p>
      </section>

      {/* SKILLS GRID */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="skills-grid">
          {/* Frontend */}
          <div className="skills-category-card glass-card gradient-border-card reveal">
            <h3>
              <i className="fas fa-laptop-code"></i> Frontend Stack
            </h3>
            <div className="skills-list-container">
              <SkillItem label="HTML5 / CSS3" percent="90%" />
              <SkillItem label="JavaScript (ES6+)" percent="80%" />
              <SkillItem label="React.js" percent="70%" />
              <SkillItem label="Tailwind CSS" percent="85%" />
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skills-category-card glass-card gradient-border-card reveal">
            <h3>
              <i className="fas fa-terminal"></i> Programming Languages
            </h3>
            <div className="skills-list-container">
              <SkillItem label="Python" percent="80%" />
              <SkillItem label="C++" percent="85%" />
              <SkillItem label="Java" percent="75%" />
              <SkillItem label="C Language" percent="80%" />
            </div>
          </div>

          {/* Databases & Cloud */}
          <div className="skills-category-card glass-card gradient-border-card reveal">
            <h3>
              <i className="fas fa-database"></i> Databases &amp; Cloud
            </h3>
            <div className="skills-list-container">
              <SkillItem label="MySQL Database" percent="75%" />
              <SkillItem label="Oracle Cloud (OCI)" percent="70%" />
              <SkillItem label="Cloud Automation Basics" percent="65%" />
            </div>
          </div>

          {/* AI, Core & Tools */}
          <div className="skills-category-card glass-card gradient-border-card reveal">
            <h3>
              <i className="fas fa-robot"></i> AI &amp; Developer Tools
            </h3>
            <div className="skills-list-container">
              <SkillItem label="AI &amp; ML Basics" percent="70%" />
              <SkillItem label="Git &amp; GitHub Version Control" percent="85%" />
              <SkillItem label="Developer Tools (Vercel, Render, VS Code)" percent="80%" />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CHIPS */}
      <section className="reveal" style={{ marginBottom: '80px' }}>
        <div className="section-header" style={{ marginBottom: '45px' }}>
          <p>Keywords</p>
          <h2>Skills Showcase Chips</h2>
        </div>
        <div className="skills-chips-wrapper">
          <div className="skill-chip"><i className="fab fa-html5" style={{ color: '#e34f26' }}></i> HTML5</div>
          <div className="skill-chip"><i className="fab fa-css3-alt" style={{ color: '#1572b6' }}></i> CSS3</div>
          <div className="skill-chip"><i className="fab fa-js" style={{ color: '#f7df1e' }}></i> JavaScript</div>
          <div className="skill-chip"><i className="fab fa-react" style={{ color: '#61dafb' }}></i> React.js</div>
          <div className="skill-chip"><i className="fas fa-wind" style={{ color: '#38bdf8' }}></i> Tailwind CSS</div>
          <div className="skill-chip"><i className="fab fa-python" style={{ color: '#3776ab' }}></i> Python</div>
          <div className="skill-chip"><i className="fas fa-cube"></i> C++</div>
          <div className="skill-chip"><i className="fab fa-java" style={{ color: '#007396' }}></i> Java</div>
          <div className="skill-chip"><i className="fas fa-database" style={{ color: '#00758f' }}></i> MySQL</div>
          <div className="skill-chip"><i className="fab fa-git-alt" style={{ color: '#f05032' }}></i> Git</div>
          <div className="skill-chip"><i className="fab fa-github"></i> GitHub</div>
          <div className="skill-chip"><i className="fas fa-cloud" style={{ color: '#f80000' }}></i> Oracle Cloud</div>
          <div className="skill-chip"><i className="fas fa-brain" style={{ color: '#ff6b6b' }}></i> AI Concepts</div>
          <div className="skill-chip"><i className="fas fa-code-branch"></i> Data Structures</div>
          <div className="skill-chip"><i className="fas fa-project-diagram"></i> Algorithms</div>
          <div className="skill-chip"><i className="fas fa-server"></i> Render Hosting</div>
          <div className="skill-chip"><i className="fas fa-bolt" style={{ color: '#00d4ff' }}></i> Vercel</div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
