"use client"

import { ActiveFilters } from "@/features/products/components/filters/ActiveFilters"
import { ProductFilters } from "@/features/products/components/filters/ProductFilters"

export function ProductsSidebar() {
  return (
    <div className="space-y-12 lg:sticky lg:top-24 lg:self-start">

      <div className="border-b border-neutral-200 pb-6">
        <ActiveFilters />
      </div>

      <ProductFilters />

    </div>
  )
}