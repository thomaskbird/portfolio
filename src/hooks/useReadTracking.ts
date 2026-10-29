import {RefObject, useEffect} from 'react';
import {trackEvent} from '@/lib/analytics';

const READ_THRESHOLD = 0.75;

/**
 * Fires one GA4 event when the reader has scrolled through 75% of the article body.
 * Case studies (posts tagged `work`) send `case_study_read`; other articles send `article_read`.
 */
const useReadTracking = (
  bodyRef: RefObject<HTMLElement | null>,
  slug: string | undefined,
  isCaseStudy: boolean,
  isReady: boolean,
) => {
  useEffect(() => {
    if (!isReady || !slug) return;

    let sent = false;
    const check = () => {
      const el = bodyRef.current;
      if (sent || !el) return;

      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;

      const seen = (window.innerHeight - rect.top) / rect.height;
      if (seen >= READ_THRESHOLD) {
        sent = true;
        trackEvent(isCaseStudy ? 'case_study_read' : 'article_read', {
          article_slug: slug,
          read_percent: Math.round(READ_THRESHOLD * 100),
        });
        window.removeEventListener('scroll', check);
      }
    };

    window.addEventListener('scroll', check, {passive: true});
    // Short articles can be 75% visible without any scrolling.
    const initial = window.setTimeout(check, 1500);

    return () => {
      window.removeEventListener('scroll', check);
      window.clearTimeout(initial);
    };
  }, [bodyRef, slug, isCaseStudy, isReady]);
};

export default useReadTracking;
