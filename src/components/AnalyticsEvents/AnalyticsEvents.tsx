'use client';

import {useEffect} from 'react';
import {cleanUrl, trackEvent} from '@/lib/analytics';

/**
 * Classifies a clicked link into one of the GA4 events defined in the analytics plan.
 * resume_click, email_click, booking_click and contact_cta_click are registered as key events.
 */
export const classifyLink = (href: string): string | null => {
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.includes('docs.google.com/document')) return 'resume_click';
  if (href.includes('calendly.com')) return 'booking_click';

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === window.location.origin && /^\/contact\/?$/.test(url.pathname)) return 'contact_cta_click';
    if (/(^|\.)(linkedin\.com|github\.com|twitter\.com|x\.com|instagram\.com)$/.test(url.hostname)) return 'social_click';
  } catch {
    return null;
  }

  return null;
};

/** Link labels can be the email address or phone number itself; GA must never receive either. */
export const maskPersonalData = (text: string): string =>
  text
    .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, '[email]')
    .replace(/\+?\d[\d\s().-]{6,}\d/g, '[phone]');

const PAGE_LOCATIONS: Record<string, string> = {
  '/resume': 'resume_page',
  '/contact': 'contact_page',
};

/** Where on the page the link sits: an explicit data-track-location wins, then nav/footer, then the page. */
export const locateLink = (el: Element): string => {
  const marked = el.closest('[data-track-location]')?.getAttribute('data-track-location');
  if (marked) return marked;
  if (el.closest('nav, header')) return 'nav';
  if (el.closest('footer')) return 'footer';
  return PAGE_LOCATIONS[window.location.pathname] ?? window.location.pathname;
};

/**
 * One delegated click listener for the whole site, so every current and future placement of a
 * resume, email, booking or contact link is tracked without touching each button.
 */
const AnalyticsEvents = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      const name = classifyLink(href);
      if (!name) return;

      trackEvent(name, {
        // Never send the email address or phone number itself.
        link_url: name === 'email_click' ? 'mailto' : name === 'phone_click' ? 'tel' : cleanUrl(href),
        link_text: maskPersonalData((link.textContent || link.getAttribute('aria-label') || '').trim()).slice(0, 100),
        link_location: locateLink(link),
      });
    };

    document.addEventListener('click', onClick, {capture: true});
    return () => document.removeEventListener('click', onClick, {capture: true});
  }, []);

  return null;
};

export default AnalyticsEvents;
