import type { MetadataRoute } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';

/** Built from the same content the pages render, so it cannot fall out of date. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/board',
    '/past-presidents',
    '/achievements',
    '/gallery',
    '/join',
    '/contact',
  ];

  return [
    ...routes.map((route) => ({
      url: `${club.siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${club.siteUrl}/projects/${project.slug}`,
      lastModified: new Date(project.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
