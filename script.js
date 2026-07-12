/* ==========================================================================
   PREMIUM PORTFOLIO INTERACTION ENGINE
   Handles Cursor, Animations, Navigation, Theme Toggling & Lightboxes
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initTheme();
    initCustomCursor();
    initSpotlight();
    initNavbar();
    initTypewriter();
    initScrollReveal();
    initStatsCounter();
    initSkillBars();
    initCertLightbox();
    initContactForm();
    initCardGlow();
    initResumeModal();
    initAboutAnimatePercent();
});

// ==========================================
// PAGE LOADER ANIMATION
// ==========================================
function initLoader() {
    const loader = document.getElementById("loader-wrapper");
    if (!loader) return;
    
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 600);
    });

    if (document.readyState === "complete") {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 600);
    }
}

// ==========================================
// THEME MANAGEMENT (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        
        const cursor = document.getElementById("custom-cursor");
        if (cursor) {
            cursor.style.transform = "translate(-50%, -50%) scale(3)";
            setTimeout(() => {
                cursor.style.transform = "translate(-50%, -50%) scale(1)";
            }, 300);
        }
    });
}

// ==========================================
// CUSTOM INTERACTIVE CURSOR
// ==========================================
function initCustomCursor() {
    const cursor = document.getElementById("custom-cursor");
    const dot = document.getElementById("custom-cursor-dot");
    if (!cursor || !dot) return;

    let targetX = 0, targetY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        
        dot.style.left = `${targetX}px`;
        dot.style.top = `${targetY}px`;
    });

    function animateCursor() {
        const lerpFactor = 0.15;
        cursorX += (targetX - cursorX) * lerpFactor;
        cursorY += (targetY - cursorY) * lerpFactor;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = document.querySelectorAll("a, button, .cert-card-v2, .btn-filter");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
            cursor.style.borderColor = "var(--secondary-color)";
            cursor.style.backgroundColor = "rgba(6, 182, 212, 0.05)";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.borderColor = "var(--primary-color)";
            cursor.style.backgroundColor = "transparent";
        });
    });
}

// ==========================================
// SPOTLIGHT BACKDROP MOUSE HOVER
// ==========================================
function initSpotlight() {
    const spotlight = document.getElementById("spotlight");
    if (!spotlight) return;

    document.addEventListener("mousemove", (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
}

// ==========================================
// STICKY NAVBAR MECHANICS & ACTIVE PATHS
// ==========================================
function initNavbar() {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.getElementById("nav-toggle");
    const navLinksList = document.getElementById("nav-links");
    if (!navbar) return;

    // Dynamically inject mobile header structure and icons if navLinksList exists
    if (navLinksList) {
        if (!navLinksList.querySelector(".nav-mobile-header")) {
            const pathPrefix = window.location.pathname.includes("/projects/") ? "../" : "";
            
            // 1. Prepend Mobile profile header
            const mobileHeader = document.createElement("div");
            mobileHeader.className = "nav-mobile-header";
            mobileHeader.innerHTML = `
                <div class="nav-mobile-avatar-wrapper">
                    <img src="${pathPrefix}assets/profile.png" alt="Abhay Singh Profile" class="nav-mobile-avatar">
                </div>
                <h3 class="nav-mobile-name">Abhay Singh</h3>
                <p class="nav-mobile-title">AI Engineer &amp; Full Stack Developer</p>
                <span class="nav-mobile-badge"><span class="badge-dot"></span> Available for Internship</span>
            `;
            navLinksList.insertBefore(mobileHeader, navLinksList.firstChild);

            // 2. Prepend FontAwesome icons to navigation anchors
            const iconMap = {
                "home": "fa-home",
                "about": "fa-user",
                "skills": "fa-laptop-code",
                "experience": "fa-briefcase",
                "projects": "fa-rocket",
                "achievements": "fa-award",
                "certificates": "fa-scroll",
                "contact": "fa-envelope",
                "resume": "fa-file-download"
            };
            const anchors = navLinksList.querySelectorAll("li a");
            anchors.forEach(a => {
                const text = a.textContent.trim().toLowerCase();
                const iconClass = iconMap[text] || "fa-link";
                const icon = document.createElement("i");
                icon.className = `fas ${iconClass} nav-link-icon`;
                a.insertBefore(icon, a.firstChild);
            });

            // 3. Append floating mobile particles
            const particles = document.createElement("div");
            particles.className = "nav-mobile-particles";
            for (let i = 0; i < 10; i++) {
                const p = document.createElement("span");
                p.className = `particle p${i + 1}`;
                p.style.left = `${Math.random() * 100}%`;
                p.style.top = `${Math.random() * 100}%`;
                p.style.animationDelay = `${Math.random() * 8}s`;
                p.style.animationDuration = `${5 + Math.random() * 10}s`;
                particles.appendChild(p);
            }
            navLinksList.appendChild(particles);
        }
    }

    let lastScrollY = window.scrollY;

    // Scroll up/down show/hide logic
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY) {
                navbar.classList.add("nav-up");
            } else {
                navbar.classList.remove("nav-up");
            }
        } else {
            navbar.classList.remove("nav-up");
        }
        lastScrollY = currentScrollY;
    });

    // Mobile menu toggle + Body Scroll Prevention
    if (navToggle && navLinksList) {
        navToggle.addEventListener("click", () => {
            const isOpen = navToggle.classList.toggle("open");
            navLinksList.classList.toggle("open");
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        const links = navLinksList.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("open");
                navLinksList.classList.remove("open");
                document.body.style.overflow = "";
            });
        });
    }

    // Auto-close hamburger menu on resize and escape key
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            if (navToggle) navToggle.classList.remove("open");
            if (navLinksList) navLinksList.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (navToggle) navToggle.classList.remove("open");
            if (navLinksList) navLinksList.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    // Active Navigation Highlighting
    const links = document.querySelectorAll(".nav-links a");
    const path = window.location.pathname.toLowerCase();
    
    links.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href").toLowerCase();
        const baseHref = href.split("/").pop();

        if (path.includes("about.html") && baseHref.includes("about.html")) {
            link.classList.add("active");
        } else if (path.includes("skills.html") && baseHref.includes("skills.html")) {
            link.classList.add("active");
        } else if (path.includes("experience.html") && baseHref.includes("experience.html")) {
            link.classList.add("active");
        } else if ((path.includes("projects.html") || path.includes("/projects/")) && baseHref.includes("projects.html")) {
            link.classList.add("active");
        } else if (path.includes("achievements.html") && baseHref.includes("achievements.html")) {
            link.classList.add("active");
        } else if (path.includes("certifications.html") && baseHref.includes("certifications.html")) {
            link.classList.add("active");
        } else if (path.includes("contact.html") && baseHref.includes("contact.html")) {
            link.classList.add("active");
        } else if ((path.endsWith("/") || path.endsWith("index.html") || path.substring(path.lastIndexOf('/') + 1) === "") && baseHref.includes("index.html")) {
            link.classList.add("active");
        }
    });
}

// ==========================================
// HERO TYPEWRITER HEADLINE ANIMATOR
// ==========================================
function initTypewriter() {
    const target = document.querySelector(".hero-typewriter");
    if (!target) return;

    const phrases = JSON.parse(target.getAttribute("data-phrases") || "[]");
    if (phrases.length === 0) return;

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const fullPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            target.textContent = fullPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            target.textContent = fullPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let typingSpeed = isDeleting ? 30 : 70;

        if (!isDeleting && currentCharIndex === fullPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// ==========================================
// SCROLL REVEAL ANIMATOR
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// NUMERIC STATISTICS COUNTER ANIMATOR
// ==========================================
function initStatsCounter() {
    const stats = document.querySelectorAll(".stat-number");
    if (stats.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const targetVal = parseInt(el.getAttribute("data-target") || "0", 10);
                animateVal(el, targetVal);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(st => observer.observe(st));

    function animateVal(el, max) {
        let current = 0;
        const duration = 1500;
        const step = Math.ceil(max / (duration / 16));
        
        const timer = setInterval(() => {
            current += step;
            if (current >= max) {
                el.textContent = `${max}+`;
                clearInterval(timer);
            } else {
                el.textContent = `${current}+`;
            }
        }, 16);
    }
}

// ==========================================
// SKILLS PROGRESS BAR ANIMATIONS
// ==========================================
function initSkillBars() {
    const fills = document.querySelectorAll(".skill-fill");
    if (fills.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const targetPercent = fill.getAttribute("data-percent") || "0%";
                fill.style.width = targetPercent;
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.1 });

    fills.forEach(fl => observer.observe(fl));
}

// ==========================================
// INTERACTIVE LIGHTBOX FOR CERTIFICATES
// ==========================================
function initCertLightbox() {
    const cards = document.querySelectorAll(".cert-card-v2");
    if (cards.length === 0) return;

    let modal = document.getElementById("lightbox-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "lightbox-modal";
        modal.className = "lightbox-modal";
        modal.innerHTML = `
            <div class="lightbox-wrapper">
                <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
                <button class="lightbox-arrow lightbox-arrow-left" aria-label="Previous image">&#10094;</button>
                <img class="lightbox-image" src="" alt="Certificate Preview">
                <button class="lightbox-arrow lightbox-arrow-right" aria-label="Next image">&#10095;</button>
                <div class="lightbox-title"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const img = modal.querySelector(".lightbox-image");
    const title = modal.querySelector(".lightbox-title");
    const closeBtn = modal.querySelector(".lightbox-close");
    const leftArrow = modal.querySelector(".lightbox-arrow-left");
    const rightArrow = modal.querySelector(".lightbox-arrow-right");

    let currentIndex = 0;
    const certData = [];

    cards.forEach((card, idx) => {
        const imageElement = card.querySelector("img");
        const titleElement = card.querySelector("h4");
        if (imageElement && titleElement) {
            certData.push({
                src: imageElement.getAttribute("src"),
                title: titleElement.textContent
            });
        }
        
        card.addEventListener("click", () => {
            currentIndex = idx;
            openLightbox();
        });
    });

    function openLightbox() {
        updateLightbox();
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
    });

    function updateLightbox() {
        const data = certData[currentIndex];
        if (data) {
            img.setAttribute("src", data.src);
            title.textContent = data.title;
        }
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % certData.length;
        updateLightbox();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + certData.length) % certData.length;
        updateLightbox();
    }

    closeBtn.addEventListener("click", closeLightbox);
    rightArrow.addEventListener("click", nextImage);
    leftArrow.addEventListener("click", prevImage);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    });
}

// ==========================================
// CONTACT SUBMISSION HANDLER (WEB3FORMS)
// ==========================================
function initContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const successMsg = document.getElementById("success-msg");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending Message...";
        }

        const formData = new FormData(contactForm);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (successMsg) {
                    successMsg.textContent = "✅ Message sent successfully! I will reach out shortly.";
                    successMsg.style.color = "var(--accent-green)";
                }
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.textContent = "Message Sent 🚀";
                }
            } else {
                throw new Error("Form submission error");
            }
        })
        .catch(err => {
            console.error(err);
            if (successMsg) {
                successMsg.textContent = "❌ Something went wrong. Please try again.";
                successMsg.style.color = "red";
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Message";
            }
        });
    });
}

// ==========================================
// MOUSE CARD GLOW GRADIENT INJECTION
// ==========================================
function initCardGlow() {
    const cards = document.querySelectorAll(".glass-card");
    if (cards.length === 0) return;

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            card.style.background = `radial-gradient(circle 250px at ${x}px ${y}px, var(--card-hover-bg), var(--card-bg))`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.background = "var(--card-bg)";
        });
    });
}

// ==========================================
// INTERACTIVE RESUME LIGHTBOX MODAL
// ==========================================
function initResumeModal() {
    const resumeButtons = document.querySelectorAll(".btn-nav-resume, .btn-nav-resume-mobile");
    if (resumeButtons.length === 0) return;

    let modal = document.getElementById("resume-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "resume-modal";
        modal.className = "lightbox-modal";
        modal.innerHTML = `
            <div class="lightbox-wrapper" style="display: flex; flex-direction: column; align-items: center; max-width: 90%; max-height: 95%;">
                <button class="lightbox-close" id="resume-close-btn" aria-label="Close Resume" style="top: -60px;">&times;</button>
                <img class="lightbox-image" id="resume-modal-img" src="" alt="Abhay Singh Resume" style="max-height: 70vh; object-fit: contain; border-radius: 8px;">
                <div class="resume-actions" style="margin-top: 20px; display: flex; justify-content: center; width: 100%;">
                    <a href="" id="resume-download-btn" download="Abhay_Singh_Resume.jpeg" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; padding: 12px 28px; border-radius: 12px; font-weight: 600;">
                        <i class="fas fa-download"></i> Download Resume
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const img = modal.querySelector("#resume-modal-img");
    const downloadBtn = modal.querySelector("#resume-download-btn");
    const closeBtn = modal.querySelector("#resume-close-btn");

    resumeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const href = btn.getAttribute("href");
            img.setAttribute("src", href);
            downloadBtn.setAttribute("href", href);
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeResume() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeResume);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeResume();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "Escape") closeResume();
    });
}

// ==========================================
// ABOUT PAGE PERCENTAGE CARD COUNT UP
// ==========================================
function initAboutAnimatePercent() {
    const percentElements = document.querySelectorAll(".animate-percent");
    if (percentElements.length === 0) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute("data-val"));
                let current = 0;
                const duration = 1200; // ms
                const steps = 60;
                const stepValue = target / steps;
                const stepTime = duration / steps;
                
                let counter = 0;
                const timer = setInterval(() => {
                    counter++;
                    current += stepValue;
                    if (counter >= steps) {
                        el.textContent = `${target}%`;
                        clearInterval(timer);
                    } else {
                        el.textContent = `${current.toFixed(1)}%`;
                    }
                }, stepTime);
                
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    percentElements.forEach(el => observer.observe(el));
}



// Console Signature log
console.log(
    "%cPortfolio Interaction Engine Loaded 🚀 %cDeveloped for Abhay Singh",
    "color:#8b5cf6; font-size:16px; font-weight:bold;",
    "color:#06b6d4; font-size:12px; font-style:italic;"
);