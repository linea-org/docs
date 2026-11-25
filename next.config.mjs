import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import("next").NextConfig} */
const config = {
  agentRules: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs/modules/:path*",
        destination: "/docs/getting-started",
        permanent: true,
      },
      {
        source: "/docs/nodes/:path*",
        destination: "/docs/explanation",
        permanent: true,
      },
      {
        source: "/docs/reference/api-keys",
        destination: "/docs/reference/authentication",
        permanent: true,
      },
      {
        source: "/docs/architecture/repository-map",
        destination: "/docs/reference/repositories",
        permanent: true,
      },
      {
        source: "/docs/architecture/execution-flow",
        destination: "/docs/explanation/executions",
        permanent: true,
      },
      {
        source: "/docs/architecture",
        destination: "/docs/explanation",
        permanent: true,
      },
      {
        source: "/docs/api/authentication",
        destination: "/docs/reference/authentication",
        permanent: true,
      },
      {
        source: "/docs/api/conventions",
        destination: "/docs/reference/conventions",
        permanent: true,
      },
      {
        source: "/docs/api",
        destination: "/docs/reference/api",
        permanent: true,
      },
      {
        source: "/docs/security/trust-boundaries",
        destination: "/docs/explanation/trust-boundaries",
        permanent: true,
      },
      {
        source: "/docs/security/approvals-and-actions",
        destination: "/docs/explanation/approvals",
        permanent: true,
      },
      {
        source: "/docs/security",
        destination: "/docs/explanation/security",
        permanent: true,
      },
      {
        source: "/docs/decisions",
        destination: "/docs/explanation",
        permanent: true,
      },
      {
        source: "/docs/contributing",
        destination: "/docs/guides/contributing",
        permanent: true,
      },
    ]
  },
}

export default withMDX(config)
