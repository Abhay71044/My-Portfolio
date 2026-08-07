import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Spotlight from './components/Spotlight';
import Loader from './components/Loader';
import LightboxModal from './components/LightboxModal';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  // Resume Modal State
  const [resumeState, setResumeState] = useState({
    isOpen: false,
    url: '',
  });

  const handleOpenLightbox = (items, index) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
  };

  const handleOpenResume = (url) => {
    setResumeState({
      isOpen: true,
      url: url || '/assets/resume/Abhay_Singh_Resume.png',
    });
  };

  const handleCloseResume = () => {
    setResumeState((prev) => ({ ...prev, isOpen: false }));
  };

  const currentCert = lightboxState.items[lightboxState.currentIndex] || {};

  return (
    <Router>
      <ScrollToTop />
      <Loader />
      <CustomCursor />
      <Spotlight />

      <div className="ambient-glow ambient-glow-1"></div>
      <div className="ambient-glow ambient-glow-2"></div>

      <Navbar onOpenResume={handleOpenResume} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route
          path="/certifications"
          element={<Certifications onOpenLightbox={handleOpenLightbox} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={currentCert.image}
        title={currentCert.title}
        onClose={handleCloseLightbox}
        onPrev={lightboxState.items.length > 1 ? handlePrevLightbox : null}
        onNext={lightboxState.items.length > 1 ? handleNextLightbox : null}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeState.isOpen}
        resumeUrl={resumeState.url}
        onClose={handleCloseResume}
      />
    </Router>
  );
}

export default App;
