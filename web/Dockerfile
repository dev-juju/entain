# BUILD
FROM node:22.12.0-alpine as entain_web_build
WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@9.15.2 --activate

COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod
COPY --chown=node:node . .

ARG version
ENV NEXT_PUBLIC_APP_VERSION $version

RUN pnpm install
RUN pnpm build

USER node

# PRODUCTION
FROM node:22.12.0-alpine as entain_web_production
WORKDIR /app

COPY --from=entain_web_build /app/package.json .
COPY --from=entain_web_build /app/pnpm-lock.yaml .
COPY --from=entain_web_build /app/next.config.ts .
COPY --from=entain_web_build /app/.next/standalone ./
COPY --from=entain_web_build /app/public ./public
COPY --from=entain_web_build /app/.next/static ./.next/static

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
