import os

pages = [
    {
        'file': '/Users/emphz/emphz-grp-solutions--2-/pages/CaseStudies.tsx',
        'title': 'Case Studies | Real-World GRP Applications | EMPHZ',
        'desc': 'Explore real-world applications of Emphz GRP solutions in demanding industries like utilities, rail, and coastal infrastructure.'
    },
    {
        'file': '/Users/emphz/emphz-grp-solutions--2-/pages/MaterialScience.tsx',
        'title': 'Material Science | Advanced FRP Engineering | EMPHZ',
        'desc': 'Learn about the advanced material science behind our GRP composites, including resin systems, fiber reinforcements, and durability testing.'
    },
    {
        'file': '/Users/emphz/emphz-grp-solutions--2-/pages/NotFound.tsx',
        'title': 'Page Not Found | EMPHZ',
        'desc': 'The page you are looking for does not exist. Please return to our home page or catalog.'
    },
    {
        'file': '/Users/emphz/emphz-grp-solutions--2-/pages/Sitemap.tsx',
        'title': 'Sitemap | EMPHZ',
        'desc': 'Navigate through the complete structure of the EMPHZ website.'
    }
]

for page in pages:
    if not os.path.exists(page['file']):
        print(f"Skipping {page['file']}, file not found.")
        continue
    
    with open(page['file'], 'r') as f:
        lines = f.readlines()
    
    # Add import
    if "import SEO from '../components/SEO';" not in "".join(lines):
        for i, line in enumerate(lines):
            if line.startswith('import'):
                last_import = i
        lines.insert(last_import + 1, "import SEO from '../components/SEO';\n")
    
    # Add SEO component call
    content = "".join(lines)
    if '<SEO' not in content:
        # Simplistic approach: add right after the first return (
        target = 'return ('
        if target in content:
            parts = content.split(target, 1)
            seo_call = f'\n    <>\n      <SEO title="{page["title"]}" description="{page["desc"]}" />'
            # We need to wrap in fragment if not already
            if parts[1].strip().startswith('<>'):
                content = parts[0] + target + parts[1].replace('<>', '<>\n      <SEO title="' + page["title"] + '" description="' + page["desc"] + '" />', 1)
            else:
                # Add a fragment wrapping the first element if needed or just insert
                # Finding the opening tag of the first element is hard, let's just insert after return (
                content = parts[0] + target + seo_call + parts[1]
                # If we add a fragment, we need a closing one. This is getting complex.
                # Let's assume most pages start with a single div.
                # Actually, I'll just use replace_file_content for each to be safe.
                pass

# Let's just output the commands for me to run via replace_file_content in a loop basically.
