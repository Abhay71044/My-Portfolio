import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const caseStudiesData = {
  'cosma-space-explorer': {
    heroTag: '3D Web & Astrophysics Platform',
    title: 'COSMA - 3D Space & Earth Exploration',
    role: 'Full Stack & 3D Web Developer',
    timeline: '4 Weeks',
    category: 'Space & Web3D / Data Telemetry',
    techStack: 'React 18, Vite, Tailwind CSS, 3D Canvas, NASA JPL APIs, Unsplash API',
    image: '/assets/projects/cosma-space-explorer.png',
    liveUrl: 'https://space-explorer-1i4q.onrender.com/',
    githubUrl: 'https://github.com/Abhay71044/Space_Explorer',
    overview:
      'COSMA Space Explorer is an interactive web platform designed for space enthusiasts, researchers, and stargazers. Inspired by NASA JPL telemetry systems, SpaceX flight dashboards, and modern glassmorphic aesthetics, COSMA combines real-time NASA APIs, 3D Canvas simulations, and an intelligent AI Space Assistant.',
    problem:
      'Astronomical telemetry data and satellite feeds provided by NASA are frequently fragmented across multiple governmental endpoints, making raw scientific data difficult for general audiences, students, and space enthusiasts to visualize seamlessly.',
    solution:
      'We designed COSMA to unify real-time space data under a single interactive dashboard. Combining 3D Solar System Orreries, Exoplanet simulators, Mars Rover feeds, satellite hazards tracking (EONET/ISS), and an onboard AI space chatbot (TARS), COSMA makes deep space exploration engaging and accessible.',
    features: [
      '3D Interactive Solar System Orrery: Real-time 3D planetary orbits with physical metrics (diameter, moons, orbital speeds).',
      '3D Exoplanet Explorer: Simulates alien worlds (Kepler-186f, TRAPPIST-1e, Proxima Centauri b) with atmosphere metrics and light curves.',
      'TARS AI Space Chatbot: Humanoid space intelligence for astrophysics queries with voice synth responses.',
      'NASA APOD & Mars Rover Operations: High-definition astronomy picture archives and multi-rover camera filters (FHAZ, NAVCAM).',
      'Earth EPIC & Climate Operations: DSCOVR satellite full-color Earth imagery at 1.5M km and active global hazard tracking (NASA EONET).',
      'Space Control Center & ISS Live Tracking: Real-time ISS orbital coordinates, velocity tracking, and Near-Earth Asteroid (NEO) radar.',
      'Earth Wonders Gallery: High-resolution geographical landscape repository powered by Unsplash API.',
    ],
    process:
      'Engineered modular React 18 architecture powered by Vite and Tailwind CSS. Built custom 3D canvas renderers for planetary movements, integrated NASA JPL API endpoints (APOD, Mars Rover, EPIC, EONET, NeoWs, DONKI), and designed a sleek dark glassmorphism dashboard UI.',
    challenges:
      'Handling multiple high-frequency asynchronous API responses, smoothing 3D canvas animation frames, and formatting complex satellite telemetry coordinates accurately.',
    lessons:
      'Gained advanced experience in 3D Web Canvas graphics, API data pipeline orchestration, responsive glassmorphic UI design, and astrophysics data visualization.',
    future: [
      'Integrate WebGL shader effects for realistic planetary atmospheres.',
      'Add WebXR VR/AR support for immersive 3D solar system walkthroughs.',
      'Incorporate live rocket launch countdown schedules (SpaceX/NASA SLS).',
    ],
    prevId: 'sih-dashboard',
    prevTitle: 'SIH Farming Dashboard',
    nextId: 'todo-app',
    nextTitle: 'To-Do Application',
  },

  'inclusive-pay': {
    heroTag: 'Voice AI & Mobile Case Study',
    title: 'Inclusive Pay (UPI)',
    role: 'Android & Voice AI Developer',
    timeline: '4 Weeks',
    category: 'Mobile / Voice AI & Fintech',
    techStack: 'Kotlin, Jetpack Compose, Picovoice Porcupine, STT/TTS, Biometrics, CameraX',
    image: '/assets/projects/inclusive-pay.png',
    liveUrl: 'https://inclusive-pay.onrender.com/',
    githubUrl: 'https://github.com/Abhay71044/Inclusive-Pay-',
    overview:
      'Inclusive Pay (UPI) is a specialized voice-enabled Android application focused on financial inclusivity. It allows users to perform banking actions, check balances, navigate screens, and execute transactions using hands-free bilingual (English & Hindi) voice commands.',
    problem:
      'Digital payment applications often present complex, multi-step graphical interfaces that create barriers for elderly users, visually impaired individuals, and non-native English speakers. Traditional apps require manual navigation and physical touch, limiting accessibility in everyday scenarios.',
    solution:
      'We engineered a voice-first UPI app using Kotlin and Jetpack Compose. Integrating Picovoice Porcupine for offline "Hey Assistant" wake-word detection, Android Speech STT/TTS for vocal feedback, and Android Biometrics for multi-factor authentication, the app offers an accessible, hands-free payment experience.',
    features: [
      'Voice-First Interface: Integrated voice assistant that listens for the "Hey Assistant" wake word.',
      'Bilingual Support: Full support for both English and Hindi, including UI labels and Text-to-Speech responses.',
      'Voice-Driven Navigation: Use commands like "Open drawer", "Scroll down", "Go to history", or "Check my balance".',
      'Secure Authentication: Combines voice identity with Android Biometrics for sensitive actions like revealing account balances.',
      'Modern UI/UX: Built entirely with Jetpack Compose following Material 3 guidelines, featuring a "Premium" card-based design and Dark Mode support.',
      'Offline Wake Word Detection: Uses Picovoice Porcupine for efficient, on-device wake-word recognition.',
    ],
    process:
      'The project follows a modular package architecture under com.example.upionemoretime.voice (VoiceManager, WakeWordManager, TextToSpeechManager, VoiceNavigationHandler, PermissionManager, SessionManager). Built dynamic screens with Jetpack Compose Navigation, Coil image loading, ML Kit QR scanning, and CameraX.',
    challenges:
      'Orchestrating concurrent voice state transitions while preventing speech recognition feedback loops and maintaining background wake-word listening with low battery consumption.',
    lessons:
      'Mastered voice-first UX patterns, bilingual STT/TTS pipeline management, Android Biometrics integration, and Jetpack Compose Material 3 state-driven architecture.',
    future: [
      'Integrate Account Aggregator APIs for multi-bank support.',
      'Add offline voice payment token generation.',
      'Extend ONNX runtime models for complex conversational banking intents.',
    ],
    prevId: 'cosma-space-explorer',
    prevTitle: 'COSMA Space Explorer',
    nextId: 'food-delivery',
    nextTitle: 'Food Delivery Site',
  },

  'food-delivery': {
    heroTag: 'UX Case Study',
    title: 'Food Delivery Website',
    role: 'Frontend Developer / UI/UX',
    timeline: '3 Weeks',
    category: 'Web Platform',
    techStack: 'HTML5, CSS3, JavaScript',
    image: '/assets/projects/food-delivery.png',
    liveUrl: 'https://food-delivery-vzk7.onrender.com/',
    githubUrl: 'https://github.com/Abhay71044/Food-delivery-site',
    overview:
      'The Food Delivery Website is a modern web application optimized for browsing, ordering, and selecting meals. The design prioritizes visual engagement with vibrant food cards, intuitive category selectors, and a fast, fluid layout that adapts seamlessly to desktop and mobile environments.',
    problem:
      'Typical online ordering templates often suffer from slow loading states, bloated frameworks, and confusing interfaces. Users want to quickly scan categories, add items to their carts, and complete operations with minimal clicks, without dealing with heavy libraries that degrade mobile battery life.',
    solution:
      'We built a highly responsive, vanilla frontend architecture using pure HTML5, CSS3, and modern JavaScript. The platform loads instantly, handles client-side cart operations smoothly, and utilizes CSS Grid for flexible, lightweight content layouts.',
    features: [
      'Dynamic Food Category Selector: Filter food items instantly on the client side without database round-trips.',
      'Responsive Cart Operations: Lightweight JavaScript states track and update user choices dynamically.',
      'Optimized Performance: Zero reliance on external frameworks ensures rapid loading and rendering.',
      'Responsive Layouts: Flexbox and Grid structures adapt beautifully from giant screens to small devices.',
    ],
    process:
      'The project started with wireframing core paths on paper, followed by building the HTML layout structure. CSS variables were integrated next to support clean typography and visual spacing. Finally, vanilla JavaScript was added to handle interactivity and page logic.',
    challenges:
      'A key challenge was balancing high-resolution food images with fast page load speeds. We solved this by using modern image compression formats, implementing lazy loading, and sizing container boxes to prevent layout shifts.',
    lessons:
      'This project reinforced the power of vanilla web technologies. Before choosing heavy frameworks like React, starting with optimized HTML/CSS ensures a robust foundation, superior speeds, and accessible rendering structures.',
    future: [
      'Integrate a node backend database for live order tracing.',
      'Add Stripe API payment gateways.',
      'Implement geo-location queries to suggest nearby restaurants.',
    ],
    prevId: 'inclusive-pay',
    prevTitle: 'Inclusive Pay (UPI)',
    nextId: 'sih-dashboard',
    nextTitle: 'SIH Farming Dashboard',
  },

  'sih-dashboard': {
    heroTag: 'Innovation Case Study',
    title: 'AI Smart Farming Dashboard',
    role: 'Python/AI Prototyper',
    timeline: 'Smart India Hackathon 2025',
    category: 'Agriculture / AI & IoT',
    techStack: 'Python, IoT Analytics, AI Models',
    image: '/assets/projects/smart-india-hackathon-sih.jpeg',
    liveUrl: null,
    githubUrl: 'https://github.com/Abhay71044',
    overview:
      'Developed as a technical prototype for the Smart India Hackathon 2025, the AI Smart Farming Dashboard is a centralized platform designed to help farmers optimize water use, detect pest threats early, and track soil conditions using IoT sensor feeds and machine learning diagnostics.',
    problem:
      'Traditional farming relies heavily on historical guesswork, leading to either excessive water waste or crop failure due to late-stage pest detection. Farmers lack access to real-time, actionable insights that translate complex raw sensor data into practical daily decisions.',
    solution:
      'We designed a dashboard that aggregates soil moisture, nitrogen-phosphorus-potassium (NPK) values, and weather conditions. Using trained Python ML models, the dashboard predicts ideal watering cycles and lists potential crop diseases based on uploaded leaf images.',
    features: [
      'Real-time Sensor Feeds: Visualizes moisture levels, temperature, and NPK metrics.',
      'Pest & Disease Prediction: Utilizes machine learning classification models to inspect leaf anomalies.',
      'Smart Irrigation Suggestions: Automated water-use predictions based on humidity forecasts.',
      'Offline-First Capabilities: Designed to cache critical agricultural metrics locally to handle spotty network connectivity.',
    ],
    process:
      'During the hackathon, our team divided tasks into hardware interfacing and frontend visualization. We trained basic predictive models using crop health datasets, created analytical endpoints using Python, and mapped the UI layouts using modular dashboard components.',
    challenges:
      'Interfacing hardware serial ports with local web servers was a major obstacle. We addressed this by writing lightweight socket listeners in Python that parse, validate, and broadcast incoming metrics instantly to the dashboard view.',
    lessons:
      'This project highlighted the importance of user-centric design. While building high-accuracy ML models is valuable, presenting results through clean, color-coded status badges and localized recommendations is what makes the technology accessible to farmers.',
    future: [
      'Deploy automated water valves linked to dashboard thresholds.',
      'Incorporate multi-lingual voice commands for hands-free operations.',
      'Extend image inspection to cover soil erosion and weed detection.',
    ],
    prevId: 'food-delivery',
    prevTitle: 'Food Delivery Site',
    nextId: 'cosma-space-explorer',
    nextTitle: 'COSMA Space Explorer',
  },

  'todo-app': {
    heroTag: 'Utility Case Study',
    title: 'To-Do List Application',
    role: 'Frontend Developer',
    timeline: '1 Week',
    category: 'Web Application',
    techStack: 'HTML5, CSS3, JavaScript',
    image: '/assets/projects/todo-app.png',
    liveUrl: 'https://to-do-app-site-ksam.onrender.com',
    githubUrl: 'https://github.com/Abhay71044/SCT_WD_4',
    overview:
      'A clean, highly responsive task organizer application designed to keep track of daily goals, pending assignments, and finished tasks. Features persistent local browser storage, filter states, and smooth task deletion transitions.',
    problem:
      'Many simple to-do list applications lose data on page refreshes or rely on heavy external UI packages. Users need a reliable, lightweight task manager that saves state automatically and offers clear list filtering.',
    solution:
      'Built using vanilla JavaScript ES6 modules, utilizing LocalStorage API to save tasks permanently in the client browser. Features dynamic DOM mutations to add, edit, toggle, and delete items cleanly.',
    features: [
      'LocalStorage Persistence: Saved tasks remain intact across browser reloads.',
      'Active List Filtering: Toggle views between All, Active, and Completed tasks.',
      'Keyboard Accessibility: Press Enter to submit new tasks instantly.',
      'Glassmorphic Design System: Clean visual aesthetic matching the portfolio theme.',
    ],
    process:
      'Designed list container layouts using flexbox and standard HTML input controls. Implemented array manipulation logic in JavaScript to manage task state and sync changes to browser LocalStorage.',
    challenges:
      'Ensuring synchronized index order during task deletion and filtering without mutating saved storage unexpectedly.',
    lessons:
      'Mastered LocalStorage serialization (JSON.stringify / JSON.parse) and dynamic DOM node management.',
    future: [
      'Add due date reminders and priority color tags.',
      'Implement drag and drop task re-ordering.',
    ],
    prevId: 'cosma-space-explorer',
    prevTitle: 'COSMA Space Explorer',
    nextId: 'tic-tac-toe',
    nextTitle: 'Tic Tac Toe Game',
  },

  'tic-tac-toe': {
    heroTag: 'Gaming Case Study',
    title: 'Tic Tac Toe Game',
    role: 'Frontend Developer',
    timeline: '1 Week',
    category: 'Browser Game',
    techStack: 'HTML5, CSS3, JavaScript',
    image: '/assets/projects/tic-tac-toe.png',
    liveUrl: 'https://tic-tac-toe-site-j487.onrender.com',
    githubUrl: 'https://github.com/Abhay71044/SCT_WD_3',
    overview:
      'An interactive client-side browser game featuring custom UI animations, turn indicators, winning line combination checks, score counters, and instant reset controls.',
    problem:
      'Building interactive browser games requires accurate state evaluation on every move without race conditions or memory leaks.',
    solution:
      'Implemented a clean matrix evaluation algorithm in JavaScript to check win patterns across rows, columns, and diagonals after every turn.',
    features: [
      'Interactive Turn Indicator: Highlights current player move (X or O).',
      'Winning Combination Detection: Triggers celebratory visual alerts when 3 match.',
      'Game Reset State: One-click score and grid clearing.',
      'Responsive Grid Layout: Fits both touch screens and desktop mouse pointer interactions.',
    ],
    process:
      'Structured 3x3 grid using CSS Grid, attached click event listeners to cell items, and evaluated game board array values.',
    challenges:
      'Preventing moves on already selected grid cells and handling tie state conditions gracefully.',
    lessons:
      'Gained deep understanding of game loops, state conditional checks, and dynamic class toggles in JavaScript.',
    future: [
      'Add Minimax AI algorithm for single player VS Computer mode.',
      'Incorporate sound effects and win particle animations.',
    ],
    prevId: 'todo-app',
    prevTitle: 'To-Do Application',
    nextId: 'stopwatch',
    nextTitle: 'Stopwatch App',
  },

  'stopwatch': {
    heroTag: 'Precision Case Study',
    title: 'Stopwatch Application',
    role: 'Frontend Developer',
    timeline: '1 Week',
    category: 'Web Utility',
    techStack: 'HTML5, CSS3, JavaScript',
    image: '/assets/projects/stopwatch.png',
    liveUrl: 'https://user-friendly-stopwatch-site.onrender.com',
    githubUrl: 'https://github.com/Abhay71044/SCT_WD_2',
    overview:
      'A precision timing tool supporting lap time recordings, millisecond resolution counters, dark mode glassmorphism theme, and interactive start/pause/reset states.',
    problem:
      'Standard JavaScript setInterval can drift over time due to main thread blocking. Accurate timer utilities require elapsed time calculation techniques.',
    solution:
      'Engineered timer logic using Date.now() timestamp differences rather than raw interval counts, providing true millisecond precision.',
    features: [
      'Millisecond Precision: High-accuracy timer output display.',
      'Lap Recording System: Store and view split times in an organized scroll list.',
      'Control Actions: Smooth Start, Pause, Lap, and Reset button workflows.',
      'Dark Mode Glass Styling: Premium dark UI aesthetics.',
    ],
    process:
      'Built digital timer readout layout, wired event handlers to track start time offsets, and rendered split logs dynamically into a lap table.',
    challenges:
      'Formatting raw milliseconds into clean MM:SS:MS string displays accurately.',
    lessons:
      'Learned precise time calculations, interval management, and DOM text content updating.',
    future: [
      'Add sound alerts for lap intervals.',
      'Allow exporting lap times to CSV file format.',
    ],
    prevId: 'tic-tac-toe',
    prevTitle: 'Tic Tac Toe Game',
    nextId: 'inclusive-pay',
    nextTitle: 'Inclusive Pay (UPI)',
  },
};

