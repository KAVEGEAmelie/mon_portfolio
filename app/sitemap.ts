import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://amelie-portfolio.example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/skills', '/projects', '/journey', '/contact']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
