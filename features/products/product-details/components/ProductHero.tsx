import { ProductGallery } from "./gallery/ProductGallery"
import { ProductInfo } from "./ProductInfo"

type Props = {
  product: any
  gallery: string[]
  options: any[]
  variants: any[]
  variantIndex: Record<string, any>
}

export function ProductHero({
  product,
  gallery,
  options,
  variants,
  variantIndex,
}: Props) {

  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-16">

      <ProductGallery images={gallery} />

      <ProductInfo
        product={product}
        options={options}
        variants={variants}
        variantIndex={variantIndex}
      />

    </div>
  )
}