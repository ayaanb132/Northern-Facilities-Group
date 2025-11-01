// =============================    lockNav(76, 44); // <— force navbar height 76px, logo 44px tall
    initKpiFit();           // auto-fit "24–48h", shrink unit, handle % etc.
    initCardPolish();       // staggered reveal timing for the three cards
    setCurrentYear();       // set current year in footer
    initFooterQuoteLinks(); // handle footer quote links
    setCurrentYear();       // set current year in footer===
// NORTHERN FACILITIES GROUP
// Premium Interactive JavaScript
// SaaS Dark-Mode Design
// ===================================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', async () => {
    // Load navigation first, then initialize nav-dependent functions
    await loadNav(); // inject shared nav, then init dropdown + fix relative links
    
    // Initialize nav-dependent functions after nav is loaded
    initNavScroll();
    initNavDropdown();
    
    // Initialize other functions that don't depend on nav
    initModalHandlers();
    initSmoothScroll();
    initScrollAnimations();
    initDashboardDemo();
    initHeroAnimation();
    initFaqAccordions();
    initReveals();
    initCarousel();
    initParallaxHero();
    initStagger();
    initStickySubnav();
    initAccordion();
    initSectionReveals();
    initRevealObserver();
    initTierTabs();
    
    lockNav(76, 44); // <— force navbar height 76px, logo 44px tall
    initKpiFit();           // auto-fit “24–48h”, shrink unit, handle % etc.
    initCardPolish();       // staggered reveal timing for the three cards
    initFooterQuoteLinks(); // handle footer quote links
});
window.addEventListener('resize', () => lockNav(76, 44)); // keep it locked on resize
// ===================================
// Navigation Scroll Effect
// ===================================

function initNavScroll() {
    const nav = document.querySelector('.nav');
    
    // Check if nav element exists before adding scroll listeners
    if (!nav) {
        console.warn('Navigation element not found. Make sure nav is loaded first.');
        return;
    }
    
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
    // Original contact modal handlers
    const modal = document.getElementById('contactModal');
    const heroBtn = document.getElementById('heroCtaBtn');
    const finalBtn = document.getElementById('finalCtaBtn');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');
    const contactForm = document.getElementById('contactForm');
    
    // Quote modal handlers (for service pages)
    const quoteModal = document.getElementById('quoteModal');
    const quoteBtn2 = document.getElementById('openQuote2');
    const quoteBtn3 = document.getElementById('openQuote3');
    const quoteBtn4 = document.getElementById('openQuote4');
    const quoteModalClose = document.getElementById('closeModal');
    const quoteModalOverlay = document.querySelector('#quoteModal .modal-overlay');
    const quoteForm = document.getElementById('quoteForm');
    
    // Open modal functions
    const openModal = () => {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    const openQuoteModal = () => {
        if (quoteModal) {
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    // Close modal functions
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    const closeQuoteModal = () => {
        if (quoteModal) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    // Event listeners for original modal
    if (heroBtn) heroBtn.addEventListener('click', openModal);
    if (finalBtn) finalBtn.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    // Event listeners for quote modal
    if (quoteBtn2) quoteBtn2.addEventListener('click', openQuoteModal);
    if (quoteBtn3) quoteBtn3.addEventListener('click', openQuoteModal);
    if (quoteBtn4) {
        quoteBtn4.addEventListener('click', (e) => {
            e.preventDefault();
            openQuoteModal();
        });
    }
    if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuoteModal);
    if (quoteModalOverlay) quoteModalOverlay.addEventListener('click', closeQuoteModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
            if (quoteModal && quoteModal.classList.contains('active')) {
                closeQuoteModal();
            }
        }
    });
    
    // Form submission for contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Contact form submitted:', data);
            
            // Show success message
            showSuccessMessage(modal);
            
            // Reset form
            contactForm.reset();
            
            // Close modal after 2 seconds
            setTimeout(closeModal, 2000);
        });
    }
    
    // Form submission for quote form
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Quote form submitted:', data);
            
            // Show success message
            const formMsg = document.getElementById('formMsg');
            if (formMsg) {
                formMsg.hidden = false;
                formMsg.textContent = 'Thanks! We\'ll get back to you shortly.';
            }
            
            // Reset form
            quoteForm.reset();
            
            // Close modal after 2 seconds
            setTimeout(() => {
                closeQuoteModal();
                if (formMsg) formMsg.hidden = true;
            }, 2000);
        });
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

