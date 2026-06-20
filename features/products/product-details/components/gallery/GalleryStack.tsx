"use client"

import { ProductImageZoom } from "./ProductImageZoom"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type GalleryImage = {
  url: string
}

type GalleryStackProps = {
  images: GalleryImage[]
  imageRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
}

export function GalleryStack({ images, imageRefs }: GalleryStackProps) {

  return (
    <div className="flex flex-col gap-6">

      {images.map((img, i) => (

        <div
          key={i}
          ref={(el) => {
            imageRefs.current[i] = el
          }}
          className="relative aspect-[3/4]"
        >

          <ProductImageZoom
            src={getImageUrl(img.url)}
          />

        </div>

      ))}

    </div>
  )
}
