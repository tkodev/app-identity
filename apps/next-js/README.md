# app-tkodev - @tkodev/next-js

## What's inside?

This is tko.dev's portfolio app, based on [Next.js](https://nextjs.org/).

### Directory

- `./public`: publically accessible assets
- `./src/components`: atomic design + mantine reusuable components (stateless/contentless)
- `./src/pages`: stateful next.js pages
- `./src/styles`: mantine theme, font and favicon definitions
- `./src/types`: app wide typing

### Technology Stack

In addition to the monorepo stack, this app has the following stack:

- [Next.js](https://nextjs.org/) for the web framework.
- [TypeScript](https://www.typescriptlang.org/) for `~/*` alias to `./src/*`

### Quick Start

- Open terminal
- Enter `@tkodev/next-js`'s app directory
  - Install vercel cli: `pnpm install -g vercel`
  - Download the `.env` file for development: `vercel env pull .env.development.local`
- Enter `@tkodev/app-tkodev`'s root directory
  - Start dev environments `pnpm run dev`
  - Build all apps / packages locally `pnpm run build`
  - Build preview environment
    - Create a new branch based off `dev`, make file changes
    - Push changes to remote
    - See new deployments in vercel
  - Build production environment
    - Merge changes from `dev` to `main`
    - Push changes to remote
    - See new deployments in vercel

