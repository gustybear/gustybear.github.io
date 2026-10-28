"""Check that every rendered page uses the shared shell and stylesheet."""
from html.parser import HTMLParser
from pathlib import Path
import sys


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.heads = 0
        self.mains = 0
        self.styles = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'head':
            self.heads += 1
        if tag == 'main' and attrs.get('id') == 'main-content':
            self.mains += 1
        if tag == 'link' and attrs.get('rel') == 'stylesheet':
            href = attrs.get('href', '')
            if '/css/site-' in href:
                self.styles.append(href)


root = Path(sys.argv[1])
errors = []
count = 0
for file in root.rglob('*.html'):
    html = file.read_text()
    # Hugo pagination redirects have no page shell.
    if 'http-equiv="refresh"' in html.lower() or "http-equiv=refresh" in html.lower():
        continue
    page = Page()
    page.feed(html)
    count += 1
    if page.heads != 1 or page.mains != 1 or len(page.styles) != 1:
        errors.append(str(file.relative_to(root)))
if errors:
    raise SystemExit('Missing or duplicate shared shell/styles: ' + ', '.join(errors))
if not count:
    raise SystemExit('No HTML pages found')
print(f'Checked shared shell and stylesheet on {count} pages.')
