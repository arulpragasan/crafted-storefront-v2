"use client"

import { ProductGrid } from "@/features/products/components/grid/ProductGrid"
import { Pagination } from "@/features/products/components/grid/Pagination"
import { SortBar } from "@/features/products/components/grid/SortBar"
import { EmptyState } from "@/features/products/components/grid/EmptyState"


import { useProducts } from "@/features/products/context/products"

export function ProductsGridSection() {
  const { products, meta } = useProducts()

  // const hasProducts = products && products.length > 0
  const hasProducts = Array.isArray(products) && products.length > 0
  // const hasProducts = false

  return (
    <section className="space-y-10">


      {hasProducts ? (
        <div className="transition-opacity duration-300 ease-out">
          <ProductGrid />
        </div>
      ) : (
        <div className="py-20 text-center text-sm text-neutral-500">
          <EmptyState />
        </div>
      )}

      {meta?.total_pages > 1 && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.total_pages}
        />
      )}

    </section>
  )
}