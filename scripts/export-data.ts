import { MOCK_PRODUCTS, INDUSTRIES, MOCK_BLOG_POSTS, MOCK_CASE_STUDIES } from '../constants';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(MOCK_PRODUCTS, null, 2));
fs.writeFileSync(path.join(dataDir, 'industries.json'), JSON.stringify(INDUSTRIES, null, 2));
fs.writeFileSync(path.join(dataDir, 'blog.json'), JSON.stringify(MOCK_BLOG_POSTS, null, 2));
fs.writeFileSync(path.join(dataDir, 'case_studies.json'), JSON.stringify(MOCK_CASE_STUDIES, null, 2));

console.log('Data exported to Hugo data directory.');
