import Link from "next/link"

type DocsLinkItem = {
  title: string
  href: string
  description?: string
}

export function DocsLinks({ items }: { items: DocsLinkItem[] }) {
  return (
    <nav className="not-prose my-6 flex flex-col">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group border-t border-fd-border py-3 last:border-b"
        >
          <p className="font-display font-semibold tracking-tight group-hover:text-fd-primary">
            {item.title}
          </p>
          {item.description && (
            <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">
              {item.description}
            </p>
          )}
        </Link>
      ))}
    </nav>
  )
}
