# Vercel Sandboxes

## Prior Research

- [Production URL](https://vercel-sandboxes-next-research.vercel.app/)
- [Vercel + Next Research](https://www.notion.so/qmo/Vercel-Next-Research-8ba6324279b24229b0bb295a0ac5ed61?pvs=4)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages 

- `apps/next-research`: a [Next.js](https://nextjs.org/) app to test vercel.com and next.js features
- `configs/eslint-config`: `eslint` configs (includes `eslint-config-next` and `eslint-config-prettier`)
- `configs/ts-config`: `typescript` configs for various app types

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- `main` production and `dev` development branches

### Quick Start

- Enter repo directory
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

### Vercel with GH Actions
- Avoid building the app with both Vercel and GH actions if GH actions are enabled.
  - Navigate to your Vercel project -> Settings -> Git -> Ignored Build Step. 
  - Set the value to `exit 0` to disable building on vercel's side and allow only GH actions to build the app.
