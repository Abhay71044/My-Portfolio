import React from 'react';
import StatCard from '../components/StatCard';
import useScrollReveal from '../hooks/useScrollReveal';

const Achievements = () => {
  useScrollReveal();

  return (
    <main>
      {/* ACHIEVEMENTS HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Recognitions</p>
          <h1>Milestones &amp; Achievements</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Highlighting competitive honors, internship achievements, hackathon participations, and certifications earned during my academic roadmap.
        </p>
      </section>

      {/* STATS / COUNTERS */}
      <section className="reveal active" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="stats-grid">
          <StatCard target="3" label="Hackathons Competed" />
          <StatCard target="2" label="Internship Badges" />
          <StatCard target="10" label="Tech Certifications" />
          <StatCard target="1" label="Letters of Recommendation" />
        </div>
      </section>

      {/* ACHIEVEMENTS GRID */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="achievements-grid">
          {/* Card 1 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">🏆</div>
            <h3>SkillCraft Web Dev Internship</h3>
            <p>Completed intensive web developer training, demonstrating proficiency in building clean responsive user interfaces and modular layouts.</p>
          </div>

          {/* Card 2 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">⭐</div>
            <h3>Letter Of Recommendation</h3>
            <p>Awarded formal recommendation for excellent internship results, demonstrating strong teamwork, quality coding, and prompt delivery.</p>
          </div>

          {/* Card 3 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">🚀</div>
            <h3>Smart India Hackathon 2025</h3>
            <p>Competed in India's top innovation hackathon. Researched and prototyped an AI Crop Agriculture Monitoring Dashboard to solve core agricultural queries.</p>
          </div>

          {/* Card 4 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">💡</div>
            <h3>Hackground India Hackathon</h3>
            <p>Participated in national coding hackathon, building scalable developer tools and collaborating with peer software engineers on solution drafts.</p>
          </div>

          {/* Card 5 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">🔥</div>
            <h3>HackShastra Hackathon</h3>
            <p>Competed in competitive hackathon focusing on programming speeds, layout logic, and responsive frontend system builds.</p>
          </div>

          {/* Card 6 */}
          <div className="achievement-card-v2 glass-card gradient-border-card reveal">
            <div className="achievement-card-icon">☁️</div>
            <span className="achievement-badge" style={{ display: 'inline-block', marginBottom: '12px' }}>
              Cloud Associate
            </span>
            <h3>Oracle Cloud Certified</h3>
            <p>Earned professional certification as an Oracle Cloud Infrastructure Foundations Associate, proving core capability in cloud architecture concepts.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
