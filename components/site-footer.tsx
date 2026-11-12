import { LineaMark } from "@/components/linea-mark"
import Link from "next/link"

const linkGroups = [
  {
    title: "Documentation",
    links: [
      { title: "Getting started", href: "/docs/getting-started" },
      { title: "Architecture", href: "/docs/architecture" },
      { title: "API reference", href: "/docs/api" },
      { title: "Security", href: "/docs/security" },
    ],
  },
  {
    title: "Build with us",
    links: [
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Repository map", href: "/docs/architecture/repository-map" },
      { title: "Architecture decisions", href: "/docs/decisions" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-fd-background">
      <div className="mx-auto w-full max-w-6xl px-6">
        <hr className="m-0 border-0 border-t border-fd-border" />
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 pt-8 pb-6 sm:pt-10 md:grid-cols-[minmax(0,1.2fr)_1fr_1fr] md:gap-x-10 md:pb-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-sm text-xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
            >
              <LineaMark />
              Linea
              <span className="font-normal text-fd-muted-foreground">
                / Docs
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-fd-muted-foreground">
              The runtime that remembers.
            </p>
          </div>
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-9 items-center rounded-sm py-1 text-sm leading-5 text-fd-muted-foreground transition-colors hover:text-fd-foreground hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="py-3 text-center text-xs text-fd-muted-foreground">
          <p>© {new Date().getFullYear()} Linea. Built in the open.</p>
        </div>
      </div>
    </footer>
  )
}
