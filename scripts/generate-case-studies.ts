import { MOCK_CASE_STUDIES } from '../constants';
import fs from 'fs';
import path from 'path';

const caseDir = path.join(process.cwd(), 'content', 'case-studies');
if (!fs.existsSync(caseDir)) {
    fs.mkdirSync(caseDir, { recursive: true });
}

MOCK_CASE_STUDIES.forEach(cs => {
    const escapedTitle = cs.title.replace(/"/g, '\\"');
    const escapedLocation = cs.location.replace(/"/g, '\\"');
    const escapedCategory = cs.category.replace(/"/g, '\\"');

    const content = `---
title: "${escapedTitle}"
description: "${cs.challenge.substring(0, 160)}"
location: "${escapedLocation}"
category: "${escapedCategory}"
imageUrl: "${cs.imageUrl}"
layout: "single"
---

## Challenge
${cs.challenge}

## Solution
${cs.solution}

## Outcome
${cs.outcome}
`;

    fs.writeFileSync(path.join(caseDir, `${cs.id}.md`), content);
});

console.log('Case studies generated.');
