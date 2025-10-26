// ===================================
// NORTHERN FACILITIES GROUP
// Premium Interactive JavaScript
// Inspired by: kreo.net
// ===================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
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
// Parallax Effect for Hero Blueprint - REMOVED
// All animations pre-loaded, no scroll effects
// ===================================

function initParallax() {
    // Parallax scroll effects removed as per requirements
    // All content is now pre-loaded and visible
    return;
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
// Intersection Observer Polyfill Check
// ===================================

// Not needed anymore - all elements visible on load

// ===================================
// Performance Optimization: Preload Critical Assets
// ===================================

if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        console.log('Northern Facilities Group - Premium Experience Loaded');
    });
}
