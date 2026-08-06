import React, { useEffect, useRef, useState } from 'react';

const StatCard = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const targetVal = parseInt(target, 10);
            let current = 0;
            const duration = 1500;
            const step = Math.max(1, Math.ceil(targetVal / (duration / 16)));

            const timer = setInterval(() => {
              current += step;
              if (current >= targetVal) {
                setCount(targetVal);
                clearInterval(timer);
              } else {
                setCount(current);
              }
            }, 16);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div className="stat-card glass-card gradient-border-card" ref={cardRef}>
      <span className="stat-number" data-target={target}>
        {count}+
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default StatCard;