const ProjectDetail = () => {
  useScrollReveal();
  const { projectId } = useParams();
  const data = caseStudiesData[projectId];

  if (!data) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main>
      {/* CASE STUDY HERO */}
      <section className="case-study-hero reveal active" style={{ paddingTop: '180px', paddingBottom: '40px' }}>
        <p className="hero-tag">{data.heroTag}</p>
        <h1>{data.title}</h1>

        <div className="case-study-meta">
          <div className="case-study-meta-item">
            <h5>Role</h5>
            <p>{data.role}</p>
          </div>
          <div className="case-study-meta-item">
            <h5>Timeline</h5>
            <p>{data.timeline}</p>
          </div>
          <div className="case-study-meta-item">
            <h5>Category</h5>
            <p>{data.category}</p>
          </div>
          <div className="case-study-meta-item">
            <h5>Tech Stack</h5>
            <p>{data.techStack}</p>
          </div>
        </div>
      </section>

      {/* BANNER IMAGE */}
      <section style={{ paddingTop: 0, paddingBottom: '20px' }}>
        <div className="case-study-image reveal">
          <img src={data.image} alt={`${data.title} Layout Preview`} />
        </div>
      </section>

      {/* MAIN CONTENT BLOCK */}
      <section style={{ paddingTop: '20px' }}>
        <div className="case-study-grid">
          {/* Body */}
          <div className="case-study-content reveal">
            <div className="case-study-section">
              <h3>Overview</h3>
              <p>{data.overview}</p>
            </div>

            <div className="case-study-section">
              <h3>Problem Statement</h3>
              <p>{data.problem}</p>
            </div>

            <div className="case-study-section">
              <h3>The Solution</h3>
              <p>{data.solution}</p>
            </div>

            <div className="case-study-section">
              <h3>Core Features</h3>
              <ul>
                {data.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="case-study-section">
              <h3>Development Process</h3>
              <p>{data.process}</p>
            </div>

            <div className="case-study-section">
              <h3>Challenges &amp; Obstacles</h3>
              <p>{data.challenges}</p>
            </div>

            <div className="case-study-section">
              <h3>Lessons Learned</h3>
              <p>{data.lessons}</p>
            </div>

            <div className="case-study-section">
              <h3>Future Improvements</h3>
              <ul>
                {data.future.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="case-study-sidebar reveal">
            <div className="case-sidebar-block glass-card gradient-border-card" style={{ marginBottom: '24px' }}>
              <h4>Live Links</h4>
              <div className="case-sidebar-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.liveUrl ? (
                  <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo <i className="fas fa-external-link-alt"></i>
                  </a>
                ) : (
                  <span className="btn-secondary" style={{ opacity: 0.5, cursor: 'not-allowed', textAlign: 'center' }}>
                    Prototype In Progress
                  </span>
                )}
                {data.githubUrl && (
                  <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    GitHub Repository <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>

            <div className="case-sidebar-block glass-card gradient-border-card">
              <h4>Tech Details</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Tech Stack</h5>
                  <p style={{ fontWeight: 600 }}>{data.techStack}</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Testing</h5>
                  <p style={{ fontWeight: 600 }}>Responsive Audits, User Testing</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Hosting</h5>
                  <p style={{ fontWeight: 600 }}>Render / GitHub Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGINATION */}
      <section style={{ paddingTop: 0, marginBottom: '80px' }}>
        <div className="case-study-nav">
          <Link to={`/projects/${data.prevId}`} className="case-nav-btn">
            <span>&#10094; Previous Project</span>
            <h4>{data.prevTitle}</h4>
          </Link>

          <Link to="/projects" className="btn-secondary btn-back-projects">
            <i className="fas fa-th"></i> Back to Projects
          </Link>

          <Link to={`/projects/${data.nextId}`} className="case-nav-btn case-nav-next">
            <span>Next Project &#10095;</span>
            <h4>{data.nextTitle}</h4>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
