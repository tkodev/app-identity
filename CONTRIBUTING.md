# app-tkodev - @tkodev/app-tkodev

## Contributing Guide

- General
  - [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for branch strategy.
  - [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.
  - [Conventional Comments](https://conventionalcomments.org/) for PR review comments.
- Monorepo
  - Split non application dependencies out as configs / packages.
    - EX: There shouldn't be 10 eslint packages in `./app/next-js`, but rather in `./configs/eslint-configs` package that is used by the app.
  - When preparing a PR, remember to update any `README.md` files as well.
- App 
  - Use typescript alias `~/*` in imports instead of relative paths `../*`
  - Components should always be content agnostic, avoid baking in text / data / fetches, etc.
    - Think of any UI library, do they bake in text like labels? or fetch inside a component?
    - All text, data, etc should be passed in as props and not fetched from inside components.
    - Ideally this happens in next.js's pages.
    - This allows components to be reused anywhere in the app.
