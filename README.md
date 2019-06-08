# Site-htko

## Preface
This is the codebase for my personal site. From raw html/css, to static site builder, to dynamic SPA app! It's come a long way

## Back End
- Built with Koa (Express without callback hell, via async/await!!!)
- Github API provides all project info, imagery, etc
  - One source of truth for project data - just edit the project on github itself :)
- Custom instagram scraper API provides personal photography info, imagery, etc
  - One source of truth for photos data - just edit / upload the photo on instagram itself :)
  - I wanted to avoid Facebook's instagram api restrictions (namely business verification, must be tied to a FB page, etc...)
- API data is cached to prevent overloading github / instagram.
- API data falls back to previously valid data if API changes or is offline.

## Front End
- Built with Vue, Vue Router and highly modified bootstrap.
- Webpack powers the build process.
- Atomic Design principles to organize component structure ( `pages`, `templates`, `organisms`, `molecules`, `atoms` )
- Scoped SASS styles to dynamically load css where needed.
- `@` and `~` path aliases for `src` and `node_modules` paths respectively.
- 100% Responsive. AODA 1 Compliant.

## Developer Instructions
- `npm install` to install all dependencies - Requires Node 10 LTS.
- `npm run start` to start backend server.
- `npm run build` to build production frontend code.
- `npm run watch` to build production frontend code - watches file changes.
- `npm run dev-frontend` to run frontend dev server - watches file changes.
- `npm run dev-backend` to run backend dev server - watches file changes.
- `npm run dev` to run frontend & backend dev server - live preview & watches file changes.
- `npm run test` to run tests. (WIP)

## Testing
- To be implemented