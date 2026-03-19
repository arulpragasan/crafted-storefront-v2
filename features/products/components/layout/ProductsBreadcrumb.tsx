"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { buildProductsUrl } from "@/lib/utils/buildProductsUrl"

type Props = {
  category?: string
  subcategory?: string
}

function format(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export function ProductsBreadcrumb({ category, subcategory }: Props) {
  const searchParams = useSearchParams()

  if (!category) return null

  const categoryHref = buildProductsUrl(searchParams, {
    category,
    subcategory: null,
  })

  return (
    <div className="px-6 mb-6 text-sm text-neutral-500">

      <Link href="/products" className="hover:text-black transition">
        Products
      </Link>

      <span className="mx-2">/</span>

      <Link href={categoryHref} className="hover:text-black transition">
        {format(category)}
      </Link>

      {subcategory && (
        <>
          <span className="mx-2">/</span>
          <span className="text-neutral-800">
            {format(subcategory)}
          </span>
        </>
      )}

    </div>
  )
}