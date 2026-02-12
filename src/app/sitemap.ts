import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lifeassure.vercel.app';

    // Static routes
    const routes = [
        '',
        '/about',
        '/blog',
        '/solutions',
        '/claims',
        '/enrollment',
        '/resources',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes];
}
