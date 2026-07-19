import { notFound } from "next/navigation"
import { getProduct } from "@/features/products/product-details/api/product/"

import {
  Breadcrumbs,
  CraftStory,
  DesignerNote,
  MoreFromBrand,
  ProductActions,
  ProductDetails,
  ProductFloatingBar,
  ProductHero,
  ProductInfo
} from "@/features/products/product-details"

export default async function ProductDetailsPage({ params }) {

  const { slug } = await params
  const data = await getProduct(slug)

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
    details = null,
    designer_note = null,
    recommendations = {},
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

        <CraftStory
          story={{
            title: "The Craft",
            description: product.description,
          }}
        />

        <ProductDetails
          details={
            Object.values(details || {}).some(Boolean)
              ? details
              : {
                  material: "Raw Silk",
                  craft: "Hand Embroidery",
                  origin: "India",
                  care: "Dry Clean Only",
                }
          }
        />

        <DesignerNote note={designer_note} />

        <MoreFromBrand
          products={recommendations.more_from_brand}
          brandName={product.brand?.name}
        />

      </section>

    </main>
  )
}