function showSuccessMessage(targetModal) {
    const modalContent = targetModal.querySelector('.modal-content');
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
                const nav = document.querySelector('.nav');
                const navHeight = nav ? nav.offsetHeight : 60; // fallback height
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
// ===================================
// Mega Menus (full-width, hover-friendly, scroll-safe) for ALL .nav-dropdowns
// ===================================
function initNavDropdown() {
  const nav = document.querySelector('.nav');
  const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));
  if (!nav || dropdowns.length === 0) return;

  // Position each panel under the nav and set scroll-safe maxHeight
  const positionPanels = () => {
    const navH = nav.offsetHeight || 64;
    dropdowns.forEach(dd => {
      const panel = dd.querySelector('.dropdown-panel.mega');
      if (panel) {
        panel.style.top = navH + 'px';
        panel.style.maxHeight = `calc(100vh - ${navH}px)`; // internal scroll if tall
      }
    });
  };
  positionPanels();
  window.addEventListener('resize', positionPanels);
  window.addEventListener('scroll', positionPanels);

  // Helpers
  const open = (dd) => {
    dd.classList.add('open');
    dd.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'true');
    positionPanels();
  };
  const close = (dd) => {
    dd.classList.remove('open');
    dd.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  };
  const closeAllExcept = (current) => {
    dropdowns.forEach(dd => { if (dd !== current) close(dd); });
  };

  // Bind events for each dropdown
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.nav-dropdown-toggle');
    const panel  = dd.querySelector('.dropdown-panel.mega');
    if (!toggle || !panel) return;

    // Click toggle (mobile & accessibility); desktop hover is handled by CSS
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = dd.classList.contains('open');
      closeAllExcept(dd);
      isOpen ? close(dd) : open(dd);
    });

    // Make hover feel sticky & exclusive
    let hoverTimer;
    const cancelClose = () => clearTimeout(hoverTimer);
    const delayedClose = () => { hoverTimer = setTimeout(() => close(dd), 120); };

    dd.addEventListener('mouseenter', () => { cancelClose(); closeAllExcept(dd); open(dd); });
    dd.addEventListener('mouseleave', delayedClose);
    panel.addEventListener('mouseenter', () => { cancelClose(); open(dd); });
    panel.addEventListener('mouseleave', delayedClose);
  });

  // Click outside closes all (mobile/desktop)
  document.addEventListener('click', (e) => {
    const inside = dropdowns.some(dd => dd.contains(e.target));
    if (!inside) dropdowns.forEach(close);
  });

  // ESC closes all
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdowns.forEach(close);
  });
}
// ===================================
// FAQ Accordions
// ===================================
function initFaqAccordions() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(it => {
    const q = it.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const open = it.classList.contains('open');
      // close others if you want exclusivity:
      // document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      it.classList.toggle('open', !open);
    });
  });
}
// Reveal-on-scroll
function initReveals(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, {threshold: .14});
  els.forEach(el=>io.observe(el));
}

// Simple carousel (one per page)
function initCarousel(){
  document.querySelectorAll('[data-carousel]').forEach(car=>{
    const track = car.querySelector('.car-track');
    const slides = Array.from(track.children);
    const prev = car.querySelector('.prev'); const next = car.querySelector('.next');
    const dots = car.querySelector('.car-dots');
    let idx = 0;

    // dots
    slides.forEach((_,i)=>{
      const b = document.createElement('button');
      if(i===0) b.classList.add('active');
      b.addEventListener('click', ()=>go(i));
      dots.appendChild(b);
    });

    const update = ()=>{
      track.style.transform = `translateX(-${idx*100}%)`;
      dots.querySelectorAll('button').forEach((d,i)=>d.classList.toggle('active', i===idx));
    };
    const go = (i)=>{ idx = (i+slides.length)%slides.length; update(); };

    prev.addEventListener('click', ()=>go(idx-1));
    next.addEventListener('click', ()=>go(idx+1));
    car.addEventListener('keydown', (e)=>{ if(e.key==='ArrowLeft') go(idx-1); if(e.key==='ArrowRight') go(idx+1); });

    let t = setInterval(()=>go(idx+1), 5000);
    car.addEventListener('mouseenter', ()=>clearInterval(t));
    car.addEventListener('mouseleave', ()=>t = setInterval(()=>go(idx+1), 5000));
  });
}
// Parallax effect for colorful hero
function initParallaxHero(){
  const hero = document.querySelector('.hero-parallax .hero-overlay');
  if(!hero) return;
  const onScroll = ()=>{
    const y = Math.min(60, window.scrollY * 0.15);
    hero.style.transform = `translateY(${y}px)`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
}

// If not present yet
function initFaqAccordions(){
  const items = document.querySelectorAll('.faq-item');
  items.forEach(it => {
    const q = it.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => it.classList.toggle('open'));
  });
}
async function loadNav(){
  try {
    const isSubpage = /\/services\/|\/specialty\//.test(location.pathname);
    const base = isSubpage ? '../' : './';
    const res = await fetch(base + 'partials/partials/nav.html');
    const html = await res.text();
    const mount = document.getElementById('nav-root');
    if (!mount) return;
    mount.innerHTML = html;

    // Adjust all nav links when on subpages so they point correctly
    fixNavLinksForDepth(isSubpage);
  } catch (e) {
    console.error('Failed to load shared nav:', e);
  }
}

