import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ramenbet4casino.vercel.app/',
      lastModified: new Date('2026-09-24'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

