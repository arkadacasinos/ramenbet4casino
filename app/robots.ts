import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ramenbet4casino.vercel.app/sitemap.xml',
    host: 'https://ramenbet4casino.vercel.app',
  }
}

