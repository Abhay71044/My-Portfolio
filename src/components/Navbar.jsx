import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ onOpenResume }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [isNavUp, setIsNavUp] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Sync theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.style.transform = 'translate(-50%, -50%) scale(3)';
      setTimeout(() => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 300);
    }
  };

  // Scroll handler for hiding/showing navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsNavUp(true);
        } else {
          setIsNavUp(false);
        }
      } else {
        setIsNavUp(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body overflow on mobile menu toggle
  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMobileOpen]);

  // Close mobile drawer on route change or resize or escape key
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: 'fa-home' },
    { label: 'About', path: '/about', icon: 'fa-user' },
    { label: 'Skills', path: '/skills', icon: 'fa-laptop-code' },
    { label: 'Experience', path: '/experience', icon: 'fa-briefcase' },
    { label: 'Projects', path: '/projects', icon: 'fa-rocket' },
    { label: 'Achievements', path: '/achievements', icon: 'fa-award' },
    { label: 'Certificates', path: '/certifications', icon: 'fa-scroll' },
    { label: 'Contact', path: '/contact', icon: 'fa-envelope' },
  ];

  return (
    <nav className={`navbar ${isNavUp ? 'nav-up' : ''}`}>
      <NavLink to="/" className="nav-logo">
        AS
      </NavLink>

      <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`} id="nav-links">
        {/* Mobile profile header when menu open */}
        <div className="nav-mobile-header">
          <div className="nav-mobile-avatar-wrapper">
            <img src="/assets/profile.png" alt="Abhay Singh Profile" className="nav-mobile-avatar" />
          </div>
          <h3 className="nav-mobile-name">Abhay Singh</h3>
          <p className="nav-mobile-title">AI Engineer &amp; Full Stack Developer</p>
          <span className="nav-mobile-badge">
            <span className="badge-dot"></span> Available for Internship
          </span>
        </div>

        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive || (item.path === '/projects' && location.pathname.startsWith('/projects'))
                  ? 'active'
                  : ''
              }
            >
              <i className={`fas ${item.icon} nav-link-icon`}></i>
              {item.label}
            </NavLink>
          </li>
        ))}

        <li>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (onOpenResume) onOpenResume('/assets/resume/Abhay_Singh_Resume.png');
            }}
            className="btn-nav-resume-mobile"
            style={{ display: isMobileOpen ? 'inline-flex' : 'none' }}
          >
            <i className="fas fa-file-download nav-link-icon"></i> Resume
          </button>
        </li>

        {/* Dynamic mobile particles inside drawer */}
        <div className="nav-mobile-particles">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className={`particle p${i + 1}`}
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 15) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i}s`,
              }}
            ></span>
          ))}
        </div>
      </ul>

      <div className="nav-actions">
        <button
          id="theme-toggle"
          className="btn-theme-toggle"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (onOpenResume) onOpenResume('/assets/resume/Abhay_Singh_Resume.png');
          }}
          className="btn-nav-resume"
        >
          Resume
        </button>

        <button
          className={`nav-toggle ${isMobileOpen ? 'open' : ''}`}
          id="nav-toggle"
          aria-label="Toggle Menu"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
