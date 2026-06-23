"use client"

import { ActiveFilters } from "@/features/products/components/filters/ActiveFilters"
import { ProductFilters } from "@/features/products/components/filters/ProductFilters"

export function ProductsSidebar() {
  return (
    <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">

      <ActiveFilters />

      <ProductFilters />

    </aside>
  )
}
