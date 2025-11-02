/**
 * Dynamic Navigation Loader
 * Loads nav.html from partials/partials/ and inserts it into the page
 * Automatically adjusts paths based on current page location
 */

class NavigationLoader {
  constructor() {
    this.navContainer = null;
    this.currentPath = window.location.pathname;
    this.basePath = this.calculateBasePath();
  }

  /**
   * Calculate the base path to the site root relative to the current page
   * Works for:
   *  - domain root:              "/"
   *  - site root in subfolder:   "/site/" (trailing slash)
   *  - explicit files:           "/site/index.html"
   *  - one-level subpages:       "/site/services/page.html"
   */
  calculateBasePath() {
  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  const last = parts[parts.length - 1] || '';
  const lastIsFile = last.includes('.');

  let depth = 0;
  if (lastIsFile) depth = Math.max(0, parts.length - 2);
  else depth = Math.max(0, parts.length - 1);

  // Fix for GitHub Pages subpath hosting
  if (window.location.hostname.includes('github.io')) {
    return './';
  }

  return depth === 0 ? './' : '../'.repeat(depth);
}

  /**
   * Adjust all paths in the HTML to be relative to current page location
   */
  adjustPaths(html) {
    // Replace absolute paths with relative paths based on computed base
    return html
      // Fix asset paths
      .replace(/src="\/assets\//g, `src="${this.basePath}assets/`)
      .replace(/href="\/assets\//g, `href="${this.basePath}assets/`)
      // Fix page links
      .replace(/href="\/index\.html/g, `href="${this.basePath}index.html`)
      .replace(/href="\/services\//g, `href="${this.basePath}services/`)
      .replace(/href="\/specialty\//g, `href="${this.basePath}specialty/`)
      // Handle anchor links to index.html sections
      .replace(/href="\/index\.html#([^"]+)"/g, `href="${this.basePath}index.html#$1"`);
  }

  /**
   * Load navigation HTML from partials/nav.html
   */
  async loadNavigation() {
    try {
      const navPath = `${this.basePath}partials/nav.html`;
      const response = await fetch(navPath);

      if (!response.ok) {
        throw new Error(`Failed to load navigation: ${response.status} ${response.statusText}`);
      }

      const navHtml = await response.text();
      return this.adjustPaths(navHtml);
    } catch (error) {
      console.error('Error loading navigation:', error);
      return this.getFallbackNav();
    }
  }

  /**
   * Provide a fallback navigation in case nav.html fails to load
   */
  getFallbackNav() {
    return `
      <nav class="nav">
        <div class="nav-container">
          <div class="nav-logo">Northern Facilities Group</div>
          <ul class="nav-menu">
            <li><a href="${this.basePath}index.html">Home</a></li>
            <li><a href="${this.basePath}services/medical-offices.html">Services</a></li>
            <li><a href="${this.basePath}specialty/strip-and-wax.html">Specialty</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  /**
   * Initialize the navigation system
   */
  async init() {
    // Find the nav container
    this.navContainer = document.getElementById('nav-placeholder');
    
    if (!this.navContainer) {
      console.warn('No element with id="nav-placeholder" found. Navigation will not be loaded.');
      return;
    }

    // Add loading state
    this.navContainer.innerHTML = '<div class="nav-loading">Loading navigation...</div>';
    
    try {
      // Load and insert navigation
      const navHtml = await this.loadNavigation();
      this.navContainer.innerHTML = navHtml;
      
      // Initialize any navigation JavaScript after loading
      this.initializeNavFeatures();
      
      console.log('Navigation loaded successfully');
    } catch (error) {
      console.error('Failed to initialize navigation:', error);
      this.navContainer.innerHTML = this.getFallbackNav();
    }
  }

  /**
   * Initialize navigation features (dropdowns, etc.)
   */
  initializeNavFeatures() {
    // Initialize dropdown toggles
    const dropdownToggles = this.navContainer.querySelectorAll('.nav-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = toggle.parentElement;
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Close all other dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle) {
            otherToggle.setAttribute('aria-expanded', 'false');
            otherToggle.parentElement.classList.remove('open');
          }
        });

        // Toggle current dropdown (use .open to match CSS)
        toggle.setAttribute('aria-expanded', (!isExpanded).toString());
        dropdown.classList.toggle('open', !isExpanded);
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdownToggles.forEach(toggle => {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.parentElement.classList.remove('open');
        });
      }
    });

    // Handle quote button if it exists
    const quoteBtn = this.navContainer.querySelector('#openQuote');
    if (quoteBtn && typeof window.openQuoteModal === 'function') {
      quoteBtn.addEventListener('click', window.openQuoteModal);
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const navLoader = new NavigationLoader();
  navLoader.init();
});

