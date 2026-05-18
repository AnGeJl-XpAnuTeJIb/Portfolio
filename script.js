document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');

        // Animate menu toggle bars
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');

                // Reset menu toggle bars
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let currentSection = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe skill cards with stagger effect
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.style.transitionDelay = (index * 0.08) + 's';
        observer.observe(card);
    });

    // Observe project cards with stagger effect
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = (index * 0.12) + 's';
        observer.observe(card);
    });

    // Parallax effect for hero section
    let ticking = false;

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero && scrolled < window.innerHeight) {
                    hero.style.transform = 'translateY(' + (scrolled * 0.4) + 'px)';
                    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Cursor glow effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.1;
        cursorY += dy * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Dynamic gradient background for hero
    const hero = document.querySelector('.hero');

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        if (hero && window.pageYOffset < window.innerHeight) {
            hero.style.background = `
                radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(239, 68, 68, 0.12) 0%, transparent 50%),
                radial-gradient(circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
            `;
        }
    });

    // Add smooth reveal animation to sections
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        sectionObserver.observe(section);
    });

    // Add floating animation to tags
    document.querySelectorAll('.tag').forEach((tag, index) => {
        tag.style.animationDelay = (index * 0.1) + 's';
    });

    // Preload images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});
