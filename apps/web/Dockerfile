FROM node:14-alpine as docker-install
WORKDIR /dist
COPY . .
RUN --mount=type=cache,target=/dist/.yarn/cache \
    npx turbo prune --scope=@tkodev/web && \
    cp -R .npmrc .yarn .yarnrc.yml tsconfig.json out/ && \
    cd out && \
    yarn install && \
    yarn build && \
    yarn workspaces focus --all --production && \
    rm -rf node_modules/.cache .yarn/cache apps/web/.next/cache

FROM node:14-alpine as docker-app
WORKDIR /dist
COPY --chown=node:node --from=docker-install /dist/out .
WORKDIR /dist/apps/web
USER 1001
ENV NODE_ENV=production
ENV PORT 80
EXPOSE 80
CMD ["yarn", "start"]