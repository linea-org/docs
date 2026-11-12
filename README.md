# Linea documentation

The public documentation site for [Linea](https://github.com/linea-org/linea),
built with Next.js and Fumadocs and deployed on Vercel.

This repository was extracted from `apps/docs` in the `linea-org/linea`
monorepo with its history preserved. It has no workspace dependencies and
installs on its own.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3002
```

Copy `.env.example` to `.env` to enable the docs assistant and hosted search.
Without provider keys the site still builds and serves content; the assistant
reports that it is not configured and search falls back to the built-in index.

## Checks

CI runs exactly these on every push and pull request:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Content

Pages live in `content/docs` as MDX. Add new pages to the nearest `meta.json`
so navigation order stays explicit. See the
[contributing guide](content/docs/contributing.mdx) for conventions.

The content links to files that live in the monorepo (the ADRs, the OpenAPI
document, the route reference, `CONTRIBUTING.md`, `GLOSSARY.md`,
`SECURITY.md`) by GitHub URL rather than by copying them, so nothing here needs
to be regenerated from the monorepo on release. The one piece of shared logic
is `lib/ai-registry.ts`, a copy of the model-to-API-key table from
`packages/ai/src/registry.ts` in the monorepo; update it by hand when adding a
model to the docs assistant's candidate list.

## Search index

Hosted semantic search uses Upstash Vector. After configuring the REST
credentials in `.env`, re-index the MDX content with:

```bash
pnpm ingest
```

The command writes to a fresh namespace and prints the
`DOCS_VECTOR_NAMESPACE` value to deploy.
