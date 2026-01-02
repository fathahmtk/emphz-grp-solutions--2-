import os

# Use relative paths from the project root
pages = [
    {
        'file': 'pages/CaseStudies.tsx',
        'title': 'Case Studies | Real-World GRP Applications | EMPHZ',
        'desc': 'Explore real-world applications of Emphz GRP solutions in demanding industries like utilities, rail, and coastal infrastructure.'
    },
    {
        'file': 'pages/MaterialScience.tsx',
        'title': 'Material Science | Advanced FRP Engineering | EMPHZ',
        'desc': 'Learn about the advanced material science behind our GRP composites, including resin systems, fiber reinforcements, and durability testing.'
    },
    {
        'file': 'pages/NotFound.tsx',
        'title': 'Page Not Found | EMPHZ',
        'desc': 'The page you are looking for does not exist. Please return to our home page or catalog.'
    },
    {
        'file': 'pages/Sitemap.tsx',
        'title': 'Sitemap | EMPHZ',
        'desc': 'Navigate through the complete structure of the EMPHZ website.'
    }
]

# Get the absolute path to the project root (where this script is expected to be)
root_dir = os.path.dirname(os.path.abspath(__file__))

for page in pages:
    file_path = os.path.join(root_dir, page['file'])
    
    if not os.path.exists(file_path):
        print(f"Skipping {page['file']}, file not found at {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if SEO is already imported
    if "import SEO from '../components/SEO';" not in content:
        lines = content.splitlines()
        last_import_idx = 0
        for i, line in enumerate(lines):
            if line.startswith('import '):
                last_import_idx = i
        lines.insert(last_import_idx + 1, "import SEO from '../components/SEO';")
        content = "\n".join(lines)
    
    # Check if SEO component is already in use
    if '<SEO' not in content:
        # Insert after the first 'return (' or 'return'
        if 'return (' in content:
            content = content.replace('return (', f'return (\n    <>\n      <SEO title="{page["title"]}" description="{page["desc"]}" />', 1)
            # Find the closing ) of the return and add </>\n
            # Note: This is a bit risky but works for standard functional components
            last_bracket = content.rfind(');')
            if last_bracket != -1:
                content = content[:last_bracket] + '    </>\n  ' + content[last_bracket:]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            print(f"Updated {page['file']} with SEO component.")
    else:
        print(f"SEO already present in {page['file']}.")
