import { notFound } from "next/navigation"
import { getProduct } from "@/lib/api/products"
import { ProductHero } from "@/components/product/ProductHero"

export const revalidate = 3600

export default async function ProductDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getProduct(slug)

  if (!data || !data.product) {
    notFound()
  }

  const {
    product,
    gallery = [],
    options = [],
    variants = [],
    variant_index = {},
  } = data

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-200">
      <ProductHero
        product={product}
        gallery={gallery}
        options={options}
        variants={variants}
        variantIndex={variant_index}
      />
    </main>
  )
}