import { ProductActions } from "./ProductActions"

export function ProductInfo({ product }) {

  return (
    <div className="sticky top-32 space-y-8">

      <div>

        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {product.brand_name}
        </p>

        <h1 className="text-3xl font-light mt-2">
          {product.name}
        </h1>

      </div>

      <ProductActions />

      {product.description && (
        <p className="text-sm text-neutral-600 leading-relaxed">
          {product.description}
        </p>
      )}

    </div>
  )
}