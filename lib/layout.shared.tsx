import { LineaMark } from "@/components/linea-mark"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { Code2, Library, ListChecks } from "lucide-react"
import { gitConfig } from "./shared"

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`

function navTitle(separated: boolean) {
  return (
    <span
      className={`flex items-center gap-2 font-semibold ${separated ? "sm:border-e sm:border-fd-border sm:pe-6" : ""}`}
    >
      <LineaMark />
      Linea Docs
    </span>
  )
}

export function homeOptions(): BaseLayoutProps {
  return {
    nav: {
      title: navTitle(true),
    },
    githubUrl,
    links: [
      {
        text: "Guides",
        url: "/docs/guides",
        icon: <ListChecks />,
      },
      {
        text: "Reference",
        url: "/docs/reference",
        icon: <Code2 />,
      },
      {
        text: "Explanation",
        url: "/docs/explanation",
        icon: <Library />,
      },
    ],
  }
}

export function docsOptions(): BaseLayoutProps {
  return {
    nav: {
      title: navTitle(false),
    },
  }
}
