import { ProductCard } from "@/features/products/components/card/ProductCard"

type Props = {
  products: any[] | null | undefined
  brandName?: string
}

export function MoreFromBrand({
  products,
  brandName,
}: Props) {
  if (!products || products.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200">

      <h2 className="mb-10 text-xs uppercase tracking-widest text-neutral-400">
        {brandName
          ? `More from ${brandName}`
          : "More from this designer"}
      </h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price}
            href={`/products/${product.slug}`}
            aspect="portrait"
          />
        ))}
      </div>

    </section>
  )
}