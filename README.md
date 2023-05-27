# app-tkodev - @tkodev/app-tkodev

## What's inside?

This is a monorepo for tko.dev's portfolio app and it's support files, based on PNPM and Turborepo.


### Architecture

- General
  - [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for branch strategy.
  - [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
  - [Conventional Comments](https://conventionalcomments.org/) for PR review comments.
- Monorepo
  - [Node 18](https://nodejs.org/en/download/current) for latest node LTS.
  - [PNPM](https://pnpm.io/workspaces) for monorepo workspaces.
  - [Turborepo](https://turbo.build/repo/docs) for monorepo management.
- App
  - [Next.js](https://nextjs.org/) for the fullstack web framework.
  - [Tailwind CSS]([https](https://tailwindcss.com/)) for theme and styling.
  - [CVA](https://cva.style/docs) for component variants.
  - [Radix UI](https://www.radix-ui.com/) for primitive components.
- Support
  - [TypeScript](https://www.typescriptlang.org/) for strict type checking.
  - [ESLint](https://eslint.org/) for code linting and formatting.


### Directory

- `./apps/next-js`: tko.dev's portfolio app, based on Next.js.
- `./designs/*`: logo and resume designs.
- `./packages/*`: any shared packages between apps.
- `./support/eslint-config`: `eslint` configs (includes `eslint-config-next` and `eslint-config-prettier`).
- `./support/ts-config`: `typescript` configs for various app types.


### Requirements

- Contibuting Guide
  - [Read This](./CONTRIBUTING.md)
- MacOS + Homebrew:
  - [Instructions](https://brew.sh/)
- Node Version Manager: 
  - `brew install fnm` or `brew install fnm`
  - Ensure appropriate lines are copied to `~/.bash_profile` or `~/.zprofile`.
- Node 18 + PNPM: 
  - `nvm use 18` or `fnm use 18`
  - `brew install pnpm`
- VSCode Tailwind Autocomplete:
  - [Install Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Copy Lines](https://cva.style/docs/installation#tailwind-css) 
  - Ensure appropriate lines are copied to VSCode's `settings.json`.


### Quick Start

- Start dev enviroment:
  - `pnpm install` to install all dependencies
  - `pnpm run env-dev` to download development env files (if using vercel), otherwise request from team.
  - `pnpm run dev` to start dev environments 
- App lifecycle commands:
  - `pnpm run build` to build all apps / packages locally 
  - `pnpm run start` to start built app
  - `pnpm run test` to run all tests
  - `pnpm run lint` to run linter
  - `pnpm run typecheck` to run type checker
  - `pnpm run reset` to delete all `node_modules` folders


## Release - Vercel

- Build preview environment
  - Create a new branch based off `dev`, make file changes
  - Push changes to remote
  - See new deployments in vercel
- Build production environment
  - Merge changes from `dev` to `main`
  - Push changes to remote
  - See new deployments in vercel
