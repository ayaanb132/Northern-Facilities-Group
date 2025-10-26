// ===================================
// NORTHERN FACILITIES GROUP
// Premium Interactive JavaScript
// SaaS Dark-Mode Design
// ===================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initModalHandlers();
    initSmoothScroll();
    initScrollAnimations();
    initDashboardDemo();
    initHeroAnimation();
});

// ===================================
// Navigation Scroll Effect
// ===================================

function initNavScroll() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ===================================
// Modal Handlers
// ===================================

function initModalHandlers() {
    const modal = document.getElementById('contactModal');
    const heroBtn = document.getElementById('heroCtaBtn');
    const finalBtn = document.getElementById('finalCtaBtn');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');
    const contactForm = document.getElementById('contactForm');
    
    // Open modal
    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Event listeners
    if (heroBtn) heroBtn.addEventListener('click', openModal);
    if (finalBtn) finalBtn.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submitted:', data);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // Close modal after 2 seconds
            setTimeout(closeModal, 2000);
        });
    }
}

function showSuccessMessage() {
    const modalContent = document.querySelector('.modal-content');
    const successDiv = document.createElement('div');
    
    successDiv.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(125, 211, 252, 0.2) 100%);
        border: 2px solid var(--color-accent);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        width: 90%;
        animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
        z-index: 10;
    `;
    
    successDiv.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <strong style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; color: var(--color-text-primary);">Request Submitted!</strong>
        <span style="font-size: 1rem; color: var(--color-text-secondary);">
            We'll contact you within 24 hours.
        </span>
    `;
    
    modalContent.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 2000);
}

// ===================================
// Smooth Scroll
// ===================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#' || href === '#contact-modal') {
                e.preventDefault();
                return;
            }
            
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
<<<<<<< HEAD
// Parallax Effect for Hero Blueprint - REMOVED
// All animations pre-loaded, no scroll effects
// ===================================

function initParallax() {
    // Parallax scroll effects removed as per requirements
    // All content is now pre-loaded and visible
    return;
=======
// Scroll-Triggered Animations
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
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
}

// ===================================
// Interactive Dashboard Demo (Scroll-Driven)
// ===================================

function initDashboardDemo() {
    const demoContainer = document.querySelector('.demo-container');
    const demoSteps = document.querySelectorAll('.demo-step');
    const dashboardStates = document.querySelectorAll('.dashboard-state');
    
    if (!demoContainer || demoSteps.length === 0) return;
    
    let currentState = 1;
    
    const updateDashboardState = (stateNumber) => {
        if (currentState === stateNumber) return;
        
        currentState = stateNumber;
        
        // Update step opacity
        demoSteps.forEach((step, index) => {
            if (index + 1 === stateNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Update dashboard visual state
        dashboardStates.forEach(state => {
            if (parseInt(state.dataset.state) === stateNumber) {
                state.classList.add('active');
            } else {
                state.classList.remove('active');
            }
        });
    };
    
    // Scroll event listener with throttling
    let ticking = false;
    
    const checkScroll = () => {
        const containerRect = demoContainer.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, 
            (viewportHeight / 2 - containerTop) / (containerHeight - viewportHeight / 2)
        ));
        
        // Determine which state should be active based on scroll progress
        if (scrollProgress < 0.33) {
            updateDashboardState(1);
        } else if (scrollProgress < 0.66) {
            updateDashboardState(2);
        } else {
            updateDashboardState(3);
        }
        
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(checkScroll);
            ticking = true;
        }
    });
    
    // Initial check
    checkScroll();
>>>>>>> a233724 (complerlty rehauled the site to show dashboard more)
}

// ===================================
// Hero Animation Loop
// ===================================

function initHeroAnimation() {
    // The checklist animation is handled via CSS
    // This function can be extended for additional hero animations
    
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    if (checklistItems.length === 0) return;
    
    // Loop the animation
    const animationDuration = 5500; // Total animation cycle
    
    setInterval(() => {
        checklistItems.forEach((item, index) => {
            const checkbox = item.querySelector('.checkbox');
            const checkmark = item.querySelector('.checkmark');
            
            // Reset
            setTimeout(() => {
                checkbox.style.animation = 'none';
                checkmark.style.animation = 'none';
                checkbox.offsetHeight; // Trigger reflow
                checkbox.style.animation = '';
                checkmark.style.animation = '';
            }, index * 1000);
        });
    }, animationDuration);
}

// ===================================
// Performance Monitoring
// ===================================

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        console.log('Northern Facilities Group - Premium Experience Loaded');
        console.log('Performance metrics:', {
            loadTime: performance.now(),
            navigation: performance.getEntriesByType('navigation')[0]
        });
    });
}

// ===================================
// Mobile Menu Toggle (if needed)
// ===================================

// For future mobile hamburger menu implementation
function initMobileMenu() {
    // Placeholder for mobile menu functionality
}
