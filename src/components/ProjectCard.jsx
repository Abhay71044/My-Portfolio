import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    techBadges = [],
    category,
    liveUrl,
    githubUrl,
    caseStudyUrl,
    isFeatured = false,
  } = project;

  return (
    <div className={`project-card-v2 glass-card gradient-border-card mix ${category}`} data-cat={category}>
      <div className="project-card-image">
        <img src={image} alt={`${title} Preview`} loading="lazy" />
      </div>
      <div className="project-card-info">
        {isFeatured && <span className="project-card-badge project-badge-featured">Featured Project</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-badge-container" style={{ marginBottom: '20px' }}>
          {techBadges.map((badge, index) => (
            <span key={index} className="tech-badge">
              {badge}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="Live Demo">
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="GitHub Code">
              <i className="fab fa-github"></i>
            </a>
          )}
          {caseStudyUrl && (
            <Link to={caseStudyUrl} className="btn-case-study">
              Read Case Study <i className="fas fa-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
