// ===================================
// NORTHERN FACILITIES GROUP
// Premium Interactive JavaScript
// Inspired by: kreo.net
// ===================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initScrollAnimations();
    initServiceHighlighter();
    initFormHandler();
    initSmoothScroll();
    initParallax();
});

// ===================================
// Navigation Scroll Effect
// ===================================

function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// Scroll-Triggered Animations (Kreo-Style)
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // Add fade-in-up class to sections automatically
    const autoFadeElements = document.querySelectorAll(
        '.process-step, .feature-item, .service-card, .contact-content, .process .section-title, .features .section-title, .services .section-title'
    );
    
    autoFadeElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// ===================================
// Service Highlighter (Horizontal Card Interaction)
// ===================================

function initServiceHighlighter() {
    const serviceCards = document.querySelectorAll('.service-card');
    const floorFill = document.getElementById('floor-area');
    const officeGroup = document.getElementById('office-areas');
    const windowGroup = document.getElementById('window-areas');
    const sanitizationGroup = document.getElementById('sanitization-areas');

    // Service animation mapping
    const serviceAnimations = {
        'office': officeGroup,
        'windows': windowGroup,
        'floor': floorFill,
        'sanitization': sanitizationGroup
    };

    // Function to activate a service
    function activateService(serviceType) {
        // Remove active class from all cards
        serviceCards.forEach(card => card.classList.remove('active'));
        
        // Remove active class from all blueprint groups
        if (floorFill) floorFill.classList.remove('active');
        if (officeGroup) officeGroup.classList.remove('active');
        if (windowGroup) windowGroup.classList.remove('active');
        if (sanitizationGroup) sanitizationGroup.classList.remove('active');
        
        // Add active class to selected card
        const activeCard = document.querySelector(`.service-card[data-service="${serviceType}"]`);
        if (activeCard) {
            activeCard.classList.add('active');
        }
        
        // Activate corresponding blueprint animation
        const activeAnimation = serviceAnimations[serviceType];
        if (activeAnimation) {
            activeAnimation.classList.add('active');
        }
    }

    // Add click handlers to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            activateService(serviceType);
        });

        // Add hover preview (optional - shows animation on hover)
        card.addEventListener('mouseenter', () => {
            const serviceType = card.getAttribute('data-service');
            const animation = serviceAnimations[serviceType];
            if (animation && !card.classList.contains('active')) {
                animation.style.opacity = '0.5';
            }
        });

        card.addEventListener('mouseleave', () => {
            const serviceType = card.getAttribute('data-service');
            const animation = serviceAnimations[serviceType];
            if (animation && !card.classList.contains('active')) {
                animation.style.opacity = '1';
            }
        });
    });

    // Activate first service by default
    if (serviceCards.length > 0) {
        const firstService = serviceCards[0].getAttribute('data-service');
        activateService(firstService);
    }
}

// ===================================
// Form Handler with Enhanced Feedback
// ===================================

function initFormHandler() {
    const form = document.getElementById('quoteForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Log form data (in production, send to server)
        console.log('Form submitted:', data);
        
        // Show success message
        showFormSuccess();
        
        // Reset form
        form.reset();
    });
    
    // Add focus effects to form fields
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', (e) => {
            e.target.parentElement.style.transform = 'translateY(0)';
        });
    });
}

function showFormSuccess() {
    const form = document.getElementById('quoteForm');
    const successMessage = document.createElement('div');
    
    successMessage.style.cssText = `
        padding: 2rem;
        background: linear-gradient(135deg, rgba(0, 163, 255, 0.1) 0%, rgba(48, 197, 255, 0.1) 100%);
        border: 2px solid var(--color-electric-blue);
        border-radius: 12px;
        color: #fff;
        text-align: center;
        margin-top: 2rem;
        animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 30px rgba(0, 163, 255, 0.3);
    `;
    
    successMessage.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <strong style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem;">Quote Request Submitted!</strong>
        <span style="font-size: 1.0625rem; color: var(--color-text-secondary);">
            We'll contact you within 24 hours with your custom cleaning plan.
        </span>
    `;
    
    form.parentElement.insertBefore(successMessage, form.nextSibling);
    
    // Remove message after 6 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';
        successMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => successMessage.remove(), 500);
    }, 6000);
}

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Parallax Effect for Hero Blueprint (Kreo-Style)
// ===================================

function initParallax() {
    const heroAnimation = document.querySelector('.hero-animation');
    
    if (!heroAnimation) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.25;
                
                // Subtle parallax movement
                heroAnimation.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
                
                // Fade out as you scroll
                const opacity = Math.max(0.2 - scrolled / 1000, 0.05);
                heroAnimation.style.opacity = opacity;
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ===================================
// Mouse Move Glow Effect (Premium Touch)
// ===================================

function initMouseGlow() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    hero.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateGlow() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        hero.style.setProperty('--mouse-x', `${currentX}px`);
        hero.style.setProperty('--mouse-y', `${currentY}px`);
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// Optional: Enable mouse glow effect
// initMouseGlow();

// ===================================
// Add Staggered Animation Delays
// ===================================

function addStaggeredDelays() {
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.08}s`;
    });
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Initialize staggered delays
addStaggeredDelays();

// ===================================
// Intersection Observer Polyfill Check
// ===================================

if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Loading fallback...');
    // Fallback: make all elements visible immediately
    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.classList.add('is-visible');
    });
}

// ===================================
// Performance Optimization: Preload Critical Assets
// ===================================

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        console.log('Northern Facilities Group - Premium Experience Loaded');
    });
}
