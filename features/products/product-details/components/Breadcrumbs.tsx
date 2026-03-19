import Link from "next/link"

export function Breadcrumbs({ items }) {

  if (!items?.length) return null

  return (
    <nav className="text-sm text-neutral-500 mb-6">

      {items.map((item, i) => (
        <span key={item.slug}>

          <Link href={item.url} className="hover:text-black">
            {item.name}
          </Link>

          {i < items.length - 1 && " / "}

        </span>
      ))}

    </nav>
  )
}