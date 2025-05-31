FROM node:23-alpine

# Enable pnpm using Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /usr/src/app

ARG CACHE_BUST


RUN echo "$CACHE_BUST" > /tmp/cache_bust_marker

# Copy workspace packages and configuration
# Copy monorepo files
# Copy root-level config files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy project folders
COPY apps ./apps
COPY packages ./packages


# Copy the websocket app
COPY ./apps/ws-server ./apps/ws-server

# Install dependencies
RUN corepack enable && pnpm install

# Run Prisma generate (requires script in root package.json)
RUN echo "Cache bust: $CACHE_BUST" && pnpm run db:generate 

EXPOSE 8081

# Start the websocket app
CMD ["pnpm", "run", "start:ws-server"]
