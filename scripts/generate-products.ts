import { MOCK_PRODUCTS } from '../constants';
import fs from 'fs';
import path from 'path';

const productsDir = path.join(process.cwd(), 'content', 'products');
if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true });
}

MOCK_PRODUCTS.forEach(product => {
    const escapedId = product.id.replace(/"/g, '\\"');
    const escapedTitle = product.name.replace(/"/g, '\\"');
    const escapedDescription = product.shortDescription.replace(/"/g, '\\"');
    const escapedCategory = product.category.replace(/"/g, '\\"');
    const escapedImageUrl = product.imageUrl.replace(/"/g, '\\"');

    const content = `---
id: "${escapedId}"
title: "${escapedTitle}"
description: "${escapedDescription}"
category: "${escapedCategory}"
imageUrl: "${escapedImageUrl}"
layout: "single"
---

${product.fullDescription}

## Why It Exists
${product.whyItExists}

## Typical Usage
${product.typicalUsage}

## Recommended When
${product.recommendedWhen.map(item => `- ${item}`).join('\n')}

## Features
${product.features.map(item => `- ${item}`).join('\n')}

## Specifications
| Specification | Value |
| --- | --- |
${product.specs.map(s => `| ${s.label} | ${s.value} |`).join('\n')}
`;

    fs.writeFileSync(path.join(productsDir, `${product.id}.md`), content);
});

console.log('Product Markdown files generated.');
