"use client"

import { ProductImageZoom } from "./ProductImageZoom"

const IMAGE_HOST = process.env.NEXT_PUBLIC_IMAGE_HOST

export function GalleryStack({ images, imageRefs }) {

  return (
    <div className="flex flex-col gap-6">

      {images.map((img, i) => (

        <div
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          className="relative aspect-[3/4]"
        >

          <ProductImageZoom
            src={`${IMAGE_HOST}${img.url}`}
          />

        </div>

      ))}

    </div>
  )
}