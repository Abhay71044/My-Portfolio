// ======================================
// TYPEWRITER EFFECT
// ======================================

const heroTaglines = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Cloud Learner",
    "Cybersecurity Explorer"
];

let currentTagline = 0;
let currentChar = 0;
let deleting = false;

const heroTag = document.querySelector(".hero-tag");

function typeWriter() {

    if (!heroTag) return;

    const text = heroTaglines[currentTagline];

    if (!deleting) {

        heroTag.textContent =
            text.substring(0, currentChar + 1);

        currentChar++;

        if (currentChar === text.length) {

            deleting = true;

            setTimeout(typeWriter, 1500);

            return;
        }

    } else {

        heroTag.textContent =
            text.substring(0, currentChar - 1);

        currentChar--;

        if (currentChar === 0) {

            deleting = false;

            currentTagline++;

            if (currentTagline >= heroTaglines.length) {
                currentTagline = 0;
            }
        }
    }

    setTimeout(typeWriter, deleting ? 40 : 90);
}

typeWriter();


// ======================================
// SPOTLIGHT CURSOR
// ======================================

const spotlight =
document.getElementById("spotlight");

document.addEventListener(
"mousemove",
(e)=>{

    if(!spotlight) return;

    spotlight.style.left =
    e.clientX + "px";

    spotlight.style.top =
    e.clientY + "px";

});


// ======================================
// ACTIVE SIDEBAR
// ======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar a");

window.addEventListener("scroll",()=>{

    let currentSection = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            currentSection =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + currentSection
        ){

            link.classList.add("active");

        }

    });

});


// ======================================
// SMOOTH SCROLL
// ======================================

navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target =
        document.querySelector(
            link.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ======================================
// REVEAL ANIMATION
// ======================================

const revealElements =
document.querySelectorAll(

".section, .project-card, .achievement-card, .cert-card, .timeline-card"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold:.15
}

);

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});


// ======================================
// STATS COUNTER
// ======================================

const statNumbers =
document.querySelectorAll(".stat-card h2");

function animateCounter(el){

    let target =
    parseInt(
        el.innerText.replace("+","")
    );

    let count = 0;

    const speed =
    Math.max(20,150/target);

    const updateCounter = ()=>{

        if(count < target){

            count++;

            el.innerText = count + "+";

            setTimeout(
                updateCounter,
                speed
            );

        }else{

            if(
                el.innerText.includes("+")
            ){

                el.innerText =
                target + "+";

            }

        }

    }

    updateCounter();

}

const statsObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(
                entry.target
            );

            statsObserver.unobserve(
                entry.target
            );

        }

    });

},

{
    threshold:.5
}

);

statNumbers.forEach(stat=>{

    statsObserver.observe(stat);

});


// ======================================
// CARD GLOW EFFECT
// ======================================

const cards =
document.querySelectorAll(

".project-card,.cert-card,.achievement-card,.timeline-card"

);

cards.forEach(card=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =

        `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(139,92,246,.20),
        rgba(255,255,255,.04)
        )`;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.background =
        "rgba(255,255,255,.04)";

    });

});


// ======================================
// PARALLAX HERO IMAGE
// ======================================

const profileCard =
document.querySelector(
".profile-card"
);

window.addEventListener(
"mousemove",
(e)=>{

    if(!profileCard) return;

    const x =
    (window.innerWidth/2 -
    e.clientX)/40;

    const y =
    (window.innerHeight/2 -
    e.clientY)/40;

    profileCard.style.transform =

    `rotateY(${x}deg)
     rotateX(${-y}deg)`;

});


// ======================================
// CONTACT FORM
// ======================================

const contactForm =
document.getElementById(
"contact-form"
);

if(contactForm){

    contactForm.addEventListener(

    "submit",

    ()=>{

        const button =
        contactForm.querySelector(
        "button"
        );

        if(button){

            button.innerText =
            "Sending...";

            setTimeout(()=>{

                button.innerText =
                "Message Sent 🚀";

            },1500);

        }

    });

}


// ======================================
// PAGE LOADER
// ======================================

window.addEventListener(

"load",

()=>{

    document.body.classList.add(
    "loaded"
    );

});


// ======================================
// CONSOLE SIGNATURE
// ======================================

console.log(

"%cPortfolio Developed By Abhay Singh 🚀",

"font-size:18px;color:#8b5cf6;font-weight:bold;"

);

const form = document.querySelector("form");

form.addEventListener("submit", function () {
    document.getElementById("success-msg").innerHTML =
        "✅ Message sent successfully!";
});