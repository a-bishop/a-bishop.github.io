# andrewnbishop.com

My personal site: a blog and side projects, built with [Astro](https://astro.build).

## Develop

Requires Node 24.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the build locally
```

## Writing a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL, so
`my-new-post.md` is served at `/my-new-post`.

```md
---
title: My new post
description: One sentence for search results and link previews.
date: 2026-10-21
tags:
  - JavaScript
draft: false
---
```

## Projects

Edit `src/data/projects.ts`.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`.

Don't add pages at `/drum-machine`, `/population-stats` or
`/svelte-circle-of-fifths`. Those paths are served by the GitHub Pages sites of
the repos with the same names.