function fixNavLinksForDepth(isSubpage){
  if (!isSubpage) return; // homepage needs no adjustment
  document.querySelectorAll('.nav a[href], .nav .dropdown-link[href]').forEach(a=>{
    const href = a.getAttribute('href');
    // Skip absolute links and already-correct ../ links
    if (!href || href.startsWith('http') || href.startsWith('../') || href.startsWith('mailto:') || href.startsWith('#')) return;
    a.setAttribute('href', '../' + href);
  });
}
// Stagger children of any .reveal-stagger container
function initStagger(){
  document.querySelectorAll('.reveal-stagger').forEach((wrap)=>{
    const kids = Array.from(wrap.children);
    kids.forEach((el, i)=>{
      el.style.transitionDelay = (i * 60) + 'ms';
      el.classList.add('reveal');
    });
  });
}
// Sticky subnav + active link highlighting
function initStickySubnav(){
  const subnav = document.getElementById('subnav');
  if (!subnav) return;

  const links = subnav.querySelectorAll('.subnav-link[href^="#"]');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  // Pin shadow
  const pinY = subnav.offsetTop;
  const onScroll = () => {
    if (window.scrollY > pinY + 10) subnav.classList.add('is-pinned');
    else subnav.classList.remove('is-pinned');

    // Active state
    let current = null;
    const y = window.scrollY + 120; // offset for header height
    for (const sec of sections) {
      if (sec.offsetTop <= y) current = sec.id;
    }
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // Smooth anchor (in case your global smooth scroll isn't catching these)
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
}

// Minimal accordion
function initAccordion(){
  document.querySelectorAll('.accordion .acc-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const next = btn.nextElementSibling;
      if (!next) return;
      const isOpen = next.classList.contains('open');
      // close others in the same accordion
      const wrap = btn.closest('.accordion');
      wrap.querySelectorAll('.acc-a.open').forEach(a => a.classList.remove('open'));
      wrap.querySelectorAll('.acc-q.active').forEach(q => q.classList.remove('active'));

      if (!isOpen){
        next.classList.add('open');
        btn.classList.add('active');
      }
    });
  });
}
function initStickySubnav(){
  const subnav = document.getElementById('subnav');
  if (!subnav) return;
  const links = subnav.querySelectorAll('.subnav-link[href^="#"]');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  const pinY = subnav.offsetTop;
  const onScroll = () => {
    if (window.scrollY > pinY + 10) subnav.classList.add('is-pinned');
    else subnav.classList.remove('is-pinned');

    // highlight current
    let current = null;
    const y = window.scrollY + 120;
    for (const sec of sections) if (sec.offsetTop <= y) current = sec.id;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // smooth scroll
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
}

// very small reveal util (if you don’t already have one)
function initSectionReveals(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  els.forEach(el=> io.observe(el));
}
function initStickySubnav(){
  const subnav = document.getElementById('subnav');
  if (!subnav) return;
  const links = subnav.querySelectorAll('.subnav-link[href^="#"]');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const pinY = subnav.offsetTop;

  const onScroll = () => {
    if (window.scrollY > pinY + 10) subnav.classList.add('is-pinned');
    else subnav.classList.remove('is-pinned');

    let current = null, y = window.scrollY + 120;
    for (const sec of sections) if (sec.offsetTop <= y) current = sec.id;
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const target = document.querySelector(id);
      if (!target) return;
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });
}

function initRevealObserver(){
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  els.forEach(el=> io.observe(el));
}

