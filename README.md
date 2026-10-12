# Martin Kozmelj – Personal Website

Source code for my personal website, live at **[kozmelj.si](https://kozmelj.si)**.

It's a small, fast, mostly static site that introduces who I am, what I've worked on, and where I've worked. I'm a senior software engineer based in Slovenia, building with React, Next.js and TypeScript.

## What's on the site

- **Home** – a short introduction, recent experience and projects, and contact links.
- **About** – a longer look at my background and how I work.
- **Experience** – my professional background.
- **Projects** – selected personal and side projects.
- **Blog** – posts written in MDX.
- **Dynamic Open Graph images** – generated on the fly at `/api/og` for link previews.

## Tech stack

- [Next.js 16](https://nextjs.org/) (Pages Router) with [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) for sitemap and robots generation
- ESLint and Prettier for code quality
- Node 24

## Project structure

```
content/
  blog/         Blog posts as .mdx files
src/
  pages/        Routes (home, about, experiences, projects, blog) and the OG image API route
  components/   Layout, sidebar, navigation, experiences, projects, contact, SEO, etc.
  data/         Experience and project content
  lib/          Reading and compiling blog posts
  common/       Shared types
  assets/       Fonts for the OG image
  styles/       Global styles
  site-config.ts  Site metadata, SEO defaults and structured data (JSON-LD)
public/         Static assets such as images and icons
```

## Writing a post

Add `content/blog/<slug>.mdx`; the file name becomes the URL (`/blog/<slug>`).

```mdx
---
title: Post title
description: One or two sentences for the list and search results.
date: 2026-10-12
tags: [AI, Teams]
draft: true
---

Write in Markdown. Start sections at `##`.
```

Drafts appear in `yarn dev` only and are left out of production builds. Remove `draft` (or set it to `false`) to publish.

### Cross-posting to dev.to

When a push to `main` changes `content/blog/`, the [Cross-post to dev.to](.github/workflows/crosspost-devto.yml) workflow waits for the new posts to be live on the site, then publishes any non-draft post that isn't on dev.to yet. It sets the canonical URL back to this site and matches on that URL, so each post goes out once. It needs a `DEVTO_API_KEY` repository secret (dev.to → Settings → Extensions).

dev.to gets plain Markdown: `<Figure>` becomes an image with an italic caption, root-relative links become absolute, and tags are reduced to four lowercase alphanumeric ones. Any other MDX component fails the run until `scripts/crosspost-devto.mjs` knows how to convert it.

```sh
yarn crosspost --dry-run   # print what would be posted
yarn crosspost --draft     # post as unpublished dev.to drafts
```

## SEO and performance

- Centralised metadata and schema.org structured data (Person and WebSite) in `site-config.ts`
- Open Graph and Twitter card support with generated preview images
- Automatic sitemap generation after each build
- Optimised fonts and images via Next.js

## License

This repository is public so you can read the code, but it is **not open source**. All rights reserved. See [LICENSE](LICENSE).
