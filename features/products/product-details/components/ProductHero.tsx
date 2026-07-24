import { ProductGallery } from "./gallery/ProductGallery"
import { ProductInfo } from "./ProductInfo"

type Theme = {
  name: string
  slug: string
}

type Occasion = {
  name: string
  slug: string
}

type GalleryImage = {
  id: number
  position: number
  url: string
}

type Props = {
  product: any
  gallery: GalleryImage[]
  options: any[]
  variants: any[]
  variantIndex: Record<string, any>
  themes?: Theme[]
  occasions?: Occasion[]
}

export function ProductHero({
  product,
  gallery,
  options,
  variants,
  variantIndex,
  themes = [],
  occasions = [],
}: Props) {
  const galleryImages = gallery.map((image) => image.url)

  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-16">
      <ProductGallery images={galleryImages} />

      <ProductInfo
        product={product}
        options={options}
        variants={variants}
        variantIndex={variantIndex}
        themes={themes}
        occasions={occasions}
      />
    </div>
  )
}