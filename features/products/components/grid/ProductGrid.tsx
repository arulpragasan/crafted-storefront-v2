"use client"

import { ProductCard } from "@/components/commerce/ProductCard"
import { RevealOnView } from "@/components/motion/RevealOnView"

import { useProducts } from "@/features/products/context/products"

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002"

function resolveImageUrl(path?: string) {
  if (!path) return "/images/product-placeholder.jpg"
  if (path.startsWith("http")) return path
  return `${API_BASE}${path}`
}

export function ProductGrid() {
  const { products } = useProducts()

  if (!products?.length) {
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
      {products.map((product, index) => (
        <RevealOnView key={product.id}>
          <ProductCard
            name={product.name}
            brand={product.brand?.name}
            image={resolveImageUrl(product.image_url)}
            hoverImage={resolveImageUrl(product.hover_image_url)}
            href={`/products/${product.slug}`}
            priority={index < 4}
          />
        </RevealOnView>
      ))}
    </div>
  )
}