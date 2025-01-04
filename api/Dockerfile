# BUILD
FROM node:22.12.0-alpine AS entain_api_build
WORKDIR /usr/src/app

RUN corepack enable
RUN corepack prepare pnpm@9.15.2 --activate

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod
COPY --chown=node:node . .

RUN pnpm install
RUN pnpm build

ENV NODE_ENV production
RUN pnpm install --prod

USER node

# PRODUCTION
FROM node:22.12.0-alpine AS entain_api_production

COPY --chown=node:node --from=entain_api_build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=entain_api_build /usr/src/app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
