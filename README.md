# Linea documentation

The public documentation site for [Linea](https://github.com/linea-org/linea),
built with Next.js and Fumadocs and deployed on Vercel.

It has no workspace dependencies and installs on its own.

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
[contributing guide](content/docs/guides/contributing.mdx) for conventions.

Pages follow the Diátaxis sections in `content/docs`: a getting-started
tutorial, how-to guides, reference, and explanation. The reference links to
the OpenAPI document and route reference in `linea-org/linea` by GitHub URL.
When you add a model to the docs assistant's candidate list, add it to
`lib/ai-registry.ts` too.

## Search index

Hosted semantic search uses Upstash Vector. After configuring the REST
credentials in `.env`, re-index the MDX content with:

```bash
pnpm ingest
```

The command writes to a fresh namespace and prints the
`DOCS_VECTOR_NAMESPACE` value to deploy.

## License

[Apache License 2.0](LICENSE).
