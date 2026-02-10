'use client';

type EventName =
  | 'page_view'
  | 'form_submit'
  | 'cta_click'
  | 'property_select'
  | 'hotspot_click'
  | 'tier_select'
  | 'walkthrough_request'
  | 'contact_submit';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

interface AnalyticsConfig {
  gaId?: string;
  plausibleDomain?: string;
}

class Analytics {
  private config: AnalyticsConfig = {};
  private initialized = false;

  init(config: AnalyticsConfig) {
    this.config = config;
    this.initialized = true;
  }

  track(event: EventName, properties?: EventProperties) {
    if (!this.initialized) {
      console.warn('[Analytics] Not initialized');
      return;
    }

    // Google Analytics
    if (this.config.gaId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties);
    }

    // Plausible
    if (
      this.config.plausibleDomain &&
      typeof window !== 'undefined' &&
      window.plausible
    ) {
      window.plausible(event, { props: properties });
    }

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', event, properties);
    }
  }

  pageView(url: string) {
    this.track('page_view', { url });
  }

  formSubmit(formName: string, success: boolean) {
    this.track('form_submit', { form_name: formName, success });
  }

  ctaClick(ctaName: string, location: string) {
    this.track('cta_click', { cta_name: ctaName, location });
  }

  propertySelect(propertyType: string) {
    this.track('property_select', { property_type: propertyType });
  }

  hotspotClick(hotspotName: string, propertyType: string) {
    this.track('hotspot_click', { hotspot_name: hotspotName, property_type: propertyType });
  }
}

export const analytics = new Analytics();

// Initialize with env vars if available
if (typeof window !== 'undefined') {
  analytics.init({
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  });
}

// Type declarations for global analytics
declare global {
  interface Window {
    gtag?: (command: string, event: string, params?: EventProperties) => void;
    plausible?: (event: string, options?: { props?: EventProperties }) => void;
  }
}