// Export for manual initialization if needed
window.NavigationLoader = NavigationLoader;
/* ====== MOBILE DRAWER (Services + Specialty only) ====== */
(function(){
  // --- same basePath logic as NavigationLoader.calculateBasePath() ---
  const getBasePath = () => {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    const last = parts[parts.length - 1] || '';
    const lastIsFile = last.includes('.');

    let depth = 0;
    if (lastIsFile) depth = Math.max(0, parts.length - 2);
    else depth = Math.max(0, parts.length - 1);

    if (window.location.hostname.includes('github.io')) {
      return './';
    }
    return depth === 0 ? './' : '../'.repeat(depth);
  };

  const ready = (fn)=> (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);

  ready(() => {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const base = getBasePath();

    // Reuse existing hamburger if present
    const burger = nav.querySelector('.nav-burger, .nav-toggle');

    // Create drawer once
    if (document.querySelector('.mobile-drawer')) return;

    // Build drawer markup (Paths use computed base, not ../)
    const drawerHTML = `
      <div class="mobile-drawer" aria-hidden="true">
        <div class="mobile-drawer__overlay" data-close="true"></div>
        <div class="mobile-drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div class="mobile-drawer__head">
            <span>Menu</span>
            <button class="mobile-drawer__close" aria-label="Close menu">×</button>
          </div>

          <div class="mobile-group">
            <button class="mobile-group__btn" aria-expanded="false">Services</button>
            <div class="mobile-group__list" hidden>
              <a href="${base}services/office-cleaning.html">Commercial Office Cleaning</a>
              <a href="${base}services/medical-offices.html">Medical Offices</a>
              <a href="${base}services/dental-clinics.html">Dental Clinics</a>
              <a href="${base}services/condominiums.html">Condominiums / Strata</a>
              <a href="${base}services/retail-stores.html">Retail Stores</a>
              <a href="${base}services/restaurants.html">Restaurants</a>
              <a href="${base}services/gyms-fitness.html">Gyms & Fitness Centres</a>
              <a href="${base}services/schools-daycares.html">Schools & Daycares</a>
              <a href="${base}services/industrial-warehouses.html">Industrial / Warehouses</a>
              <a href="${base}services/car-dealerships.html">Car Dealerships</a>
              <a href="${base}services/post-construction.html">Post-Construction</a>
              <a href="${base}services/move-in-move-out.html">Move-In / Move-Out</a>
              <a href="${base}services/government-municipal.html">Government & Municipal</a>
              <a href="${base}services/banks-financial.html">Banks & Financial</a>
              <a href="${base}services/event-venues.html">Event Venues</a>
            </div>
          </div>

          <div class="mobile-group">
            <button class="mobile-group__btn" aria-expanded="false">Specialty</button>
            <div class="mobile-group__list" hidden>
              <a href="${base}specialty/window-cleaning.html">Window Cleaning</a>
              <a href="${base}specialty/strip-and-wax.html">Strip &amp; Wax Floors</a>
              <a href="${base}specialty/carpet-deep-clean.html">Carpet Deep Clean</a>
              <a href="${base}specialty/grout-restoration.html">Tile &amp; Grout Restoration</a>
              <a href="${base}specialty/upholstery-cleaning.html">Upholstery Cleaning</a>
              <a href="${base}specialty/disinfection.html">Disinfection &amp; Electrostatic Fogging</a>
              <a href="${base}specialty/high-dusting.html">High Dusting</a>
              <a href="${base}specialty/pressure-washing.html">Pressure Washing</a>
              <a href="${base}specialty/floor-buffing-burnishing.html">Floor Buffing / Burnishing</a>
              <a href="${base}specialty/steam-cleaning.html">Steam Cleaning</a>
              <a href="${base}specialty/post-construction-detailing.html">Post-Construction Detailing</a>
              <a href="${base}specialty/exterior-window-washing.html">Exterior Window Washing (Lift/Reach)</a>
              <a href="${base}specialty/graffiti-removal.html">Graffiti Removal</a>
            </div>
          </div>

          <div class="mobile-actions">
            <a class="btn primary drawer-quote" href="${base}index.html#quote">Get a Free Quote</a>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    const drawer   = document.querySelector('.mobile-drawer');
    const panel    = drawer.querySelector('.mobile-drawer__panel');
    const overlay  = drawer.querySelector('.mobile-drawer__overlay');
    const closeBtn = drawer.querySelector('.mobile-drawer__close');

    // --- Force both groups to start collapsed on load ---
    drawer.querySelectorAll('.mobile-group').forEach(group => {
      const btn  = group.querySelector('.mobile-group__btn');
      const list = group.querySelector('.mobile-group__list');
      if (!btn || !list) return;
      btn.setAttribute('aria-expanded', 'false');
      list.hidden = true;
    });

    const openDrawer  = () => {
      drawer.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('drawer-open');
      document.body.style.overflow = 'hidden';
      panel.focus();
    };
    const closeDrawer = () => {
      drawer.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('drawer-open');
      document.body.style.overflow = '';
      if (burger) burger.focus();
    };

    // Toggle from hamburger
    if (burger) {
      burger.addEventListener('click', (e) => {
        e.preventDefault();
        const hidden = drawer.getAttribute('aria-hidden') !== 'false';
        hidden ? openDrawer() : closeDrawer();
      });
    }

    // Close controls
    [overlay, closeBtn].forEach(el => el && el.addEventListener('click', closeDrawer));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') closeDrawer();
    });

    // Close on link click
    drawer.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) closeDrawer();
    });

    // Simple accordion behavior for the two groups
    drawer.querySelectorAll('.mobile-group').forEach(group => {
      const btn  = group.querySelector('.mobile-group__btn');
      const list = group.querySelector('.mobile-group__list');
      if (!btn || !list) return;
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        list.hidden = expanded;
      });
    });
  });
})();

