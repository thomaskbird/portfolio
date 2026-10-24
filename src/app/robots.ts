import type {MetadataRoute} from 'next';
import config from '@/config/sites';

// Keep internal search result pages out of the index; everything else is crawlable.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search'],
    },
    sitemap: `${config.url}/sitemap.xml`,
  };
}
