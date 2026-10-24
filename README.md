# andrewnbishop.com

My personal site: a blog and side projects, built with [Astro](https://astro.build).

## Develop

Requires Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321 (drafts are visible here)
npm run check    # type-check
npm run build    # type-check, then build to dist/
npm run preview  # serve the build locally
```

## Writing a post

Add a Markdown file directly in `src/content/posts/` (not in a subfolder; those
are ignored). The file name becomes the URL, so `my-new-post.md` is served at
`/my-new-post/`.

```md
---
title: My new post
description: One sentence for search results, link previews and RSS. Required.
date: 2026-10-21
tags:
  - JavaScript
note: Optional callout shown above the post, e.g. "Written in 2019…".
draft: true
---
```

- **Drafts:** `draft: true` shows the post in `npm run dev` but leaves it out of
  the published site, RSS and sitemap. Remove it (or set `false`) to publish.
- **Tags:** reuse the existing spellings (see `/tags/`). `JavaScript` and
  `Javascript` would become two different tags.
- **Code blocks:** add a file name label with ` ```js title="file.js" `.
- **Reserved names:** a post can't be named `about`, `projects`, `tags`,
  `blog`, `404`, or after the demo paths below. The build fails with a message
  if one is.

The homepage and tag pages list posts without dates; each post page shows its
date. To show dates in lists again, pass `showDates` to `PostList`.

## Projects

Edit `src/data/projects.ts`. Cards appear in the order listed. Leave out
`demo` for projects with no live version, and set `inProgress: true` to show an
"In progress" label.

## Deploy

Pushing to `main` type-checks, builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`.

Don't add pages or posts at `/drum-machine/`, `/population-stats/` or
`/svelte-circle-of-fifths/`. Those paths are served by the GitHub Pages sites
of the repos with the same names.