function initTierTabs(){
  document.querySelectorAll('.tier-tabs').forEach(group=>{
    const tabs = group.querySelectorAll('.tier-tab');
    const panels = group.parentElement.querySelectorAll('.tier-panel');
    tabs.forEach(tab=>{
      tab.addEventListener('click', ()=>{
        const key = tab.dataset.tab;
        tabs.forEach(t=>t.classList.toggle('active', t === tab));
        panels.forEach(p=>p.classList.toggle('show', p.id === 'tab-' + key));
      });
    });
  });
}
// Hard-lock navbar height and vertical centering (overrides all CSS)
function lockNav(navH = 76, logoH = 44){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const container = nav.querySelector('.nav-container');
  const logoImg = nav.querySelector('.nav-logo img');
  const menu = nav.querySelector('.nav-menu');

  // Bar height & centering
  nav.style.height = navH + 'px';
  nav.style.padding = '0';
  nav.style.display = 'flex';
  nav.style.alignItems = 'center';

  // Container fills bar
  if (container){
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'space-between';
  }

  // Logo size (never stretches)
  if (logoImg){
    logoImg.style.height = logoH + 'px';
    logoImg.style.width = 'auto';
    logoImg.style.objectFit = 'contain';
    logoImg.style.display = 'block';
  }

  // Menu row alignment + spacing
  if (menu){
    menu.style.height = '100%';
    menu.style.display = 'flex';
    menu.style.alignItems = 'center';
    menu.style.gap = '24px';
    menu.style.marginLeft = 'auto';
    menu.querySelectorAll('a,button,.nav-link').forEach(el=>{
      el.style.height = '100%';
      el.style.display = 'inline-flex';
      el.style.alignItems = 'center';
      el.style.padding = '0 8px';
      el.style.lineHeight = '1';
      el.style.textDecoration = 'none';
    });
  }

  // Push page below fixed bar
  document.body.style.paddingTop = navH + 'px';
}
// ===================================
// KPI Auto-fit: split units + range sizing
// ===================================
function initKpiFit(){
  const nodes = document.querySelectorAll('.kpi .num');
  if (!nodes.length) return;

  nodes.forEach(numEl => {
    const raw = (numEl.textContent || '').trim();
    if (!raw) return;

    // Break trailing unit (h, %, etc.) out into a small span
    const m = raw.match(/^([\d\s.,–\-≤≥+]+)([A-Za-z%]+)?$/);
    if (!m) return;

    const value = (m[1] || '').trim();
    const unit  = (m[2] || '').trim();

    numEl.innerHTML =
      '<span class="value">'+ value +'</span>' +
      (unit ? '<span class="unit">'+ unit +'</span>' : '');

    // Mark ranges like "24–48"
    if (/[–-]/.test(value)) numEl.classList.add('range');

    // Soft fit: if wide, step font size down until it fits in its KPI
    const fit = () => {
      const wrap = numEl.closest('.kpi');
      if (!wrap) return;
      const allowed = wrap.clientWidth * 0.82; // content width target
      const valEl = numEl.querySelector('.value');
      if (!valEl) return;

      // reset to computed base, then nudge down if needed
      numEl.style.fontSize = '';
      let base = parseFloat(getComputedStyle(numEl).fontSize) || 18;
      let guard = 10;
      while (valEl.scrollWidth > allowed && base > 14 && guard--){
        base -= 1;
        numEl.style.fontSize = base + 'px';
      }
    };

    fit();
    window.addEventListener('resize', fit, { passive:true });
  });
}

// ===================================
// Card polish: stagger delays for the 3 overview cards
// ===================================
function initCardPolish(){
  const grid = document.querySelector('.svc-grid3');
  if (!grid) return;
  const cards = grid.querySelectorAll('.svc-panel.reveal');
  cards.forEach((card, i) => {
    card.style.animationDelay = (i * 0.07) + 's'; // subtle cascade
  });
}

// ===================================
// Footer Quote Links Handler
// ===================================
function initFooterQuoteLinks() {
    const quoteLinks = document.querySelectorAll('.footer-quote-link');
    
    quoteLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Try to find and open quote modal
            const quoteModal = document.getElementById('quoteModal');
            const contactModal = document.getElementById('contactModal');
            
            // Priority: quoteModal first, then contactModal
            if (quoteModal) {
                quoteModal.setAttribute('aria-hidden', 'false');
                quoteModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else if (contactModal) {
                contactModal.style.display = 'flex';
                contactModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            } else {
                // Fallback: try to trigger existing quote buttons
                const openQuoteBtn = document.getElementById('openQuote2') || 
                                   document.getElementById('openQuote3') || 
                                   document.getElementById('openQuote4') ||
                                   document.getElementById('openQuote1');
                
                if (openQuoteBtn) {
                    openQuoteBtn.click();
                }
            }
        });
    });
}
