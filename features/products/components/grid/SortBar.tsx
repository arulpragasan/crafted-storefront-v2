"use client"

import { useProducts } from "@/features/products/context/products"

export function SortBar() {
  const { meta, query, setSort } = useProducts()

  const currentSort = query.sort ?? "newest"

  return (
    <div className="flex items-center justify-between border-b pb-6">

      <p className="text-sm text-neutral-500">
        {meta.total_count} Products
      </p>

      <select
        value={currentSort}
        onChange={(e) => setSort(e.target.value)}
        className="text-sm bg-transparent focus:outline-none cursor-pointer"
      >
        <option value="newest">Newest</option>
        <option value="price_low">Price: Low → High</option>
        <option value="price_high">Price: High → Low</option>
        <option value="designer">Designer A–Z</option>
      </select>

    </div>
  )
}