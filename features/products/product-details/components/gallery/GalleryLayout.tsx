"use client"

import { GalleryRail } from "./GalleryRail"
import { ProductImageZoom } from "./ProductImageZoom"
import { useGallery } from "../context/GalleryContext"

const IMAGE_HOST = process.env.NEXT_PUBLIC_IMAGE_HOST

export function GalleryLayout() {

  const { images, activeIndex, openFullscreen } = useGallery()

  const activeImage = images[activeIndex]

  return (
    <div className="grid grid-cols-[80px_1fr] gap-6">

      <GalleryRail />

      <ProductImageZoom
        src={`${IMAGE_HOST}${activeImage.url}`}
        onClick={openFullscreen}
      />

    </div>
  )
}