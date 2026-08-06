import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();
  const [filter, setFilter] = useState('all');

  const allProjects = [
    {
      id: 'inclusive-pay',
      title: 'Inclusive Pay (UPI)',
      description:
        'A voice-enabled bilingual (English/Hindi) Android UPI application built with Jetpack Compose, Picovoice Porcupine wake-word detection, and biometric authentication.',
      image: '/assets/projects/inclusive-pay.png',
      techBadges: ['Kotlin', 'Jetpack Compose', 'Voice AI', 'Picovoice', 'Biometrics'],
      category: 'ai',
      liveUrl: 'https://inclusive-pay.onrender.com/',
      githubUrl: 'https://github.com/Abhay71044/Inclusive-Pay-',
      caseStudyUrl: '/projects/inclusive-pay',
      isFeatured: true,
    },
    {
      id: 'food-delivery',
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
      id: 'sih-dashboard',
      title: 'AI Smart Farming Dashboard',
      description:
        'An intelligent agricultural operations platform combining data analysis, crop metrics prediction, and moisture tracking developed for Smart India Hackathon.',
      image: '/assets/projects/smart-india-hackathon-sih.jpeg',
      techBadges: ['AI Concepts', 'Python', 'IoT Core'],
      category: 'ai',
      liveUrl: null,
      githubUrl: 'https://github.com/Abhay71044',
      caseStudyUrl: '/projects/sih-dashboard',
      isFeatured: false,
    },
    {
      id: 'cosma-space-explorer',
      title: 'COSMA - 3D Space & Earth Exploration',
      description:
        'An immersive 3D space exploration web platform featuring 3D Solar Systems, Exoplanets, NASA telemetry APIs, TARS AI Chatbot, ISS live tracking, and Mars Rover imagery.',
      image: '/assets/projects/cosma-space-explorer.png',
      techBadges: ['React 18', 'Tailwind CSS', '3D Canvas', 'NASA APIs', 'AI Chatbot'],
      category: 'ai',
      liveUrl: 'https://space-explorer-1i4q.onrender.com/',
      githubUrl: 'https://github.com/Abhay71044/Space_Explorer',
      caseStudyUrl: '/projects/cosma-space-explorer',
      isFeatured: true,
    },
    {
      id: 'todo-app',
      title: 'To-Do List Application',
      description:
        'A task organizer application built using client-side JavaScript, featuring storage components and active list filters.',
      image: '/assets/projects/todo-app.png',
      techBadges: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      liveUrl: 'https://to-do-app-site-ksam.onrender.com',
      githubUrl: 'https://github.com/Abhay71044/SCT_WD_4',
      caseStudyUrl: '/projects/todo-app',
      isFeatured: false,
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe Game',
      description:
        'An interactive client-side browser game featuring custom UI animations, turn indicators, win log calculations, and reset states.',
      image: '/assets/projects/tic-tac-toe.png',
      techBadges: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'games',
      liveUrl: 'https://tic-tac-toe-site-j487.onrender.com',
      githubUrl: 'https://github.com/Abhay71044/SCT_WD_3',
      caseStudyUrl: '/projects/tic-tac-toe',
      isFeatured: false,
    },
    {
      id: 'stopwatch',
      title: 'Stopwatch Application',
      description:
        'A clean precision timer application providing milliseconds tracking, split logs capability, and interactive visual toggles.',
      image: '/assets/projects/stopwatch.png',
      techBadges: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      liveUrl: 'https://user-friendly-stopwatch-site.onrender.com',
      githubUrl: 'https://github.com/Abhay71044/SCT_WD_2',
      caseStudyUrl: '/projects/stopwatch',
      isFeatured: false,
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <main>
      {/* PROJECTS HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Portfolio</p>
          <h1>Project Showcase</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Explore my production builds, hackathon software developments, and interactive web tools. Read each case study to learn about my development process, architectural choices, and technical insights.
        </p>
      </section>

      {/* FILTERS */}
      <section className="reveal active" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="projects-filter-container">
          <button
            className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`btn-filter ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button
            className={`btn-filter ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI / IoT
          </button>
          <button
            className={`btn-filter ${filter === 'games' ? 'active' : ''}`}
            onClick={() => setFilter('games')}
          >
            Games
          </button>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="projects-grid-layout" id="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
