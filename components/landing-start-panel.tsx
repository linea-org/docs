import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    title: "Run one Agent",
    description: "Start a deployed Agent with the open example.",
    href: "/docs/getting-started",
  },
  {
    title: "Call the API",
    description: "Choose a client and read an Execution back.",
    href: "/docs/guides/call-the-api",
  },
  {
    title: "Look up a term",
    description: "Workflow, Agent, Execution, Environment, and the rest.",
    href: "/docs/reference/glossary",
  },
]

export function LandingStartPanel() {
  return (
    <aside aria-label="Start here" className="mt-12 sm:mt-14">
      <nav
        aria-label="Getting started with Linea"
        className="grid gap-2 md:grid-cols-3 md:gap-4"
      >
        {steps.map((step, index) => (
          <Link
            key={step.href}
            href={step.href}
            className="group flex items-start gap-3 rounded-lg border border-fd-border bg-fd-card/30 px-4 py-4 transition-colors hover:border-fd-primary/50 hover:bg-fd-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
          >
            <span className="pt-0.5 font-mono text-xs text-fd-muted-foreground">
              0{index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">
                {step.description}
              </p>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-fd-muted-foreground group-hover:text-fd-foreground"
            />
          </Link>
        ))}
      </nav>
    </aside>
  )
}
