"use client"

import { ProductCard } from "@/features/products/components/card/ProductCard"
import { RevealOnView } from "@/components/motion/RevealOnView"
import { EmptyState } from "./EmptyState"

import { useProducts } from "@/features/products/context/products"

export function ProductGrid() {
  const { products } = useProducts()

  if (!products.length) {
    return (
      <div className="py-20 text-center text-sm text-neutral-500">
        <EmptyState />
      </div>
    )
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-x-6
        gap-y-12
      "
    >
      {products.map((product) => (
        <RevealOnView key={product.id}>
          <ProductCard
            name={product.name}
            brand={product.brand?.name}
            image={product.image_url}
            href={`/products/${product.slug}`}
          />
        </RevealOnView>
      ))}
    </div>
  )
}