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
    const parts = path.split('/').filter(Boolean); // remove empty segments

    const last = parts[parts.length - 1] || '';
    const lastIsFile = last.includes('.');

    // depth = how many directories above the current page we must go
    // If URL ends with a file, ignore that file when computing depth
    // If URL ends with a trailing slash ("folder/"), treat that folder as the current page container
    let depth = 0;
    if (lastIsFile) {
      depth = Math.max(0, parts.length - 2);
    } else {
      depth = Math.max(0, parts.length - 1);
    }

    // Convert to a relative base path. Use './' when depth==0 for safety across hosts (incl. GH Pages subpaths)
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
