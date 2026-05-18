document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    document.querySelectorAll('a[href*="#"]:not([href^="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const url = new URL(this.href);
            if (url.hash && url.pathname === window.location.pathname) {
                e.preventDefault();
                const targetElement = document.querySelector(url.hash);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        let currentSectionId = '';
        const navHeight = document.querySelector('.navbar').offsetHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top - navHeight - 100;
            if (sectionTop <= 0) {
                currentSectionId = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes('#' + currentSectionId)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        setTimeout(function() {
            document.querySelectorAll('.section-title').forEach(function(el) {
                observer.observe(el);
            });

            document.querySelectorAll('.skill-card').forEach(function(el, index) {
                el.style.transitionDelay = (index * 0.08) + 's';
                observer.observe(el);
            });

            document.querySelectorAll('.project-card').forEach(function(el, index) {
                el.style.transitionDelay = (index * 0.1) + 's';
                observer.observe(el);
            });
        }, 100);
    } else {
        document.querySelectorAll('.section-title, .skill-card, .project-card').forEach(function(el) {
            el.classList.add('visible');
        });
    }

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
        lastScroll = currentScroll;
    });
});