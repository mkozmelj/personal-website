# Martin Kozmelj – Personal Website

Source code for my personal website, live at **[kozmelj.si](https://kozmelj.si)**.

It's a small, fast, mostly static site that introduces who I am, what I've worked on, and where I've worked. I'm a senior software engineer based in Slovenia, building with React, Next.js and TypeScript.

## What's on the site

- **Home** – a short introduction, summary and contact links.
- **Experience** – my professional background.
- **Projects** – selected personal and side projects.
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
src/
  pages/        Routes (home, experiences, projects) and the OG image API route
  components/   UI sections: navbar, summary, experiences, projects, contact, SEO, etc.
  common/       Shared types
  styles/       Global styles
  site-config.ts  Site metadata, SEO defaults and structured data (JSON-LD)
public/         Static assets such as images and icons
```

## SEO and performance

- Centralised metadata and schema.org structured data (Person and WebSite) in `site-config.ts`
- Open Graph and Twitter card support with generated preview images
- Automatic sitemap generation after each build
- Optimised fonts and images via Next.js

## License

This repository is public so you can read the code, but it is **not open source**. All rights reserved. See [LICENSE](LICENSE).
