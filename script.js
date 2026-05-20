// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
});

function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;

    followerX += distX * 0.1;
    followerY += distY * 0.1;

    cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Cursor hover effects
const interactiveElements = document.querySelectorAll('a, button, .work-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(2)`;
        cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px) scale(1.5)`;
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1)`;
        cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px) scale(1)`;
    });
});

// Mobile menu
const menuBtn = document.querySelector('.nav-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.section-title, .work-item, .about-description, .about-skills, .contact-link');
animatedElements.forEach(el => observer.observe(el));

// Parallax effect on scroll
let scrollY = 0;

window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;

    // Hero parallax
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
        hero.style.opacity = 1 - (scrollY / window.innerHeight);
    }
});

// Work items hover effect
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    const image = item.querySelector('.work-image-inner');

    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        image.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });
});

// Magnetic effect for buttons
const magneticElements = document.querySelectorAll('.contact-link');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// Preloader animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Prevent context menu on images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Add stagger delay to contact links
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach((link, index) => {
    link.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger delay to work items
workItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
});

// Skill tags animation
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';

    setTimeout(() => {
        tag.style.transition = 'all 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    }, index * 50);
});

// Observe skill tags
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll('.skill-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'translateY(0)';
                }, index * 50);
            });
        }
    });
}, { threshold: 0.3 });

const skillsContainer = document.querySelector('.about-skills');
if (skillsContainer) {
    skillsObserver.observe(skillsContainer);
}

// Add smooth reveal for stats
const stats = document.querySelectorAll('.stat');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const finalValue = number.textContent;
            const numericValue = parseInt(finalValue);

            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    number.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current) + '+';
                }
            }, 30);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));
