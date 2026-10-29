declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

const MAX_ATTEMPTS = 20;
const RETRY_MS = 250;

/**
 * Sends a GA4 event. The gtag snippet loads `afterInteractive`, so an event fired during the
 * first render (for example on the 404 page) can run before `window.gtag` exists. In that case
 * retry briefly instead of dropping the event. Never pass personal data (names, email addresses,
 * form contents) in params.
 */
export const trackEvent = (name: string, params: AnalyticsParams = {}, attempt = 0): void => {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
    return;
  }

  if (attempt < MAX_ATTEMPTS) {
    window.setTimeout(() => trackEvent(name, params, attempt + 1), RETRY_MS);
  }
};

/** Strips query strings and fragments so tracked URLs never carry identifiers. */
export const cleanUrl = (href: string): string => {
  try {
    const url = new URL(href, window.location.origin);
    return `${url.origin}${url.pathname}`;
  } catch {
    return href.split(/[?#]/)[0];
  }
};
