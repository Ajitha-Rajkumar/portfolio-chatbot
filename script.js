// ========================================
//  PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeIcon.style.transform = 'rotate(360deg)';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeIcon.style.transform = 'rotate(0deg)';
        }
    }

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Add scrolled class
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Active link highlighting
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ========== MOBILE NAV TOGGLE ==========
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ========== TYPEWRITER EFFECT ==========
    const typewriterEl = document.getElementById('typewriter');
    const titles = [
        'Delivery Manager',
        'Siteforge Feature Lead',
        'Process Documentation Expert',
        'Project Management Professional',
        'eTOM & TM Forum Specialist'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeWriter() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typewriterEl.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();

    // ========== ANIMATED COUNTER ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });

        countersAnimated = true;
    }

    // ========== SKILL BAR ANIMATION ==========
    function animateSkillBars() {
        const skillFills = document.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width + '%';
        });
    }

    // ========== SCROLL REVEAL ==========
    function addRevealClasses() {
        const elements = document.querySelectorAll(
            '.skill-card, .project-card, .timeline-item, .about-grid, .contact-grid'
        );
        elements.forEach(el => el.classList.add('reveal'));
    }
    addRevealClasses();

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Trigger counters when hero stats are visible
                if (entry.target.closest('.hero') || entry.target.classList.contains('hero')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Observe hero stats for counter animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(heroStats);
    }

    // Observe skills section for skill bar animation
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkillBars, 300);
                }
            });
        }, { threshold: 0.2 });
        skillsObserver.observe(skillsSection);
    }

    // ========== FLOATING PARTICLES ==========
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        const count = 30;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;

            // Random colors
            const colors = ['var(--primary)', 'var(--primary-light)', 'var(--accent)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ========== SMOOTH SCROLL (fallback) ==========
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

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        // Simulate sending
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                contactForm.reset();
            }, 2500);
        }, 1500);
    });

    // ========== PARALLAX ON MOUSE MOVE (Hero) ==========
    const heroContent = document.querySelector('.hero-content');

    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        heroContent.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.querySelector('.hero').addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            heroContent.style.transition = '';
        }, 500);
    });

    // ========== TRIGGER INITIAL COUNTER ==========
    // If hero stats are already visible on load
    setTimeout(() => {
        animateCounters();
    }, 1500);

});
