import Link from "next/link"

export type BreadcrumbItem = {
  slug: string
  url: string
  name: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-neutral-500"
    >
      {items.map((item, index) => (
        <span key={item.slug}>
          <Link
            href={item.url}
            className="hover:text-black"
          >
            {item.name}
          </Link>

          {index < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  )
}