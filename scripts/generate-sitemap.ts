import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MOCK_PRODUCTS, MOCK_BLOG_POSTS, INDUSTRIES, NAV_LINKS } from '../constants.ts';

// ESM dirname shim
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://emphz.noordigital.business';

function generateSitemap() {
    const routes = [
        ...NAV_LINKS.map(link => link.path),
        // Dynamic Product Routes
        ...MOCK_PRODUCTS.map(product => `/products/${product.id}`),
        // Dynamic Blog Routes
        ...MOCK_BLOG_POSTS.map(post => `/blog/${post.slug}`),
        // Industries (if they had detail pages, but they are just one page for now)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
            .map((route) => {
                return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    const distDir = path.resolve(__dirname, '../dist');

    // Ensure directories exist
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write to public so it's copied on build
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated in public/sitemap.xml');

    // If dist exists (post-build), write there too just in case
    if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
        console.log('✅ Sitemap copied to dist/sitemap.xml');
    }
}

generateSitemap();
