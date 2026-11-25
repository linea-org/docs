import {
  ArrowUpRight,
  BookMarked,
  BookOpen,
  Code2,
  GitPullRequest,
  ListChecks,
} from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Getting started",
    description: "Run one deployed Agent with the open company app example.",
    href: "/docs/getting-started",
    icon: BookOpen,
    label: "Tutorial",
    details: ["01 / Deploy", "02 / Start", "03 / Read status"],
  },
  {
    title: "How-to guides",
    description: "Add a connector, set up approvals, and call the public API.",
    href: "/docs/guides",
    icon: ListChecks,
    label: "Tasks",
    details: ["Connectors", "Approvals", "Environments"],
  },
  {
    title: "Reference",
    description:
      "SDK clients, the 50 registered operations, config, and the glossary.",
    href: "/docs/reference",
    icon: Code2,
    label: "Lookup",
    details: ["SDK", "Public API", "Glossary"],
  },
  {
    title: "Explanation",
    description:
      "How runs, environments, versions, and approvals fit together.",
    href: "/docs/explanation",
    icon: BookMarked,
    label: "Model",
    details: ["Runtime", "Executions", "Approvals"],
  },
  {
    title: "Glossary",
    description:
      "Workflow, Agent, Execution, Environment, and the other code names.",
    href: "/docs/reference/glossary",
    icon: BookOpen,
  },
  {
    title: "Contributor guide",
    description: "Change the SDKs, the protocol, or these docs.",
    href: "/docs/guides/contributing",
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
