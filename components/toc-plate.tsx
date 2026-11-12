"use client"

import { ArrowUp } from "lucide-react"

export function TocPlate() {
  return (
    <div className="mt-auto flex justify-center pt-6 pb-2">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-2.5 py-1.5 text-xs text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground"
      >
        <ArrowUp className="size-3" />
        Back to top
      </button>
    </div>
  )
}
