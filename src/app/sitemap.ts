import type {MetadataRoute} from 'next';
import client from '@/services/api';
import config from '@/config/sites';

const staticRoutes: MetadataRoute.Sitemap = ([
  { url: '/', changeFrequency: 'monthly', priority: 1 },
  { url: '/resume', changeFrequency: 'monthly', priority: 0.9 },
  { url: '/work', changeFrequency: 'monthly', priority: 0.8 },
  { url: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { url: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  { url: '/photography', changeFrequency: 'monthly', priority: 0.4 },
] as const).map(route => ({ ...route, url: `${config.url}${route.url}` }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await client.getEntries({
      content_type: 'posts',
      select: ['fields.slug', 'fields.publishedAt', 'sys.updatedAt'],
      limit: 1000,
    } as any);

    const postRoutes: MetadataRoute.Sitemap = res.items.map((item: any) => ({
      url: `${config.url}/page/${item.fields.slug}`,
      lastModified: item.fields.publishedAt ?? item.sys.updatedAt,
      changeFrequency: 'yearly',
      priority: 0.6,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}
