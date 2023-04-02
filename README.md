# app-tkodev - @tkodev/app-tkodev

## What's inside?

This is a monorepo for tko.dev's portfolio app and it's support files, based on PNPM and Turborepo.

### Directory

- `./apps/next-js`: tko.dev's portfolio app, based on Next.js.
- `./configs/eslint-config`: `eslint` configs (includes `eslint-config-next` and `eslint-config-prettier`)
- `./configs/ts-config`: `typescript` configs for various app types
- `./designs/*`: logo and resume designs
- `./packages/*`: shared packages between apps

### Technology Stack

- [PNPM](https://pnpm.io/workspaces) for monorepo workspaces.
- [Turborepo](https://turbo.build/repo/docs) for monorepo management.
- [Next.js](https://nextjs.org/) for the web framework.
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- `main` production and `dev` development branches

### Quick Start

- Portfolio app's [README.md](./apps/next-js/README.md)
