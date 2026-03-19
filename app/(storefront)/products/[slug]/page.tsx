import { notFound } from "next/navigation"
import { getProduct } from "@/features/products/product-details/api/product/"

import {
  Breadcrumbs,
  ProductHero,
  ProductFloatingBar
} from "@/features/products/product-details"

export default async function ProductDetailsPage({ params }) {

  const { slug } = await params
  const data = await getProduct(slug)
console.log(data)
  if (!data?.product) {
    notFound()
  }

  const {
    breadcrumbs = [],
    product,
    gallery = [],
    options = [],
    variants = [],
    variant_index = {},
  } = data

  return (
    <main className="min-h-screen bg-stone-50">

      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">

        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6">
          <ProductHero
            product={product}
            gallery={gallery}
            options={options}
            variants={variants}
            variantIndex={variant_index}
          />
        </div>

      </section>

    </main>
  )
}