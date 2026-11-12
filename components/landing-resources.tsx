import {
  ArrowUpRight,
  Blocks,
  Code2,
  GitPullRequest,
  History,
  Scale,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Architecture",
    description:
      "Understand the control plane, workers, and shared foundations that keep the system together.",
    href: "/docs/architecture",
    icon: Blocks,
    label: "The system",
    details: ["Control plane", "Execution workers", "Durable storage"],
  },
  {
    title: "Execution & recovery",
    description:
      "Follow a run from its first request through step records, checkpoints, and recovery.",
    href: "/docs/architecture/execution-flow",
    icon: History,
    label: "The lifecycle",
    details: ["01 / Queue", "02 / Execute", "03 / Checkpoint"],
  },
  {
    title: "Security",
    description:
      "Explore identity, scoped credentials, and the boundaries around every action.",
    href: "/docs/security",
    icon: ShieldCheck,
    label: "The boundaries",
    details: ["Identity", "Credentials", "Approvals"],
  },
  {
    title: "API & protocol",
    description:
      "Public contracts, authentication, and conventions for integrating with Linea.",
    href: "/docs/api",
    icon: Code2,
  },
  {
    title: "Architecture decisions",
    description:
      "The reasoning and trade-offs behind the choices we have made.",
    href: "/docs/decisions",
    icon: Scale,
  },
  {
    title: "Contributor guide",
    description:
      "Set up your environment and make your first code or documentation change.",
    href: "/docs/contributing",
    icon: GitPullRequest,
  },
]

export function LandingResources() {
  return (
    <section
      aria-label="Explore Linea documentation"
      className="mx-auto w-full max-w-6xl px-6 pt-4 pb-8 sm:pt-6 sm:pb-10"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map(
          ({ title, description, href, icon: Icon, label, details }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-fd-border bg-fd-card/30 transition-colors hover:border-fd-primary/50 hover:bg-fd-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
            >
              {details && (
                <div
                  aria-hidden="true"
                  className="flex min-h-52 flex-col justify-between border-b border-fd-border bg-fd-muted/40 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-fd-muted-foreground uppercase">
                      {label}
                    </span>
                    <Icon
                      className="size-6 text-fd-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    {details.map((detail, index) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 rounded border border-fd-border bg-fd-background/80 px-3 py-2 font-mono text-xs"
                      >
                        <span
                          className="h-3 w-1 shrink-0 bg-fd-primary"
                          style={{ opacity: 1 - index * 0.25 }}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {title}
                  </h3>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">
                  {description}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  )
}
