import type { MetadataRoute } from 'next'
import { products } from './data/products'
import { SITE_URL } from './lib/seo'

// Bez lastModified: dane produktów nie mają realnej daty modyfikacji.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/` },
    ...products.filter(p => p.available).map(p => ({ url: `${SITE_URL}/produkt/${p.id}` })),
  ]
}
