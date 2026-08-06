import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const getStatusMessage = (p) => {
  if (p < 18) return 'INITIALIZING CORE MODULES...';
  if (p < 38) return 'FETCHING PROJECT TELEMETRY & ASSETS...';
  if (p < 58) return 'ESTABLISHING SECURE API HANDSHAKE...';
  if (p < 78) return 'OPTIMIZING RENDER CANVAS & SHADERS...';
  if (p < 96) return 'ASSEMBLING UI COMPONENTS...';
  return 'SYSTEM READY 🚀';
};

const Loader = ({ onLoaded }) => {
  const location = useLocation();
  const canvasRef = useRef(null);
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const isFirstLoad = useRef(true);

  // Trigger loader progress on initial mount and route changes
  useEffect(() => {
    setIsDone(false);
    setPercent(0);

    let currentProgress = 0;
    let timerId;

    const updateProgress = () => {
      let stepSpeed = 45;

      // Simulate realistic ~3.0s network & asset fetching progress curve
      if (currentProgress < 18) {
        currentProgress += Math.random() * 2.5 + 1.8;
        stepSpeed = 45;
      } else if (currentProgress < 38) {
        currentProgress += Math.random() * 2.2 + 1.2;
        stepSpeed = 50;
      } else if (currentProgress < 58) {
        // Simulated API handshake delay
        currentProgress += Math.random() * 1.4 + 0.7;
        stepSpeed = 65;
      } else if (currentProgress < 78) {
        currentProgress += Math.random() * 2.8 + 1.5;
        stepSpeed = 45;
      } else if (currentProgress < 96) {
        currentProgress += Math.random() * 2.0 + 1.0;
        stepSpeed = 45;
      } else {
        currentProgress = 100;
      }

      if (currentProgress > 100) currentProgress = 100;

      const rounded = Math.floor(currentProgress);
      setPercent(rounded);

      if (rounded < 100) {
        timerId = setTimeout(updateProgress, stepSpeed);
      } else {
        setTimeout(() => {
          setIsDone(true);
          document.body.classList.add('portfolio-loaded');
          if (isFirstLoad.current) {
            isFirstLoad.current = false;
          }
          if (onLoaded) onLoaded();
        }, 350);
      }
    };

    timerId = setTimeout(updateProgress, 40);

    return () => clearTimeout(timerId);
  }, [location.pathname]);

  // Canvas particle and star animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles and stars
    const particles = [];
    const particleCount = 35;
    const stars = [];
    const starCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.2,
        color: Math.random() > 0.55 ? 'rgba(0, 242, 254, ' : 'rgba(186, 85, 211, ',
        alpha: Math.random(),
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        fadeSpeed: Math.random() * 0.01 + 0.005,
      });
    }

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const drawWaveGrid = (side, time) => {
      const cols = 6;
      const rows = 25;
      const colSpacing = 22;
      const rowSpacing = height / rows;

      ctx.save();
      for (let c = 0; c < cols; c++) {
        const colAlpha = (1 - c / cols) * 0.15;
        ctx.fillStyle =
          side === 'left' ? `rgba(0, 242, 254, ${colAlpha})` : `rgba(186, 85, 211, ${colAlpha})`;

        for (let r = 0; r < rows; r++) {
          const y = r * rowSpacing;
          const wave1 = Math.sin((y / height) * Math.PI * 3 + time * 0.0012 + c * 0.35) * 12;
          const wave2 = Math.cos((y / height) * Math.PI * 1.5 - time * 0.0018 + c * 0.6) * 6;

          let x;
          if (side === 'left') {
            x = c * colSpacing + 15 + wave1 + wave2;
          } else {
            x = width - (c * colSpacing + 15) + wave1 + wave2;
          }

          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();

          if (c > 0 && r % 2 === 0) {
            ctx.strokeStyle =
              side === 'left'
                ? `rgba(0, 242, 254, ${colAlpha * 0.35})`
                : `rgba(186, 85, 211, ${colAlpha * 0.35})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            const prevWave1 = Math.sin((y / height) * Math.PI * 3 + time * 0.0012 + (c - 1) * 0.35) * 12;
            const prevWave2 = Math.cos((y / height) * Math.PI * 1.5 - time * 0.0018 + (c - 1) * 0.6) * 6;
            const prevX =
              side === 'left'
                ? (c - 1) * colSpacing + 15 + prevWave1 + prevWave2
                : width - ((c - 1) * colSpacing + 15) + prevWave1 + prevWave2;
            ctx.moveTo(prevX, y);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    };

    let animationFrameId;

    function animate(time) {
      ctx.fillStyle = '#05070F';
      ctx.fillRect(0, 0, width, height);

      // Draw stars
      ctx.save();
      for (let i = 0; i < starCount; i++) {
        const s = stars[i];
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 1) {
          s.alpha = 1;
          s.twinkleDir = -1;
        } else if (s.alpha <= 0.1) {
          s.alpha = 0.1;
          s.twinkleDir = 1;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      }
      ctx.restore();

      // Wave grid
      drawWaveGrid('left', time);
      drawWaveGrid('right', time);

      // Particles
      ctx.save();
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        p.alpha += p.fadeSpeed * p.fadeDir;
        if (p.alpha >= 0.7) {
          p.alpha = 0.7;
          p.fadeDir = -1;
        } else if (p.alpha <= 0) {
          p.alpha = 0;
          p.fadeDir = 1;
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        if (p.x < 0 || p.x > width) {
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="loader-wrapper"
      style={{
        opacity: isDone ? 0 : 1,
        visibility: isDone ? 'hidden' : 'visible',
        pointerEvents: isDone ? 'none' : 'all',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
      }}
    >
      <canvas id="loader-canvas" ref={canvasRef}></canvas>
      <div className="loader-container">
        <div className="loader-logo-area">
          <div className="loader-ring ring-outer">
            <div className="ring-dot dot-1"></div>
          </div>
          <div className="loader-ring ring-middle">
            <div className="ring-dot dot-2"></div>
          </div>
          <div className="loader-ring ring-inner"></div>
          <div className="loader-logo-text">
            <span className="logo-a">A</span>
            <span className="logo-s">S</span>
          </div>
        </div>

        <div className="loader-info">
          <h1 className="loader-name">
            <span className="name-abhay">ABHAY</span> <span className="name-singh">SINGH</span>
          </h1>
          <p className="loader-subtitle">FULL STACK DEVELOPER</p>
          <div className="loader-code-icon">&lt;/&gt;</div>
        </div>

        <div className="loader-progress-container">
          <div className="loader-progress-labels">
            <span className="loader-label-text">{getStatusMessage(percent)}</span>
            <span className="loader-label-percent" id="loader-percent">
              {percent}%
            </span>
          </div>
          <div className="loader-progress-bar">
            <div
              className="loader-progress-fill"
              id="loader-progress-fill"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p className="loader-tagline">BUILDING IDEAS. SOLVING PROBLEMS. CREATING IMPACT.</p>
        </div>

        <div className="loader-decor-bottom">
          <div className="decor-triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
