import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">AS</div>
      <p className="footer-desc">Full Stack Developer • AI Student • Problem Solver</p>
      <div className="footer-socials">
        <a href="https://github.com/Abhay71044" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://leetcode.com/u/Abhay_71044/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <i className="fas fa-code"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhay-singh-894044292" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com/abhaychauhan71044" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footer-disclaimer">
        I hereby declare that all information, certifications, achievements, projects, and professional credentials displayed on this portfolio are true, accurate, and verifiable.
      </p>
    </footer>
  );
};

export default Footer;
