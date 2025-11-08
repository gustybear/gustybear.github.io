## How to be productive in this repo

This repository is a Hugo site built from the HugoBlox "Academic CV" template. The guidance below focuses on the concrete, discoverable patterns, commands, and files that will let an AI coding agent be immediately useful.

### Quick overview (the why)
- Purpose: static academic website/CV built with Hugo + Hugo Blox templates. Content lives in `content/`; templates in `layouts/`; generated site in `public/`.
- Deploy: Netlify (see `netlify.toml`) and historical rsync-style publish via the `Makefile`.

### Key files and where to look
- `Makefile` — developer convenience targets. Use `make build_webpages` to run `hugo` with module management and `make publish_webpages` to rsync to the configured server.
- `package.json` — simple npm scripts: `pnpm run dev` → `hugo server --disableFastRender`, `pnpm run build` → `hugo --minify`.
- `netlify.toml` — the CI/deploy command used on Netlify: `pnpm install && hugo --gc --minify -b $URL && pnpm dlx pagefind --source 'public'`. Also shows HUGO_VERSION.
- `hugoblox.yaml` — template metadata and the intended Hugo version.
- `config/_default/hugo.yaml` — canonical Hugo settings (permalinks, markup, build options).
- Content examples: `content/authors/*/_index.md` and `authors/*/_index.md` — copy these front-matter patterns when adding new authors or people pages.

### Common workflows (concrete commands)
- Local dev preview (fast):
  - Ensure dependencies: `pnpm install` (repo uses pnpm)
  - Run dev server: `pnpm run dev` (opens `hugo server` on localhost)
- Produce a production build locally:
  - `pnpm run build` or `make build_webpages` (Makefile runs `hugo mod clean`, `hugo mod get -u`, then `hugo`).
- Netlify / CI parity:
  - Netlify uses `pnpm install && hugo --gc --minify -b $URL && pnpm dlx pagefind --source 'public'` (see `netlify.toml`). Aim to reproduce that locally if debugging deploy issues.

### Project-specific conventions and patterns
- Package manager: `pnpm` (see `package.json` and `netlify.toml`). Prefer `pnpm` over npm/yarn to match CI.
- Hugo modules: the Makefile calls `hugo mod clean` and `hugo mod get -u` before building — update modules explicitly when changing theme/module versions.
- Generated output: `public/` is the build artifact. Don't edit files in `public/` directly; rebuild instead.
- Media and static assets:
  - Source media: `assets/media/` and `static/uploads/`.
  - Generated resources: `resources/_gen/` (Hugo image processing output).
- Publications and imports: there are CLI hints (commented) in the Makefile for `@academic import --bibtex ./content/publication/*.bib` — use that pattern for BibTeX imports.

### Editing templates and debugging visual issues
- When changing templates, run `pnpm run dev` and visit the local server. For issues that only appear in production, run `pnpm run build` and inspect `public/`.
- Check `config/_default/hugo.yaml` for site-wide settings (permalinks, markup, image settings). Many layout behaviors are driven by these values.

### Quick examples to quote in PRs or commits
- Add an author page: copy `authors/yao-zheng/_index.md`, update `title`, `slug`, and front-matter taxonomy fields.
- Rebuild modules and site in Makefile style: `hugo mod clean && hugo mod get -u && hugo --minify` (or `make build_webpages`).

### When to edit which files
- Content changes → `content/` (markdown). No build files required locally beyond dev server.
- Template/layout changes → `layouts/` and `assets/` (may require `pnpm run build` to see production output).
- CI/deploy changes → `netlify.toml`, `hugoblox.yaml`, `package.json` scripts.

### Where to look for answers in the repo
- Theme/template patterns: `layouts/`, `partials/`, and `assets/`.
- Example content and front-matter: `content/` and `authors/` folders.
- Deployment rules and versions: `netlify.toml`, `hugoblox.yaml`, and `Makefile`.

If anything above is unclear or you'd like more examples (for example, the exact front-matter fields used for publications or how a particular partial renders author bios), tell me which area to expand and I will iterate.
