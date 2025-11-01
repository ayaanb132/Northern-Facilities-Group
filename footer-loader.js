/**
 * Dynamic Footer Loader
 * Loads footer.html and inserts it into the page
 * Automatically adjusts paths based on current page location
 */

class FooterLoader {
  constructor() {
    this.currentPath = window.location.pathname;
    this.basePath = this.calculateBasePath();
  }

  /**
   * Calculate the base path to the site root relative to the current page
   */
  calculateBasePath() {
    const path = window.location.pathname;

    // GitHub Pages special case
    if (window.location.hostname.includes('github.io')) {
      // Example: https://ayaanb132.github.io/Northern-Facilities-Group/
      const repoName = '/Northern-Facilities-Group';
      const parts = path.replace(repoName, '').split('/').filter(Boolean);
      const depth = parts.length > 0 ? parts.length - 1 : 0;
      return `${repoName}/${depth === 0 ? '' : '../'.repeat(depth)}`;
    }

    // Local testing (file:// or localhost)
    const parts = path.split('/').filter(Boolean);
    const depth = parts.length > 0 ? parts.length - 1 : 0;
    return depth === 0 ? './' : '../'.repeat(depth);
  }

  /**
   * Adjust all paths in the HTML to be relative to current page location
   */
  adjustPaths(html) {
    return html
      // Fix service links
      .replace(/href="services\//g, `href="${this.basePath}services/`)
      .replace(/href="specialty\//g, `href="${this.basePath}specialty/`)
      // Fix index page links
      .replace(/href="index\.html/g, `href="${this.basePath}index.html`)
      // Fix asset paths if any
      .replace(/src="assets\//g, `src="${this.basePath}assets/`)
      .replace(/href="assets\//g, `href="${this.basePath}assets/`);
  }

  /**
   * Load and insert the footer
   */
  async loadFooter() {
    try {
      const footerPath = `${this.basePath}footer.html`;
      console.log("🔍 Fetching footer from:", footerPath);

      const response = await fetch(footerPath);
      if (!response.ok) {
        throw new Error(`Failed to load footer: ${response.status}`);
      }

      const footerHtml = await response.text();
      const adjustedHtml = this.adjustPaths(footerHtml);

      // Find footer placeholder or create one before closing body tag
      let footerTarget = document.getElementById('footer-placeholder');
      if (!footerTarget) {
        footerTarget = document.createElement('div');
        footerTarget.id = 'footer-placeholder';
        document.body.appendChild(footerTarget);
      }

      footerTarget.innerHTML = adjustedHtml;

      this.initializeFooter();

    } catch (error) {
      console.error('Error loading footer:', error);
    }
  }

  /**
   * Initialize footer functionality after loading
   */
  initializeFooter() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    const quoteLinks = document.querySelectorAll('.footer-quote-link');
    quoteLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const contactModal = document.getElementById('contactModal');
        if (contactModal) {
          contactModal.style.display = 'flex';
          contactModal.setAttribute('aria-hidden', 'false');
        }

        const openQuoteBtn = document.getElementById('openQuote');
        if (openQuoteBtn) {
          openQuoteBtn.click();
        }
      });
    });
  }
}

// Auto-load footer when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const footerLoader = new FooterLoader();
  footerLoader.loadFooter();
});