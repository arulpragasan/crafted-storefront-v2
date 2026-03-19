"use client"

import { ProductFilters } from "./ProductFilters"
import { useProductCount } from "@/features/products/components/filters/useProductCount"

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileFilterModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-medium">Filters</h2>
        <button onClick={onClose}>Close</button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <ProductFilters />
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-3 text-sm"
        >
          Show results
        </button>
      </div>

    </div>
  )
}