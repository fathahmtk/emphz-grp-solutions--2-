import { MOCK_BLOG_POSTS } from '../constants';
import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'content', 'blog');
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

MOCK_BLOG_POSTS.forEach(post => {
    const escapedTitle = post.title.replace(/"/g, '\\"');
    const escapedCategory = post.category.replace(/"/g, '\\"');
    const escapedSummary = post.summary.replace(/"/g, '\\"');

    const content = `---
title: "${escapedTitle}"
description: "${escapedSummary}"
date: "${post.date}"
category: "${escapedCategory}"
author: "${post.author}"
imageUrl: "${post.imageUrl}"
layout: "single"
---

${post.content}
`;

    fs.writeFileSync(path.join(blogDir, `${post.slug}.md`), content);
});

console.log('Blog posts generated.');
