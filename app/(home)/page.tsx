import { LandingStartPanel } from "@/components/landing-start-panel"
import { LandingResources } from "@/components/landing-resources"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Linea Docs" },
  description:
    "Linea is a runtime and control plane for production agents. Its SDKs and protocol are open source under Apache 2.0.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl leading-[1.12] font-semibold tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
              Linea docs
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pretty text-fd-muted-foreground">
              Linea is a runtime and control plane for production agents. Its
              SDKs and protocol are open source under Apache 2.0.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Link
                href="/docs/getting-started"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-fd-primary px-3 text-sm font-medium whitespace-nowrap text-fd-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring sm:px-4"
              >
                Get started
                <ArrowRight
                  className="hidden size-4 sm:block"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/docs/explanation"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-fd-border bg-fd-background px-3 text-sm font-medium whitespace-nowrap transition-colors hover:bg-fd-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fd-ring sm:px-4"
              >
                <span className="sm:hidden">Explanation</span>
                <span className="hidden sm:inline">Read the explanation</span>
              </Link>
            </div>
          </div>
          <LandingStartPanel />
        </div>
      </section>
      <LandingResources />
    </main>
  )
}
