import { MOCK_PRODUCTS } from '../constants';
import fs from 'fs';
import path from 'path';

const productsDir = path.join(process.cwd(), 'content', 'products');
if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true });
}

MOCK_PRODUCTS.forEach(product => {
    const content = `---
id: "${product.id}"
title: "${product.name}"
description: "${product.shortDescription}"
category: "${product.category}"
imageUrl: "${product.imageUrl}"
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
